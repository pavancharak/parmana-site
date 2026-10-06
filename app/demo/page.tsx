import type { Metadata } from "next";
import DemoHero from "@/components/DemoHero";
import DemoVideoSection from "@/components/DemoVideoSection";
import ProofPoints from "@/components/ProofPoints";
import DemoCTA from "@/components/DemoCTA";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "See business authority enforced | Parmana",
  description: "An autonomous system proposes the action. Parmana checks the authority before execution and produces evidence that can be verified independently.",
  alternates: { canonical: "https://parmanasystems.com/demo" },
};

export default function DemoPage() {
  return <main><DemoHero /><Reveal><DemoVideoSection /></Reveal><Reveal><ProofPoints /></Reveal><Reveal><DemoCTA /></Reveal></main>;
}
