import { CheckIcon } from "@heroicons/react/20/solid";

// Factual comparison, no competitor named.
const rows = [
  {
    topic: "Where the check lives",
    inside: "In the same code it is meant to control.",
    outside: "In a separate checkpoint, apart from that code.",
  },
  {
    topic: "If that system has a bug or a bad setting",
    inside: "The check can be affected along with it.",
    outside: "The check is unchanged. Requests still have to pass it.",
  },
  {
    topic: "When you change a rule",
    inside: "Each system may need its own update.",
    outside: "Change it once. Every request is checked against it.",
  },
  {
    topic: "Proof afterwards",
    inside: "Logs written by the same system.",
    outside: "Signed receipts anyone can verify.",
  },
];

export default function InsideOutside() {
  return (
    <section id="why-outside" className="scroll-mt-20 bg-paper">
      <div className="max-w-container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-[760px]">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">Why outside matters</p>
          <h2 className="mt-4 text-[30px] md:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
            A check inside your system, or a check outside it
          </h2>
          <p className="mt-5 text-lg leading-[1.65] text-ink/70">
            Most checks today are built into the system they protect. Parmana puts the check outside. Here is what
            that changes.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_30px_60px_-30px_rgb(67_56_202/0.25)]">
          <div className="hidden md:grid grid-cols-[1fr_1.2fr_1.2fr] border-b border-border bg-lavender/60">
            <span className="px-6 py-4" />
            <span className="px-6 py-4 font-mono text-xs uppercase tracking-[0.16em] text-ink/60">Built in</span>
            <span className="px-6 py-4 font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">
              Parmana, outside
            </span>
          </div>
          <dl>
            {rows.map((r) => (
              <div
                key={r.topic}
                className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr_1.2fr] border-b border-border last:border-b-0"
              >
                <dt className="px-6 pt-5 md:py-5 text-[15px] font-semibold text-ink">{r.topic}</dt>
                <dd className="px-6 pt-3 md:py-5 text-[15px] leading-[1.6] text-ink/60">
                  <span className="md:hidden font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
                    Built in:{" "}
                  </span>
                  {r.inside}
                </dd>
                <dd className="flex gap-2.5 px-6 pt-2 pb-5 md:py-5 text-[15px] leading-[1.6] text-ink md:bg-lavender/30">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-purple-deep" aria-hidden />
                  <span>
                    <span className="md:hidden font-mono text-[11px] uppercase tracking-[0.16em] text-purple-deep">
                      Parmana:{" "}
                    </span>
                    {r.outside}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-10 max-w-[760px] border-l-2 border-purple pl-5 text-xl font-semibold leading-[1.4] text-ink">
          Built-in checks still have a place. Parmana adds one that doesn&apos;t depend on the system it protects.
        </p>
      </div>
    </section>
  );
}
