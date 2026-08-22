
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
        <FigureLabel n="05" title="Keeping control" />

        <div className={styles.intro}>
          <h2 className={styles.headline}>
            Your business should decide what gets done.
          </h2>

          <p className={styles.subhead}>
            Not the AI. Not the application. Not the automation.
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
            â†“
          </div>

          <div className={styles.decision}>
            <span className={styles.decisionLabel}>
              YOUR BUSINESS
            </span>

            <strong>
              Decides what is allowed
            </strong>

            <span className={styles.decisionText}>
              before the action happens
            </span>
          </div>

          <div className={styles.arrow} aria-hidden="true">
            â†“
          </div>

          <div className={styles.outcomes}>
            <div className={styles.allow}>
              <span>ALLOW</span>
              <small>Business-approved action</small>
            </div>

            <div className={styles.reject}>
              <span>STOP</span>
              <small>Action the business did not allow</small>
            </div>
          </div>
        </div>

        <p className={styles.footer}>
          As AI takes on more work, your business should not have to
          give up control. You decide what AI can do, and what it cannot.
        </p>
      </div>
    </section>
  );
}