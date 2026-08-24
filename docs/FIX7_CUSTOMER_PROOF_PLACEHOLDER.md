# Fix #7: Customer Proof (Deferred, Month 2)

**Status:** Not implemented in this pass, deliberately.

**Why deferred rather than faked:** this is the largest single gap on the site (no logo, customer
name, or usage number anywhere), but the current copy never claims proof it doesn't have — the CTA is
an honest "talk through your payment flow" conversation, not a fake self-serve "book a demo" widget.
That restraint is a real part of why the site's grift-risk reads LOW. Filling this with placeholder
logos or an invented case study would fix the score at the cost of the thing keeping the score
honest. Ship this fix only when there's a real, named design partner willing to go public.

## When ready, here's where it plugs in

**Logo row** — add near the top of `components/Differentiators.tsx` or as a new component rendered
right after `Hero` in `app/page.tsx`:

```tsx
<div className="flex gap-8 justify-center items-center">
  <img src="/logos/[customer]-logo.svg" alt="[Customer]" className="h-8" />
</div>
```

**Case study line** — a short, specific, real sentence (not generic "trusted by leading fintechs"):

> "[Customer] uses Parmana to verify authorization before agents execute refunds. Every refund is
> signed and auditable."

**FAQ addition** — append to the array in `components/FAQ.tsx`, in the same plain-text style as the
existing 16/17 entries:

```
question: "Who is using Parmana?"
answer: "[Customer] uses Parmana for [specific use case]. Other fintech teams are evaluating it."
```

## Rule for whoever implements this

Every name, logo, and number in this section must be real and confirmed by whoever owns the customer
relationship before it ships. Do not use "Razorpay" as a placeholder logo or example customer, it
appears in the `parmana-exp` docs subdomain as an example settlement connector/integration partner,
not a confirmed named customer, and shipping it as a customer logo would be exactly the kind of
unverifiable claim this whole fix pass was meant to remove.
