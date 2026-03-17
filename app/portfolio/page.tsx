export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs uppercase font-semibold tracking-[0.2em] text-blue-600">Our Showcase</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-slate-900">Portfolio</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Explore our completed projects and product success stories across industries.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-800">Industrial Process Installations</h2>
            <p className="mt-2 text-slate-600">Turnkey fabrication and installation for chemical, food, and energy facilities.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-800">Custom OEM Systems</h2>
            <p className="mt-2 text-slate-600">Custom-designed precision components delivered with strict QA and timelines.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-800">Large Format Fabrication</h2>
            <p className="mt-2 text-slate-600">Heavy metal fabrication and assembly for turnkey plant equipment.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-800">Quality & Compliance</h2>
            <p className="mt-2 text-slate-600">Projects delivered with full compliance to client specs and industrial standards.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
