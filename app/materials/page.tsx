import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import Material from "@/models/Material";

export default async function MaterialsPage() {
  await connectDB();
  const entries = await Material.find().sort({ updatedAt: -1 }).lean();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs uppercase font-semibold tracking-[0.2em] text-blue-600">Our Capabilities</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-slate-900">Materials</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Explore the types of materials we custom fabricate, machine, and weld to exact specifications.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {entries.length === 0 ? (
            <div className="col-span-full p-6 bg-white rounded-2xl border border-slate-200 text-slate-700 text-center">No materials found. Add some in the admin panel.</div>
          ) : (
            entries.map((entry: any) => (
              <Link key={entry._id.toString()} href={`/materials/${entry.slug}`} className="block p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:shadow-lg transition">
                <div className="text-slate-800 text-xl font-bold mb-2">{entry.title}</div>
                <p className="text-slate-600 text-sm line-clamp-4">{entry.shortDescription}</p>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}