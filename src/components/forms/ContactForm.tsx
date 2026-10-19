"use client";

import { Loader2 } from "lucide-react";
import { errorClass, inputClass, labelClass, submitClass, useSubmit } from "./useSubmit";

export function ContactForm() {
  const { status, error, onSubmit, reset } = useSubmit("/api/contact");

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-white p-10 text-center">
        <h3 className="text-2xl font-semibold text-ink">Thank you</h3>
        <p className="mt-3 text-body">Your message has been sent. One of our recruiters will be in touch shortly.</p>
        <button onClick={reset} className="mt-6 text-sm font-semibold text-navy underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input id="name" name="name" autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email address *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input id="company" name="company" autoComplete="organization" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="type" className={labelClass}>
            I&apos;m interested in
          </label>
          <select id="type" name="type" className={inputClass} defaultValue="Hiring sales talent">
            <option>Hiring sales talent</option>
            <option>Finding a sales role</option>
            <option>Salary benchmarks</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Your message *
          </label>
          <textarea id="message" name="message" required rows={5} className={inputClass} />
        </div>
      </div>

      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {status === "error" && (
        <p className={errorClass} role="alert">
          {error}
        </p>
      )}

      <button type="submit" disabled={status === "loading"} className={submitClass}>
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        Send Message
      </button>
    </form>
  );
}
