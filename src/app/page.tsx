import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink, Kicker, SectionHeading, TextLink } from "@/components/ui";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal, RotatingWords } from "@/components/motion";
import { ScrollWords, StickyProcess } from "@/components/showcase";
import { jobs } from "@/lib/jobs";
import { pastPlacements, site } from "@/lib/site";
import { roleProfiles, steps } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Services />
      <PullQuote />
      <RolesIndex />
      <Process />
      <OpenRoles />
      <Candidates />
      <TalkToUs />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[86vh] items-end overflow-hidden bg-navy text-white">
      <Image
        src="/images/sales-professional.jpg"
        alt="A sales professional on a call, smiling"
        fill
        priority
        sizes="100vw"
        className="-z-20 animate-hero-zoom object-cover object-[72%_30%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/75 to-navy/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

      <div className="container-x w-full pb-12 pt-32 md:pb-16">
        <Kicker light>Sales recruitment · New York</Kicker>
        <h1 className="mt-6 max-w-4xl animate-hero-in text-[3.25rem] font-normal leading-[0.98] sm:text-7xl lg:text-[6.5rem]">
          We find the salespeople who <em className="italic text-sky">move the needle.</em>
        </h1>

        <div className="mt-14 grid animate-hero-in gap-8 border-t border-white/20 pt-8 [animation-delay:200ms] md:grid-cols-[1.2fr_1fr_0.8fr] md:gap-12">
          <p className="max-w-md text-lg leading-relaxed text-white/80">
            Account executives, sales engineers, account managers and the leaders who build their teams. Interviewed,
            reference-checked and ready to sell.
          </p>
          <div className="flex flex-wrap items-start gap-x-6 gap-y-4">
            <ButtonLink href="/contact" variant="sky">
              Start a search
            </ButtonLink>
            <span className="pt-3.5">
              <TextLink href="/careers" light>
                Open roles
              </TextLink>
            </span>
          </div>
          <p className="font-[family-name:var(--font-heading)] text-sm italic leading-relaxed text-white/60 md:text-right">
            40.71° N, 74.00° W
            <br />
            Working with clients across the US
          </p>
        </div>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid gap-10 lg:grid-cols-[0.6fr_2fr] lg:gap-16">
        <Reveal>
          <Kicker index="01">Who we are</Kicker>
        </Reveal>
        <div>
          <ScrollWords
            className="font-[family-name:var(--font-heading)] text-3xl leading-[1.3] text-ink sm:text-[2.6rem]"
            text="For more than fifteen years we have helped companies hire the people who carry the number. We are not a volume shop. We take on fewer searches, learn how you sell, and only introduce candidates we would hire ourselves."
          />
          <Reveal className="mt-12 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[15px] text-body">
              Our recruiters have placed sales talent with{" "}
              {pastPlacements.map((name, i) => (
                <span key={name}>
                  <span className="font-[family-name:var(--font-heading)] text-lg text-ink">{name}</span>
                  {i < pastPlacements.length - 2 ? ", " : i === pastPlacements.length - 2 ? " and " : "."}
                </span>
              ))}
            </p>
            <TextLink href="/recruiting-agency">Our story</TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      title: "Sales recruitment",
      body: "Account executives, account managers and SDRs with numbers you can verify.",
      href: "/services",
    },
    {
      title: "Technical sales",
      body: "Sales engineers, pre-sales and solutions architects who can win the room and the demo.",
      href: "/services#roles",
    },
    {
      title: "Leadership search",
      body: "Managers, directors and VPs who will hire, coach and carry a team number.",
      href: "/services",
    },
    {
      title: "Market intelligence",
      body: "Salary and commission benchmarks so your offer lands the first time.",
      href: "/insights#salary-guide",
    },
  ];
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[0.6fr_2fr] lg:gap-16">
          <Reveal>
            <Kicker index="02">What we do</Kicker>
          </Reveal>
          <SectionHeading title={<>Four ways we help you build a sales team.</>} />
        </div>

        <ul className="mt-14 border-t border-ink/15">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 80} className="border-b border-ink/15">
              <Link
                href={item.href}
                className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-8 transition-colors duration-300 hover:bg-cream sm:grid-cols-[5rem_1fr_1.2fr_auto] sm:gap-8 sm:px-4"
              >
                <span className="font-[family-name:var(--font-heading)] text-lg italic text-sky-dark">0{i + 1}</span>
                <h3 className="text-2xl font-normal text-ink transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                  {item.title}
                </h3>
                <p className="col-span-3 col-start-2 row-start-2 text-body sm:col-span-1 sm:col-start-auto sm:row-start-auto">
                  {item.body}
                </p>
                <ArrowUpRight className="h-6 w-6 text-ink/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-navy" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PullQuote() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <Image
        src="/images/city-skyline.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.12] mix-blend-luminosity"
      />
      <Reveal className="container-x relative">
        <span
          className="block font-[family-name:var(--font-heading)] text-8xl leading-none text-sky"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <blockquote className="-mt-6 max-w-4xl font-[family-name:var(--font-heading)] text-3xl leading-[1.3] sm:text-5xl">
          Every candidate is thoroughly screened and vetted, so you meet only sales talent who are the right fit.
        </blockquote>
        <p className="mt-10 font-[family-name:var(--font-heading)] text-lg italic text-white/60">
          The Channel Marker standard
        </p>
      </Reveal>
    </section>
  );
}

