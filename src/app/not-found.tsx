import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-navy">404</p>
      <h1 className="mt-3 text-4xl font-semibold text-ink sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-body">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Back to Home</ButtonLink>
        <ButtonLink href="/careers" variant="secondary">
          View Open Roles
        </ButtonLink>
      </div>
    </section>
  );
}
