import SupportArticlePage from "@/components/SupportArticlePage";

export default function Page() {
  return (
    <SupportArticlePage
      title="How long does verification take?"
      subtitle="Verification timelines depend on document quality, business category, review volume, and risk checks."
      updated="June 2026"
      sections={[
        {
          heading: "Standard timeline",
          body: [
            "Supplier verification usually takes 1–3 business days after all required documents are submitted clearly and correctly.",
            "Some reviews may take longer if documents are incomplete, unclear, expired, inconsistent, or require additional checks.",
          ],
        },
        {
          heading: "What affects review time",
          body: [
            "Review time can depend on business registration quality, product category, document type, country, certificate clarity, and whether the submitted details match the supplier profile.",
            "High-risk categories, unclear documents, or missing ownership details may require manual review.",
          ],
        },
        {
          heading: "If verification is delayed",
          body: [
            "Suppliers should check whether all required documents have been uploaded correctly.",
            "If support requests additional information, the review timeline may restart after the corrected documents are submitted.",
          ],
        },
        {
          heading: "Important notice",
          body: [
            "IMPEXVIAA may approve, reject, restrict, or request additional information based on document review and platform risk assessment.",
            "Verification is intended to support trust, but buyers should still conduct their own due diligence before trading.",
          ],
        },
      ]}
    />
  );
}