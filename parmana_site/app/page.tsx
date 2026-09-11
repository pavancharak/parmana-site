import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Gap from "@/components/Gap";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import ExistingInfrastructure from "@/components/ExistingInfrastructure";
import PreventionVsDetection from "@/components/PreventionVsDetection";
import Architecture from "@/components/Architecture";
import TechGuarantees from "@/components/TechGuarantees";
import UseCases from "@/components/UseCases";
import Stakeholders from "@/components/Stakeholders";
import FAQ from "@/components/FAQ";
import BottomCTA from "@/components/BottomCTA";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal>
        <Problem />
      </Reveal>
      <Reveal>
        <Gap />
      </Reveal>
      <Reveal>
        <Solution />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <ExistingInfrastructure />
      </Reveal>
      <Reveal>
        <PreventionVsDetection />
      </Reveal>
      <Reveal>
        <Architecture />
      </Reveal>
      <Reveal>
        <TechGuarantees />
      </Reveal>
      <Reveal>
        <UseCases />
      </Reveal>
      <Reveal>
        <Stakeholders />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <BottomCTA />
      </Reveal>
    </main>
  );
}
