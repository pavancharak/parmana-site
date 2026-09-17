import type { Metadata } from "next";
import ExplainersHero from "@/components/ExplainersHero";
import ExplainerGrid from "@/components/ExplainerGrid";
import DemoCTA from "@/components/DemoCTA";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Explainers | Parmana",
  description:
    "Simple explanations of how Parmana helps businesses keep control when software and AI carry out actions.",
  alternates: {
    canonical: "https://parmanasystems.com/explainers",
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