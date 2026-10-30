import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parmana Systems",
  description:
    "Parmana checks each action against the limits your business has set, whether a person or a machine takes it, and keeps a record anyone can verify.",
  metadataBase: new URL("https://parmanasystems.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
