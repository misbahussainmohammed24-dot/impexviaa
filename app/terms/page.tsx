"use client";

import type { CSSProperties } from "react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main style={styles.page}>
      <style>{css}</style>

      <section style={styles.hero}>
        <p style={styles.eyebrow}>IMPEXVIAA LEGAL</p>
        <h1 style={styles.title}>Terms of Service</h1>
        <p style={styles.subtitle}>
          These Terms explain the rules and responsibilities that apply when users access IMPEXVIAA, create accounts, use buyer or seller tools, submit documents, purchase subscriptions, use HXN AI, list products, request quotations, or interact with marketplace services.
        </p>
        <p style={styles.updated}>Last updated: June 2026</p>
      </section>

      <section style={styles.content}>
        <LegalSection title="1. Introduction">
          <p>Welcome to IMPEXVIAA. IMPEXVIAA is a global B2B import-export marketplace and trade-support platform designed for buyers, suppliers, exporters, importers, manufacturers, wholesalers, distributors, sourcing teams, and businesses involved in international trade.</p>
          <p>By using IMPEXVIAA, creating an account, submitting documents, purchasing a subscription, listing products, contacting suppliers, submitting RFQs, using HXN AI, or accessing any marketplace feature, you agree to these Terms of Service.</p>
          <p>If you do not agree with these Terms, you should not use IMPEXVIAA.</p>
        </LegalSection>

        <LegalSection title="2. Platform Role">
          <p>IMPEXVIAA provides marketplace infrastructure, supplier discovery, product listing tools, buyer resources, seller tools, verification workflows, document organization, RFQ support, AI-assisted features, product advertising options, support channels, and trade education resources.</p>
          <p>IMPEXVIAA is not a bank, customs broker, freight forwarder, insurance provider, legal advisor, tax advisor, financial advisor, regulatory authority, or government agency.</p>
          <p>Users remain responsible for their own business decisions, contracts, payments, shipping arrangements, import requirements, export requirements, customs obligations, taxes, product compliance, and legal responsibilities.</p>
        </LegalSection>

        <LegalSection title="3. Account Registration">
          <p>Users may be required to create an account to access certain features. You agree to provide accurate, complete, and current information during registration and while using the platform.</p>
          <ul>
            <li>Use a valid email address and accurate profile details.</li>
            <li>Keep your account login information secure.</li>
            <li>Do not share passwords or one-time passwords.</li>
            <li>Keep business and contact information updated.</li>
            <li>Do not create accounts for fraudulent or misleading activity.</li>
          </ul>
          <p>IMPEXVIAA may restrict, suspend, or terminate accounts that provide false information, misuse platform features, submit fake documents, or create risk for other users.</p>
        </LegalSection>

        <LegalSection title="4. Buyer Responsibilities">
          <p>Buyers are responsible for reviewing supplier information, product details, quotations, documentation, shipping terms, payment terms, and destination-country requirements before entering into any trade arrangement.</p>
          <ul>
            <li>Review supplier profiles carefully.</li>
            <li>Request written quotations and specifications.</li>
            <li>Check available business and product documents.</li>
            <li>Confirm import rules, customs requirements, and product standards.</li>
            <li>Keep records of chats, invoices, receipts, documents, and agreements.</li>
            <li>Report suspicious suppliers or unsafe payment requests.</li>
          </ul>
          <p>IMPEXVIAA provides discovery and support tools, but buyers must conduct independent due diligence before making payments, signing contracts, or importing goods.</p>
        </LegalSection>

        <LegalSection title="5. Seller Responsibilities">
          <p>Sellers, suppliers, exporters, manufacturers, wholesalers, and distributors are responsible for ensuring that all information submitted to IMPEXVIAA is accurate, lawful, current, and not misleading.</p>
          <ul>
            <li>Provide accurate company details.</li>
            <li>Upload genuine and valid documents.</li>
            <li>List real and available products.</li>
            <li>Use original or authorized product images.</li>
            <li>Provide realistic MOQ, capacity, pricing, and shipment details.</li>
            <li>Keep certifications and product documents updated.</li>
            <li>Respond professionally to buyer inquiries and RFQs.</li>
          </ul>
          <p>Sellers must not submit fake documents, copied certificates, false company details, misleading product claims, stolen images, or unavailable products.</p>
        </LegalSection>

        <LegalSection title="6. Supplier Verification">
          <p>IMPEXVIAA may offer verification workflows to review supplier identity, business registration, tax information, company details, address information, ownership details, product documents, and category-specific certificates.</p>
          <p>Verification is a platform-level review process. It does not guarantee product quality, delivery performance, legal compliance, financial stability, or transaction success.</p>
          <p>IMPEXVIAA may approve, reject, request additional information, restrict, or suspend supplier profiles based on document quality, risk review, policy concerns, or platform requirements.</p>
        </LegalSection>

        <LegalSection title="7. AI Trust Score">
          <p>After verification, IMPEXVIAA may generate an AI-assisted trust score for supplier profiles. The trust score may consider profile completeness, document submission, verification status, product readiness, information consistency, and marketplace activity indicators.</p>
          <p>The trust score is an informational platform indicator only. It is not a legal guarantee, financial guarantee, product guarantee, or promise of supplier performance.</p>
          <p>Buyers should not rely only on a trust score. Buyers should still review documents, communicate clearly, request written terms, and conduct independent due diligence.</p>
        </LegalSection>

        <LegalSection title="8. HXN AI Features">
          <p>IMPEXVIAA may provide AI-assisted features under HXN AI, including supplier guidance, buyer sourcing support, product descriptions, RFQ assistance, document explanations, seller store creation, marketplace guidance, and trade education.</p>
          <p>AI-generated content may be useful, but it may not always be complete, current, or suitable for every business situation. Users should review AI-generated content before relying on it, publishing it, or using it in commercial communication.</p>
          <p>HXN AI does not provide legal, tax, customs, financial, regulatory, or professional advice.</p>
        </LegalSection>

        <LegalSection title="9. AI-Generated Seller Websites">
          <p>IMPEXVIAA may help sellers create AI-assisted digital stores or buyer-facing pages using IMPEXVIAA domain infrastructure. These pages may display company information, product listings, certifications, available documents, RFQ options, and supplier profile details.</p>
          <p>Sellers remain responsible for the accuracy of all content displayed on their AI-generated store or seller page.</p>
          <p>IMPEXVIAA may remove, restrict, or edit seller pages that contain false claims, fake documents, prohibited products, copied content, misleading information, or policy violations.</p>
        </LegalSection>

        <LegalSection title="10. Product Advertising">
          <p>IMPEXVIAA may provide product advertising or promotional placement opportunities inside marketplace sections. Advertising may help sellers improve visibility across categories, product discovery areas, and buyer-facing pages.</p>
          <p>Advertising does not guarantee sales, buyer inquiries, transaction completion, approval, or commercial success.</p>
          <p>Sellers are responsible for ensuring advertised products are real, available, accurately described, and supported by proper documents where required.</p>
        </LegalSection>

        <LegalSection title="11. Subscriptions and Payments">
          <p>IMPEXVIAA may offer buyer subscriptions, seller subscriptions, premium tools, AI features, verification-related access, product advertising, and other paid services.</p>
          <p>Subscription details, pricing, access duration, and available features may vary by plan. Payments may be processed through third-party payment providers, and those providers may apply their own rules, security checks, and country restrictions.</p>
          <p>Users should keep payment receipts, subscription details, account email, payment confirmation, and transaction records for support purposes.</p>
        </LegalSection>

        <LegalSection title="12. Refunds and Cancellations">
          <p>Refund eligibility may depend on service type, subscription plan, activation status, usage status, payment provider rules, and applicable law.</p>
          <p>Users requesting billing help should contact support with account email, company name, plan name, payment date, amount paid, payment email, and receipt screenshot.</p>
          <p>IMPEXVIAA may review subscription usage, account activity, payment records, and support history before making refund or cancellation decisions.</p>
        </LegalSection>

        <LegalSection title="13. Marketplace Limitations">
          <p>IMPEXVIAA provides marketplace infrastructure and support resources, but it does not control every action of buyers, sellers, logistics providers, payment providers, customs authorities, or third parties.</p>
          <ul>
            <li>IMPEXVIAA does not guarantee that a buyer will purchase from a seller.</li>
            <li>IMPEXVIAA does not guarantee that a seller will receive sales.</li>
            <li>IMPEXVIAA does not guarantee document acceptance in every country.</li>
            <li>IMPEXVIAA does not guarantee product quality or delivery performance.</li>
            <li>IMPEXVIAA does not guarantee successful customs clearance.</li>
            <li>IMPEXVIAA does not guarantee transaction success.</li>
          </ul>
        </LegalSection>

        <LegalSection title="14. Prohibited Activities">
          <p>Users must not use IMPEXVIAA for illegal, harmful, fraudulent, deceptive, abusive, or misleading activities.</p>
          <ul>
            <li>Fraud, scams, deception, or impersonation.</li>
            <li>Fake, altered, expired, or misleading documents.</li>
            <li>Prohibited, illegal, unsafe, or restricted products.</li>
            <li>Stolen images, copied certificates, or false claims.</li>
            <li>Harassment, threats, abuse, or misleading communication.</li>
            <li>Unsafe payment requests or unrelated personal payment details.</li>
            <li>Scraping, hacking, spam, or platform abuse.</li>
          </ul>
          <p>IMPEXVIAA may restrict, suspend, remove, investigate, or report accounts involved in prohibited activity.</p>
        </LegalSection>

        <LegalSection title="15. Reports and Safety Reviews">
          <p>Users may report suspicious suppliers, fake documents, misleading product claims, unsafe payment requests, account misuse, or policy violations through IMPEXVIAA support channels.</p>
          <p>IMPEXVIAA may review reports, request additional information, examine supplier profiles, restrict listings, suspend accounts, or take platform-level action based on available evidence and risk assessment.</p>
          <p>False reports, competitor harassment, or intentionally misleading complaints may violate these Terms.</p>
        </LegalSection>

        <LegalSection title="16. Intellectual Property">
          <p>IMPEXVIAA branding, platform design, website content, interface elements, software features, AI tools, logos, names, and related materials belong to IMPEXVIAA or its licensors unless otherwise stated.</p>
          <p>Users may not copy, reproduce, misuse, resell, or distribute IMPEXVIAA platform content without permission, except where normal platform use allows access or sharing.</p>
        </LegalSection>

        <LegalSection title="17. User Content">
          <p>Users may submit company information, product descriptions, images, documents, certifications, messages, RFQs, support requests, and other materials.</p>
          <p>Users confirm that they have the right to submit such content and that it does not violate law, third-party rights, or platform policies.</p>
          <p>IMPEXVIAA may review, display, process, restrict, remove, or use user content for marketplace operation, verification, support, fraud prevention, safety, and service improvement.</p>
        </LegalSection>

        <LegalSection title="18. Privacy and Data Use">
          <p>IMPEXVIAA processes user information to provide accounts, marketplace access, supplier verification, support, billing assistance, safety reviews, AI tools, and platform communication.</p>
          <p>Users should review the Privacy Policy to understand how information is collected, used, stored, and protected.</p>
        </LegalSection>

        <LegalSection title="19. Third-Party Services">
          <p>IMPEXVIAA may use third-party services for payments, hosting, analytics, email communication, infrastructure, security, and support operations.</p>
          <p>Third-party services may have their own terms and privacy practices. IMPEXVIAA is not responsible for third-party service interruptions, payment provider restrictions, bank decisions, or external service failures outside its reasonable control.</p>
        </LegalSection>

        <LegalSection title="20. Suspension and Termination">
          <p>IMPEXVIAA may suspend, restrict, or terminate access if a user violates these Terms, submits false information, misuses the platform, creates safety risk, fails verification, abuses support, or engages in suspicious activity.</p>
          <p>Users may stop using IMPEXVIAA at any time. Certain records may be retained where required for legal, compliance, security, billing, or operational reasons.</p>
        </LegalSection>

        <LegalSection title="21. Disclaimers">
          <p>IMPEXVIAA services are provided on an “as available” and “as is” basis. IMPEXVIAA aims to provide reliable marketplace infrastructure and support resources, but it does not guarantee that the platform will always be uninterrupted, error-free, or suitable for every business need.</p>
          <p>IMPEXVIAA does not provide legal, tax, customs, financial, regulatory, insurance, or professional advice.</p>
        </LegalSection>

        <LegalSection title="22. Limitation of Liability">
          <p>To the maximum extent permitted by applicable law, IMPEXVIAA shall not be liable for indirect, incidental, special, consequential, punitive, or business losses arising from platform use, supplier conduct, buyer conduct, failed transactions, shipping delays, customs issues, payment disputes, document rejection, or third-party actions.</p>
        </LegalSection>

        <LegalSection title="23. Changes to These Terms">
          <p>IMPEXVIAA may update these Terms from time to time. Updates may reflect changes in platform features, legal requirements, payment processes, verification workflows, AI tools, or business operations.</p>
          <p>Continued use of IMPEXVIAA after changes means you accept the updated Terms.</p>
        </LegalSection>

        <LegalSection title="24. Contact Information">
          <p>For questions about these Terms, platform use, billing, verification, support, supplier reports, or safety concerns, contact IMPEXVIAA Support.</p>
          <p>
            Email: <strong>support@impexviaa.com</strong>
            <br />
            Legal: <strong>legal@impexviaa.com</strong>
            <br />
            Trust & Safety: <strong>safety@impexviaa.com</strong>
          </p>
        </LegalSection>

        <div style={styles.links}>
          <Link href="/privacy-policy" style={styles.linkButton}>Privacy Policy</Link>
          <Link href="/support/contact-support" style={styles.linkButton}>Contact Support</Link>
        </div>
      </section>
    </main>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>{title}</h2>
      <div style={styles.body}>{children}</div>
    </section>
  );
}

