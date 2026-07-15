import Stamp from '../Stamp/Stamp';
import styles from './ExecutionReceipt.module.css';

export default function ExecutionReceipt() {
  return (
    <div className={styles.card} role="img" aria-label="Sample execution receipt: action refund.create for INR 4,150.00, checked against policy refunds-v3 for caller agent-7f2, outcome allowed">
      <div className={styles.headerRow}>
        <span>Execution receipt</span>
        <span>RCPT 000482</span>
        <span>12 FEB 2026</span>
      </div>
      <div className={styles.body} aria-hidden="true">
        <div className={styles.bodyRow}>
          <span className={styles.label}>Action</span>
          <span className={styles.value}>refund.create</span>
        </div>
        <div className={styles.bodyRow}>
          <span className={styles.label}>Amount</span>
          <span className={styles.value}>INR 4,150.00</span>
        </div>
        <div className={styles.bodyRow}>
          <span className={styles.label}>Policy</span>
          <span className={styles.value}>refunds-v3</span>
        </div>
        <div className={styles.bodyRow}>
          <span className={styles.label}>Caller</span>
          <span className={styles.value}>agent-7f2 (verified)</span>
        </div>
      </div>
      <div className={styles.outcome} aria-hidden="true">
        <Stamp variant="allow" label="Allowed" animate />
      </div>
      <p className={styles.signature} aria-hidden="true">sig 9f3a1c7e2b4d6f80...e51a</p>
      <div className={styles.micr} aria-hidden="true">
        ⑆000482⑆ ⑈041736521⑈ 4150.00⑉
      </div>
    </div>
  );
}
