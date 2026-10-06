import { nav } from "@/lib/config";
import { Arrow, Eyebrow, Heading, Section, card, primaryButton, secondaryButton } from "./Section";

const items = [
  {
    title: "Enforced before execution",
    text: "Business authority is checked before the action reaches the protected system. A refused request never gets an authorization.",
  },
  {
    title: "Bound to the action",
    text: "An authorization covers the exact action that was approved, and is used once. Change the action and it no longer matches.",
  },
  {
    title: "Independently verifiable",
    text: "Evidence is signed and checks offline with the open source verification tooling, without relying on the AI system or on Parmana.",
  },
];

const evidenceLinks = [
  { label: "Audit guide", href: nav.auditGuide },
  { label: "What we do not claim", href: nav.limitations },
];

export default function Trust() {
  return (
    <Section id="trust" tone="lavender">
      <Eyebrow>Trust</Eyebrow>
      <Heading>Don&apos;t just log autonomous actions. Prove their authority.</Heading>

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
