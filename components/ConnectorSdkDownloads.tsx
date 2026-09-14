const connectorSdks = [
  {
    name: "TypeScript",
    packageName: "@parmana/connector-sdk",
    install: "npm install @parmana/connector-sdk",
    registryLabel: "View on npm",
    registryHref: "https://www.npmjs.com/package/@parmana/connector-sdk",
    docsHref: "https://docs.parmanasystems.com/reference/connector-sdk",
  },
  {
    name: "Python",
    packageName: "parmana-connector-sdk",
    install: "pip install parmana-connector-sdk",
    registryLabel: "View on PyPI",
    registryHref: "https://pypi.org/project/parmana-connector-sdk/0.1.0/",
    docsHref: "https://docs.parmanasystems.com/reference/connector-sdk-python",
  },
];

export default function ConnectorSdkDownloads() {
  return (
    <section className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <p className="text-xs font-mono uppercase tracking-wide text-purple-deep text-center">
          For pilots and integrations
        </p>

        <h2 className="mt-4 text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">
          Connector SDKs, for the system that executes the action
        </h2>

        <p className="mt-3 text-base text-ink/70 text-center max-w-[640px] mx-auto">
          Different from the SDKs above. Those let an autonomous system propose an action to
          Parmana. This is for wiring up the connector, one API call to the system that carries
          out an already authorized action, the integration a pilot needs. Both are real,
          published packages.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {connectorSdks.map((sdk) => (
            <div
              key={sdk.name}
              className="rounded-md border border-border bg-white p-8"
            >
              <h3 className="text-base font-bold text-ink">{sdk.name}</h3>
              <p className="mt-1 font-mono text-xs text-ink/60">
                {sdk.packageName}
              </p>

              <pre className="mt-6 overflow-x-auto rounded-md bg-ink px-4 py-3 font-mono text-sm text-white">
                {sdk.install}
              </pre>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={sdk.registryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-purple px-6 py-3 text-sm font-semibold text-purple-deep hover:bg-lavender transition-colors duration-150 min-h-[44px]"
                >
                  {sdk.registryLabel}
                </a>
                <a
                  href={sdk.docsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink/70 hover:text-purple-deep transition-colors text-center"
                >
                  Read the Connector SDK ({sdk.name}) docs
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
