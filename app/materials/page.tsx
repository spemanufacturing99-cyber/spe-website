export default function MaterialsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs uppercase font-semibold tracking-[0.2em] text-blue-600">Materials Expertise</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-slate-900">Materials</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            High-grade steel, alloys, and engineered materials for precision manufacturing.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-800">Stainless Steel Fabrication</h2>
            <p className="mt-2 text-slate-600">Premium 304/316 stainless materials for long-life equipment.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-800">Carbon Steel & Alloys</h2>
            <p className="mt-2 text-slate-600">Robust engineering-grade materials for heavy structural applications.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-800">Coatings & Finishes</h2>
            <p className="mt-2 text-slate-600">Superior finishing, corrosion protection, and surface treatment services.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-800">Supplier Network</h2>
            <p className="mt-2 text-slate-600">Reliable supply chain with quality-tested raw materials.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
