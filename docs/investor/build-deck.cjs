// Builds Parmana-Investor-Deck.pptx. Run from this folder: npm install && npm run build
// Copy rules from docs/DESIGN-SYSTEM-CURRENT.md apply: no em/en dashes, AI and agents request
// actions (never "act" as the authority), no unsourced metrics. Market figures are company estimates.
const path = require("path");
const pptxgen = require("pptxgenjs");
const { applyTheme } = require("./apply_theme.js");

const OUT = process.env.DECK_OUT || path.join(__dirname, "Parmana-Investor-Deck.pptx");

// Site tokens (tailwind.config.ts): ink, purple, purple-deep, lavender, border. accent4 is an ink tint.
const THEME = {
  name: "Parmana",
  headFontFace: "Calibri",
  bodyFontFace: "Calibri",
  colors: {
    dk1: "1A1A1A",
    lt1: "FFFFFF",
    dk2: "4338CA",
    lt2: "F5F3FF",
    accent1: "6366F1",
    accent2: "4338CA",
    accent3: "E5E7EB",
    accent4: "5F5F5F",
    accent5: "A5A8F5",
    accent6: "1A1A1A",
    hlink: "4338CA",
    folHlink: "4338CA",
  },
};

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10 x 5.625 in
pres.author = "Pavan Charak";
pres.company = "Parmana Systems Private Limited";
pres.title = "Parmana investor deck";
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };

const C = pres.SchemeColor;
const INK = C.text1;
const PAPER = C.background1;
const DEEP = C.text2;
const LAV = C.background2;
const PURPLE = C.accent1;
const BORDER = C.accent3;
const MUTED = C.accent4;
const SOFT = C.accent5;

const W = 10;
const M = 0.5;

// ---------- Layouts ----------
pres.defineSlideMaster({
  title: "PM_DARK",
  background: { color: INK },
  objects: [
    {
      placeholder: {
        options: { name: "eyebrow", type: "body", x: M + 0.1, y: 1.15, w: 8.8, h: 0.35, fontSize: 11, bold: true, color: SOFT, charSpacing: 3, margin: 0 },
        text: "",
      },
    },
    {
      placeholder: {
        options: { name: "title", type: "title", x: M + 0.1, y: 1.55, w: 8.8, h: 1.75, fontSize: 40, bold: true, color: PAPER, align: "left", valign: "top", margin: 0 },
        text: "",
      },
    },
    {
      placeholder: {
        options: { name: "body", type: "body", x: M + 0.1, y: 3.55, w: 8.8, h: 0.6, fontSize: 20, color: SOFT, margin: 0 },
        text: "",
      },
    },
  ],
});

pres.defineSlideMaster({
  title: "PM_CONTENT",
  background: { color: PAPER },
  margin: [0.5, 0.5, 0.6, 0.5],
  objects: [
    {
      placeholder: {
        options: { name: "eyebrow", type: "body", x: M, y: 0.32, w: 9, h: 0.3, fontSize: 11, bold: true, color: DEEP, charSpacing: 3, margin: 0 },
        text: "",
      },
    },
    {
      placeholder: {
        options: { name: "title", type: "title", x: M, y: 0.62, w: 9, h: 0.7, fontSize: 28, bold: true, color: INK, align: "left", valign: "top", margin: 0 },
        text: "",
      },
    },
    { text: { text: "Parmana  |  Confidential", options: { x: M, y: 5.2, w: 4, h: 0.25, fontSize: 9, color: MUTED, margin: 0 } } },
  ],
  slideNumber: { x: 9.0, y: 5.2, w: 0.5, h: 0.25, fontSize: 9, color: MUTED, align: "right", margin: 0 },
});

// ---------- Helpers ----------
const shadow = () => ({ type: "outer", color: "4338CA", opacity: 0.12, blur: 8, offset: 2, angle: 90 });

function contentSlide(section, eyebrow, title) {
  const s = pres.addSlide({ masterName: "PM_CONTENT", sectionTitle: section });
  s.addText(eyebrow.toUpperCase(), { placeholder: "eyebrow" });
  s.addText(title, { placeholder: "title" });
  return s;
}

