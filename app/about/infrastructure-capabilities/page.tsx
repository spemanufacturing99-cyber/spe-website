"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function InfrastructureCapabilities() {
  const [workshopCount, setWorkshopCount] = useState(0);
  const [coveredCount, setCoveredCount] = useState(0);

  useEffect(() => {
    const animate = (target: number, setter: any, duration = 900) => {
      const intervalTime = 20;
      const steps = Math.max(1, Math.floor(duration / intervalTime));
      const increment = Math.ceil(target / steps);
      let current = 0;
      const id = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(id);
        } else {
          setter(current);
        }
      }, intervalTime);
      return id;
    };

    const ids: NodeJS.Timeout[] = [];
    ids.push(animate(59400, setWorkshopCount, 1200));
    ids.push(animate(22000, setCoveredCount, 1200));

    return () => ids.forEach(clearInterval);
  }, []);

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
            Infrastructure & Capabilities 
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            State-of-the-art facilities and advanced equipment for complex fabrication projects
          </p>
        </motion.div>
      </section>

      {/* ================= INFRASTRUCTURE CONTENT ================= */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/precision-metal-chain.png"
                  alt="Workshop overview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="absolute left-6 right-4 bottom-6 flex gap-4 sm:gap-6 sm:left-4 sm:right-auto">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white/90 text-slate-900 p-4 rounded-lg shadow-lg w-60 flex-shrink-0"
                >
                  <div className="text-2xl font-bold">{workshopCount.toLocaleString()}</div>
                  <div className="text-sm">Workshop Area (sq. ft.)</div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -6 }}
                  className="bg-white/90 text-slate-900 p-4 rounded-lg shadow-lg w-60 flex-shrink-0"
                >
                  <div className="text-2xl font-bold">{coveredCount.toLocaleString()}</div>
                  <div className="text-sm">Covered Area (sq. ft.)</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Infrastructure & Capabilities</h2>
              <p className="text-slate-300 mb-6">Our modern facilities, advanced equipment, and skilled manpower allow us to deliver complex, large-scale projects reliably and on schedule.</p>

              <div className="grid gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">Equipment Highlights</h3>
                  <ul className="space-y-2 text-slate-200">
                    <li>• 2 Mobile Hydraulic Cranes (14 tons each)</li>
                    <li>• Hydraulic Presses (50 tons &amp; 250 tons)</li>
                    <li>• Sheet Bending Roller Machine</li>
                    <li>• Plasma &amp; Profile Cutting Machines</li>
                    <li>• Orbital Pipe Cutting Machine</li>
                    <li>• Puff Pouring Automatic PLC Machine</li>
                    <li>• TIG Welding Machines, Lathe, Drilling Machines</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 }}
                  className="bg-white/5 p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">Skilled Manpower</h3>
                  <p className="text-slate-200">Qualified engineers, welders, fitters, and draftsmen available for project planning, fabrication, installation and commissioning.</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Engineers</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Welders</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Fitters</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Draftsmen</span>
                  </div>
                </motion.div>

                <motion.a href="/contact" whileHover={{ scale: 1.02 }} className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Contact for Capacity Details</motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
