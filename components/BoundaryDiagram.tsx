import Gate from "@/components/Gate";

const sources = ["Autonomous systems", "Employees", "Apps", "Partners"];

export default function BoundaryDiagram() {
  return (
    <div
      role="img"
      aria-label="Autonomous systems, employees, apps, and partners all pass through the Parmana boundary before reaching business systems, so vulnerabilities inside business systems sit outside that boundary"
      className="mx-auto flex max-w-[480px] flex-col items-center gap-2 py-4"
    >
      <div className="grid w-full grid-cols-4 gap-2 border-b border-border pb-4">
        {sources.map((source) => (
          <div
            key={source}
            className="rounded-md border border-border px-2 py-3 text-center text-xs font-medium text-ink/70"
          >
            {source}
          </div>
        ))}
      </div>

      <div className="h-5 w-px bg-purple" aria-hidden="true" />

      <div className="flex items-center gap-3 rounded-md border-2 border-purple bg-lavender px-5 py-4">
        <Gate state="checking" className="h-9 w-9 shrink-0" />
        <p className="text-sm font-bold text-purple-deep">Parmana boundary</p>
      </div>

      <div className="h-5 w-px bg-border" aria-hidden="true" />

      <div className="rounded-md border border-border px-6 py-4 text-center">
        <p className="text-sm font-medium text-ink/70">Business systems</p>
      </div>

      <p className="mt-3 max-w-[400px] text-center text-xs leading-[1.6] text-ink/50">
        A vulnerability inside a business system does not reduce Parmana&apos;s
        value. It reinforces it, because authority here is structural, not
        behavioral. The boundary does not depend on the security posture of
        the system behind it.
      </p>
    </div>
  );
}
