import styles from "./Problem.module.css";
import { FigureLabel } from "./FigureLabel";
import { GateSvg } from "./GateSvg";

const SOURCES = [
  "AI agent",
  "AI-generated action",
  "Agent workflow",
  "Autonomous system",
  "Machine decision",
];

const ROW_Y = [28, 84, 140, 196, 252];
const CONVERGE = { x: 100, y: 140 };

export function Problem() {
  return (
    <section className={styles.section} id="problem">
      <div className={styles.inner}>
        <FigureLabel n="02" title="The problem" />

        <div className={styles.grid}>
          <div className={styles.copy}>
            <p>
              Organizations are giving AI agents the ability to make decisions
              and execute actions on systems of record, but they lack a
              deterministic control point over what those agents are allowed
              to execute.
            </p>

            <p>
              The AI agent can generate the action. The organization needs to
              retain authority over whether that action becomes real execution.
              Parmana provides that control at the execution boundary.
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
              viewBox="0 0 100 280"
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
                title="A closed authorization boundary with machine-generated actions converging on it."
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