import styles from './Verticals.module.css';

const ITEMS = [
  {
    label: 'Financial Services',
    line: 'Wire transfers, refunds, and account changes that follow the exact approval rule, not a best-effort judgment call.',
  },
  {
    label: 'Healthcare',
    line: 'Record updates and care actions that stay inside exactly what a clinician or protocol has authorized.',
  },
  {
    label: 'Insurance',
    line: "Claims and payout actions that execute only within the limits your underwriting rules define.",
  },
  {
    label: 'Government',
    line: "Case actions and benefit disbursements that never exceed what a caseworker's rules allow.",
  },
  {
    label: 'Enterprise Software',
    line: 'Every AI-triggered change to CRM, ERP, or ticketing systems checked against the same rule, every time.',
  },
  {
    label: 'Critical Operations',
    line: 'Infrastructure and operational changes an AI proposes, checked before anything in production actually changes.',
  },
];

export default function Verticals() {
  return (
    <section className={`section ${styles.section}`} aria-label="Where it fits">
      <div className="container">
        <span className="eyebrow">Where it fits</span>
        <h2 className={styles.heading}>Built for the systems that can't afford a wrong action.</h2>

        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <div className={styles.card} key={item.label}>
              <p className={styles.cardLabel}>{item.label}</p>
              <p className={styles.cardLine}>{item.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
