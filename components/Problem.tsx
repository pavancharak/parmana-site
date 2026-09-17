export default function Problem() {
  return (
    <section id="problem" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">Software can act. But can you prove it acted as approved?</h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-4">
            <p className="text-base leading-[1.65] text-ink/70">Businesses are giving software and AI more work to do.</p>
            <p className="text-base leading-[1.65] text-ink/70">That makes one question increasingly important: <strong>did the system do exactly what the business approved?</strong></p>
            <p className="text-base leading-[1.65] text-ink/70">A report written after an action can tell you what happened. It cannot stop an action that should never have happened.</p>
            <p className="text-base leading-[1.65] font-medium text-purple-deep">Parmana checks the action before it reaches the system that carries it out.</p>
          </div>
          <div className="relative flex items-end justify-center">
            <img src="/parmana-problem-foreground.png" alt="A person and a software system, representing business decisions and software execution." className="w-full max-w-[720px] h-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
