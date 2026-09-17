import type { Metadata } from "next";
import DemoHero from "@/components/DemoHero"; import DemoVideoSection from "@/components/DemoVideoSection"; import ProofPoints from "@/components/ProofPoints"; import DemoCTA from "@/components/DemoCTA"; import Reveal from "@/components/Reveal";
export const metadata: Metadata={title:"Demo | Parmana",description:"See how Parmana checks a business action before it reaches the system that carries it out.",alternates:{canonical:"https://parmanasystems.com/demo"}};
export default function DemoPage(){return <main><DemoHero/><Reveal><DemoVideoSection/></Reveal><Reveal><ProofPoints/></Reveal><Reveal><DemoCTA/></Reveal></main>}
