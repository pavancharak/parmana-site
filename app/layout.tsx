import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://parmanasystems.com"),
  title: "Parmana | Institutional Authority Infrastructure",
  description:
    "Authorization infrastructure for consequential actions. Any actor, any domain, authority remains yours. Parmana verifies every action before execution.",
  alternates: {
    canonical: "https://parmanasystems.com",
  },
  openGraph: {
    title: "Parmana | Institutional Authority Infrastructure",
    description:
      "Only what you authorize should execute, regardless of the actor.",
    type: "website",
    url: "https://parmanasystems.com",
    images: ["https://parmanasystems.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parmana | Institutional Authority Infrastructure",
    description:
      "Only what you authorize should execute, regardless of the actor.",
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
