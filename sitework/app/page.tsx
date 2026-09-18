import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Gap from "@/components/Gap";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import ExistingInfrastructure from "@/components/ExistingInfrastructure";
import Evidence from "@/components/Evidence";
import Architecture from "@/components/Architecture";
import TechGuarantees from "@/components/TechGuarantees";
import UseCases from "@/components/UseCases";
import DemoTeaser from "@/components/DemoTeaser";
import Stakeholders from "@/components/Stakeholders";
import FAQ from "@/components/FAQ";
import BottomCTA from "@/components/BottomCTA";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />

      <Reveal>
        <section
          id="vision"
          className="border-b border-border bg-lavender"
        >
          <div className="mx-auto max-w-container px-6 py-14 md:py-18 lg:py-20">
            <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-deep">
                  Our vision
                </p>
                <h2 className="mt-3 text-[26px] font-bold leading-[1.15] tracking-tight text-ink md:text-[34px]">
                  A world where businesses can trust autonomous software to act
                  as intended.
                </h2>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-deep">
                  Our mission
                </p>
                <h2 className="mt-3 text-[26px] font-bold leading-[1.15] tracking-tight text-ink md:text-[34px]">
                  Help organizations turn business decisions into controlled,
                  provable and learnable software actions.
                </h2>
              </div>
            </div>

            <p className="mt-10 text-center text-base font-semibold text-ink md:text-lg">
              Control → Prove → Learn → Improve
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal><Problem /></Reveal>
      <Reveal><Gap /></Reveal>
      <Reveal><Solution /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><ExistingInfrastructure /></Reveal>
      <Reveal><Evidence /></Reveal>
      <Reveal><Architecture /></Reveal>
      <Reveal><TechGuarantees /></Reveal>
      <Reveal><UseCases /></Reveal>
      <Reveal><DemoTeaser /></Reveal>
      <Reveal><Stakeholders /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><BottomCTA /></Reveal>
    </main>
  );
}