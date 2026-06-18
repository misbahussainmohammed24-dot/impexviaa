"use client";

import type { CSSProperties } from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.gridBg} />
      <div style={styles.glowBlue} />
      <div style={styles.glowGold} />

      <section style={styles.hero}>
        <p style={styles.badge}>IMPEXVIAA PRIVACY POLICY</p>

        <h1 style={styles.title}>
          Privacy
          <br />
          Policy
        </h1>

        <p style={styles.subtitle}>
          This Privacy Policy explains how IMPEXVIAA collects, uses, stores,
          protects, processes, and manages information from buyers, suppliers,
          exporters, importers, manufacturers, sourcing teams, distributors, and
          other users of the IMPEXVIAA platform.
        </p>

        <div style={styles.heroMeta}>
          <span>Last Updated: June 2026</span>
          <span>Global B2B Marketplace</span>
          <span>Data Protection & Transparency</span>
        </div>
      </section>

      <section style={styles.content}>
        <PolicySection title="1. Introduction">
          <p>
            IMPEXVIAA respects user privacy and is committed to responsible data
            handling across its marketplace, supplier verification workflows,
            buyer tools, seller tools, subscription systems, HXN AI services,
            product advertising features, RFQ workflows, and support channels.
          </p>
          <p>
            This Privacy Policy describes what information we collect, how we use
            it, why we process it, how it may be shared, how long it may be
            retained, and what rights users may have regarding their information.
          </p>
          <p>
            This policy applies when users access IMPEXVIAA, create accounts,
            submit supplier verification documents, browse products, purchase
            subscriptions, submit RFQs, use HXN AI, create AI-assisted seller
            websites, contact support, report suppliers, or use any other
            IMPEXVIAA service.
          </p>
        </PolicySection>

        <PolicySection title="2. Information We Collect">
          <p>
            IMPEXVIAA may collect information directly provided by users during
            account creation, supplier verification, subscription purchase,
            marketplace activity, support requests, RFQ submissions, product
            listing creation, seller profile creation, and business
            communication.
          </p>

          <p>Information we may collect includes:</p>

          <ul>
            <li>Full name and contact details.</li>
            <li>Email address and phone number.</li>
            <li>Company name and business profile details.</li>
            <li>Business address, country, and region information.</li>
            <li>Business registration and tax identification information.</li>
            <li>Supplier verification documents and supporting records.</li>
            <li>Product information, product images, category details, and descriptions.</li>
            <li>MOQ, production capacity, pricing type, and export availability.</li>
            <li>RFQ submissions, buyer inquiries, and quotation-related information.</li>
            <li>Subscription plan details and billing support information.</li>
            <li>Support requests, complaints, supplier reports, and safety reports.</li>
            <li>Platform usage records and marketplace activity information.</li>
          </ul>
        </PolicySection>

        <PolicySection title="3. Supplier Verification Information">
          <p>
            IMPEXVIAA may request verification information from suppliers to help
            improve marketplace transparency, reduce fraudulent activity, and
            support buyer confidence. Verification information may include
            business registration proof, company certificates, tax information,
            ownership details, identity-related details, product documents,
            export records, and category-specific certificates.
          </p>

          <p>
            Supplier verification information may be used to review whether a
            supplier profile appears complete, organized, and ready for
            marketplace visibility. It may also be used to support fraud
            prevention, marketplace safety, account review, document analysis,
            and trust score generation.
          </p>

          <p>
            Suppliers are responsible for ensuring that all documents and
            information submitted to IMPEXVIAA are accurate, current, lawful, and
            not misleading.
          </p>
        </PolicySection>

        <PolicySection title="4. Trust Score System">
          <p>
            IMPEXVIAA may use verification information, business profile data,
            document completeness, product readiness, account activity, and
            marketplace signals to generate trust indicators or trust scores.
            These trust scores help buyers understand supplier profile
            completeness and verification status.
          </p>

          <p>
            A trust score may consider factors such as submitted documents,
            verification progress, consistency of business information, product
            information quality, category readiness, and supplier profile
            completeness.
          </p>

          <p>
            Trust scores are informational indicators only. They do not guarantee
            supplier performance, product quality, delivery success, financial
            stability, legal compliance, or transaction outcome.
          </p>
        </PolicySection>

        <PolicySection title="5. HXN AI Services">
          <p>
            HXN AI may process marketplace information to assist buyers,
            suppliers, exporters, sourcing teams, and platform administrators
            with trade-related tasks. These tasks may include sourcing guidance,
            supplier discovery, RFQ preparation, product content generation,
            seller website creation, trust score support, document explanation,
            marketplace search, and category guidance.
          </p>
          <p>
            HXN AI may analyze submitted information to generate recommendations,
            insights, supplier summaries, website content, product descriptions,
            sourcing suggestions, and marketplace support information.
          </p>

          <p>
            AI-generated information is intended to assist users and improve
            platform functionality. Users should independently review important
            information before making legal, financial, customs, regulatory, or
            commercial decisions.
          </p>
        </PolicySection>

        <PolicySection title="6. AI-Generated Seller Websites">
          <p>
            IMPEXVIAA may use supplier-submitted information to create
            AI-generated websites, digital stores, company pages, product
            catalogs, and marketplace storefronts under IMPEXVIAA infrastructure.
          </p>

          <p>
            These pages may display company details, products, certifications,
            trust indicators, categories, contact information, RFQ options, and
            seller profile information.
          </p>

          <p>
            Suppliers remain responsible for ensuring that all published
            information remains accurate, lawful, current, and not misleading.
          </p>

          <p>
            IMPEXVIAA may review, modify, restrict, or remove content where
            necessary to maintain platform quality, compliance, safety, and user
            trust.
          </p>
        </PolicySection>

        <PolicySection title="7. Product Advertising and Marketplace Visibility">
          <p>
            IMPEXVIAA may provide advertising opportunities, promoted listings,
            featured placements, category visibility, recommendation systems,
            search prioritization, and buyer-facing product discovery tools.
          </p>

          <p>
            Product information and supplier information may be used to improve
            discoverability throughout marketplace sections, search systems,
            category pages, AI-assisted recommendations, and promotional areas.
          </p>

          <p>
            Advertising and visibility services do not guarantee sales, buyer
            inquiries, transaction completion, commercial success, or supplier
            performance.
          </p>
        </PolicySection>

        <PolicySection title="8. RFQs and Business Communications">
          <p>
            IMPEXVIAA facilitates communication between buyers and suppliers
            through RFQs, inquiries, quotations, messaging systems, support
            channels, and marketplace workflows.
          </p>

          <p>
            RFQs, quotations, inquiries, support requests, and related business
            communications may be stored and processed to support marketplace
            operations, compliance activities, security investigations, fraud
            prevention, dispute handling, and service improvement.
          </p>

          <p>
            Communication records help improve transparency and may be used to
            investigate platform misuse, suspicious behavior, policy violations,
            and support-related concerns.
          </p>
        </PolicySection>

        <PolicySection title="9. Payment and Billing Information">
          <p>
            Subscription payments and service purchases may be processed through
            authorized third-party payment providers. IMPEXVIAA does not store
            complete payment card information.
          </p>

          <p>
            Payment providers may collect and process payment information
            according to their own privacy policies, security standards, and
            regulatory obligations.
          </p>

          <p>
            IMPEXVIAA may collect payment-related support information including
            payment confirmations, receipts, invoices, transaction references,
            account emails, billing inquiries, refund requests, and subscription
            records.
          </p>
        </PolicySection>

        <PolicySection title="10. Cookies, Analytics, and Technical Information">
          <p>
            IMPEXVIAA may use cookies, analytics systems, device identifiers,
            browser information, session information, IP addresses, security
            monitoring systems, and technical logs.
          </p>

          <p>
            These technologies help improve platform performance, service
            reliability, security, fraud prevention, technical support,
            marketplace usability, and user experience.
          </p>

          <p>
            Analytics tools may help us understand how users interact with the
            platform, which features are most useful, and how services can be
            improved.
          </p>
        </PolicySection>

        <PolicySection title="11. How We Use Information">
          <p>
            Information collected through IMPEXVIAA may be used for the
            following purposes:
          </p>

          <ul>
            <li>Creating and managing user accounts.</li>
            <li>Operating buyer and seller marketplace services.</li>
            <li>Reviewing supplier verification information.</li>
            <li>Generating trust indicators and trust scores.</li>
            <li>Providing HXN AI-assisted tools and recommendations.</li>
            <li>Creating AI-generated websites and seller pages.</li>
            <li>Operating RFQ workflows and sourcing tools.</li>
            <li>Supporting subscriptions and billing operations.</li>
            <li>Providing customer support.</li>
            <li>Investigating suspicious activity.</li>
            <li>Preventing fraud and platform abuse.</li>
            <li>Improving platform functionality and performance.</li>
            <li>Meeting legal and regulatory obligations.</li>
          </ul>
        </PolicySection>
        <PolicySection title="12. Information Sharing">
          <p>
            IMPEXVIAA does not sell personal information. Information may be
            shared only when necessary to operate the platform, provide services,
            process payments, support verification, improve safety, or comply
            with legal obligations.
          </p>

          <p>Information may be shared with:</p>

          <ul>
            <li>Cloud infrastructure and hosting providers.</li>
            <li>Payment providers and billing support services.</li>
            <li>Verification, compliance, and security providers.</li>
            <li>Technical service providers supporting platform operations.</li>
            <li>Analytics and performance monitoring providers.</li>
            <li>Professional advisors where necessary for legal or compliance matters.</li>
            <li>Legal, regulatory, or law enforcement authorities when required.</li>
          </ul>
        </PolicySection>

        <PolicySection title="13. Data Security">
          <p>
            IMPEXVIAA uses administrative, technical, and organizational security
            measures designed to protect user information from unauthorized
            access, misuse, disclosure, alteration, or destruction.
          </p>

          <p>
            Security measures may include access controls, infrastructure
            protection, monitoring, account safeguards, limited internal access,
            support review procedures, and fraud prevention workflows.
          </p>

          <p>
            No online platform can guarantee absolute security. Users should
            keep passwords secure, avoid sharing one-time passwords, and report
            suspicious account activity immediately.
          </p>
        </PolicySection>

        <PolicySection title="14. Data Retention">
          <p>
            IMPEXVIAA may retain information for operational, legal, compliance,
            security, verification, fraud prevention, billing, dispute
            resolution, and recordkeeping purposes.
          </p>

          <p>
            Retention periods depend on the nature of the information, account
            activity, legal requirements, business needs, payment records,
            verification history, and platform safety obligations.
          </p>
        </PolicySection>

        <PolicySection title="15. International Data Processing">
          <p>
            Because IMPEXVIAA serves global users, information may be processed
            or stored in different countries where platform infrastructure, cloud
            services, support tools, payment providers, analytics providers, or
            operational partners are located.
          </p>

          <p>
            IMPEXVIAA aims to use reasonable safeguards where required by
            applicable data-protection laws.
          </p>
        </PolicySection>

        <PolicySection title="16. User Rights">
          <p>
            Depending on applicable law, users may have certain rights regarding
            their information.
          </p>

          <ul>
            <li>Request access to information.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion where applicable.</li>
            <li>Request restriction of certain processing.</li>
            <li>Object to certain processing activities.</li>
            <li>Request data portability where applicable.</li>
            <li>Withdraw consent where processing is based on consent.</li>
          </ul>

          <p>
            To exercise privacy rights, users may contact IMPEXVIAA through the
            privacy or support email listed below.
          </p>
        </PolicySection>

        <PolicySection title="17. Business and Public Marketplace Information">
          <p>
            Some information submitted by sellers may be displayed publicly or
            to registered users, including company name, product listings,
            product images, descriptions, categories, verification indicators,
            trust signals, and seller profile information.
          </p>

          <p>
            Sellers should not submit confidential information for public display
            unless they are authorized and comfortable sharing it through the
            marketplace.
          </p>
        </PolicySection>

        <PolicySection title="18. Children's Privacy">
          <p>
            IMPEXVIAA is intended for business users and is not designed for
            children. We do not knowingly collect personal information from
            children.
          </p>
        </PolicySection>

        <PolicySection title="19. Changes to This Privacy Policy">
          <p>
            IMPEXVIAA may update this Privacy Policy from time to time to
            reflect changes in services, technology, legal requirements,
            business operations, AI tools, verification workflows, marketplace
            features, or payment systems.
          </p>

          <p>
            Updated versions will be posted on this page. Continued use of
            IMPEXVIAA after updates means users accept the revised policy.
          </p>
        </PolicySection>

        <PolicySection title="20. Contact Information">
          <p>
            For privacy, support, legal, compliance, or safety questions, users
            may contact IMPEXVIAA through official channels.
          </p>

          <p>
            Privacy: <strong>privacy@impexviaa.com</strong>
            <br />
            Legal: <strong>legal@impexviaa.com</strong>
            <br />
            Compliance: <strong>compliance@impexviaa.com</strong>
            <br />
            Support: <strong>support@impexviaa.com</strong>
          </p>
        </PolicySection>

        <div style={styles.links}>
          <Link href="/terms" style={styles.linkButton}>Terms of Service</Link>
          <Link href="/legal" style={styles.linkButton}>Legal Information</Link>
          <Link href="/support/contact-support" style={styles.linkButton}>Contact Support</Link>
        </div>
      </section>
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="policy-section" style={styles.section}>
      <h2 style={styles.heading}>{title}</h2>
      <div style={styles.body}>{children}</div>
    </section>
  );
}
const css = `
html, body {
  background: #000000 !important;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
}

.policy-section {
  animation: fadeUp .75s ease both;
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
    background:
      "radial-gradient(circle at top,#07111f 0%,#020617 36%,#000000 100%)",
    color: "#ffffff",
    padding: "96px 22px 120px",
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
    position: "relative",
    overflowX: "hidden",
  },

  gridBg: {
    position: "absolute",
    inset: 0,
    opacity: 0.055,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
    backgroundSize: "80px 80px",
  },

  glowBlue: {
    position: "absolute",
    top: -260,
    left: "50%",
    transform: "translateX(-50%)",
    width: 760,
    height: 760,
    borderRadius: "50%",
    background: "rgba(96,165,250,.14)",
    filter: "blur(150px)",
  },

  glowGold: {
    position: "absolute",
    bottom: 200,
    left: -220,
    width: 620,
    height: 620,
    borderRadius: "50%",
    background: "rgba(214,181,109,.10)",
    filter: "blur(140px)",
  },

  hero: {
    maxWidth: 980,
    margin: "0 auto 64px",
    paddingBottom: 44,
    borderBottom: "1px solid rgba(255,255,255,.16)",
    position: "relative",
    zIndex: 2,
  },

  badge: {
    margin: "0 0 28px",
    color: "#d6b56d",
    fontWeight: 950,
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

  heroMeta: {
    marginTop: 28,
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    color: "#9ca3af",
    fontWeight: 700,
    fontSize: 14,
  },

  content: {
    maxWidth: 900,
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },

  section: {
    marginBottom: 44,
  },

  heading: {
    margin: "0 0 16px",
    color: "#ffffff",
    fontSize: "clamp(30px,4vw,44px)",
    lineHeight: 1.12,
    letterSpacing: "-1px",
    fontWeight: 950,
  },

  body: {
    color: "#d1d5db",
    fontSize: 17,
    lineHeight: 1.86,
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