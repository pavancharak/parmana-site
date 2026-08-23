import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://parmanasystems.com"),
  title: "Parmana | Authority Infrastructure for AI",
  description:
    "Institutional authority infrastructure for autonomous systems. Ensure every AI action is one your business allows.",
  alternates: {
    canonical: "https://parmanasystems.com",
  },
  openGraph: {
    title: "Parmana | Authority Infrastructure for AI",
    description: "Ensure every AI action is one your business allows.",
    type: "website",
    url: "https://parmanasystems.com",
    images: ["https://parmanasystems.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parmana | Authority Infrastructure for AI",
    description: "Ensure every AI action is one your business allows.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-text-primary bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
