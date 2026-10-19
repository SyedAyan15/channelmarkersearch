import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, Mark, PageHero, SectionHeading } from "@/components/ui";
import { ApplyForm } from "@/components/forms/ApplyForm";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "For Sales Candidates",
  description:
    "Work with sales recruiters who understand your career. Confidential introductions to account executive, sales engineering, account management and channel roles across the US.",
  alternates: { canonical: "/candidates" },
};

const benefits = [
  { title: "Confidential", body: "Your resume is never shared with an employer without your permission." },
  { title: "Clear compensation", body: "You'll know the base, OTE and commission structure before you interview." },
  { title: "The right fit", body: "We match you on territory, deal size and sales motion, not just job title." },
  { title: "Interview preparation", body: "We brief you on the hiring team, their process and what they look for." },
];

export default function CandidatesPage() {
  return (
    <>
      <PageHero
        label="For candidates"
        title={
          <>
            Find your next <Mark draw>sales role</Mark>
          </>
        }
        intro="We connect sales professionals with leading companies across the US, and only introduce you to roles that fit your goals."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/careers" variant="primary">
            View Open Roles
          </ButtonLink>
          <ButtonLink href="#submit" variant="secondary" arrow={false}>
            Submit Your Resume
          </ButtonLink>
        </div>
      </PageHero>

      <section className="py-20 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-navy/15">
            <Image
              src="/images/sales-professional.jpg"
              alt="Sales professional on a call"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[60%_30%] transition-transform duration-700 group-hover:scale-105"
            />
          </Reveal>
          <div>
            <SectionHeading
              label="Why work with us"
              title="A recruiter who understands sales"
              intro="With more than 15 years in sales recruiting, we know what makes a role worth taking."
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 100} className="border-l-2 border-sky pl-4">
                  <h3 className="font-semibold text-ink">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{b.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="submit" className="scroll-mt-24 bg-mist py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            label="Submit your resume"
            title="Don't see the right role?"
            intro="Many of our searches are confidential and never posted publicly. Send us your details and we'll contact you when a suitable role opens."
          />
          <Reveal delay={150}>
            <ApplyForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
