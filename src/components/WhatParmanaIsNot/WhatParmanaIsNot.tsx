import styles from './WhatParmanaIsNot.module.css';

export default function WhatParmanaIsNot() {
  return (
    <section className={`section ${styles.section}`} aria-label="What Parmana is not">
      <div className="container">
        <span className="eyebrow">Straight answers</span>
        <h2 className={styles.heading}>What Parmana is not.</h2>
        <ul className={styles.list}>
          <li>
            <strong>No model, so nothing to trick.</strong> Authorization decisions come from rules your
            organisation wrote, not from an AI judging another AI.
          </li>
          <li>
            <strong>Not human-in-the-loop at runtime.</strong> Humans write policy once. Nothing waits on a person
            after that.
          </li>
          <li>
            <strong>Not monitoring.</strong> Parmana allows or blocks before execution, every time, rather than
            telling you afterward what happened.
          </li>
        </ul>
      </div>
    </section>
  );
}
