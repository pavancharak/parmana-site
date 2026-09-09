type GateState = "closed" | "checking" | "open";

const stateAccent: Record<GateState, string> = {
  closed: "#6FE3C4",
  checking: "#6FE3C4",
  open: "#E8B34E",
};

export default function Gate({
  state = "open",
  className = "",
}: {
  state?: GateState;
  className?: string;
}) {
  const accent = stateAccent[state];
  const leafAngle = state === "closed" ? 0 : state === "checking" ? 28 : 60;

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={`Gate glyph, ${state} state`}
    >
      <rect x="6" y="10" width="4" height="44" fill="#0A0D10" opacity="0.35" />
      <line x1="10" y1="54" x2="52" y2="54" stroke="#0A0D10" strokeWidth="4" opacity="0.35" />
      <g
        style={{
          transformOrigin: "10px 54px",
          transform: `rotate(-${leafAngle}deg)`,
          transition: "transform 0.4s ease",
        }}
      >
        <line x1="10" y1="54" x2="48" y2="54" stroke={accent} strokeWidth="4" strokeLinecap="round" />
      </g>
      <circle cx="10" cy="54" r="3" fill={accent} />
      {state === "checking" && <circle cx="48" cy="54" r="2.5" fill={accent} />}
      {state === "open" && (
        <path
          d="M40 42 L45 48 L54 36"
          stroke={accent}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      )}
    </svg>
  );
}
