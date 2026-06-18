import SupportArticlePage from "@/components/SupportArticlePage";

export default function Page() {
  return (
    <SupportArticlePage
      title="What documents are required?"
      subtitle="Required documents depend on business type, product category, export destination, and verification level."
      updated="June 2026"
      sections={[
        {
          heading: "Common business documents",
          body: [
            "Suppliers may be asked to provide business registration proof, tax registration, company address details, ownership information, authorized representative details, and contact information.",
            "These documents help IMPEXVIAA review whether the supplier profile represents a real business entity.",
          ],
        },
        {
          heading: "Product documents",
          body: [
            "Product documents may include laboratory test reports, product specifications, safety certificates, quality certificates, packaging details, and product images.",
            "The required documents depend on the product type and the buyer’s destination market.",
          ],
        },
        {
          heading: "Agriculture documents",
          body: [
            "Agriculture products may require phytosanitary certificate, laboratory test report, food safety certificate, fumigation certificate, cold treatment certificate, irradiation certificate, organic certification, or board registration depending on the product.",
            "Examples include APEDA registration, Tea Board registration, Coffee Board registration, or Spices Board registration where applicable.",
          ],
        },
        {
          heading: "Important notice",
          body: [
            "Document requirements can vary by country, product, buyer request, and regulation. Suppliers are responsible for ensuring documents are accurate, valid, and legally usable.",
            "IMPEXVIAA may request additional documents before profile approval or product visibility.",
          ],
        },
      ]}
    />
  );
}