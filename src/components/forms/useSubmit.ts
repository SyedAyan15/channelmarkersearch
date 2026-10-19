"use client";

import { useState, type FormEvent } from "react";

export type Status = "idle" | "loading" | "success" | "error";

export function useSubmit(endpoint: string) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus("loading");
    setError("");
    try {
      const res = await fetch(endpoint, { method: "POST", body: new FormData(formEl) });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      formEl.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return { status, error, onSubmit, reset: () => setStatus("idle") };
}

export const inputClass =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-body/60 outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/15";

export const labelClass = "mb-1.5 block text-sm font-medium text-ink";

export const submitClass =
  "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 text-[15px] font-semibold text-white transition hover:bg-navy-light disabled:opacity-70";

export const errorClass = "mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700";
