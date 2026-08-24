import Hero from "@/components/Hero";
import Differentiators from "@/components/Differentiators";
import AuthorizationGap from "@/components/AuthorizationGap";
import Diagram from "@/components/Diagram";
import UseCases from "@/components/UseCases";
import ActorTable from "@/components/ActorTable";
import NpciUap from "@/components/NpciUap";
import Evidence from "@/components/Evidence";
import WhatWeAreNot from "@/components/WhatWeAreNot";
import Philosophy from "@/components/Philosophy";
import FAQ from "@/components/FAQ";
import BottomCTA from "@/components/BottomCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Differentiators />
      <AuthorizationGap />
      <Diagram />
      <UseCases />
      <ActorTable />
      <NpciUap />
      <Evidence />
      <WhatWeAreNot />
      <Philosophy />
      <FAQ />
      <BottomCTA />
    </main>
  );
}