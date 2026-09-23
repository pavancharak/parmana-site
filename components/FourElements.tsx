import { nav } from "@/lib/config";

const elements = [
  {
    tagline: "Agents execute within your authorization. Period.",
    title: "Deploy safely in production",
    body: "Your agents run at production scale, executing only within the bounds you define. No oversteps, no surprises, no unauthorized execution. The authorization boundary is structural, not a suggestion.",
    details: [
      "Agents propose actions.",
      "Parmana checks each request against your policies.",
      "Only authorized actions execute.",
      "Unauthorized execution is structurally blocked, not just unlikely.",
    ],
    cta: { label: "See how it works", href: nav.howItWorks },
  },
  {
    tagline: "Cryptographic proof you can show anyone who asks.",
    title: "Prove compliance",
    body: "When someone asks what your agents did and whether they stayed authorized, you have proof. Not logs that can be questioned, not your word for it. Cryptographic evidence that the action matched an authorized decision, immutable and independently verifiable.",
    details: [
      "Every authorized action is cryptographically signed.",
      "Proof binds the request, the rule, the decision and the execution together.",
      "Useful for audits, partner disputes, insurance claims and customer disputes.",
    ],
    cta: { label: "See the proof chain", href: nav.explainers },
  },
  {
    tagline: "The boundary stops unauthorized execution structurally.",
    title: "Protect your systems",
    body: "Your systems are protected from unauthorized execution at the infrastructure layer. Anything your business has not authorized does not execute. This is not a monitoring layer or a fraud detector, it is a structural boundary. A vulnerability elsewhere does not let an agent exceed its authorization.",
    details: [
      "The authorization boundary sits outside your business systems.",
      "Security gaps elsewhere do not reduce Parmana's protection.",
      "Enforcement is structural, not reactive monitoring.",
      "Applies the same way to agents, employees and partner systems.",
    ],
    cta: { label: "Explore the architecture", href: nav.explainers },
  },
  {
    tagline: "Your rules, your workflows, unchanged.",
    title: "Nothing changes",
    body: "Parmana applies the rules you already have to your AI agents. No policy rewrite, no process redesign, no workflow disruption. Your authorization framework stays exactly as it is, and now agents follow it too.",
    details: [
      "Your existing policies become the agent's authorization bounds.",
      "Your current workflows extend to agents automatically.",
      "No new policy language, no migration, no retraining.",
      "Agents fit into the processes you already run.",
    ],
    cta: { label: "See what stays the same", href: nav.howItWorks },
  },
];

export default function FourElements() {
  return (
    <section id="what-you-get" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-deep text-center">
          What you get
        </p>
        <h2 className="mt-3 text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[850px] mx-auto">
          Deploy safely. Prove compliance. Protect your systems. Nothing changes.
        </h2>
        <p className="mt-4 text-base md:text-lg text-ink/70 text-center max-w-[780px] mx-auto">
          Four things happen together every time an agent acts through Parmana.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {elements.map((el) => (
            <div key={el.title} className="rounded-md border border-border bg-lavender p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-deep">
                {el.tagline}
              </p>
              <h3 className="mt-3 text-lg font-bold text-ink">{el.title}</h3>
              <p className="mt-3 text-sm leading-[1.7] text-ink/70">{el.body}</p>
              <ul className="mt-5 space-y-2">
                {el.details.map((d) => (
                  <li key={d} className="text-sm leading-[1.6] text-ink/70 pl-4 relative">
                    <span className="absolute left-0 text-purple-deep">&bull;</span>
                    {d}
                  </li>
                ))}
              </ul>
              <a href={el.cta.href} className="mt-6 inline-block text-sm font-semibold text-purple-deep">
                {el.cta.label} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
