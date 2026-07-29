import styles from './Verticals.module.css';

const ITEMS = [
  {
    label: 'Financial Services',
    line: 'AI can run wire transfers, refunds, and account changes at full speed, each one following the exact approval rule your business set.',
  },
  {
    label: 'Healthcare',
    line: 'AI can move faster on record updates and care actions, always staying inside exactly what a clinician or protocol has authorized.',
  },
  {
    label: 'Insurance',
    line: 'AI can process claims and payouts continuously, within the limits your underwriting rules define.',
  },
  {
    label: 'Government',
    line: "AI can handle case actions and benefit disbursements at scale, never exceeding what a caseworker's rules allow.",
  },
  {
    label: 'Enterprise Software',
    line: "Every AI-triggered change to CRM, ERP, or ticketing systems runs the moment it's approved, checked against the same rule every time.",
  },
  {
    label: 'Critical Operations',
    line: 'AI can propose infrastructure and operational changes with confidence, cleared before anything in production actually changes.',
  },
];

export default function Verticals() {
  return (
    <section className={`section ${styles.section}`} aria-label="Where it fits">
      <div className="container">
        <span className="eyebrow">Where it fits</span>
        <h2 className={styles.heading}>Built for the systems where getting it right matters most.</h2>

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
