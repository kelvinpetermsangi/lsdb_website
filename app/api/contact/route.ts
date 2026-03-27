import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const CONTACT_TO = process.env.CONTACT_TO || "info@lsdb.or.tz";

function hasSmtpConfig() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.SMTP_FROM
  );
}

function buildPlainTextMessage({
  name,
  email,
  phone,
  subject,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  return [
    "New LSDB contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Subject: ${subject || "General inquiry"}`,
    "",
    "Message:",
    message,
  ].join("\n");
}

function buildHtmlMessage({
  name,
  email,
  phone,
  subject,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `
    <h2>New LSDB Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject || "General inquiry")}</p>
    <p><strong>Message:</strong></p>
    <p>${safeMessage}</p>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (process.env.NODE_ENV === "production" && !hasSmtpConfig()) {
      return NextResponse.json(
        {
          error:
            "Contact delivery is not configured on this server yet. Please add the SMTP environment variables and try again.",
        },
        { status: 503 }
      );
    }

    const submission = {
      name: String(name).trim(),
      email: String(email).trim(),
      phone: phone ? String(phone).trim() : "",
      subject: subject ? String(subject).trim() : "",
      message: String(message).trim(),
    };

    if (hasSmtpConfig()) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: CONTACT_TO,
        replyTo: submission.email,
        subject: `LSDB Contact Form: ${submission.subject || "New message"}`,
        text: buildPlainTextMessage(submission),
        html: buildHtmlMessage(submission),
      });
    } else {
      console.log("=== CONTACT FORM SUBMISSION ===");
      console.log(`Name: ${submission.name}`);
      console.log(`Email: ${submission.email}`);
      console.log(`Phone: ${submission.phone || "Not provided"}`);
      console.log(`Subject: ${submission.subject || "No subject"}`);
      console.log(`Message: ${submission.message}`);
      console.log("================================");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully. An LSDB official will follow up soon.",
        delivery: hasSmtpConfig() ? "smtp" : "development-log",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process contact form submission" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint. Use POST to submit contact form." },
    { status: 200 }
  );
}
