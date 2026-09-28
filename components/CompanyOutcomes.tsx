import { CheckIcon, ChevronDownIcon, MinusIcon } from "@heroicons/react/20/solid";
import { nav } from "@/lib/config";

type Line = { speaker: "Regulator" | "You"; text: string };

// Illustrative scenario. Same request, same rule, three levels of readiness.
const companies: {
  letter: string;
  name: string;
  summary: string;
  checks: [boolean, boolean, boolean];
  conversation: Line[];
  highlight?: boolean;
}[] = [
  {
    letter: "A",
    name: "Has proof",
    summary: "The request was checked before it ran and blocked. There is a signed record of the check.",
    checks: [true, true, true],
    highlight: true,
    conversation: [
      { speaker: "Regulator", text: "Why didn't this refund go through?" },
      { speaker: "You", text: "Our rule was ₹10,000. The ₹15,000 request was checked and blocked. Here is the signed record." },
      { speaker: "Regulator", text: "That answers it." },
    ],
  },
  {
    letter: "B",
    name: "Has records",
    summary: "The refund went through. There are logs, audit trails, and a written policy. Nothing shows a check before it ran.",
    checks: [false, false, true],
    conversation: [
      { speaker: "Regulator", text: "Did you check this before it ran?" },
      { speaker: "You", text: "We have logs and a policy." },
      { speaker: "Regulator", text: "Show me the check." },
      { speaker: "You", text: "We have a process." },
    ],
  },
  {
    letter: "C",
    name: "Just logs",
    summary: "The refund went through. There is a transaction log. That is all.",
    checks: [false, false, false],
    conversation: [
      { speaker: "Regulator", text: "Why did this happen?" },
      { speaker: "You", text: "We're investigating." },
    ],
  },
];

const checkLabels = ["Checked before it ran", "Independent proof", "Records beyond a log"];

export default function CompanyOutcomes() {
  return (
    <section id="outcomes" className="scroll-mt-20 bg-lavender/60 border-y border-border">
      <div className="max-w-container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-[760px]">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">Three positions</p>
          <h2 className="mt-4 text-[30px] md:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
            Same request. Three different answers.
          </h2>
          <p className="mt-5 text-lg leading-[1.65] text-ink/70">
            An agent requests a ₹15,000 refund. Your limit is ₹10,000. A regulator asks what happened. Here is how
            that goes for three companies.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {companies.map((c) => (
            <div
              key={c.letter}
              className={`flex flex-col rounded-2xl border bg-white p-6 md:p-8 ${
                c.highlight ? "border-purple/50 shadow-[0_24px_48px_-24px_rgb(67_56_202/0.35)]" : "border-border"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg font-mono text-lg font-semibold ${
                    c.highlight ? "bg-purple text-white" : "bg-lavender text-purple-deep ring-1 ring-purple/15"
                  }`}
                >
                  {c.letter}
                </span>
                <h3 className="text-xl font-bold tracking-[-0.02em] text-ink">{c.name}</h3>
              </div>
              <p className="mt-4 text-[15px] leading-[1.65] text-ink/70">{c.summary}</p>

              <ul className="mt-6 space-y-2 border-t border-border pt-5">
                {checkLabels.map((label, i) => (
                  <li key={label} className="flex items-center gap-2.5 text-sm">
                    {c.checks[i] ? (
                      <CheckIcon className="h-4 w-4 flex-none text-purple-deep" aria-label="Yes" />
                    ) : (
                      <MinusIcon className="h-4 w-4 flex-none text-ink/30" aria-label="No" />
                    )}
                    <span className={c.checks[i] ? "text-ink" : "text-ink/50"}>{label}</span>
                  </li>
                ))}
              </ul>

              <details className="group mt-6 border-t border-border pt-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-purple-deep [&::-webkit-details-marker]:hidden">
                  How the conversation goes
                  <ChevronDownIcon className="h-5 w-5 transition-transform group-open:rotate-180" />
                </summary>
                <dl className="mt-4 space-y-3">
                  {c.conversation.map((line, i) => (
                    <div key={i}>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">{line.speaker}</dt>
                      <dd className="mt-0.5 text-[15px] leading-[1.55] text-ink">{line.text}</dd>
                    </div>
                  ))}
                </dl>
              </details>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="max-w-[640px] text-lg leading-[1.6] text-ink">
            The sooner you have proof, the stronger your position when you are asked. Start now and you have options.
            Wait and you are reacting.
          </p>
          <a
            href={nav.check}
            data-track="cta_find_where_you_stand"
            className="inline-flex flex-none items-center justify-center rounded-full bg-purple px-7 py-3 text-base font-semibold text-white min-h-[44px] transition hover:bg-purple-deep"
          >
            Which one are you?
          </a>
        </div>
      </div>
    </section>
  );
}
