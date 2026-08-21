import styles from "./Mechanism.module.css";
import { FigureLabel } from "./FigureLabel";
import { GateSvg } from "./GateSvg";

const STEPS = [
  {
    num: "01",
    title: "Ask",
    copy: "An AI agent, employee, app, or automated system asks to do something.",
    tokenX: 20,
    openAmount: 0,
    pulse: false,
    title2: "An action reaches Parmana before it happens.",
  },
  {
    num: "02",
    title: "Check",
    copy: "Parmana checks the action against what your organization has allowed.",
    tokenX: 120,
    openAmount: 0,
    pulse: true,
    title2: "The action is checked before it can reach your system.",
  },
  {
    num: "03",
    title: "Act",
    copy: "If it is allowed, it happens. If it isn't, it stops.",
    tokenX: 220,
    openAmount: 1,
    pulse: false,
    title2: "Only an allowed action continues.",
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