export type PortfolioItem = {
  slug: string;
  title: string;
  subTitle: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: Array<{ label: string; value: string }>;
  bullets: string[];
  heroImage: string;
  tags: string[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "angel-stadium-of-anaheim",
    title: "Angel Stadium of Anaheim",
    subTitle: "Stainless-steel architectural fabrication for high-impact public spaces.",
    industry: "Sports & Facilities",
    summary:
      "Delivered precision-fit extruded stainless-steel handrails, balustrades, and maintenance access structures for stadium retrofit and crowd-flow improvements.",
    challenge:
      "Tight tolerances on curved handrails and complex mounting interfaces while minimizing schedule impact during the off-season.",
    solution:
      "Rapid 3D scanning of existing sections, prefabrication in our shop, and phased field installation with engineered anchors for code-compliance.",
    result:
      "Project completed in 8 weeks with zero rework, improved ADA access, and clients reported 30% faster installation time compared to prior vendors.",
    metrics: [
      { label: "Project Value", value: "$580K" },
      { label: "Fabrication", value: "Stainless Steel 304" },
      { label: "Lead Time", value: "8 weeks" },
      { label: "Quality", value: "AISC + ASTM" },
    ],
    bullets: [
      "Precision plasma cutting and CNC bending for curved sections.",
      "Welded assemblies with mirror-bright finish.",
      "Integrated field support and on-site QA checklists.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=1200&q=80",
    tags: ["Stainless Steel", "Architectural", "Stadium"],
  },
  {
    slug: "hyperloop-test-sled",
    title: "Hyperloop Test Sled",
    subTitle: "High-speed prototype test sled for next-gen transportation research.",
    industry: "Transportation Engineering",
    summary:
      "Engineered a modular, high-strength alloy sled and structural frame for linear test tracks, supporting instrumentation, hydraulics, and safety systems.",
    challenge:
      "Built to withstand dynamic loads over 700 km/h equivalent while keeping net mass under 2,000 kg.",
    solution:
      "Used AR-grade aluminum alloys, integrated finite element analysis, and precision welded subassemblies with modular fasteners.",
    result:
      "Delivered a successful first full-speed test run with all sensors intact and visual inspection showing <1 mm deformation margin.",
    metrics: [
      { label: "Top Speed" , value: "430 km/h"},
      { label: "Mass", value: "1,850 kg" },
      { label: "Tests", value: "12 full cycles" },
      { label: "Tolerance", value: "±0.2 mm" },
    ],
    bullets: [
      "Custom structural joining for rail-mounted test sled.",
      "Integrated cable harness and safety enclosure.",
      "Fast iterative production for 3 rapid prototype revisions.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
    tags: ["Aerospace", "High-Speed", "Prototype"],
  },
  {
    slug: "caltech",
    title: "Caltech Research Facility Upgrade",
    subTitle: "Precision lab equipment and custom chemical process skids.",
    industry: "Scientific Research",
    summary:
      "Built custom stainless-steel reactors and containment skids for advanced materials research, complete with instrumentation mounts and modular connections.",
    challenge:
      "Corrosion-resistant fabrication with clean-room compatibility and tight leak thresholds.",
    solution:
      "Applied electropolishing, precision TIG welding, and validated leak testing per lab standards.",
    result:
      "Delivered all key assemblies ahead of schedule; lab team reported immediate uptime with zero maintenance issues during first 6 months.",
    metrics: [
      { label: "Assemblies", value: "9 skids" },
      { label: "Material", value: "316L Stainless" },
      { label: "Delivery", value: "2 months" },
      { label: "Tests", value: "100% leak tested" },
    ],
    bullets: [
      "Modular connection blocks for quick reconfiguration.",
      "Compliance with lab safety and chemical handling protocols.",
      "Detailed as-built documentation and CAD records.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    tags: ["Research", "Stainless", "Process Skids"],
  },
  {
    slug: "bio-boxes-clarifiers",
    title: "Bio Boxes & Clarifiers",
    subTitle: "Custom wastewater clarifier systems for sustainability plants.",
    industry: "Water Treatment",
    summary:
      "Delivered custom clarifier boxes, baffles, and process housing using corrosion-resistant alloys for municipal and industrial wastewater treatment.",
    challenge:
      "Ensuring chemical resistance and structural integrity for continuous operation in aggressive environments.",
    solution:
      "Fabricated using grade-specific stainless alloys with full passivation and rigid assembly jigs for quality consistency.",
    result:
      "Installed units achieved >95% solids separation efficiency and reduced maintenance downtime by 28%.",
    metrics: [
      { label: "Capacity", value: "260 m3/day" },
      { label: "Material", value: "316L" },
      { label: "Duration", value: "12 weeks" },
      { label: "Efficiency", value: ">95%" },
    ],
    bullets: [
      "Optimized flow distribution using CFD-informed inlet design.",
      "Welded leak-tight clarifier tanks with certified QA.",
      "Turnkey delivery with commissioning support.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1471139672879-acc0f948ad90?auto=format&fit=crop&w=1200&q=80",
    tags: ["Wastewater", "Clarifier", "Engineering"],
  },
  {
    slug: "biomixers",
    title: "Biomixers",
    subTitle: "Precision mixing vessels for bio-process production.",
    industry: "Life Sciences",
    summary:
      "Built custom biomixer vessels, support skids, and agitation systems with hygienic finish and instrumentation mount points.",
    challenge:
      "Avoid contamination pathways while meeting strict surface finish and weld requirements.",
    solution:
      "Used electropolished internal surfaces, sanitary fittings, and validated welding processes.",
    result:
      "Client achieved required batch consistency and improved production throughput by 20%.",
    metrics: [
      { label: "Vessel Size", value: "2,500 L" },
      { label: "Finish", value: "RA 0.8 µm" },
      { label: "Cycle", value: "24-hour" },
      { label: "Validation", value: "FDA-grade" },
    ],
    bullets: [
      "Hygienic tri-clamp connections and CIP-ready design.",
      "Tested torque and speed match to lab specs.",
      "Complete documentation for production handoff.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    tags: ["Bio", "Hygienic", "Mixing"],
  },
  {
    slug: "trac-projects",
    title: "Trac Projects",
    subTitle: "Heavy fabrication for tracked transportation assemblies.",
    industry: "Industrial Mobility",
    summary:
      "Delivered high-strength track frames, tensioning arms, and welded carriages for rugged industrial vehicles.",
    challenge:
      "High fatigue loads and precision alignment over long welded assemblies.",
    solution:
      "Applied plate preheat, jigs, and precision machining for critical mounting surfaces.",
    result:
      "Field tests passed 2x expected duty cycle with no joint failure.",
    metrics: [
      { label: "Yield", value: "1,200 MPa" },
      { label: "Cycles", value: "6,000+" },
      { label: "Delivery", value: "10 weeks" },
      { label: "QA", value: "ISO-9001" },
    ],
    bullets: [
      "Laser cut high-strength armor plates.",
      "Precision bore alignment for drive components.",
      "Field calibration support for final assembly.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Heavy Industry", "Tracks", "Welding"],
  },
  {
    slug: "stonemills",
    title: "Stone Mills",
    subTitle: "Custom feed and milling equipment for agricultural operations.",
    industry: "Agriculture",
    summary:
      "Fabricated robust stainless-steel hoppers, conveyors, and sifter frames for high-volume milling lines.",
    challenge:
      "Design needed corrosion resistance and precise feed rates under abrasive conditions.",
    solution:
      "Used abrasion-resistant surfaces, modular sliding guides, and replaceable wear liners.",
    result:
      "Operators reported 15% higher throughput with lower maintenance frequency.",
    metrics: [
      { label: "Throughput", value: "22 T/day" },
      { label: "Material", value: "SS 316" },
      { label: "Warranty", value: "12 months" },
      { label: "Support", value: "On-site" },
    ],
    bullets: [
      "Integrated bulk feed system with level sensors.",
      "Welded structural frames and precision rollers.",
      "On-site startup and operator training.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1448302865648-3f1a56b7f0df?auto=format&fit=crop&w=1200&q=80",
    tags: ["Agriculture", "Milling", "Fabrication"],
  },
  {
    slug: "ss-tracks",
    title: "SS Tracks",
    subTitle: "Stainless-steel tracks and rollers for cleanroom transport lines.",
    industry: "Clean Manufacturing",
    summary:
      "Used precision formed stainless-steel track profiles and friction-minimized rollers for reliable automated material handling.",
    challenge:
      "Ultra-high tolerance alignment with low particle generation.",
    solution:
      "Polished track surfaces, sealed bearings, and precision jigs during assembly.",
    result:
      "Clients observed stable transport throughput with near-zero jam events.",
    metrics: [
      { label: "Tolerance", value: "±0.15 mm" },
      { label: "Clean Class", value: "ISO 7" },
      { label: "Length", value: "20 m" },
      { label: "Install", value: "3 days" },
    ],
    bullets: [
      "Welded assemblies ultrasonically cleaned.",
      "Precision roller spacing for smooth motion.",
      "Detailed as-built documentation for maintenance.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=1200&q=80",
    tags: ["Automation", "Transport", "Cleanroom"],
  },
  {
    slug: "ss-products",
    title: "SS Products",
    subTitle: "High-precision stainless-steel parts for OEM product lines.",
    industry: "OEM Manufacturing",
    summary:
      "Delivered batch production of machined and welded stainless-steel subassemblies with ISO quality controls.",
    challenge:
      "Mix of tight tolerance machining and large-step weld assembly in one line.",
    solution:
      "Matched CNC machining with in-house welding and finish operations under centralized QA.",
    result:
      "Delivery on time for product launch; zero part failure in first production run.",
    metrics: [
      { label: "Batch Size", value: "4,000 pcs" },
      { label: "Precision", value: "±0.05 mm" },
      { label: "Finish", value: "Brushed" },
      { label: "Compliance", value: "RoHS" },
    ],
    bullets: [
      "CNC turning and milling matched to welding fixtures.",
      "In-line inspection with CMM checks.",
      "Just-in-time kitting and packing.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    tags: ["OEM", "Parts", "Quality"],
  },
  {
    slug: "ss-tanks",
    title: "SS Tanks",
    subTitle: "Custom storage and process tanks for industrial fluids.",
    industry: "Process Equipment",
    summary:
      "Fabricated pressure-rated stainless-steel tanks with supports, nozzles, and access manways to client-specific process conditions.",
    challenge:
      "High-pressure requirements and multi-fluid compatibility with weld integrity.",
    solution:
      "Implemented controlled weld procedure, NDT inspection, and passivation for corrosion resistance.",
    result:
      "Delivered certified units that passed client pressure and hydrostatic acceptance tests.",
    metrics: [
      { label: "Volume", value: "12,000 L" },
      { label: "Pressure", value: "2.5 bar" },
      { label: "Inspection", value: "PT & UT" },
      { label: "Finish", value: "Matt" },
    ],
    bullets: [
      "Custom nozzle layout for piping integration.",
      "Pressure hold test and validation reports.",
      "Factory acceptance test with field support.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tags: ["Tanks", "Pressure", "Stainless"],
  },
  {
    slug: "rodder",
    title: "Rodder",
    subTitle: "Precision rodder frame and guide system for hydraulic installations.",
    industry: "Maintenance Equipment",
    summary:
      "Built a high-strength rodder and guide assembly for industrial pipeline cleaning and inspection.",
    challenge:
      "Required rigid alignment over long spans and easy assembly/disassembly in field.",
    solution:
      "Designed modular sections with quick-coupler joints and fatigue-resistant welds.",
    result:
      "Used successfully in multiple planned maintenance campaigns and reduced downtime by 18%.",
    metrics: [
      { label: "Length", value: "9 m" },
      { label: "Weight", value: "210 kg" },
      { label: "Cycle", value: "100,000+" },
      { label: "Maintenance", value: "Quarterly" },
    ],
    bullets: [
      "Hard-faced wear surfaces and modular tooling.",
      "Corrosion-resistant finish for field reliability.",
      "Works with standard hydraulic rigs.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    tags: ["Field Equipment", "Hydraulic", "Maintenance"],
  },
  {
    slug: "grating-project",
    title: "Grating Project",
    subTitle: "Large-area structural grating and access platforms.",
    industry: "Construction",
    summary:
      "Fabricated walkways, access platforms, and drainage grating for chemical and manufacturing plants.",
    challenge:
      "Complex custom perimeter cuts and heavy load ratings for equipment access.",
    solution:
      "Used pre-engineered load-rated grating systems with field-fit anchor systems and powder coat finish.",
    result:
      "Completed within budget; client replaced old unsafe platforms with modern code-compliant systems.",
    metrics: [
      { label: "Area", value: "1,400 m²" },
      { label: "Load", value: "5 kN/m²" },
      { label: "Finish", value: "Galvanized" },
      { label: "Schedule", value: "6 weeks" },
    ],
    bullets: [
      "Custom cut-to-fit sections for irregular plant layouts.",
      "Welded safety rail posts and midrails.",
      "On-site measurement and quick installation crew.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
    tags: ["Platforms", "Access", "Grating"],
  },
  {
    slug: "machinery-projects",
    title: "Machinery Projects",
    subTitle: "End-to-end assembly for custom manufacturing machinery.",
    industry: "Automation",
    summary:
      "Delivered multi-stage machine frames, integrative mounts, and assembly-ready sub-systems for automated production lines.",
    challenge:
      "Precision stack-up across multiple subassemblies and rapid iterative design changes.",
    solution:
      "Provided early prototypes and adjustment cycles with in-house machine shop and assembly area.",
    result:
      "Line integration achieved 1.4x planned speed after commissioning.",
    metrics: [
      { label: "Stations", value: "8" },
      { label: "Accuracy", value: "±0.1 mm" },
      { label: "Build", value: "4 weeks" },
      { label: "Throughput", value: "350 units/day" },
    ],
    bullets: [
      "Precision welded main frame and modular tool plates.",
      "Integrated sensor mount and cable channels.",
      "Factory pre-assembly and test run before shipment.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1200&q=80",
    tags: ["Automation", "Machinery", "Assembly"],
  },
  {
    slug: "plastic-welder",
    title: "Plastic Welder",
    subTitle: "Custom welding station and fixture for plastic product manufacturing.",
    industry: "Manufacturing",
    summary:
      "Created a precision fixture and holding system to support high-volume plastic welding operations.",
    challenge:
      "Strict part alignment plus heat control in a compact workspace.",
    solution:
      "Delivered lightweight aluminum fixtures with repeatable location pins and heat-resistant shields.",
    result:
      "Increased per-shift yield by 24% and reduced rejects from misalignment.",
    metrics: [
      { label: "Cycle Time", value: "38 sec" },
      { label: "Yield", value: "98.5%" },
      { label: "Build", value: "3 weeks" },
      { label: "Safety", value: "CE" },
    ],
    bullets: [
      "Custom quick-change tooling.",
      "Easy modular setup for multiple part sizes.",
      "Detailed assembly and operator quick-reference guide.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    tags: ["Plastic", "Fixture", "Welding"],
  },
  {
    slug: "ss-other",
    title: "SS Other",
    subTitle: "Custom stainless-steel specialty components.",
    industry: "Custom Fabrication",
    summary:
      "Produced custom fittings, brackets, and specialty parts for varied process and consumer applications.",
    challenge:
      "A large variety of small-order specialized parts with quick turnaround.",
    solution:
      "Used flexible schedule, quick tooling, and skilled craftsmen for rapid small-batch production.",
    result:
      "Client shipped final orders on time and improved assembly throughput.",
    metrics: [
      { label: "Batch", value: "16 part types" },
      { label: "Lead", value: "5 days" },
      { label: "Quality", value: "100% pass" },
      { label: "Material", value: "SS 304/316" },
    ],
    bullets: [
      "Rapid prototyping + quick-turn fabrication.",
      "Batch tracking and quality traceability.",
      "Matching pre-finish requirements.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    tags: ["Custom", "Small Batch", "Stainless"],
  },
];

export const portfolioBySlug: Record<string, PortfolioItem> = portfolioItems.reduce(
  (acc, item) => ({ ...acc, [item.slug]: item }),
  {} as Record<string, PortfolioItem>
);

export const allPortfolioSlugs = portfolioItems.map((item) => item.slug);
