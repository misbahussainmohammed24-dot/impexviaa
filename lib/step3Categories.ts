export type CategoryMap = Record<string, string[]>;

export const PRODUCT_CATEGORIES: string[] = [
  "Agriculture",
  "Food & Beverage",
  "Pharmaceuticals",
  "Electronics",
  "Auto Parts",
  "Machinery",
  "Chemicals",
  "Textiles",
  "Packaging",
  "Medical Equipment",
  "Cosmetics",
  "Construction Materials",
  "Metals",
  "Energy Products",
  "Other",
];

export const CATEGORY_SUBCATEGORIES: CategoryMap = {
  Agriculture: [
    "Rice",
    "Wheat",
    "Spices",
    "Fruits",
    "Vegetables",
    "Pulses",
    "Dry Fruits",
    "Seafood",
    "Coffee",
    "Tea",
    "Sugar",
    "Corn",
    "Oil Seeds",
    "Animal Feed",
  ],

  "Food & Beverage": [
    "Beverages",
    "Snacks",
    "Frozen Foods",
    "Dairy Products",
    "Bakery Products",
    "Confectionery",
    "Processed Foods",
    "Organic Foods",
    "Canned Foods",
    "Ready-to-Eat Foods",
  ],

  Pharmaceuticals: [
    "Tablets",
    "Capsules",
    "Syrups",
    "APIs",
    "Injectables",
    "Medical Devices",
    "Nutraceuticals",
    "OTC Products",
    "Ointments",
    "Drops",
  ],

  Electronics: [
    "Mobile Accessories",
    "Consumer Electronics",
    "Electronic Components",
    "Smart Devices",
    "Wearables",
    "Power Supplies",
    "Cables",
    "Industrial Electronics",
    "LED Products",
    "Chargers",
  ],

  "Auto Parts": [
    "Engine Parts",
    "Brake Systems",
    "Filters",
    "Electrical Parts",
    "Suspension Parts",
    "Body Parts",
    "Tyres",
    "Lubricants",
    "Batteries",
    "Transmission Parts",
  ],

  Machinery: [
    "Industrial Machinery",
    "Agricultural Machinery",
    "Packaging Machinery",
    "Construction Machinery",
    "CNC Machines",
    "Automation Equipment",
    "Textile Machinery",
    "Food Processing Machinery",
  ],

  Chemicals: [
    "Industrial Chemicals",
    "Specialty Chemicals",
    "Petrochemicals",
    "Fertilizers",
    "Paint Chemicals",
    "Cleaning Chemicals",
    "Water Treatment Chemicals",
    "Laboratory Chemicals",
  ],

  Textiles: [
    "Cotton Fabric",
    "Polyester Fabric",
    "Garments",
    "Yarn",
    "Home Textiles",
    "Technical Textiles",
    "Denim",
    "Knitted Fabrics",
  ],

  Packaging: [
    "Paper Packaging",
    "Plastic Packaging",
    "Metal Packaging",
    "Glass Packaging",
    "Flexible Packaging",
    "Corrugated Boxes",
    "Labels",
    "Pouches",
  ],

  "Medical Equipment": [
    "Diagnostic Equipment",
    "Hospital Furniture",
    "Monitoring Devices",
    "Surgical Instruments",
    "Laboratory Equipment",
    "Disposable Medical Supplies",
    "Imaging Equipment",
  ],

  Cosmetics: [
    "Skin Care",
    "Hair Care",
    "Personal Care",
    "Makeup",
    "Fragrances",
    "Beauty Tools",
    "Herbal Cosmetics",
  ],

  "Construction Materials": [
    "Cement",
    "Steel",
    "Bricks",
    "Tiles",
    "Glass",
    "Insulation Materials",
    "Paints",
    "Sanitary Ware",
  ],

  Metals: [
    "Steel",
    "Aluminium",
    "Copper",
    "Brass",
    "Iron",
    "Metal Alloys",
    "Scrap Metals",
    "Metal Sheets",
  ],

  "Energy Products": [
    "Solar Panels",
    "Batteries",
    "Generators",
    "Wind Equipment",
    "Energy Storage Systems",
    "Inverters",
    "Power Backup Systems",
  ],

  Other: [
    "General Trading",
    "Custom Products",
    "Mixed Products",
    "Business Services",
    "Other Products",
  ],
};

export const CATEGORY_CERTIFICATIONS: CategoryMap = {
  Agriculture: [
    "Phytosanitary Certificate",
    "Organic Certification",
    "Global GAP",
    "HACCP",
    "ISO 22000",
    "FSSAI",
  ],

  "Food & Beverage": [
    "HACCP",
    "ISO 22000",
    "FSSC 22000",
    "Halal",
    "Kosher",
    "FDA Food Facility Registration",
  ],

  Pharmaceuticals: [
    "GMP",
    "FDA",
    "WHO-GMP",
    "ISO 13485",
    "Drug License",
    "Certificate of Pharmaceutical Product",
  ],

  Electronics: [
    "CE",
    "FCC",
    "RoHS",
    "UL",
    "BIS",
    "ISO 9001",
  ],

  "Auto Parts": [
    "IATF 16949",
    "DOT",
    "SAE",
    "ISO 9001",
    "E-Mark",
  ],

  Machinery: [
    "CE",
    "ISO 9001",
    "ISO 14001",
    "Machine Safety Certificate",
  ],

  Chemicals: [
    "MSDS",
    "COA",
    "REACH",
    "ISO 9001",
    "GHS Compliance",
  ],

  Textiles: [
    "OEKO-TEX",
    "GOTS",
    "ISO 9001",
    "BSCI",
    "SEDEX",
  ],

  Packaging: [
    "ISO 9001",
    "FSC",
    "BRC Packaging",
    "Food Grade Certificate",
  ],

  "Medical Equipment": [
    "ISO 13485",
    "CE",
    "FDA",
    "GMP",
    "Free Sale Certificate",
  ],

  Cosmetics: [
    "GMP",
    "ISO 22716",
    "FDA",
    "Cruelty Free Certificate",
    "Dermatological Test Certificate",
  ],

  "Construction Materials": [
    "ISO 9001",
    "CE",
    "ASTM",
    "BIS",
    "Fire Safety Certificate",
  ],

  Metals: [
    "Mill Test Certificate",
    "ISO 9001",
    "ASTM",
    "EN Standard Certificate",
    "Material Test Certificate",
  ],

  "Energy Products": [
    "CE",
    "IEC",
    "UL",
    "TUV",
    "ISO 9001",
  ],

  Other: [
    "ISO 9001",
    "Quality Certificate",
    "Compliance Certificate",
  ],
};

export function getSubcategories(category: string): string[] {
  if (!category) return [];
  return CATEGORY_SUBCATEGORIES[category] || [];
}

export function getCertifications(category: string): string[] {
  if (!category) return [];
  return CATEGORY_CERTIFICATIONS[category] || [];
}

export function getCategoryOptions(): string[] {
  return PRODUCT_CATEGORIES;
}