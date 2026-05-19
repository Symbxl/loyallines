"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "hero" | "section";

type HCaptchaRenderOptions = {
  sitekey: string;
  theme?: "light" | "dark";
  size?: "normal" | "compact" | "invisible";
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
};

declare global {
  interface Window {
    hcaptcha?: {
      render: (container: HTMLElement | string, opts: HCaptchaRenderOptions) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
      getResponse: (widgetId?: string) => string;
    };
  }
}

// hCaptcha test site key — replace with NEXT_PUBLIC_HCAPTCHA_SITE_KEY in prod.
const SITE_KEY =
  process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ||
  "10000000-ffff-ffff-ffff-000000000001";

export default function LeadForm({ variant = "hero" }: { variant?: Variant }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [errMsg, setErrMsg] = useState<string>("");
  const [captchaToken, setCaptchaToken] = useState<string>("");

  const captchaContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    function tryRender() {
      if (cancelled) return;
      const container = captchaContainerRef.current;
      if (!window.hcaptcha || !container) {
        timer = setTimeout(tryRender, 150);
        return;
      }
      if (widgetIdRef.current) return;
      widgetIdRef.current = window.hcaptcha.render(container, {
        sitekey: SITE_KEY,
        theme: "dark",
        callback: (token) => setCaptchaToken(token),
        "expired-callback": () => setCaptchaToken(""),
        "error-callback": () => setCaptchaToken(""),
      });
    }

    tryRender();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
      const id = widgetIdRef.current;
      if (id && window.hcaptcha?.remove) {
        try {
          window.hcaptcha.remove(id);
        } catch {
          // widget may already be gone
        }
      }
      widgetIdRef.current = null;
    };
  }, []);

  function resetCaptcha() {
    setCaptchaToken("");
    const id = widgetIdRef.current;
    if (id && window.hcaptcha?.reset) {
      try {
        window.hcaptcha.reset(id);
      } catch {
        // ignore
      }
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!captchaToken) {
      setStatus("err");
      setErrMsg("Please complete the captcha.");
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    setErrMsg("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, hcaptchaToken: captchaToken }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("ok");
      form.reset();
      resetCaptcha();
    } catch (e) {
      setStatus("err");
      setErrMsg(e instanceof Error ? e.message : "Something went wrong.");
      resetCaptcha();
    }
  }

  const isHero = variant === "hero";
  const wrapCls = isHero
    ? "bg-stone-950/85 backdrop-blur-md border border-stone-800 rounded-2xl p-6 sm:p-7 shadow-2xl shadow-black/50"
    : "bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8";

  if (status === "ok") {
    return (
      <div className={wrapCls}>
        <div className="text-center py-6">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-[#c8924a]/15 border border-[#c8924a]/40 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#c8924a]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="font-display text-2xl text-stone-50 mb-2">You're on the list.</h3>
          <p className="text-stone-400 text-sm leading-relaxed">
            Thanks for reaching out. We'll text or call you within 24 hours with
            available puppies and next steps.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={wrapCls} noValidate>
      <div className="mb-5">
        <h3 className="font-display text-2xl sm:text-[26px] leading-tight text-stone-50">
          See available puppies
        </h3>
        <p className="text-sm text-stone-400 mt-1.5">
          Tell us what you're looking for. We'll reply within 24 hours.
        </p>
      </div>

      <div className="space-y-3.5">
        <Field
          label="Your name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Jane Doe"
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          placeholder="(555) 123-4567"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
        />
        <div>
          <label className="block text-xs font-medium text-stone-300 mb-1.5">
            What are you looking for?
          </label>
          <select
            name="interest"
            required
            defaultValue=""
            className="w-full h-11 px-3 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-[#c8924a] focus:ring-2 focus:ring-[#c8924a]/30 transition"
          >
            <option value="" disabled>Select one…</option>
            <option value="male-puppy">Male puppy</option>
            <option value="female-puppy">Female puppy</option>
            <option value="either-puppy">Either — first available</option>
            <option value="trained-adult">Trained adult</option>
            <option value="just-info">Just gathering info</option>
          </select>
        </div>
      </div>

      <div ref={captchaContainerRef} className="mt-5 flex justify-center min-h-[78px]" />

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 w-full h-12 rounded-lg bg-[#c8924a] hover:bg-[#b07c30] disabled:opacity-60 disabled:cursor-not-allowed text-stone-950 font-semibold text-[15px] tracking-wide transition shadow-lg shadow-[#c8924a]/20"
      >
        {status === "loading" ? "Sending…" : "Get available puppies →"}
      </button>

      {status === "err" && (
        <p className="text-red-400 text-xs mt-3 text-center">{errMsg}</p>
      )}

      <p className="text-[11px] text-stone-500 mt-3 text-center leading-relaxed">
        No spam. We'll only contact you about Loyal Lines puppies.
      </p>
    </form>
  );
}

function Field({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-medium text-stone-300 mb-1.5">
        {label}
      </label>
      <input
        {...rest}
        className="w-full h-11 px-3 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none focus:border-[#c8924a] focus:ring-2 focus:ring-[#c8924a]/30 transition"
      />
    </div>
  );
}
