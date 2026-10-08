import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Pillars from "@/components/home/Pillars";
import Architecture from "@/components/home/Architecture";
import RefundExample from "@/components/home/RefundExample";
import Benefits from "@/components/home/Benefits";
import WhyParmana from "@/components/home/WhyParmana";
import Trust from "@/components/home/Trust";
import UseCases from "@/components/home/UseCases";
import FAQ from "@/components/home/FAQ";
import Developers from "@/components/home/Developers";
import ClosingCTA from "@/components/home/ClosingCTA";

export default function ParmanaWebsite() {
  return (
    <main>
      <Hero />
      <Problem />
      <Pillars />
      <Architecture />
      <RefundExample />
      <Benefits />
      <WhyParmana />
      <Trust />
      <UseCases />
      <FAQ />
      <Developers />
      <ClosingCTA />
    </main>
  );
}
