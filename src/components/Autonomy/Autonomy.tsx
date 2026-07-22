import styles from './Autonomy.module.css';

export default function Autonomy() {
  return (
    <section className={`section ${styles.section}`} aria-label="Built for autonomy">
      <div className="container">
        <div className={styles.panel}>
          <span className="eyebrow">Built for autonomous AI</span>

          <h2 className={styles.heading}>
            AI can operate autonomously.
            <br />
            Authority should never be autonomous.
          </h2>

          <p className={styles.body}>
            Autonomous AI can move at machine speed, but every action should
            remain within the authority your organization defines. Parmana
            verifies every AI action before execution, allowing AI to operate
            independently without giving up human control.
          </p>
        </div>
      </div>
    </section>
  );
}