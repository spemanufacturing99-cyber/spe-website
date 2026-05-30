"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { productsData } from "@/lib/productsData";

export default function ProductsPage() {
  const groups = productsData.map((p) => ({
    id: p.slug,
    slug: p.slug,
    title: p.title,
    image: (p.images && p.images[0]) || '/products/bulk-milk.svg',
    short: p.excerpt,
    items: p.features && p.features.length > 0 ? p.features.slice(0, 4) : [],
  }));

  return (
    <main className="min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Our <span className="text-blue-400">Products</span>
            </h1>
            <p className="mt-6 text-gray-300 max-w-lg">
              High-quality fabricated and process equipment designed and manufactured by SPE for dairy, food, process, and industrial applications.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="inline-block">
                <motion.span whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center">Request Quote</motion.span>
              </Link>
              <Link href="/services" className="inline-block">
                <motion.span whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} className="px-8 py-3 rounded-lg border-2 border-white text-white text-sm font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center">View Services</motion.span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/precision-metal-chain.png"
              alt="Products"
              width={600}
              height={600}
              className="rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12">
            {groups.map((product: any, index: number) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Product Info */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                      {product.title}
                    </h2>
                    {product.short && (
                      <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        {product.short}
                      </p>
                    )}

                    {/* Key Features */}
                    {product.items && product.items.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
                        <ul className="space-y-3">
                          {product.items.map((feature: string, featureIndex: number) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3"
                            >
                              <span className="text-blue-600 font-bold text-lg mt-1">•</span>
                              <span className="text-slate-700 leading-relaxed">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-8">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        View Details
                        <span>→</span>
                      </Link>
                    </div>
                  </div>

                  {/* Product Image */}
                  <div className="relative h-80 md:h-auto">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-blue-50 rounded-2xl p-12"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Need Custom Solutions?</h3>
            <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
              Our engineering team can design and manufacture custom products tailored to your specific requirements.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Request Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
