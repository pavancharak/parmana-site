import styles from "./Problem.module.css";
import { FigureLabel } from "./FigureLabel";
import { GateSvg } from "./GateSvg";

const SOURCES = ["AI agent", "Employee", "Connected app", "Automated system", "Attacker"];

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
              Most businesses have no independent way to check, before the fact, whether a specific
              action was actually allowed to happen. They find out after, if they find out at all.
            </p>
            <p>
              An AI agent, an employee, a connected app, an automated system, sometimes an attacker,
              all trying to reach the same door. Right now, almost nothing stands at that door and
              checks.
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
                title="A closed gate, unchecked requests converging on it"
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
