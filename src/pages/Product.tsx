import DocumentHeader from '../components/DocumentHeader/DocumentHeader';
import CapabilitySection from '../components/CapabilitySection/CapabilitySection';
import WhatParmanaIsNot from '../components/WhatParmanaIsNot/WhatParmanaIsNot';
import DocsLine from '../components/DocsLine/DocsLine';
import CTA from '../components/CTA/CTA';

export default function Product() {
  return (
    <>
      <DocumentHeader page="Product" />

      <section className="section" aria-label="Product overview">
        <div className="container">
          <h1>Every AI action is verified before execution.</h1>
          <p>
            Parmana sits between AI systems and your business systems,
            verifying every action against your organization's policies before
            execution. Authorized actions proceed. Unauthorized actions stop.
          </p>
        </div>
      </section>

      <CapabilitySection
        eyebrow="Verification"
        heading="Every action is verified"
        stamp={{ variant: 'block', label: 'Blocked' }}
      >
        <p>
          Every action proposed by an AI system is evaluated against
          deterministic policies before execution.
        </p>

        <p>
          If an action is authorized, it executes. If it is not explicitly
          authorized, it is blocked.
        </p>
      </CapabilitySection>

      <CapabilitySection
        eyebrow="Credentials"
        heading="AI never receives execution credentials"
      >
        <p>
          AI systems never possess API keys, secrets, or privileged credentials.
        </p>

        <p>
          Credentials are resolved only during authorized execution and are
          never exposed to the AI.
        </p>
      </CapabilitySection>

      <CapabilitySection
        eyebrow="Evidence"
        heading="Every decision produces proof"
      >
        <p>
          Every allowed and blocked action generates a cryptographically signed,
          tamper-evident record.
        </p>

        <p>
          Decisions can be independently verified without repeating execution.
        </p>
      </CapabilitySection>

      <CapabilitySection
        eyebrow="Performance"
        heading="Built for machine-speed execution"
      >
        <p>
          Parmana verifies actions in milliseconds, enabling governance without
          slowing AI systems.
        </p>

        <p>
          Verification happens fast enough to support real-time autonomous
          execution.
        </p>
      </CapabilitySection>

      <CapabilitySection
        eyebrow="Security"
        heading="Designed for long-term trust"
      >
        <p>
          Cryptographic signatures protect every execution record against
          tampering.
        </p>

        <p>
          Modern cryptography provides verifiable evidence for every authorized
          decision.
        </p>
      </CapabilitySection>

      <CapabilitySection
        eyebrow="Integration"
        heading="Works with your existing systems"
      >
        <p>
          Parmana connects AI systems to enterprise applications through secure,
          policy-controlled connectors.
        </p>

        <p>
          Organizations define what AI may do without changing their existing
          business systems.
        </p>
      </CapabilitySection>

      <WhatParmanaIsNot />
      <DocsLine />
      <CTA />
    </>
  );
}