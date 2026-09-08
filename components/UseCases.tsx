"use client";

import { useState } from "react";

const useCases = [
  {
    name: "Payments",
    subtitle: "Your approval limit",
    infrastructure:
      "Finance team approves vendor payments up to ₹50 lakhs. Threshold set. Approval chain defined. Takes 5 to 7 days.",
    withParmana:
      "Same threshold. AI-requested payments up to ₹50 lakhs clear automatically. Same rigor. Same policy. Instant execution.",
    outcome: "Payment cycle: 5 to 7 days → same day. ₹2 to 5 crore working capital freed.",
    proof: "Cryptographic signature proves authorization happened before execution. Audit trail automatic.",
  },
  {
    name: "Disputes",
    subtitle: "Your refund policy",
    infrastructure:
      "Support team refunds up to ₹5,000 per customer per month. Policy documented. Approval gates exist. Takes 24 hours.",
    withParmana:
      "Same ₹5,000 limit. AI-requested refunds clear automatically. Same policy enforced. Instant execution.",
    outcome: "Refund SLA: 24 hours → instant. Customer satisfaction improves 30 to 40%.",
    proof: "Your policy didn't change. We just prove it was followed before execution.",
  },
  {
    name: "Vendor Management",
    subtitle: "Your approved list",
    infrastructure:
      "Procurement approves orders from 250 pre-vetted vendors. Approval list maintained. Takes 2 to 3 days per order.",
    withParmana:
      "Same vendor list. AI-requested orders from approved vendors clear automatically. Same governance. Instant execution.",
    outcome: "Order-to-execution: 2 to 3 days → same day. Inventory planning improves.",
    proof: "Your vendor list is your rule. Every AI-requested order is checked against it. Cryptographic proof before order executes.",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const current = useCases[active];

  return (
    <section id="use-cases" className="bg-navy border-b border-divider">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="font-serif text-[26px] md:text-[32px] font-semibold leading-[1.3] tracking-tight text-paper text-center max-w-[820px] mx-auto">
          What this looks like in practice
        </h2>
        <p className="mt-3 text-base text-paper/60 text-center">
          Your policies already define this.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {useCases.map((useCase, i) => (
            <button
              key={useCase.name}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-sm px-5 py-2 text-sm font-medium transition-colors min-h-[44px] ${
                active === i
                  ? "bg-mint text-navy"
                  : "border border-divider text-paper/70 hover:border-mint/50"
              }`}
            >
              {useCase.name}
            </button>
          ))}
        </div>

        <div className="mt-10 rounded-sm border border-divider p-8 md:p-10 max-w-[820px] mx-auto">
          <p className="text-xs uppercase tracking-wide font-mono text-mint">
            {current.subtitle}
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <p className="text-sm font-semibold text-paper">Your infrastructure:</p>
              <p className="mt-2 text-sm leading-[1.65] text-paper/70">
                {current.infrastructure}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-paper">With Parmana:</p>
              <p className="mt-2 text-sm leading-[1.65] text-paper/70">
                {current.withParmana}
              </p>
            </div>

            <div className="pt-4 border-t border-divider">
              <p className="text-sm font-semibold text-mint">Outcome:</p>
              <p className="mt-2 text-sm leading-[1.65] text-paper/70">{current.outcome}</p>
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
