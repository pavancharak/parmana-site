import YouTubeEmbed from "@/components/YouTubeEmbed";
import { demoVideo } from "@/lib/config";

export default function DemoVideoSection() {
  return (
    <section className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <div className="text-center max-w-[680px] mx-auto">
          <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">
            The walkthrough
          </p>
          <h2 className="mt-3 text-xl md:text-2xl font-bold text-ink">
            The refund, end to end
          </h2>
          <p className="mt-2 text-sm leading-[1.6] text-ink/70">
            A customer request in the Phinite agent, Parmana&apos;s
            authorization decision, and the execution evidence it produces.
          </p>
        </div>

        <div className="mt-8">
          <YouTubeEmbed {...demoVideo} />
        </div>
      </div>
    </section>
  );
}
