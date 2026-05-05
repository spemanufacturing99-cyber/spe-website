"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Certification() {
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
            Certification <br/> 
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            ISO 9001:2015 Quality Management System Certified
          </p>
        </motion.div>
      </section>

      {/* ================= CERTIFICATION CONTENT ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Certification</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">ISO 9001:2015 Quality Management</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Satnam Process Engineering has been assessed by RAPL and certified for an ISO 9001:2015 Quality Management System for design, fabrication, erection, and commissioning of industrial projects.
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Quality Standards</h3>
                <p className="text-slate-700 leading-relaxed">
                  Our certification reflects the highest standards in quality management for manufacturing and supply of pharmaceutical vessels, chemical vessels, dairy vessels, brewery vessels, stainless steel insulated tankers, bulk milk cooling units, milk silos, road milk tankers, drying chambers, cyclone and power silo systems.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Commitment to Excellence</h3>
                <p className="text-slate-700 leading-relaxed">
                  This certification underscores our commitment to process excellence, safety, and customer satisfaction across all fabrication and contracting services. We continuously maintain and improve our quality management systems to exceed industry standards.
                </p>
              </div>

              <motion.a 
                href="/about/certification"
                whileHover={{ scale: 1.02 }} 
                className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
              >
                Download Certificate
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm"
            >
              <Image
                src="/certification.jpeg"
                alt="ISO 9001 certification"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
