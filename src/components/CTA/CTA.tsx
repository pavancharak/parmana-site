import styles from './CTA.module.css';

const CONTACT_MAILTO = 'mailto:founder@parmanasystems.com';

interface CTAProps {
  heading?: string;
  body?: string;
  label?: string;
  mailto?: string;
}

export default function CTA({
  heading = 'Keep human authority in control of AI execution.',
  body = "If you're deploying AI agents and want them switched on rather than stuck in pilot, write to us: founder@parmanasystems.com",
  label = 'Write to us',
  mailto = CONTACT_MAILTO,
}: CTAProps) {
  return (
    <div className={`container ${styles.cta}`}>
      <hr className="rule" style={{ width: '100%', marginBottom: '1.5rem' }} />

      <h2 className={styles.heading}>{heading}</h2>

      <p className={styles.body}>{body}</p>

      <a className="button button--primary" href={mailto}>
        {label}
      </a>
    </div>
  );
}