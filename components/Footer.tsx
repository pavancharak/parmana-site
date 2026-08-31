import { nav } from "@/lib/config";

const links = [
  { label: "Docs", href: nav.docs },
  { label: "Blog", href: nav.blog },
  { label: "Security", href: nav.security },
  { label: "Contact Founder", href: nav.founderLinkedIn },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-light">
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-8">
        <p className="text-sm text-text-secondary">© 2026 Parmana Systems</p>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
