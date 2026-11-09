import type { Metadata } from "next";
import "./globals.css";

const siteName = "Parmana Systems";
const description =
  "Parmana checks AI agent requests routed through configured business workflows against the authority your business sets, and records those checks.";

export const metadata: Metadata = {
  metadataBase: new URL("https://parmanasystems.com"),
  title: {
    default: "Control for AI agents in connected workflows",
    template: "%s | Parmana Systems",
  },
  description,
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
      <body>{children}</body>
    </html>
  );
}
