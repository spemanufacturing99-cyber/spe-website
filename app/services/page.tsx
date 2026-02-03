import React from "react";
import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";
import Image from "next/image";
import Link from "next/link";
import ServicesClient from "@/components/ServicesClient";

async function fetchServices() {
  await connectDB();
  return Service.find().sort({ createdAt: -1 }).lean();
}

export default async function ServicesPage() {
  const services = await fetchServices();

  // Build categories from service.category
  const categoriesMap: Record<string, any> = {};
  services.forEach((s: any) => {
    if (!categoriesMap[s.category]) categoriesMap[s.category] = { id: s.category.toLowerCase().replace(/\s+/g, "-"), name: s.category, description: "", image: s.images?.[0] || "/precision-metal-chain.png", services: [] };
    categoriesMap[s.category].services.push({ title: s.title, slug: s.slug, excerpt: s.excerpt });
  });

  const categories = Object.values(categoriesMap);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <ServicesClient categories={JSON.parse(JSON.stringify(categories))} />
      </div>
    </main>
  );
}
