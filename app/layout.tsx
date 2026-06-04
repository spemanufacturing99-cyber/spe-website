import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Satnam Process Engineering | Industrial EPC, Fabrication & Automation",
  description:
    "Satnam Process Engineering delivers turnkey industrial fabrication, process equipment, and automation solutions for global process industries.",
};

export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
