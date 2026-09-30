"use client";

import type { CSSProperties, ReactNode } from "react";

// Self-contained homepage: pure React + inline styles, no Tailwind, no dependencies.
// Palette and type are locked here so the file can be dropped into any React project.
const C = {
  dark: "#0A0D10",
  light: "#F5F3F0",
  white: "#FFFFFF",
  green: "#6FE3C4",
  border: "#1B2126",
  muted: "#D9D5CF",
};

const F = {
  serif: "'Fraunces', Georgia, serif",
  sans: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'IBM Plex Mono', ui-monospace, monospace",
};

const EMAIL = "founder@parmanasystems.com";
const PHONE = "+91 97179 94459";
const GITHUB = "https://github.com/pavancharak/Payment-Action-Guard";
const DOCS = "https://docs.parmanasystems.com";
const BLOG = "https://parmanasystems.substack.com";

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=IBM+Plex+Mono:wght@400;500&family=Public+Sans:wght@400;500;600&display=swap";

// Inline styles can't express media queries, so the 768px breakpoint lives in this one scoped block.
const RESPONSIVE_CSS = `
@media (max-width: 768px) {
  .pm-nav { flex-direction: column; align-items: flex-start !important; gap: 12px !important; }
  .pm-flow { flex-direction: column; }
  .pm-arrow { transform: rotate(90deg); }
  .pm-h1 { font-size: 2.5rem !important; }
  .pm-hero-row { flex-direction: column-reverse; align-items: flex-start !important; }
}
`;

function requestDemo() {
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Parmana demo request")}`;
}

