import styles from "./WhoItsFor.module.css";
import { FigureLabel } from "./FigureLabel";

const ITEMS = [
  {
    num: "01",
    label: "Moving money",
  },
  {
    num: "02",
    label: "Changing a customer record",
  },
  {
    num: "03",
    label: "Granting access or permissions",
  },
  {
    num: "04",
    label: "Taking an action in the real world",
  },
];

export function WhoItsFor() {
  return (
    <section
      className={styles.section}
      id="who-its-for"
    >
      <div className={styles.inner}>
        <FigureLabel
          n="07"
          title="Where it matters"
        />

        <p className={styles.intro}>
          Parmana belongs wherever an AI agent, application,
          or automated system can take a consequential action
          on behalf of a business.
        </p>

        <div className={styles.list}>
          {ITEMS.map((item) => (
            <div
              className={styles.item}
              key={item.num}
            >
              <span className={styles.itemNum}>
                {item.num}
              </span>

              <span className={styles.itemLabel}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          The principle is simple: when software can act on
          your behalf, your organization should determine what
          that software is authorized to execute and prevent
          everything else.
        </p>
      </div>
    </section>
  );
}