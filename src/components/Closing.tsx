import styles from "./Closing.module.css";

export function Closing() {
  return (
    <section className={styles.section} id="closing">
      <div className={styles.inner}>
        <h2 className={styles.tagline}>
          Let AI act.
          <br />
          Keep authority yours.
        </h2>

        <a
          className={styles.cta}
          href="mailto:founder@parmanasystems.com"
        >
          Talk to us
        </a>

        <p className={styles.support}>
          Tell us what you want AI to do for your business.
          We'll show you how to put an authorization boundary
          between intent and execution.
        </p>
      </div>
    </section>
  );
}