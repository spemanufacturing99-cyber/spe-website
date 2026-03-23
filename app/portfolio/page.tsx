import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";

export default async function PortfolioPage() {
  await connectDB();
  const entries = await Portfolio.find().sort({ updatedAt: -1 }).lean();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-xs uppercase font-semibold tracking-[0.2em] text-blue-600">Our Showcase</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-slate-900">Portfolio</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Explore our completed projects and product success stories across industries.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {entries.length === 0 ? (
            <div className="p-6 bg-white rounded-2xl border border-slate-200 text-slate-700">No portfolio entries found. Add one in admin.</div>
          ) : (
            entries.map((entry: any) => (
              <Link key={entry._id.toString()} href={`/portfolio/${entry.slug}`} className="block p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:shadow-lg transition">
                <div className="text-slate-800 text-xl font-semibold">{entry.title}</div>
                <p className="mt-2 text-slate-600 line-clamp-3">{entry.summary || entry.subTitle}</p>
                <div className="mt-3 text-xs text-slate-500">Industry: {entry.industry || "General"}</div>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
