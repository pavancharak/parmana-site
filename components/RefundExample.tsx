import AuthorizationCard from "@/components/AuthorizationCard";
import { messaging } from "@/lib/config";
import { defaultUseCase } from "@/lib/useCases";

export default function RefundExample() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-paper">
      <div className="max-w-container mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-14 lg:gap-20 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">One refund, end to end</p>
          <h2 className="mt-4 text-[30px] md:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
            How Parmana works
          </h2>
          <p className="mt-5 text-lg leading-[1.65] text-ink/70">
            You set what the refund agent is authorized to request. Every request is checked against that
            authorization before it reaches your system. In bounds, it proceeds. Out of bounds, it is blocked.
            Either way, you get proof.
          </p>
          <p className="mt-8 border-l-2 border-purple pl-5 text-xl font-semibold leading-[1.4] text-ink">
            {messaging.tagline}
          </p>
        </div>
        <AuthorizationCard useCase={defaultUseCase} />
      </div>
    </section>
  );
}
