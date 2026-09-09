"use client";

import { useState } from "react";

const useCases = [
  {
    name: "Payments",
    subtitle: "Your approval limit",
    infrastructure:
      "Finance policy defines the authorization conditions for vendor payments up to ₹50 lakhs. Threshold set. Approval chain defined. Takes 5 to 7 days.",
    withParmana:
      "AI requests the payment. Parmana verifies the request against the existing authorization conditions. If authorized, execution proceeds. If not, execution stops.",
    outcome:
      "Authorized payment execution moves from a 5 to 7 day process toward same-day execution, without changing the underlying policy.",
    proof:
      "Cryptographic proof records that authorization was verified before execution reached the business system.",
    beforeLabel: "5 to 7 days",
    afterLabel: "Same day",
  },
  {
    name: "Disputes",
    subtitle: "Your refund policy",
    infrastructure:
      "Support policy allows refunds up to ₹5,000 per customer per month. Policy documented. Approval conditions defined. Takes up to 24 hours.",
    withParmana:
      "AI requests the refund. Parmana checks the request against the existing refund policy. Authorized requests proceed. Requests outside the policy are refused.",
    outcome:
      "Refund SLA: up to 24 hours → instant execution when the request satisfies the existing policy.",
    proof:
      "Your refund policy does not change. Parmana verifies that the authorization conditions were satisfied before execution.",
    beforeLabel: "24 hours",
    afterLabel: "Instant",
  },
  {
    name: "Vendor Management",
    subtitle: "Your approved list",
    infrastructure:
      "Procurement approves orders from 250 pre-vetted vendors. Approval list maintained. Takes 2 to 3 days per order.",
    withParmana:
      "AI requests an order. Parmana checks the requested vendor against the existing approved list. Authorized orders proceed. Unapproved vendors are blocked.",
    outcome:
      "Order-to-execution: 2 to 3 days → same day for requests that satisfy the existing authorization policy.",
    proof:
      "Your vendor list remains the rule. Every AI-requested order is checked against it, with cryptographic proof before execution.",
    beforeLabel: "2 to 3 days",
    afterLabel: "Same day",
  },
];

function CycleTimeBars({
  beforeLabel,
  afterLabel,
}: {
  beforeLabel: string;
  afterLabel: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Cycle time before Parmana, ${beforeLabel}, versus with Parmana, ${afterLabel}`}
      className="mt-3 space-y-2"
    >
      <div className="flex items-center gap-3">
        <span className="w-24 shrink-0 text-xs text-paper/50">
          Before
        </span>

        <div className="h-3 flex-1 rounded-md bg-divider">
          <div className="h-3 w-full rounded-md bg-paper/30" />
        </div>

        <span className="w-24 shrink-0 text-xs tabular-nums text-paper/70">
          {beforeLabel}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="w-24 shrink-0 text-xs text-mint">
          With Parmana
        </span>

        <div className="h-3 flex-1 rounded-md bg-divider">
          <div className="h-3 w-[10%] rounded-md bg-mint" />
        </div>

        <span className="w-24 shrink-0 text-xs font-semibold tabular-nums text-mint">
          {afterLabel}
        </span>
      </div>
    </div>
  );
}

export default function UseCases() {
  const [active, setActive] = useState(0);
  const current = useCases[active];

  return (
    <section id="use-cases" className="bg-navy border-b border-divider">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="font-serif text-[26px] md:text-[32px] font-semibold leading-[1.3] tracking-tight text-paper text-center max-w-[820px] mx-auto">
          What this looks like in practice
        </h2>

        <p className="mt-3 text-base text-paper/70 text-center">
          Your policies already define the authority.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {useCases.map((useCase, i) => (
            <button
              key={useCase.name}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-md px-5 py-2 text-sm font-medium transition-all duration-200 min-h-[44px] ${
                active === i
                  ? "bg-mint text-navy shadow-sm shadow-mint/25"
                  : "border border-divider text-paper/70 hover:border-mint/50 hover:text-paper"
              }`}
            >
              {useCase.name}
            </button>
          ))}
        </div>

        <div className="mt-10 rounded-md border border-divider p-8 md:p-10 max-w-[820px] mx-auto">
          <p className="text-xs uppercase tracking-wide font-mono text-mint">
            {current.subtitle}
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <p className="text-sm font-semibold text-paper">
                Your infrastructure:
              </p>

              <p className="mt-2 text-sm leading-[1.65] text-paper/70">
                {current.infrastructure}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-paper">
                With Parmana:
              </p>

              <p className="mt-2 text-sm leading-[1.65] text-paper/70">
                {current.withParmana}
              </p>
            </div>

            <div className="pt-4 border-t border-divider">
              <p className="text-sm font-semibold text-mint">
                Outcome:
              </p>

              <p className="mt-2 text-sm leading-[1.65] text-paper/70">
                {current.outcome}
              </p>

              <CycleTimeBars
                beforeLabel={current.beforeLabel}
                afterLabel={current.afterLabel}
              />
            </div>

            <p className="text-xs font-mono leading-[1.6] text-paper/50">
              {current.proof}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}