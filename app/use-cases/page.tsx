import type { Metadata } from "next";
import { CallToAction, PageIntro, SectionHeading, SiteFooter, SiteHeader } from "../components/SiteChrome";

const title = "Use Cases";
const description = "Institutional actions where AI agents need explicit authority, deterministic authorization and verifiable execution evidence.";

export const metadata: Metadata = {
  title, description, alternates: { canonical: "/use-cases" },
  openGraph: { title, description, url: "/use-cases", siteName: "Parmana Systems", type: "website" },
};

const cases = [
  { n: "01", category: "FINANCE", title: "Customer refunds", risk: "An agent has permission to call the refund API but requests an amount beyond its delegated limit.", rule: "Refund amount, customer status, reason code and approval threshold.", control: "Allow within limits. Require approval or deny outside delegated authority." },
  { n: "02", category: "PAYMENTS", title: "Supplier payments", risk: "An agent initiates a payment to a supplier or account that has not been approved for that transaction.", rule: "Supplier identity, approved status, payment amount, currency and payment purpose.", control: "Authorize only when the supplier and transaction satisfy the declared rules." },
  { n: "03", category: "PROCUREMENT", title: "Purchase commitments", risk: "An agent creates or changes a purchase commitment beyond its assigned budget or approval level.", rule: "Cost centre, budget, vendor, contract terms and delegated spend limit.", control: "Enforce spend thresholds and route exceptions for approval before commitment." },
  { n: "04", category: "OPERATIONS", title: "Customer and institutional records", risk: "An agent updates records outside the scope of the active case or its delegated task.", rule: "Record ownership, permitted fields, case context and allowed state transitions.", control: "Constrain updates to approved fields, records and workflow states." },
  { n: "05", category: "INFRASTRUCTURE", title: "Production changes", risk: "An agent with deployment access attempts a consequential change outside the approved change scope.", rule: "Environment, change class, service, release window and required approver.", control: "Block out-of-scope changes and require the appropriate approval before execution." },
  { n: "06", category: "ENTERPRISE WORKFLOWS", title: "Cross-system actions", risk: "An agent coordinates multiple tools and creates an institutional outcome no single tool permission was intended to authorize.", rule: "Institutional purpose, transaction context, cumulative limits and action sequence.", control: "Evaluate each covered action against the same declared authority model and retain linked evidence." },
];

export default function UseCasesPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Use cases" title="Wherever an AI action can change institutional state, authority matters.">
        <p>Parmana applies to consequential actions across enterprise systems. The institution defines the limits. The control layer checks the action before it executes.</p>
      </PageIntro>
      <section className="block">
        <div className="wrap">
          <SectionHeading eyebrow="Institutional actions" title="Start with the action, not the AI model." text="These examples illustrate the kinds of authority rules an organization may choose to enforce. Actual policies and integrations are configured for each deployment." />
          <div className="usecase-grid">
            {cases.map((c) => <article key={c.n} className="usecase-card"><div className="usecase-top"><span>{c.n}</span><span>{c.category}</span></div><h2>{c.title}</h2><div><small>THE AUTHORITY GAP</small><p>{c.risk}</p></div><div><small>WHAT THE INSTITUTION DEFINES</small><p>{c.rule}</p></div><div><small>EXAMPLE CONTROL</small><p>{c.control}</p></div></article>)}
          </div>
        </div>
      </section>
      <section className="block block-soft">
        <div className="wrap usecase-bottom">
          <div><p className="eyebrow">For business teams</p><h2>Which action should an agent never take without approval?</h2><p>Define the institutional boundary and the outcome you need to protect.</p></div>
          <div><p className="eyebrow">For engineering teams</p><h2>Where does that action enter the execution path?</h2><p>Identify the tool call, service boundary and side effect that must be mediated.</p></div>
        </div>
      </section>
      <CallToAction heading="Choose one workflow to start." text="We can map the delegated authority and the technical enforcement point for one institutional action before expanding to more workflows." />
      <SiteFooter />
    </main>
  );
}
