import { Eyebrow, Heading, Section, card } from "./Section";

const outcomes = [
  {
    title: "Keep your systems",
    text: "Make existing ERP, CRM, payment and API systems ready for autonomous use.",
  },
  {
    title: "Keep business control",
    text: "Your business defines the authority. Parmana enforces the boundary before consequential actions execute.",
  },
  {
    title: "Keep the evidence",
    text: "Create evidence that can be independently verified after the action.",
  },
];

export default function Outcomes() {
  return (
    <Section tone="lavender">
      <Eyebrow>Business impact</Eyebrow>
      <Heading>Adopt autonomy without giving up control.</Heading>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {outcomes.map((o) => (
          <div key={o.title} className={`${card} p-8`}>
            <h3 className="text-xl font-bold tracking-tight text-ink">{o.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{o.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
