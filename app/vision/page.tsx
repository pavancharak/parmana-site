import type { Metadata } from "next";

const bookingUrl = "https://cal.com/pavan-charak/";

export const metadata: Metadata = {
  title: "Vision | Parmana Systems",
  description:
    "Every action stays within what your business allowed. Our vision for AI that acts for businesses, within limits they set, with proof anyone can check.",
  alternates: { canonical: "/vision" },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const beliefs = [
  {
    title: "Authority comes from the business",
    text: "The limits your business sets decide what an action may do. An AI system cannot grant itself more, and no one can approve their own request.",
  },
  {
    title: "Proof should not depend on trust",
    text: "Anyone should be able to check what was approved and what happened, without relying on the company that ran the action.",
  },
  {
    title: "Suggesting and doing are different",
    text: "An AI can propose an action. Your business decides whether it goes ahead, and a person decides the exceptions.",
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
          <h1>Every action stays within what your business allowed.</h1>
          <p className="tl-subhead">
            We want businesses to let AI do more of the work, without losing control of what it
            does or the ability to prove it.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={bookingUrl} target="_blank" rel="noreferrer">Book a meeting <Arrow /></a>
            <a className="text-link" href="/#how-it-works">See how it works <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="tl-band">
        <div className="tl-section">
          <p className="section-kicker">What we believe</p>
          <h2>Three ideas <em>shape everything we build.</em></h2>
          <ol className="tl-steps">
            {beliefs.map((belief, index) => (
              <li className="tl-card" key={belief.title}>
                <span className="tl-step-number">{index + 1}</span>
                <h3>{belief.title}</h3>
                <p>{belief.text}</p>
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
