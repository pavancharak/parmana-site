import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const CONTACT_MAILTO = 'mailto:founder@parmanasystems.com';

export default function Nav() {
  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.wordmark}>
          Parmana
        </NavLink>

        <nav className={styles.links} aria-label="Primary">
          <NavLink to="/product" className={styles.link}>
            Product
          </NavLink>
          <NavLink to="/company" className={styles.link}>
            Company
          </NavLink>
          <a className={styles.link} href="https://docs.parmanasystems.com/">
            Docs
          </a>
        </nav>

        <a className={`button button--primary ${styles.contact}`} href={CONTACT_MAILTO}>
          Write to us
        </a>
      </div>
    </header>
  );
}
