import BoundaryDiagram from "@/components/BoundaryDiagram";

export default function Architecture() {
  return (
    <section id="architecture" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">
          Parmana sits outside your business systems
        </h2>

        <div className="mt-14 rounded-md border border-border bg-white p-8 md:p-10">
          <BoundaryDiagram />
        </div>
      </div>
    </section>
  );
}
