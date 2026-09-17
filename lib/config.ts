export const colors = {
  paper: "#FFFFFF",
  ink: "#1A1A1A",
  purple: "#6366F1",
  purpleDeep: "#4338CA",
  lavender: "#F5F3FF",
  border: "#E5E7EB",
} as const;

export const founderEmail = "founder@parmanasystems.com";

export const messaging = {
  hero: "Make sure your software does exactly what your business approves.",
  tagline:
    "Parmana helps businesses control what their software is allowed to do, stop actions that are not approved, and show exactly what happened.",
  corePrinciple: "Your business decides. Parmana makes sure the system follows the decision.",
  outcome: "Your business stays in control while software and AI carry out approved work.",
  proof: "Clear proof of what was approved and what happened.",
} as const;

export const nav = {
  docs: "https://docs.parmanasystems.com",
  github: "https://github.com/pavancharak/AgentLabsBuildathon",
  blog: "https://parmanasystems.substack.com",
  founderLinkedIn: "https://www.linkedin.com/in/pavancharak/",
  howItWorks: "/#how-it-works",
  useCases: "/#use-cases",
  company: "/#contact",
  demo: "/demo",
  explainers: "/explainers",
  sdks: "/sdks",
} as const;

export const demoVideo = {
  id: "1MIxMwzlfIY",
  title: "Parmana live refund authorization demo",
  orientation: "horizontal" as const,
};

export const explainerVideos = [
  {
    id: "TFpT0wCHnmM",
    title: "AI can propose. The business decides.",
    description:
      "A simple look at the difference between an AI system suggesting an action and a business giving permission for that action.",
    orientation: "vertical" as const,
  },
  {
    id: "I2ePXz2KFgc",
    title: "How Parmana keeps approval in control",
    description:
      "Why the check should happen before an important action reaches the business system that carries it out.",
    orientation: "vertical" as const,
  },
] as const;
