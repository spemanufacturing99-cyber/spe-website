export interface ServiceData {
  title: string;
  slug: string;
  excerpt: string;
  longDescription?: string[];
  features?: string[];
  specs?: { label: string; value: string }[];
  images?: string[];
}

export const servicesData: ServiceData[] = [
  {
    title: "Project Engineering and Management",
    slug: "project-engineering-and-management",
    excerpt: "End-to-end project engineering and management for EPC projects, from concept through commissioning.",
    longDescription: [
      "At Satnam Process Engineering, Project Engineering and Management is the engine that drives our EPC success.",
      "We don’t just design systems; we engineer the entire project lifecycle. By blending advanced technical expertise with rigorous management frameworks, we ensure that complex designs transition smoothly from the drawing board to the construction site without losing time, inflating costs, or compromising quality."
    ],
    features: ["Project planning and scheduling", "Cost control and procurement", "On-site management and commissioning"],
    images: ["/precision-metal-chain.png"]
  },
  {
    title: "Equipment Manufacturing",
    slug: "equipment-manufacturing",
    excerpt: "Custom process equipment engineered for reliability, efficiency and long-term durability.",
    longDescription: [
      "While the products, chemistries, and regulations vary across the sectors we serve, the fundamental demands of a processing plant remain identical: uncompromising reliability, operational efficiency, and long-term durability.",
      "At Satnam Process Engineering, we apply our deep engineering expertise to design and fabricate custom process equipment that acts as the backbone of your production line. Whether handling explosive chemicals, delicate dairy products, or highly corrosive wastewater, our equipment is engineered to perform flawlessly under pressure."
    ],
    features: ["Custom fabrication", "Material selection and traceability", "Pressure vessel manufacturing"],
    images: ["/the-art-and-science.png"]
  },
  {
    title: "Complete Plant Automation",
    slug: "complete-plant-automation",
    excerpt: "Design and integration of real-time plant automation systems to maximize throughput and reduce errors.",
    longDescription: [
      "In today’s hyper-competitive industrial landscape, real-time data and automated precision are what separate market leaders from the rest.",
      "At Satnam Process Engineering, we design, program, and integrate Complete Plant Automation Solutions that turn isolated machinery into a single, intelligent, and highly synchronized production system. From field sensors to enterprise management, we automate your workflows to maximize throughput, eliminate human error, and drastically reduce operational costs."
    ],
    features: ["PLC/SCADA integration", "MES connectivity", "Control system commissioning"],
    images: ["/automation-plant.png"]
  },
  {
    title: "Turnkey Contracting",
    slug: "turnkey-contracting",
    excerpt: "Single-point accountability for complete project delivery from concept to commissioning.",
    longDescription: [
      "Turnkey Contracting Solutions offer a single point of absolute accountability. We take complete ownership of your project from the initial conceptual sketch right through to final commissioning.",
      "You provide the vision and the site; we deliver a fully operational, high-performing facility ready to generate revenue from day one."
    ],
    features: ["EPC delivery", "Single-point responsibility", "Commissioning and handover"],
    images: ["/turnkey.png"]
  },
  {
    title: "Structural Fabrication",
    slug: "structural-fabrication",
    excerpt: "Heavy and light structural fabrication services using high-grade materials and advanced welding technologies.",
    longDescription: [
      "We provide comprehensive Heavy and Light Structural Fabrication Services designed to withstand extreme industrial environments.",
      "Utilizing high-grade materials, advanced cutting and welding technologies, and rigorous structural engineering, we deliver durable steel components that serve as the safe, solid backbone of your infrastructure."
    ],
    features: ["Steel structures", "Plate and beam fabrication", "Shop and site erection"],
    images: ["/structural-fabrication.png"]
  },
  {
    title: "Maintenance and Technical Support",
    slug: "maintenance-and-technical-support",
    excerpt: "Preventive and corrective maintenance services to keep your operations running at peak efficiency.",
    longDescription: [
      "Our Maintenance and Technical Support Services are designed to eliminate unexpected breakdowns, extend the operational life of your machinery, and ensure your production line runs at maximum efficiency year after year.",
      "We don't just build plants—we keep them running flawlessly."
    ],
    features: ["Preventive maintenance", "Spare parts and servicing", "Remote monitoring and diagnostics"],
    images: ["/maintenance.png"]
  }
];

export function getServiceBySlug(slug: string) {
  return servicesData.find((s) => s.slug === slug);
}

export function getServiceSlugs() {
  return servicesData.map((s) => ({ slug: s.slug }));
}
