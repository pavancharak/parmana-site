import styles from './JailbreakNotice.module.css';

export default function JailbreakNotice() {
  return (
    <section className={`section ${styles.section}`} aria-label="The jailbreak question">
      <div className="container">
        <div className={styles.notice}>
          <span className={`eyebrow ${styles.eyebrow}`}>The jailbreak question</span>
          <p className={styles.statement}>
            Parmana is not an AI system. No prompts. No guardrails. Nothing to jailbreak. Only your organisation's
            policy and your defined execution.
          </p>
        </div>
      </div>
    </section>
  );
}
