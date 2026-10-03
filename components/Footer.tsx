import { founderEmail, founderPhone, messaging, nav } from "@/lib/config";

const columns = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: nav.howItWorks },
      { label: "Example", href: nav.example },
      { label: "Demo", href: nav.demo },
      { label: "Trust", href: nav.trust },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Docs", href: nav.docs },
      { label: "Quickstart", href: nav.quickstart },
      { label: "Playground", href: nav.playground },
      { label: "GitHub", href: nav.github },
    ],
  },
  {
    title: "Evaluate",
    links: [
      { label: "Evaluation guide", href: nav.evaluate },
      { label: "Audit guide", href: nav.auditGuide },
      { label: "Limitations", href: nav.limitations },
      { label: "Security", href: nav.security },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Substack", href: nav.blog },
      { label: "LinkedIn", href: nav.founderLinkedIn },
      { label: "License", href: nav.license },
    ],
  },
];

function external(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

export default function Footer() {
  return (
    <footer className="print:hidden border-t border-border bg-paper">
      <div className="max-w-container mx-auto grid gap-12 px-6 py-16 md:grid-cols-[1.3fr_repeat(4,1fr)]">
        <div>
          <a href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-ink">
            <span aria-hidden className="grid h-7 w-7 place-items-center rounded-md bg-purple text-white">
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                <rect x="7" y="3" width="6" height="14" rx="1" stroke="currentColor" strokeWidth="1.6" />
                <path d="M2 10h3m10 0h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            Parmana
          </a>
          <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-ink/60">{messaging.footer}</p>
          <div className="mt-6 space-y-1 text-sm">
            <a href={`mailto:${founderEmail}`} className="block text-ink/70 hover:text-purple-deep transition-colors">
              {founderEmail}
            </a>
            <a href={`tel:${founderPhone.replace(/ /g, "")}`} className="block text-ink/50 hover:text-purple-deep transition-colors">
              {founderPhone}
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold text-ink">{col.title}</p>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-ink/60 hover:text-ink transition-colors" {...external(l.href)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="max-w-container mx-auto flex flex-col gap-2 px-6 py-6 text-xs text-ink/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Parmana Systems Private Limited</p>
          <p>Source-available for evaluation only. See the license.</p>
        </div>
      </div>
    </footer>
  );
}
