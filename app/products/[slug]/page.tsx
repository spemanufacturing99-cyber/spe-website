"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductGallery from "@/components/ProductGallery";
import { useParams } from "next/navigation";
import { findProductBySlug } from "@/lib/productsData";

interface Product {
  _id?: string;
  slug: string;
  title: string;
  excerpt?: string;
  longDescription?: string[];
  features?: string[];
  specs?: { label: string; value: string }[];
  images?: string[];
}

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fallbackProduct = slug ? findProductBySlug(slug) : null;

    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${slug}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else if (fallbackProduct) {
          setProduct(fallbackProduct);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        if (fallbackProduct) {
          setProduct(fallbackProduct);
        } else {
          setError('Failed to load product');
        }
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    } else {
      setLoading(false);
      setError('Product not found');
    }
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center p-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading product...</p>
        </div>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="min-h-screen flex items-center justify-center p-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Product not found</h2>
          <p className="text-slate-600 mt-3">We couldn't find the product you requested.</p>
          <div className="mt-6">
            <Link href="/products" className="text-blue-600">Back to products</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              {product.title}
            </h1>
            <p className="mt-6 text-gray-300 max-w-lg">
              {product.excerpt || "High-quality fabricated and process equipment designed and manufactured by SPE for industrial applications."}
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="inline-block">
                <motion.span whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center">Request Quote</motion.span>
              </Link>
              <Link href="/products" className="inline-block">
                <motion.span whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} className="px-8 py-3 rounded-lg border-2 border-white text-white text-sm font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center">View All Products</motion.span>
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
              src={product.images && product.images[0] ? product.images[0] : "/precision-metal-chain.png"}
              alt={product.title}
              width={600}
              height={600}
              className="rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= PRODUCT DETAILS ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <div>
              <ProductGallery images={product.images} />
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              {product.longDescription && product.longDescription.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Product Description</h2>
                  <div className="prose max-w-none text-slate-700">
                    {product.longDescription.map((p: string, idx: number) => (
                      <p key={idx} className="mb-4 leading-relaxed">{p}</p>
                    ))}
                  </div>
                </div>
              )}

              {product.features && product.features.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-blue-600 font-bold text-lg mt-1">•</span>
                        <span className="text-slate-700 leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {product.specs && product.specs.length > 0 && (
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Specifications</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {product.specs.map((spec: any, index: number) => (
                      <div key={index} className="flex justify-between py-2 border-b border-slate-100 last:border-b-0">
                        <span className="font-medium text-slate-700">{spec.label}</span>
                        <span className="text-slate-600">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-4 pt-6">
                <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Request Quote
                </Link>
                <Link href="/products" className="inline-block bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                  Back to Products
                </Link>
                <Link href={`/products/${product.slug}/print`} className="inline-block bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                  Download PDF
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
