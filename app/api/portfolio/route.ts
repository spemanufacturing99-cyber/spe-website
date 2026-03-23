import { connectDB } from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    await connectDB();
    const entries = await Portfolio.find().sort({ updatedAt: -1 }).lean();
    return NextResponse.json({ entries }, { status: 200 });
  } catch (error) {
    console.error("Portfolio GET error:", error);
    return NextResponse.json({ error: "Failed to fetch portfolio items" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const secret = process.env.NEXT_PUBLIC_ADMIN_SECRET || "secret123";
    if (!authHeader || authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      title,
      slug,
      subTitle,
      industry,
      summary,
      challenge,
      solution,
      result,
      metrics,
      bullets,
      heroImage,
      tags,
    } = body;

    if (!title || !slug) {
      return NextResponse.json({ error: "Title and slug are required" }, { status: 400 });
    }

    await connectDB();
    const existing = await Portfolio.findOne({ slug });
    if (existing) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
    }

    const entry = await Portfolio.create({
      title,
      slug,
      subTitle: subTitle || "",
      industry: industry || "",
      summary: summary || "",
      challenge: challenge || "",
      solution: solution || "",
      result: result || "",
      metrics: Array.isArray(metrics) ? metrics : [],
      bullets: Array.isArray(bullets) ? bullets : [],
      heroImage: heroImage || "",
      tags: Array.isArray(tags) ? tags : [],
    });

    return NextResponse.json({ entry }, { status: 201 });
  } catch (error) {
    console.error("Portfolio POST error:", error);
    return NextResponse.json({ error: "Failed to create portfolio item" }, { status: 500 });
  }
}
