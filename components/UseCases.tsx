"use client";

import { useState } from "react";

// Ordered by severity, most consequential and hardest to reverse first.
// Deliberately spans domains beyond payments, since Parmana's boundary is
// domain agnostic (action, target, parameters), not payments specific.
const useCases = [
  {
    name: "Infrastructure changes",
    subtitle: "Your change control policy",
    request: "An autonomous operations agent proposes deleting, scaling down, or reconfiguring a production system.",
    checks: "Parmana checks the change against your change control policy, including which systems are protected and who can authorize a change to them.",
    outcome: "Permitted changes proceed. Changes outside policy are blocked before they touch production.",
  },
  {
    name: "Access and permissions",
    subtitle: "Your access policy",
    request: "An autonomous system requests to grant, revoke, or elevate a user's or system's access.",
    checks: "Parmana checks the request against your access policy, including which roles can grant which permissions.",
    outcome: "Authorized access changes proceed. Unauthorized elevation is blocked.",
  },
  {
    name: "Payments",
    subtitle: "Your approval limit",
    request: "An autonomous system requests a payment to a vendor.",
    checks: "Parmana verifies the system is authorized to request it, the vendor is on the approved list, and the amount is within the existing limit.",
    outcome: "If all conditions hold, the payment executes. If any fails, the payment is blocked.",
  },
  {
    name: "Data deletion and retention",
    subtitle: "Your retention policy",
    request: "An autonomous system requests to delete or purge records, accounts, or stored data.",
    checks: "Parmana checks the request against your retention policy and any legal hold or compliance requirement that applies.",
    outcome: "If retention requirements are satisfied, deletion proceeds. If not, it is blocked.",
  },
  {
    name: "Code deployment",
    subtitle: "Your release policy",
    request: "An autonomous coding agent proposes merging or deploying a change to a production codebase.",
    checks: "Parmana checks the deployment against your release policy, including required reviews and which environments the agent is allowed to touch.",
    outcome: "Deployments that satisfy your policy proceed. Deployments that skip a required step are blocked.",
  },
  {
    name: "Contracts and bids",
    subtitle: "Your authority to commit",
    request: "An autonomous negotiation or procurement system proposes accepting terms, signing a contract, or submitting a binding bid.",
    checks: "Parmana checks the commitment against who has authority to bind your organization and any value or term limits that apply.",
    outcome: "Commitments within your authority proceed. Commitments outside it are blocked before they bind you.",
  },
  {
    name: "Customer communications",
    subtitle: "Your communication policy",
    request: "An autonomous system proposes sending a regulated disclosure, public statement, or commitment on the company's behalf.",
    checks: "Parmana checks the message against your communication policy, including which claims and commitments require review.",
    outcome: "Compliant communications go out. Anything outside policy is held before it reaches a customer or the public.",
  },
  {
    name: "HR and workforce actions",
    subtitle: "Your HR policy",
    request: "An autonomous system proposes a termination, a payroll change, or a benefits change for an employee.",
    checks: "Parmana checks the action against your HR policy and who has authority to approve it.",
    outcome: "Authorized actions proceed. Actions outside policy are held for a person to review.",
  },
  {
    name: "Financial approvals",
    subtitle: "Your approval chain",
    request: "An autonomous system requests approval for an expense, investment, or transfer.",
    checks: "Parmana evaluates the amount threshold, the budget owner, and the approval chain.",
    outcome: "The action proceeds only if every authorization check passes.",
  },
  {
    name: "Vendor onboarding",
    subtitle: "Your approved list",
    request: "A procurement agent, autonomous or human run, needs to onboard a new vendor or commit to a purchase.",
    checks: "Parmana checks that KYC is complete, compliance screening passed, and the category or amount is approved.",
    outcome: "If all checks pass, the action proceeds. If any fails, it is blocked until requirements are met.",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const current = useCases[active];

  return (
    <section id="use-cases" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[820px] mx-auto">
          Wherever an autonomous system can take a consequential action
        </h2>

        <p className="mt-3 text-base text-ink/70 text-center">
          Your policies already define the authority.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {useCases.map((useCase, i) => (
            <button
              key={useCase.name}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-md px-5 py-2 text-sm font-medium transition-all duration-150 min-h-[44px] ${
                active === i
                  ? "bg-purple text-white"
                  : "border border-border bg-white text-ink/70 hover:border-purple/50 hover:text-ink"
              }`}
            >
              {useCase.name}
            </button>
          ))}
        </div>

        <div className="mt-10 rounded-md border border-border bg-white p-8 md:p-10 max-w-[760px] mx-auto">
          <p className="text-xs uppercase tracking-wide font-mono text-purple-deep">
            {current.subtitle}
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <p className="text-sm font-semibold text-ink">Request</p>
              <p className="mt-2 text-sm leading-[1.65] text-ink/70">{current.request}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-ink">Parmana checks</p>
              <p className="mt-2 text-sm leading-[1.65] text-ink/70">{current.checks}</p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm font-semibold text-purple-deep">Outcome</p>
              <p className="mt-2 text-sm leading-[1.65] text-ink/70">{current.outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
