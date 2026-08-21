import styles from "./Closing.module.css";

export function Closing() {
  return (
    <section className={styles.section} id="closing">
      <div className={styles.inner}>
        <h2 className={styles.tagline}>
          Organizations need control over what AI agents are allowed to execute.
        </h2>

        <a className={styles.cta} href="mailto:founder@parmanasystems.com">
          Talk to us
        </a>

        <p className={styles.support}>
          Parmana provides deterministic control at the execution boundary.
        </p>
      </div>
    </section>
  );
}