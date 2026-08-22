import styles from "./Mechanism.module.css";
import { FigureLabel } from "./FigureLabel";
import { GateSvg } from "./GateSvg";

const STEPS = [
  {
    num: "01",
    title: "An action is requested",
    copy:
      "An AI agent, application, employee, or integration requests a consequential action.",
    tokenX: 20,
    openAmount: 0,
    pulse: false,
    title2:
      "A requested action approaches the Parmana authorization boundary.",
  },
  {
    num: "02",
    title: "Authority is evaluated",
    copy:
      "Parmana evaluates the request against the authority and business policy governing that action.",
    tokenX: 120,
    openAmount: 0,
    pulse: true,
    title2:
      "Parmana evaluates whether the requested action is authorized.",
  },
  {
    num: "03",
    title: "Execution is enforced",
    copy:
      "Authorized actions may proceed. Unauthorized actions are blocked before execution.",
    tokenX: 220,
    openAmount: 1,
    pulse: false,
    title2:
      "Only an authorized action crosses the boundary to execution.",
  },
];

export function Mechanism() {
  return (
    <section className={styles.section} id="mechanism">
      <div className={styles.inner}>
        <FigureLabel
          n="03"
          title="The Parmana boundary"
        />

        <div className={styles.intro}>
          <h2>
            Authorization happens before execution.
          </h2>

          <p>
            Parmana sits between the request and the system that
            executes it. The requesting agent does not decide
            whether it has authority. Parmana does.
          </p>
        </div>

        <div className={styles.steps}>
          {STEPS.map((step) => (
            <div className={styles.step} key={step.num}>
              <span className={styles.stepNum}>
                {step.num}
              </span>

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

              <h3 className={styles.stepTitle}>
                {step.title}
              </h3>

              <p className={styles.stepCopy}>
                {step.copy}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.boundary}>
          <span>PARMANA</span>
          <strong>
            Authorization is enforced before execution.
          </strong>
        </div>
      </div>
    </section>
  );
}