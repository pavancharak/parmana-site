"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { founderEmail, nav } from "@/lib/config";

const links = [
  { label: "How it works", href: nav.howItWorks },
  { label: "Use cases", href: nav.useCases },
  { label: "Demo", href: nav.demo },
  { label: "Explainers", href: nav.explainers },
  { label: "FAQ", href: nav.faq },
  { label: "Docs", href: nav.docs },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-paper border-b border-border">
      <div className="max-w-container mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="/"
          className="text-lg font-bold text-ink hover:text-purple-deep transition-colors"
          aria-label="Parmana home"
        >
          Parmana
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-ink/70 hover:text-purple-deep transition-colors"
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={`mailto:${founderEmail}?subject=Request%20a%20demo`}
            className="inline-flex items-center rounded-md bg-purple px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity duration-150"
          >
            Request a demo
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
        <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-ink/70"
              onClick={() => setOpen(false)}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}

          <a
            href={`mailto:${founderEmail}?subject=Request%20a%20demo`}
            className="inline-flex items-center justify-center rounded-md bg-purple px-6 py-3 text-sm font-semibold text-white min-h-[48px]"
            onClick={() => setOpen(false)}
          >
            Request a demo
          </a>
        </div>
      )}
    </header>
  );
}
