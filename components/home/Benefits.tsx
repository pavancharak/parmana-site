import { Eyebrow, Heading, Section, card } from "./Section";

const benefits = [
  { title: "Keep your systems", text: "Use the payments, CRM, ERP and internal systems you already have." },
  { title: "Let AI work", text: "Autonomous systems can act on their own within the limits people set." },
  { title: "Stop what is not allowed", text: "A request outside the allowed boundary is stopped before it reaches the protected system." },
  { title: "Know what happened", text: "See what was requested, what limit applied, what was allowed or stopped and what happened next." },
];

export default function Benefits() {
  return (
    <Section>
      <Eyebrow>Why institutions use Parmana</Eyebrow>
      <Heading>Let AI work without letting it set its own limits.</Heading>

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
