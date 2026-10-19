"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Infinite horizontal ticker. Pauses on hover. */
export function Marquee({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`group flex overflow-hidden ${className}`}>
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]"
        >
          {children}
        </div>
      ))}
    </div>
  );
}

/**
 * Large statement whose words brighten as it scrolls through the viewport.
 * Wrap a word in *asterisks* to set it in italic sky blue.
 */
export function ScrollWords({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const distance = r.height + vh * 0.35;
      setProgress(Math.max(0, Math.min(1, (start - r.top) / distance)));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((raw, i) => {
        const em = raw.startsWith("*");
        const word = raw.replace(/\*/g, "");
        const lit = i / words.length < progress;
        return (
          <span
            key={i}
            className={`transition-opacity duration-300 ${em ? "italic text-sky-dark" : ""}`}
            style={{ opacity: lit ? 1 : 0.16 }}
          >
            {word}{" "}
          </span>
        );
      })}
    </p>
  );
}

type Step = { title: string; time: string; body: string };

/** Process with a sticky counter on the left and steps that activate as they cross the middle of the screen. */
export function StickyProcess({ steps, heading }: { steps: Step[]; heading: ReactNode }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div className="lg:sticky lg:top-32 lg:self-start">
        {heading}
        <div className="mt-10 hidden lg:block">
          <p className="font-[family-name:var(--font-heading)] text-[7rem] font-semibold leading-none text-navy">
            <span key={active} className="inline-block animate-hero-in">
              0{active + 1}
            </span>
            <span className="text-4xl text-body/40"> / 0{steps.length}</span>
          </p>
          <div className="mt-6 h-1 w-full max-w-sm overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full bg-sky-dark transition-[width] duration-500 ease-out"
              style={{ width: `${((active + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <ol className="space-y-6">
        {steps.map((s, i) => {
          const on = i === active;
          return (
            <li
              key={s.title}
              ref={(el) => {
                refs.current[i] = el;
              }}
              data-index={i}
              className={`rounded-2xl border p-8 transition-all duration-500 sm:p-10 ${
                on
                  ? "border-navy bg-navy text-white shadow-2xl shadow-navy/25 lg:scale-[1.02]"
                  : "border-line bg-white text-ink"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className={`text-sm font-semibold ${on ? "text-sky" : "text-sky-dark"}`}>Step {i + 1}</span>
                <span className={`text-sm ${on ? "text-white/70" : "text-body"}`}>{s.time}</span>
              </div>
              <h3 className="mt-4 text-3xl sm:text-4xl">{s.title}</h3>
              <p className={`mt-4 text-lg leading-relaxed ${on ? "text-white/80" : "text-body"}`}>{s.body}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
