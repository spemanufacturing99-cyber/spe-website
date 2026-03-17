export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs uppercase font-semibold tracking-[0.2em] text-blue-600">Join Our Team</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-slate-900">Careers</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            We’re hiring skilled professionals in fabrication, engineering, quality, and operations.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-800">Open Positions</h2>
            <ul className="mt-3 list-disc list-inside text-slate-600">
              <li>Fabrication Engineer</li>
              <li>Welding Supervisor</li>
              <li>Quality Control Inspector</li>
              <li>Project Coordinator</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-800">Why Work With Us</h2>
            <p className="mt-2 text-slate-600">Competitive pay, safe environment, growth opportunities, and a performance-driven culture.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-200 md:col-span-2">
            <h2 className="text-xl font-semibold text-slate-800">Apply Today</h2>
            <p className="mt-2 text-slate-600">Send your CV and a brief introduction to <a href="mailto:careers@penwebsite.com" className="text-blue-600 underline">careers@penwebsite.com</a>.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
