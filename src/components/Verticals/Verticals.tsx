import styles from './Verticals.module.css';

const ITEMS = [
  'Financial Services',
  'Healthcare',
  'Insurance',
  'Government',
  'Enterprise Software',
  'Critical Operations',
];

export default function Verticals() {
  return (
    <section className={`section ${styles.section}`} aria-label="Designed for systems that matter">
      <div className="container">
        <h2 className={styles.heading}>Designed for systems that matter</h2>
        <ul className={styles.list}>
          {ITEMS.map((item) => (
            <li className={styles.item} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
