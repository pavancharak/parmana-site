import type { Metadata } from "next";
import DemoHero from "@/components/DemoHero";
import DemoVideoSection from "@/components/DemoVideoSection";
import ProofPoints from "@/components/ProofPoints";
import DemoCTA from "@/components/DemoCTA";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Live demo | Parmana",
  description:
    "Watch a working integration between a Phinite AI agent and Parmana: the agent proposes a refund, Parmana authorizes it, and only an authorized path executes.",
  alternates: {
    canonical: "https://parmanasystems.com/demo",
  },
  openGraph: {
    title: "Parmana live demo: AI can be intelligent without being in charge",
    description:
      "A Phinite AI agent proposes a refund. Parmana evaluates and authorizes it. Watch the full walkthrough and see what a pilot with Parmana looks like.",
    type: "website",
    url: "https://parmanasystems.com/demo",
    images: ["https://parmanasystems.com/og-image.jpg"],
  },
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
