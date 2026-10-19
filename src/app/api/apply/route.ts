import { clean, deliver, isEmail } from "@/lib/mailer";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED = [".pdf", ".doc", ".docx"];

export async function POST(request: Request) {
  const form = await request.formData();
  if (clean(form.get("company_website"))) return Response.json({ ok: true });

  const name = clean(form.get("name"), 120);
  const email = clean(form.get("email"), 254);
  if (!name || !isEmail(email)) {
    return Response.json({ ok: false, error: "Please add your name and a valid email." }, { status: 400 });
  }

  const resume = form.get("resume");
  const attachments: { filename: string; content: string }[] = [];
  if (resume instanceof File && resume.size > 0) {
    const lower = resume.name.toLowerCase();
    if (!ALLOWED.some((ext) => lower.endsWith(ext)) || resume.size > MAX_RESUME_BYTES) {
      return Response.json(
        { ok: false, error: "Resume must be a PDF or Word file under 5 MB." },
        { status: 400 },
      );
    }
    attachments.push({
      filename: resume.name,
      content: Buffer.from(await resume.arrayBuffer()).toString("base64"),
    });
  }

  const position = clean(form.get("position"), 160) || "General application";
  try {
    await deliver({
      subject: `Application: ${position}: ${name}`,
      replyTo: email,
      attachments,
      fields: {
        Position: position,
        Name: name,
        Email: email,
        Phone: clean(form.get("phone"), 40),
        LinkedIn: clean(form.get("linkedin"), 300),
        Location: clean(form.get("location"), 160),
        Note: clean(form.get("note")),
      },
    });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false, error: "Something went wrong. Please email us your resume." }, { status: 500 });
  }
  return Response.json({ ok: true });
}
