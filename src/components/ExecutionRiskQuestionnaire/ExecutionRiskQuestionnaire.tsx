import { useEffect, useState } from 'react';
import styles from './ExecutionRiskQuestionnaire.module.css';

type Answer = 'yes' | 'no' | 'unsure';

const questions = [
  {
    question: 'Do you deploy AI agents that can access or act on your business systems?',
    insight:
      'Whether you deploy an agent is only part of the risk. Your customers, employees, partners, vendors, and third-party applications may use AI agents that interact with your systems.',
  },
  {
    question: 'Can an external AI agent interact with your business systems through APIs, applications, or other access paths?',
    insight:
      'You can be exposed to AI-agent execution even when the agent was not built or deployed by your organization. The boundary is your systems—not who deployed the agent.',
  },
  {
    question: 'Can you determine exactly what an AI agent is authorized to execute on your systems?',
    insight:
      'AI capability does not create institutional authority. Your business must determine which actions are allowed before execution occurs.',
  },
  {
    question: 'Can an AI agent execute an action your institution has not explicitly authorized?',
    insight:
      'If the answer is yes or not sure, your execution boundary may depend on the AI behaving correctly. Parmana moves authority to the execution boundary so the agent cannot decide what your institution allows.',
  },
];

export default function ExecutionRiskQuestionnaire({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setStep(0);
      setAnswers([]);
    }
  }, [open]);

  if (!open) return null;

  const complete = step >= questions.length;
  const question = questions[step];
  const riskSignals = answers.filter((answer) => answer !== 'no').length;

  const selectAnswer = (answer: Answer) => {
    setAnswers((current) => [...current.slice(0, step), answer]);
    setStep((current) => current + 1);
  };

  const restart = () => {
    setStep(0);
    setAnswers([]);
  };

  return (
    <div className={styles.overlay} role="presentation" onMouseDown={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="execution-risk-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className={styles.close} type="button" onClick={onClose} aria-label="Close questionnaire">
          ×
        </button>

        <div className={styles.header}>
          <p className={`mono ${styles.eyebrow}`}>AI EXECUTION AUTHORITY</p>
          <h2 id="execution-risk-title">
            {complete ? 'Your AI execution risk' : 'Do you control what AI can execute?'}
          </h2>
          {!complete && (
            <p className={styles.intro}>
              You do not have to deploy an AI agent to be exposed to one. This short assessment
              helps reveal where execution authority may be exposed.
            </p>
          )}
        </div>

        {complete ? (
          <div className={styles.result}>
            <div className={styles.resultScore}>
              {riskSignals === 0 ? 'CONTROLLED' : riskSignals <= 2 ? 'EXPOSED' : 'HIGH EXPOSURE'}
            </div>
            <p className={styles.resultLead}>
              {riskSignals === 0
                ? 'Your answers indicate that your organization has a clear execution boundary.'
                : 'Your answers indicate that your execution boundary may depend on AI behavior or assumptions about who deployed the agent.'}
            </p>
            <p className={styles.resultCopy}>
              The critical question is not whether an AI agent is yours. It is whether your
              institution controls what that agent can execute on your systems.
            </p>
            <div className={styles.principle}>
              <p className={`mono ${styles.principleLabel}`}>PARMANA PRINCIPLE</p>
              <p>Your authority determines what gets executed—not the AI agent.</p>
            </div>
            <div className={styles.resultActions}>
              <a className="button button--primary" href="#how-parmana-fits" onClick={onClose}>
                See How Parmana Works
              </a>
              <button className="button" type="button" onClick={restart}>
                Retake Assessment
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.questionArea}>
            <div className={styles.progress} aria-label={`Question ${step + 1} of ${questions.length}`}>
              <span>0{step + 1} / 0{questions.length}</span>
              <div className={styles.progressTrack}>
                <span style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
              </div>
            </div>
            <h3>{question.question}</h3>
            <div className={styles.options}>
              {(['Yes', 'No', 'Not sure'] as const).map((label) => (
                <button
                  key={label}
                  type="button"
                  className={styles.option}
                  onClick={() => selectAnswer(label === 'Yes' ? 'yes' : label === 'No' ? 'no' : 'unsure')}
                >
                  <span>{label}</span>
                  <span aria-hidden="true">→</span>
                </button>
              ))}
            </div>
            <div className={styles.insight}>
              <p className={`mono ${styles.insightLabel}`}>WHY THIS MATTERS</p>
              <p>{question.insight}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
