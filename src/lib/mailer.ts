import "server-only";
import { site } from "./site";

type Attachment = { filename: string; content: string }; // base64 content

/**
 * Delivers a form submission to the Channel Marker inbox.
 * Uses Resend (https://resend.com) when RESEND_API_KEY is set;
 * otherwise logs the submission so local development works without credentials.
 */
export async function deliver({
  subject,
  fields,
  replyTo,
  attachments,
}: {
  subject: string;
  fields: Record<string, string | undefined>;
  replyTo?: string;
  attachments?: Attachment[];
}) {
  const text = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info(`[form] ${subject}\n${text}${attachments?.length ? `\n(+${attachments.length} attachment)` : ""}`);
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.MAIL_FROM ?? "Channel Marker Website <website@channelmarkersearch.com>",
      to: [process.env.MAIL_TO ?? site.email],
      reply_to: replyTo,
      subject,
      text,
      attachments,
    }),
  });
  if (!res.ok) {
    throw new Error(`Email delivery failed: ${res.status} ${await res.text()}`);
  }
}

export const isEmail = (v: unknown): v is string =>
  typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 254;

export const clean = (v: FormDataEntryValue | null, max = 5000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";
