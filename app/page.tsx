import Hero from "@/components/Hero";
import Differentiators from "@/components/Differentiators";
import AuthorizationGap from "@/components/AuthorizationGap";
import UseCases from "@/components/UseCases";
import ActorTable from "@/components/ActorTable";
import NpciUap from "@/components/NpciUap";
import Evidence from "@/components/Evidence";
import WhatWeAreNot from "@/components/WhatWeAreNot";
import Philosophy from "@/components/Philosophy";
import FAQ from "@/components/FAQ";
import BottomCTA from "@/components/BottomCTA";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal>
        <Differentiators />
      </Reveal>
      <Reveal>
        <AuthorizationGap />
      </Reveal>
      <Reveal>
        <UseCases />
      </Reveal>
      <Reveal>
        <ActorTable />
      </Reveal>
      <Reveal>
        <NpciUap />
      </Reveal>
      <Reveal>
        <Evidence />
      </Reveal>
      <Reveal>
        <WhatWeAreNot />
      </Reveal>
      <Reveal>
        <Philosophy />
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