"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const mediaItems = [
  {
    id: 1,
    title: "Company Overview Video",
    type: "Video",
    description: "A comprehensive look at our manufacturing facilities and processes",
    thumbnail: "/precision-metal-chain.png",
    duration: "5:30",
    date: "January 2026"
  },
  {
    id: 2,
    title: "Quality Control Process",
    type: "Video",
    description: "Behind the scenes of our rigorous quality assurance procedures",
    thumbnail: "/certified-welding.png",
    duration: "3:45",
    date: "December 2025"
  },
  {
    id: 3,
    title: "Innovation Showcase",
    type: "Video",
    description: "Showcasing our latest technological advancements",
    thumbnail: "/the-art-and-science.png",
    duration: "4:15",
    date: "November 2025"
  },
  {
    id: 4,
    title: "Factory Tour",
    type: "Video",
    description: "Virtual tour of our state-of-the-art manufacturing facility",
    thumbnail: "/precision-metal-chain.png",
    duration: "7:20",
    date: "October 2025"
  },
  {
    id: 5,
    title: "Product Gallery",
    type: "Image Gallery",
    description: "High-resolution images of our products and equipment",
    thumbnail: "/certified-welding.png",
    count: "25 images",
    date: "September 2025"
  },
  {
    id: 6,
    title: "Team & Culture",
    type: "Image Gallery",
    description: "Photos showcasing our team and company culture",
    thumbnail: "/the-art-and-science.png",
    count: "18 images",
    date: "August 2025"
  }
];

export default function Media() {
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
            Media Center <br/> <span className="text-blue-400">Satnam Process Engineering</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our videos, images, and multimedia content showcasing our work and capabilities
          </p>
        </motion.div>
      </section>

      {/* ================= MEDIA CONTENT ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Multimedia</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Videos & Images</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Discover our manufacturing processes, team, and facilities through our comprehensive media library.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mediaItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {item.type}
                    </span>
                  </div>
                  {item.type === "Video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-4">
                        <div className="w-0 h-0 border-l-8 border-l-blue-600 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{item.date}</span>
                    <span>
                      {item.type === "Video" ? item.duration : item.count}
                    </span>
                  </div>
                </div>
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
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Media Resources</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600 text-xl">🎥</span>
                  Video Library
                </h4>
                <p className="text-slate-700">Watch our process videos, facility tours, and product demonstrations to understand our manufacturing capabilities.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600 text-xl">📸</span>
                  Image Gallery
                </h4>
                <p className="text-slate-700">Browse high-resolution images of our equipment, facilities, team, and finished products.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600 text-xl">📋</span>
                  Press Kit
                </h4>
                <p className="text-slate-700">Download logos, company facts, and high-resolution images for media use.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600 text-xl">🎯</span>
                  Custom Content
                </h4>
                <p className="text-slate-700">Need specific videos or images? Contact us for custom media production services.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
