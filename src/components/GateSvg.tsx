export type GateTone = "ink" | "go" | "stop";

export interface GateSvgProps {
  /** 0 = leaves fully closed (blocking), 1 = leaves fully open (clear) */
  openAmount: number;
  /** position of the request token along the path, in svg x-units (16 to 224) */
  tokenX: number;
  /** whether the token is currently drawn at all */
  showToken?: boolean;
  tone: GateTone;
  pulseToken?: boolean;
  durationMs?: number;
  className?: string;
  titleId: string;
  title: string;
}

const TONE_COLOR: Record<GateTone, string> = {
  ink: "var(--ink)",
  go: "var(--signal-go)",
  stop: "var(--signal-stop)",
};

const LEFT_HINGE = { x: 96, y: 60 };
const RIGHT_HINGE = { x: 144, y: 60 };
const CLOSED_ANGLE_LEFT = -36.87;
const CLOSED_ANGLE_RIGHT = 36.87;
const OPEN_SWING = 72;

export function GateSvg({
  openAmount,
  tokenX,
  showToken = true,
  tone,
  pulseToken = false,
  durationMs = 650,
  className,
  titleId,
  title,
}: GateSvgProps) {
  const leafColor = TONE_COLOR[tone];
  const leafAngleLeft = CLOSED_ANGLE_LEFT - OPEN_SWING * openAmount;
  const leafAngleRight = CLOSED_ANGLE_RIGHT + OPEN_SWING * openAmount;
  const gateTransition = `transform ${durationMs}ms var(--ease-gate)`;
  const tokenTransition = `transform ${durationMs}ms var(--ease-gate)`;

  return (
    <svg
      viewBox="0 0 240 120"
      className={className}
      role="img"
      aria-labelledby={titleId}
    >
      <title id={titleId}>{title}</title>

      {/* the path a request travels */}
      <line
        x1={16}
        y1={60}
        x2={224}
        y2={60}
        stroke="var(--line)"
        strokeWidth={2}
      />

      {/* posts */}
      <line x1={96} y1={52} x2={96} y2={68} stroke="var(--ink)" strokeWidth={3} strokeLinecap="round" />
      <line x1={144} y1={52} x2={144} y2={68} stroke="var(--ink)" strokeWidth={3} strokeLinecap="round" />

      {/* left leaf */}
      <g
        style={{
          transform: `rotate(${leafAngleLeft}deg)`,
          transformOrigin: `${LEFT_HINGE.x}px ${LEFT_HINGE.y}px`,
          transition: gateTransition,
        }}
      >
        <line
          x1={LEFT_HINGE.x}
          y1={LEFT_HINGE.y}
          x2={120}
          y2={42}
          stroke={leafColor}
          strokeWidth={3.5}
          strokeLinecap="round"
          style={{ transition: `stroke ${durationMs}ms ease` }}
        />
      </g>

      {/* right leaf */}
      <g
        style={{
          transform: `rotate(${leafAngleRight}deg)`,
          transformOrigin: `${RIGHT_HINGE.x}px ${RIGHT_HINGE.y}px`,
          transition: gateTransition,
        }}
      >
        <line
          x1={RIGHT_HINGE.x}
          y1={RIGHT_HINGE.y}
          x2={120}
          y2={42}
          stroke={leafColor}
          strokeWidth={3.5}
          strokeLinecap="round"
          style={{ transition: `stroke ${durationMs}ms ease` }}
        />
      </g>

      {/* the request token */}
      {showToken && (
        <g
          style={{
            transform: `translateX(${tokenX}px)`,
            transition: tokenTransition,
          }}
        >
          {pulseToken && (
            <circle cx={0} cy={60} r={5} fill="none" stroke="var(--brass)" strokeWidth={1.5} className="gateTokenPulse" />
          )}
          <circle cx={0} cy={60} r={5} fill="var(--ink)" />
        </g>
      )}
    </svg>
  );
}
