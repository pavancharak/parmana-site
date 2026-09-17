import { ArrowDownIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Gate from "@/components/Gate";

function Box({ eyebrow, label, className = "" }: { eyebrow: string; label: string; className?: string }) { return <div className={`rounded-md border border-border px-5 py-4 text-center max-w-[280px] ${className}`}><p className="text-xs font-mono uppercase tracking-wide text-ink/50">{eyebrow}</p><p className="mt-1 text-sm font-medium text-ink">{label}</p></div>; }

export default function FlowDiagram() {
  return <div role="img" aria-label="A business defines an allowed action, Parmana checks the request, and the action either proceeds or is stopped" className="mx-auto flex max-w-[560px] flex-col items-center gap-3 py-4">
    <Box eyebrow="Step 1" label="Leaders decide what is allowed" />
    <ArrowDownIcon className="h-5 w-5 text-ink/50" aria-hidden="true" />
    <div className="flex items-center gap-3 rounded-md border-2 border-purple px-5 py-4"><Gate state="checking" className="h-9 w-9 shrink-0" /><div className="text-left"><p className="text-xs font-mono uppercase tracking-wide text-purple-deep">Step 2</p><p className="text-sm font-medium text-ink">Parmana checks the request</p></div></div>
    <ArrowDownIcon className="h-5 w-5 text-ink/50" aria-hidden="true" />
    <Box eyebrow="Step 3" label="Does the business allow this action?" />
    <div className="mt-1 grid w-full grid-cols-1 gap-6 border-t border-border pt-5 sm:grid-cols-2">
      <div className="flex flex-col items-center gap-2 text-center"><div className="mx-auto h-4 w-px bg-purple" /><CheckCircleIcon className="h-6 w-6 text-purple-deep" /><p className="text-xs font-mono uppercase tracking-wide text-purple-deep">Allowed</p><p className="text-sm text-ink/70">The action can proceed. Parmana keeps proof of what happened.</p></div>
      <div className="flex flex-col items-center gap-2 text-center"><div className="mx-auto h-4 w-px bg-border" /><XCircleIcon className="h-6 w-6 text-ink/50" /><p className="text-xs font-mono uppercase tracking-wide text-ink/50">Not allowed</p><p className="text-sm text-ink/70">The action is stopped.</p></div>
    </div>
  </div>;
}
