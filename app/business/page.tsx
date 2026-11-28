import type { Metadata } from "next";
import { CallToAction, PageIntro, SectionHeading, SiteFooter, SiteHeader } from "../components/SiteChrome";

const title = "For Business Leaders";
const description = "A business-first explanation of how Parmana helps organizations delegate authority to AI agents without losing control of consequential decisions.";

export const metadata: Metadata = {
  title, description, alternates: { canonical: "/business" },
  openGraph: { title, description, url: "/business", siteName: "Parmana Systems", type: "website" },
};

const questions = [
  { q: "What can an agent decide on its own?", a: "Set clear limits for the decisions and actions you are willing to delegate." },
  { q: "When must a person step in?", a: "Define the situations that require approval before an action can proceed." },
  { q: "Can we show what happened later?", a: "Keep evidence of the authority that applied, the decision that was made and the execution event that was recorded." },
];

export default function BusinessPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero page-hero-business">
        <div className="wrap narrow">
          <p className="eyebrow">For CEOs, COOs, CFOs, CIOs and business owners</p>
          <h1>Delegate work to AI. Do not delegate your institutional authority by accident.</h1>
          <p className="page-hero-lede">AI agents can process refunds, initiate payments, update records and trigger workflows. Your institution decides which actions they may take, how far their authority extends and when a person must approve. Parmana gives you independent evidence that each action stayed within that authority.</p>
          <div className="cta-row"><a className="button" href="https://cal.com/pavan-charak/" target="_blank" rel="noopener noreferrer">Discuss your institution needs</a><a className="text-link" href="/use-cases">See business examples →</a></div>
        </div>
      </section>

      <section className="block">
        <div className="wrap business-split">
          <div><p className="eyebrow">The institutional issue</p><h2>An agent may have access and still make a decision your institution never approved.</h2></div>
          <div className="business-prose">
            <p>Your teams already set financial limits, approval levels, supplier rules and operating procedures. These rules define how much authority people and systems have.</p>
            <p>When AI agents begin taking action, those same boundaries need to apply to them. A role or API permission does not explain whether a particular payment, refund or change is appropriate in the current business context.</p>
            <p>Parmana helps make those boundaries explicit and checks covered actions against them before execution.</p>
          </div>
        </div>
      </section>

      <section className="block block-soft">
        <div className="wrap">
          <SectionHeading eyebrow="A practical example" title="The agent can issue refunds. Should it issue this refund?" text="A refund API may be available to the agent. The institution still sets the financial authority." />
          <div className="business-example">
            <div className="business-example-top"><span>REFUND POLICY / ILLUSTRATIVE</span><span>BUSINESS RULE</span></div>
            <div className="business-example-body">
              <div className="refund-amount"><small>Agent requests</small><strong>₹48,000</strong><span>Customer refund</span></div>
              <div className="refund-rule"><small>Delegated authority</small><strong>₹5,000</strong><span>Agent may refund without manager approval</span></div>
              <div className="refund-outcome"><span className="outcome-mark">!</span><div><strong>Manager approval required</strong><p>The request exceeds the agent's delegated limit. The action waits for the approval defined by the institution.</p></div></div>
            </div>
          </div>
          <p className="example-disclaimer">Illustrative policy only. Each organization defines its own limits and approval rules.</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <SectionHeading eyebrow="What leaders gain" title="Clear rules before action. Clear evidence after." text="Parmana is designed to make delegated authority visible and enforceable across configured institutional workflows." />
          <div className="business-value-grid">
            <article><span>01</span><h3>Control delegation</h3><p>Decide which tasks agents can complete independently and which decisions remain with a person.</p></article>
            <article><span>02</span><h3>Apply consistent limits</h3><p>Use the same institutional rules each time a covered action is requested, rather than relying on an agent to interpret instructions.</p></article>
            <article><span>03</span><h3>Know when approval is needed</h3><p>Make approval part of the process when the action falls outside the authority you delegated.</p></article>
            <article><span>04</span><h3>Show what was authorized</h3><p>Keep verifiable evidence linking the declared authority, the decision and the recorded action.</p></article>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <SectionHeading eyebrow="Logs are not governance" title="Seeing what happened is not the same as deciding what may happen." text="Monitoring and logging are essential. On their own, they record activity after it occurs and stop nothing." />
          <div className="business-value-grid">
            <article><span>01</span><h3>Rules come first</h3><p>Write the limits down, with amounts, conditions and who must approve, before the agent acts.</p></article>
            <article><span>02</span><h3>The checker is separate</h3><p>The party that proposes an action should not be the only one that approves it, and rule changes should need a second person.</p></article>
            <article><span>03</span><h3>Approvals stay meaningful</h3><p>Keep approvals few and specific. A reviewer who approves everything without examining it provides no real control.</p></article>
            <article><span>04</span><h3>Evidence sits outside the agent</h3><p>A record the agent can edit is its own account of itself. Evidence should come from a source the agent cannot alter.</p></article>
          </div>
        </div>
      </section>

      <section className="block block-dark">
        <div className="wrap business-split">
          <div><p className="eyebrow eyebrow-light">Questions for leadership</p><h2>Before an agent acts, can your institution answer these questions?</h2></div>
          <div className="leader-questions">
            {questions.map((item, i) => <div key={item.q}><span>0{i + 1}</span><div><h3>{item.q}</h3><p>{item.a}</p></div></div>)}
          </div>
        </div>
      </section>

      <CallToAction heading="Start with one consequential institutional action." text="Bring a refund, payment, procurement or operational workflow. We will map the authority that should apply and show how Parmana can enforce it." />
      <SiteFooter />
    </main>
  );
}
