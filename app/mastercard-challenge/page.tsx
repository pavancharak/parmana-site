import type { Metadata } from "next";
import Gate from "@/components/Gate";
import { founderEmail, nav } from "@/lib/config";

export const metadata: Metadata = {
  title: "Mastercard Innovation Challenge @ GFF 2026 | Parmana",
  description:
    "Authorization infrastructure for agentic commerce. Code-validated boundary. Regulatory-ready.",
};

const pillars = [
  {
    name: "Identify",
    state: "closed" as const,
    body: "Every AI agent, employee, and app that can request a financial action is registered against your existing authorization rules, not a new policy layer.",
  },
  {
    name: "Generate",
    state: "checking" as const,
    body: "Each request generates a cryptographic proof, checked against your rule before execution is allowed to proceed.",
  },
  {
    name: "Defend",
    state: "open" as const,
    body: "If a request falls outside your rule, execution stops. The proof and the audit trail exist whether the request passed or failed.",
  },
];

export default function MastercardChallenge() {
  return (
    <main>
      <section className="bg-navy border-b border-divider">
        <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
          <p className="text-sm font-mono uppercase tracking-wide text-mint">
            Mastercard Innovation Challenge @ GFF 2026, Parmana Submission
          </p>
          <h1 className="mt-4 font-serif text-[30px] md:text-[40px] font-semibold leading-[1.2] tracking-tight text-paper max-w-[760px]">
            Authorization infrastructure for agentic commerce.
          </h1>
          <p className="mt-5 text-lg leading-[1.6] text-paper/75 max-w-[640px]">
            Code-validated boundary. Regulatory-ready. A 115-day deployment
            window, Sep 8, 2026 to Jan 1, 2027.
          </p>
        </div>
      </section>

      <section className="bg-navy border-b border-divider">
        <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
          <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-paper text-center">
            How it works
          </h2>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.name}
                className="rounded-sm border border-divider p-8 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:border-mint/40 hover:shadow-[0_20px_45px_-20px_rgba(111,227,196,0.35)]"
              >
                <Gate state={pillar.state} className="h-12 w-12" />
                <h3 className="font-serif text-xl font-semibold text-paper">
                  {pillar.name}
                </h3>
                <p className="text-sm leading-[1.65] text-paper/70">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy border-b border-divider">
        <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24 max-w-[820px]">
          <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-paper">
            For judges
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-paper/75">
            Parmana&apos;s authorization boundary sits outside the business systems
            it protects. A request from an AI agent is checked against the
            organization&apos;s existing rule, whatever that rule already is,
            before execution is permitted. The boundary does not depend on the
            security posture of the business system it sits in front of, which
            is what the code audit referenced on the homepage was designed to
            verify.
          </p>
          <p className="mt-4 text-base leading-[1.7] text-paper/75">
            We report metrics we can defend under questioning. Where a number
            on this site is a target rather than a measured result, we say so
            when asked, we do not want a judge to have to guess which is which.
          </p>
          <a
            href={nav.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-1 text-sm font-semibold text-mint hover:text-paper transition-colors duration-200"
          >
            Read the technical validation
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </section>

      <section className="bg-navy">
        <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24 text-center">
          <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-paper max-w-[680px] mx-auto">
            Questions for the team before or during judging.
          </h2>
          <a
            href={`mailto:${founderEmail}?subject=Mastercard%20Innovation%20Challenge%2C%20Question`}
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-mint px-8 py-3 text-base font-semibold text-navy shadow-sm hover:bg-paper hover:shadow-lg hover:shadow-mint/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 min-h-[48px]"
          >
            Contact the team
          </a>
        </div>
      </section>
    </main>
  );
}
