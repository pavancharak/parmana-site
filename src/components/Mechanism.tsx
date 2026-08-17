import styles from "./Mechanism.module.css";
import { FigureLabel } from "./FigureLabel";
import { GateSvg } from "./GateSvg";

const STEPS = [
  {
    num: "01",
    title: "Ask",
    copy: "Something requests an action, an AI agent, a person, an app, it doesn't matter which.",
    tokenX: 20,
    openAmount: 0,
    pulse: false,
    title2: "A request arrives and approaches the gate, unresolved.",
  },
  {
    num: "02",
    title: "Check",
    copy: "The request is checked against what your business has actually authorized, instantly.",
    tokenX: 120,
    openAmount: 0,
    pulse: true,
    title2: "The request is held at the gate and checked.",
  },
  {
    num: "03",
    title: "Act",
    copy: "Only what's allowed goes through. Nothing else can.",
    tokenX: 220,
    openAmount: 1,
    pulse: false,
    title2: "The request has passed through an open gate.",
  },
];

export function Mechanism() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.inner}>
        <FigureLabel n="03" title="How it works" />
        <div className={styles.steps}>
          {STEPS.map((step) => (
            <div className={styles.step} key={step.num}>
              <span className={styles.stepNum}>{step.num}</span>
              <GateSvg
                titleId={`mechanism-gate-${step.num}`}
                title={step.title2}
                className={styles.gateIcon}
                tone="ink"
                tokenX={step.tokenX}
                openAmount={step.openAmount}
                pulseToken={step.pulse}
                durationMs={1}
              />
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepCopy}>{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
