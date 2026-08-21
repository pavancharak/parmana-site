import styles from "./Nav.module.css";

const LINKS = [
  { href: "#problem", label: "The problem" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#proof", label: "Proof" },
  { href: "#who-its-for", label: "Systems of record" },
  { href: "#company", label: "Company" },
];

export function Nav() {
  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a href="/" className={styles.wordmarkLink}>
          <span className={styles.wordmark}>Parmana</span>
        </a>

        <nav className={styles.links} aria-label="Section">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className={styles.cta}
          href="mailto:founder@parmanasystems.com"
        >
          Talk to us
        </a>
      </div>
    </header>
  );
}