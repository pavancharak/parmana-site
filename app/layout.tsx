import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parmana vision and mission",
  description: "A world where actions taken on people's behalf can be trusted, because they can always be checked.",
  metadataBase: new URL("https://parmanasystems.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
