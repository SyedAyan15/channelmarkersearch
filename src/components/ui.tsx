import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./motion";

export function SectionHeading({
  label,
  title,
  intro,
  light = false,
  center = false,
}: {
  label?: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {label && (
        <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${light ? "text-sky" : "text-sky-dark"}`}>
          {label}
        </p>
      )}
      <h2 className={`mt-4 text-4xl leading-[1.08] text-balance sm:text-5xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-white/80" : "text-body"}`}>{intro}</p>}
    </Reveal>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "outline-light" | "sky";
  arrow?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", arrow = true }: ButtonProps) {
  const styles = {
    primary: "bg-navy text-white shadow-lg shadow-navy/15 hover:bg-navy-light hover:shadow-navy/25",
    secondary: "border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-white",
    light: "bg-white text-navy hover:bg-sky-light",
    "outline-light": "border border-white/40 text-white hover:border-white hover:bg-white/10",
    sky: "bg-sky text-navy hover:bg-white",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition duration-300 hover:-translate-y-0.5 ${styles}`}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}

/** Inner-page banner: navy with the skyline photo, matching the home hero. */
export function PageHero({
  label,
  title,
  intro,
  children,
}: {
  label?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <DarkBanner label={label} title={title} intro={intro}>
      {children}
    </DarkBanner>
  );
}

/** Shared navy banner used by PageHero and the job / article detail pages. */
export function DarkBanner({
  label,
  title,
  intro,
  children,
  top,
}: {
  label?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  top?: ReactNode;
}) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy text-white">
      <Image
        src="/images/city-skyline.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 animate-hero-zoom object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
      <div className="container-x py-16 md:py-24">
        {top}
        <div className="max-w-4xl">
          {label && (
            <p className="animate-hero-in text-xs font-semibold uppercase tracking-[0.2em] text-sky">{label}</p>
          )}
          <h1 className="mt-5 animate-hero-in text-5xl leading-[1.04] text-balance [animation-delay:60ms] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {intro && (
            <div className="mt-6 max-w-2xl animate-hero-in text-lg leading-relaxed text-white/75 [animation-delay:160ms] sm:text-xl">
              {intro}
            </div>
          )}
          {children && <div className="animate-hero-in [animation-delay:260ms]">{children}</div>}
        </div>
      </div>
    </section>
  );
}

/** Italic, highlighter-marked emphasis. `draw` animates the marker on page load. */
export function Mark({ children, draw = false, delay = 400 }: { children: ReactNode; draw?: boolean; delay?: number }) {
  return (
    <em
      className={`hl ${draw ? "hl-draw" : ""}`}
      style={draw ? ({ "--mark-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </em>
  );
}

export function CtaBand({
  title = (
    <>
      Ready to hire <em className="font-semibold text-sky italic">top sales talent?</em>
    </>
  ),
  intro = "Tell us about the role and one of our recruiters will be in touch.",
}: {
  title?: ReactNode;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-24">
      <div
        className="absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full border-[56px] border-white/[0.04]"
        aria-hidden="true"
      />
      <Reveal className="container-x relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="text-4xl leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-white/80">{intro}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact" variant="light">
            Request Sales Talent
          </ButtonLink>
          <ButtonLink href="/careers" variant="outline-light" arrow={false}>
            View Open Roles
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
