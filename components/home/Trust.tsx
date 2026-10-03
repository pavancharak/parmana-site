import { nav } from "@/lib/config";
import { Eyebrow, Heading, Lead, Section, card } from "./Section";

const items = [
  {
    title: "Checked at more than one point",
    text: "The caller, the decision, the signed authorization and the release to your system are each checked. A refused request never gets an authorization.",
  },
  {
    title: "People decide, twice",
    text: "A policy takes effect only after one person proposes it and a different person approves it with their own signature.",
  },
  {
    title: "Proof anyone can check",
    text: "Records are signed with Ed25519, and optionally ML-DSA-65 as well. They verify offline with the open source @parmana/sign.",
  },
  {
    title: "Honest about limits",
    text: "Parmana protects what goes through it, while its signing keys are safe. We publish what we do not claim, alongside every claim we do.",
  },
];

export default function Trust() {
  return (
    <Section id="trust" tone="lavender">
      <Eyebrow>Trust</Eyebrow>
      <Heading>Built to be checked, not taken on trust.</Heading>
      <Lead>
        Every claim is tied to the code and tests that back it. Evaluators get a guide that names where requests are stopped
        and what an attacker controls in each case.
      </Lead>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {items.map((i) => (
          <div key={i.title} className={`${card} p-8`}>
            <h3 className="text-lg font-bold tracking-tight text-ink">{i.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{i.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold">
        {[
          { label: "Audit guide", href: nav.auditGuide },
          { label: "Evaluate Parmana", href: nav.evaluate },
          { label: "What we do not claim", href: nav.limitations },
          { label: "Source on GitHub", href: nav.github },
        ].map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-purple-deep hover:text-ink">
            {l.label}
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">›</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
