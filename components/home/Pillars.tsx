import { Eyebrow, Heading, Section, card } from "./Section";

const pillars = [
  {
    tag: "01",
    title: "People set the limits.",
    text: "People responsible for the institution decide what an autonomous system may do, how far it may go and what needs a person to step in.",
    punch: "The AI does not set its own limits.",
  },
  {
    tag: "02",
    title: "Parmana checks before the action.",
    text: "Before a consequential action reaches the system that can carry it out, Parmana checks whether it is within the limit people set.",
    punch: "Within the limit: continue. Outside it: stop.",
  },
  {
    tag: "03",
    title: "You can see what happened.",
    text: "For every allowed or stopped action, Parmana keeps a record showing what was requested, what limit applied and what happened next.",
    punch: "The decision does not disappear into the AI.",
  },
];

export default function Pillars() {
  return (
    <Section id="product" tone="lavender">
      <Eyebrow>What Parmana does</Eyebrow>
      <Heading>People decide. AI acts. Parmana keeps the boundary.</Heading>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.tag} className={`${card} flex flex-col p-8 md:p-10`}>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-purple to-purple-deep font-mono text-sm font-semibold text-white">
              {p.tag}
            </span>
            <h3 className="mt-8 text-2xl font-bold leading-[1.2] tracking-tight text-ink">{p.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-ink/70">{p.text}</p>
            <p className="mt-auto pt-8 text-base font-semibold text-ink">{p.punch}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
