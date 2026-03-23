import { connectDB } from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const authHeader = request.headers.get("authorization");
    const secret = process.env.NEXT_PUBLIC_ADMIN_SECRET || "secret123";
    if (!authHeader || authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { id } = await params;
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

    await connectDB();
    const updated = await Portfolio.findByIdAndUpdate(id, body, { new: true, runValidators: true }).lean();
    if (!updated) {
      return NextResponse.json({ error: "Portfolio item not found" }, { status: 404 });
    }

    return NextResponse.json({ entry: updated }, { status: 200 });
  } catch (error) {
    console.error("Portfolio PATCH error:", error);
    return NextResponse.json({ error: "Failed to update portfolio item" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const authHeader = request.headers.get("authorization");
    const secret = process.env.NEXT_PUBLIC_ADMIN_SECRET || "secret123";
    if (!authHeader || authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

    await connectDB();
    const removed = await Portfolio.findByIdAndDelete(id);
    if (!removed) {
      return NextResponse.json({ error: "Portfolio item not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (error) {
    console.error("Portfolio DELETE error:", error);
    return NextResponse.json({ error: "Failed to delete portfolio item" }, { status: 500 });
  }
}
