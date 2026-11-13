import type { Metadata } from "next";
import { CallToAction, PageIntro, SiteFooter, SiteHeader, contactEmail } from "../components/SiteChrome";

const title = "Research";
const description = "Parmana's research on how to prove that an AI agent acted within its authority.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/research" },
  openGraph: { title, description, url: "/research", siteName: "Parmana Systems", type: "website" },
  twitter: { card: "summary", title, description },
};

const papers = [
  {
    title: "The Authority Gap: Why Autonomous AI Needs Deterministic Execution Boundaries",
    status: "Discussion draft, November 2026",
    thumb: "/research/authority-gap-thumb.png",
    summary:
      "An AI agent can be capable of an action without being authorised to take it. The paper argues that authority should be declared in advance, decided separately from the agent, enforced before the action runs, and recorded so it can be checked later.",
  },
  {
    title: "Beyond Trust But Verify: Why Autonomous AI Needs Verifiable Execution",
    status: "Research paper, November 2026",
    thumb: "/research/beyond-trust-thumb.png",
    summary:
      "Checking how an AI model behaves is not the same as controlling what it is allowed to do in a business system. The paper proposes separating these two questions and keeping evidence that others can verify.",
  },
];

export default function ResearchPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Research" title="One question: how do you prove an AI agent stayed within its authority?">
        <p>Our research looks at the gap between what an AI agent can do and what it is allowed to do, and how to check that difference after the fact.</p>
      </PageIntro>

      <section className="block">
        <div className="wrap">
          <ul className="principles">
            {papers.map((paper) => (
              <li key={paper.title}>
                <img
                  src={paper.thumb}
                  alt={`First page of ${paper.title}`}
                  width={640}
                  style={{ width: "100%", height: "auto", border: "1px solid var(--line)", borderRadius: 8, marginBottom: 20 }}
                />
                <p className="eyebrow">{paper.status}</p>
                <h2>{paper.title}</h2>
                <p className="body">{paper.summary}</p>
                <p className="body">
                  Full text on request: <a href={`mailto:${contactEmail}?subject=${encodeURIComponent(paper.title)}`}>email us</a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block soft">
        <div className="wrap">
          <h2>What the research does not claim</h2>
          <ul className="checklist muted">
            <li>Recorded evidence shows what was checked. It does not prove that the underlying policy was correct.</li>
            <li>The papers are drafts for discussion and have not been endorsed by any outside body.</li>
            <li>The approach is a design model, not a guarantee against every AI risk.</li>
          </ul>
        </div>
      </section>

      <CallToAction
        heading="Talk about the research"
        text="If you work on authorisation, audit or AI governance, we are glad to discuss the papers and the open questions."
      />
      <SiteFooter />
    </main>
  );
}
