import { ChevronDownIcon } from "@heroicons/react/20/solid";

// Illustrative example. "Your processor" stands in for any payment processor, no partnership implied.
const columns = [
  {
    label: "Today",
    steps: [
      "You set a ₹10,000 refund limit.",
      "Your agent requests a ₹15,000 refund.",
      "Your processor runs it.",
      "You find out later and dispute it.",
    ],
    dispute:
      "You say you set a limit. Your processor says it ran what it received. The agent's logs show the request. Nobody can prove who should have stopped it.",
    highlight: false,
  },
  {
    label: "With Parmana",
    steps: [
      "You set a ₹10,000 refund limit.",
      "Your agent requests a ₹15,000 refund.",
      "Parmana checks it against your rule and blocks it.",
      "It never reaches your processor.",
    ],
    dispute:
      "The signed record shows it: ₹15,000 requested, ₹10,000 allowed, blocked before it ran. Everyone can see what happened and who decided what. No argument.",
    highlight: true,
  },
];

export default function RefundCase() {
  return (
    <section id="proof" className="scroll-mt-20 bg-paper">
      <div className="max-w-container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-[760px]">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">A real example</p>
          <h2 className="mt-4 text-[30px] md:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
            One refund, two ways
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {columns.map((col) => (
            <div
              key={col.label}
              className={`rounded-2xl border p-6 md:p-8 ${
                col.highlight ? "border-purple/50 bg-white shadow-[0_24px_48px_-24px_rgb(67_56_202/0.35)]" : "border-border bg-lavender/40"
              }`}
            >
              <p className={`font-mono text-xs uppercase tracking-[0.16em] ${col.highlight ? "text-purple-deep" : "text-ink/60"}`}>
                {col.label}
              </p>
              <ol className="mt-6 space-y-4">
                {col.steps.map((s, i) => (
                  <li key={s} className="flex gap-4">
                    <span
                      className={`inline-flex h-7 w-7 flex-none items-center justify-center rounded-full font-mono text-xs font-semibold ${
                        col.highlight && i >= 2 ? "bg-purple text-white" : "bg-white text-ink/60 ring-1 ring-border"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-[15px] leading-[1.55] text-ink">{s}</span>
                  </li>
                ))}
              </ol>
              <details className="group mt-8 border-t border-border pt-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-purple-deep [&::-webkit-details-marker]:hidden">
                  If there is a dispute
                  <ChevronDownIcon className="h-5 w-5 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-[15px] leading-[1.65] text-ink/70">{col.dispute}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
