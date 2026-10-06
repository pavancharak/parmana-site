import YouTubeEmbed from "@/components/YouTubeEmbed";
import { demoVideo } from "@/lib/config";

export default function DemoVideoSection() {
  return (
    <section className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-deep">
          Watch the flow
        </p>

        <h2 className="mt-3 text-xl md:text-2xl font-bold text-ink">
          Request → Authority → Execution → Proof
        </h2>

        <p className="mt-2 text-sm leading-[1.6] text-ink/70 max-w-[720px]">
          See the request, the business rule, the decision and the evidence.
        </p>

        <div className="mt-8 max-w-[900px] mx-auto">
          <YouTubeEmbed {...demoVideo} />
        </div>
      </div>
    </section>
  );
}
