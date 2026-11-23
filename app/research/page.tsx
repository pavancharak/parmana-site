import type { Metadata } from "next";
import {
  CallToAction,
  PageIntro,
  SiteFooter,
  SiteHeader,
} from "../components/SiteChrome";

const title = "Research";
const description =
  "Parmana's research on how to prove that an AI agent acted within its authority.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/research" },
  openGraph: {
    title,
    description,
    url: "/research",
    siteName: "Parmana Systems",
    type: "website",
  },
  twitter: { card: "summary", title, description },
};

const papers = [
  {
    title:
      "The Authority Gap: Why Autonomous AI Needs Deterministic Execution Boundaries",
    status: "Discussion draft, November 2026",
    thumb: "/research/authority-gap-thumb.png",
    summary:
      "An AI agent can be capable of an action without being authorised to take it. The paper argues that authority should be declared in advance, decided separately from the agent, enforced before the action runs, and recorded so it can be checked later.",
  },
  {
    title:
      "Beyond Trust But Verify: Why Autonomous AI Needs Verifiable Execution",
    status: "Research paper, November 2026",
    thumb: "/research/beyond-trust-thumb.png",
    summary:
      "Checking how an AI model behaves is not the same as controlling what it is allowed to do in an institutional system. The paper proposes separating these two questions and keeping evidence that others can verify.",
  },
  {
    title:
      "From Delegated Authority to Verifiable Execution: A Deterministic Authorization Model for AI Agents",
    status: "Research draft v0.1, not peer-reviewed",
    thumb: undefined,
    summary:
      "A model that represents delegated authority as an explicit, bounded and revocable grant, evaluates each consequential action deterministically before it runs, and binds the authorisation to the exact action so the outcome can be verified. The evaluation is proposed, not yet run.",
  },
  {
    title:
      "Beyond Valid Credentials: Deterministic Authorization and Verifiable Execution for Agentic Commerce",
    status: "Research draft v0.1, not peer-reviewed",
    thumb: undefined,
    summary:
      "A valid credential shows that an agent may call a service. It does not show that a particular purchase, supplier payment or refund was delegated to it. This draft applies the same authorisation model to agentic commerce, with a proposed evaluation that has not been run.",
  },
];

export default function ResearchPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        eyebrow="Research"
        title="One question: how do you prove an AI agent stayed within its authority?"
      >
        <p>
          Our research looks at the gap between what an AI agent can do and what
          it is allowed to do, and how to check that difference after the fact.
        </p>
      </PageIntro>

      <section className="block">
        <div className="wrap">
          <div className="grid-2" style={{ marginTop: 0 }}>
            {papers.map((paper) => (
              <article className="card" key={paper.title}>
                {paper.thumb && (
                  <img
                    className="paper-thumb"
                    src={paper.thumb}
                    alt={`First page of ${paper.title}`}
                    width={640}
                  />
                )}
                <p className="eyebrow">{paper.status}</p>
                <h2 style={{ fontSize: "1.4rem" }}>{paper.title}</h2>
                <p className="body" style={{ marginTop: 14 }}>
                  {paper.summary}
                </p>
                <p className="body" style={{ marginTop: 14 }}>
                  Full text on request:{" "}
                  <a
                    href="https://cal.com/pavan-charak/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    book a call
                  </a>
                  .
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block soft">
        <div className="wrap split-text">
          <div>
            <p className="eyebrow">Limits</p>
            <h2>What the research does not claim</h2>
          </div>
          <ul className="checklist">
            <li>
              Recorded evidence shows what was checked. It does not prove that
              the underlying policy was correct.
            </li>
            <li>
              The papers are drafts for discussion and have not been endorsed by
              any outside body.
            </li>
            <li>
              The approach is a design model, not a guarantee against every AI
              risk.
            </li>
            <li>
              The drafts propose evaluations that have not been run. They report
              no experimental results.
            </li>
          </ul>
        </div>
      </section>

      <CallToAction
        heading="Talk about the research."
        text="If you work on authorisation, audit or AI governance, we are glad to discuss the papers and the open questions."
      />
      <SiteFooter />
    </main>
  );
}
