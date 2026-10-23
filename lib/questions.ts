export type Question = {
  slug: string;
  question: string;
  short: string;
  paragraphs: string[];
};

export const questions: Question[] = [
  {
    slug: "stop-ai-payment-without-approval",
    question: "How do I stop an AI agent from making a payment without approval?",
    short: "Set a limit. Any payment above it needs a person to approve it first, and Parmana checks each payment before it goes through.",
    paragraphs: [
      "Set a limit for the payments the AI may make on its own. Any payment above that amount needs a person to approve it first.",
      "Parmana checks each payment against that limit before it reaches your payment system. If approval is missing, the payment is refused, and the reason is recorded.",
    ],
  },
  {
    slug: "approve-one-action-from-an-ai-agent",
    question: "How do I approve one action from an AI agent, without giving it blanket access?",
    short: "An approval covers one specific action. It expires after 15 minutes by default and can be used only once.",
    paragraphs: [
      "An approval names one action: what kind of action it is, what it applies to, and the amount allowed. It does not give the AI general access.",
      "By default an approval expires after 15 minutes. Once it is used, or expires, it cannot be used again.",
    ],
  },
  {
    slug: "what-an-ai-action-record-shows",
    question: "What does a record of an AI agent's action show?",
    short: "Why the action was allowed or stopped, the steps it went through, and what happened.",
    paragraphs: [
      "Why: the rule that allowed or stopped the action, and the approval behind it, if one was needed.",
      "How: the steps the action went through, in order.",
      "What happened: whether the action was carried out or refused.",
      "Each record is saved, so your team can review it later.",
    ],
  },
  {
    slug: "check-a-record-without-trusting-parmana",
    question: "How can someone check a record without relying on Parmana?",
    short: "A separate tool checks the record against a key you choose to trust. It confirms the record has not been changed since it was made.",
    paragraphs: [
      "The check runs on the record and the key you trust. It does not contact Parmana.",
      "A passing check shows that the record has not been changed, and that the key holder created it. It does not show that the key holder acted honestly.",
    ],
  },
  {
    slug: "stop-all-ai-agent-actions-at-once",
    question: "Can I turn off all AI agent actions at once?",
    short: "Yes. An operator can stop every AI agent action in one step. Two people are needed to start them again.",
    paragraphs: [
      "If something goes wrong, an operator can stop all AI agent actions at once.",
      "Starting them again needs two different people, so one person cannot restart them alone.",
    ],
  },
  {
    slug: "does-parmana-need-new-hardware",
    question: "Does Parmana need new hardware?",
    short: "No. Parmana runs on hosting you choose, and you pay for that hosting.",
    paragraphs: [
      "You do not buy new equipment or rebuild your systems to use Parmana.",
      "Parmana runs on hosting you choose, and you pay for that hosting.",
    ],
  },
  {
    slug: "which-systems-can-parmana-check",
    question: "Which of my systems can Parmana check?",
    short: "The systems you connect to it. Ready connections exist for HubSpot, Slack, GitHub and Paytm refunds.",
    paragraphs: [
      "Parmana checks actions for the systems you connect to it.",
      "Ready connections exist for HubSpot, Slack, GitHub and Paytm refunds. Other systems need their own connection, which we can discuss with you.",
    ],
  },
  {
    slug: "approval-expires-or-used-twice",
    question: "What happens when an approval expires or is used twice?",
    short: "The action is refused. An expired or already-used approval cannot be reused.",
    paragraphs: [
      "An approval expires after 15 minutes by default.",
      "If an approval has expired or was already used, the action is refused, and the refusal is recorded.",
    ],
  },
  {
    slug: "write-business-rules-for-an-ai-agent",
    question: "How do I write business rules for an AI agent?",
    short: "Write them in plain terms: who can do what, up to what amount, and when a person must approve first.",
    paragraphs: [
      "A rule says who can do what, up to what amount, and when a person must approve first.",
      "A change to a rule must be approved before it takes effect, so one person cannot change the rules alone.",
    ],
  },
  {
    slug: "how-parmana-differs-from-approval-tools",
    question: "How is Parmana different from simpler approval or guardrail tools?",
    short: "Parmana keeps a record you can check later, tied to each exact action. A simpler tool may be enough if you only need one check.",
    paragraphs: [
      "Some tools only add an approval step, or filter what an AI says. If one check before an action is enough, a simpler tool may do the job.",
      "Parmana is for when you need to show later what was allowed, by whom, and what happened. Each approval is tied to the exact action it covers.",
    ],
  },
  {
    slug: "what-parmana-cannot-guarantee",
    question: "What can Parmana not guarantee?",
    short: "It checks the actions sent through it. It cannot stop an agent that has its own login to your systems, and it cannot make a person read what they approve.",
    paragraphs: [
      "Parmana checks the actions sent through it. It cannot stop an AI agent that has its own login to one of your systems and uses it directly.",
      "An approval covers a named action and the thing it applies to, but not every detail of the request. Parmana can confirm that a trusted approver gave the approval. It cannot confirm that the person read it.",
      "Parmana applies the rules you write. A rule written wrongly still gives a wrong result, so review your rules carefully.",
    ],
  },
  {
    slug: "who-can-restart-agent-actions",
    question: "Who can restart AI agent actions after they are stopped?",
    short: "Two different people must do it, each with their own key. One person cannot do both steps.",
    paragraphs: [
      "After a stop, one person asks for a restart. A second person, using their own key, confirms it. Actions resume only then.",
      "A stop does not undo actions already carried out. It also does not stop a system an agent reaches without going through Parmana.",
    ],
  },
  {
    slug: "is-parmana-open-source",
    question: "Is Parmana open source?",
    short: "The Parmana server is not open source. The code libraries are free under the Apache 2.0 license.",
    paragraphs: [
      "The Parmana server is proprietary software. You may read its source and run it to evaluate Parmana. Using it in production, copying it, or changing it needs a written agreement with Parmana Systems.",
      "The code libraries for TypeScript and Python are licensed under the Apache License 2.0.",
    ],
  },
  {
    slug: "connect-an-agent-you-already-run",
    question: "How do I connect an AI agent I already run to Parmana?",
    short: "Give the agent its own key, limited to the actions it may take. Then send each action through Parmana before it reaches your system.",
    paragraphs: [
      "Create a key for the agent that allows only the actions it needs. An operator issues the key, and it is never shared or written into logs.",
      "Send each action to Parmana first. Parmana checks it against your rules and either lets it through or refuses it with a reason.",
      "If a refusal asks for a person's approval, get that approval and send the request again. Parmana records every step. TypeScript and Python libraries are available, and the same steps also work with a direct web request.",
    ],
  },
];

export function findQuestion(slug: string): Question | undefined {
  return questions.find((q) => q.slug === slug);
}
