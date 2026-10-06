import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteAnalytics from "@/components/SiteAnalytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-jetbrains-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://parmanasystems.com"),
  title: "Parmana | Business Authority for Autonomous Systems",
  description: "Parmana makes existing business systems ready for autonomous systems, enforces business authority over consequential actions, and provides independently verifiable evidence.",
  alternates: { canonical: "https://parmanasystems.com" },
  openGraph: {
    title: "Parmana | Make your business ready for autonomy.",
    description: "Parmana makes existing business systems ready for autonomous systems, enforces business authority over consequential actions, and provides independently verifiable evidence.",
    type: "website",
    url: "https://parmanasystems.com",
    images: ["https://parmanasystems.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parmana | Make your business ready for autonomy.",
    description: "Parmana makes existing business systems ready for autonomous systems, enforces business authority over consequential actions, and provides independently verifiable evidence.",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <SiteAnalytics />
      </body>
    </html>
  );
}
