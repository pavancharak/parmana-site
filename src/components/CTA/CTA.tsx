import styles from './CTA.module.css';

const CONTACT_MAILTO = 'mailto:founder@parmanasystems.com';

interface CTAProps {
  heading: string;
  label: string;
  supporting?: string;
  mailto?: string;
}

export default function CTA({ heading, label, supporting, mailto = CONTACT_MAILTO }: CTAProps) {
  return (
    <section className={`section ${styles.section}`} aria-label="Get in touch">
      <div className={`container ${styles.cta}`}>
        <h2 className={styles.heading}>{heading}</h2>

        <a className={`button button--primary ${styles.button}`} href={mailto}>
          {label}
        </a>

        {supporting ? <p className={styles.supporting}>{supporting}</p> : null}
      </div>
    </section>
  );
}
