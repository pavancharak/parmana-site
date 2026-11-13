import type { Metadata } from "next";
import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Parmana platform architecture",
  description:
    "Explore how Parmana connects business authority, deterministic authorization, controlled execution and independently verifiable evidence.",
  alternates: { canonical: "/architecture" },
  openGraph: {
    title: "Parmana platform architecture",
    description:
      "Explore how Parmana connects business authority, deterministic authorization, controlled execution and independently verifiable evidence.",
    url: "/architecture",
    siteName: "Parmana Systems",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Parmana platform architecture",
    description:
      "Explore how Parmana connects business authority, deterministic authorization, controlled execution and independently verifiable evidence.",
  },
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
      <PageIntro
        eyebrow="Platform architecture"
        title="Business authority, carried through to execution."
      >
        <p>
          Parmana is an execution control layer for connected business workflows.
          It translates explicit business authority into deterministic checks on
          covered requests, then creates evidence that can be independently
          inspected.
        </p>
      </PageIntro>

      <section className="block soft" aria-labelledby="architecture-flow">
        <div className="wrap">
          <h2 id="architecture-flow">How the parts fit together</h2>
          <ol className="steps">
            {layers.map((layer) => (
              <li key={layer.number}>
                <p className="eyebrow">{layer.number}</p>
                <h3>{layer.title}</h3>
                <p className="body">{layer.text}</p>
                {"repo" in layer && layer.repo ? (
                  <p className="body">
                    <a href={layer.repo} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" focusable="false"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>View on GitHub</a>
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block" aria-labelledby="diagrams-heading">
        <div className="wrap">
          <h2 id="diagrams-heading">Diagrams</h2>
          <figure style={{ margin: "32px 0 0" }}>
            <img src="/diagrams/request-flow.svg" alt="A request from an AI agent passes a connector, then the Parmana control path. If authority matches, it reaches the business system; otherwise it is refused. Both outcomes create an evidence record." style={{ width: "auto", maxWidth: "100%", height: "auto" }} />
            <figcaption className="body" style={{ marginTop: 12 }}>How a request moves through the control path.</figcaption>
          </figure>
          <figure style={{ margin: "48px 0 0" }}>
            <img src="/diagrams/lifecycle.svg" alt="Four stages: Declared, Authorized, Executed and Proven." style={{ width: "auto", maxWidth: "100%", height: "auto" }} />
            <figcaption className="body" style={{ marginTop: 12 }}>The lifecycle: declare the rules, authorise each request, execute only what was approved, and prove it afterwards.</figcaption>
          </figure>
          <figure style={{ margin: "48px 0 0" }}>
            <img src="/diagrams/trust-chain.svg" alt="Authority leads to authorization, then intent, then the business transaction, then the policy reference." style={{ width: "auto", maxWidth: "100%", height: "auto" }} />
            <figcaption className="body" style={{ marginTop: 12 }}>The trust chain: each record links back to the authority that allowed it.</figcaption>
          </figure>
        </div>
      </section>

      <section className="block" aria-labelledby="protocol-heading">
        <div className="wrap split-text">
          <h2 id="protocol-heading">The protocol underneath</h2>
          <div>
          <p className="body">
            The Decision Integrity Protocol (DIP) defines the integrity and
            verification model for recording decisions and checking evidence.
            It is the protocol foundation, not a substitute for the business
            rules or the integration boundary that enforces them.
          </p>
          <p className="body">
            Explore the implementation in the{" "}
            <a href="https://github.com/pavancharak/parmana-core" target="_blank" rel="noopener noreferrer">
              Parmana Core
            </a>{" "}
            and{" "}
            <a href="https://github.com/pavancharak/parmana-verifier" target="_blank" rel="noopener noreferrer">
              Parmana Verifier
            </a>{" "}
            repositories. See the wider{" "}
            <a href="https://github.com/pavancharak" target="_blank" rel="noopener noreferrer">
              open-source work
            </a>.
          </p>
          </div>
        </div>
      </section>

      <section className="block soft" aria-labelledby="principles-heading">
        <div className="wrap">
          <h2 id="principles-heading">Three architectural principles</h2>
          <ul className="principles">
            {principles.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block" aria-labelledby="boundaries-heading">
        <div className="wrap split-text">
          <h2 id="boundaries-heading">What the evidence does and does not prove</h2>
          <div>
          <p className="body">
            A successful offline verification establishes that the checked
            record content matches its hash and that supported signatures
            validate against the trusted public keys supplied. It does not, by
            itself, prove that an external payment, account update or other
            real-world action occurred, nor does it establish that the original
            business policy was appropriate.
          </p>
          <p className="body">
            Enforcement applies to requests routed through configured Parmana
            controls. Activity outside those integration paths is not covered.
          </p>
          <p className="body">
            <a href="/#how-it-works">How Parmana works</a>
            {" · "}
            <a href="/research">Read the research</a>
          </p>
          </div>
        </div>
      </section>

      <CallToAction
        heading="Contact us to discuss further"
        text="Tell us about a workflow you want to control. We can talk through its authority, integration boundary and evidence requirements."
      />

      <SiteFooter />
    </main>
  );
}
