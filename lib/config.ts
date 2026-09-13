export const colors = {
  paper: "#FFFFFF",
  ink: "#1A1A1A",
  purple: "#6366F1",
  purpleDeep: "#4338CA",
  lavender: "#F5F3FF",
  border: "#E5E7EB",
} as const;

export const founderEmail = "founder@parmanasystems.com";

// Locked positioning phrases (2026-09-13 repositioning). Reuse these
// verbatim rather than rephrasing per component, see
// docs/DESIGN-SYSTEM-CURRENT.md for the full positioning rationale.
export const messaging = {
  hero: "Human Authority Infrastructure for Autonomous Systems",
  tagline:
    "Your policies. Your control. Autonomous systems execute within your authority.",
  corePrinciple: "Autonomous systems propose. Your policy decides. Parmana enforces.",
  outcome: "Humans stay in control while benefiting from autonomous capability.",
  proof: "Structural authority, verified by cryptographic proof.",
} as const;

export const nav = {
  docs: "https://docs.parmanasystems.com",
  blog: "https://parmanasystems.substack.com",
  founderLinkedIn: "https://www.linkedin.com/in/pavancharak/",
  howItWorks: "#how-it-works",
  useCases: "#use-cases",
  faq: "#faq",
  company: "#contact",
  demo: "/demo",
  explainers: "/explainers",
} as const;

// The ID is the part after "v=" in a youtube.com/watch?v= URL, or after
// youtu.be/ in a short link.
export const demoVideo = {
  id: "1MIxMwzlfIY",
  title: "Parmana x Phinite: live refund authorization demo",
  orientation: "horizontal" as const,
};

// Add new explainer videos here as they're uploaded. Vertical is the
// expected orientation for these, but it's set per video.
export const explainerVideos = [
  {
    id: "TFpT0wCHnmM",
    title: "AI can be intelligent without being in charge",
    description:
      "The boundary this demo proves: the AI proposes, Parmana authorizes, the business system executes.",
    orientation: "vertical" as const,
  },
] as const;
