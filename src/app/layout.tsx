import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "GODZ-i | AI Automation Systems for Marketing Agencies",
  description:
    "AI automation systems built for marketing agencies. We automate content generation, client onboarding, lead follow up, reporting, and GEO SEO so you can scale without adding headcount.",
  robots: "index, follow",
  openGraph: {
    title: "GODZ-i | AI Automation Systems for Marketing Agencies",
    description:
      "We help marketing agencies generate leads, produce content, and run operations without adding headcount.",
    type: "website",
    url: "https://godz-i.com",
  },
  icons: {
    icon: "/godzi_icon.png",
  },
  appleWebApp: {
    capable: true,
    title: "GODZ-i",
    statusBarStyle: "black-translucent",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
