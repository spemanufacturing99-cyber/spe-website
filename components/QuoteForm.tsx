"use client";

import React, { useState, useEffect } from "react";

type Props = {
  service?: string;
};

export default function QuoteForm({ service }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState(service || "");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Toast & feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error' | 'info' | null>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const t = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(t);
    }
  }, [showToast]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setToastMessage(null);
    if (!name || !email || !message) {
      setError("Please fill name, email and message.");
      setToastMessage("Please fill name, email and message.");
      setToastType('error');
      setShowToast(true);
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name,
        email,
        phone,
        company,
        service: selectedService,
        subject: `Quote Request${selectedService ? `: ${selectedService}` : ""}`,
        message,
      };

      // Try the dedicated quote endpoint first
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // Fallback: try saving to contact endpoint if quote endpoint fails (useful when DB isn't configured)
        try {
          const fallback = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              phone,
              company,
              subject: payload.subject,
              message: `${message}\n\n(Fallback saved as contact)`,
            }),
          });

          if (!fallback.ok) {
            const err = await res.json().catch(() => ({}));
            const ferr = await fallback.json().catch(() => ({}));
            throw new Error(err?.error || ferr?.error || "Failed to send quote");
          }

          // fallback succeeded
          setSuccess(true);
          setToastMessage("Quote saved (fallback via contact endpoint). We'll reach out soon.");
          setToastType('success');
          setShowToast(true);
        } catch (fallbackErr: any) {
          throw new Error(fallbackErr?.message || "Failed to send quote and fallback failed");
        }
      } else {
        // primary endpoint succeeded
        setSuccess(true);
        setToastMessage("Quote request submitted. We'll contact you soon.");
        setToastType('success');
        setShowToast(true);
      }

      // clear inputs on success
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setSelectedService(service || "");
      setMessage("");
    } catch (err: any) {
      setError(err.message || "Failed to send quote");
      setToastMessage(err.message || "Failed to send quote");
      setToastType('error');
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 relative">
      {/* Toast */}
      {showToast && toastMessage && (
        <div className={`fixed right-6 top-6 z-50 px-4 py-2 rounded shadow-lg ${toastType === 'success' ? 'bg-green-600 text-white' : toastType === 'error' ? 'bg-red-600 text-white' : 'bg-slate-800 text-white'}`} role="status">
          {toastMessage}
        </div>
      )}

      {success ? (
        <div className="bg-green-50 text-green-800 p-3 rounded">Thanks! Your quote request was submitted. We'll contact you soon.</div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-3">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="px-3 py-2 rounded border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="px-3 py-2 rounded border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400" />
            <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" className="px-3 py-2 rounded border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="px-3 py-2 rounded border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400" />
          </div>

          {!service && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Product Category</label>
              <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Select a category</option>
                <option>Pen Tips</option>
                <option>Refill Components</option>
                <option>Metal Barrels</option>
                <option>Custom Design</option>
              </select>
            </div>
          )}

          {service && (
            <div className="text-sm text-slate-700">Requesting quote for: <strong className="text-slate-900">{service}</strong></div>
          )}

          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Project details, specs, timeline..." rows={4} className="mt-3 w-full px-3 py-2 rounded border border-gray-200 bg-white text-slate-900 placeholder:text-slate-400 resize-none" />

          {error && <div className="text-sm text-red-600">{error}</div>}

          <div className="flex gap-3">
            <button disabled={loading} type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-blue-700 transition flex items-center">
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Quote'
              )}
            </button>
            <button type="button" onClick={() => { setName(''); setEmail(''); setPhone(''); setCompany(''); setSelectedService(service || ''); setMessage(''); setError(null); }} className="border border-gray-300 px-4 py-2 rounded-lg text-slate-700">Reset</button>
          </div>
        </>
      )}
    </form>
  );
}
