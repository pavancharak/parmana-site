import styles from './WhyNow.module.css';

export default function WhyNow() {
  return (
    <section className={`section ${styles.section}`} aria-label="Why now">
      <div className="container">
        <div className={styles.notice}>
          <span className={`eyebrow ${styles.eyebrow}`}>Why now</span>
          <p className={styles.statement}>
            Banks, insurers, and brokers have AI pilots that never touch production. Not because the AI isn't
            capable, but because no one can answer the regulator's question: what stops it from doing something it
            shouldn't, and how do you prove what it did?
          </p>
          <p className={styles.answer}>Parmana is that answer. Switch the AI on.</p>
        </div>
      </div>
    </section>
  );
}
