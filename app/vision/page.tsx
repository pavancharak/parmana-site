import type { Metadata } from "next";

const bookingUrl = "https://cal.com/pavan-charak/";

export const metadata: Metadata = {
  title: "Vision | Parmana Systems",
  description:
    "A world where actions taken on people's behalf can be trusted, because they can always be checked.",
  alternates: { canonical: "/vision" },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const principles = [
  {
    title: "Actions, not actors or technologies",
    text: "The same limits and records apply whether a person, a script or an AI agent acts, and whatever system carries the action out.",
  },
  {
    title: "Limits are written down",
    text: "Rules are explicit, versioned and open to dispute. They do not live in hidden prompts or habits.",
  },
  {
    title: "Trust does not rest on us",
    text: "Anyone can check a record without an account, using only the key they choose to trust. The checker says what it cannot prove.",
  },
  {
    title: "Stop when unsure",
    text: "If a system is misconfigured or approval is missing, the action stops. It does not guess.",
  },
];

const outcomes = [
  "Payments, refunds and record changes happen only inside the limits you approved.",
  "Anything outside those limits waits for a person to decide.",
  "Every action leaves a record that your team, your auditors and your partners can check.",
];

export default function Vision() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Parmana Systems home">
          <img className="brand-mark" src="/logo-mark.svg" alt="" width="27" height="27" />
          <span>parmana<span className="brand-light">systems</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="/#how-it-works">How it works</a>
          <a href="/#proof">Proof</a>
          <a href="/vision" aria-current="page">Vision</a>
          <a href="https://docs.parmanasystems.com" target="_blank" rel="noreferrer">Docs <span aria-hidden="true">↗</span></a>
          <a href="https://blog.parmanasystems.com" target="_blank" rel="noreferrer">Blog <span aria-hidden="true">↗</span></a>
        </nav>
        <a className="button button-dark header-cta" href={bookingUrl} target="_blank" rel="noreferrer">Book a meeting <Arrow /></a>
      </header>

      <section className="tl-hero">
        <div>
          <div className="eyebrow"><span />Our vision</div>
          <h1>Trust should come from checking, not from taking someone&rsquo;s word.</h1>
          <p className="tl-subhead">
            We want every action taken on a business&rsquo;s behalf, by a person, a system or an AI
            agent, to stay within limits that were set in advance and to leave a record anyone can
            check.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={bookingUrl} target="_blank" rel="noreferrer">Book a meeting <Arrow /></a>
            <a className="text-link" href="/#how-it-works">See how it works <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="tl-band">
        <div className="tl-section">
          <p className="section-kicker">Principles</p>
          <h2>Four principles. <em>We build to them.</em></h2>
          <ol className="tl-steps">
            {principles.map((principle, index) => (
              <li className="tl-card" key={principle.title}>
                <span className="tl-step-number">{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="tl-section">
        <p className="section-kicker">What this means in practice</p>
        <h2>Less guesswork. <em>Clear lines.</em></h2>
        <ul className="tl-outcomes">
          {outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
        <p className="tl-note">
          This is where we are heading, not a promise of results. Parmana shows what was approved
          and what ran. It does not decide whether your rules are the right ones. That stays with
          your business.
        </p>
      </section>

      <section className="tl-cta">
        <div className="tl-cta-inner">
          <div>
            <h2>Help shape what comes next.</h2>
            <p>Tell us where your business needs a clear line between what AI can suggest and what it is allowed to do.</p>
          </div>
          <a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">Book a meeting <Arrow /></a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="/">
          <img className="brand-mark" src="/logo-mark.svg" alt="" width="27" height="27" />
          <span>parmana<span className="brand-light">systems</span></span>
        </a>
        <p>The trust layer for every action.</p>
        <div className="footer-links">
          <a href="/#how-it-works">How it works</a>
          <a href="/vision">Vision</a>
          <a href="/security">Security review</a>
          <a href="/compare">Compare</a>
          <a href="/verify">Verify a record</a>
          <a href="/questions">Questions</a>
          <a href="https://docs.parmanasystems.com" target="_blank" rel="noreferrer">Docs</a>
          <a href="https://blog.parmanasystems.com" target="_blank" rel="noreferrer">Blog</a>
          <a href={bookingUrl} target="_blank" rel="noreferrer">Contact</a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Parmana Systems</span>
      </footer>
    </main>
  );
}
