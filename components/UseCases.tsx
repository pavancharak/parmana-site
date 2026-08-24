import {
  CurrencyDollarIcon,
  ServerStackIcon,
  DocumentMagnifyingGlassIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

const domains = [
  {
    name: "Financial Services",
    icon: CurrencyDollarIcon,
    items: [
      "Agentic payments, aligned with NPCI's Unified Agent Protocol",
      "Fraud detection autonomous response",
      "Credit decisioning",
      "Claims processing",
    ],
  },
  {
    name: "Infrastructure & Operations",
    icon: ServerStackIcon,
    items: [
      "Infrastructure automation: deployments, scaling, configuration",
      "Access provisioning",
      "System administration",
      "Emergency response workflows",
    ],
  },
  {
    name: "Data & Governance",
    icon: DocumentMagnifyingGlassIcon,
    items: [
      "Data access and movement",
      "Records changes",
      "Policy application",
      "Compliance automation",
    ],
  },
  {
    name: "Business Workflows",
    icon: BriefcaseIcon,
    items: [
      "Procurement and supply chain",
      "Hiring and offer generation",
      "Resource allocation",
      "Communications at scale",
    ],
  },
];

export default function UseCases() {
  return (
    <section className="bg-white">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] text-text-primary text-center">
          Built for any domain, not just payments
        </h2>
        <p className="mt-4 text-base leading-[1.6] text-text-secondary text-center max-w-[720px] mx-auto">
          Parmana is authority infrastructure, not payment infrastructure. The
          same runtime verification applies wherever a consequential action
          executes.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.name}
              className="rounded-lg p-6 border border-border-light"
            >
              <domain.icon className="h-10 w-10 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-text-primary">{domain.name}</h3>
              <ul className="mt-3 space-y-2">
                {domain.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-[1.5] text-text-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
