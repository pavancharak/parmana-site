import type { Metadata } from "next";
import AuthorizationCard from "@/components/AuthorizationCard";
import BottomCTA from "@/components/BottomCTA";
import Reveal from "@/components/Reveal";
import { useCases, defaultUseCase } from "@/lib/useCases";

export const metadata: Metadata = {
  title: "Use cases for autonomous systems | Parmana",
  description:
    "See how Parmana puts autonomous systems within business authority across refunds, payments, approvals and procurement.",
  alternates: { canonical: "https://parmanasystems.com/agents" },
};

export default function AgentsPage({
  searchParams,
}: {
  searchParams: { use?: string };
}) {
  const useCase = useCases[searchParams.use ?? ""] ?? defaultUseCase;

  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-lavender to-paper">
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-purple/15 blur-3xl"
        />

        <div className="relative max-w-container mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">
            Use cases
          </p>

          <h1 className="mt-5 text-[40px] sm:text-[54px] lg:text-[68px] font-bold leading-[1.04] tracking-[-0.035em] text-ink">
            Put autonomous systems within business authority.
          </h1>

          <p className="mx-auto mt-6 max-w-[700px] text-lg md:text-xl leading-[1.55] text-ink/70">
            Choose a consequential workflow. See what the system can do, what it cannot do and what Parmana can prove.
          </p>
        </div>
      </section>

      <Reveal>
        <section className="bg-paper">
          <div className="max-w-container mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-14 lg:gap-20 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">
                {useCase.agent}
              </p>

              <h2 className="mt-4 text-[30px] md:text-[42px] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
                {useCase.rule}
              </h2>

              <p className="mt-5 text-lg leading-[1.6] text-ink/70">
                {useCase.summary}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                <a
                  href="/agents?use=refund"
                  className="rounded-xl border border-border p-4 hover:border-purple/40 transition-colors"
                >
                  Refunds
                </a>
                <a
                  href="/agents?use=payment"
                  className="rounded-xl border border-border p-4 hover:border-purple/40 transition-colors"
                >
                  Payments
                </a>
                <a
                  href="/agents?use=approval"
                  className="rounded-xl border border-border p-4 hover:border-purple/40 transition-colors"
                >
                  Approvals
                </a>
                <a
                  href="/agents?use=procurement"
                  className="rounded-xl border border-border p-4 hover:border-purple/40 transition-colors"
                >
                  Procurement
                </a>
              </div>
            </div>

            <AuthorizationCard useCase={useCase} />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-lavender/60 border-y border-border">
          <div className="max-w-[820px] mx-auto px-6 py-16 md:py-24 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">
              Why this matters
            </p>

            <h2 className="mt-4 text-[30px] md:text-[40px] font-bold leading-[1.12] tracking-[-0.03em] text-ink">
              Business authority should survive the move to autonomy.
            </h2>

            <p className="mt-5 text-lg leading-[1.6] text-ink/70">
              Your business defines the authority. Parmana enforces it and provides evidence.
            </p>
          </div>
        </section>
      </Reveal>

      <BottomCTA
        heading="Ready your first autonomous workflow."
        body="Bring one consequential workflow. We will show where Parmana fits and how the authority boundary works."
        showDemo
      />
    </main>
  );
}
