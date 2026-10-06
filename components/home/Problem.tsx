import { Eyebrow, Section } from "./Section";

export default function Problem() {
  return (
    <Section>
      <div className="mx-auto max-w-[880px] text-center">
        <Eyebrow>The problem</Eyebrow>
        <h2 className="mt-4 text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[56px]">
          AI can request actions. Your business still holds the authority.
        </h2>
        <p className="mx-auto mt-8 max-w-[620px] text-lg leading-[1.6] text-ink/70 md:text-xl">
          Autonomous systems will request actions in the systems you already run. The question is not whether they can.
        </p>
        <div className="mx-auto mt-12 grid max-w-[760px] gap-4 text-left sm:grid-cols-2">
          {["Is this action allowed?", "Can you prove what was authorized?"].map((q) => (
            <p
              key={q}
              className="rounded-2xl border border-purple/20 bg-lavender/60 px-6 py-6 text-xl font-bold tracking-tight text-ink md:text-2xl"
            >
              {q}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
