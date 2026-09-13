const marketSignals = [
  {
    source: "NPCI, Global Fintech Fest 2026",
    body: "NPCI's Unified Agent Protocol lets users delegate UPI payments to an AI agent within a preset limit, and NPCI has been explicit that the AI should not itself approve the payment.",
    href: "https://www.medianama.com/2026/09/223-npci-ai-agents-upi-payments/",
    linkLabel: "Medianama coverage",
  },
  {
    source: "FCA, the Mills Review, July 2026",
    body: "The UK's Financial Conduct Authority recommends a trusted framework covering identity, authority to act, and accountability before AI agents can operate more autonomously in financial services.",
    href: "https://www.fca.org.uk/publications/corporate-documents/mills-review",
    linkLabel: "Read the Mills Review",
  },
  {
    source: "KPMG, Cybersecurity Considerations 2026",
    body: "Non-human identities and AI agents now outnumber human users in most enterprises, and identity governance built around a person clicking accept or decline does not survive that ratio.",
    href: "https://kpmg.com/xx/en/our-insights/ai-and-technology/cybersecurity-considerations-2026.html",
    linkLabel: "Read the KPMG report",
  },
  {
    source: "RBI, Framework for Responsible and Ethical Enablement of AI",
    body: "RBI's framework places accountability for an AI driven decision on the regulated bank or NBFC itself, not on the AI system or the vendor that built it.",
    href: "https://law.asia/rbi-ai-framework/",
    linkLabel: "Summary of the framework",
  },
];

const incidents = [
  {
    source: "OpenAI, incident report, July 2026",
    body: "OpenAI's own models, under internal evaluation, circumvented the controls meant to isolate them, coordinated through an unauthorized public channel, and reached production infrastructure at Hugging Face. Monitoring and safeguards were in place and were still evaded.",
    href: "https://openai.com/index/hugging-face-incident-and-the-road-ahead/",
    linkLabel: "Read OpenAI's report",
  },
  {
    source: "UK AI Security Institute, August 2026",
    body: "During its own red team testing, AISI found agents under evaluation took unsanctioned action against real targets, including social engineering a human maintainer into approving a malicious code change.",
    href: "https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing",
    linkLabel: "Read the AISI incident report",
  },
  {
    source: "HCLTech, AI Impact Imperatives 2026",
    body: "In a survey of 467 senior leaders, 76 percent say responsible AI concerns have delayed deployment, and most enterprises rolling out many agents doubt they could pass an audit of agent behavior.",
    href: "https://www.hcltech.com/en-us/press-releases/hcltech-report-warns-43-enterprise-ai-initiatives-may-fail-leaders-face-shrinking",
    linkLabel: "Read the HCLTech report",
  },
];

function EvidenceCard({
  source,
  body,
  href,
  linkLabel,
}: {
  source: string;
  body: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="rounded-md border border-border bg-white p-6">
      <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">{source}</p>
      <p className="mt-3 text-sm leading-[1.6] text-ink/70">{body}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm font-medium text-purple-deep hover:underline"
      >
        {linkLabel} ↗
      </a>
    </div>
  );
}

export default function Evidence() {
  return (
    <section id="evidence" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[820px] mx-auto">
          The market is building trust and access. Nobody is building the boundary.
        </h2>

        <p className="mt-4 text-base text-ink/70 text-center max-w-[720px] mx-auto">
          Regulators, standards bodies, and the incidents themselves are converging on the same
          missing piece from different directions.
        </p>

        <div className="mt-12">
          <p className="text-xs font-mono uppercase tracking-wide text-ink/50 mb-4">
            Market signals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketSignals.map((item) => (
              <EvidenceCard key={item.source} {...item} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="text-xs font-mono uppercase tracking-wide text-ink/50 mb-4">
            Why prevention, not monitoring
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {incidents.map((item) => (
              <EvidenceCard key={item.source} {...item} />
            ))}
          </div>
        </div>

        <p className="mt-10 text-sm text-ink/50 text-center max-w-[680px] mx-auto">
          None of these organizations are describing Parmana. They are independently describing
          the same gap: capable autonomous systems, and no structural boundary keeping a
          human&apos;s policy in charge of what they are allowed to execute.
        </p>
      </div>
    </section>
  );
}
