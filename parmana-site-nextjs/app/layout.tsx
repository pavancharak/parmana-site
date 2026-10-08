import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parmana | Business Authority for Autonomous AI",
  description: "Parmana ensures your business has authority over autonomous systems so autonomous AI can execute only what your business has authorized.",
  openGraph: { title: "Parmana | Business authority over autonomous AI", description: "Parmana ensures autonomous systems can execute only what the business has authorized." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
