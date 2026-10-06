import { nav } from "@/lib/config";
import { Eyebrow, Heading, Lead, Section, card } from "./Section";

const items = [
  {
    title: "Enforced before execution",
    text: "Business authority is checked before the action reaches the protected system.",
  },
  {
    title: "Bound to the action",
    text: "Authorization is tied to what was actually approved, not a broad reusable permission.",
  },
  {
    title: "Independently verifiable",
    text: "Evidence can be checked with public verification tooling, separate from the AI system.",
  },
];

export default function Trust() {
  return (
    <Section id="trust" tone="lavender">
      <Eyebrow>Trust</Eyebrow>
      <Heading>Don't just log autonomous actions. Prove their authority.</Heading>
      <Lead>Use evidence for audits, investigations and high consequence operations.</Lead>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className={`${card} p-8`}>
            <h3 className="text-lg font-bold tracking-tight text-ink">{i.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{i.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold">
        <a
          href={nav.evaluate}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-deep hover:text-ink"
        >
          Evaluate Parmana →
        </a>
        <a
          href={nav.auditGuide}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-deep hover:text-ink"
        >
          Read the audit guide →
        </a>
        <a
          href={nav.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-deep hover:text-ink"
        >
          View the source →
        </a>
      </div>
    </Section>
  );
}
