import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parmana Systems | Control for AI That Acts for Your Business",
  description:
    "Parmana lets businesses set clear limits on what AI can do, checks every action against those limits, and keeps a record of each decision.",
  metadataBase: new URL("https://parmanasystems.com"),
  openGraph: {
    title: "Parmana Systems | Control for AI That Acts for Your Business",
    description:
      "AI can act for your business, within limits you set. Parmana checks every action and keeps the record.",
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
