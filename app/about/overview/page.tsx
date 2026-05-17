"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Clients from "@/components/Clients";
export default function Overview() {

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
            Overview <br/> <span className="text-blue-400">Satnam Process Engineering</span>
          </h1>

        </motion.div>
      </section>
     


    <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Satnam Process Engineering (Along with M/s Satnam Engineering Services, M/s Satnam Services, and M/s Satnam Fabtech) is headquartered in Moga, Punjab, and is a leading name in fabrication and contracting services with over 20 years of proven expertise. Together with our sister concerns, we have built a strong reputation for delivering high-quality engineering solutions to some of the most reputed organizations across India.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We are a family-owned proprietary concern with expertise in design, fabrication, erection, and commissioning of industrial projects as per standard codes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl relative w-76.5 overflow-hidden border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="relative h-84  relative w-60 overflow-hidden rounded-3xl bg-slate-200 shadow-inner">
             <div style={{ margin: "50% auto" }} className="flex h-32 w-32 items-center justify-center rounded-full bg-slate-800 text-4xl font-bold text-white shadow-lg">
                MD
            </div>
           </div>
          </motion.div>
        </div>
      </section>
          </main>
  );
}