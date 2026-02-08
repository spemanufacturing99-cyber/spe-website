import React from "react";
import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";
import Image from "next/image";
import Link from "next/link";
import ProductGallery from "@/components/ProductGallery";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  await connectDB();
  let doc = await Service.findOne({ slug, category: 'Products' }).lean();
  if (!doc) {
    // Case-insensitive fallback
    doc = await Service.findOne({ slug: { $regex: `^${slug}$`, $options: 'i' }, category: 'Products' }).lean();
  }
  if (!doc) return { title: 'Product — SPE' };
  return {
    title: doc.title,
    description: doc.excerpt || doc.longDescription?.[0] || '',
    openGraph: {
      title: doc.title,
      description: doc.excerpt || '',
      images: doc.images && doc.images.length > 0 ? [doc.images[0]] : undefined,
    }
  };
}

type Props = { params: Promise<{ slug: string }> };

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  await connectDB();
  console.log('[ProductPage] Looking for slug:', slug);
  let product = await Service.findOne({ slug, category: 'Products' }).lean();
  console.log('[ProductPage] Found by exact match:', !!product);
  if (!product) {
    // Case-insensitive fallback
    product = await Service.findOne({ slug: { $regex: `^${slug}$`, $options: 'i' }, category: 'Products' }).lean();
    console.log('[ProductPage] Found by regex:', !!product);
  }

  if (!product) {
    console.log('[ProductPage] No product found, returning 404');
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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-slate-600 mt-2">{product.excerpt}</p>
        </header>

        <div className="mb-6">
          <ProductGallery images={product.images} />
        </div>

        <section className="prose max-w-none">
          {product.longDescription && product.longDescription.map((p: string, idx: number) => (
            <p key={idx} className="text-slate-700">{p}</p>
          ))}
        </section>

        {product.features && product.features.length > 0 && (
          <div className="mt-8">
            <h3 className="font-semibold text-xl mb-3">Key Features</h3>
            <ul className="list-disc ml-6 text-slate-700 space-y-2">
              {product.features.map((f: string) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        )}

        {product.specs && product.specs.length > 0 && (
          <div className="mt-8 bg-white p-4 rounded-xl shadow">
            <h4 className="font-semibold mb-3">Specifications</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {product.specs.map((s: any) => (
                <div key={s.label} className="text-sm text-slate-700">
                  <div className="font-medium">{s.label}</div>
                  <div className="text-slate-600">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 flex gap-4">
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg font-medium">Request Quote</Link>
          <Link href="/products" className="inline-block text-slate-600 px-4 py-3 rounded-lg">Back to products</Link>
          <Link href={`/products/${product.slug}/print`} className="inline-block bg-slate-100 text-slate-800 px-4 py-3 rounded-lg">Download / Print (PDF)</Link>
        </div>
      </div>
    </main>
  );
}
