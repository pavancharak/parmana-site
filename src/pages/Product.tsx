import styles from './Placeholder.module.css';

export default function Product() {
  return (
    <section className={`section ${styles.section}`} aria-label="Product">
      <div className="container">
        <span className="eyebrow">Product</span>
        <h1 className={styles.heading}>More on how Parmana works is coming here soon.</h1>
        <p className={styles.body}>
          In the meantime, write to us at{' '}
          <a href="mailto:founder@parmanasystems.com">founder@parmanasystems.com</a> and we&rsquo;ll
          walk you through it directly.
        </p>
      </div>
    </section>
  );
}
