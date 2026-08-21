import styles from "./Problem.module.css";
import { FigureLabel } from "./FigureLabel";
import { GateSvg } from "./GateSvg";

const SOURCES = [
  "AI agent",
  "Employee",
  "Connected app",
  "Automated system",
];

const ROW_Y = [28, 84, 140, 196];
const CONVERGE = { x: 100, y: 112 };

export function Problem() {
  return (
    <section className={styles.section} id="problem">
      <div className={styles.inner}>
        <FigureLabel n="02" title="The problem" />

        <div className={styles.grid}>
          <div className={styles.copy}>
            <p>
              An AI agent can make a decision and act on your systems.
              But the organization that owns those systems may have no
              independent control over what the agent actually does.
            </p>

            <p>
              The problem isn't whether the AI is good or bad. The problem
              is what happens when a machine can turn a decision into a real
              action without a final check from the organization.
            </p>
          </div>

          <div className={styles.diagram}>
            <div className={styles.sources}>
              {SOURCES.map((label) => (
                <span key={label} className={styles.source}>
                  {label}
                </span>
              ))}
            </div>

            <svg
              className={styles.svg}
              viewBox="0 0 100 224"
              preserveAspectRatio="none"
              role="presentation"
              aria-hidden="true"
            >
              {ROW_Y.map((y) => (
                <line
                  key={y}
                  x1={0}
                  y1={y}
                  x2={CONVERGE.x}
                  y2={CONVERGE.y}
                  stroke="var(--line)"
                  strokeWidth={1.5}
                />
              ))}
            </svg>

            <div className={styles.gateBox}>
              <GateSvg
                titleId="problem-gate-title"
                title="Different sources reach one control point before an action can happen."
                className={styles.gateIcon}
                tone="ink"
                tokenX={20}
                openAmount={0}
                showToken={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}