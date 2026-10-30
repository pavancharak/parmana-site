import type { Metadata } from "next";
import { Footer, Header, bookingUrl } from "../../components/Site";

export const metadata: Metadata = {
  title: "Vision | Parmana Systems",
  description: "A world where actions taken on people's behalf can be trusted, because they can always be checked.",
  alternates: { canonical: "/vision" },
};

const principles = [
  { title: "Actions, not actors or technologies", text: "The same limits and records apply whether a person, a script or an AI agent acts, and whatever system carries the action out." },
  { title: "Limits are written down", text: "Rules are explicit, versioned and open to dispute. They do not live in hidden prompts or habits." },
  { title: "Trust does not rest on us", text: "Anyone can check a record without an account, using only the key they choose to trust. The checker says what it cannot prove." },
  { title: "Stop when unsure", text: "If a system is misconfigured or approval is missing, the action stops. It does not guess." },
];

const outcomes = [
  "Payments, refunds and record changes happen only inside the limits you approved.",
  "Anything outside those limits waits for a person to decide.",
  "Every action leaves a record that your team, your auditors and your partners can check.",
];

export default function Vision() {
  return (
    <main>
      <Header />
      <div className="wrap hero">
        <p className="label">Our vision</p>
        <h1>Trust should come from checking, not from taking someone&rsquo;s word.</h1>
        <p className="lead">We want every action taken on a business&rsquo;s behalf, by a person, a system or an AI agent, to stay within limits set in advance and to leave a record anyone can check.</p>
        <div className="actions">
          <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Book a meeting</a>
          <a className="text-link" href="/#how-it-works">See how it works</a>
        </div>
      </div>
      <section className="block soft">
        <div className="wrap">
          <p className="label">Principles</p>
          <h2>Four principles. We build to them.</h2>
          <ol className="items">
            {principles.map((principle) => (
              <li key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <p className="label">In practice</p>
          <h2>Less guesswork. Clear lines.</h2>
          <ul className="outcomes">
            {outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
          <p className="note">This is where we are heading, not a promise of results. Parmana shows what was approved and what ran. It does not decide whether your rules are the right ones. That stays with your business.</p>
        </div>
      </section>
      <section className="closing">
        <div className="wrap">
          <h2>Help shape what comes next.</h2>
          <p>Tell us where your business needs a clear line between what AI can suggest and what it is allowed to do.</p>
          <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Book a meeting</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
