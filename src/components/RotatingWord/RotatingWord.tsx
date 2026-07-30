import { useEffect, useState } from 'react';
import styles from './RotatingWord.module.css';

const WORDS = ['Approve', 'Update', 'Transfer', 'Create', 'Respond', 'Execute'];
const INTERVAL_MS = 1800;

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!query.matches) setAnimated(true);
  }, []);

  useEffect(() => {
    if (!animated) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % WORDS.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [animated]);

  return (
    <section className={`section ${styles.band}`} aria-label="The next step in AI">
      <div className={`container ${styles.inner}`}>
        <p className={styles.lede}>Today&rsquo;s AI can:</p>

        {animated ? (
          <p className={`mono ${styles.word}`} aria-live="polite">
            <span key={index} className={styles.wordInner}>
              {WORDS[index]}
            </span>
          </p>
        ) : (
          <p className={`mono ${styles.staticWords}`}>{WORDS.join(' · ')}</p>
        )}

        <p className={styles.tagline}>The challenge isn&rsquo;t intelligence anymore. It&rsquo;s control.</p>
      </div>
    </section>
  );
}
