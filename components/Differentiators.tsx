import {
  LockClosedIcon,
  BoltIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

const items = [
  {
    title: "Credential Isolation",
    icon: LockClosedIcon,
    body: "No actor, AI, application, or otherwise, holds the actual execution credential. Requests generate intents only. Authorization and execution stay separate.",
  },
  {
    title: "Atomic Authorization",
    icon: BoltIcon,
    body: "No standing review or hold state. Execute immediately or refuse immediately, regardless of who or what requested it. No partial execution, no continuation after refusal.",
  },
  {
    title: "Verifiable Enforcement",
    icon: DocumentCheckIcon,
    body: "Every authorization and every refusal produces independently verifiable evidence: cryptographic attestation, signed audit records. Authority is provable.",
  },
];

export default function Differentiators() {
  return (
    <section id="differentiators" className="bg-white">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] text-text-primary text-center">
          The challenge isn&apos;t intelligence. It&apos;s authority.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-bg-light p-6 flex flex-col items-start gap-3"
            >
              <item.icon className="h-10 w-10 text-primary" aria-hidden="true" />
              <p className="text-lg font-bold text-text-primary">{item.title}</p>
              <p className="text-sm leading-[1.6] text-text-secondary">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-[800px] mx-auto text-center">
          <p className="text-base leading-[1.6] text-text-secondary">
            AI can be intelligent without being in charge. Your business rules
            still decide what it is allowed to do. Intelligence, whether AI,
            application, or system, proposes. Your authorization rules decide.
            Parmana enforces.
          </p>
          <p className="mt-4 text-sm font-bold text-text-primary">
            Intelligence layer → Request → Policy layer → Authorization → Execution
          </p>
        </div>
      </div>
    </section>
  );
}
