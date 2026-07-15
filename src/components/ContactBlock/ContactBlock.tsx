import styles from './ContactBlock.module.css';

export default function ContactBlock() {
  return (
    <section className={`section ${styles.section}`} aria-label="Contact">
      <div className="container">
        <span className="eyebrow">Contact</span>
        <p style={{ marginTop: '1rem' }}>
          <a className={styles.link} href="mailto:founder@parmanasystems.com">
            founder@parmanasystems.com
          </a>
        </p>
      </div>
    </section>
  );
}
