const categories = [
  {
    id: "what-it-is",
    label: "What Parmana is",
    faqs: [
      {
        question: "Is Parmana an AI system?",
        answer:
          "No, deliberately not. The decision that determines whether an action executes is a deterministic policy evaluation, not a model. An autonomous system can propose or request an action, but it is never the authority deciding whether that action is authorized. That makes the result provable rather than probabilistic.",
      },
      {
        question: "What does human authority infrastructure actually mean?",
        answer:
          "It means the boundary that decides whether a proposed action is allowed to happen is controlled by your policy, not by the system proposing it. Parmana does not add a new layer of oversight to watch autonomous systems, it makes sure your existing policy is what an action is checked against before it is allowed to run.",
      },
      {
        question: "Isn't this just AI governance?",
        answer:
          "Governance usually means monitoring a system you are worried about and reacting after something goes wrong. Parmana is structural instead of behavioral, an unauthorized action cannot execute in the first place because the requesting system never holds the credential needed to execute it. That holds whether or not the system behaves as expected.",
      },
      {
        question: "Why call this human authority infrastructure instead of AI governance?",
        answer:
          "Governance usually implies a system that acts first and gets reviewed second. Human authority infrastructure describes the opposite order, your policy is checked before an action executes, not after. The name is meant to describe where the deciding power sits, with your policy, not with the system asking to act.",
      },
      {
        question: "If nobody is approving every action by hand, how is a human still in control?",
        answer:
          "Control here does not mean a person clicks approve on every request, autonomous systems would not be useful if that were true. It means the rule that decides whether an action is authorized was set by a person in advance, as policy, and Parmana enforces exactly that rule without deviation. Authority stays with whoever owns the policy, execution just happens at the speed autonomous systems need.",
      },
      {
        question: "Does Parmana replace our risk or governance team?",
        answer:
          "No. Your risk and compliance functions still set the policy and still own the response when something needs to change. Parmana enforces whatever they decide, structurally, so their decisions apply to every autonomous action automatically instead of depending on someone noticing an exception after the fact.",
      },
      {
        question:
          "What if our policy itself is wrong or outdated? Doesn't Parmana just enforce a bad decision faster?",
        answer:
          "Yes, and that is worth being direct about. Parmana enforces the policy you give it, it does not judge whether that policy is a good one. Getting the policy right is still your organization's responsibility, Parmana's job is making sure whatever policy you set is actually what happens, every time, rather than something that quietly degrades as autonomous systems scale.",
      },
    ],
  },
  {
    id: "how-it-works",
    label: "How it works",
    faqs: [
      {
        question: "Do we need to rebuild our policies to use Parmana?",
        answer:
          "No. Your existing approval limits, delegation rules, vendor lists, and compliance rules are what Parmana checks against. Your business systems and policies stay in place, Parmana adds the enforcement boundary in front of them.",
      },
      {
        question: "How is this different from identity and access management?",
        answer:
          "Identity and access layers answer who a requester is and what they can generally access. Parmana answers whether this specific action is authorized right now, in this context. It is a separate, complementary layer, not a replacement for IAM.",
      },
      {
        question: "Is this only for AI agents?",
        answer:
          "No. The same boundary works for AI agents, algorithms, workflows, employees, or applications. Parmana does not evaluate who or what is making the request, it evaluates whether the requested action is authorized.",
      },
      {
        question: "Does Parmana stop autonomous systems from acting?",
        answer:
          "No. A request that matches your policy proceeds. A request that falls outside your policy is refused. Parmana is designed to let autonomous systems act without giving them authority of their own.",
      },
    ],
  },
  {
    id: "security",
    label: "Security and resilience",
    faqs: [
      {
        question: "What if the autonomous system itself is compromised or jailbroken?",
        answer:
          "Parmana does not need to trust the system making the request. A compromised system can still submit a request, but it cannot manufacture authorization, because it never holds the credential that executes the action. Every request is checked against your policy before execution, regardless of how the request was generated.",
      },
      {
        question: "Can an autonomous system override Parmana's decision?",
        answer:
          "No. A requester cannot change the authorization decision or the authorization boundary itself. Authority is separated from execution, hierarchically, so the system proposing an action has no path to grant itself permission.",
      },
      {
        question: "What happens if Parmana is unavailable?",
        answer:
          "Execution fails closed. No action proceeds without authorization. That is a guarantee, not a limitation.",
      },
      {
        question: "What happens if Parmana disappears entirely?",
        answer:
          "Authority belongs to your business, not to Parmana. Parmana is built to deploy in an environment you control, using your own signing keys and your own policy files rather than a central store Parmana hosts, so Parmana is not a permanent, irreplaceable source of authority for your organization.",
      },
    ],
  },
  {
    id: "evidence",
    label: "Evidence and verification",
    faqs: [
      {
        question: "How is this different from an audit log?",
        answer:
          "An audit log records what happened after the fact. Parmana verifies whether an action is authorized before it happens and records cryptographic proof of that authorization. One records an event, the other enforces the boundary before execution.",
      },
      {
        question: "Can the execution evidence be verified independently?",
        answer:
          "Yes. Parmana signs authorization decisions with Ed25519, with ML-DSA, also known as Dilithium3, available through hybrid signatures for post-quantum readiness. Anyone holding the public verification key can check a signed decision independently, without trusting Parmana's runtime or database.",
      },
    ],
  },
  {
    id: "who-this-is-for",
    label: "Who this is for",
    faqs: [
      {
        question: "What kind of organizations should use Parmana?",
        answer:
          "Any organization where an autonomous system, an AI agent, an algorithm, or an automated workflow can initiate a consequential action, a payment, a refund, a vendor approval, an infrastructure change, and where getting that action wrong has a real cost. If nothing in your organization executes automatically today, there is nothing yet for Parmana to sit in front of.",
      },
      {
        question: "Do we need AI agents already running in production to get value from this?",
        answer:
          "No. What matters is that you have, or are about to have, some automated or autonomous process that takes a consequential action, whether that is an AI agent, a scripted workflow, or an algorithm. Parmana does not evaluate what is making the request, only whether the request is authorized.",
      },
      {
        question: "Is Parmana built for a specific industry?",
        answer:
          "No. The underlying architecture is domain agnostic, an action, a target, and its parameters, so it does not assume payments or any other specific domain. Financial services is where the clearest, highest stakes examples live today, refunds, transfers, approvals, but the same boundary applies anywhere an autonomous system can take a consequential action.",
      },
      {
        question: "What is the minimum infrastructure required to participate in a pilot?",
        answer:
          "Parmana runs as a container and is built to deploy on any Docker based platform, so the minimum is whatever you already use to run a small containerized service. Beyond that you need one target system to integrate for the piloted action, your own signing keys, and a policy for that one action, nothing more specialized than that.",
      },
      {
        question: "Do we need a dedicated engineering team to integrate Parmana?",
        answer:
          "You need someone who can wire up one connector, an API call to the system that executes the piloted action, and define the policy for that action. For most teams that is a small, scoped integration task rather than a dedicated project, though the exact effort depends on how that target system already exposes its API.",
      },
    ],
  },
  {
    id: "pilots",
    label: "Pilots",
    faqs: [
      {
        question: "How do we start a pilot?",
        answer:
          "Email us and we will scope a pilot around one real, consequential action your autonomous systems already need to take, a refund, a payment, or another workflow, so you can see your own policy controlling execution before committing to anything further.",
      },
      {
        question: "What do you need from us to run a pilot?",
        answer:
          "One real, consequential action worth protecting, and the policy that should govern it, refunds, payments, or another workflow. You keep your own signing keys and policy files in your own infrastructure, Parmana does not need standing access to your systems beyond the specific action being piloted.",
      },
      {
        question: "Do we need real production data or real money for a pilot?",
        answer:
          "No. A pilot can run against a sandbox or test environment first, so you can see your policy controlling execution before anything touches production traffic. Extending it to a live environment is a decision you make after seeing it work, not a precondition of the pilot.",
      },
      {
        question: "How long does a pilot take?",
        answer:
          "It depends on how ready your policy and target system are to integrate, so we scope a timeline together rather than quote one up front. Most of the work is agreeing on the one action and the policy it should be checked against, the integration itself is comparatively fast.",
      },
      {
        question: "What happens after the pilot?",
        answer:
          "If it proves out, the same integration extends to more actions and more of your autonomous systems, using policy you already validated during the pilot. If it does not, you have not committed to anything beyond the scope of that one pilot.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[32px] font-bold leading-[1.3] tracking-tight text-ink text-center max-w-[760px] mx-auto">
          Questions teams ask
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-[800px] mx-auto">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#faq-${category.id}`}
              className="rounded-md border border-border bg-white px-4 py-2 text-xs md:text-sm font-medium text-ink/70 hover:border-purple/50 hover:text-purple-deep transition-colors duration-150"
            >
              {category.label}
            </a>
          ))}
        </div>

        <div className="mt-12 max-w-[800px] mx-auto space-y-12">
          {categories.map((category) => (
            <div key={category.id} id={`faq-${category.id}`} className="scroll-mt-24">
              <p className="text-xs font-mono uppercase tracking-wide text-purple-deep mb-2">
                {category.label}
              </p>

              <div className="divide-y divide-border border-y border-border">
                {category.faqs.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base md:text-lg font-semibold text-ink transition-colors duration-150 hover:text-purple-deep">
                      <span>{faq.question}</span>

                      <span
                        className="shrink-0 text-2xl font-normal text-purple-deep transition-transform duration-150 group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>

                    <p className="mt-4 max-w-[720px] text-sm md:text-base leading-[1.6] text-ink/70">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
