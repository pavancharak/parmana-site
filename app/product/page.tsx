import type { Metadata } from "next";
import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Product | Parmana Systems",
  description: "How Parmana checks an AI agent's action against a written policy and a human approval before it runs, and records the result.",
  alternates: { canonical: "/product" },
};

const steps = [
  {
    title: "Request",
    text: "An agent, app or person asks for an action through the HTTP API, an SDK or an MCP tool. The request says what it wants to do.",
  },
  {
    title: "Check against policy",
    text: "The request is checked against an explicit, versioned policy. The policy decides, in the same way every time, whether the action is allowed.",
  },
  {
    title: "Approve",
    text: "The action needs a signed approval from a person you trust. Without it, nothing runs, and reads are included in that rule.",
  },
  {
    title: "Release once",
    text: "An approved action is released through a connector, once. The caller never receives the credentials the connector uses.",
  },
  {
    title: "Record",
    text: "A signed record of what was authorized and what happened is kept. Anyone can check it offline, using only the public key they choose to trust.",
  },
];

const properties = [
  { title: "Fail-closed setup", text: "A misconfigured process refuses to start rather than run with weaker checks." },
  { title: "Single-use authority", text: "Each authorization is accepted once. A repeated release of the same transaction is refused." },
  { title: "Credential isolation", text: "Connectors use single-use sessions. Long-lived credentials are not passed to the agent." },
  { title: "Post-quantum ready", text: "Records can be signed with Ed25519 or, in the Node packages, with the post-quantum ML-DSA-65 scheme." },
];

export default function ProductPage() {
  return (
    <main>
      <SiteHeader />

      <PageIntro eyebrow="Product" title="Every action passes a check before it runs.">
        <p>
          Parmana sits between an AI agent and the systems it calls. It decides whether the agent was allowed to act,
          and it keeps a record that anyone can verify. It does not decide what the agent should do.
        </p>
      </PageIntro>

      <section className="block" aria-labelledby="flow-heading">
        <div className="wrap">
          <h2 id="flow-heading">How an action flows</h2>
          <ol className="steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block soft" aria-labelledby="properties-heading">
        <div className="wrap">
          <h2 id="properties-heading">Built to fail safely</h2>
          <ol className="principles">
            {properties.map((property) => (
              <li key={property.title}>
                <h3>{property.title}</h3>
                <p>{property.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block" aria-labelledby="connect-heading">
        <div className="wrap">
          <h2 id="connect-heading">Connect your own systems</h2>
          <p className="body">
            Built-in connectors cover HubSpot, GitHub, Slack and Paytm. For any other system, an operator registers an
            external connector. Each approved action is sent to that system as a signed release, and it is checked
            before anything runs.
          </p>
        </div>
      </section>

      <CallToAction heading="See it on your own workflow." text="We will walk through one action your team takes today, from request to signed record." />

      <SiteFooter />
    </main>
  );
}
