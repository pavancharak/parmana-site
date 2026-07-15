import styles from './DocsLine.module.css';

export default function DocsLine() {
  return (
    <section className={`section ${styles.section}`} aria-label="Documentation">
      <div className="container">
        <p className={styles.line}>
          The full reference lives at{' '}
          <a href="https://docs.parmanasystems.com/">docs.parmanasystems.com</a>.
        </p>
      </div>
    </section>
  );
}
