import { letterMarkdown, recipientFrom } from "@/lib/investorLetter";

export function GET(req: Request) {
  const to = new URL(req.url).searchParams.get("to") ?? undefined;
  return new Response(letterMarkdown(recipientFrom(to)), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": 'attachment; filename="parmana-investor-letter.md"',
    },
  });
}
