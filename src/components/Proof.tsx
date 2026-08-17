import { useEffect, useRef, useState } from "react";
import styles from "./Proof.module.css";
import { FigureLabel } from "./FigureLabel";
import { GateSvg, type GateTone } from "./GateSvg";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const START_X = 20;
const GATE_X = 120;
const END_X = 220;
const BLOCKED_X = 86;

type Outcome = "go" | "stop";

interface Request {
  id: string;
  label: string;
  outcome: Outcome;
}

const REQUESTS: Request[] = [
  { id: "refund", label: "Refund a customer $40", outcome: "go" },
  { id: "address", label: "Update a customer's shipping address", outcome: "go" },
  { id: "wire", label: "Move $250,000 to an unfamiliar account", outcome: "stop" },
  { id: "export", label: "Export the entire customer database", outcome: "stop" },
];

type Phase = "idle" | "approaching" | "resolved";

export function Proof() {
  const reducedMotion = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const timeouts = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timeouts.current.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  function send(request: Request) {
    timeouts.current.forEach((t) => window.clearTimeout(t));
    timeouts.current = [];
    setActiveId(request.id);

    if (reducedMotion) {
      setPhase("resolved");
      return;
    }

    setPhase("idle");
    const t1 = window.setTimeout(() => setPhase("approaching"), 30);
    const t2 = window.setTimeout(() => setPhase("resolved"), 30 + 700);
    timeouts.current = [t1, t2];
  }

  const active = REQUESTS.find((r) => r.id === activeId) ?? null;
  const outcome = active?.outcome ?? null;

  let tokenX = START_X;
  let openAmount = 0;
  let tone: GateTone = "ink";
  let duration = 700;
  let showToken = phase !== "idle" || activeId !== null;

  if (phase === "approaching") {
    tokenX = GATE_X;
    tone = "ink";
    duration = reducedMotion ? 1 : 700;
  } else if (phase === "resolved" && outcome === "go") {
    tokenX = END_X;
    openAmount = 1;
    tone = "go";
    duration = reducedMotion ? 1 : 500;
  } else if (phase === "resolved" && outcome === "stop") {
    tokenX = BLOCKED_X;
    openAmount = 0;
    tone = "stop";
    duration = reducedMotion ? 1 : 350;
  } else {
    showToken = false;
  }

  return (
    <section className={styles.section} id="proof">
      <div className={styles.inner}>
        <FigureLabel n="05" title="Proof" />
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p>
              This isn't a mockup. It's a working system, tested end to end against a real business
              system, with real transactions, not just described on paper.
            </p>
            <p>
              Every decision it makes leaves a sealed, checkable record. Try it yourself below, with
              a few example requests.
            </p>
          </div>
          <div className={styles.demo}>
            <span className={styles.prompt}>Send a request through the gate</span>
            <div className={styles.requests} role="group" aria-label="Example requests">
              {REQUESTS.map((request) => (
                <button
                  key={request.id}
                  type="button"
                  className={`${styles.request} ${activeId === request.id ? styles.requestActive : ""}`}
                  onClick={() => send(request)}
                  aria-pressed={activeId === request.id}
                >
                  {request.label}
                </button>
              ))}
            </div>
            <div className={styles.gateStage}>
              <GateSvg
                titleId="proof-gate-title"
                title="The interactive gate, responding to your chosen request"
                tone={tone}
                tokenX={tokenX}
                openAmount={openAmount}
                showToken={showToken}
                durationMs={duration}
              />
            </div>
            <div className={styles.result} role="status" aria-live="polite">
              {phase === "resolved" && outcome === "go" && (
                <span className={styles.resultGo}>ALLOWED, the action was completed.</span>
              )}
              {phase === "resolved" && outcome === "stop" && (
                <span className={styles.resultStop}>BLOCKED, held at the gate, nothing happened.</span>
              )}
              {phase !== "resolved" && (
                <span className={styles.resultIdle}>
                  {activeId ? "Checking…" : "Choose a request above to send it through."}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
