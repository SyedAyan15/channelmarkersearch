"use client";

import { useSubmit } from "./useSubmit";

export function NewsletterForm() {
  const { status, error, onSubmit } = useSubmit("/api/newsletter");

  if (status === "success") {
    return <p className="mt-4 text-sm text-sky">Thanks for subscribing.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="Enter your email address"
        className="min-w-0 flex-1 rounded-full border border-white/20 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/45 outline-none focus:border-white/60"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition hover:bg-[#f0f0f0] disabled:opacity-60"
      >
        Subscribe
      </button>
      {status === "error" && <p className="text-xs text-red-300">{error}</p>}
    </form>
  );
}
