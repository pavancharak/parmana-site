import styles from './ValueList.module.css';

interface ValueItem {
  label: string;
  line: string;
}

interface ValueListProps {
  eyebrow: string;
  heading: string;
  items: ValueItem[];
}

export default function ValueList({ eyebrow, heading, items }: ValueListProps) {
  return (
    <section className={`section ${styles.section}`} aria-label={heading}>
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className={styles.heading}>{heading}</h2>

        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.label}>
              <strong>{item.label}.</strong> {item.line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
