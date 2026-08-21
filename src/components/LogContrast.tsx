import styles from "./LogContrast.module.css";
import { FigureLabel } from "./FigureLabel";

export function LogContrast() {
  return (
    <section className={styles.section} id="why-a-log-isnt-enough">
      <div className={styles.inner}>
        <FigureLabel n="04" title="Control before execution" />

        <div className={styles.grid}>
          <div className={styles.block}>
            <span className={styles.label}>After the fact</span>
            <p className={styles.statement}>
              Logs record what an AI agent did after execution. They provide
              evidence, but they do not prevent an unauthorized action from
              happening.
            </p>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.block}>
            <span className={styles.label}>Before execution</span>
            <p className={styles.statement}>
              Parmana evaluates the machine-generated action before it reaches
              the system of record, allowing only actions that fall within
              organizational authority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}