import type { Metadata } from "next";
import DemoHero from "@/components/DemoHero";
import DemoVideoSection from "@/components/DemoVideoSection";
import ProofPoints from "@/components/ProofPoints";
import DemoCTA from "@/components/DemoCTA";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "See business authority enforced | Parmana",
  description:
    "See how Parmana checks autonomous actions against business authority before execution and produces independently verifiable evidence.",
  alternates: { canonical: "https://parmanasystems.com/demo" },
};

export default function DemoPage() {
  return (
    <main>
      <DemoHero />
      <Reveal>
        <DemoVideoSection />
      </Reveal>
      <Reveal>
        <ProofPoints />
      </Reveal>
      <Reveal>
        <DemoCTA />
      </Reveal>
    </main>
  );
}
