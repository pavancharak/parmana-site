"use client";

import { useState } from "react";
import { Eyebrow, Heading, Lead, Section, card } from "./Section";

type Scenario = {
  id: string;
  label: string;
  amount: string;
  approval: string;
  allowed: boolean;
  reason: string;
};

const scenarios: Scenario[] = [
  {
    id: "within",
    label: "₹42,000",
    amount: "₹42,000",
    approval: "Not needed",
    allowed: true,
    reason: "Within the declared ₹50,000 authority. The action can proceed and evidence is created.",
  },
  {
    id: "outside",
    label: "₹75,000",
    amount: "₹75,000",
    approval: "Missing",
    allowed: false,
    reason: "Outside the declared authority. The action is stopped before it reaches the protected system.",
  },
  {
    id: "approved",
    label: "₹75,000 approved",
    amount: "₹75,000",
    approval: "Signed",
    allowed: true,
    reason: "A valid approval can extend authority for this exact action. It can be used once.",
  },
];

export default function RefundExample() {
  const [active, setActive] = useState(scenarios[1]);

  return (
    <Section id="example">
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>See the boundary</Eyebrow>
          <Heading>Business authority becomes an execution rule.</Heading>
          <Lead>
            Example: a refund agent can request up to ₹50,000 without escalation.
          </Lead>

          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Refund scenarios">
            {scenarios.map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={active.id === s.id}
                onClick={() => setActive(s)}
                data-track={`example_${s.id}`}
                className={`min-h-[44px] rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active.id === s.id
                    ? "border-purple bg-purple text-white shadow-sm shadow-purple/30"
                    : "border-border bg-paper text-ink/70 hover:border-purple/40"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className={`${card} overflow-hidden`} role="tabpanel" aria-live="polite">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink/50">Autonomous refund</p>
            <span className="font-mono text-xs text-ink/50">ORD-1042</span>
          </div>

          <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 px-6 py-6 text-sm">
            <dt className="text-ink/50">Amount</dt>
            <dd className="font-mono text-ink">{active.amount}</dd>
            <dt className="text-ink/50">Approval</dt>
            <dd className="text-ink">{active.approval}</dd>
          </dl>

          <div
            className={`border-t px-6 py-6 ${
              active.allowed
                ? "border-purple/20 bg-lavender"
                : "border-border bg-paper"
            }`}
          >
            <p className="text-lg font-bold text-ink">{active.allowed ? "Allowed" : "Stopped"}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{active.reason}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
