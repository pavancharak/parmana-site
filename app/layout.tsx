import type { Metadata } from "next";
import "./globals.css";

const siteName = "Parmana Systems";
const description =
  "Parmana checks AI agent requests in connected workflows against the limits your business sets, and keeps a record of each check.";

export const metadata: Metadata = {
  metadataBase: new URL("https://parmanasystems.com"),
  title: {
    default: "Control for AI agents in connected workflows",
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
    title: "Control for AI agents in connected workflows",
    description,
  },
  twitter: {
    card: "summary",
    title: "Control for AI agents in connected workflows",
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
