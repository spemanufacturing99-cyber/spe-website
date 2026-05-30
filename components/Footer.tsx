import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-white font-bold text-lg">
            Satnam <span className="text-blue-400">Process Engineering</span>
          </h3>
          <p className="mt-4 text-sm">
            Innovating Manufacturing Across Industries
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/project-engineering-and-management">Project Engineering and Management</Link></li>
            <li><Link href="/services/equipment-manufacturing">Equipment Manufacturing</Link></li>
            <li><Link href="/services/complete-plant-automation">Complete Plant Automation</Link></li>
            <li><Link href="/services/turnkey-contracting">Turnkey Contracting</Link></li>
            <li><Link href="/services/structural-fabrication">Structural Fabrication</Link></li>
            <li><Link href="/services/maintenance-and-technical-support">Maintenance & Technical Support</Link></li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Need a Quote?
          </h4>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-6 text-sm">
        © {new Date().getFullYear()} Satnam Process Engineering. All rights reserved.
      </div>
    </footer>
  );
}
