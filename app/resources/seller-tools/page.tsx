"use client";

import type { CSSProperties } from "react";
import Link from "next/link";

const toolCards = [
  {
    title: "AI Store Builder",
    text: "HXN AI helps create a professional seller website using IMPEXVIAA domain infrastructure, so suppliers can present products with a clean digital presence.",
  },
  {
    title: "AI Trust Score",
    text: "After verification, IMPEXVIAA can generate a trust score based on submitted business information, documents, profile completeness, and marketplace readiness.",
  },
  {
    title: "Product Advertising",
    text: "Sellers can prepare products for promotional placement inside IMPEXVIAA marketplace sections to improve visibility among relevant buyers.",
  },
  {
    title: "RFQ Assistant",
    text: "Seller tools help organize buyer inquiries, quotation preparation, product details, MOQ, capacity, and communication records.",
  },
];

const sellerTools = [
  "Supplier profile creation",
  "Business verification support",
  "AI-generated seller website",
  "Product listing management",
  "Document organization",
  "Trust score generation after verification",
  "Marketplace advertising placement",
  "RFQ and quotation support",
  "Buyer inquiry preparation",
  "HXN AI business guidance",
];

const workflow = [
  {
    title: "Create seller profile",
    text: "The seller provides business information, product category, company details, contact details, export capacity, and basic marketplace information.",
  },
  {
    title: "Submit documents",
    text: "The seller submits business registration, tax information, product documents, certificates, and category-specific documents where required.",
  },
  {
    title: "Verification review",
    text: "IMPEXVIAA reviews submitted information and documents to assess profile completeness, document clarity, business readiness, and marketplace suitability.",
  },
  {
    title: "AI trust score",
    text: "After verification, HXN AI can generate a trust score that helps buyers understand the supplier’s profile readiness, document status, and marketplace confidence indicators.",
  },
  {
    title: "AI website creation",
    text: "HXN AI can help create a professional seller website using IMPEXVIAA domain infrastructure, such as a branded supplier page connected to the platform.",
  },
  {
    title: "Marketplace visibility",
    text: "Verified sellers may prepare product listings, respond to RFQs, receive buyer interest, and use advertising placement opportunities inside IMPEXVIAA.",
  },
];

