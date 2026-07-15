import styles from './CTA.module.css';

const CONTACT_MAILTO = 'mailto:founder@parmanasystems.com?subject=Design%20partner%20conversation';

interface CTAProps {
  heading?: string;
  body?: string;
  label?: string;
  mailto?: string;
}

export default function CTA({ heading, body, label = 'Become a design partner', mailto = CONTACT_MAILTO }: CTAProps) {
  return (
    <div className={`container ${styles.cta}`}>
      <hr className="rule" style={{ width: '100%', marginBottom: '1.5rem' }} />
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      {body && <p className={styles.body}>{body}</p>}
      <a className="button button--primary" href={mailto}>
        {label}
      </a>
    </div>
  );
}
