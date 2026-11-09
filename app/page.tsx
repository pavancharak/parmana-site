import type { Metadata } from "next";
import { SiteFooter, SiteHeader, booking, contactEmail } from "./components/SiteChrome";
import PaymentCheck from "./components/PaymentCheck";

const pageTitle = "Control for AI agents in connected workflows";
const pageDescription =
  "Parmana checks AI agent requests routed through configured business workflows against the authority your business sets, and records those checks.";

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
  { title: "READ", text: "Set what connected AI workflows may access." },
  { title: "WRITE", text: "Set what connected AI workflows may update." },
  { title: "EXECUTE", text: "Set which actions may pass through configured control paths." },
];

const flow = [
  "Your business sets the rules.",
  "An AI agent requests an action.",
  "Parmana checks the request against the configured rules.",
  "The connected control path allows or blocks the request.",
  "A record of the check is created.",
];

const useCases = [
  {
    title: "Payments",
    text: "In a connected payment workflow, refunds within a configured limit can proceed while requests above it can be sent for approval.",
  },
  {
    title: "Finance",
    text: "A connected finance workflow can limit journal posting to approved accounts and roles.",
  },
  {
    title: "Procurement",
    text: "A connected purchasing workflow can let an agent prepare a request while reserving approval for the appropriate manager.",
  },
  {
    title: "Customer operations",
    text: "In a connected service workflow, an agent can update permitted delivery details while sensitive account changes require review.",
  },
  {
    title: "Enterprise workflows",
    text: "Connected enterprise workflows can apply configured approval paths and record the resulting decisions.",
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
            <h1 id="hero-heading">Your business. Your rules. In the workflows you connect.</h1>
            <p className="vision-statement">
              For workflows you connect, Parmana checks each AI request against the authority your business has configured
              before it reaches the connected system.
            </p>
            <div className="cta-row">
              <a className="button" href="#platform">Explore Parmana</a>
              <a className="button secondary" href="/how-it-works">See How It Works</a>
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

      {/* 2. Can act, stays in control */}
      <section className="block" aria-labelledby="control-heading">
        <div className="wrap">
          <h2 id="control-heading">AI can act in connected workflows. Your business sets the limits.</h2>
          <p className="body">
            An AI agent might initiate a payment, update a customer record or prepare an approval request in a connected workflow.
          </p>
          <p className="body">
            But just because an agent can take an action does not mean it should be allowed to.
          </p>
          <p className="body">For requests routed through a configured integration, Parmana checks whether the requested action is allowed before it reaches the connected system.</p>
        </div>
      </section>

      {/* 3. Platform: READ, WRITE, EXECUTE */}
      <section id="platform" className="block soft" aria-labelledby="platform-heading">
        <div className="wrap">
          <h2 id="platform-heading">You decide what connected AI workflows can do.</h2>
          <ul className="principles">
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
          <h2 id="flow-heading">Requests through connected workflows follow your rules.</h2>
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
          <h2 id="examples-heading">See a simple limit comparison.</h2>
          <p className="body">This browser-only example compares a sample amount with a fixed limit. It is not a live Parmana policy check or payment.</p>
          <PaymentCheck />
        </div>
      </section>

      {/* 6. Records */}
      <section className="block" aria-labelledby="records-heading">
        <div className="wrap">
          <h2 id="records-heading">Keep a record of each control decision.</h2>
          <p className="body">
            For requests processed through configured Parmana controls, a record can show what was requested, which configured
            rule was checked and what result the control path returned.
          </p>
          <p className="body">This record covers the request processed through that control path, not activity that bypasses it.</p>
        </div>
      </section>

      {/* 7. Use cases */}
      <section id="use-cases" className="block soft" aria-labelledby="use-cases-heading">
        <div className="wrap">
          <h2 id="use-cases-heading">Built for the way businesses work.</h2>
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
      <section className="block" aria-labelledby="closing-heading">
        <div className="wrap">
          <h2 id="closing-heading">In connected workflows, your rules stay in control.</h2>
          <p className="body">
            Give AI agents room to work in connected workflows, with authority limited to what your business has configured.
          </p>
          <div className="cta-row">
            <a className="button" href={booking} target="_blank" rel="noopener noreferrer">Talk to Parmana</a>
            <a className="button secondary" href="#platform">See the Platform</a>
          </div>
          <p className="body" style={{ marginTop: "1.5rem" }}>
            Or email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
