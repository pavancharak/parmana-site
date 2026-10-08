"use client";

import { useState } from "react";

const examples = [
  { title: "Refund", action: "Refund ₹80,000", authority: "Up to ₹50,000", result: "BLOCKED", detail: "The system can decide that a refund is appropriate. The business never authorized an ₹80,000 execution." },
  { title: "Payment", action: "Pay vendor ₹12,00,000", authority: "Up to ₹10,00,000", result: "BLOCKED", detail: "The autonomous system can prepare the payment, but execution cannot exceed the authority granted by the business." },
  { title: "Customer record", action: "Change protected account", authority: "Read and routine updates", result: "BLOCKED", detail: "The system can work with customer data, but a protected change remains outside the authority it was given." },
];

export default function ParmanaWebsite() {
  const [selected, setSelected] = useState(0);
  const example = examples[selected];

  return (
    <div className="site-shell">
      <header className="container nav">
        <a className="logo" href="#top" aria-label="Parmana Systems home">PARMANA<span>®</span></a>
        <nav className="navlinks" aria-label="Main navigation">
          <a href="#problem">The problem</a><a href="#principle">Principle</a><a href="#examples">Examples</a><a href="#institutions">Institutions</a>
        </nav>
        <a className="btn btn-dark nav-cta" href="#contact">See Parmana in action <b>↗</b></a>
      </header>

      <main id="top">
        <section className="container hero">
          <div className="hero-copy">
            <div className="eyebrow"><i /> Business authority over autonomous AI</div>
            <h1>Your business<br /><em>has authority</em><br />over autonomous AI.</h1>
            <p className="lead">Parmana ensures your business has authority over autonomous systems so autonomous AI can execute only what your business has authorized.</p>
            <div className="actions"><a className="btn btn-dark" href="#principle">See how Parmana works <b>↓</b></a><a className="text-link" href="#problem">Explore the problem <span>→</span></a></div>
            <p className="micro">For businesses deploying AI that can make decisions and take action.</p>
          </div>
          <div className="hero-card" aria-label="Authorization example">
            <div className="card-top"><span>EXECUTION AUTHORITY</span><span className="live"><i /> LIVE BOUNDARY</span></div>
            <div className="request"><span>Autonomous action</span><strong>Refund ₹80,000</strong><small>Customer request · Agent: support-01</small></div>
            <div className="rule"><span>Business authority</span><strong>Up to ₹50,000</strong><small>Refund approval limit</small></div>
            <div className="decision"><div><span>PARMANA CHECK</span><strong>Outside authority</strong></div><b>BLOCKED</b></div>
            <div className="proof"><span>Execution</span><strong>No action reaches the protected system.</strong><span className="proof-dot">● Evidence retained</span></div>
          </div>
        </section>

        <section className="authority-strip"><div className="container strip-inner"><span>THE PRINCIPLE</span><strong>Your business decides. Autonomous systems execute within that authority.</strong></div></section>

        <section className="section" id="problem"><div className="container split">
          <div><div className="eyebrow">01 / The gap</div><h2>Accountability without authority is a fallacy in the era of autonomous systems.</h2></div>
          <div className="section-copy"><p>Institutions are increasingly responsible for what autonomous systems do inside their business.</p><p>An agent can approve a refund, release a payment, change a customer record or trigger an operational workflow.</p><p className="question">The fundamental question is not only <strong>“Did the AI make the right decision?”</strong><br />It is <strong>“Was the AI actually authorized to execute it?”</strong></p></div>
        </div></section>

        <section className="section dark-section" id="principle"><div className="container">
          <div className="eyebrow light">02 / The principle</div><h2>AI can be autonomous without becoming the authority.</h2>
          <p className="dark-lead">The business defines what the system is allowed to do. AI operates independently inside that boundary. Parmana checks the attempted execution before it reaches the protected system. No authority means no execution.</p>
          <div className="authority-flow"><div><span>01</span><strong>Business authority</strong><small>The institution decides.</small></div><div><span>02</span><strong>Authorized actions</strong><small>Boundaries are explicit.</small></div><div><span>03</span><strong>AI operates</strong><small>Autonomously.</small></div><div className="gate"><span>04</span><strong>Parmana checks</strong><small>Before execution.</small></div><div className="outcomes"><b>ALLOW</b><small>Authorized → execute</small><b>STOP</b><small>Outside authority → block</small></div></div>
        </div><div className="authority-callout"><strong>No authority. No execution.</strong><span>AI may decide what it wants to do. Parmana checks whether the business allowed it to do it.</span></div></section>

        <section className="section" id="how"><div className="container"><div className="eyebrow">03 / How it works</div><h2>Simple for the business. Strict at execution.</h2><div className="steps">{[
          ["01","Business defines authority","The institution decides what an AI system is allowed to execute."],
          ["02","AI operates","The system can make decisions and initiate actions without waiting for a human every time."],
          ["03","Parmana checks the action","The attempted action is checked against the authority granted by the business."],
          ["04","Only authorized actions execute","If the action is outside the boundary, execution is stopped."],
          ["05","The institution retains control","AI stays autonomous. The institution remains the authority."]
        ].map(([n,t,p])=><article className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>

        <section className="section distinction"><div className="container"><div className="eyebrow">04 / The distinction</div><div className="dist-head"><h2>Autonomy is not authority.</h2><div className="big-symbol">≠</div></div><div className="two-col"><div><span className="label">AUTONOMY</span><h3>AI can operate independently.</h3><p>It can reason, plan, call tools and initiate actions without constant human intervention.</p></div><div><span className="label">AUTHORITY</span><h3>The business controls what may execute.</h3><p>Permission comes from the institution, not from the system’s ability to act.</p></div></div></div></section>

        <section className="section example-section" id="examples"><div className="container"><div className="eyebrow">05 / See it in practice</div><div className="split example-head"><h2>When autonomy exceeds authority.</h2><p>Choose a scenario. The boundary stays the same: <strong>the business decides what can execute.</strong></p></div><div className="example-tabs">{examples.map((x,i)=><button key={x.title} className={selected===i?"active":""} onClick={()=>setSelected(i)}>{x.title}</button>)}</div><div className="example-panel"><div className="scenario"><span>AI REQUESTS</span><strong>{example.action}</strong><small>Autonomous system · consequential action</small></div><div className="scenario"><span>BUSINESS AUTHORITY</span><strong>{example.authority}</strong><small>Declared execution boundary</small></div><div className="result"><span>PARMANA</span><strong>{example.result}</strong><p>{example.detail}</p></div></div></div></section>

        <section className="section" id="institutions"><div className="container"><div className="eyebrow">06 / For institutions</div><h2>Where AI actions carry real consequences.</h2><p className="wide-copy">The common problem is not the industry. It is the consequence of an autonomous system acting beyond the authority the institution intended to grant.</p><div className="institution-grid">{[["BANKING","Payments · refunds · account actions"],["INSURANCE","Claims · approvals · customer actions"],["HEALTHCARE","Authorizations · records · workflows"],["ENTERPRISE","Procurement · operations · infrastructure"]].map(([a,b])=><div className="institution" key={a}><span>{a}</span><strong>{b}</strong></div>)}</div></div></section>

        <section className="section why"><div className="container"><div className="eyebrow">07 / Why Parmana</div><h2>Give AI room to operate. Not authority to overreach.</h2><div className="principles">{[["Authority stays with the business","AI does not become the source of authority simply because it can act."],["Autonomous operation","Routine actions can move without requiring a human to approve every step."],["Execution enforcement","Actions outside the granted boundary are stopped before execution when routed through Parmana."],["Evidence","The institution can establish what authority existed and whether the attempted action was within it."]].map(([t,p])=><div key={t}><span>+</span><h3>{t}</h3><p>{p}</p></div>)}</div></div></section>

        <section className="section final-cta" id="contact"><div className="container"><div className="eyebrow light">Parmana Systems</div><h2>Your business has authority.<br /><em>AI operates within it.</em></h2><p>Parmana ensures autonomous AI operates within the authority your business defines, while preserving evidence of what was authorized and what actually executed.</p><div className="actions"><a className="btn btn-white" href="mailto:founder@parmanasystems.com">Talk to Parmana <b>↗</b></a><a className="text-link light-link" href="#top">Back to top ↑</a></div></div></section>
      </main>
      <footer className="container footer"><div><a className="logo" href="#top">PARMANA<span>®</span></a><p>Your business has authority over autonomous systems.</p></div><div className="footer-right"><span>Business authority over autonomous systems.</span><span>© {new Date().getFullYear()} Parmana Systems</span></div></footer>
    </div>
  );
}
