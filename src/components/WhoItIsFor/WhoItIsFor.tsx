import styles from './WhoItIsFor.module.css';

export default function WhoItIsFor() {
  return (
    <section className={`section ${styles.section}`} aria-label="Who it is for">
      <div className="container">
        <span className="eyebrow">Who it's for</span>
        <h2 className={styles.heading}>Indian financial services, first.</h2>
        <div className={styles.body}>
          <p>
            Institutions regulated by RBI, IRDAI, and SEBI, in that order. This is the ground where an AI's actions
            carry the most weight and where the question of what it is allowed to do has the fewest good answers
            today.
          </p>
          <p>
            A card network does not trust the merchant. It authorizes each transaction against the issuer's rules
            and produces a record both sides accept. Parmana is that network for AI execution.
          </p>
        </div>
      </div>
    </section>
  );
}
