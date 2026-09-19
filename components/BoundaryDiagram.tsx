import Gate from "@/components/Gate";

const sources = ["AI agents", "People", "Apps", "Workflows"];

export default function BoundaryDiagram() {
  return (
    <div role="img" aria-label="AI agents, people, apps and workflows can request actions; Parmana checks them before business systems execute them" className="mx-auto flex max-w-[520px] flex-col items-center gap-2 py-4">
      <div className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 border-b border-border pb-4">
        {sources.map((source) => <div key={source} className="rounded-md border border-border px-2 py-3 text-center text-xs font-medium text-ink/70">{source}</div>)}
      </div>
      <div className="h-5 w-px bg-purple" />
      <div className="flex items-center gap-3 rounded-md border-2 border-purple bg-lavender px-5 py-4">
        <Gate state="checking" className="h-9 w-9 shrink-0" />
        <p className="text-sm font-bold text-purple-deep">Parmana checks and authorizes the exact action</p>
      </div>
      <div className="h-5 w-px bg-border" />
      <div className="rounded-md border border-border px-6 py-4 text-center">
        <p className="text-sm font-medium text-ink/70">Payment or business system</p>
        <p className="mt-1 text-xs text-ink/50">Executes only after verification</p>
      </div>
    </div>
  );
}
