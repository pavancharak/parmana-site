import { Eyebrow, Section } from "./Section";

export default function Problem() {
  return (
    <Section>
      <div className="mx-auto max-w-[920px]">
        <Eyebrow>The problem</Eyebrow>

        <h2 className="mt-4 text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[56px]">
          AI can act on its own. It should not decide what it is allowed to do.
        </h2>

        <p className="mt-8 max-w-[760px] text-lg leading-[1.6] text-ink/70 md:text-xl">
          An autonomous system may decide what action to take. The people responsible for the institution decide the limits it must stay within.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["Who decides?", "People responsible for the institution."],
            ["Who acts?", "The autonomous system."],
            ["Who checks the limit?", "Parmana."],
          ].map(([q, a]) => (
            <div key={q} className="rounded-2xl border border-purple/20 bg-lavender/60 px-6 py-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-deep">{q}</p>
              <p className="mt-3 text-xl font-bold tracking-tight text-ink">{a}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-[760px] text-base leading-relaxed text-ink/60">
          This is the gap between letting AI act and letting AI decide what it is allowed to do.
        </p>
      </div>
    </Section>
  );
}
