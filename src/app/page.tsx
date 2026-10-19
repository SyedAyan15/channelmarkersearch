import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink, Mark, SectionHeading } from "@/components/ui";
import { ContactForm } from "@/components/forms/ContactForm";
import { CountUp, Reveal, RotatingWords } from "@/components/motion";
import { RoleExplorer } from "@/components/RoleExplorer";
import { Marquee, ScrollWords, StickyProcess } from "@/components/showcase";
import { Chevrons } from "@/components/bento";
import { jobs } from "@/lib/jobs";
import { pastPlacements, site } from "@/lib/site";
import { roleProfiles, steps } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Manifesto />
      <Services />
      <RoleTicker />
      <About />
      <Roles />
      <Process />
      <OpenRoles />
      <CandidateBand />
      <ContactSection />
    </>
  );
}

function Hero() {
  const stats = [
    { value: <CountUp to={15} suffix="+" />, label: "Years recruiting sales talent" },
    { value: <CountUp to={100} suffix="%" />, label: "Candidates interviewed and reference-checked" },
    { value: "Nationwide", label: "Searches from our New York base" },
  ];
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <Image
        src="/images/city-skyline.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 animate-hero-zoom object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/70 via-navy/85 to-navy" />
      <div
        className="absolute -right-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-sky/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x pb-16 pt-20 md:pt-28">
        <div className="max-w-5xl">
          <p className="animate-hero-in text-xs font-semibold uppercase tracking-[0.2em] text-sky">
            Sales recruitment experts · New York · Serving the US
          </p>
          <h1 className="mt-7 animate-hero-in text-[3.1rem] leading-[1.02] [animation-delay:80ms] sm:text-7xl lg:text-[6rem]">
            Connecting <em className="hl-block">top sales talent</em> with opportunity.
          </h1>
          <p className="mt-8 animate-hero-in text-xl text-white [animation-delay:200ms] sm:text-2xl">
            We recruit{" "}
            <RotatingWords
              className="text-sky"
              words={["Account Executives", "Sales Engineers", "Account Managers", "Channel Managers", "Sales Leaders"]}
            />
          </p>
          <p className="mt-4 max-w-2xl animate-hero-in text-lg leading-relaxed text-white/75 [animation-delay:280ms]">
            Your trusted partner in recruiting top sales professionals. We help companies across the US build sales
            teams that hit quota and drive revenue.
          </p>
          <div className="mt-10 flex animate-hero-in flex-wrap gap-3 [animation-delay:360ms]">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-sky px-7 py-4 text-[15px] font-semibold text-navy transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Request Sales Talent
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <ButtonLink href="/careers" variant="outline-light" arrow={false}>
              View Open Roles
            </ButtonLink>
          </div>
        </div>

        <dl className="mt-20 grid animate-hero-in gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 [animation-delay:460ms] sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-navy/80 p-7 backdrop-blur">
              <dd className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-sky sm:text-5xl">
                {s.value}
              </dd>
              <dt className="mt-2 text-sm text-white/70">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="border-b border-line bg-white">
      <Reveal className="container-x flex flex-col items-center gap-5 py-9 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-body">
          Our recruiters have placed sales talent with
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-3">
          {pastPlacements.map((name) => (
            <li
              key={name}
              className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-navy/60 transition-colors hover:text-navy"
            >
              {name}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

function RoleTicker() {
  const roles = [
    "Account Executives",
    "Sales Engineers",
    "Account Managers",
    "Solutions Architects",
    "Channel Partner Managers",
    "SDRs & BDRs",
    "Sales Leaders",
    "Customer Success",
  ];
  return (
    <section className="bg-sky py-6 text-navy" aria-label="Roles we recruit">
      <Marquee>
        {roles.map((r) => (
          <span key={r} className="flex items-center gap-10 pr-10">
            <span className="whitespace-nowrap font-[family-name:var(--font-heading)] text-3xl italic sm:text-4xl">
              {r}
            </span>
            <Chevrons className="h-6 w-6" color="#0b2a44" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-dark">Why Channel Marker</p>
        <ScrollWords
          className="mt-6 max-w-5xl font-[family-name:var(--font-heading)] text-3xl font-medium leading-[1.25] text-ink sm:text-5xl"
          text="We're not a high-volume staffing agency. Every candidate is interviewed, reference-checked and screened against your targets, so you only meet sales talent *worth* *your* *time.*"
        />
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    {
      title: "Recruiting Excellence",
      body: "From high-growth startups to established enterprises, we fill critical sales roles with people who ramp quickly and deliver measurable revenue.",
      href: "/services",
      link: "Our services",
      tone: "bg-navy text-white",
      muted: "text-white/75",
      accent: "text-sky",
    },
    {
      title: "Talent Acquisition",
      body: "Every candidate we present is interviewed, reference-checked and screened against your role's specific targets.",
      href: "/services#process",
      link: "How we vet",
      tone: "bg-sky-dark text-white",
      muted: "text-white/85",
      accent: "text-white",
    },
    {
      title: "Client Partnerships",
      body: "We learn your product, your sales process and your culture, so the people we place fit from day one and stay.",
      href: "/recruiting-agency",
      link: "About us",
      tone: "bg-sky text-navy",
      muted: "text-navy/80",
      accent: "text-navy",
    },
  ];
  return (
    <section className="pb-24 md:pb-32">
      <div className="container-x">
        <SectionHeading
          label="What we do"
          title={
            <>
              Sales recruitment <Mark>excellence</Mark> across the US
            </>
          }
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <Link
                href={c.href}
                className={`group flex h-full min-h-[22rem] flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/25 sm:p-10 ${c.tone}`}
              >
                <span
                  className={`font-[family-name:var(--font-heading)] text-6xl font-semibold ${c.accent} opacity-60`}
                >
                  0{i + 1}
                </span>
                <h3 className="mt-auto pt-10 text-3xl">{c.title}</h3>
                <p className={`mt-4 leading-relaxed ${c.muted}`}>{c.body}</p>
                <span className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold ${c.accent}`}>
                  {c.link}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    "Placements with Cisco, Honeywell and HPE",
    "Every candidate screened and vetted",
    "Searches for companies across the US",
  ];
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="group relative">
          <div className="absolute -bottom-5 -left-5 h-full w-full rounded-3xl bg-sky" aria-hidden="true" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/city-skyline.jpg"
              alt="Office towers at dusk"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </Reveal>
        <div>
          <SectionHeading
            label="About Channel Marker"
            title={
              <>
                15 years of <Mark>proven results</Mark>
              </>
            }
            intro="Channel Marker brings more than 15 years of sales recruiting experience. We're not a high-volume staffing agency: we connect sales professionals with leading companies across the US, and only introduce people who are the right fit."
          />
          <ul className="mt-8 space-y-4">
            {points.map((p, i) => (
              <Reveal as="li" key={p} delay={100 + i * 100} className="flex items-center gap-4 text-lg text-ink">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-sky">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                {p}
              </Reveal>
            ))}
          </ul>
          <Reveal delay={400} className="mt-10">
            <ButtonLink href="/recruiting-agency">More About Us</ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Roles() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          label="Roles we recruit"
          title={
            <>
              Specialists in every <Mark>sales seat</Mark>
            </>
          }
          intro="Choose a role to see what we screen for and what the market typically pays."
        />
        <Reveal delay={150} className="mt-12">
          <RoleExplorer roles={roleProfiles} />
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <StickyProcess
          steps={steps}
          heading={
            <SectionHeading
              label="Our process"
              title={
                <>
                  From open role to <Mark>signed offer</Mark>
                </>
              }
              intro="A clear, focused search with one recruiter as your point of contact from first call to first day."
            />
          }
        />
      </div>
    </section>
  );
}

function OpenRoles() {
  return (
    <section className="bg-sky-light py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            label="Careers"
            title={
              <>
                Open <Mark>sales positions</Mark>
              </>
            }
          />
          <Reveal>
            <ButtonLink href="/careers" variant="secondary">
              View All Roles
            </ButtonLink>
          </Reveal>
        </div>
        <ul className="mt-10 overflow-hidden rounded-2xl border border-line bg-white">
          {jobs.slice(0, 4).map((job, i) => (
            <Reveal as="li" key={job.slug} delay={i * 80} className="border-b border-line last:border-0">
              <Link
                href={`/careers/${job.slug}`}
                className="group flex flex-col gap-2 p-6 transition-colors duration-300 hover:bg-sky-light/50 md:flex-row md:items-center md:justify-between md:px-8"
              >
                <div>
                  <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-navy">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-[15px] text-body">
                    {job.type} · {job.location}
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-[15px] font-semibold text-navy">{job.ote}</span>
                  <span className="hidden h-10 w-10 place-items-center rounded-full border border-line text-navy transition-all duration-300 group-hover:border-navy group-hover:bg-navy group-hover:text-white md:grid">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CandidateBand() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="grid overflow-hidden rounded-3xl bg-navy text-white lg:grid-cols-2">
          <Reveal className="group relative min-h-[320px] overflow-hidden">
            <Image
              src="/images/sales-professional.jpg"
              alt="Sales professional on a call"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[60%_30%] transition-transform duration-1000 group-hover:scale-105"
            />
          </Reveal>
          <Reveal delay={150} className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky">For candidates</p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Your next sales role, <em className="italic text-sky">found for you.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Confidential introductions to roles that match your territory, deal size and earning goals. Many of our
              searches are never advertised.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/candidates#submit" variant="light">
                Submit Your Resume
              </ButtonLink>
              <ButtonLink href="/careers" variant="outline-light" arrow={false}>
                Browse Roles
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const details = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
    { icon: MapPin, label: "Office", value: `${site.location} · ${site.hours}` },
  ];
  return (
    <section id="contact" className="bg-mist py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading
            label="Contact us"
            title={
              <>
                Get in touch with our <Mark>recruiting experts</Mark>
              </>
            }
            intro="Tell us about the role you need to fill, or ask us anything about sales hiring."
          />
          <ul className="mt-10 space-y-4">
            {details.map(({ icon: Icon, label, value, href }, i) => {
              const inner = (
                <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-light text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-body">{label}</span>
                    <span className="block break-words font-semibold text-ink">{value}</span>
                  </span>
                </>
              );
              return (
                <Reveal as="li" key={label} delay={i * 100}>
                  {href ? (
                    <a href={href} className="group flex items-center gap-4">
                      {inner}
                    </a>
                  ) : (
                    <div className="group flex items-center gap-4">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </ul>
        </div>
        <Reveal delay={150}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
