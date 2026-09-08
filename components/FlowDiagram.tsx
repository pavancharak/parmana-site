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
      className={`rounded-md border border-divider px-5 py-4 text-center max-w-[280px] ${className}`}
    >
      <p className="text-xs font-mono uppercase tracking-wide text-paper/50">{eyebrow}</p>
      <p className="mt-1 text-sm font-medium text-paper">{label}</p>
    </div>
  );
}

export default function FlowDiagram() {
  return (
    <div
      role="img"
      aria-label="AI requests an action, Parmana checks it against your rules, then either it executes in your business system or it stops with nothing executed"
      className="mx-auto flex max-w-[560px] flex-col items-center gap-3 py-4"
    >
      <Box eyebrow="Step 1" label="AI, employee, or app requests an action" />

      <ArrowDownIcon className="h-5 w-5 text-paper/50" aria-hidden="true" />

      <div className="flex items-center gap-3 rounded-md border-2 border-mint px-5 py-4">
        <Gate state="checking" className="h-9 w-9 shrink-0" />
        <div className="text-left">
          <p className="text-xs font-mono uppercase tracking-wide text-mint">Step 2</p>
          <p className="text-sm font-medium text-paper">
            Parmana checks it against your existing rules
          </p>
        </div>
      </div>

      <div className="mt-1 grid w-full grid-cols-1 gap-6 border-t border-divider pt-5 sm:grid-cols-2">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="mx-auto h-4 w-px bg-mint" aria-hidden="true" />
          <CheckCircleIcon className="h-6 w-6 text-mint" aria-hidden="true" />
          <p className="text-xs font-mono uppercase tracking-wide text-mint">Allowed</p>
          <p className="text-sm text-paper/70">Executes in your business system</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <div className="mx-auto h-4 w-px bg-divider" aria-hidden="true" />
          <XCircleIcon className="h-6 w-6 text-paper/50" aria-hidden="true" />
          <p className="text-xs font-mono uppercase tracking-wide text-paper/50">Not allowed</p>
          <p className="text-sm text-paper/70">Stops. Nothing executes.</p>
        </div>
      </div>
    </div>
  );
}
