"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { businessVerticals } from "../../lib/businessVerticals";

export default function BusinessVerticals() {
  return (
    <main className="min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-4 text-center relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Business Verticals
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We provide engineered vessels, process equipment, and turnkey systems for key industrial segments
          </p>
        </motion.div>
      </section>

      {/* ================= BUSINESS VERTICALS CONTENT ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Industries</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Our Business Verticals</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We specialize in providing comprehensive engineering solutions across diverse industrial sectors, delivering high-quality process equipment and turnkey systems.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessVerticals.map((vertical, index) => (
              <motion.div
                key={vertical.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{vertical.title}</h3>
                <ul className="space-y-2">
                  {vertical.products.map((product, productIndex) => (
                    <li key={productIndex} className="flex items-center gap-2 text-slate-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                      {product}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/business-verticles/${vertical.slug}`}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
                >
                  View details
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Additional section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-blue-50 rounded-2xl p-12"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Industry Expertise</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600 text-xl">🏭</span>
                  Specialized Solutions
                </h4>
                <p className="text-slate-700">Each industry has unique requirements, and we tailor our engineering solutions to meet specific process needs and regulatory standards.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600 text-xl">🔧</span>
                  Turnkey Systems
                </h4>
                <p className="text-slate-700">From concept to commissioning, we provide complete turnkey solutions including design, fabrication, installation, and maintenance.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600 text-xl">⚡</span>
                  Process Optimization
                </h4>
                <p className="text-slate-700">Our solutions are designed to optimize processes, improve efficiency, and ensure compliance with industry standards and regulations.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600 text-xl">🛡️</span>
                  Quality Assurance
                </h4>
                <p className="text-slate-700">All our equipment undergoes rigorous quality testing and meets international standards for safety and performance.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
