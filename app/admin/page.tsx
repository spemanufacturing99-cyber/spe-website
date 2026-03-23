"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type PortfolioInput = {
  title: string;
  slug: string;
  subTitle: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: string;
  bullets: string;
  heroImage: string;
  tags: string;
};

type PortfolioEntry = Omit<PortfolioInput, "metrics" | "bullets" | "tags"> & { 
  _id: string; 
  createdAt: string; 
  updatedAt: string;
  metrics: { label: string; value: string }[];
  bullets: string[];
  tags: string[];
};

type MaterialInput = {
  title: string;
  slug: string;
  shortDescription: string;
  heroImage: string;
  gradesHeading: string;
  gradesSubheading: string;
  grades: string;
  servicesHeading: string;
  relatedServices: string;
};

type MaterialEntry = Omit<MaterialInput, "grades" | "relatedServices"> & {
  _id: string; createdAt: string; updatedAt: string;
  grades: { grade: string; applications: string }[];
  relatedServices: { title: string; link: string; description: string }[];
};

const initialState: PortfolioInput = {
  title: "",
  slug: "",
  subTitle: "",
  industry: "",
  summary: "",
  challenge: "",
  solution: "",
  result: "",
  metrics: "Cost: $0; Duration: 0d",
  bullets: "",
  heroImage: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=1200&q=80",
  tags: "",
};

const initialMaterialState: MaterialInput = {
  title: "",
  slug: "",
  shortDescription: "",
  heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  gradesHeading: "300 Series Including But Not Limited To:",
  gradesSubheading: "",
  grades: "301: Conveyor parts, trailer bodies; 304, 304L: Food & Beverage applications",
  servicesHeading: "Related Services",
  relatedServices: "Stainless Steel Services|/services/stainless-steel|Precision machining for stainless steel parts.",
};

