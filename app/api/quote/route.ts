import { connectDB } from "@/lib/mongodb";
import Quote from "@/models/Quote";

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, service, subject, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    await connectDB();

    const quote = new Quote({ name, email, phone, company, service, subject, message, createdAt: new Date() });
    await quote.save();

    return new Response(JSON.stringify({ message: "Quote request saved", quote }), { status: 201 });
  } catch (error) {
    console.error("Quote API error:", error);
    return new Response(JSON.stringify({ error: "Failed to save quote" }), { status: 500 });
  }
}