import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand, Mark, PageHero, SectionHeading } from "@/components/ui";
import { articles, benchmarks } from "@/lib/insights";
import { formatDate } from "@/lib/jobs";
import { Reveal } from "@/components/motion";
import { CommissionCalculator } from "@/components/CommissionCalculator";

export const metadata: Metadata = {
  title: "Industry Insights & Salary Guide",
  description: "Sales salary benchmarks, OTE ranges and hiring advice from Channel Marker's New York sales recruiters.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        label="Industry insights"
        title={
          <>
            Market intelligence for <Mark draw>smarter hiring</Mark>
          </>
        }
        intro="Market intelligence and salary benchmarks to help you hire competitively, whether you're in NYC or anywhere in the US."
      />

      <section id="salary-guide" className="scroll-mt-24 py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            label="Salary guide"
            title="Sales compensation benchmarks"
            intro="Typical US ranges for major metro areas. Actual offers vary by industry, deal size, territory and experience."
          />
          <Reveal delay={100} className="mt-10 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] text-left text-[15px]">
              <thead className="bg-navy text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Base salary
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    On-target earnings
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Base / variable
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {benchmarks.map((b) => (
                  <tr key={b.role} className="transition-colors hover:bg-sky-light/50">
                    <th scope="row" className="px-6 py-4 font-semibold text-ink">
                      {b.role}
                    </th>
                    <td className="px-6 py-4 text-body">{b.base}</td>
                    <td className="px-6 py-4 font-medium text-ink">{b.ote}</td>
                    <td className="px-6 py-4 text-body">{b.split}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className="mt-4 text-sm text-body">
            Need figures for a specific role or location?{" "}
            <Link href="/contact" className="font-semibold text-navy underline">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="calculator" className="scroll-mt-24 bg-mist py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            label="Commission calculator"
            title="What could this comp plan pay?"
            intro="Move the sliders to see how base, variable pay, quota attainment and accelerators add up."
          />
          <Reveal delay={100} className="mt-10">
            <CommissionCalculator />
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x">
          <SectionHeading label="Articles" title="Sales hiring advice" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 120}>
                <Link
                  href={`/insights/${a.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-xl hover:shadow-navy/10"
                >
                  <p className="text-sm font-medium text-navy">{a.category}</p>
                  <h3 className="mt-3 text-xl font-semibold leading-snug text-ink">{a.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-body">{a.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-navy">
                    Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                  <span className="mt-2 text-xs text-body">
                    {formatDate(a.date)} · {a.readTime}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
