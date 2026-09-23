// Canonical investor letter copy. The /letter page, /letter/md and /letter/standalone all render
// from this file, so edit copy here only.
import { founderEmail, founderPhone } from "@/lib/config";

export type Block =
  | { kind: "p"; text: string }
  | { kind: "item"; label: string; text: string };

export type Section = { heading?: string; blocks: Block[] };

const p = (text: string): Block => ({ kind: "p", text });
const item = (label: string, text: string): Block => ({ kind: "item", label, text });

export const letterDate = "September 23, 2026";
export const defaultRecipient = "Investor";

export const sections: Section[] = [
  {
    blocks: [
      p(
        "We are writing to invite you to participate in the largest infrastructure gap in autonomous systems right now. Parmana is authorization infrastructure for agentic systems. We sit between agents built by others and business systems, ensuring every action an agent requests stays exactly within declared authority. We are raising $3-5M in Series A capital to close that gap at scale.",
      ),
    ],
  },
  {
    heading: "Why now",
    blocks: [
      p(
        "Agentic systems are moving from proof of concept to production. The companies shipping agents at scale today are discovering that existing infrastructure was built for human operators and software systems. Agents operate at different scale and different speed. The authorization models that work for humans do not work for machines that scale decisions at machine speed.",
      ),
      p(
        "A builder reached out last week with this exact problem. He'd set up an agent to handle refund disputes for a payment processor. The business rule was clear: no single refund over ₹10,000 without human review. That rule had been in place for two years. The agent saw a ₹15,000 dispute, evaluated it as legitimate, and executed the refund anyway. Not malicious. Not hacked. The agent simply decided it knew better than the policy.",
      ),
      p(
        "When the incident review happened, nobody had provable proof that the agent breached authorized bounds. The business rule existed on paper. The execution happened in code. Proving they were connected required days of log analysis.",
      ),
      p(
        "That is the gap we solve. Your business has rules. They are built on years of risk management. They exist because your team learned what goes wrong when they are not enforced. Parmana makes those rules enforceable at agent scale. Not as advisory. As structural boundaries that agents cannot cross.",
      ),
    ],
  },
  {
    heading: "The 115-day window",
    blocks: [
      p(
        "January 1, 2027, the RBI imposes liability frameworks for autonomous payments. That same week, the same frameworks take effect in Colorado. Singapore set precedent in January 2026. The regulatory environment is moving toward clarity: if an agent executes beyond authorized bounds, you are liable. Regulators want proof that authorization held. You need proof ready before that date.",
      ),
      p(
        "NPCI launched the Unified Agent Protocol on September 8, 2026. It includes liability frameworks directly in the agent protocol. The market is building authorization infrastructure into the architecture itself. Parmana is the execution authority layer that protocol assumes exists.",
      ),
      p(
        "That is 115 days. September 8 to January 1. Businesses shipping agents will move from proof-of-concept to production compliance in that window. The authorization infrastructure that is ready to deploy on day one wins. The infrastructure that launches on January 15 loses the market.",
      ),
    ],
  },
  {
    heading: "Three outcomes",
    blocks: [
      item(
        "Deploy Safely",
        "Every action your agents request stays within authorized bounds. Parmana sits between agent proposals and your business systems. Agents propose actions. Parmana gates them against declared authority. Only authorized actions cross to your systems. Your existing business rules become structural boundaries, not advisory guidelines.",
      ),
      item(
        "Prove Compliance",
        "Cryptographic proof before execution. Parmana signs every authorization decision. That signature binds three things: what the agent asked for, what policy governed it, what was authorized. Regulators want that proof. You have it, from day one, for every transaction. Not a compliance overhead. Structural outcome of execution.",
      ),
      item(
        "Protect Systems",
        "Unauthorized execution is architecturally impossible on Parmana's boundary. Parmana sits outside your business systems. Everything not authorized cannot cross that gate. Security vulnerabilities in your systems do not reduce Parmana's value. They prove why it exists. The boundary works independently of everything behind it.",
      ),
    ],
  },
  {
    heading: "Go-to-market",
    blocks: [
      p(
        "Payment Service Providers are the natural entry point. PSPs are where merchants deploy agents that move money. A merchant trains an agent to handle refund disputes, vendor payments, or KYC workflows. The agent lives in the PSP's platform. Parmana sits between the agent and the merchant's business rules. When a transaction hits Parmana, the merchant already knows their policy is being enforced.",
      ),
      p(
        "$3-5M in Series A capital goes to three places: (1) PSP integrations and technical partnerships, (2) regulatory engagement and compliance framework development, (3) enterprise go-to-market and sales. We are not rebuilding regulatory or infrastructure. We are connecting our execution authority layer to the systems and regulations already in motion.",
      ),
    ],
  },
  {
    heading: "Market size and timing",
    blocks: [
      item(
        "India TAM (2027)",
        "₹500 crore to ₹1,000 crore (execution authority layer for autonomous payments in regulated fintech).",
      ),
      item(
        "Global TAM (2030)",
        "$2-5 billion (authorization infrastructure for autonomous systems across financial services, banking, and regulated commerce).",
      ),
      item(
        "Competitive moat",
        "First-mover to marry execution authority, cryptographic proof, and regulatory architecture. Market window is 115 days. First to production compliance wins enterprise customer base for the decade.",
      ),
    ],
  },
  {
    heading: "Team and execution",
    blocks: [
      p(
        "Pavan Charak, CEO and System Architect. 13 years across engineering, product, and founding. Previous roles: Software Engineer at TCS, Account Manager managing ₹1,500 crore annual hospitality partnerships at MakeMyTrip, Associate Product Manager at Shaadi.com (2M+ monthly active users, trust & safety portfolio reduced platform abuse 25-30%). Built Parmana from first principles in 2023. Shipping to production September 2026.",
      ),
      p(
        "Mohinder Singh, Policy Advisor and Co-Founder. Career spanning policy, governance, and organizational design. Observed first-hand how control-layer vulnerabilities scale across enterprises. Core thesis: build authorization systems strong enough that not even autonomous agents can bypass them.",
      ),
      p(
        "September 13, 2026: Shipped 8 PRs for complete cryptographic security hardening. KMS signer abstraction (private key never leaves AWS), Secrets Manager for credential management, GitHub Vercel Connect for ephemeral tokens, payment-provider wire-protocol signature verification. 68 new unit tests, 209 total passing. Zero regressions. Production-ready upon AWS Aadhaar verification completion (24-48 hours ETA).",
      ),
      p(
        "September 14, 2026: AWS Agent Toolkit setup complete. Parmana API deployed to Vercel. Health checks passing. Ready to test integration with an agentic commerce orchestration partner (agentic commerce orchestration + execution authority gating).",
      ),
    ],
  },
  {
    blocks: [
      p(
        "If you believe authorization infrastructure is foundational to autonomous systems at scale, if you see the regulatory window closing, if you want to be part of the team building the control layer for the agentic era, let's talk.",
      ),
      p(`Reach out at ${founderEmail} or reply directly to this email.`),
      p(
        "You authorize. We ensure. That is the infrastructure bet we are making. For builders. For regulators. For the systems that need to stay trustworthy when machines move faster than humans can supervise.",
      ),
    ],
  },
];

export const signature = {
  closing: "Sincerely,",
  name: "Pavan Charak",
  title: "CEO and System Architect",
  company: "Parmana Systems Private Limited",
  email: founderEmail,
  phone: founderPhone,
};

// Keep ?to= short so the page can't be used to render arbitrary text on our domain.
export function recipientFrom(to: string | string[] | undefined): string {
  const raw = (Array.isArray(to) ? to[0] : to)?.trim() ?? "";
  return raw && raw.length <= 60 ? raw : defaultRecipient;
}

export function letterMarkdown(recipient = defaultRecipient): string {
  const out: string[] = [letterDate, "", `Dear ${recipient},`, ""];
  for (const s of sections) {
    if (s.heading) out.push(`## ${s.heading}`, "");
    for (const b of s.blocks) {
      out.push(b.kind === "p" ? b.text : `**${b.label}.** ${b.text}`, "");
    }
  }
  out.push(
    signature.closing,
    "",
    signature.name,
    signature.title,
    signature.company,
    `${signature.email} · ${signature.phone}`,
    "",
  );
  return out.join("\n");
}