const s = {
  page: { fontFamily: F.sans, color: C.dark, background: C.white, lineHeight: 1.6, margin: 0 } as CSSProperties,
  wrap: { maxWidth: 1000, margin: "0 auto", padding: "0 32px" } as CSSProperties,
  section: { padding: "4rem 0" } as CSSProperties,
  h2: { fontFamily: F.serif, fontWeight: 600, fontSize: "2.25rem", lineHeight: 1.15, margin: "0 0 1rem" } as CSSProperties,
  h3: { fontFamily: F.serif, fontWeight: 600, fontSize: "1.25rem", lineHeight: 1.3, margin: "0 0 0.5rem" } as CSSProperties,
  lead: { fontSize: "1.125rem", margin: "0 0 2.5rem", maxWidth: 640 } as CSSProperties,
  p: { margin: 0 } as CSSProperties,
  grid: (min: number): CSSProperties => ({
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}px, 100%), 1fr))`,
    gap: "1.5rem",
  }),
  darkCard: { background: C.dark, color: C.light, padding: "2rem", borderRadius: 2 } as CSSProperties,
  lightCard: { background: C.white, color: C.dark, padding: "2rem", borderRadius: 2, border: `1px solid ${C.muted}` } as CSSProperties,
  button: (bg: string, fg: string): CSSProperties => ({
    background: bg,
    color: fg,
    border: "none",
    borderRadius: 2,
    padding: "1rem 2rem",
    fontFamily: F.sans,
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
  }),
  eyebrow: { fontFamily: F.mono, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase" } as CSSProperties,
};

function Section({ id, bg, color, children, style }: { id?: string; bg: string; color?: string; children: ReactNode; style?: CSSProperties }) {
  return (
    <section id={id} style={{ ...s.section, background: bg, color: color ?? C.dark, ...style }}>
      <div style={s.wrap}>{children}</div>
    </section>
  );
}

function GateGlyph() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
      <rect x="22" y="8" width="16" height="44" rx="1" stroke={C.green} strokeWidth="2" />
      <line x1="30" y1="16" x2="30" y2="44" stroke={C.green} strokeWidth="2" />
      <path d="M4 30h14m-4-4 4 4-4 4" stroke={C.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 30h14m-4-4 4 4-4 4" stroke={C.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const whyNow = [
  { title: "Agent adoption", text: "Agents are moving from pilots into real workflows." },
  { title: "Proof matters", text: "When someone asks what an agent did, you need a record, not a guess." },
  { title: "Window open", text: "Set your rules now, before agents touch money and customers." },
];

const steps = [
  { title: "Agent requests", text: "An agent asks to take an action." },
  { title: "Parmana checks", text: "The request is checked against your rules." },
  { title: "Allowed or stopped", text: "Allowed actions go through. The rest stop." },
];

const outcomes = [
  { title: "Deploy safely", text: "Put agents on real work. Your limits hold on every request." },
  { title: "Prove compliance", text: "A signed record of every decision, ready when someone asks." },
  { title: "Protect systems", text: "Nothing reaches your systems unless your rules allow it." },
];

const systems = [
  { title: "CRM", text: "Salesforce agents follow your approval rules." },
  { title: "Payments", text: "Payment agents stay inside your limits." },
  { title: "Code", text: "GitHub agents merge only approved branches." },
];

const roles = [
  { title: "CEO", text: "Put agents to work without giving up control." },
  { title: "CFO", text: "Same approval process. Faster. Your limits hold." },
  { title: "CTO", text: "Plugs in outside your systems. Nothing to rearchitect." },
  { title: "Compliance", text: "A record for every decision. That's it." },
];

const footerCols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#outcomes" },
      { label: "Connectors", href: "#everywhere" },
      { label: "Docs", href: DOCS },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#what-we-do" },
      { label: "Blog", href: BLOG },
      { label: "Book a call", href: "/book" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: EMAIL, href: `mailto:${EMAIL}` },
      { label: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
      { label: "GitHub", href: GITHUB },
    ],
  },
];

export default function ParmanaWebsite() {
  const navLink: CSSProperties = { color: C.light, textDecoration: "none", fontSize: "0.9375rem" };

  return (
    <div style={s.page}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href={FONTS_HREF} />
      <style>{RESPONSIVE_CSS}</style>

      {/* 1. Navigation */}
      <nav style={{ background: C.dark, color: C.light, borderBottom: `1px solid ${C.border}` }}>
        <div className="pm-nav" style={{ ...s.wrap, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 32px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
            <a href="/" style={{ ...s.eyebrow, fontSize: "1rem", fontWeight: 500, color: C.light, textDecoration: "none" }}>PARMANA</a>
            <span style={{ fontSize: "0.875rem", color: C.muted }}>Your rules. Your control.</span>
          </div>
          <ul style={{ display: "flex", gap: 28, listStyle: "none", margin: 0, padding: 0 }}>
            <li><a href="#how-it-works" style={navLink}>Product</a></li>
            <li><a href="#what-we-do" style={navLink}>Company</a></li>
            <li><a href={DOCS} style={navLink}>Docs</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* 2. Hero */}
        <Section bg={C.dark} color={C.light} style={{ padding: "6rem 0", borderBottom: `2px solid ${C.green}` }}>
          <div className="pm-hero-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
            <div style={{ maxWidth: 680 }}>
              <h1 className="pm-h1" style={{ fontFamily: F.serif, fontWeight: 600, fontSize: "3.5rem", lineHeight: 1.08, margin: "0 0 1.5rem" }}>
                Your rules. Your control. That&apos;s it.
              </h1>
              <p style={{ fontSize: "1.25rem", color: C.muted, margin: "0 0 2.5rem" }}>
                Every agent request is checked against the policies you already have, before anything happens. No changes to your systems.
              </p>
              <button type="button" onClick={requestDemo} style={s.button(C.green, C.dark)}>Request a Demo</button>
            </div>
            <GateGlyph />
          </div>
        </Section>

        {/* 3. Why now */}
        <Section bg={C.white}>
          <h2 style={s.h2}>The market&apos;s moving fast.</h2>
          <p style={s.lead}>Teams are putting agents into real workflows. The question is how you stay in control.</p>
          <div style={s.grid(250)}>
            {whyNow.map((c) => (
              <div key={c.title} style={{ ...s.darkCard, borderLeft: `2px solid ${C.green}` }}>
                <h3 style={s.h3}>{c.title}</h3>
                <p style={s.p}>{c.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 4. How it works */}
        <Section id="how-it-works" bg={C.light}>
          <h2 style={s.h2}>Three steps.</h2>
          <p style={s.lead}>Agent requests. Parmana checks. Allowed actions go through, the rest stop.</p>
          <ol className="pm-flow" style={{ display: "flex", alignItems: "stretch", gap: 16, listStyle: "none", margin: 0, padding: 0 }}>
            {steps.map((step, i) => (
              <li key={step.title} style={{ display: "contents" }}>
                {i > 0 && (
                  <span className="pm-arrow" aria-hidden="true" style={{ color: C.green, fontSize: "2rem", alignSelf: "center", lineHeight: 1 }}>
                    →
                  </span>
                )}
                <div style={{ ...s.darkCard, flex: 1 }}>
                  <div style={{ ...s.eyebrow, color: C.muted, marginBottom: 8 }}>Step {i + 1}</div>
                  <h3 style={{ ...s.h3, color: C.green }}>{step.title}</h3>
                  <p style={s.p}>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* 5. Three outcomes */}
        <Section id="outcomes" bg={C.white}>
          <h2 style={s.h2}>Three outcomes.</h2>
          <div style={{ ...s.grid(280), marginTop: "2.5rem" }}>
            {outcomes.map((o, i) => (
              <div key={o.title} style={s.lightCard}>
                <div
                  style={{
                    width: 40, height: 40, borderRadius: "50%", background: C.green, color: C.dark,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: F.mono, fontWeight: 500, marginBottom: "1.25rem",
                  }}
                >
                  {i + 1}
                </div>
                <h3 style={s.h3}>{o.title}</h3>
                <p style={s.p}>{o.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 6. Real example */}
        <Section bg={C.light}>
          <h2 style={s.h2}>Here&apos;s what this actually does.</h2>
          <p style={{ fontFamily: F.serif, fontStyle: "italic", fontSize: "1.5rem", lineHeight: 1.45, margin: 0, maxWidth: 760 }}>
            You set a ₹10K refund limit. An agent requests a ₹15K refund. Parmana stops it. The decision is logged.
          </p>
        </Section>

        {/* 7. Works everywhere */}
        <Section id="everywhere" bg={C.white}>
          <h2 style={s.h2}>Same logic. Any system.</h2>
          <div style={{ ...s.grid(250), marginTop: "2.5rem" }}>
            {systems.map((c) => (
              <div key={c.title} style={s.darkCard}>
                <h3 style={{ ...s.h3, color: C.green }}>{c.title}</h3>
                <p style={s.p}>{c.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 8. What we do */}
        <Section id="what-we-do" bg={C.light}>
          <h2 style={s.h2}>What we do. What we don&apos;t.</h2>
          <div style={{ ...s.grid(250), marginTop: "2.5rem" }}>
            <div style={{ ...s.lightCard, borderLeft: `2px solid ${C.green}` }}>
              <h3 style={s.h3}>We do</h3>
              <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                <li>Check every agent request against your rules before it goes through</li>
              </ul>
            </div>
            <div style={s.lightCard}>
              <h3 style={s.h3}>We don&apos;t</h3>
              <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                <li>Build agents</li>
                <li>Change your systems</li>
                <li>Replace your security</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* 9. By role */}
        <Section bg={C.white}>
          <h2 style={s.h2}>By role.</h2>
          <div style={{ ...s.grid(200), marginTop: "2.5rem" }}>
            {roles.map((r) => (
              <div key={r.title} style={{ ...s.darkCard, borderTop: `3px solid ${C.green}` }}>
                <h3 style={{ ...s.h3, color: C.green }}>{r.title}</h3>
                <p style={s.p}>{r.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 10. CTA */}
        <Section bg={C.dark} color={C.light} style={{ textAlign: "center" }}>
          <h2 style={s.h2}>Ready?</h2>
          <p style={{ ...s.lead, color: C.muted, margin: "0 auto 2.5rem" }}>No rearchitecture. Start with one workflow.</p>
          <button type="button" onClick={requestDemo} style={s.button(C.light, C.dark)}>Request a Demo</button>
        </Section>
      </main>

      {/* 11. Footer */}
      <footer style={{ background: C.dark, color: C.light, borderTop: `1px solid ${C.border}`, padding: "3rem 0" }}>
        <div style={s.wrap}>
          <div style={s.grid(200)}>
            {footerCols.map((col) => (
              <div key={col.title}>
                <h4 style={{ ...s.eyebrow, color: C.green, fontWeight: 500, margin: "0 0 1rem" }}>{col.title}</h4>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8 }}>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} style={{ color: C.light, textDecoration: "none", fontSize: "0.9375rem" }}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ margin: "2.5rem 0 0", fontSize: "0.8125rem", color: C.muted }}>© {new Date().getFullYear()} Parmana Systems</p>
        </div>
      </footer>
    </div>
  );
}
