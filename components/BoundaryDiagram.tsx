import Gate from "@/components/Gate";

const sources = ["AI agents", "Employees", "Apps"];

export default function BoundaryDiagram() {
  return (
    <div
      role="img"
      aria-label="AI agents, employees, and apps all pass through the Parmana boundary before reaching your business systems, so vulnerabilities inside your business systems sit outside that boundary"
      className="mx-auto flex max-w-[480px] flex-col items-center gap-2 py-4"
    >
      <div className="grid w-full grid-cols-3 gap-3 border-b border-divider pb-4">
        {sources.map((source) => (
          <div
            key={source}
            className="rounded-md border border-divider px-2 py-3 text-center text-xs font-medium text-paper/70"
          >
            {source}
          </div>
        ))}
      </div>

      <div className="h-5 w-px bg-mint" aria-hidden="true" />

      <div className="flex items-center gap-3 rounded-md border-2 border-mint px-5 py-4">
        <Gate state="checking" className="h-9 w-9 shrink-0" />
        <p className="text-sm font-medium text-paper">Parmana boundary</p>
      </div>

      <div className="h-5 w-px bg-divider" aria-hidden="true" />

      <div className="rounded-md border border-divider px-6 py-4 text-center">
        <p className="text-sm font-medium text-paper/70">Your business systems</p>
      </div>

      <p className="mt-3 max-w-[400px] text-center text-xs leading-[1.6] text-paper/50">
        Even if your business systems have a security flaw, it can&apos;t be used
        to skip this check.
      </p>
    </div>
  );
}
