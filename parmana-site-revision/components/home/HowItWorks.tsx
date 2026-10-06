import { Eyebrow, Heading, Lead, Section, card } from "./Section";

const steps = [
  {
    n: "01",
    title: "Ready",
    text: "Connect autonomous systems to the ERP, CRM, payment and API systems you already run.",
  },
  {
    n: "02",
    title: "Enforce",
    text: "Turn business authority into execution boundaries for consequential actions.",
  },
  {
    n: "03",
    title: "Prove",
    text: "Keep evidence that independently verifies what was authorized and what happened.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" tone="lavender">
      <Eyebrow>What Parmana does</Eyebrow>
      <Heading>Ready. Enforced. Proven.</Heading>
      <Lead>
        Autonomous systems can use your existing infrastructure without taking unrestricted business authority with them.
      </Lead>

      <ol className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n} className={`${card} p-8`}>
            <span className="font-mono text-sm font-semibold text-purple-deep">{s.n}</span>
            <h3 className="mt-5 text-2xl font-bold tracking-tight text-ink">{s.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
