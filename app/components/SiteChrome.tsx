import type { ReactNode } from "react";

export const booking = "https://cal.com/pavan-charak/";
export const docs = "https://docs.parmanasystems.com";
export const github = "https://github.com/pavancharak";

const navItems = [
  { href: "/business", label: "For business" },
  { href: "/engineering", label: "For engineering" },
  { href: "/architecture", label: "Architecture" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/research", label: "Research" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="wordmark" href="/" aria-label="Parmana Systems home">
          <img src="/logo-mark.svg" alt="" width={30} height={30} />
          <span>parmana<span className="wordmark-systems">systems</span></span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
          <a className="button button-small" href={booking} target="_blank" rel="noopener noreferrer">Request a conversation</a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="wordmark" href="/">
              <img src="/logo-mark.svg" alt="" width={28} height={28} />
              <span>parmana<span className="wordmark-systems">systems</span></span>
            </a>
            <p>The Institutional Authority Layer for autonomous systems.</p>
          </div>
          <div className="footer-links">
            <div><strong>Explore</strong><a href="/business">For business</a><a href="/engineering">For engineering</a><a href="/architecture">Architecture</a><a href="/use-cases">Use cases</a></div>
            <div><strong>Company</strong><a href="/research">Research</a><a href="/team">Team</a><a href="/vision">Vision</a><a href="/license">License</a></div>
            <div><strong>Developer</strong><a href={docs} target="_blank" rel="noopener noreferrer">Documentation ↗</a><a href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={booking} target="_blank" rel="noopener noreferrer">Contact ↗</a></div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Parmana Systems</span>
          <span>Authority before action. Evidence after.</span>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="page-intro">
      <div className="wrap narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="page-lede">{children}</div>
      </div>
    </section>
  );
}

export function CallToAction({ heading, text }: { heading: string; text: string }) {
  return (
    <section className="closing">
      <div className="wrap closing-inner">
        <p className="eyebrow">Parmana Systems</p>
        <h2>{heading}</h2>
        <p className="closing-copy">{text}</p>
        <div className="cta-row">
          <a className="button button-light" href={booking} target="_blank" rel="noopener noreferrer">Request a conversation</a>
          <a className="text-link text-link-light" href={docs} target="_blank" rel="noopener noreferrer">Read the documentation ↗</a>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-copy">{text}</p> : null}
    </div>
  );
}
