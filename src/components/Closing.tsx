import styles from "./Closing.module.css";

export function Closing() {
  return (
    <section className={styles.section} id="closing">
      <div className={styles.inner}>
        <h2 className={styles.tagline}>AI may decide. You decide what becomes real.</h2>
        <a className={styles.cta} href="mailto:founder@parmanasystems.com">
          Write to us
        </a>
        <p className={styles.support}>
          No pitch deck, no demo request. Write, and a person will write back.
        </p>
      </div>
    </section>
  );
}
