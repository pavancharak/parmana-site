import { nav } from "@/lib/config";
import { Eyebrow, Heading, Lead, Section } from "./Section";

const links = [
  { title: "Read the docs", text: "Understand the integration path.", href: nav.docs },
  { title: "Try the playground", text: "See the control flow without setup.", href: nav.playground },
  { title: "Verify evidence", text: "Check records independently.", href: nav.verifySdk },
];

export default function Developers() {
  return (
    <Section id="developers">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>For builders</Eyebrow>
          <Heading>One integration. Your existing stack stays.</Heading>
          <Lead>Use the systems, models and agents you already have. Parmana sits at the control point.</Lead>

          <div className="mt-8 divide-y divide-border border-y border-border">
            {links.map((l) => (
              <a
                key={l.title}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 py-4"
              >
                <span>
                  <span className="block text-sm font-semibold text-ink group-hover:text-purple-deep">
                    {l.title}
                  </span>
                  <span className="mt-1 block text-sm text-ink/60">{l.text}</span>
                </span>
                <span className="text-purple-deep">→</span>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-ink p-6 shadow-[0_28px_60px_-24px_rgba(26,26,26,0.55)]">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">Control point</p>
          <div className="mt-6 space-y-3 font-mono text-sm text-white/85">
            <div>agent.request()</div>
            <div>↓</div>
            <div>parmana.authorize()</div>
            <div>↓</div>
            <div className="font-semibold text-white">ALLOW / STOP</div>
            <div>↓</div>
            <div>existing.system.execute()</div>
            <div>↓</div>
            <div>proof.verify()</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
