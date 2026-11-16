import type { Metadata } from "next";
import { SiteFooter, SiteHeader, booking } from "./components/SiteChrome";

const pageTitle = "Access is not authority. | Parmana";
const pageDescription =
  "Parmana checks whether an AI agent's proposed business action is within the authority your organization delegated, before execution, and keeps verifiable evidence.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/" },
  openGraph: { title: pageTitle, description: pageDescription, url: "/", siteName: "Parmana Systems", type: "website" },
  twitter: { card: "summary", title: pageTitle, description: pageDescription },
};

const capabilities = [
  {
    number: "01",
    title: "Make authority explicit",
    text: "Define what an agent may do, for whom, under which conditions, and within what limits. Keep business authority separate from technical access.",
  },
  {
    number: "02",
    title: "Check before execution",
    text: "Evaluate each covered action against the authority you declared. Allow it, deny it, or require the approval your policy specifies.",
  },
  {
    number: "03",
    title: "Keep evidence of what happened",
    text: "Create a verifiable record connecting the declared authority, the authorization decision, and the recorded execution event.",
  },
];

const examples = [
  { action: "Issue a customer refund", permission: "Can call the refund API", authority: "May refund up to ₹5,000 without approval", outcome: "₹8,000 requires approval" },
  { action: "Pay a supplier", permission: "Can initiate payments", authority: "May pay approved suppliers within a purchase limit", outcome: "Unapproved supplier is blocked" },
  { action: "Change a customer record", permission: "Can update CRM records", authority: "May change only specified fields for an active case", outcome: "Out-of-scope change is denied" },
];