function card(s, x, y, w, h, opts = {}) {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x, y, w, h,
    rectRadius: 0.08,
    fill: { color: opts.fill || PAPER },
    line: { color: opts.line || BORDER, width: 0.75 },
    shadow: opts.noShadow ? undefined : shadow(),
    objectName: opts.name,
  });
}

function text(s, t, o) {
  s.addText(t, { isTextBox: true, margin: 0, valign: "top", color: INK, fontSize: 14, ...o });
}

function badge(s, x, y, label, opts = {}) {
  s.addShape(pres.shapes.OVAL, { x, y, w: 0.42, h: 0.42, fill: { color: opts.fill || PURPLE }, line: { color: opts.fill || PURPLE } });
  text(s, label, { x, y, w: 0.42, h: 0.42, align: "center", valign: "middle", fontSize: 13, bold: true, color: opts.color || PAPER });
}

function arrowRight(s, x, y, w) {
  s.addShape(pres.shapes.LINE, { x, y, w, h: 0, line: { color: PURPLE, width: 1.5, endArrowType: "triangle" } });
}

// ---------- 1. Title ----------
pres.addSection({ title: "Opening" });
{
  const s = pres.addSlide({ masterName: "PM_DARK", sectionTitle: "Opening" });
  s.addText("AUTHORITY INFRASTRUCTURE FOR AUTONOMOUS SYSTEMS", { placeholder: "eyebrow" });
  s.addText("Make your business ready for autonomy", { placeholder: "title" });
  s.addText("Ready. Enforced. Proven.", { placeholder: "body" });
  text(s, "Parmana Systems Private Limited  |  Series A  |  October 2026", { x: M + 0.1, y: 4.75, w: 8.8, h: 0.3, fontSize: 12, color: SOFT });
  s.addShape(pres.shapes.OVAL, { x: 8.3, y: -1.2, w: 3.2, h: 3.2, fill: { color: PURPLE, transparency: 70 }, line: { color: PURPLE, transparency: 100 } });
  s.addNotes(
    "Parmana is authority infrastructure for autonomous systems. We make the systems a business already runs ready for autonomy: we enforce business authority over the actions autonomous systems request, and we produce evidence that anyone can verify independently.",
  );
}

// ---------- 2. Summary ----------
{
  const s = contentSlide("Opening", "Summary", "The authority layer for autonomous systems");
  const tiles = [
    ["Problem", "Autonomous systems now request consequential actions. Business rules live on paper; execution happens in code."],
    ["Product", "Parmana checks every routed request against business authority before execution and signs the decision."],
    ["Market", "Wedge: autonomous payments in regulated fintech. Expands to every consequential workflow."],
    ["Ask", "$3-5M Series A for PSP integrations, regulatory engagement and enterprise go-to-market."],
  ];
  const w = 2.1, gap = 0.2, y = 1.65, h = 3.1;
  tiles.forEach(([k, v], i) => {
    const x = M + i * (w + gap);
    card(s, x, y, w, h, { name: `summary-${k}` });
    badge(s, x + 0.25, y + 0.3, String(i + 1));
    text(s, k, { x: x + 0.25, y: y + 0.9, w: w - 0.5, h: 0.4, fontSize: 18, bold: true });
    text(s, v, { x: x + 0.25, y: y + 1.35, w: w - 0.45, h: 1.6, fontSize: 13, color: MUTED });
  });
  s.addNotes("Four things to take away: the problem, what Parmana does about it, where we start in the market, and what we are raising.");
}

