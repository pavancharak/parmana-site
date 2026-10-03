import { nav } from "@/lib/config";
import { Eyebrow, Heading, Lead, Section } from "./Section";

const code = `import { ParmanaClient, createBusinessTransaction } from "@parmana/sdk";

const parmana = new ParmanaClient({
  endpoint: process.env.PARMANA_ENDPOINT,
  apiKey: process.env.PARMANA_API_KEY,
});

// Allowed requests run once and return a signed record.
// Anything your rules refuse is stopped and nothing runs.
const record = await parmana.execute(
  createBusinessTransaction({
    principalId: "refund-agent",
    purpose: "Customer refund",
    action: "paytm:refund",
    target: "order/ORD-1042",
    parameters: { orderId: "ORD-1042", amount: 15000 },
    policy: { name: "customer-refund", version: "1.2.0", schemaVersion: "1.0.0" },
    signals: { managerApproved: true, approvalArtifact },
  }),
);`;

const links = [
  { title: "Quickstart", text: "Run a local server and send your first request.", href: nav.quickstart },
  { title: "Try the playground", text: "A live sandbox with a published demo key. Nothing to install.", href: nav.playground },
  { title: "Verify records offline", text: "@parmana/sign checks a record with only your public keys.", href: nav.verifySdk },
];

export default function Developers() {
  return (
    <Section id="developers">
      <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>Developers</Eyebrow>
          <Heading>One call between your agent and your system.</Heading>
          <Lead>
            TypeScript and Python SDKs, a REST API, and connector SDKs for your own systems. Run it yourself, including
            on a network with no route to the internet.
          </Lead>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {links.map((l) => (
              <li key={l.title}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-6 py-5">
                  <span>
                    <span className="block text-base font-semibold text-ink group-hover:text-purple-deep">{l.title}</span>
                    <span className="mt-1 block text-sm text-ink/60">{l.text}</span>
                  </span>
                  <span aria-hidden className="mt-1 text-purple-deep transition-transform group-hover:translate-x-1">›</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl bg-ink shadow-[0_32px_64px_-24px_rgba(26,26,26,0.55)] ring-1 ring-white/10">
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
            <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-3 font-mono text-xs text-white/50">refund-agent.ts</span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-[12.5px] leading-[1.7] text-white/85">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </Section>
  );
}
