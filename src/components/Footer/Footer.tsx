import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.wordmark}>Parmana</p>

        <nav className={styles.linkRow} aria-label="Footer">
          <a href="/product">Product</a>
          <a href="/company">Company</a>
          <a href="https://docs.parmanasystems.com/">Docs</a>
          <a href="mailto:founder@parmanasystems.com">founder@parmanasystems.com</a>
        </nav>

        <p className={`mono ${styles.copyright}`}>© {year} Parmana Systems. All rights reserved.</p>
      </div>
    </footer>
  );
}