// ---------- 3. Why now ----------
pres.addSection({ title: "Problem" });
{
  const s = contentSlide("Problem", "Why now", "Autonomous systems are reaching production");
  card(s, M, 1.65, 4.35, 3.1, { fill: LAV, line: LAV, noShadow: true });
  text(s, "Built for people", { x: M + 0.3, y: 1.9, w: 3.8, h: 0.4, fontSize: 18, bold: true, color: DEEP });
  text(
    s,
    [
      { text: "Authorization designed around human operators", options: { bullet: true, breakLine: true } },
      { text: "Approvals happen at human speed", options: { bullet: true, breakLine: true } },
      { text: "Logs explain what happened, after it happened", options: { bullet: true } },
    ],
    { x: M + 0.3, y: 2.45, w: 3.8, h: 2.1, fontSize: 15, color: INK, paraSpaceAfter: 10 },
  );
  card(s, 5.15, 1.65, 4.35, 3.1, { fill: INK, line: INK, noShadow: true });
  text(s, "Requested by autonomous systems", { x: 5.45, y: 1.9, w: 3.9, h: 0.4, fontSize: 18, bold: true, color: PAPER });
  text(
    s,
    [
      { text: "Refunds, payments, purchase orders, record changes, code merges", options: { bullet: true, breakLine: true } },
      { text: "Requests at machine speed and scale", options: { bullet: true, breakLine: true } },
      { text: "The business still holds the authority, and still carries the liability", options: { bullet: true } },
    ],
    { x: 5.45, y: 2.45, w: 3.8, h: 2.1, fontSize: 15, color: PAPER, paraSpaceAfter: 10 },
  );
  s.addNotes(
    "Companies shipping agents to production are discovering that existing infrastructure was built for human operators. The authorization models that work for people do not map to systems that request decisions at machine speed.",
  );
}

// ---------- 4. Problem ----------
{
  const s = contentSlide("Problem", "The problem", "Rules live on paper. Execution happens in code.");
  card(s, M, 1.65, 5.2, 3.1, { name: "incident" });
  text(s, "A REAL CONVERSATION WITH A BUILDER", { x: M + 0.3, y: 1.9, w: 4.6, h: 0.3, fontSize: 10, bold: true, color: DEEP, charSpacing: 2 });
  text(
    s,
    [
      { text: "Rule: no refund over ₹10,000 without human review. In place for two years.", options: { bullet: true, breakLine: true } },
      { text: "An agent requested a ₹15,000 refund it judged legitimate, and the refund went through.", options: { bullet: true, breakLine: true } },
      { text: "Not malicious. Not hacked. Nothing enforced the rule at execution.", options: { bullet: true, breakLine: true } },
      { text: "Connecting the rule to what ran took days of log analysis.", options: { bullet: true } },
    ],
    { x: M + 0.3, y: 2.3, w: 4.6, h: 2.35, fontSize: 14, paraSpaceAfter: 8 },
  );
  const qs = ["Was this action allowed?", "Can you prove what was authorized?"];
  qs.forEach((q, i) => {
    const y = 1.65 + i * 1.6;
    card(s, 6.0, y, 3.5, 1.45, { fill: LAV, line: LAV, noShadow: true });
    text(s, q, { x: 6.25, y, w: 3.0, h: 1.45, fontSize: 20, bold: true, valign: "middle", color: INK });
  });
  s.addNotes(
    "Illustrative incident shared by a builder (anonymized). The point is not that the agent was malicious. The business rule existed, but nothing enforced it at the moment of execution, and nobody could prove afterwards whether authority held.",
  );
}

// ---------- 5. Solution ----------
pres.addSection({ title: "Solution" });
{
  const s = contentSlide("Solution", "What Parmana does", "Ready. Enforced. Proven.");
  const pillars = [
    ["READY", "Make existing systems ready for autonomy", "Keep payments, CRM and internal APIs. Parmana sits in front of them.", "No rebuild."],
    ["ENFORCE", "Enforce business authority over autonomous actions", "Business rules become the boundary every routed request is checked against.", "Allowed proceeds. Outside authority stops."],
    ["PROVE", "Provide independently verifiable evidence", "What was requested, what authority applied, what happened.", "Proof beyond the system that produced it."],
  ];
  const w = 2.85, gap = 0.225, y = 1.65, h = 3.15;
  pillars.forEach(([tag, head, body, punch], i) => {
    const x = M + i * (w + gap);
    card(s, x, y, w, h, { name: `pillar-${tag}` });
    badge(s, x + 0.3, y + 0.3, String(i + 1));
    text(s, tag, { x: x + 0.85, y: y + 0.38, w: 1.8, h: 0.3, fontSize: 11, bold: true, color: DEEP, charSpacing: 3 });
    text(s, head, { x: x + 0.3, y: y + 0.9, w: w - 0.6, h: 0.9, fontSize: 15, bold: true });
    text(s, body, { x: x + 0.3, y: y + 1.85, w: w - 0.6, h: 0.75, fontSize: 12, color: MUTED });
    text(s, punch, { x: x + 0.3, y: y + 2.6, w: w - 0.6, h: 0.45, fontSize: 13, bold: true, color: DEEP });
  });
  s.addNotes(
    "Three jobs. Ready: we work with the systems a business already runs, nothing is rebuilt. Enforce: business rules become execution boundaries for requests routed through Parmana. Prove: every decision is signed and verifiable without trusting the AI system or us.",
  );
}

