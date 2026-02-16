"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type ServiceItem = { title: string; slug: string; excerpt?: string };
type Category = { id: string; name: string; description?: string; image?: string; services: ServiceItem[] };

export default function ServicesClient({ categories }: { categories: Category[] }) {
  return (
    <>
      <motion.header initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
        <p className="text-slate-600 max-w-2xl mx-auto mt-3">Organized by category to help you find the right solution. Click a service to view details.</p>
      </motion.header>

      <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10 max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold">Metal fabrication Material</h3>
        <p className="text-slate-700 mt-3">For over a quarter century, SPE (Satnam Process Engineering) Manufacturing has been providing machining, welding and fabrication services for a wide range of applications in many industries. Our finished products can be found in the transportation, emergency services, aerospace, recreational, electrical, defense, oceanographic and industrial wastewater industries, to name a few. SPE (Satnam Process Engineering) Manufacturing specializes in the machining, welding and fabrication of low- to mid-volume orders, from 10 to 5000 pieces.</p>

        <h4 className="text-lg font-semibold mt-4">Meeting Your Project Requirements</h4>
        <p className="text-slate-700 mt-2">Here at SPE (Satnam Process Engineering) Manufacturing, we continue to meet the demands of a wide range of industries with high-quality CNC machining, welding, and fabricating / manufacturing services, from components as small as. Our skilled staff has huge, combined experience in design, CNC machining, welding and fabrication.</p>
      </motion.div>

      {/* Category cards */}
      <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((cat: any, idx: number) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group relative rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <div className="relative h-44">
              <Image src={cat.image || '/precision-metal-chain.png'} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{cat.name}</h3>
              <p className="text-sm text-slate-600 mt-2">{cat.description}</p>
              <div className="mt-4 flex gap-3 flex-wrap">
                {cat.services.slice(0, 3).map((s: ServiceItem) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="text-sm text-blue-600 hover:underline">{s.title}</Link>
                ))}
              </div>
              <div className="mt-4">
                <a href={`#${cat.id}`} className="text-sm font-medium text-blue-600">Explore {cat.name} →</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Services grouped by category */}
      <div className="space-y-14">
        {categories.map((cat: any) => (
          <section id={cat.id} key={cat.id} className="" aria-labelledby={`${cat.id}-title`}>
            <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg relative">
                <Image src={cat.image || '/precision-metal-chain.png'} alt={cat.name} fill className="object-cover" />
              </div>
              <div>
                <h2 id={`${cat.id}-title`} className="text-2xl font-bold">{cat.name}</h2>
                <p className="text-slate-600">{cat.description}</p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {cat.services.map((s: ServiceItem, sidx: number) => (
                <motion.article key={s.slug} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: sidx * 0.06 }} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 font-semibold">{s.title.split(" ").map((w)=>w[0]).slice(0,2).join("")}</div>
                      <div>
                        <h3 className="font-semibold text-lg">{s.title}</h3>
                        <p className="text-sm text-slate-600 mt-1">{s.excerpt}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <Link href={`/services/${s.slug}`} className="text-sm font-medium text-blue-600">View Details →</Link>
                      <span className="text-xs text-slate-400">Category: {cat.name}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Get in Touch for Custom Projects</Link>
      </div>
    </>
  );
}
