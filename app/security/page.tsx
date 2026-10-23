import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security review of Parmana | Parmana Systems",
  description: "How Parmana controls AI agent actions for a security reviewer: named policies, signed human approvals, tamper-evident records, and what the evidence does not prove.",
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return (
    <main className="question-page">
      <h1>Security review of Parmana</h1>
      <p>
        This page is for the person who has to decide whether Parmana is safe to put in front of an AI
        agent that can act on your business systems. It lists what Parmana checks, what it records, how
        a third party can verify a record, and what it does not prove.
      </p>

      <h2>What Parmana checks before an action runs</h2>
      <ul>
        <li>
          Every action is decided by a named, versioned policy. The record stores a hash of the policy
          content that was actually evaluated, not just its version number.
        </li>
        <li>
          A policy that approves an action must require a signed human approval for it. Without one, the
          policy is refused at load time.
        </li>
        <li>
          If a required fact is missing, the action is refused. Missing data is never treated as a pass.
        </li>
        <li>
          Declared facts are checked against the real intended action, and where a connector can confirm
          a fact from its own system, it is checked there.
        </li>
        <li>
          An action is refused, not retried, when its approval is missing, its signature does not verify,
          or its policy no longer matches the approved content.
        </li>
      </ul>

      <h2>Who can change a policy</h2>
      <ul>
        <li>Policy changes are proposed by one authenticated human and approved by a different one.</li>
        <li>Each approval needs a separate signed step-up envelope, which expires after 120 seconds and can be used once.</li>
        <li>Each approval is recorded as a signed record chained to the record before it, so a deleted or reordered record is detectable.</li>
        <li>Startup and CI checks compare the live policy file with its approval record, and a mismatch fails.</li>
      </ul>

      <h2>What is recorded, and who can verify it</h2>
      <ul>
        <li>Each executed or refused action produces a signed Execution Trust Record or Refusal Record.</li>
        <li>Public keys are published at <code>/.well-known/jwks.json</code>, so a third party can verify a signature without a Parmana credential.</li>
        <li>Public verification endpoints check a signed record or audit event without database access.</li>
      </ul>

      <h2>Caller type</h2>
      <p>
        An AI agent, a person, and a service account go through the same execution path and produce the
        same record shapes. Only policy authorship is restricted to verified humans.
      </p>

      <h2>What the evidence does not prove</h2>
      <ul>
        <li>A signed record does not prove the policy itself is correct. It proves which policy content was in force.</li>
        <li>A signed record does not prove the external system performed the action. It records what Parmana released.</li>
        <li>Any person holding a provisioned checker credential can approve a policy change. Review which checker credentials are provisioned.</li>
      </ul>

      <p>
        Technical detail is in the <a href="https://docs.parmanasystems.com" target="_blank" rel="noreferrer">documentation</a>.
        Questions about a specific control: <Link href="/questions">see the questions page</Link>.
      </p>
    </main>
  );
}
