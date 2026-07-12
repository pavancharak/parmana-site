import styles from './WhatParmanaIsNot.module.css';

const points = [
  'Parmana does not make your AI smarter. It governs what your AI is allowed to execute.',
  'Parmana is not monitoring or observability. Those tell you what happened. Parmana determines what can happen.',
  'Parmana is not a human approval queue. Humans write the rules once. Enforcement runs at machine speed.',
  'Parmana does not replace your identity and access systems. It sits above them, governing machine-initiated actions.',
];

export default function WhatParmanaIsNot() {
  return (
    <section className={styles.section} aria-label="What Parmana is not">
      <div className="container">
        <p className="kicker kicker--on-ink">STRAIGHT ANSWERS</p>
        <h2 className={styles.headline}>What Parmana is not.</h2>

        <ul className={styles.list}>
          {points.map((point) => (
            <li className={styles.item} key={point}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
