import Hero from "@/components/Hero";
import CoreProblems from "@/components/CoreProblems";
import ThreeMoments from "@/components/ThreeMoments";
import ThatsIt from "@/components/ThatsIt";
import WhyNow from "@/components/WhyNow";
import UseCases from "@/components/UseCases";
import SecurityTrust from "@/components/SecurityTrust";
import FAQ from "@/components/FAQ";
import BottomCTA from "@/components/BottomCTA";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal>
        <CoreProblems />
      </Reveal>
      <Reveal>
        <ThreeMoments />
      </Reveal>
      <Reveal>
        <ThatsIt />
      </Reveal>
      <Reveal>
        <WhyNow />
      </Reveal>
      <Reveal>
        <UseCases />
      </Reveal>
      <Reveal>
        <SecurityTrust />
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
