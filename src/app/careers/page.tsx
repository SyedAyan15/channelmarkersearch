import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Mark, PageHero } from "@/components/ui";
import { JobBoard } from "@/components/JobBoard";
import { jobs } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Open Sales Positions",
  description:
    "Open sales jobs from Channel Marker: enterprise account executive, account manager, solutions architect, pre-sales engineer and channel partner manager.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers"
        title={
          <>
            Open <Mark draw>sales positions</Mark>
          </>
        }
        intro="We place top sales talent with leading companies. Explore our current openings below. Our recruiters review every application personally."
      />
      <section className="py-16 md:py-20">
        <div className="container-x">
          <Suspense
            fallback={
              <ul className="space-y-4">
                {jobs.map((job) => (
                  <li key={job.slug} className="rounded-2xl border border-line p-6 md:p-8">
                    <Link href={`/careers/${job.slug}`} className="text-xl font-semibold text-ink">
                      {job.title}
                    </Link>
                    <p className="mt-2 text-body">
                      {job.location} · {job.compensation} · {job.ote}
                    </p>
                  </li>
                ))}
              </ul>
            }
          >
            <JobBoard jobs={jobs} />
          </Suspense>
          <p className="mt-12 text-center text-body">
            Don&apos;t see the right role?{" "}
            <Link href="/candidates#submit" className="font-semibold text-navy underline">
              Submit your resume
            </Link>{" "}
            and we&apos;ll be in touch when a match opens.
          </p>
        </div>
      </section>
    </>
  );
}
