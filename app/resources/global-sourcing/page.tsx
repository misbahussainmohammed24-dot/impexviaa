"use client";

import type { CSSProperties } from "react";
import Link from "next/link";

const sourcingCards = [
  {
    title: "Supplier Discovery",
    text: "Find suppliers across categories, countries, product segments, and export markets using structured marketplace information.",
  },
  {
    title: "Buyer Workflow",
    text: "Understand how buyers identify products, compare suppliers, request quotations, review documents, and shortlist trade partners.",
  },
  {
    title: "Risk Review",
    text: "Review supplier identity, documents, pricing, product claims, payment requests, and communication before trading.",
  },
  {
    title: "HXN AI Guidance",
    text: "Use AI-assisted sourcing guidance to understand product requirements, supplier readiness, documents, and sourcing questions.",
  },
];

const sourcingSteps = [
  {
    title: "Define product requirements",
    text: "Buyers should define product name, specifications, quality expectations, packaging, quantity, target country, delivery timeline, and required documents.",
  },
  {
    title: "Search suppliers",
    text: "Buyers can review supplier profiles, product listings, company information, export capacity, category focus, and verification indicators.",
  },
  {
    title: "Compare options",
    text: "A sourcing decision should compare price, MOQ, capacity, delivery ability, documents, communication quality, and supplier credibility.",
  },
  {
    title: "Request quotations",
    text: "Buyers should request quotations including product details, price basis, quantity, packaging, delivery terms, payment terms, and document availability.",
  },
  {
    title: "Review documents",
    text: "Before proceeding, buyers should review business registration, product documents, test reports, certificates, and import-related documents.",
  },
  {
    title: "Plan shipment",
    text: "Buyers should confirm logistics, customs requirements, import duties, labeling, packaging, inspection needs, and local regulations.",
  },
];

const checklist = [
  "Product specifications are clearly defined.",
  "Target country and destination requirements are reviewed.",
  "Supplier profile and business information are checked.",
  "MOQ, capacity, price basis, and delivery timeline are confirmed.",
  "Required certificates and documents are requested.",
  "Quotation details are received in writing.",
  "Payment terms are reviewed carefully.",
  "Shipping method and Incoterms are discussed.",
  "Compliance, customs, and import restrictions are checked.",
  "All communication and documents are saved for records.",
];

const riskItems = [
  "Unclear supplier identity",
  "Incomplete or expired documents",
  "Unrealistic pricing",
  "Pressure to pay urgently",
  "Payment request to unrelated accounts",
  "Copied product images",
  "Inconsistent company information",
  "Refusal to provide product details",
];

