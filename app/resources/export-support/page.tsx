"use client";

import type { CSSProperties } from "react";
import Link from "next/link";

const supportCards = [
  {
    title: "Export Readiness",
    description:
      "Understand whether your business, product information, documents, packaging, and shipment preparation are ready for international buyers.",
  },
  {
    title: "Export Documentation",
    description:
      "Learn about common export documents such as invoices, packing lists, certificates, test reports, and shipping records.",
  },
  {
    title: "Product Compliance",
    description:
      "Review how product category, destination country, buyer requirements, and certifications can affect export preparation.",
  },
  {
    title: "International Logistics",
    description:
      "Understand shipment planning, packaging, freight methods, customs coordination, and delivery documentation.",
  },
];

const checklist = [
  "Business registration and company profile are accurate.",
  "Product details, specifications, images, and packaging information are prepared.",
  "MOQ, production capacity, price basis, and delivery ability are realistic.",
  "Required product documents and certificates are available or can be obtained.",
  "Destination-country import requirements have been checked.",
  "Packaging, labeling, and shipping requirements are understood.",
  "Quotation, invoice, and buyer communication records are maintained.",
  "Compliance, quality, and documentation risks are reviewed before shipment.",
];

const documentItems = [
  "Commercial Invoice",
  "Packing List",
  "Certificate of Origin",
  "Bill of Lading or Air Waybill",
  "Export Declaration",
  "Inspection Report",
  "Laboratory Test Report",
  "Product Specification Sheet",
  "Phytosanitary Certificate",
  "Insurance Documents",
];

