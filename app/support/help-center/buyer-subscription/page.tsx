import SupportArticlePage from "@/components/SupportArticlePage";

export default function Page() {
  return (
    <SupportArticlePage
      title="How do buyer subscriptions work?"
      subtitle="Buyer subscriptions give access to supplier discovery, product sourcing support, RFQ tools, and HXN AI guidance."
      updated="June 2026"
      sections={[
        {
          heading: "Overview",
          body: [
            "Buyer subscriptions are designed for importers, sourcing teams, wholesalers, distributors, and businesses that want to discover verified suppliers through IMPEXVIAA.",
            "A buyer subscription may provide access to supplier information, product discovery, sourcing support, RFQ preparation, and HXN AI trade assistance depending on the selected plan.",
          ],
        },
        {
          heading: "What buyers can access",
          body: [
            "Buyers can explore product categories, view supplier profiles, review product details, understand document requirements, and prepare quotation requests.",
            "Buyer access may also include HXN AI guidance for supplier discovery, product sourcing, trade documentation, and marketplace navigation.",
          ],
        },
        {
          heading: "Billing and payment",
          body: [
            "Buyer subscriptions are activated after successful payment through the available payment method shown on the platform.",
            "Users should keep payment confirmation, receipt screenshots, account email, and subscription details for billing support.",
          ],
        },
        {
          heading: "Important notes",
          body: [
            "IMPEXVIAA provides marketplace discovery and support tools. Buyers are responsible for conducting their own due diligence before entering into trade agreements.",
            "Supplier information, product availability, pricing, and trade terms may change and should be confirmed directly before any transaction.",
          ],
        },
      ]}
    />
  );
}