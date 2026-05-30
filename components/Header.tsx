"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

type MenuItem = {
  title: string;
  path: string;
  children?: MenuItem[];
};

const menuStructure: MenuItem[] = [
  {
    title: "About us",
    path: "/#",
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
  {
    title: "Business Verticles",
    path: "/business-verticles",
    children: [
      { title: "Beverage Industry", path: "/business-verticles/beverage-industry" },
      { title: "Dairy Industry", path: "/business-verticles/dairy-industry" },
      { title: "Food Industry", path: "/business-verticles/food-industry" },
      { title: "Pharmaceutical Industry", path: "/business-verticles/pharmaceutical-industry" },
      { title: "Chemical Industry", path: "/business-verticles/chemical-industry" },
      { title: "Waste Water Treatment", path: "/business-verticles/waste-water-treatment" },
      { title: "Sugar Industry", path: "/business-verticles/sugar-industry" },
      { title: "Paint Industry", path: "/business-verticles/paint-industry" },
    ],
  },
  {
    title: "Services",
    path: "/services",
    children: [
      { title: "Project Engineering and Management", path: "/services/project-engineering-and-management" },
      { title: "Equipment Manufacturing", path: "/services/equipment-manufacturing" },
      { title: "Complete Plant Automation", path: "/services/complete-plant-automation" },
      { title: "Turnkey Contracting", path: "/services/turnkey-contracting" },
      { title: "Structural Fabrication", path: "/services/structural-fabrication" },
      { title: "Maintenance & Technical Support", path: "/services/maintenance-and-technical-support" },
    ],
  },
  {
    title: "Products",
    path: "/products",
    children: [
      { title: "75M3 Powder Silo", path: "/products/75m3-powder-silo" },
      { title: "Powder Hoppers for Milk Powder Plant", path: "/products/powder-hoppers-for-milk-powder-plant" },
      { title: "Mixing Tank for Beverage", path: "/products/mixing-tank-for-beverage" },
      { title: "Milk Process Tanks and CIP Tanks", path: "/products/milk-process-tanks-and-cip-tanks" },
      { title: "YEAST TANKS", path: "/products/yeast-tanks" },
      { title: "BLANDING TANKS", path: "/products/blanding-tanks" },
      { title: "STORAGE SILO", path: "/products/storage-silo" },
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
      { title: "Portfolio", path: "/portfolio" },
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
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  const toggleMenu = (key: string) => {
    setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isActiveItem = (item: MenuItem) => {
    if (item.path === "/#") {
      return pathname?.startsWith("/about");
    }
    if (item.path === "/") {
      return pathname === "/";
    }
    return pathname === item.path || pathname?.startsWith(`${item.path}/`);
  };

  const isActiveChild = (path: string) => pathname === path || pathname?.startsWith(`${path}/`);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center gap-1">
          <Image
          src="/spe-logo.jpg"
          alt="Satnam Process Engineering"
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
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition ${isActiveItem(item) ? 'bg-blue-600 text-white ring-1 ring-blue-300' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'}`}
                >
                  {item.title}
                  {item.children?.length ? (
                    <span className="text-xs transform transition-transform duration-200 group-hover:rotate-180">▾</span>
                  ) : null}
                </Link>
                {item.children?.length ? (
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-0 mt-1 w-96 max-h-96 rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl p-5 z-20 -translate-y-1 overflow-y-auto">
                    <div className="grid grid-cols-1 gap-4">
                      {item.children.map((child) => (
                        child.children?.length ? (
                          <div key={child.title} className="space-y-2 border-l-2 border-blue-600 pl-3">
                            <div className="text-sm font-semibold text-slate-900">{child.title}</div>
                            <div className="space-y-1">
                              {child.children.map((sub) => (
                                <Link
                                  key={sub.title}
                                  href={sub.path}
                                  className={`block px-3 py-2 rounded-2xl text-xs md:text-sm transition ${isActiveChild(sub.path) ? 'bg-blue-50 text-blue-600 border-l-2 border-blue-600' : 'text-slate-700 hover:bg-slate-100'}`}
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
                            className={`block px-3 py-2 rounded-2xl text-xs md:text-sm transition ${isActiveChild(child.path) ? 'bg-blue-50 text-blue-600 border-l-2 border-blue-600 pl-2' : 'text-slate-700 hover:bg-slate-100'}`}
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
          className="md:hidden text-2xl p-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-xl border border-slate-200 transition"
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
            className="md:hidden bg-white border-t border-slate-200 overflow-hidden shadow-sm"
          >
            <div className="px-4 py-6 space-y-3 border-b border-slate-200">
              <Link
                onClick={() => setMobileOpen(false)}
                href="/"
                className="block px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 transition"
              >
                Home
              </Link>

              {menuStructure.map((item) => (
                <div key={item.title}>
                      <button
                    onClick={() => toggleMenu(item.title)}
                    className={`w-full text-left px-4 py-2 rounded-xl border transition flex items-center justify-between ${isActiveItem(item) ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-800'}`}
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
                            <div className="px-4 py-2 text-sm font-semibold text-slate-900 border-l-2 border-blue-600 pl-3">{child.title}</div>
                            <div className="space-y-1">
                              {child.children.map((sub) => (
                                <Link
                                  key={sub.title}
                                  href={sub.path}
                                  onClick={() => setMobileOpen(false)}
                                  className={`block px-4 py-2 rounded-lg text-sm border-l-2 transition ${isActiveChild(sub.path) ? 'bg-blue-50 text-blue-600 border-blue-600' : 'text-slate-700 hover:bg-gray-100 border-transparent hover:border-slate-300'}`}
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
                            className={`block px-4 py-2 rounded-lg text-sm border-l-2 transition ${isActiveChild(child.path) ? 'bg-blue-50 text-blue-600 border-blue-600' : 'text-slate-700 hover:bg-gray-100 border-transparent hover:border-slate-300'}`}
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
 