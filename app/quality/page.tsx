"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function QualityPage() {
  const images = [
    "/precision-metal-chain.png",
    "/certified-welding.png",
    "/the-art-and-science.png",
  ];

  const extraImages = ["/precision-metal-chain.png", "/certified-welding.png"];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
               
        
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-5xl mx-auto px-4 text-center relative z-10"
                >
                  <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                    About <span className="text-blue-400">Quality</span>
                  </h1>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                     Our team at <strong>SPE (SATNAM PROCESS ENGINEERING)</strong> Manufacturing takes quality seriously. We are committed to delivering precision-engineered parts that meet the highest industry standards. Our in-house quality control team meticulously inspects every project using state-of-the-art equipment to ensure accuracy, consistency, and durability.
                  </p>
                  </motion.div>
              </div>
      <div className="max-w-5xl mx-auto pt-6 px-6">
        

        <motion.section initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-3">Quality Commitment</h2>
              <p className="text-slate-700 leading-relaxed">Our dedication to continuous improvement, strict adherence to ISO standards, and attention to detail enable us to exceed customer expectations and provide reliable solutions for diverse industries.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-3">Quality Assurance Highlights</h3>
              <ul className="list-disc ml-5 text-slate-700 space-y-2">
                <li>Quality Policy and documented procedures</li>
                <li>ITAR Compliances (as applicable)</li>
                <li>ISO Certification and regular internal audits</li>
                <li>Supplier Quality Clauses and incoming material checks</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-3">Contact Quality</h3>
              <p className="text-slate-700">For quality certifications, reports or audits, reach out to our quality team.</p>
              <div className="mt-4">
                <Link href="/contact" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-blue-700 transition">Contact Quality Team</Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Gallery</h4>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
              {images.map((img, i) => (
                <motion.button
                  key={img}
                  onClick={() => { setSelected(i); setLightboxOpen(true); }}
                  whileHover={{ scale: 1.03 }}
                  className="relative h-28 rounded-md overflow-hidden shadow-lg focus:outline-none"
                >
                  <Image src={img} alt={`quality-${i}`} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                </motion.button>
              ))}
            </div>

            <div className="mt-6 bg-white p-4 rounded-xl shadow">
              <h4 className="font-semibold mb-2">Documentation & Policies</h4>
              <ul className="text-slate-700 list-disc ml-5 space-y-2">
                <li>Quality Policy</li>
                <li>ITAR Compliance</li>
                <li>ISO Certification</li>
                <li>Supplier Quality Clauses</li>
              </ul>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {extraImages.map((img, i) => (
                <div key={i} className="relative h-36 rounded-md overflow-hidden shadow-lg">
                  <Image src={img} alt={`extra-${i}`} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="max-w-4xl w-full mx-4 relative">
              <button onClick={() => setLightboxOpen(false)} className="absolute right-3 top-3 z-50 bg-white/90 rounded-full p-2 text-slate-900">✕</button>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                <Image src={images[selected]} alt="lightbox" fill className="object-cover" />
              </div>
              <div className="mt-3 flex justify-center gap-3">
                <button onClick={() => setSelected((s) => (s === 0 ? images.length - 1 : s - 1))} className="bg-white/90 rounded px-3 py-2">Prev</button>
                <button onClick={() => setSelected((s) => (s + 1) % images.length)} className="bg-white/90 rounded px-3 py-2">Next</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
