const signals = [
  {
    who: "Regulators",
    ask: "are asking whether an agent's action stayed within what you authorized. Not what your logs say afterwards. Proof the check happened.",
  },
  {
    who: "Payment networks",
    ask: "want to know an agent's request was checked before money moved, not reviewed after it did.",
  },
];

export default function WhyNow() {
  return (
    <section className="bg-lavender/60 border-y border-border">
      <div className="max-w-container mx-auto px-6 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">Why now</p>
          <h2 className="mt-4 text-[28px] md:text-[40px] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
            The question is no longer &ldquo;what happened?&rdquo;
          </h2>
          <p className="mt-5 text-lg leading-[1.65] text-ink/70">
            It is &ldquo;can you prove it was authorized?&rdquo; Most teams can show what happened. Far fewer can prove
            it was checked first.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {signals.map((s) => (
            <div key={s.who} className="rounded-2xl border border-border bg-white p-6 md:p-8">
              <p className="text-lg leading-[1.6] text-ink/70">
                <span className="font-semibold text-ink">{s.who}</span> {s.ask}
              </p>
            </div>
          ))}
          <div className="rounded-2xl bg-purple-deep p-6 md:p-8">
            <p className="text-lg leading-[1.6] text-white/90">
              The gap between <span className="font-semibold text-white">&ldquo;we can show what happened&rdquo;</span> and{" "}
              <span className="font-semibold text-white">&ldquo;we can prove it was authorized&rdquo;</span> is where your
              liability sits. Firms that close it first have the advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
