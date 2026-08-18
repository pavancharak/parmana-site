import styles from "./Company.module.css";
import { FigureLabel } from "./FigureLabel";

export function Company() {
  return (
    <section className={styles.section} id="company">
      <div className={styles.inner}>
        <FigureLabel n="07" title="Company" />
        <div className={styles.copy}>
          <p>
            Parmana is built by people who've spent their careers building the products companies run
            on, and watching what happens when access and authorization aren't designed carefully. We
            kept watching businesses find out what went wrong only after it had already happened, and
            decided that was backwards.
          </p>
          <p>
            We exist to build the checkpoint instead, infrastructure that keeps working no matter
            what's asking to act, or how capable it gets. A person, a program, or something newer than
            either. The gate holds either way.
          </p>
        </div>
      </div>
    </section>
  );
}
