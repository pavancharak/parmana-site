"use client";

import { useState } from "react";

const limit = 50000;

const options = [
  { label: "Example A", amount: 25000 },
  { label: "Example B", amount: 75000 },
];

const format = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

export default function PaymentCheck() {
  const [amount, setAmount] = useState(options[0].amount);
  const allowed = amount <= limit;

  return (
    <div className="check">
      <div className="check-choices" role="group" aria-label="Choose a payment to check">
        {options.map((option) => (
          <button
            key={option.label}
            type="button"
            className={`choice${amount === option.amount ? " active" : ""}`}
            aria-pressed={amount === option.amount}
            onClick={() => setAmount(option.amount)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <dl className="check-facts">
        <div>
          <dt>Payment requested</dt>
          <dd>{format(amount)}</dd>
        </div>
        <div>
          <dt>Business limit</dt>
          <dd>{format(limit)}</dd>
        </div>
      </dl>

      <p className={`check-result ${allowed ? "allowed" : "blocked"}`} aria-live="polite">
        {allowed ? "Allowed. The payment proceeds." : "Blocked. The payment does not proceed."}
      </p>
    </div>
  );
}
