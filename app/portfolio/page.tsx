export default function PortfolioPage() {
  const clients = [
    "Nestle India Ltd., Moga, Samalkha & Pant Nagar, Tahaliwal (HP)",
    "Dumex India Pvt. Ltd, Jagraon (Punjab)",
    "GSK Ltd, Nabha (Punjab)",
    "GEA Process Engineering (India) Ltd., Baroda",
    "IDMC Ltd",
    "Mother Dairy",
    "Wockhardt Ltd",
    "PepsiCo International, Channo (Punjab)",
    "Aneja foods Products, Kathua",
    "Sukhjit Starch & Chemicals Ltd., Phagwara (Punjab)",
    "Nijjer Agro Foods Ltd., Amritsar (Punjab)",
    "Pure Foods Ltd., Abohar (Punjab)",
    "Alwar Krone Project, Alwar (Rajasthan)",
    "Ceramica Food Pvt Ltd., Philore (Punjab)",
    "South-Asian Breweries",
    "Supreme Agro foods",
    "STERLING AGRO INDUSTRIES LTD",
    "Nutricia International Pvt. Ltd (Danone)",
    "Nestle Bangladesh Ltd, Bangladesh",
  ];

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_40%)]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <p className="text-xs uppercase font-semibold tracking-[0.2em] text-blue-300">Our Clients</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3">Portfolio</h1>
          <p className="mt-4 text-slate-200 max-w-2xl mx-auto leading-relaxed">
            A selection of our trusted clients and projects across food, dairy, pharmaceuticals, beverage, and agro-industrial manufacturing.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {clients.map((client) => (
              <div key={client} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
                <p className="text-slate-900 font-semibold">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
