import {
  CreditCardIcon,
  ArrowPathIcon,
  BanknotesIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const useCases = [
  {
    name: "Agentic Payments",
    icon: CreditCardIcon,
    body: "Let agents request payments while your rules decide which payments can actually happen.",
  },
  {
    name: "Refunds & Transfers",
    icon: ArrowPathIcon,
    body: "Check refunds, transfers, and other money movements before they are executed.",
  },
  {
    name: "Payouts",
    icon: BanknotesIcon,
    body: "Make sure automated payouts match the amount, recipient, and rules that were approved.",
  },
  {
    name: "Other Financial Actions",
    icon: ShieldCheckIcon,
    body: "Apply the same control to any automated action where the wrong decision can have a financial impact.",
  },
];

export default function UseCases() {
  return (
    <section className="bg-white">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] text-text-primary text-center max-w-[800px] mx-auto">
          Start with the actions that move money.
        </h2>

        <p className="mt-4 text-base leading-[1.6] text-text-secondary text-center max-w-[720px] mx-auto">
          Parmana helps fintech teams make automated financial actions
          checkable before they happen.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.name}
              className="rounded-lg p-6 border border-border-light transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-black/5"
            >
              <useCase.icon
                className="h-10 w-10 text-primary"
                aria-hidden="true"
              />

              <h3 className="mt-4 text-lg font-bold text-text-primary">
                {useCase.name}
              </h3>

              <p className="mt-3 text-sm leading-[1.6] text-text-secondary">
                {useCase.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm leading-[1.6] text-text-secondary max-w-[680px] mx-auto">
            The same approach can later protect other high-impact automated
            actions. The principle stays the same: check first, execute second.
          </p>
        </div>
      </div>
    </section>
  );
}