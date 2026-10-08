import { nav } from "@/lib/config";
import { Arrow, Eyebrow, Heading, Section, card, primaryButton, secondaryButton } from "./Section";

const items = [
  {
    title: "Checked before the action",
    text: "Parmana checks the action before it reaches the system that can carry it out. A request outside the limit is stopped first.",
  },
  {
    title: "The limit follows the exact action",
    text: "The decision is tied to what was requested. Change the amount, target or action and the earlier decision no longer applies.",
  },
  {
    title: "The record can be checked later",
    text: "Parmana keeps a signed record of the request, the limit used and the decision so it can be checked separately later.",
  },
];

const evidenceLinks = [
  { label: "Audit guide", href: nav.auditGuide },
  { label: "What we do not claim", href: nav.limitations },
];

export default function Trust() {
  return (
    <Section id="trust" tone="lavender">
      <Eyebrow>How you can trust it</Eyebrow>
      <Heading>Do not rely on the AI story about what it did.</Heading>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className={`${card} p-8 md:p-10`}>
            <h3 className="text-xl font-bold tracking-tight text-ink">{i.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{i.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-3">
        <a href={nav.evaluate} target="_blank" rel="noopener noreferrer" data-track="cta_evaluate_trust" className={primaryButton}>
          Evaluate Parmana <Arrow />
        </a>
        <a href={nav.github} target="_blank" rel="noopener noreferrer" data-track="cta_source_trust" className={secondaryButton}>
          View the source <Arrow />
        </a>
        <span className="flex flex-wrap gap-x-6 gap-y-2 pl-2 text-sm font-semibold">
          {evidenceLinks.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-purple-deep hover:text-ink">
              {l.label} <Arrow />
            </a>
          ))}
        </span>
      </div>
    </Section>
  );
}
