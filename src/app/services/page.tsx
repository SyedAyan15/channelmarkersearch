import type { Metadata } from "next";
import { ButtonLink, CtaBand, Mark, PageHero, SectionHeading } from "@/components/ui";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/motion";
import { StickyProcess } from "@/components/showcase";
import { roles, steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sales Recruiting Services",
  description:
    "Sales recruiting for account executives, account managers, sales engineers, channel managers and sales leaders across the US.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Sales Recruitment",
    body: "We find, screen and present proven sales professionals for individual contributor roles, from SDRs to enterprise account executives.",
  },
  {
    title: "Leadership Search",
    body: "Dedicated searches for sales managers, directors and VPs who will build, coach and lead your revenue team.",
  },
  {
    title: "Technical Sales Hiring",
    body: "Sales engineers, pre-sales and solutions architects who can run the demo, scope the solution and help close complex deals.",
  },
  {
    title: "Market Intelligence",
    body: "Salary benchmarks and compensation guidance so your offers are competitive in your market.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title={
          <>
            Sales recruiting that <Mark draw>moves the needle</Mark>
          </>
        }
        intro="We help companies build high-performing sales teams that hit quota and drive revenue, from high-growth startups to established enterprises."
      >
        <div className="mt-8">
          <ButtonLink href="/contact" variant="sky">
            Request Sales Talent
          </ButtonLink>
        </div>
      </PageHero>

      <section className="py-20 md:py-24">
        <div className="container-x">
          <SectionHeading label="What we offer" title="Services built around sales hiring" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal
                key={s.title}
                delay={(i % 2) * 120}
                className="h-full rounded-2xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-xl hover:shadow-navy/10"
              >
                <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-body">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="roles" className="scroll-mt-24 bg-mist py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading
            label="Roles we fill"
            title="Every role in the sales team"
            intro="We focus only on sales and revenue roles, so we know what a strong candidate looks like for each one."
          />
          <div className="grid gap-x-10 sm:grid-cols-2">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 100} className="group border-b border-line py-5">
                <p className="font-semibold text-ink transition-colors group-hover:text-navy">{r.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-body">{r.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 py-20 md:py-24">
        <div className="container-x">
          <StickyProcess
            steps={steps}
            heading={
              <SectionHeading
                label="Our process"
                title={
                  <>
                    How a search <Mark>works</Mark>
                  </>
                }
                intro="One recruiter, four clear steps, and regular updates from first call to signed offer."
              />
            }
          />
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 bg-mist py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading label="FAQ" title="Frequently asked questions" />
          <Faq />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
