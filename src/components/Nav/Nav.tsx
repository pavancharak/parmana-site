import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const CONTACT_MAILTO = 'mailto:founder@parmanasystems.com';

function navLinkClass({ isActive }: { isActive: boolean }) {
  return isActive ? `${styles.link} ${styles.linkActive}` : styles.link;
}

export default function Nav() {
  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.wordmark}>
          PARMANA
        </NavLink>
        <nav className={styles.links} aria-label="Primary">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/product" className={navLinkClass}>
            Product
          </NavLink>
          <NavLink to="/company" className={navLinkClass}>
            Company
          </NavLink>
          <a className={styles.link} href="https://docs.parmanasystems.com/">
            Docs
          </a>
          <a className={`button button--primary ${styles.contact}`} href={CONTACT_MAILTO}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
