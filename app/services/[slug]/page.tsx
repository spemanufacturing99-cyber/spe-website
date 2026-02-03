"use client";

import React, { useEffect, useState } from "react";
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
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);


  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => {
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
      setLoading(false);
    }, 450);

    return () => clearTimeout(id);
  }, [params.slug]);

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
