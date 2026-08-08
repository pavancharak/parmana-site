import { useState } from 'react';
import styles from './Hero.module.css';
import ExecutionRiskQuestionnaire from '../ExecutionRiskQuestionnaire/ExecutionRiskQuestionnaire';

export default function Hero() {
  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);

  return (
    <>
      <section className={styles.hero} aria-label="Introduction">
        <div className={`container ${styles.inner}`}>
          <p className={`mono ${styles.mission}`}>
            EXECUTION AUTHORIZATION INFRASTRUCTURE
          </p>

          <h1>If AI can decide what gets executed on your systems, you risk losing your customers' trust.</h1>

          <p className={styles.subline}>
            Parmana ensures your authority determines what gets executed—not the AI agent.
          </p>

          <div className={styles.actions}>
            <button
              className={`button button--primary ${styles.cta}`}
              type="button"
              onClick={() => setQuestionnaireOpen(true)}
            >
              Discover Your AI Execution Risk
            </button>
            <a className="button" href="#how-parmana-fits">
              Explore Architecture
            </a>
          </div>
        </div>
      </section>

      <ExecutionRiskQuestionnaire
        open={questionnaireOpen}
        onClose={() => setQuestionnaireOpen(false)}
      />
    </>
  );
}
