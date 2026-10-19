import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false, className = "h-12 w-auto" }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="Channel Marker home" className="inline-flex shrink-0">
      <Image
        src={light ? "/images/channel-marker-logo-white.png" : "/images/channel-marker-logo.png"}
        alt="Channel Marker"
        width={314}
        height={242}
        priority
        className={className}
      />
    </Link>
  );
}
