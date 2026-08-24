const rows = [
  {
    actor: "AI Agent",
    problem: "Capable but unauthorized",
    answer: "Runtime verification gate",
  },
  {
    actor: "Compromised Employee",
    problem: "Trusted but acting outside policy",
    answer: "Runtime verification gate",
  },
  {
    actor: "Fraudster",
    problem: "Intent to attack",
    answer: "Runtime verification gate",
  },
  {
    actor: "Third Party App",
    problem: "Capability creep",
    answer: "Runtime verification gate",
  },
  {
    actor: "Automated System",
    problem: "No human oversight",
    answer: "Runtime verification gate",
  },
];

export default function ActorTable() {
  return (
    <section className="bg-bg-light">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] text-text-primary text-center">
          Prevents unauthorized execution, regardless of source
        </h2>
        <p className="mt-4 text-base leading-[1.6] text-text-secondary text-center max-w-[720px] mx-auto">
          AI agent, compromised employee, fraudster, third party app, or
          automated system: Parmana verifies before any of them can execute.
        </p>

        <div className="mt-12 overflow-x-auto rounded-lg border border-border-light bg-white">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-border-light">
                <th className="px-6 py-4 text-sm font-bold text-text-primary">Actor</th>
                <th className="px-6 py-4 text-sm font-bold text-text-primary">Problem</th>
                <th className="px-6 py-4 text-sm font-bold text-text-primary">
                  Parmana&apos;s Answer
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.actor}
                  className={i !== rows.length - 1 ? "border-b border-border-light" : ""}
                >
                  <td className="px-6 py-4 text-sm font-bold text-text-primary">{row.actor}</td>
                  <td className="px-6 py-4 text-sm text-text-secondary">{row.problem}</td>
                  <td className="px-6 py-4 text-sm font-bold text-primary">{row.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
