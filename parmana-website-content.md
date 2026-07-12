# Parmana Website Content
All copy final-draft quality, dash-free, per locked positioning. Sections ordered as they appear on the page.

---

## 1. NAVIGATION

Logo: प्र mark + PARMANA
Links: How it works · Why deterministic · Design partners · About
Button (saffron): Start a pilot

---

## 2. HERO

**Badge (saffron outline, mono, small):** NOW OPEN FOR PILOTS · INDIAN FINANCIAL SERVICES

**Kicker (mono, small):** THE AUTHORIZATION LAYER FOR AI EXECUTION

**Headline:**
Companies bought AI they're afraid to switch on.
We make it safe to switch on.

(Second line in saffron.)

**Subhead:**
Parmana sits between your AI and your systems. The AI asks. Parmana approves or declines against rules you wrote, in an instant. The record can't be faked.

**Primary button:** Start a pilot
**Secondary link:** See how a decision flows

**Under buttons (small):** Shadow pilots. Six to eight weeks. Nothing touches production until your team decides it does.

**Trust strip (mono, small, under buttons):**
Built for regulated financial services · RBI, IRDAI, SEBI environments · India first

---

## 3. THE PROBLEM

**Kicker:** THE PROBLEM YOU ALREADY HAVE

**Headline:** Your AI works. It just isn't allowed to do anything.

**Body:**
Somewhere in your organisation right now there is an AI pilot that can draft the payment, process the claim, raise the purchase order. It performed for months. Then it reached the risk committee and stopped, because nobody could answer one question:

**Pull quote:** "What happens when it does something it shouldn't, and how do we prove to the regulator what happened?"

**Body continues:**
Today there are two answers and both kill the project. Put a human in front of every action and lose the point of automation. Or trust the agent, and no risk officer in a regulated institution will sign that. Nor should they.

The missing piece isn't a smarter agent. It's a safe way to say yes.

---

## 4. HOW IT WORKS

**Kicker:** HOW IT WORKS

**Headline:** It works the way card authorization works.

**Body:**
When you tap your card, the shop doesn't decide whether you can pay. A network checks the rules and approves or declines in an instant, and the transaction leaves a record no one can fake. Parmana is that layer for AI.

**Three-step flow (diagram):**

**AI proposes.** Your agent requests an action: pay this vendor, settle this claim, raise this order.

**Parmana authorizes.** The request is checked against your policy. Allowed actions receive a signed, single-use, time-limited authorization. Everything else is blocked. Instantly, automatically, every time.

**Your systems execute.** The action runs through a gateway that independently re-verifies the authorization before anything touches your systems. The AI never holds your credentials.

**Closing line:**
This is not monitoring, which tells you what went wrong afterward. It is the layer that determines what can happen at all.

---

## 5. THE THREE PILLARS

**Kicker:** WHAT YOU GET

### Pillar 1: Rules you write
Every action the AI proposes is checked against your policy before anything executes. Same input, same decision, every time. Anything the rules don't allow is blocked by default. No exceptions, no queue, no judgment calls at machine speed.

### Pillar 2: Keys the AI never holds
The agent never possesses your system credentials. Access exists only at the moment of an approved execution, is used once, and is destroyed, including when execution fails. A compromised agent cannot leak what it never had.

### Pillar 3: Proof no one can fake
Every action, approved and blocked alike, produces a cryptographically signed record that your auditor, your board, or your regulator can verify independently, without trusting our software or our word.

---

## 6. WHY DETERMINISTIC (the differentiator section)

**Kicker:** WHY DETERMINISTIC

**Headline:** Parmana is not an AI system.

