import { Eyebrow, Heading, Lead, Section, card } from "./Section";

const facts = [
  { label: "Signatures", value: "Ed25519, with optional ML-DSA-65" },
  { label: "Human approval", value: "Signed by your approver, used once" },
  { label: "Policy changes", value: "One person proposes, another approves" },
  { label: "Verification", value: "Offline, with your public keys" },
];

const steps = [
  {
    n: "01",
    title: "A request comes in",
    text: "An agent, an app or a person requests an action, such as a refund, a merge or a message. The request names the action, the target and the details.",
  },
  {
    n: "02",
    title: "Parmana checks it",
    text: "The request is checked against your rules, and against a signed approval when your rules need one. If anything fails, nothing is signed and nothing runs.",
  },
  {
    n: "03",
    title: "Only what you allowed runs",
    text: "An allowed request gets a signed, single use authorization. The gateway checks it again before the action reaches your system.",
  },
  {
    n: "04",
    title: "You keep the proof",
    text: "Every decision leaves a signed record. Anyone with your public keys can check it later, without Parmana.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <div className="border-y border-border bg-paper">
        <dl className="max-w-container mx-auto grid grid-cols-2 gap-px px-6 md:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="py-6 md:py-8">
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">{f.label}</dt>
              <dd className="mt-1.5 text-sm font-semibold text-ink md:text-base">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Section id="how-it-works" tone="lavender">
        <Eyebrow>How it works</Eyebrow>
        <Heading>A checkpoint between your agents and your systems.</Heading>
        <Lead>
          Parmana sits outside the systems you already run. Requests that go through it reach those systems only when your
          rules allow them. Nothing you run today has to change.
        </Lead>

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.n} className={`${card} relative p-7`}>
              <span className="font-mono text-xs text-purple-deep">{s.n}</span>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{s.text}</p>
              {i < steps.length - 1 && (
                <span aria-hidden className="absolute -right-4 top-1/2 hidden h-px w-3 bg-purple/40 lg:block" />
              )}
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
