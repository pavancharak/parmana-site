import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import SiteAnalytics from "@/components/SiteAnalytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-jetbrains-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://parmanasystems.com"),
  title: "Parmana | Your rules. Your control.",
  description: "Parmana sits outside your business systems and checks every request your AI makes against your rules. Your rules stay the same. You get a signed receipt for every decision.",
  alternates: { canonical: "https://parmanasystems.com" },
  openGraph: {
    title: "Parmana | Your rules. Your control.",
    description: "Parmana sits outside your business systems and checks every request your AI makes against your rules. Your rules stay the same. You get a signed receipt for every decision.",
    type: "website",
    url: "https://parmanasystems.com",
    images: ["https://parmanasystems.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parmana | Your rules. Your control.",
    description: "Parmana sits outside your business systems and checks every request your AI makes against your rules. Your rules stay the same. You get a signed receipt for every decision.",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased">
        {children}
        <SiteAnalytics />
      </body>
    </html>
  );
}
