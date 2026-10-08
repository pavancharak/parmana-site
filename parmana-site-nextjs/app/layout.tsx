import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parmana | Institutional Authority for Autonomous AI",
  description: "Parmana ensures autonomous AI can execute only the actions your business has authorized.",
  openGraph: { title: "Parmana | Keep the authority. Let AI operate autonomously.", description: "Institutional authority for autonomous AI." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
