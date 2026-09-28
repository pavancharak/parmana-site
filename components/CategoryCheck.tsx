"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import { nav, scheduleUrl } from "@/lib/config";

// Each answer scores 0 (logs only), 1 (records), or 2 (proof).
const questions = [
  {
    q: "When an agent requests a payment or refund, what checks it before it runs?",
    a: ["Nothing. Our processor runs it.", "Code inside the agent or our app.", "A separate system checks it against our rules."],
  },
  {
    q: "After it runs, what do you have?",
    a: ["Transaction logs.", "Logs, audit trails, and a written policy.", "A signed record of the rule, the request, and the decision."],
  },
  {
    q: "You change a spending limit today. When do your agents follow it?",
    a: ["When someone rebuilds or redeploys them.", "Some tools pick it up. Not all.", "Every request is checked against the current rule."],
  },
  {
    q: "Two requests are each under the limit, but together they go over. What happens?",
    a: ["Both go through.", "We'd find it in a review later.", "The total is checked before either runs."],
  },
  {
    q: "A regulator asks you to prove one specific action was authorized. What do you show?",
    a: ["We'd have to investigate.", "Our logs and our policy document.", "Independent proof the check happened before it ran."],
  },
];

const results = {
  A: {
    name: "Has proof",
    body: "You can show that requests were checked before they ran, with a record someone else can verify. Keep it that way as you add agents. We can help you test the edges.",
  },
  B: {
    name: "Has records",
    body: "You can show what happened. You can't yet prove it was checked first. That gap is where questions from regulators and disputes land. It is also the easiest one to close.",
  },
  C: {
    name: "Just logs",
    body: "You have a record that things ran, and not much else. That is the most exposed position when someone asks whether an action was authorized. Start with your highest-value agent actions.",
  },
} as const;

function categorize(score: number): keyof typeof results {
  if (score >= 9) return "A";
  if (score >= 4) return "B";
  return "C";
}

export default function CategoryCheck() {
  const [answers, setAnswers] = useState<number[]>([]);
  const current = answers.length;
  const done = current === questions.length;
  const category = done ? categorize(answers.reduce((s, v) => s + v, 0)) : null;

  const answer = (score: number) => {
    const next = [...answers, score];
    setAnswers(next);
    if (current === 0) track("category_check_start");
    if (next.length === questions.length) {
      track("category_check_complete", { category: categorize(next.reduce((s, v) => s + v, 0)) });
    }
  };

  return (
    <section id="check" className="scroll-mt-20 bg-paper">
      <div className="max-w-container mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">5-minute check</p>
          <h2 className="mt-4 text-[30px] md:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
            Where do you stand today?
          </h2>
          <p className="mt-5 text-lg leading-[1.65] text-ink/70">
            Five questions about how your agents work now. No signup. Find out if you are Category A, B, or C.
          </p>
          <p className="mt-4 text-sm text-ink/50">Your answers stay in your browser.</p>
        </div>

        <div className="rounded-2xl border border-border bg-white shadow-[0_30px_60px_-20px_rgb(67_56_202/0.25),0_18px_36px_-18px_rgb(0_0_0/0.15)]">
          <div className="flex items-center gap-1.5 border-b border-border px-6 py-4 md:px-8" aria-hidden>
            {questions.map((_, i) => (
              <span key={i} className={`h-1.5 flex-1 rounded-full transition ${i < current ? "bg-purple" : "bg-lavender"}`} />
            ))}
          </div>

          <div className="px-6 py-8 md:px-8 md:py-10" aria-live="polite">
            {!done && (
              <>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
                  Question {current + 1} of {questions.length}
                </p>
                <h3 className="mt-3 text-xl md:text-2xl font-semibold leading-[1.3] text-ink">{questions[current].q}</h3>
                <div className="mt-6 flex flex-col gap-3">
                  {questions[current].a.map((text, score) => (
                    <button
                      key={text}
                      type="button"
                      onClick={() => answer(score)}
                      className="rounded-lg border border-border bg-white px-5 py-4 min-h-[44px] text-left text-[15px] text-ink transition hover:border-purple hover:bg-lavender/50"
                    >
                      {text}
                    </button>
                  ))}
                </div>
                {current > 0 && (
                  <button
                    type="button"
                    onClick={() => setAnswers(answers.slice(0, -1))}
                    className="mt-5 text-sm font-semibold text-purple-deep hover:underline"
                  >
                    Back
                  </button>
                )}
              </>
            )}

            {done && category && (
              <>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">Your result</p>
                <div className="mt-4 flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-purple font-mono text-2xl font-semibold text-white">
                    {category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-ink">
                    Category {category}: {results[category].name}
                  </h3>
                </div>
                <p className="mt-5 text-[15px] leading-[1.7] text-ink/70">{results[category].body}</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={scheduleUrl}
                    data-track="cta_book_audit"
                    className="inline-flex items-center justify-center rounded-full bg-purple px-6 py-3 min-h-[44px] text-sm font-semibold text-white transition hover:bg-purple-deep"
                  >
                    Book a 30-minute audit
                  </a>
                  <a
                    href={nav.howItWorks}
                    className="inline-flex items-center justify-center rounded-full border border-purple/40 px-6 py-3 min-h-[44px] text-sm font-semibold text-purple-deep transition hover:border-purple"
                  >
                    See how it works
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setAnswers([])}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink/60 hover:text-purple-deep"
                >
                  <ArrowPathIcon className="h-4 w-4" /> Start over
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
