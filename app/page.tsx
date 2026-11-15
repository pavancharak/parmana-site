import type { Metadata } from "next";
import { CallToAction, SiteFooter, SiteHeader, booking } from "./components/SiteChrome";
import PaymentCheck from "./components/PaymentCheck";

const pageTitle = "Control for AI agents in connected workflows";
const pageDescription =
  "Parmana checks AI requests in connected workflows against the limits your business sets, and keeps a record of each check.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/" },
  openGraph: { title: pageTitle, description: pageDescription, url: "/", siteName: "Parmana Systems", type: "website" },
  twitter: { card: "summary", title: pageTitle, description: pageDescription },
};

const flow = [
  "You set the policy.",
  "An AI agent requests an action.",
  "Parmana checks it against your policy.",
  "A trusted person approves, if the policy requires it.",
  "Your own system carries out the action once. Both steps are recorded.",
];

const useCases = [
  {
    title: "Payments",
    text: "A refund under the set limit can go ahead. Anything above it is sent for approval.",
  },
  {
    title: "Finance",
    text: "Journal entries can be limited to approved accounts and roles.",
  },
  {
    title: "Procurement",
    text: "An agent can prepare a purchase request, and the right manager approves it.",
  },
  {
    title: "Customer operations",
    text: "An agent can update delivery details. Sensitive account changes are sent for review.",
  },
  {
    title: "Enterprise workflows",
    text: "The approval steps you set are applied, and each decision is recorded.",
  },
];

const capabilities = [
  { title: "Read", text: "Choose what AI can look at." },
  { title: "Write", text: "Choose what AI can change." },
  { title: "Execute", text: "Choose which actions can go through." },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-heading">
        <div className="wrap split">
          <div>
            <p className="eyebrow">For businesses using AI agents</p>
            <h1 id="hero-heading">Set the rules for AI in your connected workflows.</h1>
            <p className="lead">
              Parmana lets businesses use the power of AI while keeping control and predictability in
              the systems they already run.
            </p>
            <div className="cta-row">
              <a className="button" href={booking} target="_blank" rel="noopener noreferrer">Talk to us</a>
              <a className="button secondary" href="/architecture">Explore the architecture</a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <svg viewBox="0 0 560 320" role="img">
              <defs>
                <linearGradient id="line" x1="0" x2="1">
                  <stop offset="0" stopColor="#5b4bdb" />
                  <stop offset="1" stopColor="#2f7de1" />
                </linearGradient>
              </defs>
              <rect x="20" y="120" width="130" height="80" rx="16" fill="#f6f8fb" stroke="#d6dcf7" />
              <text x="85" y="166" textAnchor="middle" fontSize="16" fill="#0b1b2e">AI agent</text>

              <path d="M150 160 H215" stroke="url(#line)" strokeWidth="3" fill="none" />
              <rect x="215" y="100" width="130" height="120" rx="20" fill="#0b1b2e" />
              <text x="280" y="164" textAnchor="middle" fontSize="18" fontWeight="600" fill="#ffffff">Parmana</text>

              <path d="M345 160 H410" stroke="url(#line)" strokeWidth="3" fill="none" />
              <rect x="410" y="60" width="130" height="60" rx="14" fill="#f6f8fb" stroke="#d6dcf7" />
              <rect x="410" y="130" width="130" height="60" rx="14" fill="#f6f8fb" stroke="#d6dcf7" />
              <rect x="410" y="200" width="130" height="60" rx="14" fill="#f6f8fb" stroke="#d6dcf7" />
              <text x="475" y="96" textAnchor="middle" fontSize="14" fill="#0b1b2e">Payments</text>
              <text x="475" y="166" textAnchor="middle" fontSize="14" fill="#0b1b2e">Customers</text>
              <text x="475" y="236" textAnchor="middle" fontSize="14" fill="#0b1b2e">Records</text>
            </svg>
          </div>
        </div>
      </section>

      <section className="block soft" aria-labelledby="video-heading">
        <div className="wrap">
          <p className="eyebrow">Video</p>
          <h2 id="video-heading">See how a request is checked</h2>
          <div className="video-embed">
            <iframe
              src="https://www.youtube-nocookie.com/embed/B3G1Cvir5nc"
              title="Parmana video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="control-heading">
        <div className="wrap">
          <p className="eyebrow">The problem</p>
          <h2 id="control-heading">AI can act. Your business sets the limits.</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Capable is not allowed</h3>
              <p className="body">An agent might start a payment or change a customer record. Just because it can does not mean it should.</p>
            </div>
            <div className="card">
              <h3>Checked before it runs</h3>
              <p className="body">Each request is checked against your policy before any action is carried out, through a connector for each system.</p>
            </div>
            <div className="card">
              <h3>Limits you can read</h3>
              <p className="body">Rules are explicit and versioned, so the limits are written down rather than left to an AI model to interpret.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="block soft" aria-labelledby="flow-heading">
        <div className="wrap">
          <p className="eyebrow">How it works</p>
          <h2 id="flow-heading">Every request follows your rules.</h2>
          <ol className="steps">
            {flow.map((step) => (
              <li key={step}>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block" aria-labelledby="examples-heading">
        <div className="wrap">
          <p className="eyebrow">Try it</p>
          <h2 id="examples-heading">A simple limit check.</h2>
          <PaymentCheck />
        </div>
      </section>

      <section className="block band" aria-labelledby="records-heading">
        <div className="wrap split-text">
          <div>
            <p className="eyebrow">Records</p>
            <h2 id="records-heading">Every decision leaves a record.</h2>
          </div>
          <div>
            <p className="body">
              Each request, decision and execution is saved in a signed record. The record shows what
              was asked, which policy was checked, who approved, and what was carried out. Anyone can
              verify it later.
            </p>
            <div className="grid-3" style={{ marginTop: 28 }}>
              {capabilities.map((item) => (
                <div className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="body">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="block" aria-labelledby="use-cases-heading">
        <div className="wrap">
          <p className="eyebrow">Use cases</p>
          <h2 id="use-cases-heading">Examples from everyday work.</h2>
          <div className="grid-3">
            {useCases.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        heading="Your rules stay in control."
        text="Let AI agents do useful work, within the limits your business has set."
      />

      <SiteFooter />
    </main>
  );
}
