import type { Metadata } from "next";
import { CallToAction, PageIntro, SectionHeading, SiteFooter, SiteHeader, docs } from "../components/SiteChrome";

const title = "Technical Architecture";
const description = "Detailed architecture for deterministic institutional authorization, policy enforcement, cryptographic evidence and independent verification.";

export const metadata: Metadata = {
  title, description, alternates: { canonical: "/architecture" },
  openGraph: { title, description, url: "/architecture", siteName: "Parmana Systems", type: "website" },
};

const stages = [
  { id: "A", title: "Agent and orchestrator", sub: "Untrusted action proposal", desc: "The agent expresses an intended operation. Its natural-language reasoning is not an authorization decision." },
  { id: "B", title: "Request adapter", sub: "Typed action contract", desc: "The integration boundary binds the authenticated principal, agent, operation, target, resource attributes and request identifier." },
  { id: "C", title: "Policy and authority engine", sub: "Deterministic evaluation", desc: "A versioned policy bundle is evaluated against canonical structured inputs. The result is allow, deny or approval required." },
  { id: "D", title: "Enforcement gateway", sub: "Side-effect mediation", desc: "Only an allowed and correctly bound decision may progress to the protected operation. Pending and denied actions do not fall through." },
  { id: "E", title: "Institutional system", sub: "Protected side effect", desc: "The target service performs the operation. Its response or transaction reference is captured separately from the authorization decision." },
  { id: "F", title: "Evidence and verifier", sub: "Integrity and provenance", desc: "The decision and execution references are recorded in integrity-protected evidence that can be checked independently." },
];

const layers = [
  ["Policy material", "Policy bundle identity, version, issuer and signature status."],
  ["Authorization input", "Principal and agent identity, action, resource, typed attributes, request ID and context."],
  ["Decision", "Decision ID, allow / deny / approval-required outcome, policy reference, evaluation result and timestamp source."],
  ["Execution reference", "Downstream operation ID, target system, observed status and correlation to the authorization decision."],
  ["Integrity envelope", "Canonical serialization, digest, signature metadata and predecessor hash where chaining is enabled."],
];

