import FlowDiagram from '../FlowDiagram/FlowDiagram';
import styles from './Hero.module.css';

const CONTACT_MAILTO = 'mailto:founder@parmanasystems.com';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={`devanagari ${styles.mark}`} lang="sa">
            प्रमाण
          </p>

          <h1>AI can finally take real action in your business, at full speed, without losing control.</h1>

          <p className={styles.subline}>
            The agentic era is here. Now your business can move at its
            speed, fully in control.
          </p>

          <p className={styles.tagline}>
            AI can take action. Make sure every action is one your business
            allows.
          </p>

          <a
            className={`button button--primary ${styles.cta}`}
            href={CONTACT_MAILTO}
          >
            Write to us
          </a>
        </div>

        <div className={styles.diagramWrap}>
          <FlowDiagram />
        </div>
      </div>
    </section>
  );
}