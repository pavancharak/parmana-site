import styles from './Developers.module.css';

const LINKS = [
  { label: 'Documentation', href: 'https://docs.parmanasystems.com/' },
  {
    label: 'API Reference',
    href: 'https://docs.parmanasystems.com/api-reference/introduction',
  },
  { label: 'GitHub', href: 'https://github.com/pavancharak/parmana-exp' },
];

export default function Developers() {
  return (
    <section className={`section ${styles.section}`} aria-label="Developers">
      <div className="container">
        <span className="eyebrow">Developers</span>

        <h2 className={styles.heading}>
          Build trusted AI execution into your applications.
        </h2>

        <p className={styles.body}>
          Get started with our documentation, API, and open-source examples to
          integrate Parmana into your AI systems.
        </p>

        <div className={styles.links}>
          {LINKS.map((link) => (
            <a className={styles.link} href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}