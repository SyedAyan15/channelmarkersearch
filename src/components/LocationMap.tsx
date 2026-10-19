import { site } from "@/lib/site";

const query = encodeURIComponent(site.location);

/** Embedded Google Map of the office location, with a link out to Google Maps. */
export function LocationMap({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-md border border-line bg-mist ${className}`}>
      <iframe
        title={`Map of ${site.location}`}
        src={`https://www.google.com/maps?q=${query}&z=12&output=embed`}
        className="block h-full min-h-[320px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${query}`;
