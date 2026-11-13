import type { Metadata } from "next";
import { SiteFooter, SiteHeader, booking, contactEmail } from "./components/SiteChrome";
import PaymentCheck from "./components/PaymentCheck";

const pageTitle = "Control for AI agents in connected workflows";
const pageDescription =
  "Parmana checks AI requests in connected workflows against the limits your business sets, and keeps a record of each check.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/",
    siteName: "Parmana Systems",
    type: "website",
  },
  twitter: { card: "summary", title: pageTitle, description: pageDescription },
};

const capabilities = [
  { title: "READ", text: "Choose what AI can look at." },
  { title: "WRITE", text: "Choose what AI can change." },
  { title: "EXECUTE", text: "Choose which actions can go through." },
];

const flow = [
  "You set the rules.",
  "An AI agent asks for an action.",
  "Parmana checks the request against your rules.",
  "The request is allowed or blocked.",
  "A record of the check is kept.",
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

export default function Home() {
  return (
    <main>
      <SiteHeader />

      {/* 1. Hero */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="wrap split">
          <div>
            <h1 id="hero-heading">Set the rules for AI in your connected workflows.</h1>
            <p className="vision-statement">
              Parmana checks each AI request against the limits your business has set,
              before the request reaches the connected system.
            </p>
            <div className="cta-row">
              <a className="button" href="#platform">Explore Parmana</a>
              <a className="button secondary" href="/research">Read the research</a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <svg viewBox="0 0 560 320" role="img">
              <defs>
                <linearGradient id="line" x1="0" x2="1">
                  <stop offset="0" stopColor="#4f46e5" />
                  <stop offset="1" stopColor="#2563eb" />
                </linearGradient>
              </defs>
              <rect x="20" y="120" width="130" height="80" rx="16" fill="#f5f7ff" stroke="#c7d2fe" />
              <text x="85" y="166" textAnchor="middle" fontSize="16" fill="#1e1b4b" fontFamily="inherit">AI agent</text>

              <path d="M150 160 H215" stroke="url(#line)" strokeWidth="3" fill="none" />
              <rect x="215" y="100" width="130" height="120" rx="20" fill="#1e1b4b" />
              <text x="280" y="164" textAnchor="middle" fontSize="18" fontWeight="600" fill="#ffffff" fontFamily="inherit">Parmana</text>

              <path d="M345 160 H410" stroke="url(#line)" strokeWidth="3" fill="none" />
              <rect x="410" y="60" width="130" height="60" rx="14" fill="#f5f7ff" stroke="#c7d2fe" />
              <rect x="410" y="130" width="130" height="60" rx="14" fill="#f5f7ff" stroke="#c7d2fe" />
              <rect x="410" y="200" width="130" height="60" rx="14" fill="#f5f7ff" stroke="#c7d2fe" />
              <text x="475" y="96" textAnchor="middle" fontSize="14" fill="#1e1b4b" fontFamily="inherit">Payments</text>
              <text x="475" y="166" textAnchor="middle" fontSize="14" fill="#1e1b4b" fontFamily="inherit">Customers</text>
              <text x="475" y="236" textAnchor="middle" fontSize="14" fill="#1e1b4b" fontFamily="inherit">Records</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Video */}
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

      {/* 2. Can act, stays in control */}
      <section className="block control-section" aria-labelledby="control-heading">
        <div className="wrap">
          <h2 id="control-heading">AI can act. Your business sets the limits.</h2>
          <div className="content-grid content-grid-three">
            <p className="body">
              An AI agent might start a payment, change a customer record or prepare an approval in a connected workflow.
            </p>
            <p className="body">
              Just because an agent can do something does not mean it should be allowed to.
            </p>
            <p className="body">
              For requests that go through a connected integration, Parmana checks that the action is allowed before it reaches the system.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Platform: READ, WRITE, EXECUTE */}
      <section id="platform" className="block soft" aria-labelledby="platform-heading">
        <div className="wrap">
          <h2 id="platform-heading">You decide what AI can do in connected workflows.</h2>
          <ul className="principles principles-three">
            {capabilities.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. How it works */}
      <section id="how-it-works" className="block" aria-labelledby="flow-heading">
        <div className="wrap">
          <h2 id="flow-heading">Every request follows your rules.</h2>
          <ol className="steps">
            {flow.map((step) => (
              <li key={step}>
                <p className="body">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Examples, interactive */}
      <section className="block soft" aria-labelledby="examples-heading">
        <div className="wrap">
          <h2 id="examples-heading">A simple limit check.</h2>
          <p className="body">This demo runs in your browser. It compares an amount with a set limit. It is not a live Parmana check or a payment.</p>
          <PaymentCheck />
        </div>
      </section>

      {/* 6. Records */}
      <section className="block records-section" aria-labelledby="records-heading">
        <div className="wrap">
          <h2 id="records-heading">Every decision leaves a record.</h2>
          <div className="content-grid content-grid-two">
            <p className="body">
              For requests that go through Parmana, the record shows what was asked, which rule was checked and the result.
            </p>
            <p className="body scope-note">
              Only requests that go through Parmana get a record.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Use cases */}
      <section id="use-cases" className="block soft" aria-labelledby="use-cases-heading">
        <div className="wrap">
          <h2 id="use-cases-heading">Examples from everyday work.</h2>
          <ul className="principles">
            {useCases.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Closing call to action */}
      <section className="block closing-section" aria-labelledby="closing-heading">
        <div className="wrap closing-grid">
          <div>
            <h2 id="closing-heading">Your rules stay in control.</h2>
            <p className="body">
              Let AI agents do useful work, within the limits your business has set.
            </p>
          </div>
          <div className="closing-actions">
            <div className="cta-row">
              <a className="button" href={booking} target="_blank" rel="noopener noreferrer">Talk to Parmana</a>
              <a className="button secondary" href="#platform">See the Platform</a>
              <a className="button secondary" href="https://github.com/pavancharak" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
            <p className="body closing-contact">
              Or email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