const steps = [
  { title: "The agent proposes", text: "An agent requests a business action through your application." },
  { title: "Parmana checks authority", text: "The request is checked against the relevant declared authority and policy." },
  { title: "The action is controlled", text: "The action proceeds only when authorized. Required approvals happen before execution." },
  { title: "Evidence is recorded", text: "The authorization decision and execution record are linked for later verification." },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="authority-hero">
        <div className="wrap authority-hero-grid">
          <div className="authority-copy">
            <p className="eyebrow">Accountability for autonomous systems</p>
            <h1>Your AI agent can follow every security rule and still make a decision your business never authorized.</h1>
            <p className="authority-lead">Security permissions determine what a system can access. Business authority determines what it is allowed to do. These are not the same thing.</p>
            <p className="authority-support">Parmana checks business authority before covered actions reach execution, then keeps independently verifiable evidence of what was authorized and what happened.</p>
            <div className="cta-row">
              <a className="button" href={booking} target="_blank" rel="noopener noreferrer">Talk to us</a>
              <a className="button secondary" href="/architecture">See how it works</a>
            </div>
            <p className="hero-note">Built for business actions such as refunds, payments and record updates.</p>
          </div>

          <div className="authority-visual" aria-label="Illustration of an AI agent request checked against business authority before execution">
            <div className="visual-label">A simple example</div>
            <div className="request-card">
              <div className="request-top"><span className="status-dot" /> AGENT REQUEST</div>
              <div className="request-amount">₹8,000</div>
              <div className="request-caption">Customer refund requested</div>
              <div className="request-divider" />
              <div className="request-row"><span>API permission</span><strong className="allowed">Available</strong></div>
              <div className="request-row"><span>Delegated authority</span><strong className="blocked">Up to ₹5,000</strong></div>
            </div>
            <div className="visual-connector"><span /></div>
            <div className="parmana-check">
              <div className="parmana-mark">P</div>
              <div><strong>Parmana</strong><span>Independent authority check</span></div>
              <span className="check-tag">CHECK</span>
            </div>
            <div className="visual-result">
              <div className="result-icon">!</div>
              <div><strong>Approval required</strong><span>Outside the agent's delegated limit</span></div>
            </div>
            <p className="visual-footnote">Technical access is not business authorization.</p>
          </div>
        </div>
      </section>

      <section className="authority-contrast block" aria-labelledby="difference-heading">
        <div className="wrap">
          <div className="section-heading">
            <p className="eyebrow">The missing distinction</p>
            <h2 id="difference-heading">Access is not authority.</h2>
            <p className="body">An agent may have valid credentials and permission to call an API. That does not mean the business has authorized every action the API makes possible.</p>
          </div>
          <div className="contrast-grid">
            <article className="contrast-card">
              <span className="contrast-kicker">01 / TECHNICAL PERMISSION</span>
              <h3>Can the agent do it?</h3>
              <p>Identity, credentials, roles and API permissions determine which systems and operations the agent can reach.</p>
              <div className="contrast-answer"><span className="answer-icon neutral">✓</span><span>Can access the refund API</span></div>
            </article>
            <article className="contrast-card authority-card">
              <span className="contrast-kicker">02 / BUSINESS AUTHORITY</span>
              <h3>Is the agent allowed to do this?</h3>
              <p>Business rules determine whether this specific action is within the authority the organization chose to delegate.</p>
              <div className="contrast-answer"><span className="answer-icon alert">×</span><span>Cannot independently approve ₹8,000</span></div>
            </article>
          </div>
          <p className="contrast-caption">Security controls access. Parmana enforces delegated business authority.</p>
        </div>
      </section>

      <section className="block soft" aria-labelledby="examples-heading">
        <div className="wrap">
          <div className="section-heading">
            <p className="eyebrow">Where the gap appears</p>
            <h2 id="examples-heading">A permitted operation can still be the wrong business decision.</h2>
            <p className="body">The API may accept the request. The business still needs to decide whether the agent has authority to make it.</p>
          </div>
          <div className="example-list">
            {examples.map((item) => (
              <article className="example-row" key={item.action}>
                <div className="example-action"><span>BUSINESS ACTION</span><h3>{item.action}</h3></div>
                <div className="example-detail"><span>Technical permission</span><p>{item.permission}</p></div>
                <div className="example-detail"><span>Business authority</span><p>{item.authority}</p></div>
                <div className="example-outcome"><span>Example outcome</span><p>{item.outcome}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="how-heading">
        <div className="wrap">
          <div className="section-heading">
            <p className="eyebrow">What Parmana does</p>
            <h2 id="how-heading">Authority before action. Evidence after.</h2>
            <p className="body">Parmana provides an independent control point between an agent's proposed action and the business system that executes it.</p>
          </div>
          <ol className="authority-steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="authority-flow" aria-label="Declared authority leads to authorization, execution and evidence">
            <span>Declared</span><b>→</b><span>Authorized</span><b>→</b><span>Executed</span><b>→</b><span>Proven</span>
          </div>
        </div>
      </section>

      <section className="block soft" aria-labelledby="capabilities-heading">
        <div className="wrap">
          <div className="section-heading">
            <p className="eyebrow">The control layer</p>
            <h2 id="capabilities-heading">Make business authority enforceable.</h2>
          </div>
          <div className="grid-3 authority-capabilities">
            {capabilities.map((item) => (
              <article className="card" key={item.number}>
                <span className="capability-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="scope-note">Parmana controls the actions and systems configured to pass through its authorization checks. It does not replace identity security, and evidence of an execution event is not by itself proof of an external outcome.</p>
        </div>
      </section>

      <section className="authority-closing">
        <div className="wrap authority-closing-inner">
          <p className="eyebrow">Keep control as autonomy grows</p>
          <h2>Let AI agents work for your business. Keep authority with your business.</h2>
          <p>See how Parmana can enforce the limits you set on refunds, payments and other consequential actions.</p>
          <div className="cta-row">
            <a className="button light-button" href={booking} target="_blank" rel="noopener noreferrer">Talk to us</a>
            <a className="closing-link" href="https://docs.parmanasystems.com" target="_blank" rel="noopener noreferrer">Explore the documentation ↗</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
