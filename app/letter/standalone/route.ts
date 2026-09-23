import { colors } from "@/lib/config";
import { letterDate, recipientFrom, sections, signature } from "@/lib/investorLetter";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Self-contained HTML (no external requests) for email attachments and print-to-PDF.
function render(recipient: string): string {
  const body = sections
    .map((s) => {
      const blocks = s.blocks
        .map((b) =>
          b.kind === "p" ? `<p>${esc(b.text)}</p>` : `<p><strong>${esc(b.label)}.</strong> ${esc(b.text)}</p>`,
        )
        .join("\n");
      return s.heading ? `<section class="ruled"><h2>${esc(s.heading)}</h2>\n${blocks}</section>` : `<section>${blocks}</section>`;
    })
    .join("\n");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Parmana: a letter to investors</title>
<style>
  body { margin: 0; background: ${colors.lavender}; color: ${colors.ink}; font: 17px/1.8 -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif; }
  article { max-width: 800px; margin: 48px auto; background: ${colors.paper}; border: 1px solid ${colors.border}; border-radius: 2px; padding: 80px 60px; box-sizing: border-box; }
  header { display: flex; justify-content: space-between; gap: 24px; border-left: 2px solid ${colors.purple}; padding-left: 16px; }
  .brand { font-weight: 700; font-size: 20px; line-height: 1.2; }
  .mono { font-family: ui-monospace, "JetBrains Mono", Menlo, monospace; font-size: 12px; text-transform: uppercase; letter-spacing: .14em; opacity: .6; }
  p { margin: 0 0 24px; }
  h2 { font-size: 20px; margin: 0 0 20px; break-after: avoid; }
  section { margin-top: 24px; }
  section.ruled { margin-top: 40px; padding-top: 32px; border-top: 1px solid ${colors.border}; }
  strong { color: ${colors.purpleDeep}; }
  .greeting { margin-top: 48px; }
  .sig { margin-top: 32px; border-left: 2px solid ${colors.purple}; padding-left: 16px; break-inside: avoid; }
  .sig p { margin: 0; }
  a { color: inherit; }
  @media (max-width: 768px) { article { margin: 0; border: 0; padding: 40px 24px; } body { font-size: 16px; } header { flex-direction: column; } }
  @media print { body { background: none; } article { margin: 0; border: 0; padding: 0; } }
</style>
</head>
<body>
<article>
<header>
  <div><div class="brand">Parmana</div><div class="mono">Authorization infrastructure</div></div>
  <div class="mono">${esc(letterDate)}</div>
</header>
<p class="greeting">Dear ${esc(recipient)},</p>
${body}
<p style="margin-top:48px;font-style:italic">${esc(signature.closing)}</p>
<div class="sig">
  <p><strong style="color:inherit">${esc(signature.name)}</strong></p>
  <p>${esc(signature.title)}, ${esc(signature.company)}</p>
  <p class="mono" style="text-transform:none;letter-spacing:0"><a href="mailto:${esc(signature.email)}">${esc(signature.email)}</a> · ${esc(signature.phone)}</p>
</div>
</article>
</body>
</html>`;
}

export function GET(req: Request) {
  const to = new URL(req.url).searchParams.get("to") ?? undefined;
  return new Response(render(recipientFrom(to)), {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
