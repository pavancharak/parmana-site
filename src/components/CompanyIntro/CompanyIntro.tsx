import styles from './CompanyIntro.module.css';

export default function CompanyIntro() {
  return (
    <section className={`section ${styles.section}`} aria-label="Company">
      <div className="container">
        <span className="eyebrow">Company</span>

        <h1 className={styles.heading}>
          AI can operate at machine speed. Human authority should too.
        </h1>

        <div className={styles.body}>
          <p>
            AI systems are increasingly making and executing decisions across
            critical business operations. The challenge isn't simply making AI
            more accurate , it's ensuring every action remains within the authority
            your organization defines.
          </p>

          <p>
            Parmana verifies every AI action before execution. If an action is
            authorized, it proceeds. If it isn't, it stops. Every decision
            produces cryptographic proof, giving organizations confidence that
            authority remains under human control, regardless of how AI behaves.
          </p>
        </div>
      </div>
    </section>
  );
}