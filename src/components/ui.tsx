import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./motion";

/** Small italic serif label with an optional section number, e.g. "01  What we do". */
export function Kicker({ children, index, light = false }: { children: ReactNode; index?: string; light?: boolean }) {
  return (
    <p
      className={`flex items-baseline gap-3 font-[family-name:var(--font-heading)] text-lg italic ${
        light ? "text-sky" : "text-sky-dark"
      }`}
    >
      {index && <span className="not-italic tabular-nums">{index}</span>}
      <span>{children}</span>
    </p>
  );
}

export function SectionHeading({
  label,
  index,
  title,
  intro,
  light = false,
  center = false,
}: {
  label?: string;
  index?: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center [&>p:first-child]:justify-center" : ""}`}>
      {label && (
        <Kicker index={index} light={light}>
          {label}
        </Kicker>
      )}
      <h2
        className={`mt-4 text-4xl font-normal leading-[1.1] text-balance sm:text-5xl ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-white/75" : "text-body"}`}>{intro}</p>}
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
    primary: "bg-navy text-white hover:bg-navy-light",
    secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
    light: "bg-white text-navy hover:bg-cream",
    "outline-light": "border border-white/40 text-white hover:border-white hover:bg-white hover:text-navy",
    sky: "bg-sky text-navy hover:bg-white",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-md px-6 py-3.5 text-[15px] font-medium transition-colors duration-300 ${styles}`}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}

/** Understated text link with an animated underline. */
export function TextLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-[15px] font-medium ${light ? "text-white" : "text-navy"}`}
    >
      <span className="link-underline pb-0.5">{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

/**
 * Editorial page banner: title on the left, introduction on the right,
 * framed by thin rules like the masthead of a printed page.
 */
export function PageBanner({
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
    <section className="border-b border-line bg-cream">
      <div className="container-x pb-14 pt-12 md:pb-20 md:pt-16">
        {top}
        {label && (
          <div className="animate-hero-in border-b border-ink/15 pb-4">
            <Kicker>{label}</Kicker>
          </div>
        )}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
          <h1 className="animate-hero-in text-5xl font-normal leading-[1.03] text-balance text-ink [animation-delay:60ms] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {(intro || children) && (
            <div className="animate-hero-in [animation-delay:160ms] lg:pb-2">
              {intro && <div className="text-lg leading-relaxed text-body">{intro}</div>}
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function PageHero(props: { label?: string; title: ReactNode; intro?: ReactNode; children?: ReactNode }) {
  return <PageBanner {...props} />;
}

/** Quiet emphasis: an italic phrase in the heading face, no highlight. */
export function Mark({ children }: { children: ReactNode; draw?: boolean; delay?: number }) {
  return <em className="italic">{children}</em>;
}

export function CtaBand({
  title = (
    <>
      Every search starts with <em className="italic text-sky">a conversation.</em>
    </>
  ),
  intro = "Tell us about the role. A recruiter will come back to you within one business day.",
}: {
  title?: ReactNode;
  intro?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <Reveal className="container-x grid gap-10 py-20 md:py-24 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <h2 className="text-4xl font-normal leading-[1.1] sm:text-5xl lg:text-6xl">{title}</h2>
        <div>
          <p className="text-lg leading-relaxed text-white/75">{intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <ButtonLink href="/contact" variant="sky">
              Start a search
            </ButtonLink>
            <TextLink href="/careers" light>
              Looking for a role?
            </TextLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
