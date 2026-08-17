import styles from "./LogContrast.module.css";
import { FigureLabel } from "./FigureLabel";

export function LogContrast() {
  return (
    <section className={styles.section} id="why-a-log-isnt-enough">
      <div className={styles.inner}>
        <FigureLabel n="04" title="Why a log isn't enough" />
        <div className={styles.grid}>
          <div className={styles.block}>
            <span className={styles.label}>After the fact</span>
            <p className={styles.statement}>
              Watching and recording what happened tells you what went wrong, once it's already
              happened.
            </p>
          </div>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.block}>
            <span className={styles.label}>Before the fact</span>
            <p className={styles.statement}>
              A gate checks first, so the wrong action never gets to happen at all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
