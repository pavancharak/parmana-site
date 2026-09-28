"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { messaging } from "@/lib/config";

// Illustrative example rule, not customer data.
const LIMIT = "₹10,000";
const requests = [
  { amount: "₹8,000", authorized: true },
  { amount: "₹15,000", authorized: false },
] as const;

const steps = [
  { owner: "You", title: "Set the rule" },
  { owner: "Parmana", title: "Check the request" },
  { owner: "Your processor", title: "Run what passed" },
];

const principles = [
  {
    title: "You keep your rules",
    body: "You write them. You change them when you need to. Parmana reads them and never edits them.",
  },
  {
    title: "Parmana stays independent",
    body: "It sits in front of your systems, not inside them. Your processor verifies Parmana's signed decision itself.",
  },
  {
    title: "Your processor stays fast",
    body: "It runs authorized actions. It doesn't carry your approval logic, so it doesn't slow down.",
  },
];

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">{children}</p>;
}

export default function ThreeLayers() {
  const [step, setStep] = useState(0);
  const [reqIndex, setReqIndex] = useState(1);
  const req = requests[reqIndex];

  const go = (next: number) => {
    setStep(next);
    track("three_layer_step", { step: next + 1 });
  };

  return (
    <section id="how-it-works" className="scroll-mt-20 bg-paper">
      <div className="max-w-container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-[760px]">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">How it works</p>
          <h2 className="mt-4 text-[30px] md:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
            Approval is three jobs. Each one has its own owner.
          </h2>
          <p className="mt-5 text-lg leading-[1.65] text-ink/70">
            You write the rules. Parmana checks every request against them. Your payment processor runs only what
            passed. Step through one refund request.
          </p>
        </div>

        <div className="relative mt-14">
          <div aria-hidden className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-purple/20 via-lavender to-purple-deep/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_30px_60px_-20px_rgb(67_56_202/0.25),0_18px_36px_-18px_rgb(0_0_0/0.15)]">
            {/* Request picker */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-lavender/60 px-5 py-3 md:px-8">
              <span className="font-mono text-xs text-ink/60">refund-agent requests</span>
              <div role="radiogroup" aria-label="Refund request amount" className="flex gap-2">
                {requests.map((r, i) => (
                  <button
                    key={r.amount}
                    type="button"
                    role="radio"
                    aria-checked={reqIndex === i}
                    onClick={() => setReqIndex(i)}
                    className={`rounded-full px-4 py-1.5 min-h-[36px] font-mono text-xs font-semibold transition ${
                      reqIndex === i
                        ? "bg-purple text-white"
                        : "border border-purple/30 bg-white text-purple-deep hover:border-purple"
                    }`}
                  >
                    {r.amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Step tabs */}
            <ol className="grid grid-cols-3 border-b border-border">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-current={step === i ? "step" : undefined}
                    className={`relative flex w-full flex-col items-start gap-1 px-3 py-4 md:px-8 text-left transition ${
                      step === i ? "bg-white" : "bg-paper hover:bg-lavender/40"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 bottom-0 h-0.5 transition ${step >= i ? "bg-purple" : "bg-transparent"}`}
                    />
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-purple-deep">
                      0{i + 1} · {s.owner}
                    </span>
                    <span className={`text-sm md:text-base font-semibold ${step === i ? "text-ink" : "text-ink/60"}`}>
                      {s.title}
                    </span>
                  </button>
                </li>
              ))}
            </ol>

            {/* Panel */}
            <div className="min-h-[260px] px-5 py-8 md:px-8 md:py-10" aria-live="polite">
              {step === 0 && (
                <div className="max-w-[640px]">
                  <Label>Your rule</Label>
                  <p className="mt-3 text-xl md:text-2xl font-semibold text-ink">
                    Refund agent may request refunds up to <span className="font-mono">{LIMIT}</span>.
                  </p>
                  <p className="mt-4 text-[15px] leading-[1.65] text-ink/70">
                    This is your business decision. You write it down. You change it to ₹12,000 next week if you want.
                    Parmana reads it and never touches it.
                  </p>
                </div>
              )}

              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Label>Request vs. rule</Label>
                    <div
                      className={`mt-4 flex flex-wrap items-center justify-between gap-3 rounded-lg px-4 py-3 ${
                        req.authorized ? "border border-purple/30 bg-lavender" : "border border-border bg-white"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-white ${
                            req.authorized ? "bg-purple" : "bg-ink"
                          }`}
                        >
                          {req.authorized ? <CheckIcon className="h-4 w-4" /> : <XMarkIcon className="h-4 w-4" />}
                        </span>
                        <span className="text-[15px] text-ink">
                          Refund of <span className="font-mono font-semibold">{req.amount}</span>
                        </span>
                      </span>
                      <span className={`font-mono text-xs ${req.authorized ? "text-purple-deep" : "text-ink/60"}`}>
                        {req.authorized ? "Within rule · Authorized" : "Over rule · Blocked"}
                      </span>
                    </div>
                    <p className="mt-4 text-[15px] leading-[1.65] text-ink/70">
                      Parmana reads your {LIMIT} rule and checks the {req.amount} request against it, before anything
                      runs. {req.authorized ? "It is within the rule, so it is authorized." : "It is over the rule, so it is blocked."}
                    </p>
                  </div>
                  <div>
                    <Label>Signed record</Label>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-ink px-4 py-4 font-mono text-[12px] leading-[1.8] text-white/90">
{`request   refund ${req.amount}
rule      max ${LIMIT}
decision  ${req.authorized ? "authorized" : "blocked"}
signature ed25519 ✓`}
                    </pre>
                    <p className="mt-3 text-sm text-ink/60">This is the proof. Anyone with the public key can verify it.</p>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="max-w-[640px]">
                  <Label>Your processor</Label>
                  {req.authorized ? (
                    <>
                      <p className="mt-3 text-xl md:text-2xl font-semibold text-ink">
                        The {req.amount} refund proceeds.
                      </p>
                      <p className="mt-4 text-[15px] leading-[1.65] text-ink/70">
                        Your processor verifies Parmana&apos;s signed decision and runs the refund. It records what
                        happened. The proof connects the rule, the check, and the result.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="mt-3 text-xl md:text-2xl font-semibold text-ink">
                        The {req.amount} refund never reaches it.
                      </p>
                      <p className="mt-4 text-[15px] leading-[1.65] text-ink/70">
                        Nothing runs. If anyone asks later, the signed record shows exactly what was requested, what
                        your rule allowed, and why it was blocked.
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-border px-5 py-4 md:px-8">
              <button
                type="button"
                onClick={() => go(step - 1)}
                disabled={step === 0}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 min-h-[44px] text-sm font-semibold text-purple-deep transition hover:bg-lavender disabled:opacity-30 disabled:hover:bg-transparent"
              >
                <ArrowLeftIcon className="h-4 w-4" /> Back
              </button>
              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => go(step + 1)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-purple px-5 py-2 min-h-[44px] text-sm font-semibold text-white transition hover:bg-purple-deep"
                >
                  Next <ArrowRightIcon className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setReqIndex(reqIndex === 0 ? 1 : 0);
                    go(0);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-purple/40 px-5 py-2 min-h-[44px] text-sm font-semibold text-purple-deep transition hover:border-purple"
                >
                  Try {requests[reqIndex === 0 ? 1 : 0].amount}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
          {principles.map((p) => (
            <div key={p.title} className="border-t border-border pt-6">
              <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-ink/70">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <p className="border-l-2 border-purple pl-5 text-xl font-semibold leading-[1.4] text-ink">
            {messaging.tagline}
          </p>
          <p className="text-[15px] leading-[1.7] text-ink/70">
            Why not let your processor do the checking? Its job is to move payments fast. If it paused every request to
            check your business rules, it would slow down for all its customers. Approval is your decision. The check
            belongs to someone whose only job is checking.
          </p>
        </div>
      </div>
    </section>
  );
}
