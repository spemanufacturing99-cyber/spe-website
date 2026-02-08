import Image from "next/image";
import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";

async function fetchProducts() {
  await connectDB();
  return Service.find({ category: 'Products' }).sort({ createdAt: -1 }).lean();
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  const groups = products.map((p: any) => ({
    id: p.slug || p._id,
    slug: p.slug,
    title: p.title,
    image: (p.images && p.images[0]) || '/products/bulk-milk.svg',
    short: p.excerpt || (p.longDescription && p.longDescription[0] ? (p.longDescription[0].slice(0, 160) + (p.longDescription[0].length > 160 ? '...' : '')) : ''),
    items: p.features && p.features.length > 0 ? p.features.slice(0, 4) : (p.items || []),
  }));

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Our Products</h1>
          <p className="text-slate-600 max-w-3xl mx-auto mt-4">High-quality fabricated and process equipment designed and manufactured by SPE for dairy, food, process, and industrial applications.</p>
        </header>

        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g: any) => (
            <article key={g.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.01] transition-transform">
              <div className="relative h-44 w-full">
                <Image src={g.image} alt={g.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute left-6 bottom-6 bg-white/90 text-slate-900 px-3 py-1 rounded-md font-semibold">{g.title}</div>
              </div>

              <div className="p-6">
                {g.short && <p className="text-sm text-slate-600 mb-3">{g.short}</p>}
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  {g.items.map((it: string) => (
                    <li key={it} className="flex gap-3 items-start">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <Link href={`/products/${g.slug}`} className="text-sm font-medium text-blue-600">View details →</Link>
                  <span className="text-xs text-slate-400">Category: Products</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-12 text-center">
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Request Quote for Products</Link>
        </div>
      </div>
    </main>
  );
}
