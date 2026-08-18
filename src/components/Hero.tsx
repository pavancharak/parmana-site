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

  const tokenX = phase === "start" ? START_X : phase === "approach" ? GATE_X : END_X;
  const openAmount = phase === "through" ? 1 : 0;
  const duration = reducedMotion ? 1 : phase === "approach" ? 1300 : 900;

  return (
    <section className={styles.hero} id="top">
      <div className={styles.inner}>
        <div>
          <div className={styles.topRow}>
            <span className={styles.eyebrow}>Institutional Authority Infrastructure</span>
            <span className={styles.badge}>Made in India</span>
          </div>
          <h1 className={styles.headline}>Only what your business authorizes should ever happen.</h1>
          <p className={styles.dek}>
            Parmana checks every action against what you've actually approved, before it happens, no
            matter who or what is asking.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#how-it-works">
              Explore Parmana
            </a>
            <a className={styles.secondary} href="mailto:founder@parmanasystems.com">
              Write to us
            </a>
          </div>
        </div>
        <div>
          <div className={styles.gateWrap}>
            <GateSvg
              titleId="hero-gate-title"
              title="A request travels toward the gate, is checked, and only continues if it is allowed."
              tone="ink"
              tokenX={tokenX}
              openAmount={openAmount}
              durationMs={duration}
            />
          </div>
          <p className={styles.gateCaption}>every request reaches the same checkpoint</p>
        </div>
      </div>
    </section>
  );
}
