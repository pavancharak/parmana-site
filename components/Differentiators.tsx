import {
  LockClosedIcon,
  BoltIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

const items = [
  {
    title: "No Direct Access",
    icon: LockClosedIcon,
    body: "The agent can request a payment, but it never holds the credential that can move the money. The ability to execute stays separate from the agent.",
  },
  {
    title: "One Action, One Decision",
    icon: BoltIcon,
    body: "Every payment is checked against your rules. It is either allowed or stopped. There is no partial approval and no continuing after a refusal.",
  },
  {
    title: "Proof Before Payment",
    icon: DocumentCheckIcon,
    body: "Parmana signs every authorization with Ed25519 before the action executes. Your payment system, or any regulator, can verify the signature independently with the public key and decision record.",
  },
];

export default function Differentiators() {
  return (
    <section id="differentiators" className="bg-white">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] text-text-primary text-center max-w-[800px] mx-auto">
          Before money moves, three things happen.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-bg-light p-6 flex flex-col items-start gap-3"
            >
              <item.icon
                className="h-10 w-10 text-primary"
                aria-hidden="true"
              />

              <p className="text-lg font-bold text-text-primary">
                {item.title}
              </p>

              <p className="text-sm leading-[1.6] text-text-secondary">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-[800px] mx-auto text-center">
          <p className="text-base leading-[1.6] text-text-secondary">
            An agent can request an action. Your business rules decide whether
            it is allowed. Parmana makes sure the action matches that decision
            before it happens.
          </p>

          <p className="mt-4 text-sm font-bold text-text-primary">
            Request → Check your rules → Authorize → Execute
          </p>
        </div>
      </div>
    </section>
  );
}