const css = `
html, body {
  background: #000000 !important;
}

a {
  transition: transform .25s ease, opacity .25s ease;
}

a:hover {
  transform: translateY(-2px);
  opacity: .9;
}

@media(max-width:760px){
  main {
    padding: 92px 18px 90px !important;
  }

  h1 {
    font-size: 46px !important;
    line-height: 1.02 !important;
    letter-spacing: -2px !important;
  }

  h2 {
    font-size: 28px !important;
    line-height: 1.18 !important;
  }

  p, li {
    font-size: 16px !important;
    line-height: 1.75 !important;
  }
}
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#000000",
    color: "#ffffff",
    padding: "96px 22px 120px",
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
  },

  hero: {
    maxWidth: 980,
    margin: "0 auto 64px",
    paddingBottom: 44,
    borderBottom: "1px solid rgba(255,255,255,.16)",
  },

  eyebrow: {
    margin: "0 0 28px",
    color: "#d6b56d",
    fontWeight: 900,
    letterSpacing: 4,
    fontSize: 13,
  },

  title: {
    margin: 0,
    fontSize: "clamp(54px,8vw,96px)",
    lineHeight: 0.95,
    letterSpacing: "-4px",
    fontWeight: 950,
  },

  subtitle: {
    marginTop: 28,
    maxWidth: 900,
    color: "#d1d5db",
    fontSize: "clamp(18px,2.5vw,23px)",
    lineHeight: 1.75,
    fontWeight: 500,
  },

  updated: {
    marginTop: 24,
    color: "#9ca3af",
    fontWeight: 700,
  },

  content: {
    maxWidth: 900,
    margin: "0 auto",
  },

  section: {
    marginBottom: 42,
  },

  heading: {
    margin: "0 0 16px",
    color: "#ffffff",
    fontSize: "clamp(30px,4vw,44px)",
    lineHeight: 1.12,
    letterSpacing: "-1px",
    fontWeight: 900,
  },

  body: {
    color: "#d1d5db",
    fontSize: 17,
    lineHeight: 1.85,
    fontWeight: 450,
  },

  links: {
    marginTop: 46,
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
  },

  linkButton: {
    minHeight: 54,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 22px",
    borderRadius: 999,
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(255,255,255,.16)",
    color: "#ffffff",
    fontWeight: 900,
    textDecoration: "none",
  },
};