"use client";

import QuoteForm from "./QuoteForm";

type PortfolioProjectItem = {
  title: string;
  subTitle?: string;
  industry?: string;
  summary?: string;
  challenge?: string;
  solution?: string;
  result?: string;
  metrics?: Array<{ label: string; value: string }>;
  bullets?: string[];
  heroImage?: string;
  tags?: string[];
};

type Props = {
  item: PortfolioProjectItem;
};

export default function PortfolioProject({ item }: Props) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <section className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white">
          <div
            className="h-72 md:h-96 bg-cover bg-center relative"
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.65)), url('${item.heroImage}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/0 to-black/60"></div>
            <div className="absolute bottom-0 p-6 md:p-10 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-100/80">Portfolio Case Study</p>
              <h1 className="mt-2 text-3xl md:text-5xl font-bold leading-tight">{item.title}</h1>
              <p className="mt-2 text-sm md:text-base max-w-2xl text-slate-100/90">{item.subTitle}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.industry && <span className="text-xs font-medium uppercase tracking-wider bg-slate-800/80 px-2 py-1 rounded text-slate-100">{item.industry}</span>}
                {(item.tags || []).map((tag) => (
                  <span key={tag} className="text-xs font-medium uppercase tracking-wider bg-white/10 px-2 py-1 rounded border border-white/20">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <p className="text-slate-700 text-base md:text-lg">{item.summary}</p>

            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-xl p-4 bg-slate-100 border border-slate-200">
                <p className="text-xs uppercase text-slate-500 font-semibold">Challenge</p>
                <p className="mt-2 text-sm text-slate-700">{item.challenge}</p>
              </article>
              <article className="rounded-xl p-4 bg-slate-100 border border-slate-200">
                <p className="text-xs uppercase text-slate-500 font-semibold">Solution</p>
                <p className="mt-2 text-sm text-slate-700">{item.solution}</p>
              </article>
              <article className="rounded-xl p-4 bg-slate-100 border border-slate-200">
                <p className="text-xs uppercase text-slate-500 font-semibold">Result</p>
                <p className="mt-2 text-sm text-slate-700">{item.result}</p>
              </article>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {(item.metrics || []).map((metric) => (
                <div key={`${metric.label}-${metric.value}`} className="rounded-xl border border-slate-200 bg-white p-3">
                  <p className="text-xs uppercase text-slate-500">{metric.label}</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h2 className="font-semibold text-slate-800 text-lg">What we delivered</h2>
              <ul className="mt-3 list-disc list-inside space-y-2 text-slate-700">
                {(item.bullets || []).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm md:text-base text-blue-700 font-semibold">Have an industrial project with similar goals? Get a quote below.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-6">
              <h3 className="text-xl font-bold">Request a quote</h3>
              <p className="mt-1 text-sm text-slate-600">Fast quote for your next fabrication or custom manufacturing project.</p>
              <QuoteForm service={item.title} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
