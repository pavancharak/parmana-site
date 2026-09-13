import type { Metadata } from "next";
import DemoHero from "@/components/DemoHero";
import DemoVideoSection from "@/components/DemoVideoSection";
import ProofPoints from "@/components/ProofPoints";
import DemoCTA from "@/components/DemoCTA";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Live demo | Parmana",
  description:
    "Watch a working integration between a Phinite autonomous agent and Parmana: the agent proposes a refund, your policy decides if it is authorized, and only an authorized path executes.",
  alternates: {
    canonical: "https://parmanasystems.com/demo",
  },
  openGraph: {
    title: "Parmana live demo: your policy decides, Parmana enforces",
    description:
      "A Phinite autonomous agent proposes a refund. Your policy decides if it is authorized, Parmana enforces the result. Watch the full walkthrough and see what a pilot with Parmana looks like.",
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
