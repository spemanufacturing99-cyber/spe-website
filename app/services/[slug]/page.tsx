"use client";

import React, { useEffect, useState, use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

type Service = {
  title: string;
  excerpt: string;
  longDescription: string[];
  features: string[];
  specs: { label: string; value: string }[];
  images: string[];
  industries?: { title: string; description: string }[];
  aluminum_series?: { series: string; description: string }[];
  steel_grades?: { grade: string; description: string }[];
  equipment?: string[];
  project_examples?: { client: string; project: string }[];
  welding_types?: { type: string; description: string }[];
  certifications?: { cert: string; desc: string }[];
  advantages?: { title: string; desc: string }[];
  mig_advantages?: { advantage: string }[];
  mig_capabilities?: string[];
  stainless_grades?: { grade: string; desc: string }[];
  applications?: { industry: string; desc: string }[];
  certifications_tig?: { cert: string; desc: string }[];
  tig_materials?: string[];
  multi_axis_equipment?: { machine: string; specs: string }[];
  cnc_advantages?: { advantage: string; desc: string }[];
  manufacturing_capabilities?: string[];
  stainless_steel_grades_machining?: { series: string; grades: string; desc: string }[];
  industries_served_machining?: { industry: string; desc: string }[];
  stainless_benefits?: string[];
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);


  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setLoading(true);
    const fetchService = async () => {
      try {
        const response = await fetch(`/api/services/${slug}`);
        if (response.ok) {
          const data = await response.json();
          setService(data);
        } else {
          // Fallback to hardcoded data for custom-pressure-vessels if API fails
          if (slug === 'custom-pressure-vessels') {
            setService({
              title: "Custom Pressure Vessel Fabrication",
              excerpt:
                "End-to-end design, fabrication, testing, and erection of pressure vessels, reactors and storage tanks for critical industrial applications.",
              longDescription: [
                "We combine engineering expertise, stringent quality controls, and modern fabrication facilities to deliver bespoke pressure vessels tailored to client needs.",
                "Our team handles design, material selection, fabrication, NDT, surface treatment, and full commissioning support. Every component is manufactured and tested to meet the highest international standards.",
              ],
              features: [
                "Full turnkey manufacturing",
                "Material traceability and certified welding",
                "Advanced NDT (Ultrasonic, RT, MPI)",
                "In-house machining and surface treatment",
              ],
              specs: [
                { label: "Max Diameter", value: "4.5 m" },
                { label: "Max Length", value: "18 m" },
                { label: "Max Weight", value: "20 MT (single piece)" },
                { label: "Materials", value: "Stainless Steel, Carbon Steel, Duplex" },
              ],
              images: ["/the-art-and-science.png", "/precision-metal-chain.png", "/certified-welding.png"],
            });
          }
        }
      } catch (error) {
        console.error('Error fetching service:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [slug]);

  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/services" className="inline-block text-sm text-blue-600 underline mb-4">
            ← Back to Services
          </Link>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            {loading || !service ? (
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
                <div className="h-36 bg-gray-100 rounded mt-6 animate-pulse" />
              </div>
            ) : (
              <>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-3">{service.title}</h1>
                    <p className="text-slate-600 mb-4">{service.excerpt}</p>

                    <div className="mb-4 flex flex-wrap gap-3">
                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Turnkey</span>
                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Fabrication</span>
                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Testing</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-white to-blue-50 p-4 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-2">Key Features</h4>
                        <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                          {service.features.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-white to-blue-50 p-4 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-2">Typical Specifications</h4>
                        <div className="text-sm text-slate-700 space-y-2">
                          {service.specs.map((s) => (
                            <div key={s.label} className="flex justify-between">
                              <span className="font-medium">{s.label}</span>
                              <span className="text-slate-600">{s.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-64 rounded-lg overflow-hidden shadow-lg relative">
                    <Image src={service.images[0]} alt={service.title} width={420} height={300} className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>

                {/* ---- middle image (eye-catching) ---- */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="mt-8 rounded-xl overflow-hidden shadow-2xl relative h-72"
                >
                  <Image src={service.images[1]} alt="Workshop" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute left-6 bottom-6 bg-white/90 text-slate-900 px-5 py-3 rounded-lg shadow-lg">
                    <div className="text-sm font-semibold">Workshop Overview</div>
                    <div className="text-xs text-slate-600">Modern machinery and organised production lines</div>
                  </div>
                </motion.div>

                {/* ---- gallery ---- */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Gallery</h4>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {service.images.map((img, idx) => (
                      <motion.button
                        key={img}
                        onClick={() => { setSelectedImage(idx); setLightboxOpen(true); }}
                        whileHover={{ scale: 1.03 }}
                        className="relative h-28 rounded-md overflow-hidden shadow-lg focus:outline-none"
                      >
                        <Image src={img} alt={`gallery-${idx}`} fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/20" />
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* lightbox */}
                {lightboxOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                    <div className="max-w-4xl w-full mx-4 relative">
                      <button onClick={()=>setLightboxOpen(false)} className="absolute right-3 top-3 z-50 bg-white/90 rounded-full p-2 text-slate-900">✕</button>
                      <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                        <Image src={service.images[selectedImage]} alt="lightbox" fill className="object-cover" />
                      </div>
                      <div className="mt-3 flex justify-center gap-2">
                        <button onClick={()=>setSelectedImage((s)=> (s===0? service.images.length-1 : s-1 ))} className="bg-white/90 rounded px-3 py-2">Prev</button>
                        <button onClick={()=>setSelectedImage((s)=> (s+1)%service.images.length )} className="bg-white/90 rounded px-3 py-2">Next</button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 space-y-4 text-slate-700">
                  {service.longDescription.map((p, i) => (
                    <motion.p key={i} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.06 }}>
                      {p}
                    </motion.p>
                  ))}

                  {/* Industries Served Section */}
                  {service.industries && service.industries.length > 0 && (
                    <div className="mt-6 space-y-3">
                      {service.industries.map((industry, idx) => (
                        <motion.div
                          key={industry.title}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div>
                            <div className="font-semibold text-slate-900">{industry.title}:</div>
                            <div className="text-slate-700">{industry.description}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Aluminum Series Section */}
                  {service.aluminum_series && service.aluminum_series.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">Available Aluminum Series</h4>
                      {service.aluminum_series.map((alum, idx) => (
                        <motion.div
                          key={alum.series}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div>
                            <div className="font-semibold text-slate-900">{alum.series}:</div>
                            <div className="text-slate-700">{alum.description}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Steel Grades Section */}
                  {service.steel_grades && service.steel_grades.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">Carbon Steel Grades & Specifications</h4>
                      {service.steel_grades.map((grade, idx) => (
                        <motion.div
                          key={grade.grade}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div>
                            <div className="font-semibold text-slate-900">{grade.grade}:</div>
                            <div className="text-slate-700">{grade.description}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Welding Types Section */}
                  {service.welding_types && service.welding_types.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">Welding Types & Capabilities</h4>
                      {service.welding_types.map((weld, idx) => (
                        <motion.div
                          key={weld.type}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div>
                            <div className="font-semibold text-slate-900">{weld.type}:</div>
                            <div className="text-slate-700">{weld.description}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Certifications Section */}
                  {service.certifications && service.certifications.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">AWS Certifications</h4>
                      {service.certifications.map((cert, idx) => (
                        <motion.div
                          key={cert.cert}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">✓</div>
                          <div>
                            <div className="font-semibold text-slate-900">{cert.cert}:</div>
                            <div className="text-slate-700">{cert.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Advantages Section */}
                  {service.advantages && service.advantages.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">Advantages</h4>
                      {service.advantages.map((adv, idx) => (
                        <motion.div
                          key={adv.title}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div>
                            <div className="font-semibold text-slate-900">{adv.title}:</div>
                            <div className="text-slate-700">{adv.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* MIG Advantages Section */}
                  {service.mig_advantages && service.mig_advantages.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">Advantages of MIG Welding</h4>
                      {service.mig_advantages.map((adv, idx) => (
                        <motion.div
                          key={adv.advantage}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div className="text-slate-700">{adv.advantage}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* MIG Capabilities Section */}
                  {service.mig_capabilities && service.mig_capabilities.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">MIG Welding Capabilities</h4>
                      {service.mig_capabilities.map((cap, idx) => (
                        <motion.div
                          key={cap}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (idx % 5) * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div className="text-slate-700">{cap}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Stainless Steel Grades Section */}
                  {service.stainless_grades && service.stainless_grades.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">Stainless Steel Grades</h4>
                      {service.stainless_grades.map((grade, idx) => (
                        <motion.div
                          key={grade.grade}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div>
                            <div className="font-semibold text-slate-900">{grade.grade}:</div>
                            <div className="text-slate-700">{grade.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Applications Section */}
                  {service.applications && service.applications.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">Applications</h4>
                      {service.applications.map((app, idx) => (
                        <motion.div
                          key={app.industry}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div>
                            <div className="font-semibold text-slate-900">{app.industry}:</div>
                            <div className="text-slate-700">{app.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* TIG Certifications Section */}
                  {service.certifications_tig && service.certifications_tig.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">AWS TIG Welding Certifications</h4>
                      {service.certifications_tig.map((cert, idx) => (
                        <motion.div
                          key={cert.cert}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">✓</div>
                          <div>
                            <div className="font-semibold text-slate-900">{cert.cert}:</div>
                            <div className="text-slate-700">{cert.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* TIG Materials Section */}
                  {service.tig_materials && service.tig_materials.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">TIG Welding Materials</h4>
                      {service.tig_materials.map((mat, idx) => (
                        <motion.div
                          key={mat}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (idx % 5) * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div className="text-slate-700">{mat}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Equipment Section */}
                  {service.equipment && service.equipment.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">Custom Manufacturing Equipment</h4>
                      {service.equipment.map((equip, idx) => (
                        <motion.div
                          key={equip}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (idx % 5) * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div className="text-slate-700">{equip}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Project Examples Section */}
                  {service.project_examples && service.project_examples.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">Project Examples & Applications</h4>
                      {service.project_examples.map((example, idx) => (
                        <motion.div
                          key={example.client}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div>
                            <div className="font-semibold text-slate-900">{example.client}:</div>
                            <div className="text-slate-700">{example.project}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Multi-Axis Equipment Section */}
                  {service.multi_axis_equipment && service.multi_axis_equipment.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">Multi-Axis CNC Equipment</h4>
                      {service.multi_axis_equipment.map((equip, idx) => (
                        <motion.div
                          key={equip.machine}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div>
                            <div className="font-semibold text-slate-900">{equip.machine}:</div>
                            <div className="text-slate-700">{equip.specs}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* CNC Advantages Section */}
                  {service.cnc_advantages && service.cnc_advantages.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">CNC Machining Advantages</h4>
                      {service.cnc_advantages.map((adv, idx) => (
                        <motion.div
                          key={adv.advantage}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div>
                            <div className="font-semibold text-slate-900">{adv.advantage}:</div>
                            <div className="text-slate-700">{adv.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Manufacturing Capabilities Section */}
                  {service.manufacturing_capabilities && service.manufacturing_capabilities.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">Manufacturing Capabilities</h4>
                      {service.manufacturing_capabilities.map((cap, idx) => (
                        <motion.div
                          key={cap}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (idx % 5) * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div className="text-slate-700">{cap}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Stainless Steel Machining Grades Section */}
                  {service.stainless_steel_grades_machining && service.stainless_steel_grades_machining.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">Stainless Steel Grades & Alloys</h4>
                      {service.stainless_steel_grades_machining.map((grade, idx) => (
                        <motion.div
                          key={grade.series}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div>
                            <div className="font-semibold text-slate-900">{grade.series}:</div>
                            <div className="text-slate-700">{grade.grades}</div>
                            <div className="text-slate-600 text-sm mt-1">{grade.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Industries Served - Machining Section */}
                  {service.industries_served_machining && service.industries_served_machining.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">Industries Served</h4>
                      {service.industries_served_machining.map((ind, idx) => (
                        <motion.div
                          key={ind.industry}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div>
                            <div className="font-semibold text-slate-900">{ind.industry}:</div>
                            <div className="text-slate-700">{ind.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Stainless Steel Benefits Section */}
                  {service.stainless_benefits && service.stainless_benefits.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">Stainless Steel Benefits</h4>
                      {service.stainless_benefits.map((benefit, idx) => (
                        <motion.div
                          key={benefit}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (idx % 5) * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3"
                        >
                          <div className="text-blue-600 font-bold mt-1">•</div>
                          <div className="text-slate-700">{benefit}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 bg-white/5 p-6 rounded-xl shadow-lg">
                    <h4 className="font-semibold mb-3">Testing & Quality</h4>
                    <p className="text-slate-200">Radiography, Ultrasonic Testing, Hydro-testing and documented NDT reports are standard for critical equipment.</p>
                  </div>

                  <div className="mt-4 grid md:grid-cols-3 gap-4">
                    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white p-4 rounded-xl text-center shadow-sm">
                      <div className="text-2xl font-bold text-slate-900">40+</div>
                      <div className="text-sm text-slate-600">Years Experience</div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white p-4 rounded-xl text-center shadow-sm">
                      <div className="text-2xl font-bold text-slate-900">50+</div>
                      <div className="text-sm text-slate-600">Countries Served</div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="bg-white p-4 rounded-xl text-center shadow-sm">
                      <div className="text-2xl font-bold text-slate-900">98.9%</div>
                      <div className="text-sm text-slate-600">Quality Rating</div>
                    </motion.div>
                  </div>

                  {/* ---- final image ---- */}
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-8 rounded-xl overflow-hidden relative h-60 shadow-2xl"
                  >
                    <Image src={service.images[2]} alt="Welding" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute left-6 bottom-6 bg-white/90 text-slate-900 px-4 py-2 rounded-lg shadow">High precision welding & finishing</div>
                  </motion.div>

                  {/* Quote form and CTA */}
                  <div className="mt-8 grid md:grid-cols-2 gap-6 items-start">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h4 className="font-semibold mb-3 text-slate-900">Request a Quote — {service.title}</h4>

                      <QuoteForm service={service.title} />
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h4 className="font-semibold mb-3 text-slate-900">Quick Contact</h4>
                      <p className="text-slate-700 mb-3">Prefer to speak directly? Call us or schedule a callback and we'll reach out.</p>
                      <div className="text-slate-900 font-semibold">+91 12345 67890</div>
                      <div className="mt-4">
                        <Link href="/contact" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-blue-700 transition">Full Contact Form</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
