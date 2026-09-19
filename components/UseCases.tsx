"use client";

import { useState } from "react";

const useCases = [
  ["Agentic commerce", "Transaction rule", "An AI agent selects a product and proposes a purchase.", "Parmana checks the merchant, amount, currency, identity, risk context and operation.", "Only the transaction that matches the business rules can receive authorization."],
  ["Refunds", "Refund rule", "An agent asks to refund a customer.", "Parmana checks the exact refund, payment identity, amount, currency and policy.", "A refund outside the rule is refused before execution."],
  ["Vendor payments", "Payment rule", "An agent prepares a vendor payment.", "Parmana checks the vendor, amount, account and required approvals.", "The payment proceeds only when the required conditions are satisfied."],
  ["Access", "Access rule", "An automated workflow asks to grant or change access.", "Parmana checks the actor, target, capability and approval conditions.", "Unauthorized access changes are stopped."],
  ["Production changes", "Change rule", "An agent proposes a live system change.", "Parmana checks the change against the required business and operational conditions.", "Only an allowed change can cross the execution boundary."],
  ["Data actions", "Data rule", "Software asks to delete or modify important data.", "Parmana checks the conditions and authority required for the operation.", "The action is held or stopped when the required conditions are missing."],
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const c = useCases[active];

  return (
    <section id="use-cases" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[850px] mx-auto">
          Start with agentic commerce. Extend to every consequential action.
        </h2>
        <p className="mt-3 text-base text-ink/70 text-center max-w-[760px] mx-auto">
          If your business has a rule for an action, Parmana can create a boundary around the execution.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {useCases.map((u, i) => (
            <button key={u[0]} type="button" onClick={() => setActive(i)} className={`rounded-md px-5 py-2 text-sm font-medium min-h-[44px] ${active === i ? "bg-purple text-white" : "border border-border bg-white text-ink/70"}`}>
              {u[0]}
            </button>
          ))}
        </div>
        <div className="mt-10 rounded-md border border-border bg-white p-8 md:p-10 max-w-[800px] mx-auto">
          <p className="text-xs uppercase tracking-wide font-mono text-purple-deep">{c[1]}</p>
          <div className="mt-6 space-y-6">
            <div><p className="text-sm font-semibold text-ink">What is requested</p><p className="mt-2 text-sm leading-[1.65] text-ink/70">{c[2]}</p></div>
            <div><p className="text-sm font-semibold text-ink">What Parmana checks</p><p className="mt-2 text-sm leading-[1.65] text-ink/70">{c[3]}</p></div>
            <div className="pt-4 border-t border-border"><p className="text-sm font-semibold text-purple-deep">What happens</p><p className="mt-2 text-sm leading-[1.65] text-ink/70">{c[4]}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
