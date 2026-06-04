export interface BusinessVertical {
  title: string;
  slug: string;
  description: string;
  products: string[];
}

export const businessVerticals: BusinessVertical[] = [
  {
    title: "Beverage Industry",
    slug: "beverage-industry",
    description:
      "Engineered vessels, process equipment and turnkey systems for beverage processing, blending and storage applications.",
    products: [
      "Blending Vessel",
      "CIP Vessels",
      "Holding Vessel",
      "Lauter Tun",
      "Mash-Tun Vessel",
      "Mixing Vessel",
      "Process Vessel",
      "Skid Units etc."
    ]
  },
  {
    title: "Dairy Industry",
    slug: "dairy-industry",
    description:
      "Hygienic dairy process equipment for milk, cream, cheese and powder handling with stringent quality controls.",
    products: [
      "Storage Vessel",
      "CIP Vessel",
      "Cream Vessel",
      "Cheese Vats",
      "Cooking Vessel",
      "Dyers",
      "Powder Hopper",
      "Skid Units",
      "Silos etc."
    ]
  },
  {
    title: "Food Industry",
    slug: "food-industry",
    description:
      "Custom process vessels and systems for food manufacturing, cooking, mixing, storage and hygienic processing.",
    products: [
      "Storage Vessel",
      "CIP Vessel",
      "Cooking Vessel",
      "Dyers",
      "Powder Hopper",
      "Sauce Mix Vessel",
      "Skid Units",
      "Silos etc."
    ]
  },
  {
    title: "Pharmaceutical Industry",
    slug: "pharmaceutical-industry",
    description:
      "Precision fabrications for pharmaceutical production including fermenters, mixing tanks and high-purity vessels.",
    products: [
      "IP Vessel",
      "Fermenting Vessel",
      "Holding Tanks",
      "Mixing Tanks",
      "Shell & Tubes",
      "Skid Units etc."
    ]
  },
  {
    title: "Chemical Industry",
    slug: "chemical-industry",
    description:
      "Robust chemical process equipment engineered for reliable mixing, storage and heat exchange in aggressive environments.",
    products: [
      "Fermenting Vessel",
      "Holding Tank",
      "Mixing Tank",
      "Shell & Tubes",
      "Skid Units etc."
    ]
  },
  {
    title: "Waste Water Treatment",
    slug: "waste-water-treatment",
    description:
      "Efficient wastewater treatment vessels and systems for process water, effluent handling and recovery applications.",
    products: [
      "Evaporator",
      "Concentrator",
      "Crystallizers"
    ]
  },
  {
    title: "Sugar Industry",
    slug: "sugar-industry",
    description:
      "Specialized sugar processing equipment for evaporation, crystallization, melting and storage requirements.",
    products: [
      "Falling Film Evaporator",
      "Batch Pans",
      "Circulators",
      "Crystallizers",
      "Sugar Melter",
      "Storage Tanks",
      "Sugar Silo"
    ]
  },
  {
    title: "Paint Industry",
    slug: "paint-industry",
    description:
      "Reliable paint and coating process vessels for mixing, dissolving and storage across industrial coating operations.",
    products: [
      "Dissolvers",
      "Mixers etc."
    ]
  }
];

export function getBusinessVerticalBySlug(slug: string) {
  return businessVerticals.find((vertical) => vertical.slug === slug);
}

export function getBusinessVerticalSlugs() {
  return businessVerticals.map((vertical) => ({ slug: vertical.slug }));
}
