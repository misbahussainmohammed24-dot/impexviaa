import SupportArticlePage from "@/components/SupportArticlePage";

export default function Page() {
  return (
    <SupportArticlePage
      title="How do I verify as a supplier?"
      subtitle="Supplier verification helps IMPEXVIAA review business identity, documents, product readiness, and marketplace trust signals."
      updated="June 2026"
      sections={[
        {
          heading: "Overview",
          body: [
            "Supplier verification is designed to improve trust between buyers and sellers on IMPEXVIAA. The process helps review whether a supplier has a legitimate business identity, valid documents, accurate product information, and sufficient readiness for international trade.",
            "Verification does not guarantee transaction success, product quality, delivery performance, or legal compliance in every destination country. Buyers should still conduct their own due diligence before entering into commercial agreements.",
          ],
        },
        {
          heading: "Documents commonly required",
          body: [
            "Suppliers may be asked to provide business registration proof, tax identification, company ownership information, address details, contact details, product documents, export-related documents, and category-specific certificates.",
            "Agriculture suppliers may need documents such as phytosanitary certificate, laboratory test report, food safety certificate, fumigation certificate, organic certification, APEDA registration, Tea Board registration, Coffee Board registration, or Spices Board registration depending on the product.",
          ],
        },
        {
          heading: "Verification steps",
          body: [
            "Create or log in to your supplier account.",
            "Complete the company profile with accurate business details.",
            "Upload business registration and identity documents.",
            "Add product information, product images, pricing type, MOQ, capacity, and export details.",
            "Submit documents for review and wait for IMPEXVIAA verification review.",
          ],
        },
        {
          heading: "Review timeline",
          body: [
            "Standard supplier verification may take 1–3 business days depending on document quality, category risk, and review volume.",
            "If documents are missing, unclear, expired, inconsistent, or suspicious, IMPEXVIAA may request additional information or reject the submission until corrected.",
          ],
        },
        {
          heading: "Compliance notice",
          body: [
            "Suppliers are responsible for ensuring that their products, documents, export claims, certifications, and business information are accurate and lawful.",
            "Submitting fake, altered, misleading, expired, or unauthorized documents may lead to rejection, account restriction, removal from marketplace visibility, or further investigation.",
          ],
        },
      ]}
    />
  );
}