"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images }: { images?: string[] }) {
  const imgs = images && images.length > 0 ? images : ['/products/bulk-milk.svg'];
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {imgs.map((src, i) => (
          <button key={src + i} onClick={() => { setIndex(i); setOpen(true); }} className="block rounded overflow-hidden">
            <div className="relative h-32 w-full">
              <Image src={src} alt={`image-${i}`} fill className="object-cover" />
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="max-w-4xl w-full">
            <div className="relative bg-black rounded">
              <button onClick={() => setOpen(false)} className="absolute right-3 top-3 z-40 bg-white/90 rounded-full p-2">✕</button>
              <div className="relative h-[60vh] w-full">
                <Image src={imgs[index]} alt={`large-${index}`} fill className="object-contain" />
              </div>

              {imgs.length > 1 && (
                <div className="flex gap-2 overflow-x-auto p-3 bg-white/5">
                  {imgs.map((s, j) => (
                    <button key={s + j} onClick={() => setIndex(j)} className={`rounded overflow-hidden border ${j === index ? 'ring-2 ring-blue-500' : ''}`}>
                      <div className="relative h-16 w-24">
                        <Image src={s} alt={`thumb-${j}`} fill className="object-cover" />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
