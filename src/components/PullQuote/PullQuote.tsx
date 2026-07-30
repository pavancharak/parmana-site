import type { ReactNode } from 'react';
import styles from './PullQuote.module.css';

interface PullQuoteProps {
  children: ReactNode;
  supporting?: ReactNode;
  label?: string;
}

export default function PullQuote({ children, supporting, label }: PullQuoteProps) {
  return (
    <section className={`section ${styles.section}`} aria-label={label}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.quote}>{children}</p>
        {supporting ? <p className={styles.supporting}>{supporting}</p> : null}
      </div>
    </section>
  );
}
