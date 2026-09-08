import Hero from "@/components/Hero";
import ThreeMoments from "@/components/ThreeMoments";
import WhyNow from "@/components/WhyNow";
import UseCases from "@/components/UseCases";
import SecurityTrust from "@/components/SecurityTrust";
import BottomCTA from "@/components/BottomCTA";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal>
        <ThreeMoments />
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
        <BottomCTA />
      </Reveal>
    </main>
  );
}
