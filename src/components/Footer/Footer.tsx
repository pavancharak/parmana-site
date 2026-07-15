import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.wordmark}>PARMANA</p>
          <p className={styles.tagline}>The authorization layer for AI execution.</p>
        </div>

        <nav className={styles.pageLinks} aria-label="Pages">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/company">Company</Link>
        </nav>

        <div className={styles.linkRow}>
          <a href="https://docs.parmanasystems.com/">Docs</a>
          <a href="https://github.com/pavancharak/parmana-exp">GitHub</a>
          <a href="https://www.linkedin.com/in/pavancharak/">LinkedIn</a>
          <a href="mailto:founder@parmanasystems.com">founder@parmanasystems.com</a>
        </div>
      </div>
    </footer>
  );
}