export default function GlobalSourcingPage() {
  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.gridBg} />
      <div style={styles.glowBlue} />
      <div style={styles.glowGold} />

      <section style={styles.hero}>
        <div style={styles.badge}>IMPEXVIAA RESOURCES · GLOBAL SOURCING</div>

        <h1 style={styles.title}>
          Global Sourcing
          <br />
          Knowledge Center
        </h1>

        <p style={styles.subtitle}>
          Global sourcing helps buyers discover suppliers, compare product
          opportunities, request quotations, review documents, and prepare for
          international trade. IMPEXVIAA provides structured marketplace resources
          to support sourcing decisions across categories, countries, and global
          supply chains.
        </p>
      </section>

      <section style={styles.cardGrid}>
        {sourcingCards.map((card) => (
          <div key={card.title} className="resource-card" style={styles.card}>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardText}>{card.text}</p>
          </div>
        ))}
      </section>

      <section style={styles.content}>
        <h2 style={styles.sectionTitle}>What Is Global Sourcing?</h2>

        <p style={styles.paragraph}>
          Global sourcing is the process of finding, evaluating, and working with
          suppliers from different countries to obtain products, materials, or
          manufacturing support. Businesses use global sourcing to access wider
          supplier options, improve pricing opportunities, diversify supply
          chains, enter new product categories, and reduce dependency on a single
          local market.
        </p>

        <p style={styles.paragraph}>
          A successful sourcing process requires more than searching for a cheap
          supplier. Buyers should clearly understand product requirements,
          supplier credibility, required documents, shipping terms, customs
          obligations, payment risks, quality expectations, and destination
          country regulations before moving forward.
        </p>

        <p style={styles.paragraph}>
          IMPEXVIAA supports global sourcing by organizing supplier information,
          product listings, verification signals, RFQ workflows, buyer guidance,
          and HXN AI support into one structured marketplace environment.
        </p>

        <h2 style={styles.sectionTitle}>Buyer Sourcing Workflow</h2>

        <p style={styles.paragraph}>
          Buyers should begin by defining the product they want to source. This
          includes product name, grade, size, specifications, material, quality
          standard, packaging type, destination country, target price range,
          quantity, delivery timeline, and required documents.
        </p>

        <p style={styles.paragraph}>
          After defining the requirement, buyers can compare suppliers based on
          business profile, product information, country, MOQ, production
          capacity, documentation, export readiness, communication quality, and
          verification status. A careful comparison helps buyers avoid weak
          sourcing decisions.
        </p>

        <div style={styles.workflowGrid}>
          {sourcingSteps.map((step, index) => (
            <div key={step.title} className="resource-card" style={styles.workflowCard}>
              <span style={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
              <h3 style={styles.cardTitle}>{step.title}</h3>
              <p style={styles.cardText}>{step.text}</p>
            </div>
          ))}
        </div>

        <h2 style={styles.sectionTitle}>Supplier Evaluation</h2>

        <p style={styles.paragraph}>
          Supplier evaluation is one of the most important parts of global
          sourcing. Buyers should review whether the supplier appears legitimate,
          whether company information is consistent, whether documents are clear,
          whether product details are realistic, and whether communication is
          professional.
        </p>

        <p style={styles.paragraph}>
          A strong supplier profile should include company details, business
          registration information, product categories, export capacity, product
          images, MOQ, certificates where applicable, and clear contact details.
          Buyers should be cautious when a supplier refuses to provide basic
          product information, avoids document questions, or pressures the buyer
          to make urgent payment.
        </p>

        <h2 style={styles.sectionTitle}>RFQ Best Practices</h2>

        <p style={styles.paragraph}>
          RFQ means Request for Quotation. It is used by buyers to ask suppliers
          for pricing and commercial information. A professional RFQ should
          include product specifications, quantity, packaging requirements,
          destination country, required documents, target timeline, shipping
          preference, and any quality expectations.
        </p>

        <p style={styles.paragraph}>
          Buyers should request quotations in writing and keep records of all
          replies. A complete quotation should clearly mention price, currency,
          MOQ, delivery term, payment term, packaging, production timeline,
          document availability, and shipment conditions.
        </p>

        <h2 style={styles.sectionTitle}>Documents in Global Sourcing</h2>

        <p style={styles.paragraph}>
          Documents help buyers understand whether a supplier is prepared for
          international trade. Common documents may include business registration,
          tax registration, product specification sheet, commercial invoice,
          packing list, certificate of origin, laboratory test report, inspection
          report, food safety certificate, phytosanitary certificate, and other
          category-specific documents.
        </p>

        <p style={styles.paragraph}>
          Document requirements depend on product type, destination country,
          buyer policy, and import rules. Buyers should not assume that one
          document is enough for every product or country. Importers should check
          local rules and consult qualified professionals where required.
        </p>

        <h2 style={styles.sectionTitle}>Sourcing Risk Management</h2>

        <p style={styles.paragraph}>
          International sourcing carries commercial, logistical, documentation,
          payment, communication, and compliance risks. Buyers should not rely
          only on product images or verbal promises. Strong sourcing decisions
          require written records, document checks, supplier comparison, and clear
          trade terms.
        </p>

        <div style={styles.documentGrid}>
          {riskItems.map((item) => (
            <div key={item} className="resource-card" style={styles.documentItem}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={styles.sectionTitle}>Payment and Communication Safety</h2>

        <p style={styles.paragraph}>
          Buyers should carefully review payment terms before sending money.
          Payment requests should match the supplier’s verified business details
          and should be supported by proper invoices, written communication, and
          clear commercial terms. Sudden changes in payment details should be
          treated carefully.
        </p>

        <p style={styles.paragraph}>
          Buyers should avoid sending payments to unrelated personal accounts or
          using unclear payment channels without proper documentation. If a
          supplier pressures the buyer to pay urgently, refuses documents, or
          provides inconsistent business information, the buyer should pause the
          transaction and report the concern.
        </p>

        <h2 style={styles.sectionTitle}>How HXN AI Supports Sourcing</h2>

        <p style={styles.paragraph}>
          HXN AI is designed to assist users with sourcing questions, product
          discovery guidance, document understanding, category explanation, RFQ
          preparation, and supplier comparison support. AI guidance can help
          buyers understand what to ask, what documents may be relevant, and how
          to organize sourcing decisions.
        </p>

        <p style={styles.paragraph}>
          AI support does not replace professional advice, legal review, customs
          consultation, financial guidance, or independent buyer due diligence.
          Buyers should verify important details with suppliers, logistics
          providers, customs professionals, or regulatory authorities where
          needed.
        </p>

        <h2 style={styles.sectionTitle}>Global Sourcing Checklist</h2>

        <div style={styles.checklistBox}>
          {checklist.map((item) => (
            <div key={item} style={styles.checklistItem}>
              <span style={styles.check}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <h2 style={styles.sectionTitle}>How IMPEXVIAA Helps Global Buyers</h2>

        <p style={styles.paragraph}>
          IMPEXVIAA helps buyers explore product categories, discover supplier
          profiles, review product information, understand documents, prepare
          RFQs, access trade resources, and use HXN AI guidance. The platform is
          built to make sourcing more structured, transparent, and accessible.
        </p>

        <p style={styles.paragraph}>
          Buyers remain responsible for final sourcing decisions, contract terms,
          payments, customs compliance, import approvals, and independent due
          diligence. IMPEXVIAA provides marketplace infrastructure and support
          resources, but it does not guarantee supplier performance, product
          quality, legal compliance, or transaction success.
        </p>

        <h2 style={styles.sectionTitle}>Important Notice</h2>

        <p style={styles.paragraph}>
          The information provided in this Global Sourcing Knowledge Center is
          intended for educational and informational purposes only. IMPEXVIAA
          does not provide legal, customs, tax, financial, regulatory, or
          professional advice. Buyers and suppliers should consult qualified
          advisors and applicable authorities regarding specific trade
          activities, product regulations, customs procedures, and compliance
          obligations.
        </p>

        <div style={styles.buttons}>
          <Link href="/marketplace/agriculture" style={styles.primaryButton}>
            Explore Marketplace
          </Link>

          <Link href="/support/contact-support" style={styles.secondaryButton}>
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}

const css = `
html, body {
  background: #000000 !important;
}

.resource-card {
  transition: transform .32s ease, border-color .32s ease, box-shadow .32s ease;
}

.resource-card:hover {
  transform: translateY(-6px);
  border-color: rgba(96,165,250,.45) !important;
  box-shadow: 0 30px 100px rgba(0,0,0,.55) !important;
}

a {
  transition: transform .25s ease;
}

a:hover {
  transform: translateY(-3px);
}

@media(max-width:760px){
  main {
    padding: 42px 16px 90px !important;
  }

  h1 {
    font-size: 44px !important;
    line-height: 1.03 !important;
    letter-spacing: -2px !important;
  }

  h2 {
    font-size: 32px !important;
    line-height: 1.05 !important;
  }
}
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top,#111827 0%,#030712 42%,#000000 100%)",
    color: "#ffffff",
    padding: "72px 20px 120px",
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
    position: "relative",
    overflowX: "hidden",
  },

  gridBg: {
    position: "absolute",
    inset: 0,
    opacity: 0.06,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
    backgroundSize: "80px 80px",
  },

  glowBlue: {
    position: "absolute",
    top: -220,
    right: -140,
    width: 620,
    height: 620,
    borderRadius: "50%",
    background: "rgba(96,165,250,.16)",
    filter: "blur(140px)",
  },

  glowGold: {
    position: "absolute",
    bottom: 240,
    left: -210,
    width: 620,
    height: 620,
    borderRadius: "50%",
    background: "rgba(214,181,109,.12)",
    filter: "blur(140px)",
  },

  hero: {
    maxWidth: 1120,
    margin: "0 auto 58px",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },

  badge: {
    display: "inline-flex",
    padding: "13px 24px",
    borderRadius: 999,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(214,181,109,.25)",
    color: "#d6b56d",
    fontSize: 12,
    fontWeight: 950,
    letterSpacing: 4,
    marginBottom: 26,
  },

  title: {
    margin: 0,
    fontSize: "clamp(50px,8vw,96px)",
    lineHeight: 0.96,
    letterSpacing: "-4px",
    fontWeight: 950,
  },

  subtitle: {
    maxWidth: 940,
    margin: "28px auto 0",
    color: "#cbd5e1",
    fontSize: "clamp(18px,3vw,24px)",
    lineHeight: 1.72,
    fontWeight: 650,
  },

  cardGrid: {
    maxWidth: 1180,
    margin: "0 auto 58px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: 18,
    position: "relative",
    zIndex: 2,
  },

  card: {
    padding: 28,
    borderRadius: 30,
    background:
      "linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.11)",
    backdropFilter: "blur(22px)",
  },

  cardTitle: {
    marginTop: 0,
    fontSize: 24,
    fontWeight: 950,
    color: "#ffffff",
  },

  cardText: {
    color: "#dbeafe",
    lineHeight: 1.75,
    fontWeight: 600,
    fontSize: 16,
  },

  content: {
    maxWidth: 1040,
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },

  sectionTitle: {
    margin: "62px 0 18px",
    fontSize: "clamp(34px,5vw,58px)",
    lineHeight: 1,
    letterSpacing: "-2px",
    fontWeight: 950,
    color: "#ffffff",
  },

  paragraph: {
    color: "#dbeafe",
    fontSize: 18,
    lineHeight: 1.95,
    fontWeight: 550,
    margin: "0 0 22px",
  },

  workflowGrid: {
    margin: "28px 0 18px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: 18,
  },

  workflowCard: {
    padding: 28,
    borderRadius: 30,
    background: "rgba(255,255,255,.055)",
    border: "1px solid rgba(255,255,255,.11)",
    backdropFilter: "blur(22px)",
  },

  stepNumber: {
    color: "#60a5fa",
    fontWeight: 950,
    letterSpacing: 3,
  },

  documentGrid: {
    margin: "28px 0 18px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 14,
  },

  documentItem: {
    minHeight: 74,
    padding: "18px 20px",
    borderRadius: 22,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.11)",
    color: "#ffffff",
    fontWeight: 850,
    display: "flex",
    alignItems: "center",
  },

  checklistBox: {
    margin: "28px 0 18px",
    padding: 28,
    borderRadius: 30,
    background:
      "linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.11)",
    display: "grid",
    gap: 14,
  },

  checklistItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    color: "#e5e7eb",
    fontSize: 17,
    lineHeight: 1.6,
    fontWeight: 650,
  },

  check: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg,#60a5fa,#d6b56d)",
    color: "#020617",
    fontWeight: 950,
    flexShrink: 0,
  },

  buttons: {
    marginTop: 32,
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
  },

  primaryButton: {
    minHeight: 58,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 24px",
    borderRadius: 999,
    background: "linear-gradient(135deg,#d6b56d,#60a5fa)",
    color: "#020617",
    fontWeight: 950,
    textDecoration: "none",
  },

  secondaryButton: {
    minHeight: 58,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 24px",
    borderRadius: 999,
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(255,255,255,.14)",
    color: "#ffffff",
    fontWeight: 950,
    textDecoration: "none",
  },
};