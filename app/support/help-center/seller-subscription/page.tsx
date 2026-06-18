import SupportArticlePage from "@/components/SupportArticlePage";

export default function Page() {
  return (
    <SupportArticlePage
      title="How do seller subscriptions work?"
      subtitle="Seller subscriptions help suppliers access marketplace visibility, verification support, product listing tools, and AI-powered store support."
      updated="June 2026"
      sections={[
        {
          heading: "Overview",
          body: [
            "Seller subscriptions are designed for exporters, manufacturers, suppliers, wholesalers, and businesses that want to present products to international buyers on IMPEXVIAA.",
            "A seller subscription may include access to product listings, supplier profile tools, verification support, AI-generated store assistance, and marketplace visibility depending on the selected plan.",
          ],
        },
        {
          heading: "Seller access",
          body: [
            "Sellers can prepare product pages, upload product information, submit business documents, and build a supplier presence for buyer discovery.",
            "IMPEXVIAA may review supplier information and documents before increasing marketplace visibility.",
          ],
        },
        {
          heading: "Verification requirement",
          body: [
            "Seller access does not automatically mean supplier verification is complete. Suppliers may need to submit business registration, tax information, identity details, and product-related documents.",
            "Incomplete, unclear, expired, or misleading documents may delay or prevent approval.",
          ],
        },
        {
          heading: "Billing and renewal",
          body: [
            "Seller subscriptions are activated after successful payment through the payment method available on the platform.",
            "Sellers should keep receipts and billing confirmation for support, renewal, cancellation, or payment-related questions.",
          ],
        },
      ]}
    />
  );
}