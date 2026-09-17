const signals = [
  ["AI is taking action", "AI is moving beyond answers and starting to carry out work inside business software."],
  ["The business still sets the rules", "Leaders decide what the business can approve, spend, change, release or share."],
  ["Control needs to happen before action", "A record afterwards is useful, but businesses also need a way to stop an action that does not follow the rules."],
];

export default function Evidence() {
  return (
    <section id="evidence" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.15] tracking-tight text-ink text-center max-w-[820px] mx-auto">
          Why this matters now
        </h2>
        <p className="mt-4 text-base md:text-lg text-ink/70 text-center max-w-[720px] mx-auto">
          As software takes on more work, businesses need a simple way to keep their decisions in charge.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {signals.map(([title, body]) => (
            <div key={title} className="rounded-md border border-border bg-white p-7">
              <h3 className="text-base font-bold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-[1.7] text-ink/70">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
