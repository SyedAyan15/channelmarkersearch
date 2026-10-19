import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ApplyForm } from "@/components/forms/ApplyForm";
import { DarkBanner } from "@/components/ui";
import { formatDate, getJob, jobs } from "@/lib/jobs";
import { site } from "@/lib/site";

// Every slug is prerendered from local data, so this page renders its params directly
// rather than streaming them in behind a Suspense boundary.
export const instant = false;

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: PageProps<"/careers/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  return {
    title: `${job.title}, ${job.location}`,
    description: `${job.summary} ${job.compensation} (${job.ote}).`,
    alternates: { canonical: `/careers/${job.slug}` },
  };
}

export default async function JobPage({ params }: PageProps<"/careers/[slug]">) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `<p>${job.summary}</p><ul>${job.responsibilities.map((r) => `<li>${r}</li>`).join("")}</ul>`,
    datePosted: job.posted,
    employmentType: "FULL_TIME",
    hiringOrganization: { "@type": "Organization", name: site.legalName, sameAs: site.url },
    jobLocationType: job.workplace === "Remote" ? "TELECOMMUTE" : undefined,
    applicantLocationRequirements: { "@type": "Country", name: "USA" },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressRegion: "NY", addressCountry: "US" },
    },
  };

  const facts = [
    ["Employment", job.type],
    ["Location", job.location],
    ["Compensation", job.compensation],
    ["On-target earnings", job.ote],
    ["Posted", formatDate(job.posted)],
  ];

  return (
    <>
      <DarkBanner
        top={
          <Link
            href="/careers"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-sky hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> All open positions
          </Link>
        }
        label={job.category}
        title={job.title}
        intro={`${job.type} · ${job.location} · ${job.ote}`}
      />

      <section className="py-14 md:py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <article>
            <dl className="grid gap-x-8 gap-y-5 border-b border-line pb-8 sm:grid-cols-2">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-sm text-body">{k}</dt>
                  <dd className="mt-1 font-semibold text-ink">{v}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-10 text-2xl font-semibold text-ink">About the role</h2>
            <p className="mt-4 leading-relaxed text-body">{job.summary}</p>

            <h2 className="mt-10 text-2xl font-semibold text-ink">Responsibilities</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-body marker:text-navy">
              {job.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-semibold text-ink">Requirements</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-body marker:text-navy">
              {job.requirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>

            <p className="mt-10 rounded-xl bg-mist p-6 text-sm leading-relaxed text-body">
              Channel Marker is recruiting for this role on behalf of a client. Client details are shared with qualified
              candidates after an initial conversation. Questions? Email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-navy underline">
                {site.email}
              </a>
              .
            </p>
          </article>

          <aside id="apply" className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="mb-4 text-2xl font-semibold text-ink">Apply for this role</h2>
            <ApplyForm position={job.title} />
          </aside>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
