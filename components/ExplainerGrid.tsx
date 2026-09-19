import { explainerVideos } from "@/lib/config";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function ExplainerGrid() {
  return (
    <section className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <div className="mb-12 text-center">
          <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">Video explainers</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-ink">See how the execution boundary works</h2>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {explainerVideos.map((video) => (
            <article key={video.id} className="text-center">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-purple-deep">Explainer</div>
              <YouTubeEmbed id={video.id} title={video.title} orientation={video.orientation} />
              <h3 className="mt-4 text-base font-bold text-ink">{video.title}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-ink/70 max-w-[360px] mx-auto">{video.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
