import type { ReactNode } from "react";

export const booking = "https://cal.com/pavan-charak/";
export const github = "https://github.com/pavancharak";

const navItems = [
  { href: "/architecture", label: "Architecture" },
  { href: "/research", label: "Research" },
  { href: "/team", label: "Team" },
  { href: "/vision", label: "Vision" },
  { href: "/license", label: "License" },
];

export function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap">
        <a className="wordmark" href="/">
          <img src="/logo-mark.svg" alt="" width={28} height={28} />
          Parmana
        </a>
        <nav className="site-nav" aria-label="Main">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="hide-sm">
              {item.label}
            </a>
          ))}
          <a className="button small" href={booking} target="_blank" rel="noopener noreferrer">
            Talk to us
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} Parmana Systems</span>
        <nav aria-label="Footer">
          <a href="/architecture">Architecture</a>
          <a href="/research">Research</a>
          <a href="/team">Team</a>
          <a href="/vision">Vision</a>
          <a href="/license">License</a>
          <a href="https://docs.parmanasystems.com" target="_blank" rel="noopener noreferrer">Docs</a>
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </div>
    </footer>
  );
}

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
    <section className="closing">
      <div className="wrap">
        <h2>{heading}</h2>
        <p className="body">{text}</p>
        <div className="cta-row">
          <a className="button" href={booking} target="_blank" rel="noopener noreferrer">Book a call</a>
          <a className="button secondary" href={github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </section>
  );
}
