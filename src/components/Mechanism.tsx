import styles from "./Mechanism.module.css";
import { FigureLabel } from "./FigureLabel";
import { GateSvg } from "./GateSvg";

const STEPS = [
  {
    num: "01",
    title: "Propose",
    copy: "An AI agent, employee, app, or automated system proposes an action.",
    tokenX: 20,
    openAmount: 0,
    pulse: false,
    title2: "A machine-generated action reaches the authority boundary.",
  },
  {
    num: "02",
    title: "Authorize",
    copy: "Parmana deterministically checks whether the action is permitted under your organization's authority.",
    tokenX: 120,
    openAmount: 0,
    pulse: true,
    title2: "Parmana determines whether the action is authorized.",
  },
  {
    num: "03",
    title: "Execute",
    copy: "Authorized actions proceed. Unauthorized actions are rejected before they reach the system of record.",
    tokenX: 220,
    openAmount: 1,
    pulse: false,
    title2: "Only an authorized action continues to execution.",
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