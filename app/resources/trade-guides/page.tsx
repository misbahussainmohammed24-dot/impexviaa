"use client";

import type { CSSProperties } from "react";

const guideCards = [
  {
    title: "International Trade Basics",
    description:
      "Understand how buyers, suppliers, exporters, importers, logistics providers, and customs authorities work together in global trade.",
  },
  {
    title: "Buyer Workflow",
    description:
      "Learn how buyers discover suppliers, request quotations, compare offers, verify documents, and complete sourcing decisions.",
  },
  {
    title: "Seller Workflow",
    description:
      "Understand how suppliers present products, respond to RFQs, share documentation, and communicate with international buyers.",
  },
  {
    title: "Export Documentation",
    description:
      "Explore common trade documents used during international transactions and shipments.",
  },
];

export default function TradeGuidesPage() {
  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.gridBg} />
      <div style={styles.glowBlue} />
      <div style={styles.glowGold} />

      <section style={styles.hero}>
        <div style={styles.badge}>IMPEXVIAA RESOURCES · TRADE GUIDES</div>

        <h1 style={styles.title}>
          International Trade
          <br />
          Knowledge Center
        </h1>

        <p style={styles.subtitle}>
          This resource center provides educational information about
          international trade, sourcing, exporting, importing, documentation,
          logistics, quotations, and supplier communication. The purpose of
          these guides is to help businesses better understand how global trade
          works before entering commercial transactions.
        </p>
      </section>

      <section style={styles.cardGrid}>
        {guideCards.map((card) => (
          <div key={card.title} className="guide-card" style={styles.card}>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardText}>{card.description}</p>
          </div>
        ))}
      </section>

      <section style={styles.content}>
        <h2 style={styles.sectionTitle}>Understanding International Trade</h2>

        <p style={styles.paragraph}>
          International trade involves the exchange of goods and services
          between businesses located in different countries. A typical trade
          transaction may include manufacturers, suppliers, exporters,
          importers, freight companies, customs authorities, inspection
          agencies, financial institutions, and logistics providers.
        </p>

        <p style={styles.paragraph}>
          Businesses engage in international trade to access new markets,
          discover competitive suppliers, diversify sourcing channels, increase
          revenue opportunities, and improve supply chain resilience. Trade
          activities can involve agricultural products, food products,
          industrial materials, pharmaceuticals, machinery, electronics,
          packaging materials, textiles, chemicals, and many other categories.
        </p>

        <p style={styles.paragraph}>
          Before entering any international transaction, businesses should
          perform appropriate due diligence, review supplier information,
          understand applicable regulations, evaluate product requirements, and
          confirm commercial terms with all parties involved.
        </p>

        <h2 style={styles.sectionTitle}>Buyer Sourcing Process</h2>

        <p style={styles.paragraph}>
          Buyers generally begin by identifying products they wish to source.
          They compare suppliers, review business profiles, evaluate product
          specifications, request quotations, analyze pricing structures, and
          examine available documentation.
        </p>

        <p style={styles.paragraph}>
          A buyer should clearly communicate product requirements, quantity
          requirements, packaging preferences, delivery destinations, payment
          expectations, compliance requirements, and quality expectations.
          Detailed communication helps reduce misunderstandings and improves the
          efficiency of sourcing discussions.
        </p>

        <p style={styles.paragraph}>
          Buyers are encouraged to maintain records of quotations,
          specifications, invoices, shipping details, and communications
          throughout the sourcing process.
        </p>

        <h2 style={styles.sectionTitle}>Supplier & Exporter Workflow</h2>

        <p style={styles.paragraph}>
          Suppliers typically create product listings, present company
          information, share business credentials, respond to inquiries, provide
          quotations, and communicate shipment capabilities.
        </p>

        <p style={styles.paragraph}>
          Exporters may also provide information regarding production capacity,
          packaging methods, export experience, product certifications, and
          available documentation required for international shipments.
        </p>

        <p style={styles.paragraph}>
          Effective supplier communication should be professional, transparent,
          and supported by accurate business information and product details.
        </p>

        <h2 style={styles.sectionTitle}>Understanding RFQs</h2>

        <p style={styles.paragraph}>
          RFQ stands for Request for Quotation. It is one of the most common
          tools used in international sourcing. Buyers use RFQs to describe
          product requirements and invite suppliers to submit pricing and
          commercial proposals.
        </p>

        <p style={styles.paragraph}>
          A complete RFQ often includes product specifications, quantity,
          packaging requirements, destination country, target delivery timeline,
          documentation requirements, and additional commercial information.
        </p>

        <h2 style={styles.sectionTitle}>Common Trade Documents</h2>

        <p style={styles.paragraph}>
          International trade frequently involves documents such as commercial
          invoices, packing lists, certificates of origin, bills of lading,
          airway bills, inspection reports, laboratory reports, compliance
          certificates, export declarations, and customs documentation.
        </p>

        <p style={styles.paragraph}>
          Required documentation varies according to product category,
          destination country, transportation method, and regulatory
          requirements.
        </p>

        <h2 style={styles.sectionTitle}>Incoterms Overview</h2>

        <p style={styles.paragraph}>
          Incoterms are internationally recognized trade terms that define
          responsibilities between buyers and sellers regarding transportation,
          risk transfer, insurance obligations, and delivery arrangements.
        </p>

        <p style={styles.paragraph}>
          Examples include EXW (Ex Works), FOB (Free On Board), CIF (Cost,
          Insurance and Freight), and DDP (Delivered Duty Paid). Businesses
          should clearly agree on applicable trade terms before shipment.
        </p>

        <h2 style={styles.sectionTitle}>Logistics & Shipping</h2>

        <p style={styles.paragraph}>
          International shipments may move by sea freight, air freight, rail,
          road transport, or multimodal logistics solutions. Shipping costs,
          transit times, customs procedures, and documentation requirements vary
          depending on destination and transportation method.
        </p>

        <p style={styles.paragraph}>
          Businesses should verify shipping requirements, packaging standards,
          customs regulations, and destination-country import procedures before
          dispatching goods.
        </p>

        <h2 style={styles.sectionTitle}>Important Notice</h2>

        <p style={styles.paragraph}>
          The information provided in these trade guides is intended for
          educational purposes only. IMPEXVIAA does not provide legal, tax,
          customs, financial, or regulatory advice. Businesses should consult
          qualified professionals and applicable authorities regarding specific
          commercial transactions and compliance obligations.
        </p>
      </section>
    </main>
  );
}
const css = `
html, body {
  background: #000000 !important;
}

.guide-card {
  transition: transform .32s ease, border-color .32s ease, box-shadow .32s ease;
}

.guide-card:hover {
  transform: translateY(-6px);
  border-color: rgba(96,165,250,.45) !important;
  box-shadow: 0 30px 100px rgba(0,0,0,.55) !important;
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
};