// ---------- 6. How it works ----------
{
  const s = contentSlide("Solution", "How it works", "Your systems stay. Your authority stays.");
  const nodes = [
    ["AI agent", "Requests an action", "plain"],
    ["Parmana", "Checks business authority", "dark"],
    ["ALLOW / STOP", "Decided before execution", "accent"],
    ["Existing system", "Runs only what was allowed", "plain"],
  ];
  const w = 1.95, gap = 0.4, y = 1.9, h = 1.3;
  nodes.forEach(([label, sub, tone], i) => {
    const x = M + i * (w + gap);
    const fill = tone === "dark" ? INK : tone === "accent" ? LAV : PAPER;
    const line = tone === "dark" ? INK : tone === "accent" ? SOFT : BORDER;
    card(s, x, y, w, h, { fill, line, noShadow: tone !== "plain", name: `node-${i}` });
    text(s, label, { x: x + 0.2, y: y + 0.22, w: w - 0.4, h: 0.4, fontSize: 14, bold: true, color: tone === "dark" ? PAPER : INK, fit: "shrink" });
    text(s, sub, { x: x + 0.2, y: y + 0.72, w: w - 0.4, h: 0.45, fontSize: 12, color: tone === "dark" ? SOFT : MUTED });
    if (i < nodes.length - 1) arrowRight(s, x + w + 0.05, y + h / 2, gap - 0.1);
  });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: M, y: 3.55, w: 9, h: 0.7, rectRadius: 0.08,
    fill: { color: PAPER }, line: { color: PURPLE, width: 1, dashType: "dash" },
  });
  text(s, [
    { text: "Independent proof  ", options: { bold: true, color: DEEP } },
    { text: "of every decision, allowed or stopped. Signed, and verifiable offline without Parmana.", options: { color: INK } },
  ], { x: M + 0.3, y: 3.55, w: 8.4, h: 0.7, fontSize: 14, valign: "middle" });
  text(s, "Parmana does not replace ERP, CRM, payment systems, IAM or AI models. It adds the authority check in front of execution.", {
    x: M, y: 4.45, w: 9, h: 0.5, fontSize: 12, color: MUTED,
  });
  s.addNotes(
    "An autonomous system sends its request through Parmana. Parmana checks it against the business's declared authority. Allowed requests get a signed, single use authorization that the gateway checks again before release; anything else never reaches the system. Every decision leaves a signed record that verifies offline with the business's public keys.",
  );
}

