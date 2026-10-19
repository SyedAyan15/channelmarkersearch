import { clean, deliver, isEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  const form = await request.formData();

  // Honeypot: real visitors never fill this hidden field.
  if (clean(form.get("company_website"))) return Response.json({ ok: true });

  const email = clean(form.get("email"), 254);
  const message = clean(form.get("message"));
  if (!isEmail(email) || message.length < 5) {
    return Response.json(
      { ok: false, error: "Please provide a valid email address and a short message." },
      { status: 400 },
    );
  }

  const inquiryType = clean(form.get("type"), 40) || "General";
  try {
    await deliver({
      subject: `Website inquiry (${inquiryType}) from ${clean(form.get("name"), 120) || email}`,
      replyTo: email,
      fields: {
        Type: inquiryType,
        Name: clean(form.get("name"), 120),
        Email: email,
        Company: clean(form.get("company"), 160),
        Phone: clean(form.get("phone"), 40),
        Role: clean(form.get("role"), 160),
        Message: message,
      },
    });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false, error: "Something went wrong. Please email us directly." }, { status: 500 });
  }
  return Response.json({ ok: true });
}
