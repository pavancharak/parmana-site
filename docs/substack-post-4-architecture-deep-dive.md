# Inside Parmana: What "Verified at Runtime" Actually Means

*Subtitle: Last post I said every action gets checked before it executes, not just once at setup. Here's exactly what that means, mechanically.*

In the last post, I described the gap in agentic payment protocols like NPCI's UAP: a spending limit tells you "how much," not "was this specific action, right now, still authorized." I said Parmana closes that gap with runtime verification, cryptographic proof, and immediate revocation.

That's the pitch version. Here's the actual mechanism, because "we verify at runtime" is exactly the kind of sentence that means nothing until you can see what it does.

## The agent never holds anything that can move money

Start with what the agent actually gets when it wants to act. Not a credential. A single-use, time-bound lease on one, tied to one specific connector and one specific authorization ID, and it doesn't even carry the secret itself. It's a reference. The only thing that can turn that reference into an actual usable credential is a `consume()` call, and that call happens exactly once, inside the component that executes the action, never inside the agent, never exposed to whatever requested the action in the first place.

The moment that credential is used, or the request fails for any reason, it's destroyed. Not "expires later." Destroyed immediately, in a `finally` block that runs on every exit path: success, failure, or rejection.

So the honest answer to "what if the agent is compromised" isn't "we trust it won't be." It's: a compromised agent can make any request it wants, phrase it however it wants, and it still never gets its hands on anything that can move money. The worst a compromised agent can do is ask. Asking isn't the dangerous part. Executing is, and execution never touches the agent.

## Every check runs again, at the moment of execution, not at setup

Here's the part that actually matters for the gap I described last time. When an authorization was issued, say the moment a customer set an ₹8,000 monthly flight limit, that's not when the real check happens. The real check happens again, every single time, right before the specific payment executes. And it checks more than "is this under the limit."

The full sequence, in order, and the order is deliberate:

1. **Version check.** Is this authorization format one we still understand.
2. **Signature check.** Was this actually signed by the real signing key.
3. **Expiry check.** Has it gone stale.
4. **TTL policy check.** Was it even issued with a lifetime inside acceptable bounds, so a compromised signer couldn't mint something that stays valid for months.
5. **Content match check.** Recompute the hash of the actual content about to execute (the real amount, the real recipient, the real parameters) and compare it to the hash the authorization was signed against. This is the check that stops a valid, correctly signed authorization from being paired with a swapped payload, same authorization ID, different amount.
6. **Policy-currency check.** Recompute the hash of the policy this authorization claims to have been evaluated under, and compare it to the policy's current content. If the policy has changed since this authorization was issued, this fails.
7. **Nonce check**, last, on purpose. It's the one step with a side effect (it marks the authorization as spent), so it only runs after every other check has already passed. A forged or stale request should never get to burn a legitimate nonce; that would let an attacker poison a real transaction by replaying a fake one first.

Six side-effect-free checks, then one side-effecting one, only if everything before it held. If any single check fails, the whole thing is refused and the failure names exactly which check it was.

Step 6 is the direct answer to scenario three from the last post: the international flight request against a policy that changed an hour ago. The authorization doesn't just get checked against a stored limit. It gets checked against whether the policy it claims to be operating under is still the current policy, right now. Change the policy, and every authorization issued under the old one stops passing this check the moment anyone tries to use it.

## Revocation doesn't need a notification. It needs the next check to fail.

This is the part worth being precise about, because "instant revocation" is a phrase companies use loosely. Here, it's not a push notification racing an agent's next action. It's simpler and more reliable than that: revocation just means the policy the deploying business is holding changed. The next time anyone tries to execute anything under an authorization tied to the old version of that policy, step 6 above fails, because the policy content hash no longer matches.

There's no window where "the agent hasn't heard yet." The agent doesn't need to hear anything. Its next request gets checked against whatever the policy actually says at that moment, not against whatever it was told when it started the conversation.

## The proof is a signature, not a promise

Every decision, approved or refused, gets signed before anything downstream acts on it. Right now that's Ed25519. The signing layer isn't hardcoded to one algorithm, there's already a working post-quantum option (Dilithium3) built alongside it, coordinated through the same registry, and the policy engine that decides approve or reject has zero dependency on which signature scheme is in use underneath it. That's a real, separate architectural layer, not something bolted on for a blog post: the part that decides what's allowed doesn't know or care how the decision gets proven afterward.

What that buys you: the signature can be checked by the executing system, by an auditor, by a regulator, independently, against a public key. Nobody has to trust Parmana's live say-so at the moment of execution. They check the math.

You can see this directly rather than take my word for it: execution-authority-gate.fly.dev has a live, interactive demo where you can check a signature against a public key yourself.

## The keys don't live with us

One more piece worth being specific about, because it's easy to say "your business stays in control" as a slogan. The actual container this runs in is built so that signing key material is deliberately excluded from the image at build time. It's not baked in. The application fails closed at boot, refuses to start, if no key material has been supplied by whoever is deploying it. That's not a policy we promise to follow. It's a build-time decision: there is no path where Parmana ships with your keys inside it, because they were never put there in the first place.

Same story with policy: rules live in a plain, deploying-party-controlled location, not a Parmana-hosted central store. If we disappeared tomorrow, what determines what's allowed doesn't disappear with us.

## What this doesn't do

Worth being honest about the edges here too. This isn't a fraud model. It doesn't guess whether a transaction looks suspicious, that's a different problem, and if you want a risk score feeding into a decision, that's a signal you hand the policy engine as one input among others, not something this replaces. It's not a human-approval workflow either; there's a separate, real tool for reviewing changes to the rules themselves, with a proper diff view, but that's governance over the policy, not a human sitting in the loop of every payment. The policy engine decides in real time, deterministically, off the rules and the facts it's given. No model call, no external lookup, no clock, no randomness, inside that decision. That's deliberate: the one piece that decides approve or reject should be the one piece you can reason about completely, every time, the same way.

## Where this leaves things

Last post's argument was that a spending limit answers "how much" and not "was this specific action actually still authorized." This post is the mechanical answer to that: recompute the content hash, recompute the policy hash, check the signature, check the nonce, in that order, every time, before anything executes. None of it depends on the agent behaving well. None of it depends on a notification arriving in time. It depends on the check running again, at the only moment that actually matters, right before the money moves.

That's not a bigger claim than last time. It's the same claim, with the mechanism shown instead of described.

---

*Next: I want to go deeper on what Sharat Chandra and Nikhil Pahwa are each specifically proposing for NPCI's protocol, and where a runtime layer like this agrees or differs from their proposals. If there's a different angle you'd rather see first, reply and tell me.*
