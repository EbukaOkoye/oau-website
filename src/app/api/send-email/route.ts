import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildEmailHtml, getEmailSubject } from "@/lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = "admin@onyekwereakymuche.com";

const VALID_FORM_TYPES = ["contact", "join-us", "volunteer", "partner"] as const;
type FormType = (typeof VALID_FORM_TYPES)[number];

const REQUIRED_FIELDS: Record<FormType, string[]> = {
  contact: ["firstName", "lastName", "email", "message"],
  "join-us": ["name", "email", "message"],
  volunteer: ["firstName", "lastName", "email", "reason"],
  partner: ["firstName", "lastName", "email", "reason"],
};

function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType, fields } = body;

    // Validate form type
    if (!formType || !VALID_FORM_TYPES.includes(formType)) {
      return NextResponse.json(
        { error: "Invalid form type." },
        { status: 400 }
      );
    }

    // Validate required fields
    const required = REQUIRED_FIELDS[formType as FormType];
    const missingFields = required.filter(
      (field) => !fields?.[field] || fields[field].trim() === ""
    );

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fields.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Sanitize all fields
    const sanitizedFields: Record<string, string> = {};
    for (const [key, value] of Object.entries(fields)) {
      if (typeof value === "string") {
        sanitizedFields[key] = sanitize(value);
      }
    }

    const subject = getEmailSubject(formType as FormType);
    const html = buildEmailHtml({
      formType: formType as FormType,
      fields: sanitizedFields,
    });

    const { error } = await resend.emails.send({
      from: "OAU Foundation <onboarding@resend.dev>",
      to: [RECIPIENT_EMAIL],
      subject,
      html,
      replyTo: fields.email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
