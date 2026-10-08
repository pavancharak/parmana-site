"use client";

import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { nav, scheduleUrl } from "@/lib/config";

const links = [
  { label: "Product", href: nav.product },
  { label: "How it works", href: nav.howItWorks },
  { label: "Examples", href: nav.useCases },
  { label: "Questions", href: nav.faq },
  { label: "Docs", href: nav.docs },
];

function external(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`print:hidden sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled || open
          ? "bg-paper/85 backdrop-blur-md border-b border-border/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-ink" aria-label="Parmana home">
          <span aria-hidden className="grid h-7 w-7 place-items-center rounded-md bg-purple text-white">
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
              <rect x="7" y="3" width="6" height="14" rx="1" stroke="currentColor" strokeWidth="1.6" />
              <path d="M2 10h3m10 0h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          Parmana
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink/70 hover:text-ink transition-colors"
              {...external(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href={nav.github} className="text-sm font-medium text-ink/70 hover:text-ink transition-colors" {...external(nav.github)}>
            GitHub
          </a>
          <a
            href={scheduleUrl}
            data-track="cta_demo_header"
            className="group inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-purple px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-purple/30 hover:bg-purple-deep transition-colors"
          >
            Request a demo
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        <button
          type="button"
          className="md:hidden flex h-12 w-12 items-center justify-center text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-4 bg-paper">
          {[...links, { label: "GitHub", href: nav.github }].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base text-ink/80"
              onClick={() => setOpen(false)}
              {...external(link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={scheduleUrl}
            data-track="cta_demo_header_mobile"
            className="inline-flex items-center justify-center rounded-full bg-purple px-6 py-3 text-sm font-semibold text-white min-h-[48px]"
            onClick={() => setOpen(false)}
          >
            Request a demo
          </a>
        </div>
      )}
    </header>
  );
}
