import type { Metadata } from "next";
import "./globals.css";

const title = "Parmana Systems | Trust Through Independent Verification";
const description =
  "Parmana Systems helps organisations define authority, approve actions and create independently verifiable records across people, software and AI agents.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://parmanasystems.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://parmanasystems.com/",
    siteName: "Parmana Systems",
    type: "website",
  },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
