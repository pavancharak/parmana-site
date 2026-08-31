"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { founderEmail, nav } from "@/lib/config";

const links = [
  { label: "Research", href: nav.blog },
  { label: "Security", href: nav.security },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border-light">
      <div className="max-w-container mx-auto flex items-center justify-between px-6 py-4">
        {/* Home */}
        <a
          href="/"
          className="text-lg font-bold text-text-primary hover:opacity-80 transition-opacity"
          aria-label="Parmana home"
        >
          Parmana
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              {...(link.href.startsWith("http")
                ? {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#faq"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-primary-dark hover:shadow-md transition-all"
          >
            Questions?
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden flex h-12 w-12 items-center justify-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="md:hidden border-t border-border-light px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-text-secondary"
              onClick={() => setOpen(false)}
              {...(link.href.startsWith("http")
                ? {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {})}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#faq"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white min-h-[48px]"
            onClick={() => setOpen(false)}
          >
            Questions?
          </a>
        </div>
      )}
    </header>
  );
}