function RolesIndex() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[0.6fr_2fr] lg:gap-16">
          <Reveal>
            <Kicker index="03">Roles we recruit</Kicker>
          </Reveal>
          <SectionHeading
            title={
              <>
                We recruit{" "}
                <RotatingWords
                  className="italic text-sky-dark"
                  words={[
                    "account executives.",
                    "sales engineers.",
                    "account managers.",
                    "channel managers.",
                    "sales leaders.",
                  ]}
                />
              </>
            }
            intro="What we look for in each role, and what the market typically pays in major US metros."
          />
        </div>

        <Reveal className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left">
            <thead>
              <tr className="border-b border-ink text-sm text-body">
                <th scope="col" className="pb-4 font-medium">
                  Role
                </th>
                <th scope="col" className="pb-4 font-medium">
                  What we check first
                </th>
                <th scope="col" className="pb-4 text-right font-medium">
                  Typical OTE
                </th>
                <th scope="col" className="w-12 pb-4">
                  <span className="sr-only">Link</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {roleProfiles.map((r) => (
                <tr key={r.id} className="group border-b border-line transition-colors duration-300 hover:bg-white">
                  <th scope="row" className="py-6 pr-6 font-normal">
                    <Link
                      href={`/careers?category=${r.careersFilter}`}
                      className="font-[family-name:var(--font-heading)] text-2xl text-ink transition-colors group-hover:text-navy"
                    >
                      {r.title}
                    </Link>
                  </th>
                  <td className="py-6 pr-6 text-body">{r.screenFor[0]}</td>
                  <td className="py-6 text-right font-medium tabular-nums text-ink">{r.ote}</td>
                  <td className="py-6 text-right">
                    <ArrowRight className="ml-auto h-5 w-5 text-ink/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-navy" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="mt-6 text-sm text-body">
          Ranges are indicative.{" "}
          <Link href="/insights#salary-guide" className="text-navy underline underline-offset-4">
            See the full salary guide
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="border-t border-line bg-white py-24 md:py-32">
      <div className="container-x">
        <StickyProcess
          steps={steps}
          heading={
            <SectionHeading
              label="How we work"
              index="04"
              title="From open role to signed offer."
              intro="One recruiter, four clear steps, and an update from us every week until the seat is filled."
            />
          }
        />
      </div>
    </section>
  );
}

function OpenRoles() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 border-b border-ink pb-8 md:flex-row md:items-end">
          <SectionHeading label="Open positions" index="05" title="Currently hiring." />
          <Reveal>
            <TextLink href="/careers">All {jobs.length} roles</TextLink>
          </Reveal>
        </div>
        <ul>
          {jobs.slice(0, 4).map((job, i) => (
            <Reveal as="li" key={job.slug} delay={i * 70} className="border-b border-line">
              <Link
                href={`/careers/${job.slug}`}
                className="group grid gap-2 py-7 sm:grid-cols-[1.4fr_1fr_auto_auto] sm:items-center sm:gap-8"
              >
                <h3 className="text-2xl font-normal text-ink transition-colors group-hover:text-navy">{job.title}</h3>
                <p className="text-body">{job.location}</p>
                <p className="font-medium tabular-nums text-ink">{job.ote}</p>
                <ArrowUpRight className="hidden h-5 w-5 text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy sm:block" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Candidates() {
  return (
    <section className="bg-mist py-24 md:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal className="relative aspect-[5/4] overflow-hidden rounded-sm lg:aspect-[4/5]">
          <Image
            src="/images/city-skyline.jpg"
            alt="Office towers at dusk"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div>
          <SectionHeading
            label="For salespeople"
            index="06"
            title={
              <>
                Not every good role <em className="italic">gets advertised.</em>
              </>
            }
            intro="Many of our searches are confidential. Send us your background once and we'll call when something fits your territory, your deal size and your earning goals. Your details never go to an employer without your say-so."
          />
          <Reveal className="mt-10 flex flex-wrap items-center gap-6">
            <ButtonLink href="/candidates#submit">Send your resume</ButtonLink>
            <TextLink href="/candidates">How we work with candidates</TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TalkToUs() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            label="Get in touch"
            index="07"
            title={
              <>
                Talk to a recruiter, <em className="italic">not a ticket queue.</em>
              </>
            }
            intro="Every search starts with a conversation. Email or call Mike directly, or leave a note here and we'll come back to you within one business day."
          />
          <Reveal className="mt-10 divide-y divide-line border-y border-line">
            {[
              { label: "Email", value: site.email, href: `mailto:${site.email}` },
              { label: "Phone", value: site.phone, href: site.phoneHref },
              { label: "Hours", value: site.hours },
            ].map((d) => (
              <div key={d.label} className="flex items-baseline justify-between gap-6 py-5">
                <span className="font-[family-name:var(--font-heading)] italic text-body">{d.label}</span>
                {d.href ? (
                  <a href={d.href} className="link-underline text-right text-lg text-ink">
                    {d.value}
                  </a>
                ) : (
                  <span className="text-right text-lg text-ink">{d.value}</span>
                )}
              </div>
            ))}
          </Reveal>
        </div>
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
