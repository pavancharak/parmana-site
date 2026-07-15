import styles from './HowItWorks.module.css';

const STEPS = [
  {
    title: 'Propose',
    body: 'Your AI proposes an action.',
  },
  {
    title: 'Authorize',
    body: 'Parmana checks it against rules you wrote. Allow or block. Nothing waits on a person.',
  },
  {
    title: 'Execute',
    body: 'The gateway executes with credentials the AI never held.',
  },
  {
    title: 'Receipt',
    body: 'A signed record that survives any audit.',
  },
];

export default function HowItWorks() {
  return (
    <section className={`section ${styles.section}`} aria-label="How it works">
      <div className="container">
        <span className="eyebrow">How it works</span>
        <h2 className={styles.heading}>A true sequence, earned at every step.</h2>
        <ol className={styles.list}>
          {STEPS.map((step, index) => (
            <li className={styles.step} key={step.title}>
              <span className={styles.number}>{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
