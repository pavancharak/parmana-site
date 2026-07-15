import type { ReactNode } from 'react';
import Stamp from '../Stamp/Stamp';
import styles from './CapabilitySection.module.css';

interface CapabilitySectionProps {
  eyebrow: string;
  heading: string;
  children: ReactNode;
  stamp?: { variant: 'allow' | 'block'; label: string };
}

export default function CapabilitySection({ eyebrow, heading, children, stamp }: CapabilitySectionProps) {
  return (
    <section className={`section ${styles.section}`} aria-label={heading}>
      <div className="container">
        <div className={styles.row}>
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className={styles.heading}>{heading}</h2>
            <div className={styles.body}>{children}</div>
          </div>
          {stamp && (
            <div className={styles.stamp}>
              <Stamp variant={stamp.variant} label={stamp.label} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
