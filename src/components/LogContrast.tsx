import styles from "./LogContrast.module.css";
import { FigureLabel } from "./FigureLabel";

export function LogContrast() {
  return (
    <section className={styles.section} id="why-a-log-isnt-enough">
      <div className={styles.inner}>
        <FigureLabel n="04" title="Why checking afterward isn't enough" />

        <div className={styles.grid}>
          <div className={styles.block}>
            <span className={styles.label}>After it happens</span>

            <p className={styles.statement}>
              A log can tell you what an AI agent did. It cannot stop an
              action that should never have happened.
            </p>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.block}>
            <span className={styles.label}>Before it happens</span>

            <p className={styles.statement}>
              Parmana checks the action first. If your organization hasn't
              allowed it, the action stops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}