// ---------- 7. Example ----------
{
  const s = contentSlide("Solution", "Example", "What happens when autonomy exceeds authority?");
  card(s, M, 1.65, 4.4, 3.1, { name: "example-request" });
  text(s, "BUSINESS RULE", { x: M + 0.35, y: 1.9, w: 3.7, h: 0.3, fontSize: 10, bold: true, color: MUTED, charSpacing: 2 });
  text(s, "Refunds up to ₹50,000", { x: M + 0.35, y: 2.2, w: 3.7, h: 0.5, fontSize: 22, bold: true });
  text(s, "AUTONOMOUS SYSTEM REQUESTS", { x: M + 0.35, y: 3.0, w: 3.7, h: 0.3, fontSize: 10, bold: true, color: MUTED, charSpacing: 2 });
  text(s, "₹75,000", { x: M + 0.35, y: 3.3, w: 3.7, h: 0.9, fontSize: 48, bold: true });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.1, y: 1.65, w: 4.4, h: 3.1, rectRadius: 0.08, fill: { color: INK }, line: { color: INK } });
  text(s, "PARMANA", { x: 5.45, y: 1.9, w: 3.7, h: 0.3, fontSize: 10, bold: true, color: SOFT, charSpacing: 2 });
  text(s, "STOPPED", { x: 5.45, y: 2.25, w: 3.7, h: 0.9, fontSize: 48, bold: true, color: PAPER });
  text(s, "Outside declared authority", { x: 5.45, y: 3.15, w: 3.7, h: 0.4, fontSize: 18, bold: true, color: PAPER });
  text(s, [
    { text: "No execution. It never reaches the payment processor.", options: { bullet: true, breakLine: true } },
    { text: "Evidence retained, verifiable independently.", options: { bullet: true } },
  ], { x: 5.45, y: 3.65, w: 3.8, h: 0.95, fontSize: 13, color: SOFT, paraSpaceAfter: 4 });
  s.addNotes("Illustrative rule, not customer data. A ₹42,000 request would proceed once, with the same evidence kept. This is the interactive example on parmanasystems.com.");
}

// ---------- 8. Product ----------
pres.addSection({ title: "Product" });
{
  const s = contentSlide("Product", "Product today", "Built to be checked, not taken on trust");
  const items = [
    ["Signed decisions", "Ed25519, optionally ML-DSA-65 as well. Signing keys can stay in AWS KMS."],
    ["Bound to the action", "Single use authorization for the exact action approved. Change it and it no longer matches."],
    ["People decide, twice", "A policy takes effect only after one person proposes it and another approves it."],
    ["Offline verification", "Open source @parmana/sign checks a record with only the business's public keys."],
    ["Real connectors", "Paytm, HubSpot, GitHub, Slack, and any HTTPS API registered without a deploy."],
    ["Fits any stack", "TypeScript and Python SDKs, REST. Self-hosted, including networks with no internet route."],
  ];
  const w = 2.85, gapX = 0.225, h = 1.45, gapY = 0.2;
  items.forEach(([k, v], i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = M + col * (w + gapX), y = 1.65 + row * (h + gapY);
    card(s, x, y, w, h, { name: `product-${i}` });
    text(s, k, { x: x + 0.25, y: y + 0.2, w: w - 0.5, h: 0.35, fontSize: 15, bold: true, color: DEEP });
    text(s, v, { x: x + 0.25, y: y + 0.6, w: w - 0.5, h: 0.8, fontSize: 12, color: INK });
  });
  s.addNotes(
    "Everything on this slide exists in the product today and is documented publicly, including a page of what we do not claim. Source is available for evaluation on GitHub, with a public playground and an audit guide for evaluators.",
  );
}

// ---------- 9. Differentiation ----------
{
  const s = contentSlide("Product", "Differentiation", "Other layers answer different questions");
  const yes = "Yes", no = "No", part = "Partly";
  const hdr = (t, dark) => ({ text: t, options: { bold: true, color: dark ? PAPER : INK, fill: { color: dark ? DEEP : LAV }, align: "center", valign: "middle" } });
  const cell = (t, strong) => ({ text: t, options: { align: "center", valign: "middle", bold: !!strong, color: strong ? DEEP : MUTED } });
  const rows = [
    [hdr("", false), hdr("Model guardrails", false), hdr("IAM and API gateways", false), hdr("Logs and observability", false), hdr("Parmana", true)],
    [{ text: "Checks business authority per action", options: { bold: true, valign: "middle" } }, cell(part), cell(no), cell(no), cell(yes, true)],
    [{ text: "Decides before execution", options: { bold: true, valign: "middle" } }, cell(part), cell(yes), cell(no), cell(yes, true)],
    [{ text: "Bound to the exact action approved", options: { bold: true, valign: "middle" } }, cell(no), cell(no), cell(no), cell(yes, true)],
    [{ text: "Evidence verifiable without the vendor", options: { bold: true, valign: "middle" } }, cell(no), cell(no), cell(no), cell(yes, true)],
    [{ text: "Independent of the AI model", options: { bold: true, valign: "middle" } }, cell(no), cell(yes), cell(yes), cell(yes, true)],
  ];
  s.addTable(rows, {
    x: M, y: 1.6, w: 9, colW: [2.8, 1.55, 1.55, 1.55, 1.55], rowH: 0.48,
    fontSize: 12, fontFace: "Calibri", color: INK,
    border: { type: "solid", pt: 0.75, color: "E5E7EB" },
  });
  text(s, "Parmana complements these layers. It does not replace IAM, gateways or model safety work.", { x: M, y: 4.65, w: 9, h: 0.35, fontSize: 12, color: MUTED });
  s.addNotes(
    "Guardrails shape what a model proposes, inside the model vendor's stack. IAM and gateways decide who may call an API, not whether this specific refund is within business authority. Logs tell you afterwards. Parmana is the business's own authority check at execution, with proof that does not depend on trusting the AI system or Parmana.",
  );
}

