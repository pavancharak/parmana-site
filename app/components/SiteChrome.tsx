import type { ReactNode } from "react";

export const docs = "https://docs.parmanasystems.com";
export const linkedIn = "https://www.linkedin.com/in/pavancharak/";
export const booking = "https://cal.com/pavan-charak/";
export const github = "https://github.com/pavancharak/parmana-core";

const navItems = [
  { href: "/product", label: "Product" },
  { href: "/trust", label: "Trust" },
  { href: "/use-cases", label: "Use cases" },
  { href: docs, label: "Docs", external: true },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/">Parmana Systems</a>
      <nav aria-label="Site">
        {navItems.map((item) =>
          item.external ? (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">{item.label}</a>
          ) : (
            <a key={item.label} href={item.href}>{item.label}</a>
          ),
        )}
        <a className="nav-cta" href={booking} target="_blank" rel="noopener noreferrer">Book a call</a>
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
          <a href="/product">Product</a>
          <a href="/trust">Trust</a>
          <a href="/use-cases">Use cases</a>
          <a href={docs} target="_blank" rel="noopener noreferrer">Docs</a>
          <a href={github} target="_blank" rel="noopener noreferrer">Source</a>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}

/** Shared frame for the marketing pages below the homepage. */
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
          <a className="button secondary" href={docs} target="_blank" rel="noopener noreferrer">Read the docs</a>
        </div>
      </div>
    </section>
  );
}