export default function SellerToolsPage() {
  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.gridBg} />
      <div style={styles.glowBlue} />
      <div style={styles.glowGold} />

      <section style={styles.hero}>
        <div style={styles.badge}>IMPEXVIAA RESOURCES · SELLER TOOLS</div>

        <h1 style={styles.title}>
          Seller Tools &
          <br />
          AI Growth System
        </h1>

        <p style={styles.subtitle}>
          IMPEXVIAA seller tools are designed to help exporters, manufacturers,
          suppliers, wholesalers, and distributors build a professional digital
          presence, organize documents, present products, respond to buyers, and
          prepare for global trade opportunities.
        </p>
      </section>

      <section style={styles.cardGrid}>
        {toolCards.map((card) => (
          <div key={card.title} className="resource-card" style={styles.card}>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardText}>{card.text}</p>
          </div>
        ))}
      </section>

      <section style={styles.content}>
        <h2 style={styles.sectionTitle}>What Are IMPEXVIAA Seller Tools?</h2>

        <p style={styles.paragraph}>
          Seller tools are platform features that help suppliers prepare a stronger
          business profile for international buyers. These tools may include profile
          creation, document organization, product listing management, verification
          support, RFQ preparation, buyer communication support, marketplace
          advertising, AI-generated website support, and trust score generation after
          verification.
        </p>

        <p style={styles.paragraph}>
          For many exporters, having products is not enough. Buyers often want clear
          company information, product details, documentation, certification status,
          MOQ, production capacity, packaging information, export experience, and
          reliable communication. IMPEXVIAA helps sellers organize these elements in a
          structured way.
        </p>

        <h2 style={styles.sectionTitle}>AI-Generated Seller Website</h2>

        <p style={styles.paragraph}>
          One of the important seller tools planned inside IMPEXVIAA is AI-supported
          website creation. HXN AI can help sellers build a professional digital
          presence using IMPEXVIAA domain infrastructure. This allows suppliers to
          present company information, product categories, documents, certifications,
          and buyer-facing details through a branded web page connected to the
          marketplace.
        </p>

        <p style={styles.paragraph}>
          A seller website can help exporters look more professional when approaching
          buyers. Instead of sending only images or informal messages, sellers can share
          a structured supplier page that includes business information, product
          listings, company description, available documents, and marketplace profile
          details.
        </p>

        <p style={styles.paragraph}>
          The website generated through IMPEXVIAA does not replace the seller’s legal
          responsibilities. Sellers remain responsible for the accuracy of company
          claims, product details, certification information, pricing information, and
          documents displayed on their profile or website.
        </p>

        <h2 style={styles.sectionTitle}>AI Trust Score After Verification</h2>

        <p style={styles.paragraph}>
          IMPEXVIAA can use HXN AI to generate a trust score after a seller completes
          the verification process. The trust score may consider profile completeness,
          business information, submitted documents, product details, category
          readiness, document clarity, and platform activity signals.
        </p>

        <p style={styles.paragraph}>
          The trust score is intended to help buyers understand whether a supplier
          profile appears complete, organized, and ready for marketplace interaction.
          It is not a guarantee of product quality, delivery performance, legal
          compliance, or transaction success. Buyers should still conduct their own due
          diligence before entering into trade agreements.
        </p>

        <p style={styles.paragraph}>
          Sellers can improve their trust presentation by submitting accurate business
          information, valid documents, complete product details, clear images,
          realistic MOQ and capacity information, and professional communication.
        </p>

        <h2 style={styles.sectionTitle}>Marketplace Product Advertising</h2>

        <p style={styles.paragraph}>
          IMPEXVIAA may provide advertising or promotional placement opportunities for
          seller products inside the platform. Product advertising can help sellers
          improve visibility among buyers browsing categories such as agriculture,
          pharmaceuticals, machinery, textiles, electronics, packaging, metals,
          chemicals, auto parts, and other trade segments.
        </p>

        <p style={styles.paragraph}>
          Advertising placement does not automatically mean that a seller is guaranteed
          sales, buyer responses, or transaction completion. The effectiveness of
          product promotion depends on product demand, pricing, documentation, supplier
          credibility, buyer interest, market conditions, and product presentation.
        </p>

        <p style={styles.paragraph}>
          Promotional content should be accurate and not misleading. Sellers should not
          advertise false certifications, unrealistic capacity, fake company details,
          copied product images, or unavailable goods.
        </p>

        <h2 style={styles.sectionTitle}>Seller Workflow</h2>

        <div style={styles.workflowGrid}>
          {workflow.map((item, index) => (
            <div key={item.title} className="resource-card" style={styles.workflowCard}>
              <span style={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>

        <h2 style={styles.sectionTitle}>Seller Tool Checklist</h2>

        <div style={styles.checklistBox}>
          {sellerTools.map((item) => (
            <div key={item} style={styles.checklistItem}>
              <span style={styles.check}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <h2 style={styles.sectionTitle}>Document Organization</h2>

        <p style={styles.paragraph}>
          International buyers often request supporting documents before entering into
          sourcing discussions. These may include business registration proof, tax
          registration, product specification sheets, laboratory test reports, safety
          certificates, food certificates, phytosanitary certificates, export licenses,
          board registrations, and other category-specific records.
        </p>

        <p style={styles.paragraph}>
          Seller tools help organize these documents in a clearer manner. Well-organized
          documentation can reduce buyer hesitation and make supplier communication more
          professional. However, document visibility does not remove the seller’s
          responsibility to keep all documents accurate, valid, current, and legally
          usable.
        </p>

        <h2 style={styles.sectionTitle}>RFQ and Buyer Inquiry Support</h2>

        <p style={styles.paragraph}>
          RFQ means Request for Quotation. Buyers use RFQs to ask suppliers for price,
          quantity, delivery time, packaging, payment terms, document availability, and
          product specifications. Seller tools can help suppliers prepare more complete
          responses to buyer inquiries.
        </p>

        <p style={styles.paragraph}>
          A strong RFQ response should include product description, MOQ, capacity,
          pricing basis, packaging details, delivery terms, available documents, expected
          production time, and contact information. Clear RFQ responses help buyers
          compare suppliers and make sourcing decisions faster.
        </p>

        <h2 style={styles.sectionTitle}>Important Notice</h2>

        <p style={styles.paragraph}>
          IMPEXVIAA seller tools are intended to support marketplace presentation,
          supplier organization, buyer communication, and trade discovery. IMPEXVIAA
          does not guarantee sales, buyer conversion, transaction success, product
          quality, regulatory approval, or legal compliance.
        </p>

        <p style={styles.paragraph}>
          Sellers remain responsible for ensuring that all information, documents,
          certifications, images, product claims, company details, and advertising content
          submitted to IMPEXVIAA are accurate, lawful, current, and not misleading.
        </p>

        <div style={styles.buttons}>
          <Link href="/support/contact-support" style={styles.secondaryButton}>
            Contact Support
          </Link>

          <Link href="/subscription/seller" style={styles.primaryButton}>
            View Seller Subscription
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