// ---------- 10. Use cases ----------
{
  const s = contentSlide("Product", "Use cases", "Where authority matters");
  const cases = [
    ["Payments", "Payouts only to approved vendors, within limit"],
    ["Refunds", "Amount limits, signed approval above them"],
    ["Procurement", "Purchasing authority per order"],
    ["Customer operations", "Which records may change, and by how much"],
    ["Engineering", "Merge only the pull request that was approved"],
  ];
  const w = 1.64, gap = 0.2, y = 1.75, h = 2.7;
  cases.forEach(([k, v], i) => {
    const x = M + i * (w + gap);
    card(s, x, y, w, h, { name: `case-${i}` });
    badge(s, x + 0.25, y + 0.3, String(i + 1), { fill: LAV, color: DEEP });
    text(s, k, { x: x + 0.25, y: y + 0.95, w: w - 0.4, h: 0.7, fontSize: 15, bold: true });
    text(s, v, { x: x + 0.25, y: y + 1.65, w: w - 0.4, h: 0.95, fontSize: 12, color: MUTED });
  });
  s.addNotes("Example rules, not customer data. Live walkthroughs for each are at parmanasystems.com/agents?use=refund, payment, procurement, customer and engineering.");
}

// ---------- 11. Go-to-market ----------
pres.addSection({ title: "Business" });
{
  const s = contentSlide("Business", "Go-to-market", "Land with one workflow, then expand");
  const steps = [
    ["Land", "Payment service providers", "PSPs are where merchants deploy agents that move money: refund disputes, vendor payments, KYC workflows."],
    ["Expand", "More workflows, same layer", "Once refunds run through Parmana, payments, procurement and customer operations use the same authority layer."],
    ["Standardize", "Enterprise default", "Parmana becomes the place a business declares what autonomous systems are allowed to do."],
  ];
  const w = 2.75, gap = 0.375, y = 1.65, h = 2.75;
  steps.forEach(([k, head, body], i) => {
    const x = M + i * (w + gap);
    card(s, x, y, w, h, { fill: i === 0 ? INK : PAPER, line: i === 0 ? INK : BORDER, noShadow: i === 0, name: `gtm-${k}` });
    const dark = i === 0;
    text(s, k.toUpperCase(), { x: x + 0.3, y: y + 0.3, w: w - 0.6, h: 0.3, fontSize: 11, bold: true, color: dark ? SOFT : DEEP, charSpacing: 3 });
    text(s, head, { x: x + 0.3, y: y + 0.7, w: w - 0.6, h: 0.75, fontSize: 18, bold: true, color: dark ? PAPER : INK });
    text(s, body, { x: x + 0.3, y: y + 1.45, w: w - 0.6, h: 1.2, fontSize: 12, color: dark ? SOFT : MUTED });
    if (i < steps.length - 1) arrowRight(s, x + w + 0.06, y + h / 2, gap - 0.12);
  });
  text(s, "Developer-led evaluation runs alongside: public docs, a live playground, source on GitHub and an audit guide.", { x: M, y: 4.6, w: 9, h: 0.35, fontSize: 12, color: MUTED });
  s.addNotes(
    "PSPs are the natural entry point because merchants deploy agents that move money inside their platforms. Every sales conversation starts with one consequential workflow, which is also what the demo booking page asks for.",
  );
}

