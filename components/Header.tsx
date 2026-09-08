"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { founderEmail, nav } from "@/lib/config";

const links = [
  { label: "Product", href: nav.product },
  { label: "Why Now", href: nav.whyNow },
  { label: "Company", href: nav.company },
  { label: "Docs", href: nav.docs },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-navy border-b border-divider">
      <div className="max-w-container mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="/"
          className="font-serif text-lg font-semibold text-paper hover:text-mint transition-colors"
          aria-label="Parmana home"
        >
          Parmana
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-paper/80 hover:text-mint transition-colors"
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
            className="inline-flex items-center rounded-sm bg-mint px-6 py-3 text-sm font-semibold text-navy shadow-sm hover:bg-paper hover:shadow-lg hover:shadow-mint/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Request Demo
          </a>
        </div>

        <button
          type="button"
          className="md:hidden flex h-12 w-12 items-center justify-center text-paper"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-divider px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-paper/80"
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
            className="inline-flex items-center justify-center rounded-sm bg-mint px-6 py-3 text-sm font-semibold text-navy min-h-[48px]"
            onClick={() => setOpen(false)}
          >
            Request Demo
          </a>
        </div>
      )}
    </header>
  );
}
