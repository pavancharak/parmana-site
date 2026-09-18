const videos = [
  { id: "TFpT0wCHnmM", title: "AI can suggest. The business decides.", description: "A simple look at the difference between AI suggesting an action and the business giving permission for that action.", newVideo: false },
  { id: "I2ePXz2KFgc", title: "How Parmana keeps business rules in control", description: "Why an important action should be checked before it reaches the business system.", newVideo: false },
  { id: "8g_J81sqdWE", title: "How to control what AI can do", description: "A simple look at how businesses can control actions taken by AI before they reach business systems.", newVideo: false },
  { id: "KWx0wNrWLws", title: "How Parmana checks the full chain", description: "A simple look at how an action is connected to the permission, decision, rules and authority behind it.", newVideo: false },
  { id: "V8oLELp8CWs", title: "How Parmana protects business decisions", description: "A simple look at how Parmana keeps actions approved by the business under control when software and AI carry them out.", newVideo: false },
  { id: "4UC7Y4IoJgg", title: "Keeping business control with AI", description: "A short explanation of how a business can stay in control when AI takes action.", newVideo: true },
  { id: "5qQxbdw3AmE", title: "Making sure AI follows business decisions", description: "A short explanation of how approved business decisions guide actions taken by software and AI.", newVideo: true },
];

export default function ExplainerGrid() {
  return (
    <section className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <div className="mb-12 text-center">
          <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">Video explainers</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-ink">See how it works</h2>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <article key={video.id} className="text-center">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-purple-deep">
                {video.newVideo ? "New video" : "Explainer"}
              </div>
              <div className="relative mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-md border border-border bg-ink">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&playsinline=1`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <h3 className="mt-4 text-base font-bold text-ink">{video.title}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-ink/70 max-w-[360px] mx-auto">{video.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
