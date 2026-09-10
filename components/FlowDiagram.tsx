import { ArrowDownIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Gate from "@/components/Gate";

function Box({
  eyebrow,
  label,
  className = "",
}: {
  eyebrow: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-md border border-border px-5 py-4 text-center max-w-[280px] ${className}`}
    >
      <p className="text-xs font-mono uppercase tracking-wide text-ink/50">{eyebrow}</p>
      <p className="mt-1 text-sm font-medium text-ink">{label}</p>
    </div>
  );
}

export default function FlowDiagram() {
  return (
    <div
      role="img"
      aria-label="An actor requests an action, Parmana checks it against existing authorization rules, then either it executes in the business system or it is blocked and nothing executes"
      className="mx-auto flex max-w-[560px] flex-col items-center gap-3 py-4"
    >
      <Box eyebrow="Step 1, request" label="Actor proposes an action" />

      <ArrowDownIcon className="h-5 w-5 text-ink/50" aria-hidden="true" />

      <div className="flex items-center gap-3 rounded-md border-2 border-purple px-5 py-4">
        <Gate state="checking" className="h-9 w-9 shrink-0" />
        <div className="text-left">
          <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">
            Step 2, evaluate authority
          </p>
          <p className="text-sm font-medium text-ink">
            Parmana checks it against existing authorization rules
          </p>
        </div>
      </div>

      <ArrowDownIcon className="h-5 w-5 text-ink/50" aria-hidden="true" />

      <Box eyebrow="Step 3, decision state" label="Is this action authorized?" />

      <div className="mt-1 grid w-full grid-cols-1 gap-6 border-t border-border pt-5 sm:grid-cols-2">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="mx-auto h-4 w-px bg-purple" aria-hidden="true" />
          <CheckCircleIcon className="h-6 w-6 text-purple-deep" aria-hidden="true" />
          <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">Authorized</p>
          <p className="text-sm text-ink/70">Signed proof, then execution proceeds</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <div className="mx-auto h-4 w-px bg-border" aria-hidden="true" />
          <XCircleIcon className="h-6 w-6 text-ink/50" aria-hidden="true" />
          <p className="text-xs font-mono uppercase tracking-wide text-ink/50">Not authorized</p>
          <p className="text-sm text-ink/70">Blocked. Nothing executes.</p>
        </div>
      </div>
    </div>
  );
}
