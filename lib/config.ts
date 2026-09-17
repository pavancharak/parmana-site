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
  hero: "Make sure every action stays within what your business allows.",
  tagline: "AI can propose. Leaders have the authority to make decisions. Parmana makes sure your systems follow those decisions at machine speed and produces proof that they did.",
  corePrinciple:
    "Your leaders decide what is allowed. Parmana checks the request before the system acts.",
  outcome:
    "Your business stays in control while AI and software do more of the work.",
  proof: "Clear proof of what the business allowed and what the system did.",
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
    title: "AI can propose. The leaders decide.",
    description:
      "A simple look at the difference between an AI system suggesting an action and a business giving permission for that action.",
    orientation: "vertical" as const,
  },
  {
    id: "I2ePXz2KFgc",
    title: "How Parmana keeps business rules in control",
    description:
      "Why the check should happen before an important action reaches the business system that carries it out.",
    orientation: "vertical" as const,
  },
  {
    id: "8g_J81sqdWE",
    title: "Securing AI Agent Workflows: How to Control What Agents Can Do",
    description:
      "A simple look at how businesses can control actions taken by AI agents before they reach the systems that carry them out.",
    orientation: "vertical" as const,
  },
  {
    id: "KWx0wNrWLws",
    title: "How the Execution Trust Chain Secures AI Agents",
    description:
      "A simple look at how an authorized action is verified before execution and how the result can be proven.",
    orientation: "vertical" as const,
  },
  {
    id: "V8oLELp8CWs",
    title: "How Parmana protects leader decisions",
    description:
      "A simple look at how Parmana keeps business-allowed actions under control when software and AI carry them out.",
    orientation: "vertical" as const,
  },
] as const;