const ADMIN_SECRET = process.env.NEXT_PUBLIC_ADMIN_SECRET || "secret123";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"portfolio" | "materials">("portfolio");
  const [entries, setEntries] = useState<PortfolioEntry[]>([]);
  const [materials, setMaterials] = useState<MaterialEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<PortfolioInput>(initialState);
  const [materialForm, setMaterialForm] = useState<MaterialInput>(initialMaterialState);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [secretInput, setSecretInput] = useState("");

  async function loadEntries() {
    setLoading(true);
    try {
      const res = await fetch("/api/portfolio");
      const json = await res.json();
      setEntries(json.entries || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load portfolio entries.");
    }
    try {
      const resM = await fetch("/api/materials");
      const jsonM = await resM.json();
      setMaterials(jsonM.entries || []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const storedSecret = localStorage.getItem("admin_secret");
    if (storedSecret === ADMIN_SECRET) {
      setIsAuthenticated(true);
      setSecretInput(storedSecret);
      loadEntries();
    }
  }, []);

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    if (secretInput === ADMIN_SECRET) {
      localStorage.setItem("admin_secret", secretInput);
      setIsAuthenticated(true);
      setError(null);
      loadEntries();
    } else {
      setError("Invalid secret key");
    }
  }

  function handleLogout() {
    localStorage.removeItem("admin_secret");
    setIsAuthenticated(false);
    setSecretInput("");
  }

  function setField(field: keyof PortfolioInput, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function setMaterialField(field: keyof MaterialInput, value: string) {
    setMaterialForm((prev) => ({ ...prev, [field]: value }));
  }

  async function submitForm(e: FormEvent) {
    e.preventDefault();
    setMessage(null);
    setError(null);

    if (!form.title.trim() || !form.slug.trim()) {
      setError("Title and slug are required.");
      return;
    }

    const payload = {
      ...form,
      metrics: form.metrics ? form.metrics.split(";").map((part) => {
        const [label, ...valueParts] = part.split(":");
        return { label: label?.trim() || "", value: valueParts.join(":").trim() || "" };
      }).filter(m => m.label) : [],
      bullets: form.bullets ? form.bullets.split(";").map((b) => b.trim()).filter(Boolean) : [],
      tags: form.tags ? form.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
    };

    try {
      const response = await fetch(editingId ? `/api/portfolio/${editingId}` : "/api/portfolio", {
        method: editingId ? "PATCH" : "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${secretInput}`
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Save failed.");
      }
      setMessage(editingId ? "Updated successfully." : "Created successfully.");
      setForm(initialState);
      setEditingId(null);
      await loadEntries();
    } catch (err: any) {
      setError(err?.message || "Error saving entry.");
    }
  }

  async function handleEdit(entry: PortfolioEntry) {
    setEditingId(entry._id);
    setForm({
      title: entry.title,
      slug: entry.slug,
      subTitle: entry.subTitle,
      industry: entry.industry,
      summary: entry.summary,
      challenge: entry.challenge,
      solution: entry.solution,
      result: entry.result,
      metrics: (entry.metrics || []).map((m) => `${m.label}: ${m.value}`).join("; "),
      bullets: Array.isArray(entry.bullets) ? entry.bullets.join("; ") : (entry.bullets || ""),
      heroImage: entry.heroImage || initialState.heroImage,
      tags: Array.isArray(entry.tags) ? entry.tags.join(", ") : (entry.tags || ""),
    });
    setMessage(null);
    setError(null);
  }

  async function submitMaterialForm(e: FormEvent) {
    e.preventDefault();
    setMessage(null);
    setError(null);

    if (!materialForm.title.trim() || !materialForm.slug.trim()) {
      setError("Title and slug are required.");
      return;
    }

    const payload = {
      ...materialForm,
      grades: materialForm.grades ? materialForm.grades.split(";").map((part) => {
        const [grade, ...appParts] = part.split(":");
        return { grade: grade?.trim() || "", applications: appParts.join(":").trim() || "" };
      }).filter(g => g.grade) : [],
      relatedServices: materialForm.relatedServices ? materialForm.relatedServices.split(";").map((part) => {
        const [title, link, description] = part.split("|");
        return { title: title?.trim() || "", link: link?.trim() || "", description: description?.trim() || "" };
      }).filter(s => s.title) : [],
    };

    try {
      const response = await fetch(editingId ? `/api/materials/${editingId}` : "/api/materials", {
        method: editingId ? "PATCH" : "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${secretInput}`
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Save failed.");
      setMessage(editingId ? "Updated successfully." : "Created successfully.");
      setMaterialForm(initialMaterialState);
      setEditingId(null);
      await loadEntries();
    } catch (err: any) {
      setError(err?.message || "Error saving material.");
    }
  }

  async function handleMaterialEdit(entry: MaterialEntry) {
    setEditingId(entry._id);
    setMaterialForm({
      title: entry.title,
      slug: entry.slug,
      shortDescription: entry.shortDescription || "",
      heroImage: entry.heroImage || "",
      gradesHeading: entry.gradesHeading || "",
      gradesSubheading: entry.gradesSubheading || "",
      grades: (entry.grades || []).map((g) => `${g.grade}: ${g.applications}`).join("; "),
      servicesHeading: entry.servicesHeading || "",
      relatedServices: (entry.relatedServices || []).map((s) => `${s.title}|${s.link}|${s.description}`).join("; "),
    });
    setMessage(null);
    setError(null);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this entry?")) return;
    const endpoint = activeTab === "portfolio" ? `/api/portfolio/${id}` : `/api/materials/${id}`;
    try {
      const response = await fetch(endpoint, { 
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${secretInput}`
        }
      });
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Delete failed.");
      }
      await loadEntries();
      setMessage("Deleted successfully.");
      if (editingId === id) {
        setEditingId(null);
        if (activeTab === "portfolio") setForm(initialState);
        else setMaterialForm(initialMaterialState);
      }
    } catch (err: any) {
      setError(err?.message || "Delete failed.");
    }
  }

  const sortedEntries = useMemo(() => [...entries].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()), [entries]);
  const sortedMaterials = useMemo(() => [...materials].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()), [materials]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-5">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl border border-slate-200 shadow-md space-y-4 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-slate-800 text-center">Admin Access</h1>
          {error && <div className="p-3 bg-red-50 text-red-800 border border-red-200 rounded-md text-sm text-center">{error}</div>}
          <input
            type="password"
            value={secretInput}
            onChange={(e) => setSecretInput(e.target.value)}
            placeholder="Enter Admin Secret"
            className="w-full rounded-md border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition">
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-5 md:p-8">
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-600">System Admin</p>
              <h1 className="mt-1 text-2xl md:text-3xl font-bold">Manage Website Content</h1>
            </div>
            <button onClick={handleLogout} className="text-sm bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded transition">
              Lock Panel
            </button>
          </div>
          <div className="flex gap-4 border-b border-slate-200 mt-6">
            <button onClick={() => { setActiveTab("portfolio"); setEditingId(null); setMessage(null); }} className={`pb-2 text-sm font-medium transition ${activeTab === "portfolio" ? "border-b-2 border-blue-600 text-blue-600" : "text-slate-500 hover:text-slate-800"}`}>
              Portfolio Projects
            </button>
            <button onClick={() => { setActiveTab("materials"); setEditingId(null); setMessage(null); }} className={`pb-2 text-sm font-medium transition ${activeTab === "materials" ? "border-b-2 border-blue-600 text-blue-600" : "text-slate-500 hover:text-slate-800"}`}>
              Materials & Grades
            </button>
          </div>
        </div>

        {(message || error) && (
          <div className={`rounded-md p-3 ${message ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"}`}>
            {message || error}
          </div>
        )}

        {activeTab === "portfolio" && (
        <>
        <form onSubmit={submitForm} className="grid gap-3 md:grid-cols-2 bg-white border border-slate-200 rounded-xl p-4 md:p-6">
          <div className="space-y-1">
            <label className="text-sm font-medium">Title</label>
            <input required value={form.title} onChange={(e) => setField("title", e.target.value)} className="w-full rounded-md border border-slate-300 p-2" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Slug</label>
            <input required value={form.slug} onChange={(e) => setField("slug", e.target.value)} className="w-full rounded-md border border-slate-300 p-2" />
          </div>
          <div className="col-span-2 grid gap-3 md:grid-cols-2">
            <div className="space-y-1"><label className="text-sm font-medium">Industry</label><input value={form.industry} onChange={(e) => setField("industry", e.target.value)} className="w-full rounded-md border border-slate-300 p-2" /></div>
            <div className="space-y-1"><label className="text-sm font-medium">Hero Image URL</label><input value={form.heroImage} onChange={(e) => setField("heroImage", e.target.value)} className="w-full rounded-md border border-slate-300 p-2" /></div>
          </div>
          <div className="col-span-2 grid gap-3 md:grid-cols-2">
            <div className="space-y-1"><label className="text-sm font-medium">Sub-title</label><input value={form.subTitle} onChange={(e) => setField("subTitle", e.target.value)} className="w-full rounded-md border border-slate-300 p-2" /></div>
            <div className="space-y-1"><label className="text-sm font-medium">Tags (comma separated)</label><input value={form.tags} onChange={(e) => setField("tags", e.target.value)} className="w-full rounded-md border border-slate-300 p-2" /></div>
          </div>
          <div className="col-span-2 grid gap-3 md:grid-cols-2">
            <div className="space-y-1"><label className="text-sm font-medium">Summary</label><textarea value={form.summary} onChange={(e) => setField("summary", e.target.value)} className="w-full rounded-md border border-slate-300 p-2 h-24"></textarea></div>
            <div className="space-y-1"><label className="text-sm font-medium">Result</label><textarea value={form.result} onChange={(e) => setField("result", e.target.value)} className="w-full rounded-md border border-slate-300 p-2 h-24"></textarea></div>
          </div>
          <div className="col-span-2 grid gap-3 md:grid-cols-2">
            <div className="space-y-1"><label className="text-sm font-medium">Challenge</label><textarea value={form.challenge} onChange={(e) => setField("challenge", e.target.value)} className="w-full rounded-md border border-slate-300 p-2 h-24"></textarea></div>
            <div className="space-y-1"><label className="text-sm font-medium">Solution</label><textarea value={form.solution} onChange={(e) => setField("solution", e.target.value)} className="w-full rounded-md border border-slate-300 p-2 h-24"></textarea></div>
          </div>
          <div className="col-span-2 grid gap-3 md:grid-cols-2">
            <div className="space-y-1"><label className="text-sm font-medium">Metrics (format: label:value; label2:value2)</label><input value={form.metrics} onChange={(e) => setField("metrics", e.target.value)} className="w-full rounded-md border border-slate-300 p-2" /></div>
            <div className="space-y-1"><label className="text-sm font-medium">Bullets (semicolon separated)</label><input value={form.bullets} onChange={(e) => setField("bullets", e.target.value)} className="w-full rounded-md border border-slate-300 p-2" /></div>
          </div>
          <div className="col-span-2 flex gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" type="submit">{editingId ? "Update" : "Create"} Portfolio Item</button>
            <button type="button" className="border border-slate-300 px-4 py-2 rounded" onClick={() => { setForm(initialState); setEditingId(null); setMessage(null); setError(null); }}>Reset</button>
          </div>
        </form>

        <section className="bg-white border border-slate-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Existing entries ({sortedEntries.length})</h2>
            <button onClick={loadEntries} className="text-sm border border-blue-500 text-blue-600 px-3 py-1 rounded hover:bg-blue-50">Refresh</button>
          </div>
          {loading ? (
            <p className="text-slate-600">Loading entries…</p>
          ) : sortedEntries.length === 0 ? (
            <p className="text-slate-600">No portfolio entries yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-600"><tr><th className="p-2 font-semibold">Title</th><th className="p-2 font-semibold">Slug</th><th className="p-2 font-semibold">Updated</th><th className="p-2 font-semibold">Actions</th></tr></thead>
                <tbody>
                  {sortedEntries.map((entry) => (
                    <tr key={entry._id} className="border-b last:border-b-0 odd:bg-white even:bg-slate-50">
                      <td className="p-2">{entry.title}</td>
                      <td className="p-2"><code className="bg-slate-100 px-1 rounded">{entry.slug}</code></td>
                      <td className="p-2">{new Date(entry.updatedAt).toLocaleString()}</td>
                      <td className="p-2 flex gap-2">
                        <button onClick={() => handleEdit(entry)} className="text-xs px-2 py-1 rounded bg-amber-100 border border-amber-300 text-amber-700">Edit</button>
                        <button onClick={() => handleDelete(entry._id)} className="text-xs px-2 py-1 rounded bg-red-100 border border-red-300 text-red-700">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
        </>
        )}

        {activeTab === "materials" && (
        <>
        <form onSubmit={submitMaterialForm} className="grid gap-3 md:grid-cols-2 bg-white border border-slate-200 rounded-xl p-4 md:p-6">
          <div className="space-y-1"><label className="text-sm font-medium">Material Title (e.g., Stainless Steel Parts Fabricator)</label><input required value={materialForm.title} onChange={(e) => setMaterialField("title", e.target.value)} className="w-full rounded-md border border-slate-300 p-2" /></div>
          <div className="space-y-1"><label className="text-sm font-medium">Slug (e.g., stainless-steel)</label><input required value={materialForm.slug} onChange={(e) => setMaterialField("slug", e.target.value)} className="w-full rounded-md border border-slate-300 p-2" /></div>
          <div className="col-span-2 space-y-1"><label className="text-sm font-medium">Hero Image URL</label><input value={materialForm.heroImage} onChange={(e) => setMaterialField("heroImage", e.target.value)} className="w-full rounded-md border border-slate-300 p-2" /></div>
          <div className="col-span-2 space-y-1"><label className="text-sm font-medium">Short Description</label><textarea value={materialForm.shortDescription} onChange={(e) => setMaterialField("shortDescription", e.target.value)} className="w-full rounded-md border border-slate-300 p-2 h-20"></textarea></div>
          
          <div className="space-y-1"><label className="text-sm font-medium">Grades Heading</label><input value={materialForm.gradesHeading} onChange={(e) => setMaterialField("gradesHeading", e.target.value)} className="w-full rounded-md border border-slate-300 p-2" /></div>
          <div className="space-y-1"><label className="text-sm font-medium">Services Heading</label><input value={materialForm.servicesHeading} onChange={(e) => setMaterialField("servicesHeading", e.target.value)} className="w-full rounded-md border border-slate-300 p-2" /></div>
          
          <div className="col-span-2 space-y-1"><label className="text-sm font-medium">Grades Subheading</label><textarea value={materialForm.gradesSubheading} onChange={(e) => setMaterialField("gradesSubheading", e.target.value)} className="w-full rounded-md border border-slate-300 p-2 h-16"></textarea></div>
          <div className="col-span-2 space-y-1"><label className="text-sm font-medium">Grades List (Format: Grade: Applications; Grade2: Applications2)</label><textarea value={materialForm.grades} onChange={(e) => setMaterialField("grades", e.target.value)} className="w-full rounded-md border border-slate-300 p-2 h-20" placeholder="301: Conveyor parts; 304: Food applications"></textarea></div>
          <div className="col-span-2 space-y-1"><label className="text-sm font-medium">Related Services (Format: Title|LinkUrl|Description; Title2|LinkUrl2|Desc2)</label><textarea value={materialForm.relatedServices} onChange={(e) => setMaterialField("relatedServices", e.target.value)} className="w-full rounded-md border border-slate-300 p-2 h-20" placeholder="Stainless Steel Services|/services/stainless-steel|We weld steel."></textarea></div>
          
          <div className="col-span-2 flex gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" type="submit">{editingId ? "Update" : "Create"} Material</button>
            <button type="button" className="border border-slate-300 px-4 py-2 rounded" onClick={() => { setMaterialForm(initialMaterialState); setEditingId(null); setMessage(null); setError(null); }}>Reset</button>
          </div>
        </form>

        <section className="bg-white border border-slate-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Existing Materials ({sortedMaterials.length})</h2>
            <button onClick={loadEntries} className="text-sm border border-blue-500 text-blue-600 px-3 py-1 rounded hover:bg-blue-50">Refresh</button>
          </div>
          {loading ? (
            <p className="text-slate-600">Loading entries…</p>
          ) : sortedMaterials.length === 0 ? (
            <p className="text-slate-600">No materials yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-600"><tr><th className="p-2 font-semibold">Title</th><th className="p-2 font-semibold">Slug</th><th className="p-2 font-semibold">Updated</th><th className="p-2 font-semibold">Actions</th></tr></thead>
                <tbody>
                  {sortedMaterials.map((entry) => (
                    <tr key={entry._id} className="border-b last:border-b-0 odd:bg-white even:bg-slate-50">
                      <td className="p-2">{entry.title}</td>
                      <td className="p-2"><code className="bg-slate-100 px-1 rounded">{entry.slug}</code></td>
                      <td className="p-2">{new Date(entry.updatedAt).toLocaleString()}</td>
                      <td className="p-2 flex gap-2">
                        <button onClick={() => handleMaterialEdit(entry)} className="text-xs px-2 py-1 rounded bg-amber-100 border border-amber-300 text-amber-700">Edit</button>
                        <button onClick={() => handleDelete(entry._id)} className="text-xs px-2 py-1 rounded bg-red-100 border border-red-300 text-red-700">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
        </>
        )}
      </div>
    </div>
  );
}
