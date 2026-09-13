import YouTubeEmbed from "@/components/YouTubeEmbed";
import { explainerVideos } from "@/lib/config";

export default function ExplainerGrid() {
  return (
    <section className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <div
          className={`grid grid-cols-1 gap-12 ${
            explainerVideos.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : ""
          }`}
        >
          {explainerVideos.map((video) => (
            <div key={video.id} className="text-center">
              <YouTubeEmbed {...video} />
              <h3 className="mt-4 text-base font-bold text-ink">{video.title}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-ink/70 max-w-[360px] mx-auto">
                {video.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
