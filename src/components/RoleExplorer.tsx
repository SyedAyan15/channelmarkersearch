"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import type { RoleProfile } from "@/lib/content";

export function RoleExplorer({ roles }: { roles: RoleProfile[] }) {
  const [activeId, setActiveId] = useState(roles[0].id);
  const active = roles.find((r) => r.id === activeId) ?? roles[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
      <div
        role="tablist"
        aria-label="Roles we recruit"
        className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
      >
        {roles.map((r) => {
          const selected = r.id === activeId;
          return (
            <button
              key={r.id}
              role="tab"
              id={`tab-${r.id}`}
              aria-selected={selected}
              aria-controls="role-panel"
              onClick={() => setActiveId(r.id)}
              className={`group flex shrink-0 items-center justify-between gap-4 rounded-xl px-5 py-4 text-left font-semibold transition-all duration-300 lg:w-full ${
                selected
                  ? "bg-navy text-white shadow-lg shadow-navy/20"
                  : "bg-white text-ink ring-1 ring-line hover:ring-navy/40"
              }`}
            >
              <span className="whitespace-nowrap lg:whitespace-normal">{r.title}</span>
              <ArrowRight
                className={`hidden h-4 w-4 transition-all duration-300 lg:block ${
                  selected
                    ? "translate-x-0 text-sky opacity-100"
                    : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div
        id="role-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
        className="relative overflow-hidden rounded-2xl bg-white p-7 ring-1 ring-line sm:p-10"
      >
        <div key={active.id} className="animate-hero-in">
          <h3 className="text-2xl font-semibold text-ink sm:text-3xl">{active.title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-body">{active.summary}</p>

          <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-sky-dark">What we screen for</p>
          <ul className="mt-4 space-y-3">
            {active.screenFor.map((item, i) => (
              <li
                key={item}
                className="flex animate-hero-in items-start gap-3 text-ink"
                style={{ animationDelay: `${120 + i * 80}ms` }}
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky-light text-sky-dark">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6">
            <div>
              <p className="text-sm text-body">Typical base</p>
              <p className="mt-1 text-xl font-semibold text-navy">{active.base}</p>
            </div>
            <div>
              <p className="text-sm text-body">Typical OTE</p>
              <p className="mt-1 text-xl font-semibold text-navy">{active.ote}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <Link href="/contact" className="group inline-flex items-center gap-2 text-navy">
              Hire {active.title.toLowerCase()}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={`/careers?category=${active.careersFilter}`}
              className="link-underline text-body hover:text-navy"
            >
              See open {active.careersFilter.toLowerCase()} roles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
