"use client";

import { useState } from "react";
import { Loader2, Upload } from "lucide-react";
import { errorClass, inputClass, labelClass, submitClass, useSubmit } from "./useSubmit";

export function ApplyForm({ position }: { position?: string }) {
  const { status, error, onSubmit, reset } = useSubmit("/api/apply");
  const [fileName, setFileName] = useState("");

  if (status === "success") {
    return (
      <div className="rounded-md border border-line bg-white p-10 text-center">
        <h3 className="text-2xl font-semibold text-ink">Application received</h3>
        <p className="mt-3 text-body">
          Thank you for applying. Our recruiters review every application personally and will contact you if
          there&apos;s a fit.
        </p>
        <button
          onClick={() => {
            setFileName("");
            reset();
          }}
          className="mt-6 text-sm font-semibold text-navy underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-md border border-line bg-white p-6 sm:p-8">
      <input type="hidden" name="position" value={position ?? "General application"} />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ap-name" className={labelClass}>
            Full name *
          </label>
          <input id="ap-name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="ap-email" className={labelClass}>
            Email address *
          </label>
          <input id="ap-email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="ap-phone" className={labelClass}>
            Phone
          </label>
          <input id="ap-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="ap-location" className={labelClass}>
            Location
          </label>
          <input id="ap-location" name="location" className={inputClass} placeholder="City, State" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="ap-linkedin" className={labelClass}>
            LinkedIn profile
          </label>
          <input
            id="ap-linkedin"
            name="linkedin"
            type="url"
            className={inputClass}
            placeholder="https://linkedin.com/in/"
          />
        </div>
        <div className="sm:col-span-2">
          <span className={labelClass}>Resume</span>
          <label
            htmlFor="ap-resume"
            className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-line bg-mist px-4 py-4 text-sm transition hover:border-navy"
          >
            <Upload className="h-5 w-5 shrink-0 text-navy" />
            <span className="min-w-0 truncate text-ink">{fileName || "Upload PDF or Word document (max 5 MB)"}</span>
          </label>
          <input
            id="ap-resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            className="sr-only"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="ap-note" className={labelClass}>
            Anything else we should know?
          </label>
          <textarea id="ap-note" name="note" rows={4} className={inputClass} />
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
        Submit Application
      </button>
    </form>
  );
}
