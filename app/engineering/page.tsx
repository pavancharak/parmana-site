import type { Metadata } from "next";
import { CallToAction, PageIntro, SectionHeading, SiteFooter, SiteHeader, docs } from "../components/SiteChrome";

const title = "For Engineering Leaders";
const description = "Technical architecture and implementation model for enforcing delegated institutional authority outside the agent execution loop.";

export const metadata: Metadata = {
  title, description, alternates: { canonical: "/engineering" },
  openGraph: { title, description, url: "/engineering", siteName: "Parmana Systems", type: "website" },
};

const pipeline = [
  ["01", "Capture", "Receive the proposed action at a controlled integration boundary. Bind the request to an authenticated principal, agent identity, target resource and operation."],
  ["02", "Normalize", "Convert the request into a deterministic authorization input. Canonicalize the structured fields used for policy evaluation and evidence generation."],
  ["03", "Evaluate", "Evaluate explicit policy predicates: subject, action, resource, amount or other typed attributes, contextual constraints, limits and approval requirements."],
  ["04", "Decide", "Return a deterministic allow, deny or approval-required outcome. Do not ask the model to infer whether it has authority."],
  ["05", "Enforce", "Only the authorized path may invoke the protected operation. A denied or unresolved request must not fall through to execution."],
  ["06", "Attest", "Persist the decision and execution references in a verifiable evidence record, suitable for later integrity checks and audit."],
];

const properties = [
  { title: "Deterministic authorization", text: "Policy evaluation is an explicit computation over structured inputs. The authorization decision is not delegated to an LLM response or prompt convention." },
  { title: "Canonical inputs", text: "Use a stable canonical representation for signed or hashed structured data. Parmana's integrity design uses RFC 8785 canonical JSON before cryptographic operations." },
  { title: "Cryptographic integrity", text: "Evidence integrity is based on SHA-256 hashing and cryptographic signing. Chained records make unauthorized modification detectable during verification." },
  { title: "Fail-closed enforcement", text: "A missing policy, invalid signature, unverifiable authority or unresolved approval must not be interpreted as permission to execute." },
  { title: "Independent verification", text: "Verification should be separable from the process that created the evidence. A verifier can recompute integrity and validate the recorded chain against configured trust roots." },
  { title: "Explicit trust boundaries", text: "The agent proposes. The policy authority decides. The enforcement point controls the protected action. The evidence verifier checks the record. Keep these responsibilities distinct." },
];

