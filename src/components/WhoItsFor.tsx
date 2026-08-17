import styles from "./WhoItsFor.module.css";
import { FigureLabel } from "./FigureLabel";

const ITEMS = [
  { num: "01", label: "Moving money" },
  { num: "02", label: "Changing a record" },
  { num: "03", label: "Granting access" },
  { num: "04", label: "Acting in the physical world" },
];

export function WhoItsFor() {
  return (
    <section className={styles.section} id="who-its-for">
      <div className={styles.inner}>
        <FigureLabel n="06" title="Who it's for" />
        <p className={styles.intro}>
          Parmana isn't only for regulated companies. The real line is simpler: any business where a
          wrong action is expensive and hard to undo needs a gate.
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
          Banks, insurers, and similar regulated industries are usually first through the door, because
          they already have to answer for actions like these. They're not the only ones who need it.
        </p>
      </div>
    </section>
  );
}
