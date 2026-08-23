import {
  CurrencyDollarIcon,
  HeartIcon,
  ShieldCheckIcon,
  BuildingLibraryIcon,
  ServerStackIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";

const industries = [
  {
    name: "Financial Services",
    description: "Banks and fintech moving money safely",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Healthcare",
    description: "Hospitals protecting patient records",
    icon: HeartIcon,
  },
  {
    name: "Insurance",
    description: "Insurance companies processing claims",
    icon: ShieldCheckIcon,
  },
  {
    name: "Government",
    description: "Government agencies protecting citizen data",
    icon: BuildingLibraryIcon,
  },
  {
    name: "Enterprise Software",
    description: "Large companies running internal systems",
    icon: ServerStackIcon,
  },
  {
    name: "Critical Operations",
    description: "Infrastructure protecting important services",
    icon: Cog8ToothIcon,
  },
];

export default function Industries() {
  return (
    <section className="bg-white">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div key={industry.name} className="rounded-lg p-6 border border-border-light">
              <industry.icon className="h-12 w-12 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-text-primary">{industry.name}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-text-secondary">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
