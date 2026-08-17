import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.wordmark}>Parmana</span>
        <div className={styles.meta}>
          <span>AI may decide. You decide what becomes real.</span>
          <a href="mailto:founder@parmanasystems.com">founder@parmanasystems.com</a>
          <span>© {year} Parmana</span>
        </div>
      </div>
    </footer>
  );
}
