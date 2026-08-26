import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./evhc-45-responsive.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai.evhconsult.eu"),
  applicationName: "AI at EVH Consult",
  title: "AI at EVH Consult",
  description: "EVH Consult's public space for practical, portable and responsible AI experimentation.",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "AI at EVH Consult",
    description: "EVH Consult's public space for practical, portable and responsible AI experimentation.",
    siteName: "AI at EVH Consult",
    images: [
      {
        url: "/social-card.png",
        width: 1200,
        height: 630,
        alt: "AI at EVH Consult — practical, portable and responsible AI experimentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI at EVH Consult",
    description: "EVH Consult's public space for practical, portable and responsible AI experimentation.",
    images: ["/social-card.png"],
  },
  icons: {
    icon: "/evh-consult-mark-transparent.png",
    shortcut: "/evh-consult-mark-transparent.png",
    apple: "/evh-consult-mark-transparent.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://evhconsult.eu/#organization",
      name: "EVH Consult",
      url: "https://evhconsult.eu/",
      logo: "https://ai.evhconsult.eu/evh-consult-logo-transparent.png",
    },
    {
      "@type": "WebSite",
      "@id": "https://ai.evhconsult.eu/#website",
      name: "AI at EVH Consult",
      url: "https://ai.evhconsult.eu/",
      description: "EVH Consult's public space for practical, portable and responsible AI experimentation.",
      publisher: { "@id": "https://evhconsult.eu/#organization" },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script src="/consent.js" strategy="beforeInteractive" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
