import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-jetbrains-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://parmanasystems.com"),
  title: "Parmana | Your Agent. Your Rule. Proof It Followed.",
  description: "Deploy AI agents with proof they followed your rules. Parmana checks the exact action against your existing rule and issues proof of the outcome, nothing changes about how you work.",
  alternates: { canonical: "https://parmanasystems.com" },
  openGraph: {
    title: "Parmana | Your Agent. Your Rule. Proof It Followed.",
    description: "Your agent proposes the action. Your rule decides. Parmana proves what happened.",
    type: "website",
    url: "https://parmanasystems.com",
    images: ["https://parmanasystems.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parmana | Your Agent. Your Rule. Proof It Followed.",
    description: "Your agent proposes the action. Your rule decides. Parmana proves what happened.",
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
      </body>
    </html>
  );
}
