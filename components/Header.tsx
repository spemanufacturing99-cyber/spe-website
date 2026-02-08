"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  { name: "All Products", icon: "📦", desc: "View all products", link: "/products" },
  { name: "Milk Cooling Tanks", icon: "❄️", desc: "Bulk milk cooling solutions", link: "/products/bulk-milk-cooling-tank" },
  { name: "CIP Tanks", icon: "🧼", desc: "Cleaning in place systems", link: "/products/cip-tanks" },
  { name: "Conveyors & Silos", icon: "📦", desc: "Material handling systems", link: "/products/conveyors-silos" },
  { name: "Storage Tankers", icon: "🏭", desc: "Bulk storage solutions", link: "/products/storage-tankers" },
];

const services = [
  { name: "All Services", icon: "🔧", desc: "View all services", link: "/services" },
  { name: "Welding", icon: "⚡", desc: "Expert welding services", link: "/services/welding" },
  { name: "Fabrication", icon: "🛠️", desc: "Custom metal fabrication", link: "/services/fabrication" },
  { name: "CNC Machining", icon: "⚙️", desc: "Precision machining", link: "/services/cnc-machining" },
  { name: "Stainless Steel", icon: "✨", desc: "Stainless steel machining", link: "/services/stainless-steel-machining" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
      },
    }),
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center gap-1">
          <Image
          src="/spe-logo.jpg"
          alt="Pen"
          width={150}
          height={100}
          className="rounded-3xl shadow-2xl object-cover"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          <Link
            href="/"
            className="px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            Home
          </Link>

          {/* Products Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
              className="px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200 flex items-center gap-2"
            >
              Products
              <motion.span
                animate={{ rotate: productsOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  <div className="p-3 space-y-2">
                    {products.map((product, i) => (
                      <motion.a
                        key={product.name}
                        href={product.link}
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition group"
                      >
                        <span className="text-xl">{product.icon}</span>
                        <div>
                          <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                            {product.name}
                          </p>
                          <p className="text-xs text-gray-500">{product.desc}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              className="px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200 flex items-center gap-2"
            >
              Services
              <motion.span
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  <div className="p-3 space-y-2">
                    {services.map((service, i) => (
                      <motion.a
                        key={service.name}
                        href={service.link}
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition group"
                      >
                        <span className="text-xl">{service.icon}</span>
                        <div>
                          <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                            {service.name}
                          </p>
                          <p className="text-xs text-gray-500">{service.desc}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/about"
            className="px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            About
          </Link>

          <Link
            href="/quality"
            className="px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            Quality
          </Link>

          <Link
            href="/contact"
            className="ml-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition duration-300 hover:scale-105"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-2xl p-2 hover:bg-gray-100 rounded-lg transition"
        >
          ☰
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              <Link
                onClick={() => setMobileOpen(false)}
                href="/"
                className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Home
              </Link>

              {/* Mobile Products Dropdown */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition flex items-center justify-between"
                >
                  Products
                  <motion.span
                    animate={{ rotate: mobileProductsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ▼
                  </motion.span>
                </button>

                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-2 mt-2 overflow-hidden"
                    >
                      {products.map((product) => (
                        <a
                          key={product.name}
                          href={product.link}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-start gap-3 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
                        >
                          <span className="text-lg">{product.icon}</span>
                          <div>
                            <p className="font-semibold text-gray-900">{product.name}</p>
                            <p className="text-xs text-gray-500">{product.desc}</p>
                          </div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition flex items-center justify-between"
                >
                  Services
                  <motion.span
                    animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ▼
                  </motion.span>
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-2 mt-2 overflow-hidden"
                    >
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href={service.link}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-start gap-3 px-4 py-2 rounded-lg hover:bg-green-50 transition"
                        >
                          <span className="text-lg">{service.icon}</span>
                          <div>
                            <p className="font-semibold text-gray-900">{service.name}</p>
                            <p className="text-xs text-gray-500">{service.desc}</p>
                          </div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                onClick={() => setMobileOpen(false)}
                href="/about"
                className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                About
              </Link>

              <Link
                onClick={() => setMobileOpen(false)}
                href="/blog"
                className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Blog
              </Link>

              <Link
                onClick={() => setMobileOpen(false)}
                href="/contact"
                className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg text-center font-semibold transition"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
 