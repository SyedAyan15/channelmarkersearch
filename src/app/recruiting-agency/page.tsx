import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, Mark, PageHero, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { pastPlacements, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Channel Marker | NYC Recruiters Serving the US",
  description:
    "Channel Marker brings 15+ years of sales recruiting experience, placing top-performing sales talent with industry leaders like Cisco, Honeywell and HPE.",
  alternates: { canonical: "/recruiting-agency" },
};

const values = [
  { title: "Quality over volume", body: "Every candidate is thoroughly screened and vetted before you meet them." },
  { title: "Partnership", body: "We learn your product, your sales process and your culture." },
  { title: "Long-term fit", body: "We measure success by how well our placements perform and how long they stay." },
  { title: "Straight answers", body: "Honest advice on the market, compensation and fit, for clients and candidates." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Channel Marker"
        title={
          <>
            Your partner in <Mark draw>sales recruitment</Mark>
          </>
        }
        intro="A New York-based recruiting agency connecting sales professionals with leading companies across the US."
      />

      <section className="py-20 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading label="Who we are" title="15 years of proven results" />
            <Reveal delay={100}>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-body">
                <p>
                  Channel Marker brings more than 15 years of sales recruiting experience, having placed top-performing
                  sales talent with industry leaders like {pastPlacements[0]}, {pastPlacements[1]} and{" "}
                  {pastPlacements[2]}.
                </p>
                <p>
                  We&apos;re not a high-volume staffing agency. Every candidate is thoroughly screened and vetted, so
                  you meet only sales talent who are the right fit.
                </p>
                <p>
                  We connect sales professionals with leading companies across the US, ensuring the right match for
                  success in a competitive market.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal
            delay={150}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-navy/15"
          >
            <Image
              src="/images/city-skyline.jpg"
              alt="Office towers at dusk"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            center
            label="Our values"
            title={
              <>
                How we <Mark>work</Mark>
              </>
            }
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 100}
                className="h-full rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-xl hover:shadow-navy/10"
              >
                <span className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-sky-dark">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-xl text-ink">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-body">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">Our location</h3>
            <p className="mt-3 leading-relaxed text-body">
              Located in New York, we recruit top sales professionals for a range of industries across the US.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">Hours</h3>
            <p className="mt-3 leading-relaxed text-body">{site.hours}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">Contact</h3>
            <p className="mt-3 leading-relaxed text-body">
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
              <br />
              <a href={site.phoneHref} className="hover:underline">
                {site.phone}
              </a>
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
