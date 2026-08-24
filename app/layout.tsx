import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://parmanasystems.com"),
  title: "Parmana | Authorization Before Execution",
  description:
    "Parmana checks every payment an AI agent, employee, or app requests against your rules before it executes. Allowed, it proceeds. Not allowed, it stops.",
  alternates: {
    canonical: "https://parmanasystems.com",
  },
  openGraph: {
    title: "Parmana | Authorization Before Execution",
    description:
      "Let AI agents request payments. Your rules decide what actually happens.",
    type: "website",
    url: "https://parmanasystems.com",
    images: ["https://parmanasystems.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parmana | Authorization Before Execution",
    description:
      "Let AI agents request payments. Your rules decide what actually happens.",
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
