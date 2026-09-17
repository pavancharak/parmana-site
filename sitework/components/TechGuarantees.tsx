const guarantees = [
  ["Check first", "The request is checked before it reaches the system that will carry it out."],
  ["Stop when not allowed", "If a request does not follow the business rule, it does not proceed."],
  ["Follow the business rule", "Your business decides what is allowed and when."],
  ["Set a time limit", "An approval can stop being valid after a set time."],
  ["Stop an approval", "The business can stop an action when it is no longer allowed."],
  ["Keep a clear record", "You can keep a clear record of important decisions and actions."],
  ["Connect the decision to the action", "The record connects what was allowed with what the software actually did."],
  ["Show changes", "Changes to important records can be detected."],
  ["Check the record independently", "The record can be checked without relying only on the application that did the work."],
];

export default function TechGuarantees() {
  return (
    <section id="guarantees" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.15] tracking-tight text-ink text-center max-w-[760px] mx-auto">
          Built for control
        </h2>
        <p className="mt-4 text-center text-base md:text-lg text-ink/70 max-w-[700px] mx-auto">
          Important actions should follow the business rule before they happen, with a clear record afterwards.
        </p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {guarantees.map(([title, desc]) => (
            <div key={title} className="rounded-md border border-border bg-lavender p-7">
              <h3 className="text-base font-bold text-ink mb-2">{title}</h3>
              <p className="text-sm leading-[1.7] text-ink/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
