import type { Metadata } from "next";
import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Trust | Parmana Systems",
  description: "Why you can check a Parmana record yourself, without trusting us, and what that check does not prove.",
  alternates: { canonical: "/trust" },
};

const questions = [
  {
    title: "What may this agent do?",
    text: "A line in a prompt is not a rule. Parmana keeps the limits written down, and a person signs off on each action that needs it.",
  },
  {
    title: "Can we prove what happened?",
    text: "Logs from the system that did the work prove little. Parmana seals a record of each decision and result, so it can be checked later.",
  },
];

const checks = [
  "The record has not been changed since it was sealed.",
  "It was sealed by a key you chose to trust.",
  "That key was valid at the time, and has not been revoked.",
];

const limits = [
  "That a key really belongs to Parmana. You confirm that yourself, through a source you trust.",
  "That the rules in the record were the right rules.",
  "That the action was actually carried out in the outside system.",
];

export default function TrustPage() {
  return (
    <main>
      <SiteHeader />

      <PageIntro eyebrow="Trust" title="Don't trust us. Check the record.">
        <p>
          Each record can be checked with just the file and the keys you choose to trust. No account and no internet
          connection are needed.
        </p>
      </PageIntro>

      <section className="block" aria-labelledby="questions-heading">
        <div className="wrap">
          <h2 id="questions-heading">Two simple questions</h2>
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

      <CallToAction heading="Look at the evidence yourself." text="The checking tool is open source, and its tests and security review are published with it." />

      <SiteFooter />
    </main>
  );
}
