import type { ReactNode } from 'react';
import styles from './PullQuote.module.css';

export default function PullQuote({ children }: { children: ReactNode }) {
  return <blockquote className={styles.quote}>{children}</blockquote>;
}
