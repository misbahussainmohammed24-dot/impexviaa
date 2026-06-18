import SupportArticlePage from "@/components/SupportArticlePage";

export default function Page() {
  return (
    <SupportArticlePage
      title="Payment, billing, and receipt help"
      subtitle="Get support for payments, billing questions, failed transactions, receipts, subscriptions, and refund-related concerns."
      updated="June 2026"
      sections={[
        {
          heading: "Overview",
          body: [
            "IMPEXVIAA provides payment and billing support for buyer subscriptions, seller subscriptions, platform access, receipts, failed payments, and billing-related questions.",
            "Users should keep payment receipts, transaction IDs, payment email addresses, subscription plan details, and screenshots for faster support review.",
          ],
        },
        {
          heading: "Payment methods",
          body: [
            "Available payment methods may depend on the user's country, payment provider availability, selected subscription, and platform configuration.",
            "If a payment is processed through a third-party provider, that provider may apply its own security checks, processing times, currency conversion, and payment review policies.",
          ],
        },
        {
          heading: "Failed payments",
          body: [
            "Payments may fail due to insufficient balance, card restrictions, bank decline, incorrect payment details, expired card, payment provider review, network issues, or country-based restrictions.",
            "If payment fails, confirm your payment details, check with your bank or payment provider, and try again. If the amount was deducted but access was not activated, contact support with proof of payment.",
          ],
        },
        {
          heading: "Receipts and invoices",
          body: [
            "Users may request payment confirmation, receipts, or invoice support by contacting IMPEXVIAA Support.",
            "When requesting billing help, include your full name, company name, account email, plan name, payment date, amount paid, payment email, and receipt screenshot.",
          ],
        },
        {
          heading: "Refund and cancellation support",
          body: [
            "Refund eligibility depends on the subscription type, service usage, platform policy, payment provider rules, and applicable law.",
            "Cancellation requests should be submitted through the support channel. IMPEXVIAA may review account activity, subscription activation, usage history, and payment status before making a decision.",
          ],
        },
        {
          heading: "Security notice",
          body: [
            "IMPEXVIAA will never ask users to share passwords, full card numbers, private banking passwords, or one-time passwords.",
            "Users should report suspicious payment messages, fake payment links, or impersonation attempts immediately through the support page.",
          ],
        },
      ]}
    />
  );
}