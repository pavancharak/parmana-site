import PrMark from '../PrMark/PrMark';
import styles from './Nav.module.css';

const PILOT_MAILTO = 'mailto:founder@manthan.systems?subject=Pilot%20conversation';

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo} aria-label="Parmana, home">
          <PrMark size={34} />
          <span className={styles.wordmark}>PARMANA</span>
        </a>
        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.links}>
            <li>
              <a href="#how-it-works">How it works</a>
            </li>
            <li>
              <a href="#why-deterministic">Why deterministic</a>
            </li>
            <li>
              <a href="#design-partners">Design partners</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
        <a className={`button button--primary ${styles.cta}`} href={PILOT_MAILTO}>
          Start a pilot
        </a>
      </div>
    </header>
  );
}
