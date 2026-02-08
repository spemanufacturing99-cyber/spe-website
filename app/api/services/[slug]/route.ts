import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    await connectDB();
    const service = await Service.findOne({ slug }).lean();
    
    if (!service) {
      return new Response(JSON.stringify({ error: "Service not found" }), { status: 404 });
    }
    
    return new Response(JSON.stringify(service), { status: 200 });
  } catch (error) {
    console.error("Service GET error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch service" }), { status: 500 });
  }
}