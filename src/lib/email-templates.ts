type FormType = "contact" | "join-us" | "volunteer" | "partner";

interface EmailData {
  formType: FormType;
  fields: Record<string, string>;
}

const formTitles: Record<FormType, string> = {
  contact: "New Contact Form Submission",
  "join-us": "New Join Us Form Submission",
  volunteer: "New Volunteer Application",
  partner: "New Partnership Inquiry",
};

const formSubjects: Record<FormType, string> = {
  contact: "OAU Foundation - Contact Form Submission",
  "join-us": "OAU Foundation - Join Us Request",
  volunteer: "OAU Foundation - Volunteer Application",
  partner: "OAU Foundation - Partnership Inquiry",
};

function formatFieldName(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .replace(/\b\w/g, (str) => str.toUpperCase());
}

export function getEmailSubject(formType: FormType): string {
  return formSubjects[formType] || "OAU Foundation - Form Submission";
}

export function buildEmailHtml({ formType, fields }: EmailData): string {
  const title = formTitles[formType] || "New Form Submission";

  const rows = Object.entries(fields)
    .filter(([, value]) => value && value.trim() !== "")
    .map(
      ([key, value]) => `
      <tr>
        <td style="padding: 12px 16px; font-weight: 600; color: #1a365d; background-color: #f7fafc; border-bottom: 1px solid #e2e8f0; width: 160px; vertical-align: top;">
          ${formatFieldName(key)}
        </td>
        <td style="padding: 12px 16px; color: #2d3748; border-bottom: 1px solid #e2e8f0; vertical-align: top;">
          ${value.replace(/\n/g, "<br />")}
        </td>
      </tr>
    `
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin: 0; padding: 0; background-color: #f0f4f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f4f8; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
              <!-- Header -->
              <tr>
                <td style="background-color: #1a365d; padding: 32px 24px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">
                    ${title}
                  </h1>
                </td>
              </tr>
              <!-- Body -->
              <tr>
                <td style="padding: 24px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden;">
                    ${rows}
                  </table>
                </td>
              </tr>
              <!-- Footer -->
              <tr>
                <td style="padding: 16px 24px 24px; text-align: center; color: #a0aec0; font-size: 13px;">
                  This email was sent from the OAU Foundation website.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}
