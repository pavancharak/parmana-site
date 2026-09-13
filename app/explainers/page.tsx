import type { Metadata } from "next";
import ExplainersHero from "@/components/ExplainersHero";
import ExplainerGrid from "@/components/ExplainerGrid";
import DemoCTA from "@/components/DemoCTA";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Explainers | Parmana",
  description:
    "Short videos on why AI can be intelligent without being in charge, and how Parmana enforces authorization before execution.",
  alternates: {
    canonical: "https://parmanasystems.com/explainers",
  },
  openGraph: {
    title: "Parmana explainers",
    description:
      "Short videos on the authorization boundary Parmana enforces between AI agents and business execution.",
    type: "website",
    url: "https://parmanasystems.com/explainers",
    images: ["https://parmanasystems.com/og-image.jpg"],
  },
};

export default function ExplainersPage() {
  return (
    <main>
      <ExplainersHero />
      <Reveal>
        <ExplainerGrid />
      </Reveal>
      <Reveal>
        <DemoCTA />
      </Reveal>
    </main>
  );
}
