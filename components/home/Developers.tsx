import { nav } from "@/lib/config";
import { Arrow, Eyebrow, Heading, Lead, Section } from "./Section";

const links = [
  { title: "Read the docs", text: "Concepts, quickstart and API reference.", href: nav.docs, track: "dev_docs" },
  { title: "Try the playground", text: "A live sandbox with a published demo key. Nothing to install.", href: nav.playground, track: "dev_playground" },
  { title: "Verify evidence", text: "Check a signed record offline with only your public keys.", href: nav.verifySdk, track: "dev_verify" },
];

export default function Developers() {
  return (
    <Section id="developers" tone="lavender">
      <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Eyebrow>Developers</Eyebrow>
          <Heading>One integration. Your existing stack stays.</Heading>
          <Lead>Use the systems, models and agents you already have.</Lead>
          <div className="mt-8 flex flex-wrap gap-2">
            {["TypeScript", "Python", "REST"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-paper px-4 py-1.5 font-mono text-sm text-ink">
                {t}
              </span>
            ))}
          </div>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {links.map((l) => (
            <li key={l.title}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" data-track={l.track} className="group flex items-start justify-between gap-6 py-6">
                <span>
                  <span className="block text-lg font-semibold text-ink group-hover:text-purple-deep">{l.title}</span>
                  <span className="mt-1 block text-sm text-ink/60">{l.text}</span>
                </span>
                <span className="mt-1 text-purple-deep">
                  <Arrow />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
