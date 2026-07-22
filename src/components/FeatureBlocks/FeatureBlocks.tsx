import type { ReactNode } from 'react';
import Stamp from '../Stamp/Stamp';
import styles from './FeatureBlocks.module.css';

function PolicyVisual() {
  return (
    <div
      className={styles.policyCard}
      role="img"
      aria-label="Example: an AI action is verified against organizational policy before execution."
    >
      <p className={styles.policyAction}>wire_transfer.create</p>
      <p className={styles.policyRule} aria-hidden="true">
        verified against policy wires-v2
      </p>
      <div className={styles.policyOutcome}>
        <Stamp variant="block" label="Blocked" animate />
      </div>
    </div>
  );
}

function CredentialVisual() {
  return (
    <div
      className={styles.credentialFlow}
      role="img"
      aria-label="Diagram showing AI never holds execution credentials. Parmana resolves credentials only for authorized execution."
    >
      <div className={styles.credNode}>
        <span className={styles.credLabel}>AI Agent</span>
        <span className={styles.credSub}>holds no credentials</span>
      </div>

      <div className={styles.credRail} aria-hidden="true" />

      <div className={`${styles.credNode} ${styles.credCheckpoint}`}>
        <span className={styles.credLabel}>Parmana</span>
        <span className={styles.credSub}>
          resolves credentials only when authorized
        </span>
      </div>

      <div className={styles.credRail} aria-hidden="true" />

      <div className={styles.credNode}>
        <span className={styles.credLabel}>Business System</span>
        <span className={styles.credSub}>authenticated execution</span>
      </div>
    </div>
  );
}

function ConnectorVisual() {
  const targets = ['Payments', 'Records', 'Operations'];

  return (
    <div
      className={styles.connectorFlow}
      role="img"
      aria-label="Diagram showing Parmana securely connecting AI to enterprise systems."
    >
      <div className={styles.connectorSource}>
        <span className={styles.credLabel}>Parmana</span>
        <span className={styles.credSub}>policy-controlled execution</span>
      </div>

      <div className={styles.connectorTargets} aria-hidden="true">
        {targets.map((target) => (
          <div className={styles.connectorTarget} key={target}>
            <span className={styles.connectorRail} />
            <span className={styles.connectorLabel}>{target}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReceiptVisual() {
  return (
    <div className={styles.receiptWrap}>
      <div
        className={styles.receiptCard}
        role="img"
        aria-label="Example cryptographically signed execution record."
      >
        <div className={styles.receiptHeaderRow}>
          <span>Execution Record</span>
          <span>RCPT 000482</span>
        </div>

        <div className={styles.receiptBody} aria-hidden="true">
          <div className={styles.receiptRow}>
            <span className={styles.receiptLabel}>Action</span>
            <span className={styles.receiptValue}>refund.create</span>
          </div>

          <div className={styles.receiptRow}>
            <span className={styles.receiptLabel}>Policy</span>
            <span className={styles.receiptValue}>refunds-v3</span>
          </div>

          <div className={styles.receiptRow}>
            <span className={styles.receiptLabel}>Decision</span>
            <span className={styles.receiptValue}>Allowed</span>
          </div>

          <div className={styles.receiptRow}>
            <span className={styles.receiptLabel}>Caller</span>
            <span className={styles.receiptValue}>Verified Agent</span>
          </div>
        </div>

        <div className={styles.receiptOutcome}>
          <Stamp variant="allow" label="Allowed" animate />
        </div>

        <p className={styles.receiptSignature} aria-hidden="true">
          sig 9f3a1c7e2b4d6f80...e51a
        </p>
      </div>

      <p className={styles.receiptProof}>
        Every execution produces cryptographic proof that can be independently
        verified.
      </p>
    </div>
  );
}

interface Block {
  eyebrow: string;
  heading: string;
  body: string;
  visual: ReactNode;
}

const BLOCKS: Block[] = [
  {
    eyebrow: '01 · Verification',
    heading: 'Every AI action is verified before execution.',
    body:
      "Every action proposed by an AI system is verified against your organization's policies. Authorized actions proceed. Unauthorized actions stop.",
    visual: <PolicyVisual />,
  },
  {
    eyebrow: '02 · Credential Isolation',
    heading: 'AI never receives execution credentials.',
    body:
      'Execution credentials remain outside the AI. They are resolved only for authorized actions and are never exposed to the model.',
    visual: <CredentialVisual />,
  },
  {
    eyebrow: '03 · Secure Integration',
    heading: 'Works with your existing business systems.',
    body:
      'Parmana securely connects AI systems to enterprise applications through policy-controlled connectors, without requiring changes to your existing systems.',
    visual: <ConnectorVisual />,
  },
  {
    eyebrow: '04 · Verifiable Proof',
    heading: 'Every decision produces verifiable proof.',
    body:
      'Every allowed and blocked action generates a cryptographically signed, tamper-evident record that can be independently verified.',
    visual: <ReceiptVisual />,
  },
];

export default function FeatureBlocks() {
  return (
    <section className={`section ${styles.section}`} aria-label="How Parmana works">
      <div className="container">
        {BLOCKS.map((block, index) => (
          <div
            className={styles.block}
            key={block.heading}
            data-reverse={index % 2 === 1}
          >
            <div className={styles.text}>
              <span className="eyebrow">{block.eyebrow}</span>
              <h2 className={styles.heading}>{block.heading}</h2>
              <p className={styles.body}>{block.body}</p>
            </div>

            <div className={styles.visual}>{block.visual}</div>
          </div>
        ))}
      </div>
    </section>
  );
}