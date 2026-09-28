"use client";

import { useEffect } from "react";
import { Analytics, track } from "@vercel/analytics/react";

// Any link or button with data-track="event_name" reports a click event.
export default function SiteAnalytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (el?.dataset.track) track(el.dataset.track, { path: window.location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return <Analytics />;
}
