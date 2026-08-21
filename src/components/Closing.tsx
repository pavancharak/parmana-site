import styles from "./Closing.module.css";

export function Closing() {
  return (
    <section className={styles.section} id="closing">
      <div className={styles.inner}>
        <h2 className={styles.tagline}>
          AI can decide. Your institution decides what it is allowed to execute.
        </h2>

        <a
          className={styles.cta}
          href="mailto:founder@parmanasystems.com"
        >
          Talk to us
        </a>

        <p className={styles.support}>
          Tell us what your AI can do today. We'll show you where
          deterministic execution authority belongs.
        </p>
      </div>
    </section>
  );
}