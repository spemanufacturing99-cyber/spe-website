"use client";
import React from "react";
import { motion } from "framer-motion";

const clients = [
  "GEA Process Engineering (India) Ltd.India",
  "Nestle India Ltd., Moga, Samalkha & Pant Nagar,Tahaliwal (HP)",
  "Nestle Bangla Desh Ltd",
  "Dumex India Pvt. Ltd , Jagraon(Punjab)",
  "GSK Ltd Nabha, (Punjab)",
  "IDMC Ltd",
  "Wockhardt Ltd",
  "PepsiCo International , Channo(Punjab)",
  "Aneja foods Products, Kathua",
  "Pure Foods Ltd., Abohar (Punjab)",
  "Verka Dairy Ludhiana (Punjab)",
  "Alwar Krone Project, (Rajasthan)",
  "South-Asian Breweries",
  "Sterling Agro Industries Ltd.",
  "Tetra Pak India Pvt. Ltd. (Pune)",
  "New Erra Pvt. Ltd. (Ludhiana)",
  "Nutricia International Pvt. Ltd. (Danone)",
  "Alfa Laval, Pune (Maharashtra)",
  "Banas Dairy , Palanpur (Gujrat)",
  "Supreme Agro Foods Pvt Ltd., (Punjab)",
  "SPX Flow Technology  (India ) Pvt Ltd",
  "Cocacola International",
  "Hatsun Agro Food, India",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Clients() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">Our Clients & Partners</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Trusted by industry leaders across food, pharma, dairy, and engineering sectors.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.06 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 items-stretch"
        >
          {clients.map((c, i) => (
            <motion.div
              key={c + i}
              variants={{
                hidden: { opacity: 0, y: 10, scale: 0.98 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ scale: 1.04, y: -6 }}
              className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition-all duration-300 flex items-center gap-3"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center font-bold shadow-md">{initials(c)}</div>
              <div className="text-sm text-slate-700 leading-tight flex-1 min-w-0">
                <div className="font-semibold break-words">{c}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Have your company join this list — reach out to collaborate.</p>
        </div>
      </div>
    </section>
  );
}
