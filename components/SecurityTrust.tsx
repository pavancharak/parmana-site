import { nav } from "@/lib/config";
import BoundaryDiagram from "@/components/BoundaryDiagram";

const guarantees = [
  "Authorization verified before execution, not audited after",
  "The check happens outside your business systems, verified by code audit",
  "A security flaw in your systems can't be used to bypass this check",
  "Single-use, time-bounded, revocable credentials (session-isolated)",
  "Ed25519 cryptographic signing (ML-DSA/Dilithium3 available for quantum-readiness)",
  "Instant audit trail (who, what, when, proof), automatic for every execution",
];

const personas = [
  { role: "CFO / Finance", quote: "Same approval thresholds. AI agents prove they follow them. Before execution." },
  { role: "CRO / Compliance", quote: "Your policies don't change. Execution verified automatically. Cryptographic proof." },
  { role: "CTO", quote: "No rearchitect. Bolt-on verification gate. Your systems unchanged." },
  { role: "Regulators", quote: "Authorized execution with cryptographic proof. Proof happens before execution reaches business systems." },
];

export default function SecurityTrust() {
  return (
    <section id="security" className="relative overflow-hidden bg-navy border-b border-divider">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-mint/10 blur-[140px]"
      />

      <div className="relative max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="font-serif text-[26px] md:text-[32px] font-semibold leading-[1.3] tracking-tight text-paper text-center max-w-[820px] mx-auto">
          Your infrastructure doesn&apos;t need to change. We just make enforcement
          automatic.
        </h2>

        <p className="mt-6 text-lg md:text-xl font-medium leading-[1.5] text-mint text-center max-w-[760px] mx-auto">
          Our guarantee: unauthorized execution by autonomous systems is
          structurally impossible inside the Parmana execution boundary.
        </p>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-mint">
              Technical guarantees
            </p>
            <BoundaryDiagram />
            <ul className="mt-5 space-y-3">
              {guarantees.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-[1.6] text-paper/70">
                  <span className="text-mint mt-[2px]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-mint">
              What your teams get
            </p>
            <div className="mt-5 space-y-5">
              {personas.map((persona) => (
                <div key={persona.role} className="border-l-2 border-divider pl-5">
                  <p className="text-sm font-semibold text-paper">{persona.role}</p>
                  <p className="mt-1 text-sm leading-[1.6] text-paper/70">
                    &ldquo;{persona.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 max-w-[760px] mx-auto text-center border-t border-divider pt-10">
          <p className="text-base leading-[1.65] text-paper/70">
            This isn&apos;t theoretical. A code audit (Sep 8, 2026) validates the
            entire architecture: authorization happens outside your business
            systems, before execution is reached.
          </p>
          <a
            href={nav.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-semibold text-mint hover:text-paper transition-colors duration-200"
          >
            Download the full validation
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
          <p className="mt-6 font-serif text-lg font-semibold text-paper">
            Your infrastructure was built right. We just make it automatic for AI.
          </p>
        </div>
      </div>
    </section>
  );
}
