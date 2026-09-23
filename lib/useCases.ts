// Illustrative examples only. Limits are example rules, not customer data.
export type UseCase = {
  slug: string;
  agent: string;
  building: string;
  rule: string;
  inBounds: { label: string; amount: string };
  outOfBounds: { label: string; amount: string };
  summary: string;
};

export const useCases: Record<string, UseCase> = {
  refund: {
    slug: "refund",
    agent: "Refund agent",
    building: "handle customer refunds",
    rule: "May request refunds up to ₹50,000 per transaction",
    inBounds: { label: "Refund", amount: "₹42,000" },
    outOfBounds: { label: "Refund", amount: "₹75,000" },
    summary:
      "Your refund agent requests refunds up to ₹50,000. Parmana ensures every one that proceeds stays within that bound.",
  },
  payment: {
    slug: "payment",
    agent: "Payments agent",
    building: "initiate vendor payments",
    rule: "May request payments up to ₹2,00,000 to approved vendors",
    inBounds: { label: "Payment to approved vendor", amount: "₹1,20,000" },
    outOfBounds: { label: "Payment to new vendor", amount: "₹1,20,000" },
    summary:
      "Your payments agent requests payouts to approved vendors up to ₹2,00,000. Parmana ensures every payment that proceeds stays within that bound.",
  },
  approval: {
    slug: "approval",
    agent: "Approvals agent",
    building: "approve discounts and exceptions",
    rule: "May request discounts up to 15% on a single order",
    inBounds: { label: "Discount", amount: "10%" },
    outOfBounds: { label: "Discount", amount: "25%" },
    summary:
      "Your approvals agent requests discounts up to 15%. Parmana ensures every discount that proceeds stays within that bound.",
  },
  procurement: {
    slug: "procurement",
    agent: "Procurement agent",
    building: "raise purchase orders",
    rule: "May request purchase orders up to ₹1,00,000 per order",
    inBounds: { label: "Purchase order", amount: "₹64,000" },
    outOfBounds: { label: "Purchase order", amount: "₹1,80,000" },
    summary:
      "Your procurement agent requests purchase orders up to ₹1,00,000. Parmana ensures every order that proceeds stays within that bound.",
  },
};

export const defaultUseCase = useCases.refund;
