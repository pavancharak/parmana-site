import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Boundary from "@/components/Boundary";
import ThreeLayers from "@/components/ThreeLayers";
import InsideOutside from "@/components/InsideOutside";
import Outcomes from "@/components/Outcomes";
import RefundCase from "@/components/RefundCase";
import CategoryCheck from "@/components/CategoryCheck";
import FAQ from "@/components/FAQ";
import Developers from "@/components/Developers";
import HomeCTA from "@/components/HomeCTA";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal><Problem /></Reveal>
      <Reveal><Boundary /></Reveal>
      <Reveal><ThreeLayers /></Reveal>
      <Reveal><InsideOutside /></Reveal>
      <Reveal><Outcomes /></Reveal>
      <Reveal><RefundCase /></Reveal>
      <Reveal><CategoryCheck /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><Developers /></Reveal>
      <Reveal><HomeCTA /></Reveal>
    </main>
  );
}
