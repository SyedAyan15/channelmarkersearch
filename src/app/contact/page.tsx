import type { Metadata } from "next";
import { Mark, PageHero, TextLink } from "@/components/ui";
import { LocationMap, mapsLink } from "@/components/LocationMap";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Channel Marker | Sales Recruiters Serving the US",
  description: "Reach out to our New York-based sales recruiting agency, proudly serving clients across the US.",
  alternates: { canonical: "/contact" },
};

const details = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone", value: site.phone, href: site.phoneHref },
  { label: "Location", value: `${site.location}. ${site.serviceArea}.` },
  { label: "Hours", value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact us"
        title={
          <>
            Let&apos;s talk about your <Mark draw>next hire</Mark>
          </>
        }
        intro="Reach out to our New York-based recruiting agency, proudly serving clients across the US."
      />
      <section className="py-16 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <dl className="space-y-8">
              {details.map(({ label, value, href }) => (
                <div key={label}>
                  <dt className="font-[family-name:var(--font-heading)] text-lg italic text-sky-dark">{label}</dt>
                  <dd className="mt-1 break-words text-lg text-ink">
                    {href ? (
                      <a href={href} className="link-underline">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <LocationMap className="mt-10 h-72" />
            <div className="mt-4">
              <TextLink href={mapsLink}>Open in Google Maps</TextLink>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
