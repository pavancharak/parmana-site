import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteAnalytics from "@/components/SiteAnalytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parmanasystems.com"),
  title: "Parmana | People keep control. AI acts.",
  description:
    "Parmana lets autonomous AI act within limits set by people and stops actions that go beyond those limits before they reach protected systems.",
  alternates: { canonical: "https://parmanasystems.com" },
  openGraph: {
    title: "Parmana | People keep control. AI acts.",
    description:
      "Parmana lets autonomous AI act within limits set by people and stops actions that go beyond those limits before they reach protected systems.",
    type: "website",
    url: "https://parmanasystems.com",
    images: ["https://parmanasystems.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parmana | People keep control. AI acts.",
    description:
      "Parmana lets autonomous AI act within limits set by people and stops actions that go beyond those limits before they reach protected systems.",
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
