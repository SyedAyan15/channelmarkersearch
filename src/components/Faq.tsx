"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold text-ink transition-colors hover:text-navy"
              >
                {f.q}
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                    isOpen ? "rotate-45 bg-navy text-white" : "bg-mist text-navy"
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <div
              id={`faq-${i}`}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-12 leading-relaxed text-body">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
