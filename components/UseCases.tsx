"use client";

import { useState } from "react";

const useCases = [
  {
    name: "Payments",
    subtitle: "Your approval limit",
    request: "An autonomous system requests a payment to a vendor.",
    checks: "Parmana verifies the agent is authorized to request it, the vendor is on the approved list, and the amount is within the existing limit.",
    outcome: "If all conditions hold, the payment executes. If any fails, the payment is blocked.",
  },
  {
    name: "Refunds",
    subtitle: "Your refund policy",
    request: "A customer service agent, AI or human, proposes a refund.",
    checks: "Parmana checks that the refund policy allows it, the amount is within limit, and the customer is eligible.",
    outcome: "If authorized, the refund processes. If not, it is escalated for review.",
  },
  {
    name: "Vendor management",
    subtitle: "Your approved list",
    request: "A procurement agent, autonomous or human-run, needs to onboard a new vendor.",
    checks: "Parmana checks that KYC is complete, compliance screening passed, and the category is approved.",
    outcome: "If all checks pass, the vendor is activated. If any fails, the request is blocked until requirements are met.",
  },
  {
    name: "Financial approvals",
    subtitle: "Your approval chain",
    request: "An autonomous system requests approval for an expense, investment, or transfer.",
    checks: "Parmana evaluates the amount threshold, the budget owner, and the approval chain.",
    outcome: "The action proceeds only if every authorization check passes.",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const current = useCases[active];

  return (
    <section id="use-cases" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[820px] mx-auto">
          From autonomous payments to enterprise workflows
        </h2>

        <p className="mt-3 text-base text-ink/70 text-center">
          Your policies already define the authority.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {useCases.map((useCase, i) => (
            <button
              key={useCase.name}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-md px-5 py-2 text-sm font-medium transition-all duration-150 min-h-[44px] ${
                active === i
                  ? "bg-purple text-white"
                  : "border border-border bg-white text-ink/70 hover:border-purple/50 hover:text-ink"
              }`}
            >
              {useCase.name}
            </button>
          ))}
        </div>

        <div className="mt-10 rounded-md border border-border bg-white p-8 md:p-10 max-w-[760px] mx-auto">
          <p className="text-xs uppercase tracking-wide font-mono text-purple-deep">
            {current.subtitle}
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <p className="text-sm font-semibold text-ink">Request</p>
              <p className="mt-2 text-sm leading-[1.65] text-ink/70">{current.request}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-ink">Parmana checks</p>
              <p className="mt-2 text-sm leading-[1.65] text-ink/70">{current.checks}</p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm font-semibold text-purple-deep">Outcome</p>
              <p className="mt-2 text-sm leading-[1.65] text-ink/70">{current.outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
