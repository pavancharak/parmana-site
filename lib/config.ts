export const colors = {
  paper: "#FFFFFF",
  ink: "#1A1A1A",
  purple: "#6366F1",
  purpleDeep: "#4338CA",
  lavender: "#F5F3FF",
  border: "#E5E7EB",
} as const;

export const founderEmail = "founder@parmanasystems.com";

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
  demoRepo: "https://github.com/pavancharak/parmana-phinite-agent",
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
    id: "REPLACE_WITH_EXPLAINER_ID",
    title: "AI can be intelligent without being in charge",
    description:
      "The boundary this demo proves: the AI proposes, Parmana authorizes, the business system executes.",
    orientation: "vertical" as const,
  },
] as const;
