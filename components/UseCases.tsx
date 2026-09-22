"use client";

import { useState } from "react";

const useCases = [
  ["Refund disputes", "Refund rule", "An agent proposes a refund after a customer dispute.", "Parmana checks the exact refund against your rule: is this a first dispute, is the amount within the limit.", "A refund that matches the rule gets proof. When the chargeback comes, you show the proof instead of losing the dispute by default."],
  ["Merchant onboarding", "Onboarding rule", "An agent proposes approving a new merchant.", "Parmana checks identity, risk conditions and required documentation against your onboarding rule.", "Only a merchant that satisfies the rule gets proof of approval, ready to show if the approval is ever questioned."],
  ["Compliance approvals", "Approval rule", "An agent proposes a compliance sign off on a transaction or account action.", "Parmana checks the request against the exact compliance rule that applies.", "The approval carries proof a regulator can verify independently, not just your word that the rule was followed."],
  ["Payment settlement", "Settlement rule", "An agent proposes releasing a settlement to a merchant or vendor.", "Parmana checks the amount, account and any required conditions before the release proceeds.", "A settlement that matches the rule proceeds with proof attached, so a later dispute has an answer."],
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const c = useCases[active];

  return (
    <section id="use-cases" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[850px] mx-auto">
          Start with refund disputes. Extend to every rule you need to prove.
        </h2>
        <p className="mt-3 text-base text-ink/70 text-center max-w-[760px] mx-auto">
          If your business has a rule for an action, Parmana checks it and proves the outcome.
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
