export const colors = {
  paper: "#FFFFFF",
  ink: "#1A1A1A",
  purple: "#6366F1",
  purpleDeep: "#4338CA",
  lavender: "#F5F3FF",
  border: "#E5E7EB",
} as const;

export const founderEmail = "founder@parmanasystems.com";
export const founderPhone = "+91 97179 94459";

export const calLink = "pavan-charak/30min";

// Every "Schedule a conversation" CTA reads this; /book hosts the Cal.com inline embed.
export const scheduleUrl = "/book";

export const messaging = {
  hero: "You authorize. We ensure.",
  subhead:
    "Your agents are getting smarter. Parmana ensures every action they request is carried out exactly the way you authorized it.",
  // Locked tagline, use exactly as written.
  tagline: "Your policies don't change. Agents prove they follow them.",
} as const;

export const nav = {
  docs: "https://docs.parmanasystems.com",
  github: "https://github.com/pavancharak/Payment-Action-Guard",
  blog: "https://parmanasystems.substack.com",
  founderLinkedIn: "https://www.linkedin.com/in/pavancharak/",
  howItWorks: "/#how-it-works",
  contact: "/#contact",
  demo: "/demo",
  explainers: "/explainers",
  sdks: "/sdks",
} as const;

export const demoVideo = {
  id: "1MIxMwzlfIY",
  title: "Parmana agentic commerce authorization demo",
  orientation: "horizontal" as const,
};

export const explainerVideos = [
  {
    id: "TFpT0wCHnmM",
    title: "AI can propose. The business decides.",
    description:
      "Why an AI agent can recommend a transaction without becoming the authority that executes it.",
    orientation: "vertical" as const,
  },
  {
    id: "I2ePXz2KFgc",
    title: "The execution trust layer for agentic commerce",
    description:
      "How Parmana checks an action before it reaches the payment or business system.",
    orientation: "vertical" as const,
  },
  {
    id: "8g_J81sqdWE",
    title: "How to control what AI can do",
    description:
      "How business rules become an enforceable boundary around actions taken by AI.",
    orientation: "vertical" as const,
  },
  {
    id: "KWx0wNrWLws",
    title: "How Parmana checks the full chain",
    description:
      "Connect the request, policy, decision, authorization, execution and verification evidence.",
    orientation: "vertical" as const,
  },
  {
    id: "V8oLELp8CWs",
    title: "Protecting business decisions when AI acts",
    description:
      "Keep autonomous actions aligned with the decisions and limits set by the business.",
    orientation: "vertical" as const,
  },
  {
    id: "4UC7Y4IoJgg",
    title: "Keeping business control with AI",
    description:
      "A short explanation of the control boundary between an AI agent and a business system.",
    orientation: "vertical" as const,
  },
  {
    id: "5qQxbdw3AmE",
    title: "Making sure AI follows business decisions",
    description:
      "How approved business decisions guide actions taken by software and AI.",
    orientation: "vertical" as const,
  },
] as const;
