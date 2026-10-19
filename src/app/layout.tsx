import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sales Recruiting Agency | NYC-Based, Serving the US | Channel Marker",
    template: "%s | Channel Marker",
  },
  description: site.description,
  keywords: [
    "sales recruiting agency",
    "sales recruiters New York",
    "NYC sales recruiters",
    "account executive recruiter",
    "sales engineer recruiter",
    "channel sales recruiting",
  ],
  openGraph: {
    type: "website",
    siteName: site.legalName,
    title: "Channel Marker | Sales Recruiting Agency",
    description: site.description,
    url: site.url,
    locale: "en_US",
    images: ["/images/channel-marker-logo.png"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f7f3ec",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: site.legalName,
  url: site.url,
  logo: `${site.url}/images/channel-marker-logo.png`,
  email: site.email,
  telephone: "+1-631-256-7151",
  description: site.description,
  address: { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY", addressCountry: "US" },
  areaServed: { "@type": "Country", name: "United States" },
  openingHours: "Mo-Fr 09:00-17:00",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${inter.variable} h-full`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JavaScript is running */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-black px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
