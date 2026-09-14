import type { Metadata } from "next";
import SdksHero from "@/components/SdksHero";
import SdkDownloads from "@/components/SdkDownloads";
import SdkIntegrationPath from "@/components/SdkIntegrationPath";
import ConnectorSdkDownloads from "@/components/ConnectorSdkDownloads";
import DemoCTA from "@/components/DemoCTA";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "SDKs | Parmana",
  description:
    "Download the Parmana TypeScript and Python SDKs and integrate the authority boundary directly into your stack.",
  alternates: {
    canonical: "https://parmanasystems.com/sdks",
  },
  openGraph: {
    title: "Parmana SDKs",
    description:
      "TypeScript and Python SDKs for integrating Parmana's authorization boundary: propose an action, get a policy-evaluated decision, verify the signed result independently.",
    type: "website",
    url: "https://parmanasystems.com/sdks",
    images: ["https://parmanasystems.com/og-image.jpg"],
  },
};

export default function SdksPage() {
  return (
    <main>
      <SdksHero />
      <Reveal>
        <SdkDownloads />
      </Reveal>
      <Reveal>
        <SdkIntegrationPath />
      </Reveal>
      <Reveal>
        <ConnectorSdkDownloads />
      </Reveal>
      <Reveal>
        <DemoCTA />
      </Reveal>
    </main>
  );
}
