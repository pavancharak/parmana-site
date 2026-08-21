import styles from "./WhoItsFor.module.css";
import { FigureLabel } from "./FigureLabel";

const ITEMS = [
  { num: "01", label: "Financial transactions" },
  { num: "02", label: "Customer records" },
  { num: "03", label: "Operational systems" },
  { num: "04", label: "Enterprise APIs" },
];

export function WhoItsFor() {
  return (
    <section className={styles.section} id="who-its-for">
      <div className={styles.inner}>
        <FigureLabel n="06" title="Systems of record" />

        <p className={styles.intro}>
          Parmana is built for organizations where AI agents can make changes
          to authoritative business systems and where unauthorized execution
          can be costly, difficult to reverse, or subject to regulatory
          accountability.
        </p>

        <div className={styles.list}>
          {ITEMS.map((item) => (
            <div className={styles.item} key={item.num}>
              <span className={styles.itemNum}>{item.num}</span>
              <span className={styles.itemLabel}>{item.label}</span>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          Financial institutions, fintech companies, insurers, and large
          enterprises are natural early customers as they increasingly deploy
          AI agents across systems that hold authoritative customer,
          financial, and operational data.
        </p>
      </div>
    </section>
  );
}