import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";

export async function GET() {
  try {
    await connectDB();
    const services = await Service.find().sort({ createdAt: -1 }).lean();
    return new Response(JSON.stringify({ services }), { status: 200 });
  } catch (error) {
    console.error("Services GET error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch services" }), { status: 500 });
  }
}
