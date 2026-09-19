const sdks = [
  { name: "TypeScript", packageName: "@parmana/sdk", install: "npm install @parmana/sdk", registryLabel: "View on npm", registryHref: "https://www.npmjs.com/package/@parmana/sdk", docsHref: "https://docs.parmanasystems.com/sdks/typescript" },
  { name: "Python", packageName: "parmana", install: "pip install parmana", registryLabel: "View on PyPI", registryHref: "https://pypi.org/project/parmana/1.1.4/", docsHref: "https://docs.parmanasystems.com/sdks/python" },
];

export default function SdkDownloads() {
  return (
    <section className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">Developer tools</h2>
        <p className="mt-3 text-base text-ink/70 text-center">Connect the execution trust layer to the application that requests or executes the action.</p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {sdks.map(s => (
            <div key={s.name} className="rounded-md border border-border bg-white p-8">
              <h3 className="text-base font-bold text-ink">{s.name}</h3>
              <p className="mt-1 font-mono text-xs text-ink/60">{s.packageName}</p>
              <pre className="mt-6 overflow-x-auto rounded-md bg-ink px-4 py-3 font-mono text-sm text-white">{s.install}</pre>
              <div className="mt-6 flex flex-col gap-3">
                <a href={s.registryHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border border-purple px-6 py-3 text-sm font-semibold text-purple-deep min-h-[44px]">{s.registryLabel}</a>
                <a href={s.docsHref} target="_blank" rel="noopener noreferrer" className="text-sm text-ink/70 text-center">Read the {s.name} docs</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
