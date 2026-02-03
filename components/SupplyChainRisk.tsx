"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Industrial Fabrication",
    desc: "Heavy and light structural fabrication for diverse industries.",
  },
  {
    title: "Manufacturing",
    desc: "Customized solutions for chemical, pharmaceutical, and food processing sectors.",
  },
  {
    title: "Turnkey Contracting",
    desc: "Complete project execution from concept to commissioning.",
  },
  {
    title: "Maintenance & Support",
    desc: "Reliable after-sales service and plant maintenance",
  },
];

export default function SupplyChainRisk() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Core Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Building resilient, transparent, and future-ready supply chains to
            ensure uninterrupted operations.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/precision-crafted.png"
              alt="Supply Chain Management"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Grid Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-gray-200 hover:shadow-xl transition bg-gray-50"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
