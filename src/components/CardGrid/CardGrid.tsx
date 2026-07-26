import styles from './CardGrid.module.css';

interface CardItem {
  label: string;
  body: string;
}

interface CardGridProps {
  eyebrow: string;
  heading: string;
  items: CardItem[];
}

export default function CardGrid({ eyebrow, heading, items }: CardGridProps) {
  return (
    <section className={`section ${styles.section}`} aria-label={heading}>
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className={styles.heading}>{heading}</h2>

        <div className={styles.grid}>
          {items.map((item) => (
            <div className={styles.card} key={item.label}>
              <p className={styles.cardLabel}>{item.label}</p>
              <p className={styles.cardBody}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
