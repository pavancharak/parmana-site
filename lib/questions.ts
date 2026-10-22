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
    short: "Set a rule that a payment above your limit needs a person's approval. Parmana checks each payment before it reaches your payment system.",
    paragraphs: [
      "Write a rule that says which payments the AI may make on its own, and up to what amount. Anything above that limit needs a person to approve it first.",
      "Parmana checks each payment request against that rule before it reaches your payment system. If the approval is missing, the payment is refused and the reason is recorded.",
    ],
  },
  {
    slug: "approve-one-action-from-an-ai-agent",
    question: "How do I approve one action from an AI agent, without giving it blanket access?",
    short: "An approval covers one specific action. It expires after 15 minutes by default and can be used once.",
    paragraphs: [
      "An approval names the action it covers: the type of action, the resource it applies to, and the amount approved. It does not give the AI general access.",
      "By default an approval expires after 15 minutes. Once it has been used, or has expired, it cannot be used again.",
    ],
  },
  {
    slug: "what-an-ai-action-record-shows",
    question: "What does a record of an AI agent's action show?",
    short: "The reason it was allowed or stopped, the steps it went through, and what happened.",
    paragraphs: [
      "Why: the rule that allowed or stopped the action, and the approval behind it, if one was needed.",
      "How: the steps the action went through, in order.",
      "What happened: whether the action was carried out or refused.",
      "Each record is saved so your team can review it later.",
    ],
  },
  {
    slug: "check-a-record-without-trusting-parmana",
    question: "How can someone check a record without trusting Parmana's servers?",
    short: "A separate verification tool checks a record using only the public key. Checking proves the record was not changed and was signed by the key holder.",
    paragraphs: [
      "The check runs on the record and a public key. It does not need to contact Parmana.",
      "A valid check proves that the record was not changed and was signed by the holder of the key. It does not prove that the key holder acted honestly.",
    ],
  },
  {
    slug: "stop-all-ai-agent-actions-at-once",
    question: "Can I turn off all AI agent actions at once?",
    short: "Yes. An operator can stop every AI agent action in one step. Two people are needed to start them again.",
    paragraphs: [
      "If something goes wrong, an operator can stop all AI agent actions at once.",
      "Two different people are needed to start them again, so one person cannot restart the actions alone.",
    ],
  },
  {
    slug: "does-parmana-need-new-hardware",
    question: "Does Parmana need new hardware?",
    short: "No new hardware. Parmana runs on the hosting you choose, and hosting costs still apply.",
    paragraphs: [
      "You do not buy new equipment or rebuild your systems to use Parmana.",
      "Parmana runs on hosting, so the hosting costs still apply.",
    ],
  },
  {
    slug: "which-systems-can-parmana-check",
    question: "Which of my systems can Parmana check?",
    short: "The systems you connect to it. Ready connections exist for HubSpot, Slack, GitHub and Paytm refunds.",
    paragraphs: [
      "Parmana checks the actions for the systems you connect to it.",
      "Ready connections exist for HubSpot, Slack, GitHub and Paytm refunds. Other systems are connected with a connector.",
    ],
  },
  {
    slug: "approval-expires-or-used-twice",
    question: "What happens when an approval expires or is used twice?",
    short: "The action is refused. An expired or already-used approval cannot be reused.",
    paragraphs: [
      "An approval expires after 15 minutes by default.",
      "If an approval has expired or has already been used, the action is refused, and the refusal is recorded.",
    ],
  },
  {
    slug: "write-business-rules-for-an-ai-agent",
    question: "How do I write business rules for an AI agent?",
    short: "Write them in plain terms: who can do what, up to what amount, and when a person must approve first.",
    paragraphs: [
      "A rule says who can do what, up to what amount, and when a person must approve the action first.",
      "A change to a rule is itself approved before it applies, so one person cannot change the rules alone.",
    ],
  },
  {
    slug: "how-parmana-differs-from-approval-tools",
    question: "How is Parmana different from an approval gateway or an AI guardrail library?",
    short: "Parmana keeps a record you can check later, tied to the exact action. Simpler tools may be enough if you only need one check.",
    paragraphs: [
      "Approval gateways and guardrail libraries also check AI actions. If you only need one check before an action runs, a simpler tool may be enough.",
      "Parmana is for when you need proof you can show someone later: what was allowed, by whom, and what happened. Each approval is tied to the exact action it covers.",
    ],
  },
  {
    slug: "what-parmana-cannot-guarantee",
    question: "What can Parmana not guarantee?",
    short: "It checks the actions sent through it. It cannot stop an agent that has its own login to your systems, and it cannot make a person read what they approve.",
    paragraphs: [
      "Parmana checks the actions that are sent through it. It cannot stop an AI agent that already holds its own login to one of your systems and uses it directly.",
      "An approval names the action and the resource it covers, but not every detail of the request. Parmana can check that a trusted approver signed it. It cannot check that the person read it.",
      "Parmana applies the rules you write. A rule written wrongly still gives a wrong result, so the rules need a careful review.",
    ],
  },
  {
    slug: "who-can-restart-agent-actions",
    question: "Who can restart AI agent actions after they are stopped?",
    short: "Two different people must do it, each with their own key. One person cannot do both steps.",
    paragraphs: [
      "After a stop, one person asks for the restart. A second person, using their own key, confirms it. Actions resume only after that.",
      "A stop does not undo actions that were already carried out. It also does not stop a system that an agent reaches without going through Parmana.",
    ],
  },
  {
    slug: "is-parmana-open-source",
    question: "Is Parmana open source?",
    short: "The Parmana server is not open source. The libraries your code uses are free under the Apache 2.0 license.",
    paragraphs: [
      "The Parmana server is proprietary software. You may read its source and run it to evaluate Parmana. Using it in production, copying it, or changing it needs a written agreement with Parmana Systems.",
      "The libraries your code uses, for TypeScript and Python, are licensed under the Apache License 2.0.",
    ],
  },
  {
    slug: "connect-an-agent-you-already-run",
    question: "How do I connect an AI agent I already run to Parmana?",
    short: "Give the agent its own key, limited to the actions it may take. Then send each action through Parmana before it reaches your system.",
    paragraphs: [
      "Create a key for the agent that allows only the actions it needs. The operator issues the key, and it is never shared or written into logs.",
      "Send each action to Parmana first. Parmana checks it against your rules and either lets it through or refuses it with a reason.",
      "If a refusal asks for a person's approval, get that approval and send the request again. Parmana records every step. TypeScript and Python libraries are available, and the same steps work over plain HTTP.",
    ],
  },
];

export function findQuestion(slug: string): Question | undefined {
  return questions.find((q) => q.slug === slug);
}
