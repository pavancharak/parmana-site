const stakeholders = [
  {
    role: "CFO",
    value: "Autonomous systems respect approval limits and delegation rules automatically.",
  },
  {
    role: "Chief Risk / Compliance Officer",
    value: "Existing policies are enforced before an action, not audited after it.",
  },
  {
    role: "CTO",
    value: "The authorization layer sits outside business systems and does not add risk to core infrastructure.",
  },
  {
    role: "CISO / Security",
    value: "The authorization boundary prevents unauthorized execution before it reaches protected systems.",
  },
  {
    role: "Engineering lead",
    value: "Existing authorization rules are encoded once and enforced everywhere autonomous systems act.",
  },
  {
    role: "Regulator",
    value: "Cryptographic proof shows authorization was evaluated before every action.",
  },
];

export default function Stakeholders() {
  return (
    <section id="stakeholders" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">
          Parmana speaks to your entire organization
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {stakeholders.map((s) => (
            <div key={s.role} className="rounded-md border border-border bg-lavender p-8">
              <h3 className="text-base font-bold text-purple-deep mb-2">{s.role}</h3>
              <p className="text-sm leading-[1.6] text-ink/70">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
