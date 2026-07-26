import styles from './Autonomy.module.css';

export default function Autonomy() {
  return (
    <section className={`section ${styles.section}`} aria-label="Built for autonomy">
      <div className="container">
        <div className={styles.panel}>
          <span className="eyebrow">Built for autonomous AI</span>

          <h2 className={styles.heading}>
            Set the rule once. The AI acts without asking again.
          </h2>

          <p className={styles.body}>
            Once your organization defines what's allowed, the AI doesn't
            need to check back in for every action. It keeps moving at its
            own speed. Every action it takes is still checked against that
            rule before it executes, so independence never means the AI is
            acting outside what you've allowed.
          </p>
        </div>
      </div>
    </section>
  );
}