import styles from './FlowDiagram.module.css';

export default function FlowDiagram() {
  return (
    <div
      className={styles.flow}
      role="img"
      aria-label="Flow diagram showing every AI action being verified by Parmana before reaching business systems."
    >
      <div className={styles.node}>
        <span className={styles.nodeLabel}>AI Agent</span>
      </div>

      <div className={styles.rail} />

      <div className={`${styles.node} ${styles.checkpoint}`}>
        <span className={styles.nodeLabel}>Parmana</span>
        <span className={styles.nodeSub}>
          Verifies every action before execution
        </span>
      </div>

      <div className={styles.rail} />

      <div className={styles.node}>
        <span className={styles.nodeLabel}>Business Systems</span>
      </div>
    </div>
  );
}