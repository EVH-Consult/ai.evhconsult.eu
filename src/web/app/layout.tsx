import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ai.evhconsult.eu"),
  title: "AI at EVH Consult",
  description: "EVH Consult's public space for practical, portable and responsible AI experimentation.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "AI at EVH Consult",
    description: "EVH Consult's public space for practical, portable and responsible AI experimentation.",
    siteName: "AI at EVH Consult",
  },
  icons: {
    icon: "/evh-consult-mark-transparent.png",
    shortcut: "/evh-consult-mark-transparent.png",
    apple: "/evh-consult-mark-transparent.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const analyticsDomain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;
  const analyticsScript = process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT;
  return (
    <html lang="en">
      <head>{analyticsDomain && analyticsScript ? <script defer data-domain={analyticsDomain} src={analyticsScript} /> : null}</head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
