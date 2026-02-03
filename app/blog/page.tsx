"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Flight: PEN Manufacturing's Contributions to Aerospace R&D",
    excerpt: "Discover how our precision pen manufacturing is revolutionizing aerospace research and development with cutting-edge precision instruments.",
    category: "Innovation",
    date: "January 28, 2026",
    image: "/the-art-and-science.png",
    featured: true,
  },
  {
    id: 2,
    title: "Understanding Deburring: Why It's Essential in Manufacturing",
    excerpt: "A comprehensive guide to deburring processes and their critical role in achieving superior pen manufacturing quality.",
    category: "Manufacturing",
    date: "January 25, 2026",
    image: "/certified-welding.png",
    featured: true,
  },
  {
    id: 3,
    title: "The Art and Science of Plating: A Guide to Metal Coatings in Manufacturing",
    excerpt: "Explore the advanced plating techniques used in modern pen manufacturing to achieve stunning finishes and durability.",
    category: "Technology",
    date: "January 22, 2026",
    image: "/precision-metal-chain.png",
    featured: true,
  },
  {
    id: 4,
    title: "Sustainable Manufacturing: Eco-Friendly Practices in Pen Production",
    excerpt: "Learn about our commitment to sustainable and environmentally responsible manufacturing practices.",
    category: "Sustainability",
    date: "January 20, 2026",
    image: "/certified-welding.png",
    featured: false,
  },
  {
    id: 5,
    title: "Quality Control Excellence: Our 98.9% Rating Explained",
    excerpt: "Understand the rigorous quality assurance processes that ensure every pen meets our exacting standards.",
    category: "Quality",
    date: "January 18, 2026",
    image: "/the-art-and-science.png",
    featured: false,
  },
  {
    id: 6,
    title: "Custom OEM Solutions: Tailoring Pens to Your Brand",
    excerpt: "Explore how we work with brands to create custom, unique pen designs that reflect their identity.",
    category: "OEM",
    date: "January 15, 2026",
    image: "/precision-metal-chain.png",
    featured: false,
  },
];

const categories = ["All", "Innovation", "Manufacturing", "Technology", "Sustainability", "Quality", "OEM"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error' | 'info' | null>(null);
  const [showToast, setShowToast] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      setToastMessage('Please enter your email');
      setToastType('error');
      setShowToast(true);
      return;
    }

    setLoading(true);
    // Simulate async subscribe
    setTimeout(() => {
      setLoading(false);
      setShowToast(true);
      setToastMessage('Subscribed! You will receive updates.');
      setToastType('success');
      setEmail('');
    }, 1000);
  }

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <main className="min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1553062407-98eeb64c6a62')",
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
            Industry Insights & <span className="text-blue-400">Innovation Stories</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest trends, technologies, and insights in precision pen manufacturing.
          </p>
        </motion.div>
      </section>

      {/* ================= SEARCH & FILTER ================= */}
      <section className="py-12 bg-white border-b sticky top-20 z-40">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Search Bar */}
            <div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURED ARTICLES ================= */}
      {selectedCategory === "All" && searchTerm === "" && (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8"
            >
              Featured Articles
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <motion.a
                      whileHover={{ x: 4 }}
                      href="#"
                      className="inline-block text-blue-600 font-semibold text-sm hover:text-blue-700"
                    >
                      Read More →
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= ALL ARTICLES ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-8"
              >
                {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <motion.a
                        whileHover={{ x: 4 }}
                        href="#"
                        className="inline-block text-blue-600 font-semibold text-sm hover:text-blue-700"
                      >
                        Read More →
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                No articles found. Try adjusting your search or filters.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our newsletter for the latest insights and updates in pen manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubscribe}
              disabled={loading}
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4 mr-2 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"></path>
                  </svg>
                  Subscribing...
                </>
              ) : (
                'Subscribe'
              )}
            </motion.button>
          </div>

          {showToast && toastMessage && (
            <div className={`fixed right-6 top-6 z-50 px-4 py-2 rounded shadow-lg ${toastType === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>{toastMessage}</div>
          )}
        </motion.div>
      </section>
    </main>
  );
}
