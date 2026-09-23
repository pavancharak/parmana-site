import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import type { UseCase } from "@/lib/useCases";

const proofPoints = [
  "The authorization existed before the request",
  "The request was checked against it",
  "The decision was made correctly",
  "What executed matches the decision",
];

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">{children}</p>;
}

export default function AuthorizationCard({ useCase }: { useCase: UseCase }) {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-purple/25 via-lavender to-purple-deep/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_30px_60px_-20px_rgb(67_56_202/0.25),0_18px_36px_-18px_rgb(0_0_0/0.15)]">
        <div className="flex items-center justify-between border-b border-border bg-lavender/60 px-6 py-3">
          <span className="font-mono text-xs text-ink/60">{useCase.agent.toLowerCase().replace(/ /g, "-")}</span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-purple-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-purple" /> enforced
          </span>
        </div>

        <div className="px-6 py-6 md:px-8">
          <Label>Authorization</Label>
          <p className="mt-2 text-base md:text-lg font-semibold text-ink">
            {useCase.agent}: {useCase.rule.charAt(0).toLowerCase() + useCase.rule.slice(1)}
          </p>
        </div>

        <div className="border-t border-border px-6 py-6 md:px-8">
          <Label>Agent requests</Label>
          <ul className="mt-4 space-y-3">
            <li className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-purple/30 bg-lavender px-4 py-3">
              <span className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-sm md:text-[15px] text-ink">
                  {useCase.inBounds.label} of <span className="font-mono font-semibold">{useCase.inBounds.amount}</span>
                </span>
              </span>
              <span className="font-mono text-xs text-purple-deep">Within bounds · Proceeds</span>
            </li>
            <li className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-white px-4 py-3">
              <span className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink text-white">
                  <XMarkIcon className="h-4 w-4" />
                </span>
                <span className="text-sm md:text-[15px] text-ink/70">
                  {useCase.outOfBounds.label} of <span className="font-mono font-semibold">{useCase.outOfBounds.amount}</span>
                </span>
              </span>
              <span className="font-mono text-xs text-ink/60">Outside bounds · Blocked</span>
            </li>
          </ul>
        </div>

        <div className="border-t border-border bg-lavender/40 px-6 py-6 md:px-8">
          <Label>Proof</Label>
          <p className="mt-2 text-sm text-ink/70">Signed, verifiable proof that:</p>
          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {proofPoints.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-ink">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-purple-deep" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
