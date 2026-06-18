import SupportArticlePage from "@/components/SupportArticlePage";

export default function Page() {
  return (
    <SupportArticlePage
      title="How do I report a supplier?"
      subtitle="Report suspicious suppliers, fake documents, misleading product claims, fraud concerns, or marketplace policy violations."
      updated="June 2026"
      sections={[
        {
          heading: "Overview",
          body: [
            "IMPEXVIAA allows users to report suppliers or marketplace activity that appears suspicious, misleading, fraudulent, unsafe, or against platform policies.",
            "Reports help protect buyers, sellers, exporters, importers, and sourcing teams from potential misuse of the platform.",
          ],
        },
        {
          heading: "When to report a supplier",
          body: [
            "You should report a supplier if you suspect fake documents, false company identity, misleading product claims, suspicious payment requests, impersonation, illegal goods, abusive behavior, or refusal to provide reasonable trade information.",
            "You may also report suppliers who use stolen images, copied certifications, unrealistic offers, pressure tactics, or external payment instructions that appear unsafe.",
          ],
        },
        {
          heading: "Information to include",
          body: [
            "Include supplier name, product name, page link, screenshots, messages, document copies, payment proof if relevant, and a clear explanation of why you are reporting the supplier.",
            "The more complete the evidence, the faster IMPEXVIAA can review the matter and take appropriate action.",
          ],
        },
        {
          heading: "Review process",
          body: [
            "IMPEXVIAA may review the report, check supplier profile information, request additional evidence, contact the supplier, restrict visibility, suspend access, or remove listings where necessary.",
            "Some investigations may take longer if the matter involves document review, payment evidence, third-party information, or legal concerns.",
          ],
        },
        {
          heading: "Important notice",
          body: [
            "Submitting false reports, harassment reports, or reports made only to harm a competitor may violate platform policy.",
            "IMPEXVIAA aims to handle reports fairly and may take action based on available evidence, platform rules, and risk assessment.",
          ],
        },
      ]}
    />
  );
}