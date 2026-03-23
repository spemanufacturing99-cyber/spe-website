import { connectDB } from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";
import { portfolioItems } from "@/lib/portfolioData";

export async function GET() {
  try {
    await connectDB();
    await Portfolio.deleteMany({});
    const insert = portfolioItems.map((item) => ({
      title: item.title,
      slug: item.slug,
      subTitle: item.subTitle,
      industry: item.industry,
      summary: item.summary,
      challenge: item.challenge,
      solution: item.solution,
      result: item.result,
      metrics: item.metrics,
      bullets: item.bullets,
      heroImage: item.heroImage,
      tags: item.tags,
    }));
    const docs = await Portfolio.insertMany(insert);
    return new Response(JSON.stringify({ seeded: docs.length }), { status: 200 });
  } catch (error) {
    console.error("Portfolio seed error", error);
    return new Response(JSON.stringify({ error: "Failed to seed portfolio" }), { status: 500 });
  }
}
