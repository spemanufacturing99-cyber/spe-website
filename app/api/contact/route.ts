import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    // Connect to database
    await connectDB();

    // Create contact record
    const contact = new Contact({
      name,
      email,
      phone,
      company,
      subject,
      message,
      createdAt: new Date(),
    });

    await contact.save();

    return new Response(JSON.stringify({ message: "Message sent successfully", contact }), { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(JSON.stringify({ error: "Failed to send message" }), { status: 500 });
  }
}
