import type { Metadata } from "next";
import "./globals.css";

const title = "Parmana | AI that stays within the rules you set";
const description =
  "Parmana checks every AI action against the rules you set, asks a person to approve where needed, and keeps a record anyone can check.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://parmanasystems.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://parmanasystems.com/",
    siteName: "Parmana",
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
