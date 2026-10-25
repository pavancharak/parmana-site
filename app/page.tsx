const bookingUrl = "https://cal.com/pavan-charak/";

const Arrow = () => <span aria-hidden="true">↗</span>;

const steps = [
  {
    title: "Set the limits",
    text: "Decide what each person and machine can do, how far they can go, and who approves anything beyond that.",
  },
  {
    title: "Check every action",
    text: "Each action is compared with your limits before it runs. If approval is missing or unclear, it stops.",
  },
  {
    title: "Keep the proof",
    text: "Every action gets a record of who approved it, what ran, and whether it matched. Anyone can check that record.",
  },
];

const proofPoints = [
  {
    title: "Authority is always clear",
    text: "Every action traces back to a named person or rule that allowed it. No one can approve their own request.",
  },
  {
    title: "Nothing runs without approval",
    text: "Missing or unclear approval stops the action. It never goes ahead and gets reviewed later.",
  },
  {
    title: "Results you can verify",
    text: "Each record shows what was approved and what actually happened, and it can be checked without relying on Parmana.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Parmana Systems home">
          <img className="brand-mark" src="/logo-mark.svg" alt="" width="27" height="27" />
          <span>parmana<span className="brand-light">systems</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#proof">Proof</a>
          <a href="/vision">Vision</a>
          <a href="https://docs.parmanasystems.com" target="_blank" rel="noreferrer">Docs <span aria-hidden="true">↗</span></a>
          <a href="https://blog.parmanasystems.com" target="_blank" rel="noreferrer">Blog <span aria-hidden="true">↗</span></a>
        </nav>
        <a className="button button-dark header-cta" href={bookingUrl} target="_blank" rel="noreferrer">Book a meeting <Arrow /></a>
      </header>

      <section className="tl-hero">
        <div>
          <div className="eyebrow"><span />The trust layer for every action</div>
          <h1>Every action stays within what your business allowed.</h1>
          <p className="tl-subhead">
            Parmana checks every action, whether a person or a machine takes it, against
            the limits you set. Then it keeps proof of what happened.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={bookingUrl} target="_blank" rel="noreferrer">Book a meeting <Arrow /></a>
            <a className="text-link" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <figure className="tl-receipt" aria-label="Example record of an action that was allowed">
          <figcaption className="tl-receipt-head">
            <span>Example record</span>
            <span className="tl-status">Allowed</span>
          </figcaption>
          <dl>
            <div className="tl-receipt-row"><dt>Requested by</dt><dd>Billing assistant</dd></div>
            <div className="tl-receipt-row"><dt>Action</dt><dd>Refund $120 to a customer</dd></div>
            <div className="tl-receipt-row"><dt>Limit</dt><dd>Up to $200, set by Finance</dd></div>
            <div className="tl-receipt-row"><dt>Check</dt><dd>Within limit</dd></div>
            <div className="tl-receipt-row"><dt>Result</dt><dd>Refund issued</dd></div>
          </dl>
          <p className="tl-receipt-foot">Record saved and ready to review.</p>
        </figure>
      </section>

      <section className="tl-section" id="how-it-works">
        <p className="section-kicker">How it works</p>
        <h2>Three steps. <em>Every action checked.</em></h2>
        <ol className="tl-steps">
          {steps.map((step, index) => (
            <li className="tl-card" key={step.title}>
              <span className="tl-step-number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="tl-band" id="proof">
        <div className="tl-section">
          <p className="section-kicker">Proof</p>
          <h2>Clear authority. <em>Results you can check.</em></h2>
          <div className="tl-steps">
            {proofPoints.map((point) => (
              <article className="tl-card" key={point.title}>
                <span className="tl-check" aria-hidden="true">✓</span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
          <p className="tl-note">
            Parmana shows what was approved and what ran. It does not decide whether your
            rules are the right ones. That stays with your business.
          </p>
        </div>
      </section>

      <section className="tl-cta">
        <div className="tl-cta-inner">
          <div>
            <h2>Let every action show its authority.</h2>
            <p>Tell us where your business needs a clear line between what machines can do and what they are allowed to do.</p>
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
          <a href="#how-it-works">How it works</a>
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
