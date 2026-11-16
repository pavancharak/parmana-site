import type { Metadata } from "next";
import { SiteFooter, SiteHeader, booking } from "./components/SiteChrome";

const pageTitle = "You set the rules. Parmana makes sure they're followed.";
const pageDescription =
  "An ordinary afternoon with an AI agent doing the work. Every action is checked against your policies, approvals wait for a person, and the record is there afterwards.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/" },
  openGraph: { title: pageTitle, description: pageDescription, url: "/", siteName: "Parmana Systems", type: "website" },
  twitter: { card: "summary", title: pageTitle, description: pageDescription },
};

const storyParagraphs = [
  "It's Tuesday afternoon at a growing online store. A support agent, an AI assistant, is handling a queue of customer messages.",
  "One customer writes that a delivery arrived damaged and asks for their money back. The agent looks at the order and sees a refund of 1,200 rupees. That's within the store's policies, so the refund goes through.",
  "A little later, another customer asks for 48,000 rupees back on a bulk order. The store's policies say any refund above 10,000 needs a manager's approval. The agent doesn't get to decide this one. The request goes to the manager's queue, and the customer is told the decision is on its way.",
  "The manager reviews it, checks the order, and approves it. The refund goes ahead once, and only once.",
  "That evening, the store owner opens the day's record. Every action is there: what the agent asked for, which policy applied, who approved the large refund, and what was paid. Nothing was done that wasn't on the list, and nothing was done without a record.",
  "The owner didn't have to trust the agent, and didn't have to trust a sentence in its instructions. The policies applied, and the proof was already there.",
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="story-section" aria-labelledby="story-heading">
        <div className="wrap">
          <p className="eyebrow">An ordinary afternoon</p>
          <h1 id="story-heading">An AI agent did the work. The rules still applied.</h1>
          <div className="story">
            {storyParagraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="closing story-closing" aria-labelledby="cta-heading">
        <div className="wrap">
          <h2 id="cta-heading">You set the rules. Parmana makes sure they're followed, and keeps the proof.</h2>
          <div className="cta-row">
            <a className="button" href={booking} target="_blank" rel="noopener noreferrer">Talk to us</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
