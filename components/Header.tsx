"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type MenuItem = {
  title: string;
  path: string;
  children?: MenuItem[];
};

const menuStructure: MenuItem[] = [
  {
    title: "About us",
    path: "/about",
    children: [
      { title: "Overview", path: "/about/overview" },
      { title: "MD Massage", path: "/about/md-massage" },
      { title: "Management Team", path: "/about/management-team" },
      { title: "Infrastructure & Capabilities", path: "/about/infrastructure-capabilities" },
      { title: "Industry Recognition/Rewards", path: "/about/industry-recognition" },
      { title: "Certification", path: "/about/certification" },
      { title: "Our Strengths", path: "/about/our-strengths" },
    ],
  },
   { title: "Business Verticles", path: "/business-verticles", children: [] },
  {
    title: "Services",
    path: "/services",
    children: [
      {
        title: "Welding",
        path: "/services",
        children: [
          { title: "TIG Welding", path: "/services/tig-welding" },
          { title: "Welding Services", path: "/services/welding-services" },
          { title: "Stainless Steel Welding", path: "/services/stainless-steel-welding" },
        ],
      },
      {
        title: "Fabrication & Erection",
        path: "/services",
        children: [
          { title: "Structural Fabrication", path: "/services/structural-fabrication" },
          { title: "Structural Steel Fabrication", path: "/services/structural-steel-fabrication" },
          { title: "Carbon Steel Fabrication", path: "/services/carbon-steel-fabrication" },
        ],
      },
      {
        title: "Machining Services",
        path: "/services",
        children: [
          { title: "Stainless Steel Machining", path: "/services/stainless-steel-machining" },
          { title: "CNC Machining", path: "/services/cnc-machining" },
        ],
      },
      {
        title: "Assembling & Finishing",
        path: "/services",
        children: [
          { title: "Assembly & Finishing", path: "/services#maintenance-&-support" },
        ],
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
    children: [
      { title: "Storage Tankers & Silos", path: "/products/storage-tankers-silos" },
      { title: "Road Milk Tankers", path: "/products/road-milk-tankers" },
      { title: "Hygienic Doors & Shoe Racks", path: "/products/hygienic-doors-racks" },
    ],
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    children: [
      { title: "Machinery Projects", path: "/portfolio/machinery-projects" },
      { title: "Hyperloop Test Sled", path: "/portfolio/hyperloop-test-sled" },
      { title: "1000 Holes", path: "/portfolio/1000-holes" },
      { title: "Angel Stadium of Anaheim", path: "/portfolio/angel-stadium-of-anaheim" },
      { title: "Bio Boxes & Clarifiers", path: "/portfolio/bio-boxes-clarifiers" },
      { title: "Biomixers", path: "/portfolio/biomixers" },
      { title: "Caltech", path: "/portfolio/caltech" },
      { title: "Grating Project", path: "/portfolio/grating-project" },
      { title: "Plastic Welder", path: "/portfolio/plastic-welder" },
      { title: "Rodder", path: "/portfolio/rodder" },
      { title: "SS Other", path: "/portfolio/ss-other" },
      { title: "SS Piping & Troughs", path: "/portfolio/ss-piping-troughs" },
      { title: "SS Products", path: "/portfolio/ss-products" },
      { title: "SS Tanks", path: "/portfolio/ss-tanks" },
      { title: "SS Tracks", path: "/portfolio/ss-tracks" },
      { title: "Stonemills", path: "/portfolio/stonemills" },
      { title: "Trac Projects", path: "/portfolio/trac-projects" },
    ],
  },
    {
    title: "Resources",
    path: "/resources",
    children: [
      { title: "Blogs", path: "/blog" },
      { title: "Media", path: "/media" },
      { title: "Download", path: "/Download" },
    ],
  },
  
  
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[&/]/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  const toggleMenu = (key: string) => {
    setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }));
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
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          <ul className="flex items-center gap-2">
            {menuStructure.map((item) => (
              <li key={item.title} className="relative group">
                <Link
                  href={item.path}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-slate-700 hover:bg-gray-100 transition text-sm font-medium"
                >
                  {item.title}
                  {item.children?.length ? (
                    <span className="text-xs transform transition-transform duration-200 group-hover:rotate-180">▾</span>
                  ) : null}
                </Link>
                {item.children?.length ? (
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-0 mt-1 w-80 max-h-96 rounded-xl bg-white border border-gray-200 shadow-xl p-4 z-20 -translate-y-1 overflow-y-auto">
                    <div className="grid grid-cols-1 gap-4">
                      {item.children.map((child) => (
                        child.children?.length ? (
                          <div key={child.title} className="space-y-2">
                            <div className="text-sm font-semibold text-slate-900 px-2">{child.title}</div>
                            <div className="space-y-1">
                              {child.children.map((sub) => (
                                <Link
                                  key={sub.title}
                                  href={sub.path}
                                  className="block px-2 py-1 rounded-md text-xs md:text-sm text-slate-700 hover:bg-slate-100"
                                >
                                  {sub.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={child.title}
                            href={child.path}
                            className="block px-2 py-1 rounded-md text-xs md:text-sm text-slate-700 hover:bg-slate-100"
                          >
                            {child.title}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="ml-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition duration-300 hover:scale-105"
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

              {menuStructure.map((item) => (
                <div key={item.title}>
                  <button
                    onClick={() => toggleMenu(item.title)}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition flex items-center justify-between"
                  >
                    {item.title}
                    {item.children?.length ? (
                      <span className="text-sm">{openMap[item.title] ? "▲" : "▼"}</span>
                    ) : null}
                  </button>
                  {item.children?.length && openMap[item.title] ? (
                    <div className="pl-4 pb-2 space-y-2">
                      {item.children.map((child) => (
                        child.children?.length ? (
                          <div key={child.title} className="space-y-1">
                            <div className="px-4 py-2 text-sm font-semibold text-slate-900">{child.title}</div>
                            <div className="space-y-1">
                              {child.children.map((sub) => (
                                <Link
                                  key={sub.title}
                                  href={sub.path}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-4 py-2 rounded-lg text-sm text-slate-700 hover:bg-gray-100"
                                >
                                  {sub.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={child.title}
                            href={child.path}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 rounded-lg text-sm text-slate-700 hover:bg-gray-100"
                          >
                            {child.title}
                          </Link>
                        )
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}


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
 