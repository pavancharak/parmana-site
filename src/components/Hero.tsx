import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { GateSvg } from "./GateSvg";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const START_X = 20;
const GATE_X = 120;
const END_X = 220;

type Phase = "start" | "approach" | "through";

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const [phase, setPhase] = useState<Phase>(reducedMotion ? "through" : "start");

  useEffect(() => {
    if (reducedMotion) return;

    const t1 = window.setTimeout(() => setPhase("approach"), 450);
    const t2 = window.setTimeout(() => setPhase("through"), 450 + 1300);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [reducedMotion]);

  const tokenX =
    phase === "start" ? START_X : phase === "approach" ? GATE_X : END_X;

  const openAmount = phase === "through" ? 1 : 0;
  const duration = reducedMotion ? 1 : phase === "approach" ? 1300 : 900;

  return (
    <section className={styles.hero} id="top">
      <div className={styles.inner}>
        <div>
          <div className={styles.topRow}>
            <span className={styles.eyebrow}>
              Execution Authority Infrastructure
            </span>
            <span className={styles.badge}>Made in India</span>
          </div>

          <h1 className={styles.headline}>
            Organizations lack deterministic control over AI agents acting on
            systems of record.
          </h1>

          <p className={styles.dek}>
            Parmana provides that control. It deterministically authorizes or
            blocks machine-generated actions before they become execution.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="#how-it-works">
              See how Parmana works
            </a>
            <a
              className={styles.secondary}
              href="mailto:founder@parmanasystems.com"
            >
              Talk to us
            </a>
          </div>
        </div>

        <div>
          <div className={styles.gateWrap}>
            <GateSvg
              titleId="hero-gate-title"
              title="A machine-generated action approaches an authorization boundary and continues only when authorized."
              tone="ink"
              tokenX={tokenX}
              openAmount={openAmount}
              durationMs={duration}
            />
          </div>

          <p className={styles.gateCaption}>
            every machine-generated action reaches the same control point
          </p>
        </div>
      </div>
    </section>
  );
}