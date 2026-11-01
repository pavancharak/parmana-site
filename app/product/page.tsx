import type { Metadata } from "next";
import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Product | Parmana Systems",
  description: "How Parmana checks an AI agent's action against your rules and a person's approval before it runs, and keeps a record anyone can check.",
  alternates: { canonical: "/product" },
};

const steps = [
  {
    title: "Ask",
    text: "An agent or a person asks to do something, such as issue a refund.",
  },
  {
    title: "Check",
    text: "Parmana compares the request with the rules your business has written down.",
  },
  {
    title: "Approve",
    text: "If the action needs sign-off, a trusted person approves it first. Nothing runs without that.",
  },
  {
    title: "Act once",
    text: "The approved action runs one time. The agent never receives the passwords the connection uses.",
  },
  {
    title: "Record",
    text: "A sealed record of what was allowed and what happened is kept. Anyone can check it, with no account needed.",
  },
];

const properties = [
  { title: "Stops when unsure", text: "If something is set up wrong, Parmana refuses to start rather than guess." },
  { title: "Each approval is used once", text: "A repeated request is refused, so one approval cannot be spent twice." },
  { title: "Keys stay private", text: "The agent never holds the long-term keys to your systems." },
  { title: "Built for the long term", text: "Records can use signatures designed to hold up against future quantum computers." },
];

export default function ProductPage() {
  return (
    <main>
      <SiteHeader />

      <PageIntro eyebrow="Product" title="Nothing runs until it is approved.">
        <p>
          Parmana stands between an AI agent and the systems it touches. It decides whether the agent is allowed to act,
          and it keeps a record that anyone can check. It does not decide what the agent should do.
        </p>
      </PageIntro>

      <section className="block" aria-labelledby="flow-heading">
        <div className="wrap">
          <h2 id="flow-heading">How an action moves through Parmana</h2>
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
          <h2 id="properties-heading">Built to stop when unsure</h2>
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
          <h2 id="connect-heading">Works with the tools you already use</h2>
          <p className="body">
            HubSpot, GitHub, Slack and Paytm are supported today. For any other system, your team can add a connection
            that runs only the actions you have approved.
          </p>
        </div>
      </section>

      <CallToAction heading="See it working on your own workflow." text="We will walk through one everyday action your team takes, from request to record." />

      <SiteFooter />
    </main>
  );
}
