import type { Metadata } from "next";
import { CallToAction, PageIntro, SectionHeading, SiteFooter, SiteHeader } from "../components/SiteChrome";

const title = "Vision";
const description = "Trust AI on evidence, not on its word. Our vision is a world where authority is written down before AI acts, and anyone can check afterwards that it was followed.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/vision" },
  openGraph: { title, description, url: "/vision", siteName: "Parmana Systems", type: "website" },
  twitter: { card: "summary", title, description },
};

const beliefs = [
  {
    title: "Authority is written down before action",
    text: "Limits, conditions and approvals are declared in advance, so what an AI agent may do never depends on its own interpretation.",
  },
  {
    title: "Every action is checked against it",
    text: "Each consequential action is evaluated against those declared rules before it runs, and refused when no rule allows it.",
  },
  {
    title: "Anyone can verify the result",
    text: "The record of each decision can be checked by someone outside the system that made it, without trusting that system or its operator.",
  },
];

const refusals = [
  "Trusting a model's intentions. Safe behaviour should not depend on the model choosing to behave.",
  "Trusting a log the system wrote about itself. A record the agent could alter is its own account.",
  "Treating valid access as authority. Being able to call an API does not mean an action was delegated.",
];

export default function VisionPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Vision" title="Trust AI on evidence, not on its word.">
        <p>
          As AI agents take actions that change institutional records, money and systems, the question is not only whether they can act. It is whether every action stayed within the authority an institution gave it, and whether anyone can check that afterwards.
        </p>
      </PageIntro>

      <section className="block">
        <div className="wrap">
          <SectionHeading
            eyebrow="What we believe"
            title="Three principles for trustworthy delegation to AI."
            text="These are the principles behind Parmana. The product implements them today in the scope described on our status documentation."
          />
          <div className="grid-3" style={{ marginTop: 0 }}>
            {beliefs.map((item, i) => (
              <div className="card" key={item.title}>
                <span className="eyebrow" style={{ marginBottom: 8 }}>0{i + 1}</span>
                <h2 style={{ fontSize: "1.25rem" }}>{item.title}</h2>
                <p className="body" style={{ marginTop: 14 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block block-soft">
        <div className="wrap">
          <SectionHeading
            eyebrow="What we do not rely on"
            title="Trust should not depend on the AI's word."
            text="Each of these fails when the agent is wrong, fooled or compromised. Our approach does not depend on any of them."
          />
          <ul className="checklist">
            {refusals.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <SectionHeading
            eyebrow="The horizon"
            title="Where we are heading."
            text="This is the direction we are working toward. It is not a description of Parmana today, and it does not assume that any institution will adopt it."
          />
          <p className="body">
            We would like consequential AI actions in regulated institutions to carry evidence that they were authorized, and to be checkable by an auditor, regulator or customer who never had access to the system that acted.
          </p>
          <p className="body">
            We hope the rules for delegating authority to AI will be written by many institutions, regulators and auditors, not by a single vendor. Parmana is open source under the Apache License 2.0 so that the foundation can be shared, examined and improved in the open.
          </p>
        </div>
      </section>

      <CallToAction
        heading="Help build this."
        text="If you work on authority, audit or AI governance, we would like to hear from you."
      />
      <SiteFooter />
    </main>
  );
}
