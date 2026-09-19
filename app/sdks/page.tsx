import type { Metadata } from "next";
import SdksHero from "@/components/SdksHero";
import SdkDownloads from "@/components/SdkDownloads";
import SdkIntegrationPath from "@/components/SdkIntegrationPath";
import DemoCTA from "@/components/DemoCTA";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Developer Tools | Parmana",
  description: "Connect Parmana to agentic commerce and existing business systems using the available SDKs.",
  alternates: { canonical: "https://parmanasystems.com/sdks" },
};

export default function SdksPage() {
  return <main><SdksHero /><Reveal><SdkDownloads /></Reveal><Reveal><SdkIntegrationPath /></Reveal><Reveal><DemoCTA /></Reveal></main>;
}
