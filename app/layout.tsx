import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parmana | Business Authority Infrastructure for AI",
  description: "Parmana turns business authority into enforceable runtime controls for AI agents, so access never becomes authority.",
  openGraph: { title: "Parmana | Business Authority Infrastructure for AI", description: "Parmana turns business authority into enforceable runtime controls for AI agents, so access never becomes authority." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
