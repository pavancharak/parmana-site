import { useCases } from "@/lib/useCases";
import { Arrow, Eyebrow, Heading, Section, card } from "./Section";

const items = [
  { slug: "payment", text: "Control what autonomous AI can pay." },
  { slug: "refund", text: "Stop refunds above the limit." },
  { slug: "procurement", text: "Control purchasing limits." },
  { slug: "customer", text: "Limit changes to customer accounts." },
  { slug: "engineering", text: "Limit important repository actions." },
];

export default function UseCases() {
  return (
    <Section id="use-cases">
      <Eyebrow>Examples</Eyebrow>
      <Heading>What can you let AI do?</Heading>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((i) => (
          <a
            key={i.slug}
            href={`/agents?use=${i.slug}`}
            data-track={`usecase_${i.slug}`}
            className={`${card} group flex flex-col p-7 transition-colors hover:border-purple/40`}
          >
            <h3 className="text-lg font-bold tracking-tight text-ink">{useCases[i.slug].title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{i.text}</p>
            <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-purple-deep">
              See how <Arrow />
            </span>
          </a>
        ))}
      </div>

      <a href="/agents" data-track="usecase_all" className="group mt-10 inline-flex items-center gap-1 text-base font-semibold text-purple-deep hover:text-ink">
        See all examples <Arrow />
      </a>
    </Section>
  );
}
