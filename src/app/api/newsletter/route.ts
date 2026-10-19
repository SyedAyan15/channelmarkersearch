import { clean, deliver, isEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  const form = await request.formData();
  const email = clean(form.get("email"), 254);
  if (!isEmail(email)) {
    return Response.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }
  try {
    await deliver({ subject: `Newsletter signup: ${email}`, fields: { Email: email } });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false, error: "Couldn't subscribe right now." }, { status: 500 });
  }
  return Response.json({ ok: true });
}
