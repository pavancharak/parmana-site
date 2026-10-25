import { questions } from "../../lib/questions";

export const dynamic = "force-static";

const base = "https://parmanasystems.com";

export function GET() {
  const questionLines = questions
    .map((q) => `- [${q.question}](${base}/questions/${q.slug})`)
    .join("\n");

  const body = `# Parmana Systems

> Parmana is the trust layer for every action. It checks each action, whether a person or a machine takes it, against the limits a business sets, and keeps signed proof of what happened.

## Pages

- [Home](${base}/): what Parmana does, how it works, and proof points
- [Vision](${base}/vision): what we believe and where we are heading
- [Security review](${base}/security): what Parmana guarantees, its limits, and how it is reviewed
- [Compare](${base}/compare): how Parmana compares with other tools
- [Verify a record](${base}/verify): check a signed record yourself

## Questions

${questionLines}

## Documentation and blog

- [Documentation](https://docs.parmanasystems.com): reader docs, guides, SDKs and the API
- [Documentation index for AI tools](https://docs.parmanasystems.com/llms.txt)
- [Blog](https://blog.parmanasystems.com): technical and business posts, in series
- [Source code](https://github.com/pavancharak/parmana-core): the server, SDKs and tests
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
