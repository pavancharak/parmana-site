import type { Metadata } from "next";
import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

const title = "For engineering managers";
const description =
  "How Parmana makes authorization deterministic in front of your connectors: the enforcement boundary, policy evaluation, signed approvals, signed records, failure behaviour and known limits.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/engineering" },
  openGraph: { title, description, url: "/engineering", siteName: "Parmana Systems", type: "website" },
  twitter: { card: "summary", title, description },
};

const boundary = [
  {
    title: "Where it sits",
    text: "Parmana is an execution control layer in front of your connectors. Callers reach the connectors through the gateway. In the default server, the gateway is the only release path.",
  },
  {
    title: "Connectors run outside core",
    text: "Connector code and vendor credentials live in their own service. Core decides whether an action may run and records that decision. It does not hold a system's credential.",
  },
  {
    title: "The release is re-verified",
    text: "The gateway checks the signed authorization itself before it releases anything, and it re-derives the content hash rather than trusting what it was handed.",
  },
];

const decisions = [
  {
    title: "Ordered rules, first match wins",
    text: "Rules are evaluated top to bottom. If no rule matches, the action is refused: default deny, not default allow.",
  },
  {
    title: "Deterministic",
    text: "The same policy version and the same inputs give the same decision. There is no model call in the decision path, and the clock and identifiers are injected.",
  },
  {
    title: "Policy changes are checked",
    text: "A policy that approves without a required signed approval is refused at load. Each change to a policy goes through maker and checker, with a step-up signature from the approver's own key.",
  },
  {
    title: "Declared facts do not authorize",
    text: "A fact the agent declares cannot create an approval. Undeclared or unverified facts can cause a refusal, never an approval.",
  },
];

const signing = [
  {
    title: "Approvals",
    text: "Ed25519-signed by a trusted approver. Each approval is bound to the action, the resource, the amount, an expiry, and single use. The approval is checked at decision time and again at release.",
  },
  {
    title: "Records",
    text: "Each decision and release produces a signed record. Serialization is canonical before hashing and signing. A verifier needs only the public key you trust.",
  },
  {
    title: "Keys and algorithms",
    text: "Signing keys load from a secret manager at startup, or from AWS KMS. ML-DSA-65 can be selected as the primary signature provider. Key custody beyond these options is not built.",
  },
];

const failure = [
  {
    title: "Fails closed",
    text: "A missing rule refuses. Authority state that cannot be read refuses with AUTHORITY_UNCLEAR. A stored kill-switch state that cannot be read counts as tripped.",
  },
  {
    title: "Intent before release",
    text: "An execution intent is signed before the connector runs. If the outcome is unknown, the intent has a repair path, so a record exists either way.",
  },
  {
    title: "Operator stop",
    text: "An operator can trip a stop that refuses new execution, and it survives restarts. It does not recall an action already released, and it stops every caller at once, not one agent.",
  },
];

const limits = [
  "It checks only actions that go through the gateway. An agent that calls a system directly is outside it.",
  "It does not read or judge model output, so it is not a prompt-injection or content filter.",
  "Approvers are not yet limited to particular actions or policies. An approval names the action and resource.",
  "Facts from your own systems reach a policy only through a registered business signal source. No shipped policy uses one yet.",
  "Parmana ships no connectors. You write or register the ones you need.",
  "No metrics, tracing or dashboards are built yet.",
];

export default function EngineeringPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="For engineering managers" title="Deterministic authorization in front of your connectors.">
        <p>
          Parmana decides whether an agent&rsquo;s action may run, requires a trusted signature where a rule needs one,
          releases the action once through a connector, and signs a record you can verify offline.
        </p>
      </PageIntro>

      <section className="block" aria-labelledby="boundary-heading">
        <div className="wrap">
          <p className="eyebrow">Enforcement boundary</p>
          <h2 id="boundary-heading">What sits between the caller and the system.</h2>
          <div className="grid-3">
            {boundary.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block soft" aria-labelledby="decision-heading">
        <div className="wrap">
          <p className="eyebrow">Policy evaluation</p>
          <h2 id="decision-heading">How a decision is made.</h2>
          <div className="grid-2">
            {decisions.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="signing-heading">
        <div className="wrap">
          <p className="eyebrow">Signatures and trust roots</p>
          <h2 id="signing-heading">What is signed, and what a verifier trusts.</h2>
          <div className="grid-3">
            {signing.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block soft" aria-labelledby="failure-heading">
        <div className="wrap">
          <p className="eyebrow">Failure semantics</p>
          <h2 id="failure-heading">What happens when something goes wrong.</h2>
          <div className="grid-3">
            {failure.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="integrate-heading">
        <div className="wrap">
          <p className="eyebrow">Integration</p>
          <h2 id="integrate-heading">How your services connect.</h2>
          <div className="grid-2">
            <article className="card">
              <h3>Call the HTTP API</h3>
              <p className="body">
                Every route except the health, readiness, OpenAPI and documentation endpoints requires a bearer key, and fails closed without one. There is
                a TypeScript SDK and a Python SDK, both published, and an OpenAPI specification.
              </p>
            </article>
            <article className="card">
              <h3>Register an external endpoint</h3>
              <p className="body">
                A system you run registers a capability and its HTTPS endpoint through maker and checker. Each release is
                signed, and the endpoint checks the signature, the audience and the expiry with Parmana&rsquo;s public key.
                No shared secret is stored.
              </p>
            </article>
          </div>
          <p className="body">
            Full reference: <a href="https://docs.parmanasystems.com" target="_blank" rel="noopener noreferrer">docs.parmanasystems.com</a>.
          </p>
        </div>
      </section>

      <section className="block soft" aria-labelledby="limits-heading">
        <div className="wrap">
          <p className="eyebrow">Known limits</p>
          <h2 id="limits-heading">Plan around these before you rely on it.</h2>
          <ul className="checklist">
            {limits.map((limit) => (
              <li key={limit}>{limit}</li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction
        heading="Want to walk through an integration?"
        text="Send us the connector and the action you want to gate. We will go through the release, the approval and the record it produces."
      />
      <SiteFooter />
    </main>
  );
}
