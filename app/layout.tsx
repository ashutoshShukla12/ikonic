import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IKONIC Barbershop | Premium Men's Grooming",
  description:
    "Experience premium grooming at IKONIC Barbershop. We offer expert haircuts, beard trims, and top-tier styling services.",
  keywords: [
    "barbershop",
    "haircut",
    "men's grooming",
    "fade",
    "beard trim",
    "IKONIC barbershop",
    "hair salon",
    "elmira hair salon",
    "elmira barbershop",
    "waterloo hair salon",
    "waterloo barbershop",
    "barbershop elmira",
    "barbershop waterloo",
    "hair salon elmira",
    "hair salon waterloo",
    "hair salon elmira ontario",
    "hair salon waterloo ontario",
    "premium barbershop",
    "premium hairsalon",
    "outline studios",
  ],
  metadataBase: new URL("https://ikonicbarbershop.ca"),
  openGraph: {
    title: "IKONIC Barbershop | Premium Men's Grooming",
    description:
      "Experience premium grooming at IKONIC Barbershop. We offer expert haircuts, beard trims, and top-tier styling services.",
    url: "https://ikonicbarbershop.ca",
    siteName: "IKONIC Barbershop",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IKONIC Barbershop | Premium Men's Grooming",
    description: "Experience premium grooming at IKONIC Barbershop.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
