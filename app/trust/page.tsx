import type { Metadata } from "next";
import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Trust | Parmana Systems",
  description: "Why Parmana's records can be checked without trusting Parmana, and what that check does not prove.",
  alternates: { canonical: "/trust" },
};

const questions = [
  {
    title: "What may this agent do?",
    text: "An instruction in a prompt is not a control. Parmana keeps the limits in a written, versioned policy, and a person approves each covered action.",
  },
  {
    title: "Can we prove what it did?",
    text: "Logs written by the same system that acted are a claim. Parmana signs a record of the decision and the result, which can be checked later.",
  },
];

const checks = [
  "The record has not been changed since it was signed.",
  "It was signed by a key you chose to trust.",
  "The key's validity window and compromise status were respected.",
];

const limits = [
  "It cannot prove that a signing key belongs to Parmana. That depends on how you obtained and compared the fingerprint.",
  "It does not verify the policy a record cites, or the state of an external system.",
  "It does not confirm that the action described in the record was carried out.",
];

export default function TrustPage() {
  return (
    <main>
      <SiteHeader />

      <PageIntro eyebrow="Trust" title="Check the record yourself. Do not rely on our word.">
        <p>
          Parmana&rsquo;s signed records are built so that you can check them with a file and the keys you choose to trust.
          The checker needs no network access and no account.
        </p>
      </PageIntro>

      <section className="block" aria-labelledby="questions-heading">
        <div className="wrap">
          <h2 id="questions-heading">The two questions</h2>
          <ol className="principles">
            {questions.map((question) => (
              <li key={question.title}>
                <h3>{question.title}</h3>
                <p>{question.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block soft" aria-labelledby="checks-heading">
        <div className="wrap split-text">
          <div>
            <h2 id="checks-heading">What a check confirms</h2>
            <ul className="checklist">
              {checks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 id="limits-heading">What a check does not confirm</h2>
            <ul className="checklist muted">
              {limits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CallToAction heading="Review the evidence yourself." text="The verifier is open source. The test vectors, the threat model and the security review scope are published with it." />

      <SiteFooter />
    </main>
  );
}
