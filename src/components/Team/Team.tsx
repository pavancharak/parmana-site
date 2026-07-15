import styles from './Team.module.css';

export default function Team() {
  return (
    <section className={`section ${styles.section}`} aria-label="Team">
      <div className="container">
        <span className="eyebrow">Team</span>
        <h2 className={styles.heading}>Who's building it.</h2>
        <div className={styles.grid}>
          <div className={styles.member}>
            <h3>
              <a href="https://www.linkedin.com/in/pavancharak/">Pavan Charak</a>, CEO and System Architect
            </h3>
            <p>Designs and builds the policy engine, gateway, and receipt system end to end.</p>
          </div>
          <div className={styles.member}>
            <h3>Mohinder Singh Charak, Co-founder and Policy Advisor</h3>
            <p>Brings decades of experience in regulated financial operations to how Parmana's policies are shaped.</p>
          </div>
          <div className={styles.member}>
            <h3>K. Venkata Abhigna, Head of Partnerships</h3>
            <p>Works with design partners in Indian financial services to bring their real use cases into Parmana.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
