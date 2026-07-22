import { useEffect, useState } from 'react';
import FlowDiagram from '../FlowDiagram/FlowDiagram';
import styles from './Hero.module.css';

const CONTACT_MAILTO =
  'mailto:founder@parmanasystems.com?subject=Design%20partner%20conversation';

const VERTICALS = [
  'Financial Services',
  'Healthcare',
  'Insurance',
  'Government',
  'Enterprise Software',
  'Critical Operations',
];

const ROTATE_MS = 2600;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % VERTICALS.length);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={`devanagari ${styles.mark}`} lang="sa">
            प्रमाण
          </p>

          <h1>
            The biggest risk isn't that AI makes mistakes.
            <br />
            It's that organizations lose authority over execution.
          </h1>

          <p className={styles.tagline}>
            No matter how AI behaves, Parmana ensures human authority remains in
            control of execution across{' '}
            <span className={styles.rotator}>
              <span key={VERTICALS[index]} className={styles.rotatorWord}>
                {VERTICALS[index]}
              </span>
            </span>
            .
          </p>

          <p className={styles.subline}>
            AI systems can be wrong, compromised, unavailable, or behave
            unexpectedly. Parmana verifies every AI action before it reaches
            your business systems, ensuring execution always remains under human
            authority.
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