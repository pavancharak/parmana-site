"use client";

import { useState } from "react";

export default function YouTubeEmbed({
  id,
  title,
  orientation,
}: {
  id: string;
  title: string;
  orientation: "vertical" | "horizontal";
}) {
  const [playing, setPlaying] = useState(false);
  const aspect = orientation === "vertical" ? "aspect-[9/16]" : "aspect-video";
  const maxWidth = orientation === "vertical" ? "max-w-[360px]" : "max-w-[720px]";

  return (
    <div
      className={`relative w-full ${maxWidth} ${aspect} mx-auto overflow-hidden rounded-md border border-border bg-ink`}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 flex h-full w-full items-center justify-center"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-60"
          />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-purple text-white shadow-none transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 translate-x-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
