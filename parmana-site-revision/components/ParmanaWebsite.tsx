import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import RefundExample from "@/components/home/RefundExample";
import Outcomes from "@/components/home/Outcomes";
import Developers from "@/components/home/Developers";
import Trust from "@/components/home/Trust";
import ClosingCTA from "@/components/home/ClosingCTA";

export default function ParmanaWebsite() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <RefundExample />
      <Outcomes />
      <Developers />
      <Trust />
      <ClosingCTA />
    </main>
  );
}
