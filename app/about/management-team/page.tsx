"use client";

import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "John Anderson",
    role: "CEO & Founder",
    bio: "20+ years of experience in precision manufacturing",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Technology Officer",
    bio: "Expert in advanced manufacturing processes",
  },
  {
    name: "Michael Chen",
    role: "Quality Assurance Director",
    bio: "Dedicated to maintaining our 98.9% quality rating",
  },
  {
    name: "Emma Rodriguez",
    role: "OEM Solutions Manager",
    bio: "Specializes in custom pen design and manufacturing",
  },
];

export default function ManagementTeam() {
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
            Management Team 
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Meet the leadership team guiding us with deep industry experience and operational excellence.
          </p>
        </motion.div>
      </section>

      {/* ================= MANAGEMENT TEAM CONTENT ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Our Leadership Team</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              With combined decades of experience, our leaders drive innovation and excellence across all operations.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="flex h-60 items-center justify-center bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-slate-800 text-4xl font-bold text-white shadow-lg">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium mt-1">{member.role}</p>
                  <p className="mt-4 text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
