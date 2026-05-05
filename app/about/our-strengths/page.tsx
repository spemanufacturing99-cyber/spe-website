"use client";

import React from "react";
import { motion } from "framer-motion";

const strengths = [
  {
    icon: "⭐",
    title: "Two Decades of Excellence",
    description: "Trusted by industry leaders for precision and reliability.",
  },
  {
    icon: "🤝",
    title: "Comprehensive Solutions",
    description: "From design to fabrication and installation, we offer end-to-end services.",
  },
  {
    icon: "♻️",
    title: "Advanced Infrastructure",
    description: "Equipped with modern machinery and skilled manpower for complex projects.",
  },
  {
    icon: "🔧",
    title: "Commitment to Quality",
    description: "Adherence to stringent quality standards and timely delivery.",
  },
  {
    icon: "🏆",
    title: "Industry Expertise",
    description: "Deep knowledge across diverse industrial sectors and applications.",
  },
  {
    icon: "📈",
    title: "Continuous Innovation",
    description: "Always upgrading capabilities to meet evolving industry needs.",
  },
];

export default function OurStrengths() {
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
            Our Strengths 
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The core competencies that drive our success and client satisfaction
          </p>
        </motion.div>
      </section>

      {/* ================= STRENGTHS CONTENT ================= */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Key Strengths</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{strength.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{strength.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{strength.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional content section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-blue-50 rounded-2xl p-12"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Us?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  Experience & Expertise
                </h4>
                <p className="text-slate-700">Over 20 years of proven track record in fabrication and contracting with satisfied clients across India.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  Quality Assurance
                </h4>
                <p className="text-slate-700">ISO 9001:2015 certified processes ensuring consistent quality and adherence to international standards.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  Modern Infrastructure
                </h4>
                <p className="text-slate-700">State-of-the-art machinery and facilities equipped with latest technology for complex fabrication requirements.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  Customer Focus
                </h4>
                <p className="text-slate-700">Dedicated support and after-sales service ensuring long-term partnerships with our clients.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
