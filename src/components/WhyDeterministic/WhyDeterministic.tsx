import styles from './WhyDeterministic.module.css';

const industryPoints = [
  'AI judging AI.',
  'Probabilistic.',
  'Different answer possible on identical input.',
  'Explains itself after the fact.',
];

const parmanaPoints = [
  'Rules enforcing policy.',
  'Deterministic.',
  'Same answer on identical input, every time.',
  'Readable before anything runs.',
];

export default function WhyDeterministic() {
  return (
    <section className={styles.section} id="why-deterministic" aria-label="Why deterministic">
      <div className="container">
        <p className="kicker kicker--on-ink">WHY DETERMINISTIC</p>
        <h2 className={styles.headline}>Parmana is not an AI system.</h2>

        <p className={styles.statement}>
          No prompts. No guardrails. Nothing to jailbreak.
          <br />
          Only your organisation's policy and your defined execution.
        </p>

        <h3 className={styles.subHeadline}>Parmana doesn't use AI to govern AI.</h3>

        <p className={styles.body}>
          Most AI governance products are themselves AI. LLM judges. Classifiers. Prompt-based policy checks. Risk
          scores. A probabilistic system supervising a probabilistic system, and the same unanswerable question one
          layer up: what happens when the judge is wrong?
        </p>
        <p className={styles.body}>
          Parmana's authorization path contains no AI. No prompts. No guardrails. No model judgment. No confidence
          scores. Decisions come from deterministic policies your organisation wrote, evaluated the same way every
          time. A supervisor can read the exact rule that fired. Your risk team can test the policy and get the same
          answer on every run.
        </p>
        <p className={styles.body}>
          Jailbreaks are real. Guardrails are probabilistic. Prompts are not controls. That is precisely why none of
          them are in our decision path.
        </p>

        <p className={styles.moment}>
          The goal isn't to build an AI that can never be jailbroken. The goal is to build an enterprise where a
          jailbroken AI <span className={styles.momentAccent}>still cannot execute an unauthorized action</span>.
        </p>

        <div className={styles.comparison}>
          <div className={styles.industryPanel}>
            <p className={styles.panelLabel}>The industry's approach</p>
            <ul className={styles.panelList}>
              {industryPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className={styles.parmanaPanel}>
            <p className={styles.panelLabel}>Parmana's approach</p>
            <ul className={styles.panelList}>
              {parmanaPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
