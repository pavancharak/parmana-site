import type { Metadata } from "next";
import DemoHero from "@/components/DemoHero";
import DemoVideoSection from "@/components/DemoVideoSection";
import ProofPoints from "@/components/ProofPoints";
import DemoCTA from "@/components/DemoCTA";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Agentic Commerce Demo | Parmana",
  description: "See how Parmana checks an AI agent's payment action before it reaches the execution system.",
  alternates: { canonical: "https://parmanasystems.com/demo" },
};

export default function DemoPage() {
  return <main><DemoHero /><Reveal><DemoVideoSection /></Reveal><Reveal><ProofPoints /></Reveal><Reveal><DemoCTA /></Reveal></main>;
}
