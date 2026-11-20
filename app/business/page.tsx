import type { Metadata } from "next";
import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

const title = "For business leaders";
const description =
  "Parmana keeps AI agents within the authority your institution has delegated. Set the limits, decide who approves what, and receive signed evidence that anyone can verify.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/business" },
  openGraph: { title, description, url: "/business", siteName: "Parmana Systems", type: "website" },
  twitter: { card: "summary", title, description },
};

const controls = [
  {
    title: "You write the authority",
    text: "Define in plain rules what each action may do, up to what amount, and when a named person must approve it. The rules are versioned, so you can see what applied on any date.",
  },
  {
    title: "Access is not authority",
    text: "An agent can be allowed into a system and still not be allowed to make a particular decision. Parmana checks the decision, not only the access.",
  },
  {
    title: "Approval boundaries",
    text: "Where a rule needs a person, the approval is for one action, one resource and one amount. It expires and can be used once. It cannot be reused for a different case.",
  },
  {
    title: "Two people change the rules",
    text: "A change to a policy, an approver or a connector is proposed by one person and approved by a different person. The agent cannot approve its own change.",
  },
];

const evidence = [
  {
    title: "A signed record of each decision",
    text: "What was asked, which rule decided, who approved it, and what was released.",
  },
  {
    title: "Checked without us or your systems",
    text: "An auditor or regulator can verify a record offline, using only the public key your institution chooses to trust.",
  },
  {
    title: "Refusals are recorded too",
    text: "A refused request leaves a record of its own, so the questions you did not expect can still be answered.",
  },
];

const examples = [
  {
    title: "Refunds within a limit",
    text: "A support agent may refund up to 500 on its own. A refund of 4,000 is refused until a named manager signs an approval for that order and that amount. The record shows the refusal, the approval and the release.",
  },
  {
    title: "Vendor payments",
    text: "An agent prepares a payment. It is released only to a vendor your policy allows, within the approved amount, and after a signed approval.",
  },
  {
    title: "Changes to production",
    text: "An agent may restart a staging service. A production change waits for a signed approval from the on-call lead.",
  },
];

const status = [
  {
    tag: "Built and tested",
    title: "Rules, approvals and records",
    text: "Versioned rules that refuse anything they do not allow, signed single-use approvals, signed decision records, and two-person changes to rules.",
  },
  {
    tag: "Built, opt-in",
    title: "Per-agent authority",
    text: "You can grant one agent one capability, with limits and an expiry. No shipped policy requires a grant yet, so you switch it on for each policy you choose.",
  },
  {
    tag: "Your responsibility",
    title: "Your systems",
    text: "Parmana ships no connectors to your payment, CRM or other systems. You connect your own, and the connector carries out the approved action.",
  },
  {
    tag: "Not claimed",
    title: "What Parmana does not do",
    text: "It does not read or judge what a model says. It only checks actions that go through it, so an agent that reaches a system directly is outside it. It does not certify compliance with any regulation.",
  },
];

export default function BusinessPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="For business leaders" title="Keep institutional authority in human hands, even when execution becomes autonomous.">
        <p>
          Parmana is the Institutional Authority Layer for Autonomous Systems. Make sure every action stays within what
          your institution allows, and keep signed proof that it did.
        </p>
      </PageIntro>

      <section className="block" aria-labelledby="control-heading">
        <div className="wrap">
          <p className="eyebrow">What you control</p>
          <h2 id="control-heading">Where the agent may act, and who must say yes.</h2>
          <div className="grid-2">
            {controls.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block soft" aria-labelledby="evidence-heading">
        <div className="wrap">
          <p className="eyebrow">What evidence you receive</p>
          <h2 id="evidence-heading">A record you can hand to an auditor.</h2>
          <div className="grid-3">
            {evidence.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="examples-heading">
        <div className="wrap">
          <p className="eyebrow">Examples</p>
          <h2 id="examples-heading">Three decisions an institution makes every week.</h2>
          <div className="grid-3">
            {examples.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block soft" aria-labelledby="status-heading">
        <div className="wrap">
          <p className="eyebrow">What is built today</p>
          <h2 id="status-heading">What works now, what is opt-in, and what is not claimed.</h2>
          <div className="grid-2">
            {status.map((item) => (
              <article className="card" key={item.title}>
                <span className="tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="body">
            Every claim is written down with its evidence and its limits in the public repository.
          </p>
        </div>
      </section>

      <CallToAction
        heading="Tell us which decisions your agents need to make."
        text="Bring one action you want an agent to take. We will show you the rule, the approval boundary and the record it would leave."
      />
      <SiteFooter />
    </main>
  );
}
