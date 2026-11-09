"use client";

import { useState } from "react";

const limit = 50000;

const options = [
  { label: "₹25,000", amount: 25000 },
  { label: "₹75,000", amount: 75000 },
];

const format = (amount: number) => "₹" + amount.toLocaleString("en-IN");

export default function PaymentCheck() {
  const [amount, setAmount] = useState(options[0].amount);
  const withinExampleLimit = amount <= limit;

  return (
    <div className="check">
      <h3>Illustrative payment limit check</h3>
      <p className="body">
        This is a browser-only example using a fixed ₹50,000 limit. It does not contact
        Parmana, check a live policy, call a bank or payment provider, approve a payment,
        or send money.
      </p>

      <div className="check-choices" role="group" aria-label="Choose an example payment amount">
        {options.map((option) => (
          <button
            key={option.amount}
            type="button"
            className={"choice" + (amount === option.amount ? " active" : "")}
            aria-pressed={amount === option.amount}
            onClick={() => setAmount(option.amount)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <dl className="check-facts">
        <div>
          <dt>Example amount</dt>
          <dd>{format(amount)}</dd>
        </div>
        <div>
          <dt>Example limit</dt>
          <dd>{format(limit)}</dd>
        </div>
      </dl>

      <p className={"check-result " + (withinExampleLimit ? "allowed" : "blocked")} aria-live="polite">
        {withinExampleLimit
          ? "Within the example limit"
          : "Above the example limit"}
      </p>
    </div>
  );
}
