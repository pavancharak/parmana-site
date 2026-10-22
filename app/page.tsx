const Arrow = () => <span aria-hidden="true">↗</span>;

const capabilities = [
  {
    number: "01",
    title: "Set the limits",
    description:
      "Turn your business rules into clear limits: which actions the AI may take, how much it can spend or change, and who approves exceptions.",
    tag: "Your rules",
  },
  {
    number: "02",
    title: "Check each action",
    description:
      "Every action is compared with your limits before it reaches your systems. If approval is missing or unclear, the action does not go ahead.",
    tag: "Before it happens",
  },
  {
    number: "03",
    title: "Keep a record",
    description:
      "For every action, Parmana keeps the why (the rule and approval behind it), the how (the steps it went through) and the what (whether it went ahead or was stopped), so your team can review it at any time.",
    tag: "Proof you can show",
  },
];

const useCases = [
  {
    title: "Financial services",
    text: "Keep payments, refunds and account changes within the limits you approve.",
    number: "01",
  },
  {
    title: "Business operations",
    text: "Control what AI can do across sales, finance, purchasing and other business systems.",
    number: "02",
  },
  {
    title: "Public services",
    text: "Apply defined rules consistently, and send exceptions to a person for decision.",
    number: "03",
  },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        CONTROL FOR AI THAT ACTS FOR YOUR BUSINESS
        <a href="#approach">See how it works <Arrow /></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#" aria-label="Parmana Systems home">
          <span className="brand-mark"><i /><i /><i /></span>
          <span>parmana<span className="brand-light">systems</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#approach">The problem</a>
          <a href="#trust">Proof</a>
          <a href="#capabilities">How it works</a>
          <a href="#use-cases">Use cases</a>
          <a href="#principles">Principles</a>
          <a href="https://docs.parmanasystems.com" target="_blank" rel="noreferrer">Docs <span aria-hidden="true">↗</span></a>
          <a href="https://blog.parmanasystems.com" target="_blank" rel="noreferrer">Blog <span aria-hidden="true">↗</span></a>
        </nav>
        <a className="button button-dark header-cta" href="https://cal.com/pavan-charak/" target="_blank" rel="noreferrer">Book a meeting <Arrow /></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> BUILT FOR AI THAT TAKES ACTION</div>
          <h1>AI can act for your business.<br /><em>Only within the limits you set.</em></h1>
          <p className="hero-description">
            AI agents are starting to issue refunds, update records, approve requests
            and move money. Parmana checks each action against the limits your business
            has approved before it happens, and keeps a clear record of every decision.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#approach">See how it works <Arrow /></a>
            <a className="text-link" href="#principles">Our principles <span>↓</span></a>
          </div>
          <div className="hero-footnote">
            <span className="footnote-icon">✓</span>
            <span>Set the limits. Check every action. Keep the proof.</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Illustration of an AI action being checked against approved limits">
          <div className="visual-topline">
            <span>APPROVAL CHECK</span>
            <span className="live-indicator">● LIMITS APPLIED</span>
          </div>
          <div className="flow-card flow-proposal">
            <div className="flow-icon ai-icon">AI</div>
            <div><span className="flow-label">01 / REQUEST</span><strong>AI proposes an action</strong><small>Make a $4,800 payment</small></div>
            <span className="flow-status">REQUEST</span>
          </div>
          <div className="flow-connector"><span /></div>
          <div className="authority-box">
            <div className="authority-heading">
              <div className="flow-icon shield-icon">✓</div>
              <div><span className="flow-label">02 / CHECK</span><strong>Compare with your limits</strong></div>
              <span className="verified-pill">APPROVED</span>
            </div>
            <div className="check-row"><span>Action type</span><b>Payment</b><span className="check">✓</span></div>
            <div className="check-row"><span>Spending limit</span><b>$5,000 max</b><span className="check">✓</span></div>
            <div className="check-row"><span>Permission</span><b>Active</b><span className="check">✓</span></div>
          </div>
          <div className="flow-connector"><span /></div>
          <div className="flow-card flow-execution">
            <div className="flow-icon execution-icon">↗</div>
            <div><span className="flow-label">03 / RESULT</span><strong>Approved action goes ahead</strong><small>Record saved for review</small></div>
            <span className="flow-status success">ALLOWED</span>
          </div>
          <div className="visual-bottom"><span>SET LIMITS</span><i /> <span>CHECK</span><i /> <span>ACT</span><i /> <span>RECORD</span></div>
        </div>
      </section>

      <section className="statement-strip">
        <div className="strip-label">THE PROBLEM</div>
        <p>Most AI tools can suggest what to do. Few can make sure the system <strong>only does what the business has approved.</strong></p>
      </section>


      <section className="section trust-section" id="trust">
        <div className="section-kicker">PROOF</div>
        <div className="trust-intro">
          <div>
            <h2>Don&apos;t take the AI&apos;s word for it. <em>Check it.</em></h2>
          </div>
          <div className="trust-copy">
            <p>When software acts for a business, saying it followed the rules is not enough. The business should be able to see what was approved, what was done, and whether the two match.</p>
            <p>Parmana sits between the AI and your systems. It applies your limits before each action goes through, and records what happened so it can be reviewed later.</p>
          </div>
        </div>
        <div className="trust-grid">
          <article className="trust-card">
            <span className="trust-number">01 / SET</span>
            <div className="trust-symbol">◎</div>
            <h3>You set the limits</h3>
            <p>Your business decides what the AI can do, how much it can spend or change, and under what conditions. The AI does not decide its own permissions.</p>
          </article>
          <article className="trust-card">
            <span className="trust-number">02 / CHECK</span>
            <div className="trust-symbol">⌁</div>
            <h3>Every action is checked</h3>
            <p>Before an action reaches your systems, Parmana checks it against your limits. If approval is missing or unclear, the action does not go ahead.</p>
          </article>
          <article className="trust-card">
            <span className="trust-number">03 / REVIEW</span>
            <div className="trust-symbol">✓</div>
            <h3>A record you can review</h3>
            <p>For every action you get the why, how and what happened: the rule and approval behind it, the steps taken, and the result. Your team or an outside auditor can review it.</p>
          </article>
        </div>
        <p className="trust-footnote">Parmana records what was approved, what was checked and what happened. It does not decide whether your rules are the right ones. That remains your business decision.</p>
      </section>

      <section className="section intro-section" id="approach">
        <div className="section-kicker">01 — THE PROBLEM</div>
        <div className="intro-grid">
          <h2>AI needs control at <em>the moment it acts.</em></h2>
          <div className="intro-copy">
            <p>Testing AI models and writing AI policies both matter. But they do not stop an agent from making a payment or changing a customer record on the wrong day. When AI takes action, the business needs a check on that exact action, before it happens.</p>
            <p>Parmana focuses on that moment: confirming the action is allowed, then keeping a record of what was allowed and what was done. It works with the systems you already use, so you don&apos;t need new equipment. Hosting costs still apply.</p>
            <a className="underlined-link" href="#capabilities">See the three steps <Arrow /></a>
          </div>
        </div>
      </section>


      <section className="section video-section" id="explainer">
        <div className="section-kicker">WATCH THE EXPLAINER</div>
        <div className="video-heading">
          <h2>See how Parmana <em>keeps AI within limits.</em></h2>
          <p>A short introduction to the problem and how we solve it.</p>
        </div>
        <div className="video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/BmEDAFNi5Rg"
            title="Parmana Systems explainer video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <section className="capabilities-section" id="capabilities">
        <div className="section">
          <div className="section-kicker">02 — HOW IT WORKS</div>
          <div className="section-heading-row">
            <h2>Three steps to <em>keep AI in bounds.</em></h2>
            <p>Simple to explain, and simple to audit.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.number}>
                <div className="card-top"><span>{item.number}</span><span className="card-tag">{item.tag}</span></div>
                <div className="capability-symbol">{item.number === "01" ? "⌘" : item.number === "02" ? "⊙" : "⌁"}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#contact" aria-label={`Talk to us about: ${item.title}`}>Talk to us about this <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section authority-section" id="principles">
        <div className="section-kicker">03 — OUR PRINCIPLES</div>
        <div className="authority-grid">
          <div>
            <h2>AI can suggest.<br /><em>Your business approves.</em></h2>
            <p className="authority-lead">An AI&apos;s confidence is not permission. Access to a system is not the same as being allowed to use it for any purpose. Every action needs a clear approval.</p>
          </div>
          <div className="principle-list">
            <div><span>01</span><p><strong>Clear limits</strong><br />Every action is measured against limits your business has defined.</p></div>
            <div><span>02</span><p><strong>Stop when unsure</strong><br />If approval is missing or unclear, the action does not go ahead.</p></div>
            <div><span>03</span><p><strong>Clear records</strong><br />Each record shows what was approved and what was done.</p></div>
            <div><span>04</span><p><strong>People stay accountable</strong><br />Exceptions and judgment calls go to people, who remain responsible for them.</p></div>
          </div>
        </div>
      </section>

      <section className="use-cases-section" id="use-cases">
        <div className="section">
          <div className="section-kicker">04 — WHERE IT APPLIES</div>
          <div className="section-heading-row">
            <h2>Where controlled AI action <em>matters most.</em></h2>
            <p>Any business where a mistake with money, customers or records is costly.</p>
          </div>
          <div className="use-case-list">
            {useCases.map((item) => (
              <article className="use-case" key={item.number}>
                <span className="use-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#contact" aria-label={`Talk to us about: ${item.title}`}>↗</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="evidence-section">
        <div className="evidence-pattern" aria-hidden="true" />
        <div className="evidence-content">
          <div className="section-kicker light-kicker">THE PROMISE</div>
          <h2>Let AI do more work.<br /><em>Keep control of what it can do.</em></h2>
          <p>Draw a clear line between what AI suggests and what your business approves. Every action that goes through is one you authorized, and you can show it.</p>
          <a className="button button-light" href="https://cal.com/pavan-charak/" target="_blank" rel="noreferrer">Book a 30-minute meeting <Arrow /></a>
          <div className="evidence-sequence"><span>SET LIMITS</span><b>→</b><span>CHECK</span><b>→</b><span>ACT</span><b>→</b><span>RECORD</span></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-kicker">05 — LET&apos;S TALK</div>
        <div className="contact-row">
          <div><h2>Let&apos;s talk about your AI plans.</h2><p>Exploring AI agents in financial services, operations or public services? We would like to hear what you are building and where control matters most.</p></div>
          <a className="button button-dark" href="https://cal.com/pavan-charak/" target="_blank" rel="noreferrer">Book a meeting <Arrow /></a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#">
          <span className="brand-mark"><i /><i /><i /></span>
          <span>parmana<span className="brand-light">systems</span></span>
        </a>
        <p>Control for AI that acts on your business&apos;s behalf.</p>
        <div className="footer-links"><a href="#approach">The problem</a><a href="#capabilities">How it works</a><a href="#contact">Contact</a><a href="https://docs.parmanasystems.com" target="_blank" rel="noreferrer">Docs</a><a href="https://blog.parmanasystems.com" target="_blank" rel="noreferrer">Blog</a></div>
        <span className="copyright">© {new Date().getFullYear()} Parmana Systems</span>
      </footer>
    </main>
  );
}
