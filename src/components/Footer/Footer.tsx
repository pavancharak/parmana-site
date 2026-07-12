import PrMark from '../PrMark/PrMark';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.lockup}>
          <PrMark size={28} />
          <span className={styles.lockupText}>
            PARMANA <span aria-hidden="true">·</span> The authorization layer for AI execution
          </span>
        </div>

        <div className={styles.links}>
          <a href="mailto:founder@manthan.systems">founder@manthan.systems</a>
          <a href="https://www.linkedin.com/in/pavancharak/" target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <a href="https://theaiexecutionreview.substack.com/" target="_blank" rel="noreferrer noopener">
            Writing
          </a>
        </div>

        <p className={styles.copyright}>© 2026 Manthan Systems. All rights reserved.</p>

        <p className={styles.smallPrint}>
          Parmana enforces policies your organisation defines. Deployment architecture determines enforcement scope;
          in a standard deployment, execution flows through the Parmana gateway and AI systems hold no enterprise
          credentials.
        </p>
      </div>
    </footer>
  );
}
