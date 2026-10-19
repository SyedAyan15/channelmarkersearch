"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { ArrowRight, MapPin, Search, Wallet } from "lucide-react";
import { formatDate, type Job } from "@/lib/jobs";

const categories = ["All", "Sales", "Technical", "Partnerships"] as const;
type Category = (typeof categories)[number];

export function JobBoard({ jobs }: { jobs: Job[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const fromUrl = params.get("category");
  const category: Category = categories.includes(fromUrl as Category) ? (fromUrl as Category) : "All";
  const [query, setQuery] = useState("");

  const setCategory = (c: Category) => {
    const next = new URLSearchParams(params);
    if (c === "All") next.delete("category");
    else next.set("category", c);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const q = query.trim().toLowerCase();
  const filtered = jobs.filter(
    (j) =>
      (category === "All" || j.category === category) &&
      (!q || `${j.title} ${j.location} ${j.summary}`.toLowerCase().includes(q)),
  );

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter roles by type">
          {categories.map((c) => {
            const count = c === "All" ? jobs.length : jobs.filter((j) => j.category === c).length;
            return (
              <button
                key={c}
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  category === c
                    ? "border-navy bg-navy text-white shadow-md shadow-navy/20"
                    : "border-line bg-white text-ink hover:border-navy/50"
                }`}
              >
                {c} <span className={category === c ? "text-sky" : "text-body"}>({count})</span>
              </button>
            );
          })}
        </div>
        <label className="flex items-center gap-3 rounded-full border border-line bg-white px-5 py-3 transition focus-within:border-navy focus-within:ring-2 focus-within:ring-navy/15 lg:w-80">
          <Search className="h-4 w-4 text-body" />
          <span className="sr-only">Search roles</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title or location"
            className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-body/70"
          />
        </label>
      </div>

      <p className="mt-6 text-sm text-body" aria-live="polite">
        Showing {filtered.length} of {jobs.length} roles
      </p>

      <ul className="mt-4 space-y-4">
        {filtered.map((job, i) => (
          <li key={job.slug} className="animate-hero-in" style={{ animationDelay: `${i * 60}ms` }}>
            <Link
              href={`/careers/${job.slug}`}
              className="group relative block overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-xl hover:shadow-navy/10 md:p-8"
            >
              <span
                className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-sky-dark transition-transform duration-300 group-hover:scale-y-100"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                    <span className="rounded-full bg-sky-light px-3 py-1 text-sky-dark">{job.category}</span>
                    <span className="rounded-full bg-mist px-3 py-1 text-body">{job.workplace}</span>
                    <span className="text-body">Posted {formatDate(job.posted)}</span>
                  </div>
                  <h2 className="mt-3 text-xl font-semibold text-ink transition-colors group-hover:text-navy sm:text-2xl">
                    {job.title}
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-[15px] text-body">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" /> {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Wallet className="h-4 w-4" /> {job.compensation} · {job.ote}
                    </span>
                  </div>
                  <p className="mt-4 leading-relaxed text-body">{job.summary}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition group-hover:bg-navy-light md:self-center">
                  Apply Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <div className="mt-4 rounded-2xl border border-dashed border-line p-10 text-center text-body">
          No roles match your search.{" "}
          <button
            className="font-semibold text-navy underline"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
