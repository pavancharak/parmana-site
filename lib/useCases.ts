// Illustrative examples only. Limits are example rules, not customer data.
export type UseCase = {
  slug: string;
  title: string;
  agent: string;
  building: string;
  rule: string;
  inBounds: { label: string; amount: string };
  outOfBounds: { label: string; amount: string };
  summary: string;
  // What the autonomous system may request, what stays out of bounds, what Parmana checks, what evidence remains.
  can: string;
  cannot: string;
  enforces: string;
  evidence: string;
};

export const useCases: Record<string, UseCase> = {
  refund: {
    slug: "refund",
    title: "Refunds",
    agent: "Refund agent",
    building: "handle customer refunds",
    rule: "May request refunds up to ₹50,000 per transaction",
    inBounds: { label: "Refund", amount: "₹42,000" },
    outOfBounds: { label: "Refund", amount: "₹75,000" },
    summary:
      "Your refund agent requests refunds up to ₹50,000. Parmana ensures every one that proceeds stays within that bound.",
    can: "Request refunds up to ₹50,000 against a real order.",
    cannot: "Get a refund above the limit, or a second refund on the same approval, to your payment processor.",
    enforces: "The amount limit, the order it applies to, and a signed manager approval when your rule asks for one.",
    evidence: "A signed record of the request, the rule version applied and the decision, allowed or stopped.",
  },
  payment: {
    slug: "payment",
    title: "Payments",
    agent: "Payments agent",
    building: "initiate vendor payments",
    rule: "May request payments up to ₹2,00,000 to approved vendors",
    inBounds: { label: "Payment to approved vendor", amount: "₹1,20,000" },
    outOfBounds: { label: "Payment to new vendor", amount: "₹1,20,000" },
    summary:
      "Your payments agent requests payouts to approved vendors up to ₹2,00,000. Parmana ensures every payment that proceeds stays within that bound.",
    can: "Request payouts up to ₹2,00,000 to vendors on your approved list.",
    cannot: "Pay a vendor that is not on the list, or exceed the amount, through Parmana.",
    enforces: "The payee, the amount and the authorization for that exact payment, used once.",
    evidence: "A signed record tying the payment request to the authority that allowed or stopped it.",
  },
  approval: {
    slug: "approval",
    title: "Approvals",
    agent: "Approvals agent",
    building: "approve discounts and exceptions",
    rule: "May request discounts up to 15% on a single order",
    inBounds: { label: "Discount", amount: "10%" },
    outOfBounds: { label: "Discount", amount: "25%" },
    summary:
      "Your approvals agent requests discounts up to 15%. Parmana ensures every discount that proceeds stays within that bound.",
    can: "Request discounts up to 15% on a single order.",
    cannot: "Push a larger discount through without the sign-off your rule requires.",
    enforces: "The discount ceiling, and a signed approval from a person you trust above it.",
    evidence: "A signed record of who requested the exception, which rule applied and the outcome.",
  },
  procurement: {
    slug: "procurement",
    title: "Procurement",
    agent: "Procurement agent",
    building: "raise purchase orders",
    rule: "May request purchase orders up to ₹1,00,000 per order",
    inBounds: { label: "Purchase order", amount: "₹64,000" },
    outOfBounds: { label: "Purchase order", amount: "₹1,80,000" },
    summary:
      "Your procurement agent requests purchase orders up to ₹1,00,000. Parmana ensures every order that proceeds stays within that bound.",
    can: "Request purchase orders up to ₹1,00,000 per order.",
    cannot: "Raise a larger order through Parmana without the approval your rule requires.",
    enforces: "Purchasing authority per order, checked before the order reaches your purchasing system.",
    evidence: "A signed record of each order request and the purchasing authority that applied.",
  },
  customer: {
    slug: "customer",
    title: "Customer operations",
    agent: "Account operations agent",
    building: "update customer accounts and records",
    rule: "May request account credits up to ₹5,000 per customer",
    inBounds: { label: "Account credit", amount: "₹2,000" },
    outOfBounds: { label: "Account credit", amount: "₹12,000" },
    summary:
      "Your account operations agent requests credits up to ₹5,000. Parmana ensures every change that proceeds stays within that bound.",
    can: "Request account credits and record changes within the limits you set.",
    cannot: "Change a customer record outside those limits through Parmana.",
    enforces: "Which records may change, by how much, and for which customer.",
    evidence: "A signed record of every requested change and the authority that applied.",
  },
  engineering: {
    slug: "engineering",
    title: "Engineering",
    agent: "Engineering agent",
    building: "merge pull requests",
    rule: "May request merges only for pull requests that were approved",
    inBounds: { label: "Merge", amount: "approved pull request" },
    outOfBounds: { label: "Merge", amount: "unapproved pull request" },
    summary:
      "Your engineering agent requests merges. Parmana ensures only the pull request that was approved is merged.",
    can: "Request a merge for a pull request that a person approved.",
    cannot: "Merge a different or unapproved pull request through Parmana.",
    enforces: "That the merge matches the exact pull request the approval covers.",
    evidence: "A signed record of the merge request, the approval and the decision.",
  },
};

export const defaultUseCase = useCases.refund;