export default function ArchitecturePage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Technical architecture" title="Authorization must sit on the execution path, not beside it.">
        <p>This page describes the control architecture for deterministic institutional authorization. It is intended for platform engineering, security architecture, infrastructure and integration teams.</p>
      </PageIntro>

      <section className="block">
        <div className="wrap">
          <SectionHeading eyebrow="Reference flow" title="Separate proposal, decision, enforcement and proof." text="The agent is an input to the system, not the authority source. The policy engine makes the authorization decision. The enforcement point controls the side effect." />
          <div className="deep-architecture">
            {stages.map((s, i) => <div className="deep-stage" key={s.id}><div className="deep-stage-index">{s.id}</div><div className="deep-stage-copy"><span>{s.sub}</span><h3>{s.title}</h3><p>{s.desc}</p></div>{i < stages.length - 1 ? <div className="deep-stage-arrow">↓</div> : null}</div>)}
          </div>
          <p className="technical-note">The diagram is a logical reference architecture. Deployment topology, trust boundaries and adapter placement depend on the protected systems and execution framework.</p>
        </div>
      </section>

      <section className="block block-soft">
        <div className="wrap">
          <SectionHeading eyebrow="Authorization contract" title="Evaluate structured facts, not model confidence." text="The policy decision should be reproducible from the declared policy version and the normalized request attributes." />
          <div className="contract-layout">
            <div className="contract-card">
              <div className="code-head"><span>INPUT / ACTION REQUEST</span><span>SCHEMATIC JSON</span></div>
              <pre><code>{JSON.stringify({request_id:"req_...",principal:{agent_id:"agent_...",tenant_id:"tenant_..."},action:{type:"refund.issue",resource:"order_...",amount_minor:4800000,currency:"INR"},context:{case_id:"case_...",approval_ref:null},policy_ref:"refund-policy:v3"},null,2)}</code></pre>
              <p className="code-foot">Illustrative request shape, not a published API schema.</p>
            </div>
            <div className="contract-card">
              <div className="code-head"><span>OUTPUT / DECISION</span><span>SCHEMATIC JSON</span></div>
              <pre><code>{JSON.stringify({decision_id:"dec_...",request_id:"req_...",outcome:"approval_required",policy_ref:"refund-policy:v3",reason_codes:["AMOUNT_EXCEEDS_DELEGATED_LIMIT"],evidence_ref:"ev_..."},null,2)}</code></pre>
              <p className="code-foot">Illustrative response shape. Integrations should bind the decision to the exact request.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <SectionHeading eyebrow="Evidence model" title="Preserve the relationship between authority, decision and execution." text="A log line is not the same as independently verifiable evidence. Evidence needs stable serialization, integrity protection and explicit provenance." />
          <div className="evidence-model">
            {layers.map(([name, desc], i) => <div className="evidence-layer" key={name}><span>0{i + 1}</span><strong>{name}</strong><p>{desc}</p></div>)}
          </div>
          <div className="integrity-callout"><strong>Integrity primitives</strong><p>Parmana's integrity design uses RFC 8785 canonical JSON for deterministic structured-data representation, SHA-256 for hashing and cryptographic signatures linked to configured trust roots. Hash chaining makes subsequent modification detectable when the chain is verified.</p></div>
        </div>
      </section>

      <section className="block block-dark">
        <div className="wrap">
          <SectionHeading eyebrow="Operational semantics" title="Define failure behavior before connecting the system." text="A robust authorization boundary needs explicit outcomes for unavailable, malformed and untrusted inputs." />
          <div className="failure-matrix">
            <div className="matrix-head"><span>CONDITION</span><span>REQUIRED CONTROL BEHAVIOR</span></div>
            <div><code>Unknown policy version</code><strong>Reject the decision request. Do not fall back to a permissive policy.</strong></div>
            <div><code>Invalid policy signature</code><strong>Reject policy material that does not validate to a configured trust root.</strong></div>
            <div><code>Missing required attributes</code><strong>Return an explicit non-allow result. Do not infer missing institutional facts.</strong></div>
            <div><code>Approval required</code><strong>Hold the action until an authorized approval is bound to the request.</strong></div>
            <div><code>Downstream timeout</code><strong>Do not report successful execution without a confirmed downstream result.</strong></div>
            <div><code>Evidence verification failure</code><strong>Mark the evidence as unverifiable. Never present it as a valid proof record.</strong></div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <SectionHeading eyebrow="Threat and trust boundaries" title="Do not confuse an authorization proof with proof of everything." text="The control has a defined scope. It should be precise about what it establishes and what remains the responsibility of connected systems." />
          <div className="trust-grid">
            <article><h3>What the control can establish</h3><ul><li>Which policy reference was evaluated.</li><li>Which structured request was presented for authorization.</li><li>Which outcome the authorization engine returned.</li><li>Which execution reference was associated with the decision.</li><li>Whether the recorded evidence passes configured integrity verification.</li></ul></article>
            <article><h3>What it does not establish by itself</h3><ul><li>That the underlying institutional policy was correct or lawful.</li><li>That every possible route to the target system is mediated.</li><li>That a downstream service completed an external real-world outcome.</li><li>That an AI agent is secure against every exploit or compromise.</li><li>That a signature makes an inaccurate source statement true.</li></ul></article>
          </div>
        </div>
      </section>

      <section className="block block-soft">
        <div className="wrap engineering-cta-grid">
          <div><p className="eyebrow">Implementation</p><h2>Review interfaces, SDKs and protocol details.</h2><p className="section-copy">Use the technical documentation for current API contracts, package references and integration examples.</p></div>
          <div className="resource-links"><a href={docs} target="_blank" rel="noopener noreferrer"><span>01</span><strong>Developer documentation</strong><b>↗</b></a><a href="/engineering"><span>02</span><strong>Engineering overview</strong><b>→</b></a></div>
        </div>
      </section>
      <CallToAction heading="Bring your execution path." text="Review one agent action from request construction to downstream side effect and evidence verification." />
      <SiteFooter />
    </main>
  );
}
