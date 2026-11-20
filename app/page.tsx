import type { Metadata } from "next";
import { SiteFooter, SiteHeader, booking, docs } from "./components/SiteChrome";

const title = "The Institutional Authority Layer for Autonomous Systems";
const description = "Parmana Systems helps enterprises define, enforce and verify the institutional authority delegated to AI agents and autonomous software.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: "Parmana Systems", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const pillars = [
  { n: "01", title: "Declare authority", text: "Make the limits of delegation explicit: who or what may act, on which resources, for which purpose, and under what conditions." },
  { n: "02", title: "Enforce before execution", text: "Evaluate the proposed institutional action against deterministic rules before it reaches the system that changes institutional state." },
  { n: "03", title: "Prove what happened", text: "Create tamper-evident evidence that connects the declared authority, the authorization decision and the recorded execution event." },
];

const scenarios = [
  { label: "Refunds", headline: "A valid API call can still be an unauthorised refund.", detail: "The agent can access the refund endpoint. The institution still decides how much it may refund without approval." },
  { label: "Payments", headline: "Payment access is not permission to pay anyone.", detail: "A payment request can be checked against supplier status, delegated limits and approval requirements." },
  { label: "Infrastructure", headline: "Permission to deploy is not authority to change production.", detail: "Infrastructure actions can be constrained by environment, change type, approved window and required sign-off." },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero hero-home">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">Institutional authority infrastructure</p>
            <h1>AI can act autonomously.<br /><span>Institutional authority must remain explicit.</span></h1>
            <p className="hero-lede">As AI agents take action across institutional systems, access alone is not enough. Enterprises need a way to define what agents are allowed to do, enforce those limits before execution, and prove what happened.</p>
            <div className="cta-row">
              <a className="button button-light" href={booking} target="_blank" rel="noopener noreferrer">Discuss your use case</a>
              <a className="text-link text-link-light" href="/architecture">Explore the architecture <span aria-hidden="true">↗</span></a>
            </div>
            <p className="hero-caption">For business leaders responsible for outcomes. For engineering leaders responsible for execution.</p>
          </div>
          <div className="hero-visual" aria-label="Illustration of an AI agent request being checked against delegated institutional authority">
            <div className="visual-topline"><span className="pulse" /> AUTHORITY CHECK / LIVE REQUEST</div>
            <div className="visual-request">
              <div className="visual-label">AGENT REQUEST</div>
              <div className="visual-amount">₹48,000</div>
              <p>Issue customer refund</p>
              <div className="visual-meta"><span>API permission</span><b className="status-ok">AVAILABLE</b></div>
              <div className="visual-meta"><span>Delegated authority</span><b className="status-warn">LIMIT ₹5,000</b></div>
            </div>
            <div className="visual-down">↓</div>
            <div className="visual-engine">
              <div className="engine-mark">P</div>
              <div><strong>Parmana</strong><small>Deterministic policy evaluation</small></div>
              <span className="engine-state">EVALUATE</span>
            </div>
            <div className="visual-decision">
              <span className="decision-symbol">!</span>
              <div><strong>Approval required</strong><small>Request exceeds delegated authority</small></div>
            </div>
            <div className="visual-foot">Illustrative scenario. Policy limits are configured by the institution.</div>
          </div>
        </div>
        <div className="hero-gridline" aria-hidden="true" />
      </section>

      <section className="audience-section block">
        <div className="wrap">
          <div className="section-heading">
            <p className="eyebrow">Two perspectives. One control problem.</p>
            <h2>Institutional authority needs both an institutional definition and an engineering implementation.</h2>
            <p className="section-copy">Parmana gives leaders a way to express the authority they delegate, and gives engineering teams a deterministic way to enforce it in real systems.</p>
          </div>
          <div className="audience-grid">
            <a className="audience-card audience-business" href="/business">
              <div className="audience-top"><span>01 / BUSINESS LEADERS</span><span className="audience-arrow">↗</span></div>
              <div className="audience-symbol">B</div>
              <h3>Keep institutional authority with the institution.</h3>
              <p>Define what agents may do, where they must stop, when a person must approve, and how you can demonstrate control.</p>
              <span className="audience-link">Explore the institutional perspective <b>→</b></span>
            </a>
            <a className="audience-card audience-engineering" href="/engineering">
              <div className="audience-top"><span>02 / ENGINEERING LEADERS</span><span className="audience-arrow">↗</span></div>
              <div className="audience-symbol">E</div>
              <h3>Enforce authority outside the agent.</h3>
              <p>Inspect the execution path, policy evaluation model, integration boundary, cryptographic evidence and verification workflow.</p>
              <span className="audience-link">Explore the engineering perspective <b>→</b></span>
            </a>
          </div>
        </div>
      </section>

      <section className="problem-section block block-dark">
        <div className="wrap problem-grid">
          <div>
            <p className="eyebrow eyebrow-light">The distinction</p>
            <h2>Access answers what a system can reach.<br /><span>Authority answers what it may do.</span></h2>
          </div>
          <div className="problem-copy">
            <p>Identity and access controls are essential. They establish which users, services and agents can access systems and operations.</p>
            <p>But an agent with permission to call a payment API may still lack authority to pay a particular supplier, exceed a delegated limit or bypass an approval.</p>
            <p>That is an institutional decision. It should not be delegated to the agent's interpretation of its instructions.</p>
          </div>
        </div>
        <div className="wrap distinction-table">
          <div><span>ACCESS PERMISSIONS</span><strong>Can this identity invoke the operation?</strong></div>
          <div><span>INSTITUTIONAL AUTHORITY</span><strong>Is this specific action within delegated limits?</strong></div>
          <div><span>EXECUTION EVIDENCE</span><strong>Can the decision and recorded action be verified?</strong></div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="section-heading">
            <p className="eyebrow">The Parmana model</p>
            <h2>Declare. Enforce. Prove.</h2>
            <p className="section-copy">A control layer between an agent's proposed action and the institutional system that carries it out.</p>
          </div>
          <div className="pillar-grid">
            {pillars.map((p) => <article className="pillar-card" key={p.n}><span>{p.n}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}
          </div>
          <div className="flow-strip" aria-label="Declared authority, authorization, execution and evidence">
            <span>DECLARED AUTHORITY</span><b>→</b><span>AUTHORIZATION</span><b>→</b><span>EXECUTION</span><b>→</b><span>VERIFIABLE EVIDENCE</span>
          </div>
        </div>
      </section>

      <section className="block block-soft">
        <div className="wrap">
          <div className="section-heading">
            <p className="eyebrow">Where it matters</p>
            <h2>Consequential actions need explicit authority.</h2>
            <p className="section-copy">The same principle applies anywhere autonomous software can change institutional state.</p>
          </div>
          <div className="scenario-grid">
            {scenarios.map((s) => <article className="scenario-card" key={s.label}><span>{s.label}</span><h3>{s.headline}</h3><p>{s.detail}</p></article>)}
          </div>
          <div className="section-bottom-link"><a className="text-link" href="/use-cases">Explore use cases <span>→</span></a></div>
        </div>
      </section>

      <section className="closing closing-home">
        <div className="wrap closing-inner">
          <p className="eyebrow eyebrow-light">Parmana Systems</p>
          <h2>Let AI agents work for your institution. Keep authority with your institution.</h2>
          <p className="closing-copy">Start with the institutional action you need to control. We will show you the authority model and the engineering path.</p>
          <div className="cta-row">
            <a className="button button-light" href={booking} target="_blank" rel="noopener noreferrer">Request a conversation</a>
            <a className="text-link text-link-light" href={docs} target="_blank" rel="noopener noreferrer">Technical documentation ↗</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
