import FlowDiagram from '../FlowDiagram/FlowDiagram';
import styles from './Hero.module.css';

const CONTACT_MAILTO =
  'mailto:founder@parmanasystems.com?subject=Design%20partner%20conversation';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={`devanagari ${styles.mark}`} lang="sa">
            प्रमाण
          </p>

          <h1>Keep human authority in control of AI execution.</h1>

          <p className={styles.subline}>
            AI systems can be wrong, compromised, unavailable, or behave
            unexpectedly. Parmana verifies every AI action before it reaches
            your business systems, ensuring every action executes within your
            organization's authority.
          </p>

          <a
            className={`button button--primary ${styles.cta}`}
            href={CONTACT_MAILTO}
          >
            Become a Design Partner
          </a>
        </div>

        <div className={styles.diagramWrap}>
          <FlowDiagram />
        </div>
      </div>
    </section>
  );
}