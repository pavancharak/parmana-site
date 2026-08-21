import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Problem } from "../components/Problem";
import { Mechanism } from "../components/Mechanism";
import { LogContrast } from "../components/LogContrast";
import { Proof } from "../components/Proof";
import { WhoItsFor } from "../components/WhoItsFor";
import { Company } from "../components/Company";
import { Closing } from "../components/Closing";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <Problem />
        <Mechanism />
        <LogContrast />
        <Proof />
        <WhoItsFor />
        <Company />
        <Closing />
      </main>

      <Footer />
    </>
  );
}