import type { Metadata } from "next";
import ExplainersHero from "@/components/ExplainersHero";
import ExplainerGrid from "@/components/ExplainerGrid";
import DemoCTA from "@/components/DemoCTA";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Agentic Commerce Explainers | Parmana",
  description: "Short explanations of how Parmana keeps business authority outside the AI agent and controls consequential execution.",
  alternates: { canonical: "https://parmanasystems.com/explainers" },
};

export default function ExplainersPage() {
  return <main><ExplainersHero /><Reveal><ExplainerGrid /></Reveal><Reveal><DemoCTA /></Reveal></main>;
}
