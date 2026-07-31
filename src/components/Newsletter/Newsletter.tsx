import styles from './Newsletter.module.css';

export default function Newsletter() {
  return (
    <section className={`section ${styles.section}`} aria-label="Newsletter">
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">Newsletter</span>
        <h2 className={styles.heading}>The AI Execution Review</h2>
        <p className={styles.supporting}>
          Notes on what it takes to move AI from pilots to production, straight from the Parmana
          team.
        </p>

        <div className={styles.card}>
          <iframe
            className={styles.embed}
            src="https://theaiexecutionreview.substack.com/embed"
            width="480"
            height="320"
            style={{ border: '1px solid #EEE', background: 'white' }}
            frameBorder="0"
            scrolling="no"
            title="Subscribe to The AI Execution Review"
          />
        </div>
      </div>
    </section>
  );
}
