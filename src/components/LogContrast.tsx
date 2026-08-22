import styles from "./LogContrast.module.css";
import { FigureLabel } from "./FigureLabel";

export function LogContrast() {
  return (
    <section
      className={styles.section}
      id="why-a-log-isnt-enough"
    >
      <div className={styles.inner}>
        <FigureLabel
          n="06"
          title="Control, not just visibility"
        />

        <div className={styles.grid}>
          <div className={styles.block}>
            <span className={styles.label}>
              AFTER IT HAPPENS
            </span>

            <p className={styles.statement}>
              A log can tell you what an AI agent did.
              It cannot stop an unauthorized action that
              has already happened.
            </p>
          </div>

          <div
            className={styles.divider}
            aria-hidden="true"
          />

          <div className={styles.block}>
            <span className={styles.label}>
              BEFORE IT HAPPENS
            </span>

            <p className={styles.statement}>
              Parmana evaluates authorization before
              execution. If the action is outside the
              business rules, execution is denied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}