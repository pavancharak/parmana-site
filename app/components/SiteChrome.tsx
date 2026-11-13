import type { ReactNode } from "react";

export const booking = "https://cal.com/pavan-charak/";
export const contactEmail = "founder@parmanasystems.com";

const navItems = [
  { href: "/#platform", label: "Platform" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/#use-cases", label: "Use Cases" },
  { href: "https://docs.parmanasystems.com", label: "Documentation", external: true },
  { href: "/research", label: "Research" },
  { href: "/team", label: "Team" },
  { href: "/who-its-for", label: "Company" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/">Parmana</a>
      <nav aria-label="Main">
        {navItems.map((item) =>
          item.external ? (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">{item.label}</a>
          ) : (
            <a key={item.label} href={item.href}>{item.label}</a>
          ),
        )}
        <a className="nav-cta" href={booking} target="_blank" rel="noopener noreferrer">Talk to Us</a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} Parmana Systems</span>
        <nav aria-label="Footer">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a
            id="cy-effective-orcid-url"
            className="underline"
            href="https://orcid.org/0009-0003-5090-4737"
            target="orcid.widget"
            rel="me noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4em" }}
          >
            <img
              src="https://orcid.org/sites/default/files/images/orcid_16x16.png"
              style={{ width: "1em", height: "1em" }}
              alt="ORCID iD icon"
            />
            https://orcid.org/0009-0003-5090-4737
          </a>
        </nav>
      </div>
    </footer>
  );
}

/** Shared heading block for the pages below the homepage. */
export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="page-intro">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="lede">{children}</div>
      </div>
    </section>
  );
}

export function CallToAction({ heading, text }: { heading: string; text: string }) {
  return (
    <section className="block soft" aria-labelledby="cta-heading">
      <div className="wrap">
        <h2 id="cta-heading">{heading}</h2>
        <p className="body">{text}</p>
        <div className="cta-row">
          <a className="button" href={booking} target="_blank" rel="noopener noreferrer">Book a call</a>
          <a className="button secondary" href={`mailto:${contactEmail}`}>Send an email</a>
        </div>
      </div>
    </section>
  );
}
