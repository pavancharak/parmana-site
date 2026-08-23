import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import Diagram from "@/components/Diagram";
import Industries from "@/components/Industries";
import Philosophy from "@/components/Philosophy";
import BottomCTA from "@/components/BottomCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProp />
      <Diagram />
      <Industries />
      <Philosophy />
      <BottomCTA />
    </main>
  );
}
