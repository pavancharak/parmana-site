const rows = [
  {
    actor: "AI Agent",
    problem: "Can request a payment that falls outside its intended use",
    answer: "Check the payment before it happens",
  },
  {
    actor: "Employee",
    problem: "Can act outside their allowed authority",
    answer: "Check the payment against your rules",
  },
  {
    actor: "Third-Party App",
    problem: "Can request more than it should",
    answer: "Stop anything not authorized",
  },
  {
    actor: "Automated System",
    problem: "Can act without someone reviewing every action",
    answer: "Check every important action",
  },
  {
    actor: "Fraudulent Request",
    problem: "Can try to make an unauthorized payment",
    answer: "Refuse the request",
  },
];

export default function ActorTable() {
  return (
    <section className="bg-bg-light">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] text-text-primary text-center max-w-[900px] mx-auto">
          Whatever makes the request, your rules still decide.
        </h2>

        <p className="mt-4 text-base leading-[1.6] text-text-secondary text-center max-w-[720px] mx-auto">
          An AI agent, employee, application, or automated system can request
          a payment. Parmana checks the request before it can move money.
        </p>

        <div className="mt-12 overflow-x-auto rounded-lg border border-border-light bg-white">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-border-light">
                <th className="px-6 py-4 text-sm font-bold text-text-primary">
                  Who is making the request?
                </th>
                <th className="px-6 py-4 text-sm font-bold text-text-primary">
                  What can go wrong?
                </th>
                <th className="px-6 py-4 text-sm font-bold text-text-primary">
                  What Parmana does
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.actor}
                  className={
                    i !== rows.length - 1
                      ? "border-b border-border-light"
                      : ""
                  }
                >
                  <td className="px-6 py-4 text-sm font-bold text-text-primary">
                    {row.actor}
                  </td>

                  <td className="px-6 py-4 text-sm leading-[1.5] text-text-secondary">
                    {row.problem}
                  </td>

                  <td className="px-6 py-4 text-sm font-bold leading-[1.5] text-primary">
                    {row.answer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-base leading-[1.6] text-text-primary text-center max-w-[720px] mx-auto font-bold">
          The source of the request does not change the rule.
        </p>
      </div>
    </section>
  );
}