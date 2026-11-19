import type { Metadata } from "next";
import "./globals.css";

const siteName = "Parmana Systems";
const description =
  "The Business Authority Layer for autonomous systems. Parmana helps enterprises define delegated business authority, enforce it deterministically before execution and verify evidence of what happened.";

export const metadata: Metadata = {
  metadataBase: new URL("https://parmanasystems.com"),
  title: {
    default: "Parmana Systems | The Business Authority Layer",
    template: "%s | Parmana Systems",
  },
  description,
  manifest: "/site.webmanifest",
  icons: {
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  keywords: [
    "business authority",
    "AI agent authorization",
    "deterministic enforcement",
    "autonomous business systems",
    "cryptographic evidence",
    "agent execution control",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    siteName,
    type: "website",
    title: "Parmana Systems | The Business Authority Layer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Parmana Systems | The Business Authority Layer",
    description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteName,
              url: "https://parmanasystems.com",
              description,
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
