import { connectDB } from "@/lib/mongodb";
import Quote from "@/models/Quote";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, service, subject, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    await connectDB();

    const quote = new Quote({ name, email, phone, company, service, subject, message, createdAt: new Date() });
    await quote.save();

    const adminEmail = process.env.ADMIN_EMAIL || "admin@spemanufacturing.com";
    const emailSubject = subject || "New Quote Request from SPE";
    const emailBody = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Service/Product:</strong> ${service || "N/A"}</p>
      <p><strong>Subject:</strong> ${subject || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    // Send to customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@spemanufacturing.com",
      to: email,
      subject: `Quote Confirmation: ${emailSubject}`,
      html: `
        <h2>Thank you for your quote request!</h2>
        <p>Hi ${name},</p>
        <p>We have received your request and will get back to you shortly.</p>
        <hr>
        <h3>Your Request Details:</h3>
        ${emailBody}
        <hr>
        <p>Best regards,<br>SPE (Satnam Process Engineering) Manufacturing Team</p>
      `,
    });

    // Send to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@spemanufacturing.com",
      to: adminEmail,
      subject: `[Admin] New Quote Request: ${emailSubject}`,
      html: emailBody,
    });

    return new Response(JSON.stringify({ message: "Quote request saved and emails sent", quote }), { status: 201 });
  } catch (error) {
    console.error("Quote API error:", error);
    return new Response(JSON.stringify({ error: "Failed to save quote" }), { status: 500 });
  }
}