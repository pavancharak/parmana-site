import styles from "./WhoItsFor.module.css";
import { FigureLabel } from "./FigureLabel";

const ITEMS = [
  { num: "01", label: "Moving money" },
  { num: "02", label: "Changing a customer record" },
  { num: "03", label: "Giving someone access" },
  { num: "04", label: "Taking an action in the real world" },
];

export function WhoItsFor() {
  return (
    <section className={styles.section} id="who-its-for">
      <div className={styles.inner}>
        <FigureLabel n="06" title="Where it matters" />

        <p className={styles.intro}>
          Parmana matters wherever an AI agent or automated system can
          make a decision that changes something important for your
          business.
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
          The need is universal: whenever a machine can take a consequential
          action, the organization should be able to determine what it is
          allowed to execute and prevent everything else.
        </p>
      </div>
    </section>
  );
}