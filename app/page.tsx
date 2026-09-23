import Hero from "@/components/Hero";
import FourElements from "@/components/FourElements";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import DemoTeaser from "@/components/DemoTeaser";
import TechGuarantees from "@/components/TechGuarantees";
import BottomCTA from "@/components/BottomCTA";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal><FourElements /></Reveal>
      <Reveal><Problem /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><UseCases /></Reveal>
      <Reveal><DemoTeaser /></Reveal>
      <Reveal><TechGuarantees /></Reveal>
      <Reveal><BottomCTA /></Reveal>
    </main>
  );
}
