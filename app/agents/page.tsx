import type { Metadata } from "next";
import AuthorizationCard from "@/components/AuthorizationCard";
import BottomCTA from "@/components/BottomCTA";
import Reveal from "@/components/Reveal";
import { messaging } from "@/lib/config";
import { defaultUseCase, useCases } from "@/lib/useCases";

export const metadata: Metadata = {
  title: "Authorization for your agents | Parmana",
  description: "How Parmana proves your agents' actions stay within the authorization you set.",
  alternates: { canonical: "https://parmanasystems.com/agents" },
};

// Share as /agents?use=refund|payment|approval|procurement. Unknown values fall back to refund.
export default function AgentsPage({ searchParams }: { searchParams: { use?: string } }) {
  const useCase = useCases[searchParams.use ?? ""] ?? defaultUseCase;

  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-lavender to-paper">
        <div aria-hidden className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-purple/15 blur-3xl" />
        <div className="relative max-w-container mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">Parmana for your team</p>
          <h1 className="mt-5 text-[38px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
            Authorization for your agents
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] text-lg md:text-xl leading-[1.6] text-ink/70">
            You mentioned you&apos;re building agents that {useCase.building}. Here&apos;s how Parmana proves
            every action they request stays within your authorization.
          </p>
        </div>
      </section>

      <Reveal>
        <section className="bg-paper">
          <div className="max-w-container mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-14 lg:gap-20 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">Your use case</p>
              <h2 className="mt-4 text-[28px] md:text-[40px] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
                {useCase.agent}, within bounds
              </h2>
              <p className="mt-5 text-lg leading-[1.65] text-ink/70">{useCase.summary}</p>
            </div>
            <AuthorizationCard useCase={useCase} />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-lavender/60 border-y border-border">
          <div className="max-w-[820px] mx-auto px-6 py-16 md:py-24 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">Why this matters</p>
            <h2 className="mt-4 text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-ink">
              Auditors need proof. Regulators need proof. Your systems need proof.
            </h2>
            <p className="mt-5 text-lg leading-[1.65] text-ink/70">Parmana delivers all three.</p>
            <p className="mt-8 text-xl font-semibold text-purple-deep">{messaging.tagline}</p>
          </div>
        </section>
      </Reveal>

      <div className="pt-20 md:pt-28 bg-paper">
        <BottomCTA
          heading="Let's explore how Parmana fits into your agent strategy"
          body="Bring one agent and the authority you want it to stay within. We'll walk through it together."
          showDemo={false}
        />
      </div>
    </main>
  );
}
