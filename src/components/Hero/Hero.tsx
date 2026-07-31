import styles from './Hero.module.css';

const CONTACT_MAILTO = 'mailto:founder@parmanasystems.com';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={`container ${styles.inner}`}>
        <p className={`mono ${styles.mission}`}>
          We ensure human authority in autonomous systems, independent of its capability, at
          machine speed.
        </p>

        <h1>AI can take action. Make sure every action is one your business allows.</h1>

        <p className={styles.subline}>
          As AI begins operating business systems, Parmana checks every action before it happens
          so organizations stay in control.
        </p>

        <div className={styles.actions}>
          <a className={`button button--primary ${styles.cta}`} href="#how-parmana-fits">
            Explore Parmana
          </a>
          <a className="button" href={CONTACT_MAILTO}>
            Write to us
          </a>
        </div>
      </div>
    </section>
  );
}
