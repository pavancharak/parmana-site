const guarantees = [
  {
    title: "Authorization verified before execution",
    desc: "No action reaches your systems without evaluation.",
  },
  {
    title: "Fails closed by default",
    desc: "Blocked by default. Authorized only by an explicit decision state.",
  },
  {
    title: "Single use credentials",
    desc: "Each action consumes its own authorization token, isolated per session.",
  },
  {
    title: "Bounded in time",
    desc: "Authorization expires automatically.",
  },
  {
    title: "Revocable credentials",
    desc: "Authority can be revoked in flight.",
  },
  {
    title: "Cryptographic signing",
    desc: "Ed25519 and ML-DSA signing, with hybrid signatures available for cryptographic agility and quantum readiness.",
  },
  {
    title: "Verifiable execution evidence",
    desc: "Proof that authorization happened before execution.",
  },
  {
    title: "Immutable audit trail",
    desc: "Evidence cannot be modified after the fact.",
  },
  {
    title: "Independent offline verification",
    desc: "Signed execution trust records can be verified independently without trusting the Parmana runtime or database.",
  },
  {
    title: "Discoverable verification keys",
    desc: "Public verification keys are exposed through standard discovery endpoints for independent verification.",
  },
  {
    title: "Key rotation",
    desc: "Verification keys can be rotated through an explicit key identifier without changing the authorization model.",
  },
  {
    title: "Hybrid downgrade protection",
    desc: "Hybrid signature enforcement can be enabled when an environment requires protection against silent fallback to a single signature scheme.",
  },
];

export default function TechGuarantees() {
  return (
    <section id="guarantees" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">
          Execution authority guarantees
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {guarantees.map((g) => (
            <div key={g.title} className="rounded-md border border-border bg-lavender p-8">
              <h3 className="text-base font-bold text-ink mb-2">{g.title}</h3>
              <p className="text-sm leading-[1.6] text-ink/70">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
