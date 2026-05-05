import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Service from '@/models/Service';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    await connectDB();
    let product = await Service.findOne({
      slug,
      category: 'Products'
    }).lean();

    if (!product) {
      product = await Service.findOne({ slug }).lean();
    }

    if (!product) {
      product = await Service.findOne({ slug: { $regex: `^${slug}$`, $options: 'i' } }).lean();
    }

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Convert MongoDB objects to plain objects
    const serializedProduct = {
      ...product,
      _id: product._id.toString(),
      createdAt: product.createdAt?.toISOString(),
    };

    return NextResponse.json(serializedProduct);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
}