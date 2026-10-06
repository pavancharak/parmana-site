import { Eyebrow, Heading, Section, card } from "./Section";

const benefits = [
  { title: "Keep your systems", text: "Make the infrastructure you already run ready for autonomous use." },
  { title: "Keep business control", text: "Your business defines the authority. Autonomous systems work within it." },
  {
    title: "Reduce execution risk",
    text: "Requests routed through Parmana that fall outside your authority stop before they reach the protected system.",
  },
  { title: "Prove what happened", text: "Evidence for audits, investigations and high consequence operations." },
];

export default function Benefits() {
  return (
    <Section>
      <Eyebrow>Business benefits</Eyebrow>
      <Heading>Adopt autonomy without giving up control.</Heading>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => (
          <div key={b.title} className={`${card} p-8`}>
            <span aria-hidden className="block h-1 w-10 rounded-full bg-gradient-to-r from-purple to-purple-deep" />
            <h3 className="mt-6 text-xl font-bold tracking-tight text-ink">{b.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{b.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
