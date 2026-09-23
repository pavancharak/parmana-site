import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import RefundExample from "@/components/RefundExample";
import HowItWorks from "@/components/HowItWorks";
import Outcomes from "@/components/Outcomes";
import BottomCTA from "@/components/BottomCTA";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal><Problem /></Reveal>
      <Reveal><RefundExample /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><Outcomes /></Reveal>
      <Reveal><BottomCTA /></Reveal>
    </main>
  );
}
