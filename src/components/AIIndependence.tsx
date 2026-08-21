import styles from "./AIIndependence.module.css";
import { FigureLabel } from "./FigureLabel";

const SOURCES = [
  "AI agent",
  "Employee",
  "Application",
  "Automation",
  "Integration",
];

export function AIIndependence() {
  return (
    <section className={styles.section} id="ai-independence">
      <div className={styles.inner}>
        <FigureLabel n="05" title="The source is not the authority" />

        <div className={styles.intro}>
          <h2 className={styles.headline}>
            It doesn't matter where the action comes from.
          </h2>

          <p className={styles.subhead}>
            What matters is whether the institution authorized it.
          </p>
        </div>

        <div className={styles.flow}>
          <div className={styles.sources}>
            {SOURCES.map((source) => (
              <div key={source} className={styles.source}>
                {source}
              </div>
            ))}
          </div>

          <div className={styles.arrow} aria-hidden="true">
            ↓
          </div>

          <div className={styles.decision}>
            <span className={styles.decisionLabel}>
              PARMANA
            </span>

            <strong>
              Identity + Intent + Context
            </strong>

            <span className={styles.decisionText}>
              determines execution authority
            </span>
          </div>

          <div className={styles.arrow} aria-hidden="true">
            ↓
          </div>

          <div className={styles.outcomes}>
            <div className={styles.allow}>
              <span>ALLOW</span>
              <small>Authorized action</small>
            </div>

            <div className={styles.reject}>
              <span>REJECT</span>
              <small>Everything else</small>
            </div>
          </div>
        </div>

        <p className={styles.footer}>
          AI can be wrong, compromised, jailbroken, or unexpected.
          The system of record still executes only what the institution
          authorizes.
        </p>
      </div>
    </section>
  );
}