// ---------- 12. Market ----------
{
  const s = contentSlide("Business", "Market", "Start in regulated payments, then expand");
  const stats = [
    ["₹500-1,000", "Crore, India, 2027", "Authority layer for autonomous payments in regulated fintech"],
    ["$2-5B", "Global, 2030", "Authorization infrastructure for autonomous systems across financial services, banking and regulated commerce"],
  ];
  stats.forEach(([n, label, body], i) => {
    const x = M + i * 4.6;
    card(s, x, 1.65, 4.4, 2.75, { fill: i === 0 ? LAV : PAPER, line: i === 0 ? LAV : BORDER, noShadow: i === 0, name: `market-${i}` });
    text(s, n, { x: x + 0.35, y: 1.9, w: 3.8, h: 0.95, fontSize: 48, bold: true, color: DEEP });
    text(s, label, { x: x + 0.35, y: 2.85, w: 3.8, h: 0.35, fontSize: 15, bold: true });
    text(s, body, { x: x + 0.35, y: 3.25, w: 3.8, h: 1.0, fontSize: 13, color: MUTED });
  });
  text(s, "Company estimates, not third-party research. Methodology available on request.", { x: M, y: 4.6, w: 9, h: 0.35, fontSize: 11, italic: true, color: MUTED });
  s.addNotes("Both figures are our own top-down estimates. Be ready to walk through the assumptions; do not present them as analyst numbers.");
}

// ---------- 13. Progress ----------
{
  const s = contentSlide("Business", "Progress", "Built, hardened and public");
  const events = [
    ["2023", "Built from first principles", "Founder starts Parmana around one question: who holds authority when software requests the action?"],
    ["Sep 2026", "Security hardening shipped", "KMS signer (private key never leaves AWS), Secrets Manager, payment-provider signature verification. 209 tests passing."],
    ["Sep 2026", "API deployed", "Parmana API live on Vercel with health checks passing."],
    ["Oct 2026", "Public and evaluable", "Docs, live playground, demo video, audit guide, source on GitHub, repositioned site."],
  ];
  const lineY = 2.15;
  s.addShape(pres.shapes.LINE, { x: M + 0.2, y: lineY, w: 8.6, h: 0, line: { color: SOFT, width: 1.5 } });
  const w = 2.1, gap = 0.2;
  events.forEach(([when, head, body], i) => {
    const x = M + i * (w + gap);
    s.addShape(pres.shapes.OVAL, { x: x + 0.05, y: lineY - 0.11, w: 0.22, h: 0.22, fill: { color: i === events.length - 1 ? PURPLE : PAPER }, line: { color: PURPLE, width: 1.5 } });
    text(s, when, { x, y: 1.65, w, h: 0.3, fontSize: 12, bold: true, color: DEEP });
    text(s, head, { x, y: 2.45, w, h: 0.65, fontSize: 15, bold: true });
    text(s, body, { x, y: 3.1, w, h: 1.7, fontSize: 12, color: MUTED });
  });
  s.addNotes("Pre-revenue. The September hardening added 68 unit tests (209 total at the time). Keep this slide current before each send: update test counts, design partners and pilots only with what is signed.");
}

