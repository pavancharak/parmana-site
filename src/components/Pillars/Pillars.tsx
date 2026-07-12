import styles from './Pillars.module.css';

const pillars = [
  {
    title: 'Rules you write',
    body: "Every action the AI proposes is checked against your policy before anything executes. Same input, same decision, every time. Anything the rules don't allow is blocked by default. No exceptions, no queue, no judgment calls at machine speed.",
  },
  {
    title: 'Keys the AI never holds',
    body: 'The agent never possesses your system credentials. Access exists only at the moment of an approved execution, is used once, and is destroyed, including when execution fails. A compromised agent cannot leak what it never had.',
  },
  {
    title: 'Proof no one can fake',
    body: 'Every action, approved and blocked alike, produces a cryptographically signed record that your auditor, your board, or your regulator can verify independently, without trusting our software or our word.',
  },
];

export default function Pillars() {
  return (
    <section className={styles.section} aria-label="What you get">
      <div className="container">
        <p className="kicker">WHAT YOU GET</p>
        <div className={styles.grid}>
          {pillars.map((pillar, index) => (
            <article className={styles.card} key={pillar.title}>
              <p className={styles.number}>0{index + 1}</p>
              <h3 className={styles.title}>{pillar.title}</h3>
              <p className={styles.body}>{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
