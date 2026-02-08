import React from "react";
import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";
import Image from "next/image";

async function fetchProduct(slug: string) {
  await connectDB();
  return Service.findOne({ slug, category: 'Products' }).lean();
}

export default async function PrintPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await fetchProduct(slug);
  if (!product) return (<main className="p-12">Product not found</main>);

  return (
    <html>
      <head>
        <title>{product.title} — Print</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="max-w-4xl mx-auto p-6 font-sans text-black">
          <h1 style={{fontSize: '28px', marginBottom: '8px'}}>{product.title}</h1>
          <p style={{color: '#444'}}>{product.excerpt}</p>

          {product.images && product.images[0] && (
            <div style={{marginTop: 12, marginBottom:12}}>
              <img src={product.images[0]} alt={product.title} style={{width:'100%', height:'auto'}} />
            </div>
          )}

          <div>
            {product.longDescription && product.longDescription.map((p: string, i: number) => (
              <p key={i} style={{color:'#333'}}>{p}</p>
            ))}
          </div>

          {product.features && (
            <div style={{marginTop:12}}>
              <h3>Key Features</h3>
              <ul>
                {product.features.map((f: string) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          )}

          {product.specs && (
            <div style={{marginTop:12}}>
              <h3>Specifications</h3>
              <table style={{width:'100%', borderCollapse:'collapse'}}>
                <tbody>
                  {product.specs.map((s: any) => (
                    <tr key={s.label}>
                      <td style={{border: '1px solid #ddd', padding:8, width:'40%'}}>{s.label}</td>
                      <td style={{border: '1px solid #ddd', padding:8}}>{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>

        <script dangerouslySetInnerHTML={{ __html: `window.onload = function(){ setTimeout(()=>{ window.print(); }, 300); }` }} />
      </body>
    </html>
  );
}