export default function EngineeringPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="For CTOs, architects and platform engineers" title="A deterministic authorization boundary between agent intent and institutional execution.">
        <p>Parmana is designed to externalize institutional authority from the agent. It evaluates structured action requests against declared policy, enforces the decision at the execution boundary and records cryptographically verifiable evidence.</p>
      </PageIntro>

      <section className="block">
        <div className="wrap">
          <SectionHeading eyebrow="Execution path" title="From proposed action to controlled execution." text="The authorization boundary must sit on the path to the protected side effect. An advisory check that the agent can ignore is not enforcement." />
          <div className="pipeline">
            {pipeline.map(([n, name, text]) => <article className="pipeline-step" key={n}><span className="pipeline-number">{n}</span><div><h3>{name}</h3><p>{text}</p></div><span className="pipeline-connector" aria-hidden="true">↓</span></article>)}
          </div>
        </div>
      </section>

      <section className="block block-soft">
        <div className="wrap">
          <SectionHeading eyebrow="System properties" title="The properties that matter at the control boundary." text="These are engineering requirements, not model-behavior aspirations." />
          <div className="engineering-property-grid">
            {properties.map((p, i) => <article key={p.title}><span>CONTROL PROPERTY / 0{i + 1}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <SectionHeading eyebrow="Reference architecture" title="Separate policy, enforcement, execution and evidence." text="A control design should keep authorization decisions outside the probabilistic agent loop and preserve a verifiable connection between the request, decision and protected operation." />
          <div className="architecture-diagram">
            <div className="arch-row"><div className="arch-node arch-agent"><span>UNTRUSTED PROPOSAL</span><strong>AI agent / orchestrator</strong><small>Intent, tool call, action request</small></div></div>
            <div className="arch-arrow">↓</div>
            <div className="arch-row">
              <div className="arch-node arch-boundary"><span>CONTROLLED BOUNDARY</span><strong>Parmana authorization service</strong><small>Identity binding · schema validation · canonical request</small><small>Policy evaluation · approval gate · decision</small></div>
            </div>
            <div className="arch-arrow">↓ ALLOW ONLY</div>
            <div className="arch-row arch-two">
              <div className="arch-node"><span>PROTECTED SIDE EFFECT</span><strong>Institutional system / tool</strong><small>Payment, ERP, CRM, infrastructure</small></div>
              <div className="arch-node arch-evidence"><span>INTEGRITY RECORD</span><strong>Evidence ledger</strong><small>Decision reference · execution reference · hash chain</small></div>
            </div>
            <div className="arch-foot">Independent verification recomputes the cryptographic evidence against the applicable trust roots.</div>
          </div>
        </div>
      </section>

      <section className="block block-dark">
        <div className="wrap">
          <SectionHeading eyebrow="Failure semantics" title="Uncertainty must not become authorization." text="The safe default at the authorization boundary is explicit denial or a controlled pending state, never an implicit allow." />
          <div className="failure-grid">
            <div><code>POLICY_UNAVAILABLE</code><strong>Deny or hold</strong><p>No policy result means no authorization.</p></div>
            <div><code>SIGNATURE_INVALID</code><strong>Reject</strong><p>Untrusted policy material cannot authorize execution.</p></div>
            <div><code>APPROVAL_PENDING</code><strong>Do not execute</strong><p>Wait for the required approval to be verified.</p></div>
            <div><code>INTEGRITY_FAILURE</code><strong>Fail verification</strong><p>Do not treat an invalid evidence chain as proof.</p></div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <SectionHeading eyebrow="Integration considerations" title="Put the control where side effects happen." text="The architecture is only as strong as the execution paths it actually covers." />
          <div className="integration-list">
            <div><span>01</span><p><strong>Mediate every covered side effect.</strong> Ensure all relevant agent-to-system actions pass through the enforcement boundary. Identify alternate routes that could bypass it.</p></div>
            <div><span>02</span><p><strong>Bind authorization to the exact request.</strong> Include the actor, operation, target, relevant attributes, policy version and contextual identifiers needed to prevent request substitution.</p></div>
            <div><span>03</span><p><strong>Handle retries and idempotency.</strong> Define stable request identifiers, duplicate suppression and the relationship between authorization and downstream execution outcomes.</p></div>
            <div><span>04</span><p><strong>Separate decision from outcome.</strong> An allow decision does not prove the downstream operation succeeded. Record execution status and source-system references independently.</p></div>
            <div><span>05</span><p><strong>Operate the trust roots.</strong> Protect signing keys, define rotation and revocation procedures, and make verifier trust configuration explicit.</p></div>
          </div>
        </div>
      </section>

      <section className="block block-soft">
        <div className="wrap engineering-cta-grid">
          <div><p className="eyebrow">Developer resources</p><h2>Move from architecture to implementation.</h2><p className="section-copy">Review the API and SDK references, integration examples and protocol documentation.</p></div>
          <div className="resource-links"><a href={docs} target="_blank" rel="noopener noreferrer"><span>01</span><strong>Developer documentation</strong><b>↗</b></a><a href="https://github.com/pavancharak" target="_blank" rel="noopener noreferrer"><span>02</span><strong>Source code and packages</strong><b>↗</b></a><a href="/architecture"><span>03</span><strong>Architecture overview</strong><b>→</b></a></div>
        </div>
      </section>

      <CallToAction heading="Review the control boundary with your engineering team." text="Bring your agent framework, tool execution path and one protected institutional action. We can work through the integration and trust boundaries together." />
      <SiteFooter />
    </main>
  );
}
