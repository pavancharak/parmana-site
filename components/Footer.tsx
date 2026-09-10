import { founderEmail, nav } from "@/lib/config";

const links = [
  { label: "How it works", href: nav.howItWorks },
  { label: "Use cases", href: nav.useCases },
  { label: "FAQ", href: nav.faq },
  { label: "Docs", href: nav.docs },
  { label: "Blog", href: nav.blog },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-10">
        <div>
          <a href="/" className="text-lg font-bold text-ink">
            Parmana
          </a>
          <p className="mt-2 text-xs text-ink/50">© 2026 Parmana Systems</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-ink/70 hover:text-purple-deep transition-colors"
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-sm text-ink/70 text-center md:text-right">
          <a href={`mailto:${founderEmail}`} className="hover:text-purple-deep transition-colors">
            {founderEmail}
          </a>
          <a
            href={nav.founderLinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-ink/50 hover:text-purple-deep transition-colors"
          >
            Pavan Charak
          </a>
        </div>
      </div>
    </footer>
  );
}
