import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="about" aria-label="About the name">
      <div className="container">
        <p className="kicker kicker--on-ink">THE NAME</p>
        <h2 className={styles.headline} lang="hi">
          प्रमाण
        </h2>
        <p className={styles.body}>
          Parmana comes from pramāṇa, the Sanskrit concept of a valid means of knowing. Indian philosophy spent two
          thousand years asking what separates knowledge from belief, proof from assertion. That question is now the
          question of the AI era: not what did the machine say, but how do we know what it did.
        </p>
        <p className={styles.body}>
          We build from India, for the strictest regulatory ground first, because systems that earn trust here earn
          it anywhere.
        </p>
        <p className={styles.teamLine}>Parmana is built by Manthan Systems.</p>
      </div>
    </section>
  );
}
