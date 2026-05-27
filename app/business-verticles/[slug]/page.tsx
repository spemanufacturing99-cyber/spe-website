import Link from "next/link";
import MotionDiv from "../../../components/MotionDiv";
import { notFound } from "next/navigation";
import { businessVerticals, getBusinessVerticalBySlug } from "../../../lib/businessVerticals";

export async function generateStaticParams() {
  return businessVerticals.map((vertical) => ({ slug: vertical.slug }));
}

export default async function BusinessVerticalSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vertical = getBusinessVerticalBySlug(slug);

  if (!vertical) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-white">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.3),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_25%)]"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-sky-300 font-semibold mb-4">Business Vertical</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{vertical.title}</h1>
            <p className="mt-6 text-lg md:text-xl text-slate-200">{vertical.description}</p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/business-verticles" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-white/20 transition">
                Back to all verticals
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-600 transition">
                Request Quote
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">What we deliver</h2>
                <p className="text-slate-600 leading-relaxed">
                  SPE offers a complete engineering and fabrication solution for the {vertical.title.toLowerCase()}. Our systems are designed for durability, hygiene, and performance across every stage of the process.
                </p>
              </div>

              <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Products & equipment</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {vertical.products.map((product) => (
                    <div key={product} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
                      {product}
                    </div>
                  ))}
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 text-white shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Why choose SPE</h3>
                <ul className="space-y-4 text-slate-200">
                  <li className="flex gap-3">
                    <span className="mt-1 text-blue-300">•</span>
                    <span>Customized vessel fabrication and process equipment for critical applications.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-blue-300">•</span>
                    <span>In-house engineering, manufacturing and turnkey delivery with rigorous quality controls.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-blue-300">•</span>
                    <span>Hygienic, durable materials and systems built to support reliability and compliance.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-blue-300">•</span>
                    <span>Skid-mounted, modular solutions that accelerate installation and commissioning.</span>
                  </li>
                </ul>
              </div>

              
            </MotionDiv>
          </div>
        </div>
      </section>
    </main>
  );
}
