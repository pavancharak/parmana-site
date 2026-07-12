import styles from './Commitment.module.css';

const PILOT_MAILTO = 'mailto:founder@manthan.systems?subject=Pilot%20conversation';

export default function Commitment() {
  return (
    <section className={styles.section} aria-label="The commitment">
      <div className={styles.watermark} aria-hidden="true">
        प्र
      </div>
      <div className="container">
        <h2 className={styles.statement}>Within the Parmana boundary, only authorized execution happens.</h2>
        <p className={styles.subStatement}>
          Not a promise. A property of how the system is built. Rules decide. The gateway verifies independently.
          The AI holds no keys. The record proves it.
        </p>
        <p className={styles.challenge}>
          If you don't believe it, good. Bring your hardest questions. We answer all of them, and we run the full
          chain live in every pilot conversation.
        </p>
        <a className={`button button--primary ${styles.cta}`} href={PILOT_MAILTO}>
          Start a pilot
        </a>
      </div>
    </section>
  );
}
