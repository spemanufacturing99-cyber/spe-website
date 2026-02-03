import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug") || request.url.split("/").pop();

    const service = await Service.findOne({ slug }).lean();
    if (!service) return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });

    return new Response(JSON.stringify({ service }), { status: 200 });
  } catch (error) {
    console.error("Service GET error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch service" }), { status: 500 });
  }
}