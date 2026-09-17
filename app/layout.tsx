import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: "Parmana | AI operates your business systems. Parmana proves what they actually do.",
  description:
    "AI operates your business systems. Parmana checks what the business allows and proves what actually happened.",
  alternates: {
    canonical: "https://parmanasystems.com",
  },
  openGraph: {
    title: "Parmana | AI operates your business systems. Parmana proves what they actually do.",
    description:
      "AI can operate business systems. Parmana checks each important action against what the business allows and proves what happened.",
    type: "website",
    url: "https://parmanasystems.com",
    images: ["https://parmanasystems.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parmana | AI operates your business systems. Parmana proves what they actually do.",
    description:
      "AI can operate business systems. Parmana checks each important action against what the business allows and proves what happened.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
