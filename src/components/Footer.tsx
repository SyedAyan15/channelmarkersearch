import Link from "next/link";
import { Logo } from "./Logo";
import { NewsletterForm } from "./forms/NewsletterForm";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.2fr_1.3fr]">
        <div>
          <Logo light className="h-16 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
            Connecting top sales talent with leading companies. Based in New York, serving clients across the US.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider">Pages</p>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {[{ href: "/", label: "Home" }, ...nav, { href: "/contact", label: "Contact" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>
              <a href={`mailto:${site.email}`} className="whitespace-nowrap hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>{site.location}</li>
            <li>{site.hours}</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider">Newsletter</p>
          <p className="mt-5 text-sm text-white/70">Sales hiring news and salary updates, once a month.</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col justify-between gap-2 py-6 text-sm text-white/50 sm:flex-row">
          <span>
            © {site.copyrightYear} {site.legalName}. All rights reserved.
          </span>
          <span>Hiring the right salespeople to move the needle.</span>
        </div>
      </div>
      <div className="overflow-hidden" aria-hidden="true">
        <p className="-mb-[0.22em] whitespace-nowrap text-center font-[family-name:var(--font-heading)] text-[15.5vw] font-semibold leading-none tracking-tight text-white/[0.07] select-none">
          Channel <em className="italic">Marker</em>
        </p>
      </div>
    </footer>
  );
}
