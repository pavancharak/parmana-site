import type { Metadata } from "next";
import AuthorizationCard from "@/components/AuthorizationCard";
import BottomCTA from "@/components/BottomCTA";
import Reveal from "@/components/Reveal";
import { messaging } from "@/lib/config";
import { defaultUseCase, useCases } from "@/lib/useCases";

export const metadata: Metadata = {
  title: "Put autonomous systems within business authority | Parmana",
  description:
    "See what an autonomous system can request, what stays out of bounds, what Parmana enforces and what evidence is produced, for refunds, payments, approvals and procurement.",
  alternates: { canonical: "https://parmanasystems.com/agents" },
};

// Share as /agents?use=refund|payment|approval|procurement|customer|engineering. Unknown values fall back to refund.
export default function AgentsPage({ searchParams }: { searchParams: { use?: string } }) {
  const useCase = useCases[searchParams.use ?? ""] ?? defaultUseCase;

  const breakdown = [
    { label: "What the system can do", text: useCase.can },
    { label: "What it cannot do", text: useCase.cannot },
    { label: "What Parmana enforces", text: useCase.enforces },
    { label: "What evidence is produced", text: useCase.evidence },
  ];

  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-lavender to-paper">
        <div aria-hidden className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-purple/15 blur-3xl" />
        <div className="relative max-w-container mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">Use cases</p>
          <h1 className="mx-auto mt-5 max-w-[960px] text-[38px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
            Put autonomous systems within business authority.
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] text-lg md:text-xl leading-[1.6] text-ink/70">
            Agents that {useCase.building} request actions. Here is what Parmana enforces before any of them reach your
            systems, and what you can prove afterwards.
          </p>

          <nav aria-label="Use cases" className="mt-10 flex flex-wrap justify-center gap-2">
            {Object.values(useCases).map((u) => {
              const active = u.slug === useCase.slug;
              return (
                <a
                  key={u.slug}
                  href={`/agents?use=${u.slug}`}
                  aria-current={active ? "page" : undefined}
                  data-track={`agents_tab_${u.slug}`}
                  className={`inline-flex min-h-[44px] items-center rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "border-purple bg-purple text-white shadow-sm shadow-purple/30"
                      : "border-border bg-paper text-ink/70 hover:border-purple/40 hover:text-ink"
                  }`}
                >
                  {u.title}
                </a>
              );
            })}
          </nav>
        </div>
      </section>

      <Reveal>
        <section className="bg-paper">
          <div className="max-w-container mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-14 lg:gap-20 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">{useCase.title}</p>
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
          <div className="max-w-container mx-auto px-6 py-16 md:py-24">
            <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {breakdown.map((b, i) => (
                <li
                  key={b.label}
                  className="relative rounded-2xl border border-border bg-paper p-7 shadow-[0_1px_2px_rgba(26,26,26,0.04),0_8px_24px_-12px_rgba(67,56,202,0.18)]"
                >
                  <span className="font-mono text-xs text-purple-deep">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-bold tracking-tight text-ink">{b.label}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{b.text}</p>
                </li>
              ))}
            </ol>
            <p className="mt-12 text-center text-xl font-semibold text-purple-deep">{messaging.tagline}</p>
          </div>
        </section>
      </Reveal>

      <div className="pt-20 md:pt-28 bg-paper">
        <BottomCTA
          heading="Ready your first autonomous workflow."
          body="Bring one consequential workflow and the authority you want it to stay within. We'll walk through it together."
          showDemo
        />
      </div>
    </main>
  );
}
