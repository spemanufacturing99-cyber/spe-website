import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Service from '@/models/Service';

export async function GET() {
  try {
    await connectDB();
    const products = await Service.find({ category: 'Products' }).sort({ createdAt: -1 }).lean();

    // Convert MongoDB objects to plain objects
    const serializedProducts = products.map(product => ({
      ...product,
      _id: product._id.toString(),
      createdAt: product.createdAt?.toISOString(),
    }));

    return NextResponse.json(serializedProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}