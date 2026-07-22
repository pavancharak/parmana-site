import styles from './CTA.module.css';

const CONTACT_MAILTO =
  'mailto:founder@parmanasystems.com?subject=Design%20partner%20conversation';

interface CTAProps {
  heading?: string;
  body?: string;
  label?: string;
  mailto?: string;
}

export default function CTA({
  heading = 'Keep human authority in control of AI execution.',
  body = 'See how Parmana verifies every AI action before it reaches your business systems, ensuring AI operates within the authority your organization defines.',
  label = 'Become a Design Partner',
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