**Statement block (large type, the section's centerpiece):**
No prompts. No guardrails. Nothing to jailbreak.
Only your organisation's policy and your defined execution.

**Sub-headline:** Parmana doesn't use AI to govern AI.

**Body:**
Most AI governance products are themselves AI. LLM judges. Classifiers. Prompt-based policy checks. Risk scores. A probabilistic system supervising a probabilistic system, and the same unanswerable question one layer up: what happens when the judge is wrong?

Parmana's authorization path contains no AI. No prompts. No guardrails. No model judgment. No confidence scores. Decisions come from deterministic policies your organisation wrote, evaluated the same way every time. A supervisor can read the exact rule that fired. Your risk team can test the policy and get the same answer on every run.

Jailbreaks are real. Guardrails are probabilistic. Prompts are not controls. That is precisely why none of them are in our decision path.

**Typographic moment (standalone emphasis line):**
The goal isn't to build an AI that can never be jailbroken. The goal is to build an enterprise where a jailbroken AI still cannot execute an unauthorized action.

**Comparison strip (two columns):**

**The industry's approach:** AI judging AI. Probabilistic. Different answer possible on identical input. Explains itself after the fact.

**Parmana's approach:** Rules enforcing policy. Deterministic. Same answer on identical input, every time. Readable before anything runs.

---

## 6.5 THE JAILBREAK QUESTION

**Kicker:** THE JAILBREAK QUESTION

**Headline:** What happens when your AI is jailbroken?

**Body:**
A jailbreak is any input crafted to make an AI ignore its instructions. It can be as crude as "ignore all previous instructions" or as subtle as an invoice PDF carrying hidden text that says transfer the refund to this account instead. The model does not know it is being attacked. It reads text, and some text rewires its behavior. Nobody has solved this. Every major model, from every vendor, has been jailbroken publicly and repeatedly.

While AI only talked, a jailbreak was embarrassing. The moment AI acts, the same weakness becomes financial: a fraudulent vendor paid because an email said so, a fake supplier created, a beneficiary account changed. The attack surface is everything the AI reads. Every email, document, and webpage becomes a potential command channel. You cannot firewall text. And one successful injection in a million interactions is one unauthorized payment. In a bank, one is the whole story.

**Sub-headline:** Parmana does not try to win the arms race. It makes the arms race irrelevant to execution.

**Three items (numbered):**

1. **Nothing to inject into.** Authorization decisions come from a deterministic rule engine your organisation configured. No model, no prompts, no judgment. A jailbreak manipulates an AI's reasoning; Parmana's authorization path contains no AI to manipulate.
2. **A system that owns nothing.** Even a fully jailbroken agent holds no credentials to your payment systems, ERP, or databases. Access exists for one instant, inside the connector, only after authorization, used once, destroyed. The attacker who controls your AI controls a system with no keys.
3. **The attempt becomes evidence.** The unauthorized request is blocked and recorded in a signed, tamper evident record. Your security team sees the attack, when it happened, and what it tried, with proof a regulator can verify independently.

**Closing statement (large type, the section's typographic moment):**
A jailbreak against a Parmana governed enterprise degrades from a catastrophe into a log entry.

---

## 7. THE DECISION CHAIN (technical credibility section, business language)

**Kicker:** UNDER THE HOOD

**Headline:** What happens in the instant between ask and answer.

**Numbered chain:**

1. **Policy check.** The request is evaluated against your rules. Deterministic, first match wins, deny by default.
2. **Signed authorization.** Approved actions receive a cryptographically signed authorization: single use, time limited, bound to the exact content approved. Change one character of the action and the authorization is void.
3. **Independent verification.** A gateway re-verifies the authorization byte for byte before release. It doesn't trust the layer that issued it.
4. **Credential isolation.** Only after verification does a single-use session credential exist, inside the connector, at the moment of execution. Used once. Destroyed after, even on failure.
5. **Sealed record.** The execution is written into a signed, tamper-evident trust record that can be verified by anyone, without access to our systems.

**Closing line:**
Every link in this chain exists in running code with an automated test behind it. We publish what we claim, and we don't claim what we haven't built.

---

## 7.5 RUNS WHERE YOU RUN (compact strip, single band)

**Kicker:** YOUR ENVIRONMENT, YOUR TERMS

**Headline:** Any AI vendor. Any deployment model.

**Three short items in a row:**

**Model agnostic.** Parmana sits between your AI and your systems. It does not care which model, which vendor, or which framework proposes the action. Swap the AI; the rules and the records stay.

**Cloud, hybrid, on premises.** Deploy in your cloud, across a hybrid estate, or fully inside your own perimeter. Regulated institutions run sensitive workloads on their own ground; Parmana is built to run there with them.

**Your keys, your data.** Policies, credentials, and records live in your environment. Nothing requires trusting our infrastructure, which is the point of a system whose records verify independently.

---

## 8. WHAT PARMANA IS NOT (honesty section)

**Kicker:** STRAIGHT ANSWERS

**Headline:** What Parmana is not.

**Body (list):**
Parmana does not make your AI smarter. It governs what your AI is allowed to execute.
Parmana is not monitoring or observability. Those tell you what happened. Parmana determines what can happen.
Parmana is not a human approval queue. Humans write the rules once. Enforcement runs at machine speed.
Parmana does not replace your identity and access systems. It sits above them, governing machine-initiated actions.

---

## 8.5 THE COMMITMENT (full-width statement band, ink background, the page's boldest moment)

**Statement (large type):**
Within the Parmana boundary, only authorized execution happens.

**Sub-statement:**
Not a promise. A property of how the system is built. Rules decide. The gateway verifies independently. The AI holds no keys. The record proves it.

**Challenge line (saffron):**
If you don't believe it, good. Bring your hardest questions. We answer all of them, and we run the full chain live in every pilot conversation.

---

## 9.0 WHAT CHANGES (before/after section)

**Kicker:** BEFORE AND AFTER

**Headline:** What changes for your organisation.

**Five paired rows (without / with):**

1. **Without:** AI pilots that work in the demo and stall at the risk committee, quarter after quarter.
   **With:** A yes your risk team can defend. Agents move to real work because the failure modes are structurally closed, not statistically unlikely.

2. **Without:** A human approving every action. Machine speed capped at clerk speed, and judgment replaced by fatigue.
   **With:** Humans write the rules once. Enforcement runs automatically on every action. People handle exceptions, not queues.

3. **Without:** The AI holds credentials to your systems, so every failure of the AI is a failure of those systems.
   **With:** The AI holds nothing. Access exists for one instant, only after authorization, used once, destroyed.

4. **Without:** A jailbroken or manipulated agent is a potential catastrophe.
   **With:** A jailbroken agent is a blocked request and a signed record of the attempt.

5. **Without:** When something goes wrong, your account of events is logs the vendor keeps and explanations the model gives about itself.
   **With:** Every action, approved and blocked alike, carries proof your auditor, board, or regulator can verify independently.

**Closing line (Eczar emphasis, below the pairs):**
Same AI. Same systems. One new layer between them, and the answer changes from no to yes.

---

## 9. DESIGN PARTNER PROGRAM

**Kicker:** OPEN FOR PILOTS

**Headline:** Pilot slots are open. We are selecting a small number of institutions.

**Body:**
Design partners in Indian financial services get first access: your policies, your systems, your regulatory reality shape what we build. A pilot runs six to eight weeks, in shadow, ending with your risk team holding independently verifiable records of every action the agent proposed, approved and blocked alike.

**Three columns:**

**What you get.** The product shaped around your use case. First-mover permission your competitors don't have. A direct line to the founding team. Founding-partner terms locked before commercial launch.

**What we ask.** One real use case currently stuck at the risk gate. One review where your risk team asks its hardest questions. A short working session every two weeks.

**What it costs.** Your time. No licence fee for the design partnership. The pilot runs in shadow, so nothing touches production until your team decides it does.

**Button (saffron):** Start the conversation
**Under button (mono):** founder@manthan.systems

---

## 10. ABOUT / THE NAME

**Kicker:** THE NAME

**Headline:** प्रमाण

**Body:**
Parmana comes from pramāṇa, the Sanskrit concept of a valid means of knowing. Indian philosophy spent two thousand years asking what separates knowledge from belief, proof from assertion. That question is now the question of the AI era: not what did the machine say, but how do we know what it did.

We build from India, for the strictest regulatory ground first, because systems that earn trust here earn it anywhere.

**Team line:**
Parmana is built by Manthan Systems.

---

## 11. FOOTER

प्र PARMANA · The authorization layer for AI execution

Contact: founder@manthan.systems
LinkedIn: [link]
Writing: [Substack link]

© 2026 Manthan Systems. All rights reserved.

Small print: Parmana enforces policies your organisation defines. Deployment architecture determines enforcement scope; in a standard deployment, execution flows through the Parmana gateway and AI systems hold no enterprise credentials.

---

## CONTENT RULES FOR THE BUILD (for the React prompt)

1. The locked line appears verbatim in the hero. Never paraphrased anywhere else on the page.
2. No em dashes, no en dashes anywhere. Plain punctuation.
3. Devanagari appears exactly twice by design: the प्र mark in nav/footer, and प्रमाण as the About headline. Nowhere else.
4. The word "guarantee" appears nowhere. The words "audit," "governance," "compliance" never appear in a headline; they may appear in body copy where factually needed.
5. Every capability claim on the page maps to shipped, tested code. No roadmap language presented as present tense.
6. The small-print line in the footer is the honest scope condition for the "cannot do it" class of claims. It stays.
7. The site's single conversion goal is a pilot conversation. Every CTA on the page says "Start a pilot" or "Start the conversation" and points to mailto:founder@manthan.systems with subject "Pilot conversation". No newsletter forms, no demo-video gates, no secondary asks.
