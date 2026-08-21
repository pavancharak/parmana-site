import styles from "./LogContrast.module.css";
import { FigureLabel } from "./FigureLabel";

export function LogContrast() {
  return (
    <section className={styles.section} id="why-a-log-isnt-enough">
      <div className={styles.inner}>
        <FigureLabel n="04" title="Why evidence alone isn't enough" />

        <div className={styles.grid}>
          <div className={styles.block}>
            <span className={styles.label}>After it happens</span>

            <p className={styles.statement}>
              A log can tell you what an AI agent did. It cannot give the
              institution control over an action that has already happened.
            </p>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.block}>
            <span className={styles.label}>Before it happens</span>

            <p className={styles.statement}>
              Parmana determines whether the action is authorized before
              execution. If it isn't allowed, the action cannot proceed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}