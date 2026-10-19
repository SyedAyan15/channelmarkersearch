import type { Metadata } from "next";
import { Mark, PageHero } from "@/components/ui";
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
          <dl className="space-y-8">
            {details.map(({ label, value, href }) => (
              <div key={label}>
                <dt className="text-sm font-semibold uppercase tracking-wider text-navy">{label}</dt>
                <dd className="mt-2 break-words text-lg text-ink">
                  {href ? (
                    <a href={href} className="hover:underline">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