// ---------- 14. Team ----------
{
  const s = contentSlide("Business", "Team", "Builders who have run trust and scale in production");
  const people = [
    [
      "PC",
      "Pavan Charak",
      "CEO and System Architect",
      "13 years across engineering, product and founding. Software Engineer at TCS. Account Manager at MakeMyTrip, managing ₹1,500 crore in annual hospitality partnerships. Associate Product Manager at Shaadi.com (2M+ monthly active users), where the trust and safety portfolio cut platform abuse 25-30%.",
    ],
    [
      "MS",
      "Mohinder Singh",
      "Co-Founder and Policy Advisor",
      "Career spanning policy, governance and organizational design. Has seen first-hand how weaknesses in a control layer scale across enterprises, which shapes Parmana's core thesis: authority systems strong enough that autonomous systems cannot bypass them.",
    ],
  ];
  people.forEach(([ini, name, role, bio], i) => {
    const x = M + i * 4.6;
    card(s, x, 1.65, 4.4, 3.15, { name: `team-${i}` });
    s.addShape(pres.shapes.OVAL, { x: x + 0.3, y: 1.9, w: 0.75, h: 0.75, fill: { color: i === 0 ? PURPLE : DEEP }, line: { color: i === 0 ? PURPLE : DEEP } });
    text(s, ini, { x: x + 0.3, y: 1.9, w: 0.75, h: 0.75, align: "center", valign: "middle", fontSize: 18, bold: true, color: PAPER });
    text(s, name, { x: x + 1.25, y: 1.95, w: 2.9, h: 0.35, fontSize: 18, bold: true });
    text(s, role, { x: x + 1.25, y: 2.32, w: 2.9, h: 0.3, fontSize: 12, color: DEEP, bold: true });
    text(s, bio, { x: x + 0.3, y: 2.9, w: 3.8, h: 1.8, fontSize: 12, color: INK });
  });
  s.addNotes("Hiring plan funded by the round: integration engineers for PSP partnerships, and enterprise go-to-market.");
}

// ---------- 15. Ask ----------
pres.addSection({ title: "Close" });
{
  const s = contentSlide("Close", "The ask", "Raising $3-5M Series A");
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y: 1.65, w: 3.4, h: 3.1, rectRadius: 0.08, fill: { color: INK }, line: { color: INK } });
  text(s, "$3-5M", { x: M + 0.35, y: 2.0, w: 2.8, h: 1.0, fontSize: 54, bold: true, color: PAPER });
  text(s, "Series A", { x: M + 0.35, y: 3.0, w: 2.8, h: 0.4, fontSize: 18, bold: true, color: SOFT });
  text(s, "To take Parmana from public product to production deployments with PSPs and enterprises.", { x: M + 0.35, y: 3.5, w: 2.75, h: 1.0, fontSize: 12, color: SOFT });
  const uses = [
    ["PSP integrations and technical partnerships", "Connect the authority layer where merchants already deploy agents that move money."],
    ["Regulatory engagement", "Compliance framework development, so evidence maps to what auditors and regulators ask for."],
    ["Enterprise go-to-market and sales", "Turn first workflows into standard deployments across payments, procurement and customer operations."],
  ];
  uses.forEach(([k, v], i) => {
    const y = 1.65 + i * 1.07;
    card(s, 4.15, y, 5.35, 0.95, { name: `use-${i}` });
    badge(s, 4.35, y + 0.26, String(i + 1));
    text(s, k, { x: 4.95, y: y + 0.12, w: 4.4, h: 0.32, fontSize: 14, bold: true });
    text(s, v, { x: 4.95, y: y + 0.46, w: 4.4, h: 0.45, fontSize: 11, color: MUTED });
  });
  s.addNotes("We are not rebuilding payments or regulation. The money connects the authority layer to systems and processes already in motion.");
}

// ---------- 16. Close ----------
{
  const s = pres.addSlide({ masterName: "PM_DARK", sectionTitle: "Close" });
  s.addText("PARMANA", { placeholder: "eyebrow" });
  s.addText([{ text: "Your business decides what autonomous systems are allowed to do", options: { fontSize: 32 } }], { placeholder: "title" });
  s.addText("Ready. Enforced. Proven.", { placeholder: "body" });
  text(s, "Pavan Charak  |  founder@parmanasystems.com  |  +91 97179 94459  |  parmanasystems.com", { x: M + 0.1, y: 4.75, w: 8.8, h: 0.3, fontSize: 12, color: SOFT });
  s.addShape(pres.shapes.OVAL, { x: 8.3, y: -1.2, w: 3.2, h: 3.2, fill: { color: PURPLE, transparency: 70 }, line: { color: PURPLE, transparency: 100 } });
  s.addNotes("Close on the tagline. Offer the live demo at parmanasystems.com/demo and the evaluation guide for technical diligence.");
}

(async () => {
  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log("wrote", OUT);
})();
