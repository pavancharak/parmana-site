"use client";

import { useState } from "react";

const examples = [
  { title: "Refund", action: "Refund ₹80,000", authority: "Up to ₹50,000", result: "BLOCKED", detail: "The agent can decide a refund is appropriate. The business has not authorized an ₹80,000 execution." },
  { title: "Payment", action: "Pay vendor ₹12,00,000", authority: "Up to ₹10,00,000", result: "BLOCKED", detail: "The agent can prepare the payment, but it cannot execute beyond the authority granted by the business." },
  { title: "Customer record", action: "Change protected account", authority: "Read and routine updates", result: "BLOCKED", detail: "The agent can work with customer data, but protected changes remain outside its business authority." },
];

export default function ParmanaWebsite() {
  const [selected, setSelected] = useState(0);
  const example = examples[selected];

  return (
    <div className="site-shell" id="top">
      <header className="container nav">
        <a className="brand" href="#top" aria-label="Parmana Systems home">
          <span className="brand-mark" aria-hidden="true"><i /><i /></span>
          <span>Parmana</span>
        </a>
        <nav className="navlinks" aria-label="Main navigation">
          <a href="#principle">Product</a>
          <a href="#how">How it works</a>
          <a href="#examples">Use cases</a>
          <a href="#institutions">Customers</a>
          <a href="https://docs.parmanasystems.com/" target="_blank" rel="noreferrer">Docs</a>
        </nav>
        <a className="btn btn-accent nav-cta" href="mailto:founder@parmanasystems.com">Talk to us <b>→</b></a>
      </header>

      <main>
        <section className="container hero">
          <div className="hero-copy">
            <div className="eyebrow"><i /> Business authority for AI agents</div>
            <h1>Give AI<br /><em>autonomy.</em><br />Keep authority.</h1>
            <p className="lead">Parmana turns your business rules into enforceable authority for AI agents, so they can act autonomously without acting beyond what your business allows.</p>
            <div className="actions">
              <a className="btn btn-accent hero-btn" href="#how">See how authority works <b>→</b></a>
              <a className="btn btn-outline" href="mailto:founder@parmanasystems.com">Talk to Parmana</a>
            </div>
            <div className="hero-points">
              <div><span>✓</span><strong>Define</strong><small>business authority</small></div>
              <div><span>✓</span><strong>Enforce</strong><small>at execution time</small></div>
              <div><span>✓</span><strong>Prove</strong><small>what was authorized</small></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Parmana execution authority example">
            <div className="hero-card">
              <div className="card-top"><span>BUSINESS AUTHORITY</span><span className="live"><i /> LIVE AUTHORITY CHECK</span></div>
              <div className="action-row">
                <div className="row-icon">↗</div>
                <div><span>Autonomous action</span><strong>Refund ₹80,000</strong><small>Customer request · Agent: support-01</small></div>
              </div>
              <div className="action-row">
                <div className="row-icon">◇</div>
                <div><span>Business authority</span><strong>Up to ₹50,000</strong><small>Refund approval limit</small></div>
              </div>
              <div className="check-row">
                <div><span>PARMANA CHECK</span><strong>Outside authority</strong><small>Requested action exceeds delegated authority</small></div>
                <b>BLOCKED</b>
              </div>
              <div className="result-row"><div className="stop-icon">×</div><div><span>RESULT</span><strong>BLOCKED</strong><small>Action not executed</small></div></div>
            </div>
            <div className="visual-note"><span>ⓘ</span> Business rules enforced at execution.</div>
          </div>
        </section>

        <section className="authority-strip"><div className="container strip-inner"><span>THE PRINCIPLE</span><strong>Your business decides. Autonomous systems execute within that authority.</strong></div></section>

        <section className="section" id="problem"><div className="container split">
          <div><div className="eyebrow">01 / The authority gap</div><h2>Having access is not the same as having authority.</h2></div>
          <div className="section-copy"><p>AI agents are increasingly able to act inside business systems using real credentials, tools and workflows.</p><p>But technical access does not tell the business whether a specific action is actually permitted.</p><p className="question">The fundamental question is not only <strong>“Can the AI execute this?”</strong><br />It is <strong>“Does the business have authority for this exact action?”</strong></p></div>
        </div></section>

        <section className="section dark-section" id="principle"><div className="container">
          <div className="eyebrow light">02 / The principle</div><h2>AI can act independently without becoming the authority.</h2>
          <p className="dark-lead">The business defines authority. AI operates inside that boundary. Parmana checks the attempted action at runtime before it reaches the protected system.</p>
          <div className="authority-flow"><div><span>01</span><strong>Business authority</strong><small>The business defines it.</small></div><div><span>02</span><strong>Agent authority</strong><small>Boundaries are explicit.</small></div><div><span>03</span><strong>AI operates</strong><small>Autonomously.</small></div><div className="gate"><span>04</span><strong>Parmana checks</strong><small>At execution time.</small></div><div className="outcomes"><b>ALLOW</b><small>Authorized → execute</small><b>STOP</b><small>Outside authority → block</small></div></div>
        </div><div className="authority-callout"><strong>No authority. No execution.</strong><span>Credentials may give an agent access. Parmana checks whether the business gave it authority for the action.</span></div></section>

        <section className="section" id="how"><div className="container"><div className="eyebrow">03 / How it works</div><h2>Business authority becomes an execution boundary.</h2><div className="steps">{[
          ["01","Business defines authority","The business decides what an AI system is allowed to execute."],
          ["02","Authority is bound to the agent","The permitted actions, limits and conditions become explicit."],
          ["03","AI operates","The system can make decisions and initiate actions without waiting for a human every time."],
          ["04","Parmana checks the action","The attempted action is checked against the authority granted by the business."],
          ["05","Only authorized actions execute","Outside the boundary, execution is stopped and the decision can be evidenced."]
        ].map(([n,t,p])=><article className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>

        <section className="section distinction"><div className="container"><div className="eyebrow">04 / The distinction</div><div className="dist-head"><h2>Access is not authority.</h2><div className="big-symbol">≠</div></div><div className="two-col"><div><span className="label">ACCESS</span><h3>The system can reach a capability.</h3><p>Credentials, tools and permissions allow an agent to interact with business systems.</p></div><div><span className="label">AUTHORITY</span><h3>The business controls what may execute.</h3><p>Authority comes from the business and is evaluated against the specific action at runtime.</p></div></div></div></section>

        <section className="section example-section" id="examples"><div className="container"><div className="eyebrow">05 / See it in practice</div><div className="split example-head"><h2>When access exceeds business authority.</h2><p>Choose a scenario. The boundary stays the same: <strong>the business decides what can execute.</strong></p></div><div className="example-tabs">{examples.map((x,i)=><button key={x.title} className={selected===i?"active":""} onClick={()=>setSelected(i)}>{x.title}</button>)}</div><div className="example-panel"><div className="scenario"><span>AI REQUESTS</span><strong>{example.action}</strong><small>Autonomous system · consequential action</small></div><div className="scenario"><span>BUSINESS AUTHORITY</span><strong>{example.authority}</strong><small>Declared execution boundary</small></div><div className="result"><span>PARMANA</span><strong>{example.result}</strong><p>{example.detail}</p></div></div></div></section>

        <section className="section" id="institutions"><div className="container"><div className="eyebrow">06 / For institutions</div><h2>Business authority matters wherever AI can move money, data or operations.</h2><p className="wide-copy">The common problem is not the industry. It is an AI system acting beyond the authority the institution intended to grant.</p><div className="institution-grid">{[["BANKING","Payments · refunds · account actions"],["INSURANCE","Claims · approvals · customer actions"],["HEALTHCARE","Authorizations · records · workflows"],["ENTERPRISE","Procurement · operations · infrastructure"]].map(([a,b])=><div className="institution" key={a}><span>{a}</span><strong>{b}</strong></div>)}</div></div></section>

        <section className="section why"><div className="container"><div className="eyebrow">07 / Why Parmana</div><h2>Give AI room to operate. Keep authority with the business.</h2><div className="principles">{[["Authority stays with the business","AI does not become the source of authority simply because it can act."],["Autonomous operation","Routine actions can move without requiring a human to approve every step."],["Execution enforcement","Actions outside the granted boundary are stopped before execution when routed through Parmana."],["Evidence","The business can establish what authority existed and whether the attempted action was within it."]].map(([t,p])=><div key={t}><span>+</span><h3>{t}</h3><p>{p}</p></div>)}</div></div></section>

        <section className="section final-cta" id="contact"><div className="container"><div className="eyebrow light">Parmana Systems</div><h2>Give AI autonomy.<br /><em>Keep authority with the business.</em></h2><p>Parmana turns business rules into enforceable authority for AI agents and preserves evidence of what was authorized and what actually executed.</p><div className="actions"><a className="btn btn-white" href="mailto:founder@parmanasystems.com">Talk to Parmana <b>↗</b></a><a className="text-link light-link" href="#top">Back to top ↑</a></div></div></section>
      </main>
      <footer className="container footer"><div><a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><i /><i /></span><span>Parmana</span></a><p>Business authority infrastructure for AI agents.</p></div><div className="footer-right"><span>© 2026 Parmana Systems</span><a href="mailto:founder@parmanasystems.com">founder@parmanasystems.com</a></div></footer>
    </div>
  );
}
