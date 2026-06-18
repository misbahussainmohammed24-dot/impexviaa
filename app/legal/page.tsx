"use client";

import type { CSSProperties } from "react";
import Link from "next/link";

const legalPoints = [
  "B2B marketplace infrastructure",
  "Supplier verification workflows",
  "AI-assisted trade tools",
  "Buyer and seller support channels",
  "Fraud prevention and safety review",
  "Document organization support",
];

export default function LegalPage() {
  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.gridBg} />
      <div style={styles.glowBlue} />
      <div style={styles.glowGold} />

      <section className="hero" style={styles.hero}>
        <p style={styles.badge}>IMPEXVIAA LEGAL INFORMATION</p>

        <h1 style={styles.title}>
          Legal Framework &
          <br />
          Regulatory Information
        </h1>

        <p style={styles.subtitle}>
          This page explains the legal structure, platform responsibilities,
          user obligations, compliance principles, intellectual property rights,
          dispute handling procedures, regulatory cooperation, and contact
          information related to IMPEXVIAA.
        </p>

        <div style={styles.heroMeta}>
          <span>Last Updated: June 2026</span>
          <span>Global B2B Marketplace</span>
          <span>International Trade Platform</span>
        </div>
      </section>

      <section style={styles.quickList}>
        {legalPoints.map((item) => (
          <span key={item} style={styles.quickItem}>
            {item}
          </span>
        ))}
      </section>

      <section style={styles.content}>
        <LegalSection title="1. Legal Overview">
          <p>
            IMPEXVIAA is designed as a digital B2B import-export marketplace and
            trade-support platform. The platform helps buyers, sellers,
            exporters, importers, manufacturers, wholesalers, distributors, and
            sourcing teams discover business opportunities, organize product
            information, communicate through trade workflows, access educational
            resources, and use AI-assisted marketplace tools.
          </p>
          <p>
            IMPEXVIAA provides technology infrastructure and support resources.
            It does not directly manufacture goods, own listed products, operate
            as the seller of third-party products, act as a buyer, or guarantee
            the completion of trade transactions between users.
          </p>
        </LegalSection>

        <LegalSection title="2. Company and Platform Role">
          <p>
            IMPEXVIAA operates as a platform that supports digital discovery,
            supplier presentation, document organization, product visibility,
            RFQ preparation, buyer-seller communication, AI-assisted guidance,
            and marketplace safety processes.
          </p>
          <p>
            IMPEXVIAA is not a bank, payment institution, customs broker,
            freight forwarder, shipping company, insurance provider, legal
            advisor, tax advisor, financial advisor, regulatory authority, or
            government agency.
          </p>
          <p>
            Users remain responsible for their own contracts, payments,
            shipments, customs clearance, taxes, regulatory requirements,
            product compliance, legal obligations, and business decisions.
          </p>
        </LegalSection>

        <LegalSection title="3. Legal Status of Marketplace Information">
          <p>
            Information displayed on IMPEXVIAA may include supplier profiles,
            product listings, documents, trust indicators, descriptions, images,
            RFQ information, and AI-assisted content. Such information is
            provided for marketplace discovery and business communication.
          </p>
          <p>
            IMPEXVIAA may review, organize, restrict, or remove information when
            necessary, but users remain responsible for the accuracy and legality
            of the information they submit.
          </p>
        </LegalSection>

        <LegalSection title="4. Supplier Verification and Trust Signals">
          <p>
            IMPEXVIAA may provide supplier verification workflows to review
            business identity, company details, registration information,
            submitted documents, product information, and category-specific
            documentation. Verification is intended to improve marketplace
            transparency and buyer confidence.
          </p>
          <p>
            Verification does not guarantee supplier performance, product
            quality, delivery success, legal compliance, financial stability, or
            transaction completion. Buyers should always perform independent due
            diligence before entering into trade agreements.
          </p>
          <p>
            After verification, IMPEXVIAA may use HXN AI to generate trust score
            indicators based on submitted information, document completeness,
            profile quality, and marketplace readiness. Trust scores are
            informational indicators only and are not legal or financial
            guarantees.
          </p>
        </LegalSection>

        <LegalSection title="5. HXN AI and Automated Tools">
          <p>
            IMPEXVIAA may provide AI-assisted features under HXN AI. These tools
            may support supplier guidance, buyer sourcing questions, document
            explanations, product descriptions, RFQ preparation, trust score
            analysis, seller website generation, and marketplace assistance.
          </p>
          <p>
            AI-generated output may not always be complete, current, accurate,
            or suitable for every business situation. Users should review AI
            output before using it in business communication, product listings,
            legal documentation, or commercial decisions.
          </p>
          <p>
            HXN AI does not provide legal, customs, tax, financial, regulatory,
            insurance, or professional advice.
          </p>
        </LegalSection>

        <LegalSection title="6. AI-Generated Seller Websites">
          <p>
            IMPEXVIAA may help sellers create AI-assisted digital stores or
            seller pages using IMPEXVIAA domain infrastructure. These pages may
            display company information, product listings, product categories,
            documents, certification details, RFQ options, and seller profile
            information.
          </p>
          <p>
            Sellers remain responsible for ensuring that information displayed
            on their AI-generated store is accurate, lawful, current, and not
            misleading. IMPEXVIAA may restrict, remove, or review seller pages
            that contain fake documents, misleading claims, prohibited products,
            copied content, or policy violations.
          </p>
        </LegalSection>

        <LegalSection title="7. Product Advertising and Visibility">
          <p>
            IMPEXVIAA may provide product advertising or promotional placement
            opportunities within marketplace categories, product discovery
            pages, supplier sections, and buyer-facing areas. Advertising is
            designed to improve product visibility, but it does not guarantee
            sales, buyer responses, transaction success, or business outcomes.
          </p>
          <p>
            Sellers are responsible for ensuring that advertised products are
            real, available, accurately described, and compliant with applicable
            rules and platform policies.
          </p>
        </LegalSection>

        <LegalSection title="8. Regulatory Compliance Principles">
          <p>
            IMPEXVIAA supports responsible marketplace operation through
            verification workflows, fraud prevention measures, support channels,
            document review pathways, user reporting tools, and safety review
            procedures.
          </p>
          <p>
            The platform may review suspicious activity, investigate reports,
            restrict accounts, remove listings, request additional information,
            or cooperate with lawful requests from regulators, courts, or law
            enforcement authorities where required.
          </p>
        </LegalSection>

        <LegalSection title="9. User Legal Responsibilities">
          <p>
            Users are responsible for complying with all applicable laws,
            regulations, import-export rules, sanctions requirements, customs
            procedures, product standards, tax obligations, business licensing
            requirements, and payment rules that apply to their activities.
          </p>
          <ul>
            <li>Users must provide accurate and lawful information.</li>
            <li>Users must not submit fake or misleading documents.</li>
            <li>Users must not list illegal, unsafe, or prohibited products.</li>
            <li>Users must not impersonate another business or person.</li>
            <li>Users must maintain proper trade, payment, and communication records.</li>
          </ul>
        </LegalSection>

        <LegalSection title="10. Intellectual Property">
          <p>
            IMPEXVIAA’s brand name, platform design, interface, logos, product
            structure, website content, AI tools, software features, visual
            assets, and related materials are owned by IMPEXVIAA or its
            licensors unless otherwise stated.
          </p>
          <p>
            Users may not copy, reproduce, resell, misuse, distribute, or
            commercially exploit IMPEXVIAA intellectual property without written
            permission.
          </p>
        </LegalSection>

        <LegalSection title="11. User Content and Submitted Materials">
          <p>
            Users may submit business details, product information, images,
            documents, certifications, RFQs, messages, support requests, and
            other materials. Users confirm that they have the right to submit
            such content and that it does not violate applicable law,
            third-party rights, or platform policies.
          </p>
          <p>
            IMPEXVIAA may process, display, review, restrict, remove, or use
            submitted content for platform operation, verification, support,
            fraud prevention, safety review, and service improvement.
          </p>
        </LegalSection>

        <LegalSection title="12. Fraud Prevention and Safety Reviews">
          <p>
            IMPEXVIAA may use manual review, automated tools, support reports,
            document checks, and risk signals to identify suspicious activity,
            fake documents, misleading product claims, unsafe payment requests,
            impersonation, and marketplace misuse.
          </p>
          <p>
            Users can report suspicious suppliers, fake documents, unsafe
            communication, or policy violations through the Report Supplier page
            or support channels.
          </p>
        </LegalSection>

        <LegalSection title="13. Dispute Handling">
          <p>
            IMPEXVIAA may provide support channels for users to report platform
            concerns, supplier issues, payment questions, document concerns, or
            suspicious activity. IMPEXVIAA may review information submitted by
            users and take platform-level action where appropriate.
          </p>
          <p>
            IMPEXVIAA is not a court, arbitrator, customs authority, payment
            authority, or legal representative. Commercial disputes between
            buyers and sellers remain the responsibility of the parties involved.
          </p>
        </LegalSection>

        <LegalSection title="14. Regulatory Cooperation">
          <p>
            IMPEXVIAA may cooperate with lawful requests from regulators, courts,
            law enforcement agencies, payment providers, compliance reviewers,
            or other authorized entities where required by applicable law or
            platform safety obligations.
          </p>
          <p>
            This may include preserving records, reviewing suspicious accounts,
            restricting access, or providing information where legally required.
          </p>
        </LegalSection>

        <LegalSection title="15. Limitation of Platform Liability">
          <p>
            IMPEXVIAA provides marketplace technology and support resources. To
            the maximum extent permitted by applicable law, IMPEXVIAA is not
            liable for losses arising from supplier conduct, buyer conduct,
            failed transactions, shipping delays, customs issues, payment
            disputes, document rejection, product quality issues, third-party
            actions, or business decisions made by users.
          </p>
        </LegalSection>

        <LegalSection title="16. Legal Contact Information">
          <p>
            For legal, compliance, regulatory, safety, or platform policy
            questions, users may contact IMPEXVIAA through the appropriate
            support channel.
          </p>
          <p>
            Legal: <strong>legal@impexviaa.com</strong>
            <br />
            Compliance: <strong>compliance@impexviaa.com</strong>
            <br />
            Trust & Safety: <strong>safety@impexviaa.com</strong>
            <br />
            General Support: <strong>support@impexviaa.com</strong>
          </p>
        </LegalSection>

        <div style={styles.links}>
          <Link href="/terms" style={styles.linkButton}>Terms of Service</Link>
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
    <section className="legal-section" style={styles.section}>
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

.hero-area,
.legal-section {
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

  quickList: {
    maxWidth: 980,
    margin: "0 auto 58px",
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    position: "relative",
    zIndex: 2,
  },

  quickItem: {
    padding: "10px 14px",
    borderRadius: 999,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.12)",
    color: "#cbd5e1",
    fontWeight: 800,
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