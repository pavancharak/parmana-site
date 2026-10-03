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
    id: "small",
    label: "₹8,000 refund",
    amount: "₹8,000",
    approval: "Not needed",
    allowed: true,
    reason: "Under your ₹10,000 limit. Allowed, and a signed record is kept.",
  },
  {
    id: "large",
    label: "₹15,000, no approval",
    amount: "₹15,000",
    approval: "Missing",
    allowed: false,
    reason: "Over your limit with no signed manager approval. Stopped before it reaches your payment processor.",
  },
  {
    id: "approved",
    label: "₹15,000, approved",
    amount: "₹15,000",
    approval: "Signed by your manager, for this order and amount",
    allowed: true,
    reason: "Over your limit, with a valid signed approval. Allowed once; the same approval cannot be used again.",
  },
];

export default function RefundExample() {
  const [active, setActive] = useState(scenarios[1]);

  return (
    <Section id="example">
      <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Eyebrow>Example</Eyebrow>
          <Heading>Your rule: refunds over ₹10,000 need a manager&apos;s signed approval.</Heading>
          <Lead>
            A refund agent sends three requests. Pick one to see what Parmana does with it. Saying &quot;approved&quot; is not
            enough; the approval has to be signed by someone you trust.
          </Lead>

          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Refund requests">
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
                    : "border-border bg-paper text-ink/70 hover:border-purple/40 hover:text-ink"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className={`${card} overflow-hidden`} role="tabpanel" aria-live="polite">
          <div className="flex items-center justify-between border-b border-border bg-lavender/50 px-6 py-4">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink/50">Refund request</p>
            <span className="font-mono text-xs text-ink/50">ORD-1042</span>
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 px-6 py-6 text-sm">
            <dt className="text-ink/50">Requested by</dt>
            <dd className="text-ink">Refund agent</dd>
            <dt className="text-ink/50">Amount</dt>
            <dd className="font-mono text-ink">{active.amount}</dd>
            <dt className="text-ink/50">Manager approval</dt>
            <dd className="text-ink">{active.approval}</dd>
          </dl>
          <div className={`flex items-start gap-3 border-t px-6 py-5 ${active.allowed ? "border-purple/20 bg-lavender" : "border-border bg-paper"}`}>
            <span
              aria-hidden
              className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full ${active.allowed ? "bg-purple text-white" : "border-2 border-ink/70 text-ink"}`}
            >
              {active.allowed ? (
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                  <path d="M5 10.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none">
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              )}
            </span>
            <div>
              <p className="text-base font-bold text-ink">{active.allowed ? "Allowed" : "Stopped"}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/70">{active.reason}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
