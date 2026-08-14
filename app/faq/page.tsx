import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const faqs = [
  {
    question: "What is Parmana?",
    answer:
      "We help institutions preserve their authority over their systems in the agentic era. Parmana is institutional authority infrastructure. It is technology-agnostic: it evaluates execution requests, whatever their source, against institutional authority and policy before they reach business systems. AI agents are one source of execution risk, not the only one.",
  },
  {
    question: "What problem does Parmana solve?",
    answer:
      "Business systems do not run on trust. They run on authority, policies, permissions, and controls. AI can generate decisions and initiate actions at machine speed, but intelligence does not create institutional authority. Parmana establishes an authorization boundary that determines whether a specific requested action is permitted to become execution.",
    highlight: true,
  },
  {
    question: "What is the difference between trust and authority?",
    answer:
      "Trust asks whether we believe a system will behave correctly. Authority asks whether a specific action is permitted to happen. Parmana addresses authority. It does not require an institution to trust an AI system with the authority to execute an action.",
  },
  {
    question:
      "Can an AI system behave exactly as designed and still perform an unauthorized action?",
    answer:
      "Yes. An AI system can follow its instructions correctly and still initiate an action the institution never authorized. Instructions describe intended behavior; they do not, by themselves, create enforceable institutional authority. Parmana evaluates the requested action against the institution's defined authority and policies before execution.",
    highlight: true,
  },
  {
    question: "Does Parmana control what an AI agent thinks or decides?",
    answer:
      "No. Parmana does not control the AI's reasoning. An AI agent can reason, make recommendations, and request actions. Parmana determines whether a requested action is authorized to execute.",
  },
  {
    question: "Does Parmana give AI agents authority?",
    answer:
      "No. AI agents, like any other requester, can initiate execution requests, but initiating a request does not create authority. Institutional authority determines what gets executed, not the requester.",
  },
  {
    question: "Why aren't AI instructions enough?",
    answer:
      "Instructions are not the same as enforceable authority. An AI system can faithfully follow its instructions and still produce an action that falls outside the institution's authorized boundaries. Parmana provides an independent authorization boundary so institutional authority does not depend on the AI behaving exactly as intended.",
  },
  {
    question: "What happens if an AI agent is compromised?",
    answer:
      "A compromised or manipulated AI agent can still request an action, but the request must satisfy the institution's authorization requirements before execution.",
  },
  {
    question: "Can Parmana protect against rogue or jailbroken AI agents?",
    answer:
      "Parmana does not need to determine whether an AI agent is trustworthy. A rogue, compromised, manipulated, or jailbroken agent may generate an execution request, but the requested action still has to satisfy institutional authorization before the business system executes it.",
  },
  {
    question: "Does Parmana protect against frontier AI models?",
    answer:
      "Parmana is designed to preserve institutional authorization regardless of the AI model initiating an execution request. The authorization decision is based on institutional authority and policy, not on the model's reputation, capability, or alignment.",
    highlight: true,
  },
  {
    question: "What if the AI agent ignores its instructions?",
    answer:
      "Parmana does not rely on the AI agent obeying instructions to preserve institutional authority. Authorization is evaluated independently against the institution's defined authority and policies.",
  },
  {
    question: "Does Parmana need to trust the AI?",
    answer:
      "No. Parmana does not need to determine whether an AI system is trustworthy, aligned, safe, or correct. It evaluates the specific execution request against institutional authority and policy. The requester can initiate an action, but the requester does not create the authority to execute it.",
  },
  {
    question: "Is Parmana an AI safety product?",
    answer:
      "No. AI safety focuses on improving or constraining AI behavior. Parmana addresses a different question: is this specific action authorized by the institution?",
  },
  {
    question: "Does Parmana replace existing AI security solutions?",
    answer:
      "No. Parmana is designed to work alongside existing security, identity, access control, AI security, monitoring, and governance solutions. Those systems can help determine who or what can access a system. Parmana determines whether a requested execution is authorized by the institution.",
  },
  {
    question: "Can I keep my existing AI security stack?",
    answer:
      "Yes. Parmana does not require an institution to replace its existing security controls. It adds an execution authorization layer that addresses whether an action is authorized, even when the request originates from an already authenticated or permitted AI system.",
  },
  {
    question: "Is Parmana tied to a specific AI model?",
    answer:
      "No. Parmana is model-agnostic. It can govern execution requests regardless of which AI model or agent generated them.",
  },
  {
    question: "Is Parmana tied to a specific AI vendor?",
    answer:
      "No. Parmana is vendor-agnostic. Institutions can use different AI models, agents, vendors, or applications while maintaining the same institutional authorization layer.",
  },
  {
    question: "Is Parmana technology-agnostic?",
    answer:
      "Yes. Parmana is authority infrastructure that governs execution regardless of the underlying technology. AI agents are one source of execution risk. Parmana applies institutional authority to a request whether it came from an AI agent, an application, or a person.",
    highlight: true,
  },
  {
    question: "Can Parmana run on-premises?",
    answer:
      "Parmana is designed to support enterprise deployment requirements, including environments where institutions require control over their infrastructure and execution authorization layer.",
  },
  {
    question: "Can Parmana run in a hybrid environment?",
    answer:
      "Parmana is designed to support hybrid enterprise environments where AI systems and business systems may operate across different infrastructure and deployment environments.",
  },
  {
    question: "Is Parmana cloud-only?",
    answer:
      "No. Parmana is intended to support deployment models appropriate for institutional environments, including cloud, on-premises, and hybrid architectures.",
  },
  {
    question: "Who actually executes the action?",
    answer:
      "The relevant business system remains the execution system. Parmana does not become the business system or take ownership of execution. Parmana evaluates whether the requested action is authorized before the existing system executes it.",
  },
  {
    question: "Does Parmana replace my existing business systems?",
    answer:
      "No. Parmana is designed to work with existing systems of record and business applications. The institution's existing business systems remain responsible for executing the authorized action.",
  },
  {
    question: "What happens if something tries to bypass Parmana?",
    answer:
      "Parmana's purpose is to establish an authorization boundary around governed execution paths. An action that reaches a governed execution path must satisfy the institution's authorization requirements before execution, regardless of whether the request came from an AI agent, an application, or a person.",
  },
  {
    question: "What types of actions can Parmana govern?",
    answer:
      "Parmana can govern consequential actions where an institution needs to determine whether execution is authorized, including transactions, payments, customer-record changes, infrastructure changes, approvals, and business workflows.",
  },
  {
    question: "Why is this becoming important now?",
    answer:
      "AI agents are the clearest and fastest-growing example of systems that can interact directly with business systems and initiate actions without a person in the loop, but they are not the only one. Institutions need to retain authority over execution regardless of who or what initiates it.",
  },
  {
    question: "Has this actually been verified, or is it just a claim?",
    answer:
      "It has been independently verified, not just claimed. Parmana's core authorization claim underwent four separate adversarial validation passes against the actual source code. The first three passes found a real gap, a capability whose authorization-relevant facts were pure caller-declared attestations with no independent verifier. That capability was removed from the codebase entirely, and a fourth pass, run fresh with no reliance on the earlier conclusions, confirmed no gap remains. The verdict: YES, with the gap disclosed and the fix documented, not hidden.",
    highlight: true,
  },
  {
    question: "What is TRL 7 and why does it matter?",
    answer:
      "Technology Readiness Level 7 means the system has been demonstrated in an operational environment, not just tested in a lab. Parmana has processed a real, live-money Razorpay refund on production infrastructure, proof the authorization boundary holds under real financial transactions, not only simulated ones.",
  },
  {
    question: "Does Parmana support post-quantum cryptography?",
    answer:
      "Parmana includes native support for ML-DSA-65, a post-quantum digital signature algorithm, built and tested, so authorization evidence can use post-quantum signatures as cryptographic standards evolve.",
  },
  {
    question: "Can I inspect or extend the authorization mechanism myself?",
    answer:
      "Parmana's SDK is extracted as an open-core project under the Apache 2.0 license, hardened with OpenSSF Scorecard, SLSA provenance, and Sigstore signing, so the authorization mechanism itself is inspectable, not a black box.",
  },
  {
    question: "What is the core principle behind Parmana?",
    answer:
      "Intelligence does not create authority. Only what the institution authorizes should become real. No matter who or what requests execution, an AI agent, an application, or a person, institutional authority determines what gets executed.",
    highlight: true,
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-white">
          <div className="container section">
            <div className="max-w-5xl">
              <p className="label">FAQ</p>

              <h1 className="heading-xl mt-6">
                Questions About
                <br />
                Institutional Authority.
              </h1>

              <p className="body mt-12 max-w-3xl">
                Understand how Parmana preserves institutional authority over
                execution, regardless of who or what initiates it.
              </p>
            </div>

            <div className="mt-20 max-w-4xl">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className={
                    faq.highlight
                      ? "my-10 rounded-2xl border-2 border-neutral-900 bg-neutral-50 p-8"
                      : "border-b border-neutral-200 py-10"
                  }
                >
                  <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                    {faq.question}
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-neutral-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}