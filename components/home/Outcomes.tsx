import { Eyebrow, Heading, Section, card } from "./Section";

// Titles and order are locked (docs/DESIGN-SYSTEM-CURRENT.md).
const outcomes = [
  {
    title: "Deploy safely",
    text: "Put agents on real work. Every request that goes through Parmana is checked against your limits before it runs.",
  },
  {
    title: "Prove compliance",
    text: "A signed record of every decision, allowed or stopped, ready when an auditor or a customer asks.",
  },
  {
    title: "Protect systems",
    text: "Requests that go through Parmana reach your systems only when your rules allow them. Agents never hold the credentials to your systems.",
  },
];

const integrations = [
  { name: "Paytm", text: "Refunds within your limits, with a signed approval when needed." },
  { name: "HubSpot", text: "Deal stage and amount updates, checked against the real deal." },
  { name: "GitHub", text: "Pull request merges, only for the pull request that was approved." },
  { name: "Slack", text: "Messages, only to the channel that was approved." },
  { name: "Your API", text: "Any HTTPS endpoint, registered without a deploy and released with a signature." },
];

export default function Outcomes() {
  return (
    <Section tone="lavender">
      <Eyebrow>Outcomes</Eyebrow>
      <Heading>Your policies don&apos;t change. Agents prove they follow them.</Heading>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {outcomes.map((o, i) => (
          <div key={o.title} className={`${card} p-8`}>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-purple to-purple-deep font-mono text-sm font-semibold text-white">
              {i + 1}
            </span>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-ink">{o.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{o.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink/50">Same rules, any system</p>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {integrations.map((c) => (
            <div key={c.name} className="bg-paper p-6">
              <p className="text-base font-bold text-ink">{c.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
