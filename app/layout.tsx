import type { Metadata } from "next";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-public-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parmanasystems.com"),
  title: "Parmana | Authorization Before Execution",
  description:
    "Your business already has authorization rules, policies, and approval processes. Parmana makes them enforceable for AI and autonomous systems before execution.",
  alternates: {
    canonical: "https://parmanasystems.com",
  },
  openGraph: {
    title: "Parmana | Authorization Before Execution",
    description:
      "AI can act without being in charge. Parmana enforces your existing authorization rules before autonomous execution.",
    type: "website",
    url: "https://parmanasystems.com",
    images: ["https://parmanasystems.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parmana | Authorization Before Execution",
    description:
      "AI can act without being in charge. Parmana enforces your existing authorization rules before autonomous execution.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${publicSans.variable} ${plexMono.variable}`}
    >
      <body className="bg-paper text-navy font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}