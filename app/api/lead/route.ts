import { NextRequest } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

// hCaptcha test secret — set HCAPTCHA_SECRET in prod.
const HCAPTCHA_SECRET =
  process.env.HCAPTCHA_SECRET ||
  "0x0000000000000000000000000000000000000000";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const interest = String(body.interest ?? "").trim();
  const hcaptchaToken = String(body.hcaptchaToken ?? "").trim();

  if (!name || !phone || !email) {
    return Response.json(
      { error: "Name, phone, and email are required." },
      { status: 400 },
    );
  }

  if (!hcaptchaToken) {
    return Response.json(
      { error: "Please complete the captcha." },
      { status: 400 },
    );
  }

  try {
    const verifyRes = await fetch("https://api.hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: HCAPTCHA_SECRET,
        response: hcaptchaToken,
      }),
    });
    const verify = (await verifyRes.json()) as { success?: boolean };
    if (!verify.success) {
      return Response.json(
        { error: "Captcha verification failed. Please try again." },
        { status: 400 },
      );
    }
  } catch {
    return Response.json(
      { error: "Could not verify captcha. Please try again." },
      { status: 502 },
    );
  }

  const lead = {
    name,
    phone,
    email,
    interest,
    receivedAt: new Date().toISOString(),
    userAgent: req.headers.get("user-agent") ?? "",
    referer: req.headers.get("referer") ?? "",
  };

  const dataDir = path.join(process.cwd(), "data");
  await fs.mkdir(dataDir, { recursive: true });
  await fs.appendFile(
    path.join(dataDir, "leads.jsonl"),
    JSON.stringify(lead) + "\n",
    "utf8",
  );

  console.log("[lead]", lead);

  return Response.json({ ok: true });
}
