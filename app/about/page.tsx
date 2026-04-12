"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Clients from "@/components/Clients";

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

const values = [
  {
    icon: "⭐",
    title: "Two Decades of Excellence",
    description: "Trusted by industry leaders for precision and reliability.",
  },
  {
    icon: "🤝",
    title: "Comprehensive Solutions",
    description: "From design to fabrication and installation, we offer end-to-end services.",
  },
  {
    icon: "♻️",
    title: "Advanced Infrastructure",
    description: "Equipped with modern machinery and skilled manpower for complex projects.",
  },
  {
    icon: "🔧",
    title: "Commitment to Quality",
    description: "Adherence to stringent quality standards and timely delivery.",
  },
];

const milestones = [
  { year: "Industrial Fabrication", event: "Heavy and light structural fabrication for diverse industries" },
  { year: "Process Equipment Manufacturing", event: "Customized solutions for chemical, pharmaceutical, and food processing sectors" },
  { year: "Turnkey Contracting", event: "Complete project execution from concept to commissioning" },
  { year: "Maintenance & Support", event: "Reliable after-sales service and plant maintenance" },

];

export default function AboutPage() {
  const [workshopCount, setWorkshopCount] = useState(0);
  const [coveredCount, setCoveredCount] = useState(0);
  const [cranesCount, setCranesCount] = useState(0);

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
    ids.push(animate(2, setCranesCount, 800));

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
            Overview <br/> <span className="text-blue-400">Satnam Process Engineering</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Along with M/s Satnam Engineering Services, M/s Satnam Services, and M/s Satnam Fabtech
          </p>
        </motion.div>
      </section>
     

      {/* ================= MD MESSAGE ================= */}
    <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">MD’s Message</h2>
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
              <Image
                src="/md_photo.jpeg"
                alt="MD photo"
                fill
                className="object-cover"
    
              />
            </div>
           
          </motion.div>
        </div>
      </section>

      {/* ================= CERTIFICATION ================= */}
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
              <p className="text-slate-700 leading-relaxed">
                Our certification reflects the highest standards in quality management for manufacturing and supply of pharmaceutical vessels, chemical vessels, dairy vessels, brewery vessels, stainless steel insulated tankers, bulk milk cooling units, milk silos, road milk tankers, drying chambers, cyclone and power silo systems.
              </p>
              <p className="text-slate-700 leading-relaxed">
                This certification underscores our commitment to process excellence, safety, and customer satisfaction across all fabrication and contracting services.
              </p>
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

      {/* ================= MANAGEMENT TEAM ================= */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Management Team</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Meet the leadership team guiding Satnam Process Engineering with deep industry experience and operational excellence.
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
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
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

      {/* ================= INFRASTRUCTURE ================= */}
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

              <div className=" left-6 right-4 bottom-6 flex gap-4 sm:gap-6 sm:left-4 sm:right-auto">
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

      {/* ================= VALUES ================= */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Strengths</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every product we create.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="py-24 bg-white hidden">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Core Services
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-400 hidden md:block"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                      <h3 className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</h3>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"
                    ></motion.div>
                  </div>

                  {/* Empty space for alternate layout */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    

      {/* ================= BUSINESS VERTICALS ================= */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Business Verticals</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">We provide engineered vessels, process equipment, and turnkey systems for key industrial segments.</p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Business Verticals</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Beverage Industry',
                    'Dairy Industry',
                    'Food Industry',
                    'Pharmaceutical Industry',
                    'Chemical Industry',
                    'Waste Water Treatment',
                    'Sugar Industry',
                    'Paint Industry',
                  ].map((vertical) => (
                    <div key={vertical} className="rounded-2xl bg-slate-950/80 px-4 py-3 text-sm font-medium">
                      {vertical}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Beverage Industry</h3>
                <ul className="list-disc space-y-2 pl-5 text-slate-200">
                  <li>Blending Vessel</li>
                  <li>CIP Vessels</li>
                  <li>Holding Vessel</li>
                  <li>Lauter Tun</li>
                  <li>Mash-Tun Vessel</li>
                  <li>Mixing Vessel</li>
                  <li>Process Vessel</li>
                  <li>Skid Units etc.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Dairy Industry</h3>
                <ul className="list-disc space-y-2 pl-5 text-slate-200">
                  <li>Storage Vessel</li>
                  <li>CIP Vessel</li>
                  <li>Cream Vessel</li>
                  <li>Cheese Vats</li>
                  <li>Cooking Vessel</li>
                  <li>Dyers</li>
                  <li>Powder Hopper</li>
                  <li>Skid Units</li>
                  <li>Silos etc.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Food Industry</h3>
                <ul className="list-disc space-y-2 pl-5 text-slate-200">
                  <li>Storage Vessel</li>
                  <li>CIP Vessel</li>
                  <li>Cooking Vessel</li>
                  <li>Dyers</li>
                  <li>Powder Hopper</li>
                  <li>Sauce Mix Vessel</li>
                  <li>Skid Units</li>
                  <li>Silos etc.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Pharmaceutical Industry</h3>
                <ul className="list-disc space-y-2 pl-5 text-slate-200">
                  <li>IP Vessel</li>
                  <li>Fermenting Vessel</li>
                  <li>Holding Tanks</li>
                  <li>Mixing Tanks</li>
                  <li>Shell & Tubes</li>
                  <li>Skid Units etc.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Chemical Industry</h3>
                <ul className="list-disc space-y-2 pl-5 text-slate-200">
                  <li>Fermenting Vessel</li>
                  <li>Holding Tank</li>
                  <li>Mixing Tank</li>
                  <li>Shell & Tubes</li>
                  <li>Skid Units etc.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Waste Water Treatment</h3>
                <ul className="list-disc space-y-2 pl-5 text-slate-200">
                  <li>Evaporator</li>
                  <li>Concentrator</li>
                  <li>Crystallizers</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Sugar Industry</h3>
                <ul className="list-disc space-y-2 pl-5 text-slate-200">
                  <li>Falling Film Evaporator</li>
                  <li>Batch Pans</li>
                  <li>Vertical Continuous Pans</li>
                  <li>Crystallizers</li>
                  <li>Sugar Melter</li>
                  <li>Storage Tanks</li>
                  <li>Sugar Silo</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Paint Industry</h3>
                <ul className="list-disc space-y-2 pl-5 text-slate-200">
                  <li>Dissolvers</li>
                  <li>Mixers etc.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A few reasons our clients trust us for mission-critical projects.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Proven track record with leading organizations across India.',
              'Skilled team of engineers and technicians.',
              'Customer-centric approach ensuring cost-effectiveness and efficiency.',
            ].map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <div className="text-blue-600 text-3xl">✅</div>
                  <p className="text-gray-700">{point}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our guiding purpose and long-term ambition.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Mission Statement</h3>
              <p className="text-gray-700">To deliver innovative, high-quality, and tailored engineering solutions that empower industries worldwide, while upholding our commitment to excellence, sustainability, and customer satisfaction.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold mb-3">Vision Statement</h3>
              <p className="text-gray-700">To become a global leader in custom machinery manufacturing, renowned for our engineering expertise, advanced technology, and ability to transform ideas into reality.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders driving innovation and excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow"
              >
                <div className="flex h-48 items-center justify-center bg-slate-100">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-800 text-4xl font-bold text-white shadow-lg">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
     
      <Clients />
      
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Let's create exceptional pens together. Reach out to our team today.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
