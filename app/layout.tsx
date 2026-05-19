import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Loyal Lines Shepherds — Premium Brown & Black German Shepherd Puppies",
  description:
    "Family-raised, health-tested brown and black German Shepherd puppies. AKC registered, lifetime support, genetic health guarantee. Reserve a puppy today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0c0a09] text-stone-100">
        {children}
        <Script
          src="https://js.hcaptcha.com/1/api.js?render=explicit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
