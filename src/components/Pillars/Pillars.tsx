import styles from './Pillars.module.css';

export default function Pillars() {
  return (
    <section className={`section ${styles.section}`} aria-label="What you get">
      <div className="container">
        <span className="eyebrow">What you get</span>
        <h2 className={styles.heading}>Rules you write. Keys the AI never holds. Proof no one can fake.</h2>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3>Rules you write</h3>
            <p>Your team defines exactly what the AI may do. Not the vendor. Not the model. You.</p>
          </div>
          <div className={styles.column}>
            <h3>Keys the AI never holds</h3>
            <p>No AI system holds or directly exercises execution credentials. Parmana executes on its behalf, inside your rules.</p>
          </div>
          <div className={styles.column}>
            <h3>Proof no one can fake</h3>
            <p>Every action produces a signed, tamper-evident receipt. If a record is altered, the alteration shows.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
