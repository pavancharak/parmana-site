import type { ReactNode } from 'react';
import styles from './PromiseCallout.module.css';

interface PromiseCalloutProps {
  children: ReactNode;
  label?: string;
}

export default function PromiseCallout({ children, label = 'The rule' }: PromiseCalloutProps) {
  return (
    <section className={`section ${styles.section}`} aria-label={label}>
      <div className="container">
        <div className={styles.band}>
          <p className={styles.line}>{children}</p>
        </div>
      </div>
    </section>
  );
}
