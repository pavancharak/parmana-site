"use client";

import { useState } from "react";
import { Eyebrow, Heading, Section, card } from "./Section";

// Illustrative rule, not customer data.
const LIMIT = 50000;
const MIN = 5000;
const MAX = 100000;
const STEP = 5000;
const presets = [42000, 50000, 75000];

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function RefundExample() {
  const [amount, setAmount] = useState(75000);
  const allowed = amount <= LIMIT;

  return (
    <Section id="example" tone="lavender">
      <div className="text-center">
        <Eyebrow>Example</Eyebrow>
        <Heading center>What happens when autonomy exceeds authority?</Heading>
      </div>

      <div className={`${card} mx-auto mt-16 max-w-[1040px] overflow-hidden`}>
        <div className="grid md:grid-cols-2">
          <div className="border-b border-border p-8 md:border-b-0 md:border-r md:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">Business rule</p>
            <p className="mt-2 text-2xl font-bold tracking-tight text-ink md:text-3xl">Refunds up to {inr(LIMIT)}</p>

            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">Autonomous system requests</p>
            <p className="mt-2 font-mono text-4xl font-semibold text-ink md:text-5xl" aria-hidden>
              {inr(amount)}
            </p>

            <label htmlFor="refund-amount" className="sr-only">
              Requested refund amount
            </label>
            <input
              id="refund-amount"
              type="range"
              min={MIN}
              max={MAX}
              step={STEP}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              aria-valuetext={inr(amount)}
              data-track="example_slider"
              className="mt-8 w-full cursor-pointer accent-purple"
            />
            <div className="mt-2 flex justify-between font-mono text-xs text-ink/50">
              <span>{inr(MIN)}</span>
              <span>{inr(MAX)}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {presets.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setAmount(p)}
                  aria-pressed={amount === p}
                  data-track={`example_${p}`}
                  className={`min-h-[44px] rounded-full border px-4 py-2 font-mono text-sm font-semibold transition-colors ${
                    amount === p
                      ? "border-purple bg-purple text-white shadow-sm shadow-purple/30"
                      : "border-border bg-paper text-ink/70 hover:border-purple/40 hover:text-ink"
                  }`}
                >
                  {inr(p)}
                </button>
              ))}
            </div>
          </div>

          <div
            aria-live="polite"
            className={`flex flex-col justify-center p-8 transition-colors duration-300 motion-reduce:transition-none md:p-12 ${
              allowed ? "bg-lavender" : "bg-ink text-white"
            }`}
          >
            <p className={`font-mono text-[11px] uppercase tracking-[0.16em] ${allowed ? "text-ink/50" : "text-white/60"}`}>Parmana</p>
            <div className="mt-4 flex items-center gap-4">
              <span
                aria-hidden
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${
                  allowed ? "bg-purple text-white" : "border-2 border-white/80 text-white"
                }`}
              >
                {allowed ? (
                  <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none">
                    <path d="M5 10.5l3 3 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                    <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                )}
              </span>
              <p className="text-5xl font-bold tracking-[-0.03em] md:text-6xl">{allowed ? "ALLOWED" : "STOPPED"}</p>
            </div>
            <p className={`mt-4 text-lg font-semibold ${allowed ? "text-ink" : "text-white"}`}>
              {inr(amount)} requested. {allowed ? "Within declared authority." : "Outside declared authority."}
            </p>
            <ul className={`mt-8 space-y-2 text-base ${allowed ? "text-ink/70" : "text-white/75"}`}>
              <li className="flex items-center gap-2">
                <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${allowed ? "bg-purple" : "bg-white/70"}`} />
                {allowed ? "Proceeds to your payment processor, once." : "No execution. It never reaches your payment processor."}
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${allowed ? "bg-purple" : "bg-white/70"}`} />
                Evidence retained, verifiable independently.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
