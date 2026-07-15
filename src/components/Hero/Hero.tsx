import ExecutionReceipt from '../ExecutionReceipt/ExecutionReceipt';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={`devanagari ${styles.mark}`} lang="sa">
            प्रमाण
          </p>
          <h1>Companies bought AI they're afraid to switch on. We make it safe to switch on.</h1>
          <p className={styles.tagline}>The authorization layer for AI execution.</p>
          <p className={styles.subline}>
            The AI asks permission before every action, gets an answer at machine speed, and leaves verifiable proof
            behind. Even a compromised AI can't bypass that control.
          </p>
          <a
            className={`button button--primary ${styles.cta}`}
            href="mailto:founder@parmanasystems.com?subject=Design%20partner%20brief"
          >
            Request a design partner brief
          </a>
        </div>
        <div className={styles.receiptWrap}>
          <ExecutionReceipt />
        </div>
      </div>
    </section>
  );
}
