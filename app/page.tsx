"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SupplyChainRisk from "@/components/SupplyChainRisk";
import QuoteForm from "@/components/QuoteForm";
import Clients from "@/components/Clients";

function CounterNumber({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
}

function ParallaxBg({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={ref} className="relative">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        {children}
      </motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* ================= HERO ================= */}
     {/* HERO */}
<section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
<div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
>
<h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
Transforming concepts <span className="text-blue-400">into reality</span>
</h1>
<p className="mt-6 text-gray-300 max-w-lg">
We are a family-owned proprietary concern with expertise in design, fabrication, erection, and commissioning of industrial projects as per standard codes.
</p>
<div className="mt-8 flex gap-4">
<Link href="#RequestaQuote" className="inline-block">
  <motion.span whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center">Request Quote</motion.span>
</Link>
<Link href="/services" className="inline-block">
  <motion.span whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} className="px-8 py-3 rounded-lg border-2 border-white text-white text-sm font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center">View Services</motion.span>
</Link>
</div>
</motion.div>


<motion.div
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.8 }}
className="relative"
>
<Image
src="/precision-metal-chain.png"
alt="Pen"
width={600}
height={600}
className="rounded-3xl shadow-2xl object-cover"
/>
</motion.div>
</div>
</section>
<SupplyChainRisk />

  <Clients />

{/* PRODUCTS -> INDUSTRIES */}
<section id="products" className="py-24 relative overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center text-blue">Industries We Serve</h2>
          <p className="text-center text-blue mt-3 max-w-2xl mx-auto">We partner with organizations across diverse sectors to deliver tailored engineering solutions.</p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Oil & Gas', image: '/precision-metal-chain.png' },
              { name: 'Chemical & Petrochemical', image: '/precision-crafted.png' },
              { name: 'Food & Beverage', image: '/the-art-and-science.png' },
              { name: 'Pharmaceutical', image: '/precision-metal-chain.png' },
              { name: 'Power & Energy', image: '/certified-welding.png' },
            ].map((industry, i) => (
              <Link key={industry.name} href="/services" className="block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform block"
                >
                  <div className="relative h-44">
                    <Image src={industry.image} alt={industry.name} fill className="object-cover opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-blue">{industry.name}</h3>
                  </div>
                </motion.div>
              </Link>
            ))} 
          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-8xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Our Track Record</h2>
          <p className="text-center text-blue-100 mb-16 max-w-2xl mx-auto">
            Proven excellence in manufacturing with decades of trusted partnership
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: 10, label: "Degreed Engineers On Staff" },
              { number: 40, label: "Years In Business" },
              { number: 98.9, label: "Quality Rating", isPercent: true },
              { number: 7, label: "Order Range (M)", prefix: "$750K - $", suffix: "M" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-4xl font-bold mb-2">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <CounterNumber end={stat.number} duration={2.5} />
                  {stat.suffix && <span>{stat.suffix}</span>}
                  {stat.isPercent && <span>%</span>}
                  {!stat.prefix && !stat.isPercent && !stat.suffix && <span>+</span>}
                </div>
                <p className="text-blue-100 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST MARQUEE ================= */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <p className="text-gray-500 uppercase text-sm text-center">
            Trusted by manufacturers worldwide
          </p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: -1000 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap"
          >
            {["ISO Certified", "Global Export", "High Precision", "Custom OEM", "ISO Certified", "Global Export", "High Precision", "Custom OEM"].map(
              (item, index) => (
                <div
                  key={index}
                  className="px-8 py-4 rounded-lg bg-gray-100 text-gray-700 font-semibold flex items-center gap-2 min-w-max hover:bg-blue-50 transition"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  {item}
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES (improved) ================= */}
    

      {/* ================= VIDEO SECTION ================= */}
      <section  className="py-24 bg-white hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            See Our Manufacturing Process in Action
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Watch how we craft premium writing instruments with precision and care
          </p>
          
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Manufacturing Process"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= REQUEST QUOTE FORM ================= */}
      <section className="py-24  from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: "url('/sheet-metal.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 id="RequestaQuote" className="text-3xl font-bold text-center mb-2">Request a Quote</h2>
            <p className="text-center text-gray-600 mb-10">
              Tell us about your custom pen manufacturing needs and we'll get back to you promptly
            </p>

            <QuoteForm />
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="mt-8">
            <h2 className="text-3xl font-bold">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-gray-600">
              With decades of experience and advanced machinery, we deliver
              quality that meets international standards.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Proven track record with leading organizations across India.</li>
              <li>✔ Skilled team of engineers and technicians.</li>
              <li>✔ Customer-centric approach ensuring cost-effectiveness and efficiency.</li>
            </ul>
          </div>

          <div className="rounded-xl">

            <Image
src="/precision-metal-chain.png"
alt="Pen"
width={600}
height={600}
className="rounded-3xl shadow-2xl object-cover"
/>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">
            Looking for a Reliable Manufacturing Partner?
          </h2>
          <p className="mt-4 text-blue-100">
            Contact us today to discuss your custom pen manufacturing needs.
          </p>

          <Link
            href="#RequestaQuote"
            className="inline-block mt-8 bg-white text-blue-600 px-8 py-3 rounded font-semibold"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* ================= BLOG ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Latest Insights
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {["The Future of Flight: PEN Manufacturing’s Contributions to Aerospace R&D", "Understanding Deburring: Why It's Essential in Manufacturing", "The Art and Science of Plating: A Guide to Metal Coatings in Manufacturing"].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow"
              >
                <div className="rounded mb-4">

                  <Image
src="/the-art-and-science.png"
alt="Product"
width={400}
height={300}
className="w-full h-56 object-cover"
/>
                </div>
                <h3 className="font-semibold text-lg">
                   {i}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Latest innovations and insights from the pen manufacturing
                  industry.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
