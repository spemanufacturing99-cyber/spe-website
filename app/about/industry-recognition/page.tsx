"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const recognitions = [
  {
    title: "ISO 9001:2015 Certification",
    description: "Quality Management System - Design, fabrication, erection, and commissioning",
    year: "2015",
    icon: "🏅"
  },
  {
    title: "Industry Leader",
    description: "Recognized as a leading fabrication and contracting service provider",
    year: "Recent",
    icon: "⭐"
  },
  {
    title: "Customer Trust",
    description: "Trusted by major organizations across India for high-quality engineering solutions",
    year: "Ongoing",
    icon: "🤝"
  },
  {
    title: "Quality Excellence",
    description: "Maintained 98.9% quality rating across all fabrication projects",
    year: "Ongoing",
    icon: "✓"
  },
];

export default function IndustryRecognition() {
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
            Industry Recognition & Rewards 
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Recognition of our commitment to excellence and quality
          </p>
        </motion.div>
      </section>

      {/* ================= RECOGNITION CONTENT ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Achievements</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Recognition & Awards</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Our dedication to quality and excellence has earned us recognition across the industry.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={recognition.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{recognition.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{recognition.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{recognition.year}</p>
                <p className="text-slate-600 leading-relaxed">{recognition.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
