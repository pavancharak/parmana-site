const Arrow = () => <span aria-hidden="true">↗</span>;

const capabilities = [
  {
    number: "01",
    title: "Define authority",
    description:
      "Translate business intent into explicit, machine-checkable limits. Make clear which actions an AI agent may take, under which conditions, and on whose authority.",
    tag: "Authority",
  },
  {
    number: "02",
    title: "Enforce at execution",
    description:
      "Verify the proposed action against the approved authority before it reaches the business system. If authorization is missing, invalid, or ambiguous, do not proceed.",
    tag: "Deterministic control",
  },
  {
    number: "03",
    title: "Prove what happened",
    description:
      "Preserve verifiable evidence connecting the declared authority, the decision, and the resulting execution, so teams can inspect and independently verify outcomes.",
    tag: "Evidence",
  },
];

const useCases = [
  {
    title: "Financial services",
    text: "Keep payments, refunds, and account actions within approved limits and delegated authority.",
    number: "01",
  },
  {
    title: "Enterprise operations",
    text: "Constrain actions across CRM, ERP, procurement, and other systems where mistakes carry real consequences.",
    number: "02",
  },
  {
    title: "Public services",
    text: "Help turn clearly defined rules into consistent digital decisions, with exceptions routed to accountable human judgment.",
    number: "03",
  },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        THE EXECUTION INTEGRITY LAYER FOR AI
        <a href="#approach">Explore our approach <Arrow /></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#" aria-label="Parmana Systems home">
          <span className="brand-mark"><i /><i /><i /></span>
          <span>parmana<span className="brand-light">systems</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#approach">Approach</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#use-cases">Use cases</a>
          <a href="#principles">Principles</a>
        </nav>
        <a className="button button-dark header-cta" href="https://cal.com/pavan-charak/" target="_blank" rel="noreferrer">Book a meeting <Arrow /></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> GOVERNANCE THAT REACHES EXECUTION</div>
          <h1>AI can decide.<br /><em>Your business</em><br />sets the authority.</h1>
          <p className="hero-description">
            As AI agents move from answering questions to taking action, responsible
            AI needs more than policies and promises. Parmana helps ensure that
            systems execute only what has been explicitly authorized.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#approach">See how it works <Arrow /></a>
            <a className="text-link" href="#principles">Our principles <span>↓</span></a>
          </div>
          <div className="hero-footnote">
            <span className="footnote-icon">✓</span>
            <span>Explicit authority. Deterministic enforcement. Verifiable evidence.</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Illustration of an AI action passing through an authorization boundary">
          <div className="visual-topline">
            <span>EXECUTION CONTROL</span>
            <span className="live-indicator">● CONTROL ACTIVE</span>
          </div>
          <div className="flow-card flow-proposal">
            <div className="flow-icon ai-icon">AI</div>
            <div><span className="flow-label">01 / PROPOSAL</span><strong>Agent proposes an action</strong><small>Initiate a $4,800 payment</small></div>
            <span className="flow-status">REQUEST</span>
          </div>
          <div className="flow-connector"><span /></div>
          <div className="authority-box">
            <div className="authority-heading">
              <div className="flow-icon shield-icon">✓</div>
              <div><span className="flow-label">02 / AUTHORITY CHECK</span><strong>Verify before execution</strong></div>
              <span className="verified-pill">VERIFIED</span>
            </div>
            <div className="check-row"><span>Approved action</span><b>Payment</b><span className="check">✓</span></div>
            <div className="check-row"><span>Transaction limit</span><b>$5,000 max</b><span className="check">✓</span></div>
            <div className="check-row"><span>Authority status</span><b>Valid</b><span className="check">✓</span></div>
          </div>
          <div className="flow-connector"><span /></div>
          <div className="flow-card flow-execution">
            <div className="flow-icon execution-icon">↗</div>
            <div><span className="flow-label">03 / EXECUTION</span><strong>Authorized action proceeds</strong><small>Decision evidence recorded</small></div>
            <span className="flow-status success">ALLOWED</span>
          </div>
          <div className="visual-bottom"><span>DECLARED</span><i /> <span>AUTHORIZED</span><i /> <span>EXECUTED</span><i /> <span>PROVEN</span></div>
        </div>
      </section>

      <section className="statement-strip">
        <div className="strip-label">THE GOVERNANCE GAP</div>
        <p>Knowing what an AI system should do is not the same as <strong>controlling what it can execute.</strong></p>
      </section>

      <section className="section intro-section" id="approach">
        <div className="section-kicker">01 — THE APPROACH</div>
        <div className="intro-grid">
          <h2>Responsible AI must work <em>when it matters most.</em></h2>
          <div className="intro-copy">
            <p>AI safety, model evaluations, and policy frameworks all play important roles. But when an agent can issue a refund, change a customer record, approve a request, or move money, the business needs a control that applies to the action itself.</p>
            <p>Parmana focuses on that boundary: checking whether the exact action is authorized before execution, and preserving evidence that can be verified afterwards.</p>
            <a className="underlined-link" href="#capabilities">Explore the control model <Arrow /></a>
          </div>
        </div>
      </section>


      <section className="section video-section" id="explainer">
        <div className="section-kicker">WATCH THE EXPLAINER</div>
        <div className="video-heading">
          <h2>See how Parmana brings <em>authority to execution.</em></h2>
          <p>A short introduction to the problem Parmana is built to solve.</p>
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
          <div className="section-kicker">02 — WHAT PARMANA DOES</div>
          <div className="section-heading-row">
            <h2>From governance intent<br />to <em>enforced control.</em></h2>
            <p>One execution integrity approach. Three connected capabilities.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.number}>
                <div className="card-top"><span>{item.number}</span><span className="card-tag">{item.tag}</span></div>
                <div className="capability-symbol">{item.number === "01" ? "⌘" : item.number === "02" ? "⊙" : "⌁"}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#contact" aria-label={`Discuss ${item.title}`}>Discuss this capability <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section authority-section" id="principles">
        <div className="section-kicker">03 — THE PRINCIPLE</div>
        <div className="authority-grid">
          <div>
            <h2>AI may propose.<br /><em>Authority must be proven.</em></h2>
            <p className="authority-lead">A model's confidence is not permission. A valid credential is not unlimited authority. A plausible interpretation is not approval.</p>
          </div>
          <div className="principle-list">
            <div><span>01</span><p><strong>Explicit authority</strong><br />Actions are measured against defined business permissions and constraints.</p></div>
            <div><span>02</span><p><strong>Fail closed</strong><br />Missing, invalid, or ambiguous authorization does not silently become permission.</p></div>
            <div><span>03</span><p><strong>Verifiable evidence</strong><br />Records connect what was authorized with what the system actually did.</p></div>
            <div><span>04</span><p><strong>Human accountability</strong><br />Exceptions and genuine discretion remain visible and accountable.</p></div>
          </div>
        </div>
      </section>

      <section className="use-cases-section" id="use-cases">
        <div className="section">
          <div className="section-kicker">04 — WHERE IT MATTERS</div>
          <div className="section-heading-row">
            <h2>When AI acts in the real world, <em>authority matters.</em></h2>
            <p>Designed for environments where automated actions must stay within defined limits.</p>
          </div>
          <div className="use-case-list">
            {useCases.map((item) => (
              <article className="use-case" key={item.number}>
                <span className="use-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#contact" aria-label={`Discuss ${item.title}`}>↗</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="evidence-section">
        <div className="evidence-pattern" aria-hidden="true" />
        <div className="evidence-content">
          <div className="section-kicker light-kicker">THE PROMISE</div>
          <h2>Don't just ask AI<br />to behave. <em>Control what<br />it can execute.</em></h2>
          <p>Build a clear boundary between what AI proposes and what your business authorizes. Make every permitted action accountable.</p>
          <a className="button button-light" href="https://cal.com/pavan-charak/" target="_blank" rel="noreferrer">Book a 30-minute meeting <Arrow /></a>
          <div className="evidence-sequence"><span>DECLARED</span><b>→</b><span>AUTHORIZED</span><b>→</b><span>EXECUTED</span><b>→</b><span>PROVEN</span></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-kicker">05 — LET'S TALK</div>
        <div className="contact-row">
          <div><h2>Put authority at the heart of your AI systems.</h2><p>Exploring AI agents in financial services, enterprise operations, or public services? Let's discuss the execution integrity problem.</p></div>
          <a className="button button-dark" href="https://cal.com/pavan-charak/" target="_blank" rel="noreferrer">Discuss your use case <Arrow /></a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#">
          <span className="brand-mark"><i /><i /><i /></span>
          <span>parmana<span className="brand-light">systems</span></span>
        </a>
        <p>Deterministic governance for systems that act.</p>
        <div className="footer-links"><a href="#approach">Approach</a><a href="#capabilities">Capabilities</a><a href="#contact">Contact</a></div>
        <span className="copyright">© {new Date().getFullYear()} Parmana Systems</span>
      </footer>
    </main>
  );
}
