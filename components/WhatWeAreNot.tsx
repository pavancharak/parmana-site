import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";

const isNot = [
  "An AI safety product",
  "A policy documentation tool",
  "An audit log",
  "A risk score",
  "An approval inbox",
];

const is = [
  "A check before money moves",
  "A way to keep execution separate from the agent",
  "A decision your payment system can verify",
  "Proof of what was authorized",
];

export default function WhatWeAreNot() {
  return (
    <section className="bg-white">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] tracking-tight text-text-primary text-center max-w-[800px] mx-auto">
          Parmana does one important thing
        </h2>

        <p className="mt-4 text-base leading-[1.6] text-text-secondary text-center max-w-[680px] mx-auto">
          It makes sure an important action is authorized before the action
          happens.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          <div className="rounded-xl border border-border-light p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg hover:shadow-black/5">
            <p className="text-sm font-bold uppercase tracking-wide text-text-secondary">
              Parmana is not
            </p>

            <ul className="mt-4 space-y-3">
              {isNot.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XMarkIcon
                    className="h-5 w-5 shrink-0 text-text-secondary"
                    aria-hidden="true"
                  />

                  <span className="text-sm text-text-secondary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border-light bg-bg-light p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg hover:shadow-black/5">
            <p className="text-sm font-bold uppercase tracking-wide text-primary">
              Parmana is
            </p>

            <ul className="mt-4 space-y-3">
              {is.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon
                    className="h-5 w-5 shrink-0 text-success"
                    aria-hidden="true"
                  />

                  <span className="text-sm font-bold text-text-primary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}