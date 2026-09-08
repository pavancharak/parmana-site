import { founderEmail, founderPhone, nav } from "@/lib/config";

const links = [
  { label: "Product", href: nav.product },
  { label: "Company", href: nav.company },
  { label: "Docs", href: nav.docs },
  { label: "Blog", href: nav.blog },
];

export default function Footer() {
  return (
    <footer className="border-t border-divider">
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-10">
        <div>
          <a href="/" className="font-serif text-lg font-semibold text-paper">
            Parmana
          </a>
          <p className="mt-2 text-xs text-paper/50">© 2026 Parmana Systems</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-paper/70 hover:text-mint transition-colors"
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-sm text-paper/70 text-center md:text-right">
          <a href={`mailto:${founderEmail}`} className="hover:text-mint transition-colors">
            {founderEmail}
          </a>
          <p className="mt-1 text-paper/50">{founderPhone}</p>
          <a
            href={nav.founderLinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-paper/50 hover:text-mint transition-colors"
          >
            Pavan Charak
          </a>
        </div>
      </div>
    </footer>
  );
}
