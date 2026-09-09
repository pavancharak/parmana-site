type GateState = "closed" | "checking" | "open";

const stateAccent: Record<GateState, string> = {
  closed: "#6FE3C4",
  checking: "#6FE3C4",
  open: "#E8B34E",
};

export default function Gate({
  state = "open",
  className = "",
  accent,
  dark = false,
}: {
  state?: GateState;
  className?: string;
  accent?: string;
  dark?: boolean;
}) {
  const resolvedAccent = accent ?? stateAccent[state];
  const frameColor = dark ? "#FFFFFF" : "#0A0D10";
  const frameOpacity = dark ? "0.5" : "0.35";
  const leafAngle = state === "closed" ? 0 : state === "checking" ? 28 : 60;

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={`Gate glyph, ${state} state`}
    >
      <rect x="6" y="10" width="4" height="44" fill={frameColor} opacity={frameOpacity} />
      <line x1="10" y1="54" x2="52" y2="54" stroke={frameColor} strokeWidth="4" opacity={frameOpacity} />
      <g
        style={{
          transformOrigin: "10px 54px",
          transform: `rotate(-${leafAngle}deg)`,
          transition: "transform 0.4s ease",
        }}
      >
        <line x1="10" y1="54" x2="48" y2="54" stroke={resolvedAccent} strokeWidth="4" strokeLinecap="round" />
      </g>
      <circle cx="10" cy="54" r="3" fill={resolvedAccent} />
      {state === "checking" && <circle cx="48" cy="54" r="2.5" fill={resolvedAccent} />}
      {state === "open" && (
        <path
          d="M40 42 L45 48 L54 36"
          stroke={resolvedAccent}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      )}
    </svg>
  );
}
