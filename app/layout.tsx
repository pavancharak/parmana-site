import type { Metadata } from "next";
import "./globals.css";

const siteName = "Parmana Systems";
const description =
  "Parmana checks every action an AI agent takes against the limits you set, requires signed approval where policy needs it, and records what was authorized and what happened.";

export const metadata: Metadata = {
  metadataBase: new URL("https://parmanasystems.com"),
  title: {
    default: "Authority for AI agents, enforced outside the prompt",
    template: "%s | Parmana Systems",
  },
  description,
  manifest: "/site.webmanifest",
  icons: {
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  keywords: ["AI agent authorization", "AI governance", "verifiable evidence", "execution control"],
  robots: { index: true, follow: true },
  openGraph: {
    siteName,
    type: "website",
    title: "Authority for AI agents, enforced outside the prompt",
    description,
  },
  twitter: {
    card: "summary",
    title: "Authority for AI agents, enforced outside the prompt",
    description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
