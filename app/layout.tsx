import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parmana Systems | Deterministic Governance for AI Execution",
  description:
    "Parmana helps ensure AI agents execute only what has been explicitly authorized, with deterministic enforcement and verifiable evidence.",
  metadataBase: new URL("https://parmanasystems.com"),
  openGraph: {
    title: "Parmana Systems | The Execution Integrity Layer for AI",
    description:
      "AI can decide. Your business sets the authority. Control what AI agents are allowed to execute.",
    url: "https://parmanasystems.com",
    siteName: "Parmana Systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
