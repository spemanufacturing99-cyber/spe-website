export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs uppercase font-semibold tracking-[0.2em] text-blue-600">Industry Focus</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-slate-900">Industries</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Trusted partners for fabrication and turnkey projects across multiple industries.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-800">Pharma & Food</h2>
            <p className="mt-2 text-slate-600">Hygienic process equipment and systems for pharma and food sectors.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-800">Chemical & Petrochemical</h2>
            <p className="mt-2 text-slate-600">High-quality pressure vessels and piping for chemical plants.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-800">Energy & Power</h2>
            <p className="mt-2 text-slate-600">Mechanical fabrication and system integration for power applications.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-800">Infrastructure</h2>
            <p className="mt-2 text-slate-600">Structural, industrial, and process civil support solutions.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
