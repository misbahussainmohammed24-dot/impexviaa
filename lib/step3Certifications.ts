export const CERTIFICATION_HINTS: Record<string, string> = {
  "Phytosanitary Certificate":
    "Common for agricultural exports. Shows plant-based goods meet export health requirements.",

  "Organic Certification":
    "Useful for organic food, spices, grains, fruits, vegetables, and natural products.",

  "Global GAP":
    "Important for agricultural producers exporting fresh produce to international buyers.",

  HACCP:
    "Food safety certification used for food processing, packaging, and export readiness.",

  GMP:
    "Good Manufacturing Practice. Important for pharmaceuticals, cosmetics, and medical products.",

  FDA:
    "Required or useful for products entering the United States, depending on category.",

  "WHO-GMP":
    "Important for pharmaceutical manufacturers supplying regulated medical markets.",

  CE:
    "Common for electronics, machinery, medical equipment, and products sold in Europe.",

  FCC:
    "Common for electronic and radio-frequency products entering the United States.",

  RoHS:
    "Used for electronics to prove restricted hazardous substances are controlled.",

  "IATF 16949":
    "Automotive quality standard for auto parts manufacturers and suppliers.",

  DOT:
    "Used for auto parts and transport-related products in regulated markets.",

  SAE:
    "Automotive engineering standard commonly used for vehicle components.",

  "ISO 9001":
    "General quality management certification accepted across many industries.",

  "ISO 13485":
    "Medical device quality management certification.",

  "ISO 22000":
    "Food safety management certification.",

  "FSSC 22000":
    "Food safety certification for food manufacturers and exporters.",

  Halal:
    "Important for food, cosmetics, pharmaceuticals, and Muslim-majority markets.",

  Kosher:
    "Useful for food, beverage, and ingredient exports.",

  MSDS:
    "Material Safety Data Sheet. Required for many chemical products.",

  COA:
    "Certificate of Analysis. Common for chemicals, pharmaceuticals, and ingredients.",

  REACH:
    "Chemical safety compliance for the European market.",

  "Mill Test Certificate":
    "Used for metals to confirm grade, composition, and quality.",
};

export function getCertificationHint(certification: string): string {
  return CERTIFICATION_HINTS[certification] || "Upload valid proof if this certification applies to your product.";
}