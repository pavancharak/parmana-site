"use client";

import { ArrowDownTrayIcon, EnvelopeIcon, PrinterIcon } from "@heroicons/react/20/solid";
import { founderEmail } from "@/lib/config";

const btn =
  "inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink/80 min-h-[40px] transition hover:border-purple hover:text-purple-deep";

export default function LetterToolbar({ query }: { query: string }) {
  return (
    <div className="flex flex-wrap gap-2 print:hidden">
      <a href={`/letter/md${query}`} download="parmana-investor-letter.md" className={btn}>
        <ArrowDownTrayIcon className="h-4 w-4" /> Markdown
      </a>
      <button type="button" onClick={() => window.print()} className={btn}>
        <PrinterIcon className="h-4 w-4" /> Save as PDF
      </button>
      <a href={`mailto:${founderEmail}?subject=${encodeURIComponent("Parmana Series A")}`} className={btn}>
        <EnvelopeIcon className="h-4 w-4" /> Email the founder
      </a>
    </div>
  );
}
