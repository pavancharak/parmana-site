import { founderEmail } from "@/lib/config";

const demoHref = `mailto:${founderEmail}?subject=${encodeURIComponent("Parmana demo request")}`;

const whyNow = [
  { title: "Agent adoption", text: "Agents are moving from pilots into real workflows." },
  { title: "Proof matters", text: "When someone asks what an agent did, you need a record, not a guess." },
  { title: "Window open", text: "Set your rules now, before agents touch money and customers." },
];

const steps = [
  { title: "Agent requests", text: "An agent asks to take an action." },
  { title: "Parmana checks", text: "The request is checked against your rules." },
  { title: "Allowed or stopped", text: "Allowed actions go through. The rest stop." },
];

const outcomes = [
  { title: "Deploy safely", text: "Put agents on real work. Your limits hold on every request." },
  { title: "Prove compliance", text: "A signed record of every decision, ready when someone asks." },
  { title: "Protect systems", text: "Nothing reaches your systems unless your rules allow it." },
];

const systems = [
  { title: "CRM", text: "Salesforce agents follow your approval rules." },
  { title: "Payments", text: "Payment agents stay inside your limits." },
  { title: "Code", text: "GitHub agents merge only approved branches." },
];

const roles = [
  { title: "CEO", text: "Put agents to work without giving up control." },
  { title: "CFO", text: "Same approval process. Faster. Your limits hold." },
  { title: "CTO", text: "Plugs in outside your systems. Nothing to rearchitect." },
  { title: "Compliance", text: "A record for every decision. That's it." },
];

const wrap = "max-w-container mx-auto px-6";
const section = "border-b border-border py-16 md:py-20 lg:py-24";
const h2 = "text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink";
const lead = "mt-4 max-w-[640px] text-lg leading-[1.5] text-ink/70";
const h3 = "text-lg font-bold text-ink";

function GateGlyph() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true" className="shrink-0 text-purple">
      <rect x="22" y="8" width="16" height="44" rx="1" stroke="currentColor" strokeWidth="2" />
      <line x1="30" y1="16" x2="30" y2="44" stroke="currentColor" strokeWidth="2" />
      <path d="M4 30h14m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 30h14m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ParmanaWebsite() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b-2 border-purple bg-gradient-to-b from-lavender to-paper">
        <div className={`${wrap} flex flex-col-reverse items-start gap-8 py-20 md:flex-row md:items-center md:justify-between md:py-28`}>
          <div className="max-w-[720px]">
            <h1 className="text-[40px] md:text-[56px] font-bold leading-[1.08] tracking-tight text-ink">
              Your rules. Your control. That&apos;s it.
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-[1.5] text-ink/70">
              Every agent request is checked against the policies you already have, before anything happens. No changes to your systems.
            </p>
            <a
              href={demoHref}
              className="mt-10 inline-flex min-h-[44px] items-center rounded-full bg-purple px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-purple-deep"
            >
              Request a Demo
            </a>
          </div>
          <GateGlyph />
        </div>
      </section>

      {/* Why now */}
      <section className={`${section} bg-paper`}>
        <div className={wrap}>
          <h2 className={h2}>The market&apos;s moving fast.</h2>
          <p className={lead}>Teams are putting agents into real workflows. The question is how you stay in control.</p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {whyNow.map((c) => (
              <div key={c.title} className="rounded-md border border-border border-l-2 border-l-purple bg-lavender p-8">
                <h3 className={h3}>{c.title}</h3>
                <p className="mt-2 text-ink/70">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className={`${section} scroll-mt-20 bg-lavender`}>
        <div className={wrap}>
          <h2 className={h2}>Three steps.</h2>
          <p className={lead}>Agent requests. Parmana checks. Allowed actions go through, the rest stop.</p>
          <ol className="mt-12 flex flex-col items-stretch gap-4 md:flex-row">
            {steps.map((step, i) => (
              <li key={step.title} className="contents">
                {i > 0 && (
                  <span aria-hidden="true" className="self-center text-2xl leading-none text-purple rotate-90 md:rotate-0">
                    →
                  </span>
                )}
                <div className="flex-1 rounded-md border border-border bg-paper p-8">
                  <p className="font-mono text-xs uppercase tracking-wide text-ink/50">Step {i + 1}</p>
                  <h3 className="mt-2 text-lg font-bold text-purple-deep">{step.title}</h3>
                  <p className="mt-2 text-ink/70">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Outcomes */}
      <section id="outcomes" className={`${section} scroll-mt-20 bg-paper`}>
        <div className={wrap}>
          <h2 className={h2}>Three outcomes.</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {outcomes.map((o, i) => (
              <div key={o.title} className="rounded-md border border-border bg-paper p-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple font-mono text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className={`mt-5 ${h3}`}>{o.title}</h3>
                <p className="mt-2 text-ink/70">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real example */}
      <section id="example" className={`${section} scroll-mt-20 bg-lavender`}>
        <div className={wrap}>
          <h2 className={h2}>Here&apos;s what this actually does.</h2>
          <p className="mt-6 max-w-[760px] text-xl md:text-2xl italic leading-[1.45] text-ink">
            You set a ₹10K refund limit. An agent requests a ₹15K refund. Parmana stops it. The decision is logged.
          </p>
        </div>
      </section>

      {/* Works everywhere */}
      <section id="everywhere" className={`${section} scroll-mt-20 bg-paper`}>
        <div className={wrap}>
          <h2 className={h2}>Same logic. Any system.</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {systems.map((c) => (
              <div key={c.title} className="rounded-md border border-border bg-lavender p-8">
                <p className="font-mono text-xs uppercase tracking-wide text-purple-deep">{c.title}</p>
                <p className="mt-2 text-base font-bold text-ink">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section id="what-we-do" className={`${section} scroll-mt-20 bg-lavender`}>
        <div className={wrap}>
          <h2 className={h2}>What we do. What we don&apos;t.</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-md border border-border border-l-2 border-l-purple bg-paper p-8">
              <h3 className={h3}>We do</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-ink/70">
                <li>Check every agent request against your rules before it goes through</li>
              </ul>
            </div>
            <div className="rounded-md border border-border bg-paper p-8">
              <h3 className={h3}>We don&apos;t</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-ink/70">
                <li>Build agents</li>
                <li>Change your systems</li>
                <li>Replace your security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* By role */}
      <section className={`${section} bg-paper`}>
        <div className={wrap}>
          <h2 className={h2}>By role.</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((r) => (
              <div key={r.title} className="rounded-md border border-border border-t-[3px] border-t-purple bg-lavender p-8">
                <h3 className="text-lg font-bold text-purple-deep">{r.title}</h3>
                <p className="mt-2 text-ink/70">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="scroll-mt-20 bg-paper px-4 py-20 md:px-6 md:py-28">
        <div className="relative mx-auto max-w-container overflow-hidden rounded-3xl bg-purple-deep px-6 py-16 text-center md:py-24">
          <div aria-hidden className="absolute -right-16 -top-24 h-80 w-80 rounded-full bg-purple opacity-70 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-purple opacity-50 blur-3xl" />
          <div className="relative">
            <h2 className="text-[28px] md:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-white">Ready?</h2>
            <p className="mx-auto mt-4 max-w-[620px] text-base md:text-lg text-white/80">No rearchitecture. Start with one workflow.</p>
            <a
              href={demoHref}
              className="mt-10 inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-purple-deep transition hover:bg-lavender"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
