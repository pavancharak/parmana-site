import styles from './CompanyIntro.module.css';

export default function CompanyIntro() {
  return (
    <section className={`section ${styles.section}`} aria-label="Company stance">
      <div className="container">
        <span className="eyebrow">Company</span>
        <h1 className={styles.heading}>Built for regulated finance first.</h1>
        <div className={styles.body}>
          <p>
            Parmana is built in India for Indian financial services, where RBI, IRDAI, and SEBI expectations make
            unaccountable AI a non-starter. If authorization holds here, it holds anywhere.
          </p>
          <p>
            The AI has to ask permission before it acts, and everything it does leaves proof. Even a hacked AI can't
            skip that step. That's the whole company in three sentences.
          </p>
        </div>
      </div>
    </section>
  );
}