export default function ExportSupportPage() {
  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.gridBg} />
      <div style={styles.glowBlue} />
      <div style={styles.glowGold} />

      <section style={styles.hero}>
        <div style={styles.badge}>IMPEXVIAA RESOURCES · EXPORT SUPPORT</div>

        <h1 style={styles.title}>
          Export Support &
          <br />
          Readiness Center
        </h1>

        <p style={styles.subtitle}>
          IMPEXVIAA provides educational resources to help exporters understand
          export preparation, documentation, product compliance, packaging,
          international logistics, buyer communication, and operational readiness
          before engaging with global buyers.
        </p>
      </section>

      <section style={styles.cardGrid}>
        {supportCards.map((card) => (
          <div key={card.title} className="resource-card" style={styles.card}>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardText}>{card.description}</p>
          </div>
        ))}
      </section>

      <section style={styles.content}>
        <h2 style={styles.sectionTitle}>What Is Export Support?</h2>

        <p style={styles.paragraph}>
          Export support refers to the guidance, information, tools, and
          operational preparation that help businesses sell products to buyers
          in other countries. Exporting is not only about finding a buyer; it
          also involves product readiness, documentation, packaging, quality
          expectations, shipment planning, compliance review, customs
          preparation, and clear communication between all parties.
        </p>

        <p style={styles.paragraph}>
          For many suppliers, international trade can become difficult because
          requirements vary across countries, industries, product categories, and
          buyer expectations. A product that is acceptable in one market may need
          additional testing, certificates, labeling, packaging, or regulatory
          review in another market. Exporters should therefore prepare carefully
          before presenting themselves to international buyers.
        </p>

        <p style={styles.paragraph}>
          IMPEXVIAA helps exporters organize their marketplace presence, product
          information, documentation, and buyer-facing details. The platform is
          designed to support better visibility and clearer communication, but
          each exporter remains responsible for the accuracy of business
          information, product claims, documents, and legal compliance.
        </p>

        <h2 style={styles.sectionTitle}>Export Readiness Assessment</h2>

        <p style={styles.paragraph}>
          Export readiness means that a business is prepared to communicate with
          international buyers, provide accurate product information, share
          relevant documents, understand shipment requirements, and fulfill
          commercial commitments. Export-ready suppliers usually have clear
          business registration, reliable contact details, production capacity,
          quality control, product specifications, and pricing information.
        </p>

        <p style={styles.paragraph}>
          A supplier should know what products can be supplied, what quantities
          are realistic, how quickly goods can be prepared, what packaging is
          available, what documents can be provided, and which countries or
          regions can be served. These details help buyers make informed sourcing
          decisions and reduce delays during quotation and negotiation.
        </p>

        <p style={styles.paragraph}>
          Exporters should also prepare internal records. This includes product
          specifications, test reports, certificates, invoices, quotation
          templates, packing information, shipment records, buyer communication
          records, and payment-related documentation. Clear records are valuable
          for buyer confidence, dispute handling, compliance review, and future
          business growth.
        </p>
        <h2 style={styles.sectionTitle}>Common Export Documents</h2>

        <p style={styles.paragraph}>
          Export documentation depends on the product, destination country,
          transportation method, buyer request, and regulatory requirements.
          Documents help customs authorities, logistics providers, buyers,
          banks, inspection agencies, and compliance teams understand what is
          being shipped, where it is coming from, and whether it meets required
          conditions.
        </p>

        <p style={styles.paragraph}>
          Common export documents may include commercial invoices, packing
          lists, certificates of origin, bills of lading, air waybills, export
          declarations, insurance documents, inspection reports, laboratory test
          reports, quality certificates, and product specification sheets. Some
          products may require additional certificates depending on the product
          type and destination market.
        </p>

        <div style={styles.documentGrid}>
          {documentItems.map((item) => (
            <div key={item} className="resource-card" style={styles.documentItem}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={styles.sectionTitle}>Commercial Invoice and Packing List</h2>

        <p style={styles.paragraph}>
          A commercial invoice is one of the most important documents in
          international trade. It normally includes seller details, buyer
          details, product description, quantity, price, currency, payment
          terms, invoice number, invoice date, and shipment reference. Customs
          authorities and buyers may use this document to understand the
          transaction value and product details.
        </p>

        <p style={styles.paragraph}>
          A packing list describes how goods are packed. It may include package
          count, gross weight, net weight, dimensions, carton details, pallet
          information, and product packaging structure. The packing list helps
          buyers, freight forwarders, warehouses, and customs teams handle
          shipments more efficiently.
        </p>

        <h2 style={styles.sectionTitle}>Certificate of Origin</h2>

        <p style={styles.paragraph}>
          A certificate of origin may be required to confirm the country where
          goods were produced, manufactured, processed, or substantially
          transformed. This document may be relevant for customs clearance,
          preferential trade arrangements, import duties, and buyer compliance
          checks.
        </p>

        <p style={styles.paragraph}>
          Exporters should ensure that origin claims are accurate and supported
          by proper documentation. Incorrect origin information may create
          customs delays, buyer disputes, penalties, or compliance concerns.
        </p>

        <h2 style={styles.sectionTitle}>Agriculture and Food Export Documents</h2>

        <p style={styles.paragraph}>
          Agricultural and food products often require additional documentation
          because they may affect health, safety, plant protection, food quality,
          and destination-country import rules. Depending on the product,
          exporters may need phytosanitary certificates, laboratory test
          reports, food safety certificates, fumigation certificates, cold
          treatment certificates, irradiation certificates, organic
          certifications, and board registrations.
        </p>

        <p style={styles.paragraph}>
          For example, spices may require Spices Board-related documentation
          where applicable, tea may require Tea Board registration, coffee may
          require Coffee Board registration, and certain agricultural products
          may require APEDA-related registration or other government body
          documentation. Requirements can change by product and destination
          country, so exporters should verify the latest rules before shipment.
        </p>

        <h2 style={styles.sectionTitle}>Product Compliance and Certifications</h2>

        <p style={styles.paragraph}>
          Product compliance means that the product meets applicable standards,
          safety expectations, labeling rules, testing requirements, and
          documentation requirements for the destination market. Compliance
          requirements can differ significantly between food, agriculture,
          pharmaceuticals, chemicals, machinery, electronics, textiles,
          packaging, and consumer goods.
        </p>

        <p style={styles.paragraph}>
          Exporters should understand whether their product requires laboratory
          testing, health certificates, product safety approvals, quality
          inspection, manufacturing licenses, labeling compliance, ingredient
          declarations, batch details, expiry dates, or technical documentation.
          Buyers may also request additional documents based on their internal
          policies or market obligations.
        </p>

        <h2 style={styles.sectionTitle}>Packaging and Labeling Requirements</h2>

        <p style={styles.paragraph}>
          Packaging is an important part of export readiness. Export packaging
          should protect goods during handling, loading, transport, storage, and
          delivery. Poor packaging may lead to product damage, shipment claims,
          buyer dissatisfaction, and additional costs.
        </p>

        <p style={styles.paragraph}>
          Labeling requirements may include product name, country of origin,
          batch number, manufacturing date, expiry date, net weight, gross
          weight, handling instructions, storage conditions, safety warnings,
          barcode, and destination-specific language requirements. Exporters
          should confirm labeling expectations before shipment.
        </p>
       <h2 style={styles.sectionTitle}>International Logistics Planning</h2>

        <p style={styles.paragraph}>
          Logistics planning is a critical part of international trade. Once a
          buyer and supplier agree on commercial terms, exporters must determine
          how goods will move from the production facility to the final
          destination. Logistics planning may involve trucking companies,
          warehouses, freight forwarders, shipping lines, airlines, customs
          brokers, inspection agencies, and destination-country partners.
        </p>

        <p style={styles.paragraph}>
          Different transportation methods offer different advantages. Sea
          freight is commonly used for large-volume shipments and bulk cargo due
          to lower transportation costs. Air freight provides faster delivery
          but usually involves higher costs. Road and rail transportation may
          play an important role in regional trade or inland movement before
          goods reach ports and airports.
        </p>

        <p style={styles.paragraph}>
          Exporters should understand transit times, freight costs, customs
          requirements, container availability, destination restrictions,
          insurance considerations, and shipment tracking procedures before
          confirming delivery commitments to buyers.
        </p>

        <h2 style={styles.sectionTitle}>Export Market Research</h2>

        <p style={styles.paragraph}>
          Market research helps exporters identify potential opportunities and
          understand buyer expectations. Before entering a new market,
          businesses should evaluate demand levels, competitor activity,
          regulatory requirements, pricing structures, distribution channels,
          product positioning, and local consumer preferences.
        </p>

        <p style={styles.paragraph}>
          Research may also include studying import statistics, trade trends,
          seasonal demand patterns, customs regulations, tariff structures,
          logistics routes, and commercial risks. Well-informed market research
          can help exporters allocate resources more effectively and improve
          long-term export performance.
        </p>

        <p style={styles.paragraph}>
          Exporters should remember that every market is different. A product
          that performs well in one country may require different packaging,
          branding, pricing, or compliance documentation in another market.
        </p>

        <h2 style={styles.sectionTitle}>Export Risk Management</h2>

        <p style={styles.paragraph}>
          International trade involves a variety of operational and commercial
          risks. Exporters should understand documentation risks, logistics
          risks, compliance risks, communication risks, quality risks, payment
          risks, and regulatory risks before entering international
          transactions.
        </p>

        <p style={styles.paragraph}>
          Documentation errors may result in customs delays, shipment holds, or
          additional costs. Logistics disruptions can affect delivery timelines.
          Compliance issues may prevent products from entering a destination
          market. Miscommunication between buyers and suppliers can lead to
          misunderstandings regarding specifications, quantities, packaging, or
          shipment terms.
        </p>

        <p style={styles.paragraph}>
          Good record keeping, clear communication, proper documentation,
          realistic commitments, and careful planning can help reduce many of
          these risks.
        </p>

        <h2 style={styles.sectionTitle}>International Payments</h2>

        <p style={styles.paragraph}>
          International trade transactions may involve different payment
          arrangements depending on the relationship between buyer and supplier,
          commercial terms, transaction value, and risk profile. Payment
          methods can vary between industries, countries, and individual
          transactions.
        </p>

        <p style={styles.paragraph}>
          Common payment approaches may include advance payment, open account
          arrangements, documentary collections, letters of credit, escrow
          services, and other commercially agreed payment structures.
          Businesses should ensure that payment expectations are clearly
          discussed and documented before goods are shipped.
        </p>

        <p style={styles.paragraph}>
          Exporters should maintain accurate transaction records, invoices,
          receipts, shipment references, communication records, and supporting
          documents relating to payment activities.
        </p>

        <h2 style={styles.sectionTitle}>Export Readiness Checklist</h2>

        <div style={styles.checklistBox}>
          {checklist.map((item) => (
            <div key={item} style={styles.checklistItem}>
              <span style={styles.check}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <h2 style={styles.sectionTitle}>
          How IMPEXVIAA Supports Exporters
        </h2>

        <p style={styles.paragraph}>
          IMPEXVIAA provides infrastructure designed to help exporters organize
          their marketplace presence and connect with international buyers.
          Platform features may include supplier profile creation, product
          listing management, document organization, buyer discovery tools, RFQ
          opportunities, marketplace visibility, educational trade resources,
          and HXN AI guidance capabilities.
        </p>

        <p style={styles.paragraph}>
          Exporters remain responsible for ensuring that all information,
          documents, certifications, compliance claims, and business details
          shared through the platform are accurate, current, and lawful. Buyers
          should independently evaluate suppliers and review documentation
          according to their own procurement requirements.
        </p>

        <p style={styles.paragraph}>
          IMPEXVIAA aims to improve transparency, information accessibility,
          supplier presentation, and trade discovery while supporting a more
          structured international sourcing environment.
        </p>

        <h2 style={styles.sectionTitle}>Important Notice</h2>

        <p style={styles.paragraph}>
          The information provided in this Export Support Center is intended for
          educational and informational purposes only. IMPEXVIAA does not
          provide legal, customs, tax, financial, regulatory, or professional
          advice. Businesses should consult qualified advisors and applicable
          authorities regarding their specific export activities, commercial
          transactions, compliance obligations, customs procedures, and
          regulatory requirements.
        </p>

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
};