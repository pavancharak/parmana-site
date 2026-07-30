import { useEffect, useRef, useState } from 'react';
import styles from './CheckpointDiagram.module.css';

type Position = 'start' | 'gate' | 'end' | 'hidden';
type GateState = 'idle' | 'pulse' | 'stop';

const AUTHORIZED_STATUS = 'Authorized action reaches Business Systems.';

function wait(ms: number) {
  return new Promise<void>((resolve) => window.setTimeout(resolve, ms));
}

export default function CheckpointDiagram() {
  const [animated, setAnimated] = useState(false);
  const [position, setPosition] = useState<Position>('start');
  const [gateState, setGateState] = useState<GateState>('idle');
  const [statusText, setStatusText] = useState(AUTHORIZED_STATUS);
  const [busy, setBusy] = useState(false);

  const runId = useRef(0);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!query.matches) setAnimated(true);
  }, []);

  useEffect(() => {
    if (!animated) return;
    runId.current += 1;
    playAuthorized(runId.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animated]);

  async function playAuthorized(id: number) {
    while (mounted.current && runId.current === id) {
      setGateState('idle');
      setPosition('start');
      await wait(500);
      if (runId.current !== id) return;

      setPosition('gate');
      await wait(1100);
      if (runId.current !== id) return;

      setGateState('pulse');
      setStatusText('Action authorized. Continuing to Business Systems.');
      await wait(550);
      if (runId.current !== id) return;

      setGateState('idle');
      setPosition('end');
      await wait(1100);
      if (runId.current !== id) return;

      setStatusText(AUTHORIZED_STATUS);
      await wait(900);
      if (runId.current !== id) return;

      setPosition('hidden');
      await wait(400);
      if (runId.current !== id) return;
    }
  }

  async function tryUnauthorized() {
    if (busy || !animated) return;
    setBusy(true);
    const id = ++runId.current;

    setStatusText('Simulating an unauthorized action.');
    setPosition('hidden');
    setGateState('idle');
    await wait(250);
    if (runId.current !== id) return;

    setPosition('start');
    await wait(350);
    if (runId.current !== id) return;

    setPosition('gate');
    await wait(1100);
    if (runId.current !== id) return;

    setGateState('stop');
    setStatusText('Blocked at the checkpoint. It never reaches Business Systems.');
    await wait(1100);
    if (runId.current !== id) return;

    setPosition('hidden');
    await wait(400);
    if (runId.current !== id) return;

    setGateState('idle');
    setBusy(false);
    playAuthorized(id);
  }

  return (
    <div className={styles.wrapper} aria-label="How an action moves through Parmana's checkpoint">
      <div className={styles.diagram}>
        <div className={styles.row}>
          <div className={styles.node}>
            <span className={styles.nodeLabel}>AI</span>
          </div>

          <div className={styles.rail} />

          <div
            className={`${styles.node} ${styles.gate} ${
              gateState === 'pulse' ? styles.gatePulse : ''
            } ${gateState === 'stop' ? styles.gateStop : ''}`}
          >
            <span className={styles.nodeLabel}>Parmana</span>
            <span className={`mono ${styles.nodeSub}`}>checkpoint</span>
          </div>

          <div className={styles.rail} />

          <div className={styles.node}>
            <span className={styles.nodeLabel}>Business Systems</span>
          </div>
        </div>

        {animated ? (
          <div className={styles.track} aria-hidden="true">
            <div
              className={`${styles.token} ${gateState === 'stop' ? styles.tokenStop : ''}`}
              data-position={position}
            />
          </div>
        ) : (
          <div className={styles.staticNote}>
            <p>An authorized action passes through the checkpoint to Business Systems.</p>
            <p>An unauthorized action reaches the checkpoint and stops there.</p>
          </div>
        )}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={`button ${styles.tryButton}`}
          onClick={tryUnauthorized}
          disabled={!animated || busy}
        >
          Try an unauthorized action
        </button>
      </div>

      {animated ? (
        <p className={`mono ${styles.status}`} aria-live="polite">
          {statusText}
        </p>
      ) : null}
    </div>
  );
}
