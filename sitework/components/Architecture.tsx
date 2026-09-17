import BoundaryDiagram from "@/components/BoundaryDiagram";

export default function Architecture() {
  return (
    <section id="architecture" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.15] tracking-tight text-ink text-center max-w-[820px] mx-auto">
          A simple check between the decision and the action.
        </h2>
        <p className="mt-4 text-center text-base md:text-lg text-ink/70 max-w-[700px] mx-auto">
          People, AI and software can ask for an action. Parmana checks the request before it reaches the system that carries it out.
        </p>
        <div className="mt-14 rounded-md border border-border bg-white p-8 md:p-10">
          <BoundaryDiagram />
        </div>
      </div>
    </section>
  );
}
