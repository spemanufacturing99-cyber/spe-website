export interface ProductData {
  title: string;
  slug: string;
  excerpt: string;
  longDescription: string[];
  features?: string[];
  specs?: { label: string; value: string }[];
  images?: string[];
}

export const productsData: ProductData[] = [
  {
    title: '75M3 Powder Silo',
    slug: '75m3-powder-silo',
    excerpt: 'A heavy-duty powder silo engineered for secure vertical storage of up to 75 m³ of dry bulk powder material.',
    longDescription: [
      'A 75 m³ Powder Silo is a vertical industrial storage structure designed to securely hold up to 75 cubic meters of dry, bulk powder materials.',
      'These silos are built to support heavy-duty powder handling, weather protection, and consistent material discharge for demanding industrial processing environments.',
    ],
    images:['/products/storage-tanker.png'],
    features: [
      '75 cubic meter storage capacity',
      'Designed for dry bulk powder materials',
      'Weather-proof and corrosion-resistant construction',
      'Optimized vertical footprint for efficient site layout',
    ],
    specs: [
      { label: 'Volume', value: '75 m³' },
      { label: 'Material', value: 'Carbon Steel or Stainless Steel' },
      { label: 'Finish', value: 'Anti-corrosive epoxy coating or galvanization' },
      { label: 'Configuration', value: 'Welded Monoblock or Bolted Segmented' },
    ],
  },
  {
    title: 'Powder Hoppers for Milk Powder Plant',
    slug: 'powder-hoppers-for-milk-powder-plant',
    images:['/products/PowderHoppers.png'],
    excerpt: 'High-capacity bulk storage engineering for milk powder plants with optimized conditioning and reliable discharge.',
    longDescription: [
      'Our 75m³ Industrial Powder Silos are engineered for heavy-duty, vertical bulk storage of dry materials. Designed to balance high-volume capacity with an optimized footprint, these silos deliver reliable, weather-proof material conditioning for demanding industrial environments.',
      'These powder hoppers are built to support consistent material flow, protect finished powder from humidity, and integrate with automated feeding and handling systems.',
    ],
    features: [
      'Volumetric capacity around 75 m³',
      'High-tensile carbon steel or premium stainless steel construction',
      'Industrial anti-corrosive epoxy coating or hot-dip galvanization',
      'Welded monoblock and bolted segmented format options',
    ],
    specs: [
      { label: 'Capacity', value: '75 m³ (approx. 75–100 tonnes)' },
      { label: 'Materials', value: 'High-tensile Carbon Steel or Stainless Steel' },
      { label: 'Surface Protection', value: 'Marine epoxy paint or galvanization' },
      { label: 'Structural Format', value: 'Monoblock or Bolted Segmented' },
    ],
  },
  {
    title: 'Mixing Tank for Beverage',
    slug: 'mixing-tank-for-beverage',
    images:['/products/mixing-tank.png'],
    excerpt: 'Sanitary beverage mixing tanks engineered for repeatable, high-performance batch blending across liquid and viscous products.',
    longDescription: [
      'As a premier equipment manufacturer, we engineer Sanitary Beverage Mixing Tanks designed to deliver precise, rapid, and highly repeatable batch blending. From high-viscosity fruit concentrates to low-viscosity carbonated soft drinks, our custom-built tanks optimize your cycle times while strictly maintaining international biological and food safety standards.',
    ],
    features: [
      'Premium SUS316L product contact surfaces',
      'High-mirror internal finish Ra ≤ 0.4 µm',
      'Dimple or spiral jacketed thermal control',
      'Bottom-flush hygienic drain for zero stagnation',
    ],
    specs: [
      { label: 'Material', value: 'Stainless Steel 316L (product contact)' },
      { label: 'External Shell', value: 'SS304 support and structure' },
      { label: 'Finish', value: 'Ultra-hygienic mirror polish' },
      { label: 'Thermal Control', value: 'Jacketed heating/cooling with insulation' },
    ],
  },
  {
    title: 'Milk Process Tanks and CIP Tanks',
    slug: 'milk-process-tanks-and-cip-tanks',
    images:['/products/milk-process.png','/products/milk-process.png'],
    excerpt: 'Heavy-duty CIP and process tanks engineered for automated sanitation and hygienic processing in dairy plants.',
    longDescription: [
      'Engineered For Automated, High-Efficiency Plant Sanitation. As an industrial equipment manufacturer, we design and fabricate high-performance Clean-In-Place (CIP) Tanks engineered to maintain uncompromised hygiene standards across your processing facility.',
      'Our CIP vessels serve as the backbone of automated sanitation loops, storing and preparing water and chemical solutions to thoroughly clean your pipes, valves, mixers, and process tanks without requiring any equipment disassembly.',
    ],
    features: [
      'Caustic, acid, fresh water and recovered water tank configurations',
      'Designed for automated plant sanitation loops',
      'Stainless steel construction for aggressive cleaning chemistries',
      'Custom capacities matched to plant automation levels',
    ],
    specs: [
      { label: 'Tank Types', value: 'Caustic, Acid, Fresh Water, Recovered Water' },
      { label: 'Purpose', value: 'Automated CIP and process sanitation' },
      { label: 'Construction', value: 'Food-grade stainless steel' },
      { label: 'Benefit', value: 'Lower water and energy utility costs' },
    ],
  },
  {
    title: 'YEAST TANKS',
    slug: 'yeast-tanks',
    images:['/products/yeasttank.png','/products/yeasttank1.png'],
    excerpt: 'Precision yeast propagation, storage, and pitching tanks built for sterile fermentation control.',
    longDescription: [
      'Yeast Tanks: Propagation, Storage & Pitching Vessels. Precision Microbiological Engineering for Consistent Fermentation. As a specialized equipment manufacturer, we design and build high-performance Yeast Tanks engineered to handle the most critical component of your fermentation process.',
      'Whether you require a Yeast Propagation Tank for culturing pure strains or a jacketed Yeast Storage/Pitching Tank for harvesting and pitching, our vessels deliver the strict temperature control and sterile environments necessary to maximize cell viability and prevent mutation or contamination.',
    ],
    features: [
      '316L stainless steel product contact surfaces',
      'Ultra-smooth mirror finish with polished internal welds',
      'Multi-zone cooling jacket and polyurethane insulation',
      'Steep conical bottom for complete drainage and clean separation',
    ],
    specs: [
      { label: 'Material', value: 'Stainless Steel 316L (product contact)' },
      { label: 'Finish', value: 'Ra ≤ 0.4 µm mirror polish' },
      { label: 'Temperature Control', value: '2–4°C chilled yeast storage' },
      { label: 'Bottom', value: '60° conical design for complete drainage' },
    ],
  },
  {
    title: 'BLANDING TANKS',
    slug: 'blanding-tanks',
    images:['/products/blanding-tank.png','/products/blanding-tank1.png'],
    excerpt: 'Industrial blending tanks engineered for uniform mixing of liquids, viscous products, and powder-liquid formulations.',
    longDescription: [
      'High-Efficiency Homogenization for Liquid and Viscous Processing. As a premier equipment manufacturer, we design and engineer heavy-duty Industrial Blending Tanks built to achieve flawless homogeneity across a wide range of products.',
      'Whether you are blending low-viscosity liquids, emulsifying dense creams, or incorporating dry powders into liquid streams, our custom-fabricated blending vessels optimize cycle times and deliver uniform batch results every single run.',
    ],
    features: [
      'Heavy-duty blending for liquids and viscous products',
      'Custom vessel geometry for powders, creams, and emulsions',
      'Designed for reliable batch-to-batch consistency',
      'Engineered for easy cleaning and process integration',
    ],
    specs: [
      { label: 'Application', value: 'Liquid, viscous and powder-liquid blending' },
      { label: 'Design', value: 'Custom mixing geometry and agitators' },
      { label: 'Hygiene', value: 'Sanitary cleanability and drainability' },
      { label: 'Performance', value: 'Optimized for consistent homogeneity' },
    ],
  },
  {
    title: 'STORAGE SILO',
    slug: 'storage-silo',
    images:['/products/storage-silo.png','/products/storage-silo1.png'],
    excerpt: 'Heavy-duty industrial storage silos designed for secure, weather-proof storage of dry bulk solids and powders.',
    longDescription: [
      'Industrial Storage Silos. High-Capacity Bulk Material Storage Engineering. As a leading equipment manufacturer, we design and fabricate heavy-duty Industrial Storage Silos engineered for the secure, weather-proof, and high-volume storage of dry bulk solids and powders.',
      'Our silos are custom-built to optimize your facility’s vertical footprint, protect materials from ambient moisture, and ensure a reliable, consistent downstream material flow.',
    ],
    features: [
      'Carbon steel or stainless steel construction',
      'Marine-grade epoxy or hot-dip galvanized protection',
      'Welded monoblock or bolted segmented formats',
      'Engineered for outdoor durability and flow reliability',
    ],
    specs: [
      { label: 'Material Options', value: 'Carbon Steel (Mild Steel) or SS304/SS316' },
      { label: 'Surface Protection', value: 'Marine-grade epoxy or HDG' },
      { label: 'Format', value: 'Welded Monoblock or Bolted Segmented' },
      { label: 'Use Case', value: 'Dry bulk solids and powder storage' },
    ],
  },
];

export const findProductBySlug = (slug: string) => productsData.find((product) => product.slug === slug);
