import type { Metadata } from "next";
import { CallToAction, GitHubIcon, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

const title = "Parmana platform architecture";
const description =
  "Explore how Parmana connects business authority, deterministic authorization, controlled execution and independently verifiable evidence.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/architecture" },
  openGraph: { title, description, url: "/architecture", siteName: "Parmana Systems", type: "website" },
  twitter: { card: "summary", title, description },
};

const layers = [
  {
    number: "01",
    title: "Business authority",
    text: "The business defines the actions, resources, limits and conditions an agent or connected workflow is permitted to use. Authority is expressed as explicit rules rather than left for an AI model to interpret.",
  },
  {
    number: "02",
    title: "Parmana Connect",
    repo: "https://github.com/pavancharak/parmana-connectors",
    text: "Connectors and integration paths bring covered requests from business applications and agent workflows into the Parmana control path. The boundary matters: requests that bypass the configured path are outside its enforcement.",
  },
  {
    number: "03",
    title: "Parmana Core",
    repo: "https://github.com/pavancharak/parmana-core",
    text: "The core evaluates a covered request against the configured authority and returns a deterministic authorization outcome. The connected execution path uses that outcome to allow or block the requested operation.",
  },
  {
    number: "04",
    title: "Execution evidence",
    text: "The system records the decision and relevant execution events in a structured evidence record. Cryptographic integrity mechanisms make later alteration detectable.",
  },
  {
    number: "05",
    title: "Parmana Verifier",
    repo: "https://github.com/pavancharak/parmana-verifier",
    text: "The verifier checks record integrity and supported signatures against trusted public keys supplied by the verifier operator. This establishes what was cryptographically checked, not whether an external action actually occurred.",
  },
];

const principles = [
  {
    title: "Explicit authority",
    text: "Business rules define what is permitted. The AI agent does not decide whether it has authority.",
  },
  {
    title: "Deterministic checks",
    text: "Covered requests are evaluated against configured rules before they reach the connected system.",
  },
  {
    title: "Verifiable records",
    text: "Cryptographic checks can establish whether recorded evidence matches its hash and whether supported signatures validate against supplied trust material.",
  },
];

export default function ArchitecturePage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Platform architecture" title="Business authority, carried through to execution.">
        <p>
          Parmana is an execution control layer for connected business workflows. It translates
          explicit business authority into deterministic checks on covered requests, then creates
          evidence that can be independently inspected.
        </p>
      </PageIntro>

      <section className="block soft" aria-labelledby="architecture-flow">
        <div className="wrap">
          <p className="eyebrow">Structure</p>
          <h2 id="architecture-flow">How the parts fit together</h2>
          <div className="grid-3">
            {layers.map((layer) => (
              <div className="card" key={layer.number}>
                <span className="tag">{layer.number}</span>
                <h3>{layer.title}</h3>
                <p className="body">{layer.text}</p>
                {"repo" in layer && layer.repo ? (
                  <a className="repo-link" href={layer.repo} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                    View on GitHub
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="diagrams-heading">
        <div className="wrap">
          <p className="eyebrow">Diagrams</p>
          <h2 id="diagrams-heading">How a request moves through the system</h2>
          <div className="diagram-stack">
            <figure className="diagram">
              <img
                src="/diagrams/request-flow.svg"
                alt="A request from an AI agent passes a connector, then the Parmana control path. If authority matches, it reaches the business system; otherwise it is refused. Both outcomes create an evidence record."
              />
              <figcaption>How a request moves through the control path.</figcaption>
            </figure>
            <figure className="diagram">
              <img src="/diagrams/lifecycle.svg" alt="Four stages: Declared, Authorized, Executed and Proven." />
              <figcaption>The lifecycle: declare the rules, authorise each request, execute only what was approved, and prove it afterwards.</figcaption>
            </figure>
            <figure className="diagram">
              <img
                src="/diagrams/trust-chain.svg"
                alt="Authority leads to authorization, then intent, then the business transaction, then the policy reference."
              />
              <figcaption>The trust chain: each record links back to the authority that allowed it.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="block band" aria-labelledby="principles-heading">
        <div className="wrap">
          <p className="eyebrow">Principles</p>
          <h2 id="principles-heading">Three architectural principles</h2>
          <div className="grid-3">
            {principles.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="protocol-heading">
        <div className="wrap split-text">
          <div>
            <p className="eyebrow">Protocol</p>
            <h2 id="protocol-heading">The protocol underneath</h2>
          </div>
          <div>
            <p className="body">
              The Decision Integrity Protocol (DIP) defines the integrity and verification model for
              recording decisions and checking evidence. It is the protocol foundation, not a substitute
              for the business rules or the integration boundary that enforces them.
            </p>
            <p className="body" style={{ marginTop: 18 }}>
              Explore the implementation in the{" "}
              <a href="https://github.com/pavancharak/parmana-core" target="_blank" rel="noopener noreferrer">Parmana Core</a>{" "}
              and{" "}
              <a href="https://github.com/pavancharak/parmana-verifier" target="_blank" rel="noopener noreferrer">Parmana Verifier</a>{" "}
              repositories.
            </p>
          </div>
        </div>
      </section>

      <section className="block soft" aria-labelledby="boundaries-heading">
        <div className="wrap split-text">
          <div>
            <p className="eyebrow">Boundaries</p>
            <h2 id="boundaries-heading">What the evidence does and does not prove</h2>
          </div>
          <div>
            <p className="body">
              A successful offline verification establishes that the checked record content matches its
              hash and that supported signatures validate against the trusted public keys supplied. It
              does not, by itself, prove that an external payment, account update or other real-world
              action occurred, nor does it establish that the original business policy was appropriate.
            </p>
            <p className="body" style={{ marginTop: 18 }}>
              Enforcement applies to requests routed through configured Parmana controls. Activity outside
              those integration paths is not covered.
            </p>
            <p className="body" style={{ marginTop: 18 }}>
              <a href="/#how-it-works">How Parmana works</a>
              {" · "}
              <a href="/research">Read the research</a>
            </p>
          </div>
        </div>
      </section>

      <CallToAction
        heading="Talk to us about your workflows."
        text="Tell us about a workflow you want to control. We can talk through its authority, integration boundary and evidence requirements."
      />

      <SiteFooter />
    </main>
  );
}
