import styles from './FeatureGrid.module.css';

const CARDS = [
  {
    title: 'Prevent unintended actions',
    body: 'Stop an action before it happens, not after the damage is already done.',
  },
  {
    title: 'Apply business rules consistently',
    body: 'The same rules apply every time, regardless of which AI, model, or team is behind the action.',
  },
  {
    title: 'Keep people involved when required',
    body: "Some actions still need a person to sign off. That step never gets skipped or forgotten.",
  },
  {
    title: 'Understand why every action happened',
    body: "Every check leaves a clear record of what was allowed, what wasn't, and why.",
  },
  {
    title: 'Adopt AI with confidence',
    body: 'Put AI into real operations without opening up new risk to the business.',
  },
];

export default function FeatureGrid() {
  return (
    <section className={`section ${styles.section}`} aria-label="Why it matters">
      <div className="container">
        <h2 className={styles.heading}>Why it matters</h2>

        <ul className={styles.grid}>
          {CARDS.map((card) => (
            <li className={`panel ${styles.card}`} key={card.title}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardBody}>{card.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
