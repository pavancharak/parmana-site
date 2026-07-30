import styles from './Placeholder.module.css';

export default function Company() {
  return (
    <section className={`section ${styles.section}`} aria-label="Company">
      <div className="container">
        <span className="eyebrow">Company</span>
        <h1 className={styles.heading}>More about Parmana Systems is coming here soon.</h1>
        <p className={styles.body}>
          In the meantime, write to us at{' '}
          <a href="mailto:founder@parmanasystems.com">founder@parmanasystems.com</a> and we&rsquo;ll
          walk you through it directly.
        </p>
      </div>
    </section>
  );
}
