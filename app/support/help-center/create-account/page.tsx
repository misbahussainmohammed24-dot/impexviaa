import SupportArticlePage from "@/components/SupportArticlePage";

export default function Page() {
  return (
    <SupportArticlePage
      title="How do I create an IMPEXVIAA account?"
      subtitle="Learn how buyers and suppliers can create an account, verify email access, and begin using the IMPEXVIAA platform."
      updated="June 2026"
      sections={[
        {
          heading: "Overview",
          body: [
            "IMPEXVIAA allows buyers, suppliers, exporters, importers, sourcing teams, and businesses to create an account for accessing marketplace services, supplier discovery, verification tools, subscription features, and platform support.",
            "Users should provide accurate information during registration. Business users are expected to use a valid business email address whenever possible to support account review, communication, and future verification.",
          ],
        },
        {
          heading: "Account types",
          body: [
            "Buyer accounts are intended for businesses or individuals looking to discover suppliers, explore product categories, request quotations, and use sourcing support tools.",
            "Supplier or seller accounts are intended for exporters, manufacturers, distributors, wholesalers, and businesses that want to list products, create a verified profile, and access seller tools.",
          ],
        },
        {
          heading: "Steps to create an account",
          body: [
            "Go to the signup page and enter your name, email address, password, and account type.",
            "Verify your email address using the one-time password or verification link sent to your inbox.",
            "Complete your profile with accurate business or personal details.",
            "If you are a supplier, continue to the supplier verification area and submit the required business documents.",
          ],
        },
        {
          heading: "Important notes",
          body: [
            "Users are responsible for keeping login details secure and should not share passwords or one-time passwords with anyone.",
            "IMPEXVIAA may restrict, suspend, or review accounts that provide false information, violate platform policies, misuse marketplace tools, or create risk for other users.",
          ],
        },
        {
          heading: "Security and privacy",
          body: [
            "Account information is used for platform access, support, verification, communication, fraud prevention, and marketplace safety.",
            "Users should contact support immediately if they suspect unauthorized access, suspicious activity, or misuse of their account.",
          ],
        },
      ]}
    />
  );
}