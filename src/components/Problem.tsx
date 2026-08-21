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
              AI systems can make decisions and act on systems of record at
              machine speed. But the institution that owns those systems still
              needs deterministic control over what the machine is allowed to
              execute.
            </p>

            <p>
              The problem isn't whether the AI is good or bad. A machine can
              follow its instructions exactly and still produce an action the
              institution never intended to authorize.
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
                title="Different sources converge at the execution authority boundary."
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