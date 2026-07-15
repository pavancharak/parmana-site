import DocumentHeader from '../components/DocumentHeader/DocumentHeader';
import CapabilitySection from '../components/CapabilitySection/CapabilitySection';
import WhatParmanaIsNot from '../components/WhatParmanaIsNot/WhatParmanaIsNot';
import DocsLine from '../components/DocsLine/DocsLine';
import CTA from '../components/CTA/CTA';

export default function Product() {
  return (
    <>
      <DocumentHeader page="Product" />
      <section className="section" aria-label="Product stance">
        <div className="container">
          <h1>Deterministic authorization between your AI and your systems of record.</h1>
        </div>
      </section>

      <CapabilitySection
        eyebrow="Policy"
        heading="Rules you write"
        stamp={{ variant: 'block', label: 'Blocked' }}
      >
        <p>
          Policy is data, not prose. Every action your AI proposes is evaluated against it deterministically: allow
          or block, with no model judgment in the decision path and no escalation.
        </p>
        <p>Anything the rules don't explicitly allow is blocked by default, the same way, every single time.</p>
      </CapabilitySection>

      <CapabilitySection eyebrow="Credentials" heading="Keys the AI never holds">
        <p>No AI system holds or directly exercises execution credentials.</p>
        <p>Secrets are resolved only at the moment of execution and destroyed immediately after. The AI itself never sees them, so there is nothing in its reach for an attacker to take.</p>
      </CapabilitySection>

      <CapabilitySection eyebrow="Records" heading="Proof no one can fake">
        <p>Every action, allowed or blocked, produces a cryptographically signed, tamper-evident receipt, bound to the content of the transaction itself.</p>
        <p>Replay of that receipt returns the recorded outcome. It never re-executes the action.</p>
      </CapabilitySection>

      <CapabilitySection eyebrow="Speed" heading="Machine speed">
        <p>Benchmarked at sub-2ms mean decision latency under in-memory storage.</p>
        <p>The agent gets an answer fast enough that nothing waits on Parmana.</p>
      </CapabilitySection>

      <CapabilitySection eyebrow="Cryptography" heading="Quantum-ready by design">
        <p>Signatures use ml-dsa-65 post-quantum algorithms.</p>
        <p>Quantum-ready by design, not quantum-resistant today.</p>
      </CapabilitySection>

      <CapabilitySection eyebrow="Reach" heading="Connectors">
        <p>Parmana routes execution to your systems by capability, not by system name.</p>
        <p>Connectors are how it reaches those systems: the specific integration for a specific capability.</p>
      </CapabilitySection>

      <WhatParmanaIsNot />
      <DocsLine />
      <CTA />
    </>
  );
}
