import styles from './Origin.module.css';

export default function Origin() {
  return (
    <section className={`section ${styles.section}`} aria-label="Origin">
      <div className="container">
        <span className="eyebrow">The name</span>
        <h1 className={`devanagari ${styles.mark}`} lang="sa">
          प्रमाण
        </h1>
        <div className={styles.body}>
          <p>Pramana is the Sanskrit word for a valid means of knowing: proof.</p>
          <p>Parmana does not ask you to trust the AI, the vendor, or us. It produces proof.</p>
          <p>Parmana is built by Manthan Systems.</p>
        </div>
      </div>
    </section>
  );
}
