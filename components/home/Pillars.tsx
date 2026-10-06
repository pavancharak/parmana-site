import { Eyebrow, Heading, Section, card } from "./Section";

const pillars = [
  {
    tag: "Ready",
    title: "Make existing systems ready for autonomy.",
    text: "Keep your payments, CRM and internal APIs. Parmana sits in front of them.",
    punch: "No rebuild.",
  },
  {
    tag: "Enforce",
    title: "Enforce business authority over autonomous actions.",
    text: "Your business rules become the boundary every routed request is checked against.",
    punch: "Allowed proceeds. Outside authority stops.",
  },
  {
    tag: "Prove",
    title: "Provide independently verifiable evidence.",
    text: "Know what was requested, what authority applied and what happened.",
    punch: "Proof beyond the system that produced it.",
  },
];

export default function Pillars() {
  return (
    <Section id="product" tone="lavender">
      <Eyebrow>What Parmana does</Eyebrow>
      <Heading>Ready. Enforced. Proven.</Heading>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <div key={p.tag} className={`${card} flex flex-col p-8 md:p-10`}>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-purple to-purple-deep font-mono text-sm font-semibold text-white">
                {i + 1}
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">{p.tag}</p>
            </div>
            <h3 className="mt-8 text-2xl font-bold leading-[1.2] tracking-tight text-ink">{p.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-ink/70">{p.text}</p>
            <p className="mt-auto pt-8 text-base font-semibold text-ink">{p.punch}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
