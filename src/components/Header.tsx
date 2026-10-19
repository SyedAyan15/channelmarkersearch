"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-cream/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "border-line shadow-[0_6px_24px_-12px_rgb(11_42_68/0.25)]" : "border-transparent"
      }`}
    >
      <div
        className={`container-x flex items-center justify-between transition-[height] duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Logo className={`w-auto transition-[height] duration-300 ${scrolled ? "h-11" : "h-14"}`} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`link-underline pb-1 text-[15px] font-medium transition-colors ${
                  active ? "text-navy" : "text-ink/75 hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="group hidden items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-navy-light lg:inline-flex"
        >
          Contact Us
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full transition hover:bg-mist lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-cream transition-all duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col py-4" aria-label="Mobile">
          {[{ href: "/", label: "Home" }, ...nav, { href: "/contact", label: "Contact" }].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={`flex items-center justify-between border-b border-line py-4 text-lg font-medium text-ink transition-all duration-300 ${
                open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
              }`}
            >
              {item.label}
              <ArrowRight className="h-4 w-4 text-navy" />
            </Link>
          ))}
          <a href={site.phoneHref} tabIndex={open ? 0 : -1} className="mt-8 text-center font-medium text-navy">
            Call {site.phone}
          </a>
          <Link
            href="/contact"
            tabIndex={open ? 0 : -1}
            className="mt-4 rounded-md bg-navy px-6 py-4 text-center font-medium text-white"
          >
            Request Sales Talent
          </Link>
        </nav>
      </div>
    </header>
  );
}
