"use client";

import React from "react";
import { motion } from "framer-motion";

const downloadItems = [
  {
    id: 1,
    title: "Company Brochure",
    description: "Comprehensive overview of our services, capabilities, and achievements",
    fileType: "PDF",
    fileSize: "2.5 MB",
    category: "Corporate",
    icon: "📄"
  },
  {
    id: 2,
    title: "Product Catalog",
    description: "Complete catalog of our products and equipment offerings",
    fileType: "PDF",
    fileSize: "4.2 MB",
    category: "Products",
    icon: "📋"
  },
  {
    id: 3,
    title: "Quality Certificates",
    description: "ISO 9001:2015 certification and quality assurance documents",
    fileType: "PDF",
    fileSize: "1.8 MB",
    category: "Quality",
    icon: "🏆"
  },
  {
    id: 4,
    title: "Technical Specifications",
    description: "Detailed technical specifications for our equipment and services",
    fileType: "PDF",
    fileSize: "3.1 MB",
    category: "Technical",
    icon: "⚙️"
  },
  {
    id: 5,
    title: "Case Studies",
    description: "Success stories and project case studies from various industries",
    fileType: "PDF",
    fileSize: "5.7 MB",
    category: "Case Studies",
    icon: "📊"
  },
  {
    id: 6,
    title: "Safety Guidelines",
    description: "Safety protocols and guidelines for working with our equipment",
    fileType: "PDF",
    fileSize: "1.2 MB",
    category: "Safety",
    icon: "🛡️"
  },
  {
    id: 7,
    title: "Press Kit",
    description: "Logos, company facts, and media resources for press use",
    fileType: "ZIP",
    fileSize: "15.3 MB",
    category: "Media",
    icon: "📦"
  },
  {
    id: 8,
    title: "Contact Information",
    description: "Complete contact details and office locations",
    fileType: "PDF",
    fileSize: "0.8 MB",
    category: "Corporate",
    icon: "📞"
  }
];

const categories = ["All", "Corporate", "Products", "Quality", "Technical", "Case Studies", "Safety", "Media"];

export default function Download() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredItems = selectedCategory === "All"
    ? downloadItems
    : downloadItems.filter(item => item.category === selectedCategory);

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
            Downloads <br/> <span className="text-blue-400">Satnam Process Engineering</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Access our comprehensive collection of brochures, catalogs, certificates, and technical documents
          </p>
        </motion.div>
      </section>

      {/* ================= DOWNLOAD CONTENT ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Resources</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Download Center</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Download our latest brochures, catalogs, certificates, and technical documentation.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Download Items */}
          <div className="grid gap-4 md:grid-cols-2">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                      <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium">
                        {item.fileType}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        {item.fileSize} • {item.category}
                      </span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                        <span>Download</span>
                        <span>⬇️</span>
                      </button>
                    </div>
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
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Need Help?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600 text-xl">📧</span>
                  Custom Documents
                </h4>
                <p className="text-slate-700">Need a specific document or custom technical specifications? Contact our team for assistance.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600 text-xl">📞</span>
                  Technical Support
                </h4>
                <p className="text-slate-700">Have questions about our products or need technical guidance? Our experts are here to help.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600 text-xl">🔄</span>
                  Latest Updates
                </h4>
                <p className="text-slate-700">Documents are regularly updated. Check back frequently for the latest versions and new releases.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600 text-xl">📋</span>
                  Bulk Downloads
                </h4>
                <p className="text-slate-700">Need multiple documents? Contact us for bulk download options and custom packages.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
