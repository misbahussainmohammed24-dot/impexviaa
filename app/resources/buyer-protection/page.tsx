"use client";

import type { CSSProperties } from "react";
import Link from "next/link";

const protectionAreas = [
  {
    title: "Supplier profile review",
    text: "IMPEXVIAA helps buyers review supplier profiles, business identity signals, product information, available verification details, and marketplace activity before starting a sourcing conversation.",
  },
  {
    title: "Document visibility",
    text: "Where available, supplier pages may show business registration, product-related documents, category certificates, food safety documents, laboratory reports, or export-readiness information submitted by the supplier.",
  },
  {
    title: "RFQ communication support",
    text: "Buyers are encouraged to request quotations, specifications, delivery terms, payment terms, product images, packaging details, and document confirmation before entering into commercial discussions.",
  },
  {
    title: "Trust & Safety reporting",
    text: "Buyers can report suspicious suppliers, fake documents, misleading product claims, unsafe payment requests, impersonation, or marketplace policy violations through IMPEXVIAA support channels.",
  },
];

const buyerChecklist = [
  "Review the supplier profile carefully before contacting the seller.",
  "Check company name, country, product category, MOQ, capacity, and business details.",
  "Request valid product documents and confirm whether they match the shipment destination.",
  "Avoid sending payments outside trusted and documented business channels.",
  "Keep written records of quotations, invoices, chats, payment proof, and shipping details.",
  "Report suspicious activity immediately through the Report Supplier page.",
];

const limits = [
  "IMPEXVIAA is a marketplace and support platform, not a bank, shipping company, customs broker, legal advisor, or financial advisor.",
  "Supplier verification signals help improve trust, but they do not guarantee product quality, delivery performance, legal compliance, or transaction outcome.",
  "Buyers remain responsible for independent due diligence before signing contracts, sending payments, importing goods, or relying on supplier claims.",
  "International trade regulations, import duties, documentation rules, customs requirements, and product standards may vary by country.",
];

const disputeSteps = [
  {
    title: "Collect evidence",
    text: "Save supplier profile links, product screenshots, messages, quotations, invoices, documents, payment receipts, shipping details, and any communication related to the concern.",
  },
  {
    title: "Contact the supplier",
    text: "If safe and appropriate, contact the supplier to request clarification, corrected documents, updated quotation details, or resolution of the issue.",
  },
  {
    title: "Report through IMPEXVIAA",
    text: "Submit a report through the Report Supplier page or Contact Support page. Include clear details and supporting files so Trust & Safety can review the matter.",
  },
  {
    title: "Platform review",
    text: "IMPEXVIAA may review the report, check supplier profile information, request additional details, restrict visibility, suspend access, or remove listings where necessary.",
  },
];

export default function BuyerProtectionPage() {
  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.gridBg} />
      <div style={styles.glowBlue} />
      <div style={styles.glowGold} />

      <section style={styles.hero}>
        <div style={styles.badge}>IMPEXVIAA RESOURCES · BUYER PROTECTION</div>

        <h1 style={styles.title}>Buyer Protection & Marketplace Safety</h1>

        <p style={styles.subtitle}>
          IMPEXVIAA is built to help buyers make more informed sourcing decisions by
          providing supplier information, verification signals, document visibility,
          reporting channels, and support pathways. This page explains how buyer
          protection works on the platform, what buyers should check before trading,
          and how concerns can be reported.
        </p>

        <div style={styles.heroNotice}>
          <strong>Important notice</strong>
          <span>
            Buyer protection on IMPEXVIAA is designed to improve marketplace safety and
            transparency. It does not replace independent due diligence, written contracts,
            legal advice, customs advice, or secure payment practices.
          </span>
        </div>
      </section>

      <section style={styles.section}>
        <p style={styles.kicker}>HOW IMPEXVIAA SUPPORTS BUYERS</p>
        <h2 style={styles.sectionTitle}>Protection areas</h2>

        <div style={styles.cardGrid}>
          {protectionAreas.map((item) => (
            <div key={item.title} className="premium-card" style={styles.card}>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.contentSection}>
        <div>
          <p style={styles.kicker}>BUYER RESPONSIBILITIES</p>
          <h2 style={styles.sectionTitle}>What buyers should verify before trading</h2>
        </div>

        <div style={styles.longTextBox}>
          <p style={styles.text}>
            International sourcing requires careful verification. Before starting a purchase,
            buyers should review supplier details, request relevant documents, compare
            product specifications, confirm pricing and delivery terms, and keep proper
            records of all communication. IMPEXVIAA provides tools and support pathways to
            assist buyers, but final commercial decisions remain the buyer’s responsibility.
          </p>

          <div style={styles.checkList}>
            {buyerChecklist.map((item) => (
              <div key={item} style={styles.checkItem}>
                <span style={styles.check}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.contentSection}>
        <div>
          <p style={styles.kicker}>PAYMENT SAFETY</p>
          <h2 style={styles.sectionTitle}>Safer payment behaviour for buyers</h2>
        </div>

        <div style={styles.longTextBox}>
          <p style={styles.text}>
            Buyers should be careful when handling payments in international trade.
            Always confirm the supplier’s business identity, quotation details, invoice
            information, bank account ownership, product specifications, delivery terms,
            and refund or cancellation conditions before sending money. Be cautious of
            suppliers who pressure you to pay urgently, change payment details suddenly,
            refuse to provide documents, or ask for payment through unrelated personal
            accounts.
          </p>

          <p style={styles.text}>
            IMPEXVIAA may provide subscription access, marketplace tools, support
            channels, and future payment-related workflows, but buyers should still
            maintain written records and use documented business payment methods. If a
            supplier sends suspicious payment instructions or requests payment outside a
            safe and traceable process, the buyer should pause communication and report
            the concern.
          </p>
        </div>
      </section>

      <section style={styles.contentSection}>
        <div>
          <p style={styles.kicker}>DOCUMENT SAFETY</p>
          <h2 style={styles.sectionTitle}>Understanding supplier documents</h2>
        </div>

        <div style={styles.longTextBox}>
          <p style={styles.text}>
            Supplier documents may include business registration proof, tax information,
            product specifications, laboratory reports, food safety certificates,
            phytosanitary certificates, fumigation certificates, organic certificates,
            and other category-specific documents. Document needs vary depending on the
            product, destination country, buyer requirements, and applicable regulations.
          </p>

          <p style={styles.text}>
            Buyers should confirm whether documents are current, readable, consistent
            with the supplier profile, relevant to the product, and acceptable for the
            intended import destination. If documents appear altered, expired, copied,
            incomplete, or inconsistent, buyers should request clarification and report
            suspicious cases to IMPEXVIAA Trust & Safety.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <p style={styles.kicker}>LIMITATIONS</p>
        <h2 style={styles.sectionTitle}>What buyer protection does not guarantee</h2>

        <div style={styles.limitGrid}>
          {limits.map((item) => (
            <div key={item} className="premium-card" style={styles.limitCard}>
              <span style={styles.warn}>!</span>
              <p style={styles.text}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <p style={styles.kicker}>REPORTING & DISPUTES</p>
        <h2 style={styles.sectionTitle}>How to report supplier concerns</h2>

        <div style={styles.stepGrid}>
          {disputeSteps.map((step, index) => (
            <div key={step.title} className="premium-card" style={styles.stepCard}>
              <span style={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
              <h3 style={styles.cardTitle}>{step.title}</h3>
              <p style={styles.text}>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.policyBox}>
        <p style={styles.kicker}>PLATFORM POLICY</p>
        <h2 style={styles.policyTitle}>Our commitment to safer global sourcing</h2>

        <p style={styles.text}>
          IMPEXVIAA aims to create a more transparent B2B sourcing environment by
          organizing supplier information, supporting verification workflows, providing
          document visibility where available, and offering reporting channels for buyer
          concerns. Reports submitted by buyers may help IMPEXVIAA identify suspicious
          suppliers, misleading listings, fake documents, unsafe payment requests, or
          misuse of marketplace features.
        </p>

        <p style={styles.text}>
          When a concern is reported, IMPEXVIAA may review the available evidence,
          supplier profile, product details, document information, and marketplace
          activity. Depending on the nature of the concern, IMPEXVIAA may request
          clarification, restrict visibility, suspend access, remove listings, or take
          other platform-level action. Some cases may require additional time if documents,
          third-party evidence, payment proof, or legal concerns are involved.
        </p>

        <div style={styles.buttons}>
          <Link href="/support/report-supplier" style={styles.primaryButton}>
            Report Supplier
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
  background:#000000 !important;
}

.premium-card {
  transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
}

.premium-card:hover {
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
    padding:42px 16px 90px !important;
  }

  h1 {
    font-size:44px !important;
    line-height:1.03 !important;
    letter-spacing:-2px !important;
  }

  h2 {
    font-size:32px !important;
    line-height:1.05 !important;
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

  heroNotice: {
    maxWidth: 900,
    margin: "34px auto 0",
    padding: 26,
    borderRadius: 28,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(214,181,109,.22)",
    color: "#dbeafe",
    display: "grid",
    gap: 8,
    lineHeight: 1.7,
    textAlign: "left",
  },

  section: {
    maxWidth: 1180,
    margin: "58px auto 0",
    position: "relative",
    zIndex: 2,
  },

  contentSection: {
    maxWidth: 1180,
    margin: "58px auto 0",
    display: "grid",
    gridTemplateColumns: "0.75fr 1.25fr",
    gap: 28,
    alignItems: "start",
    position: "relative",
    zIndex: 2,
  },

  kicker: {
    margin: 0,
    color: "#d6b56d",
    fontWeight: 950,
    letterSpacing: 3,
    fontSize: 12,
  },

  sectionTitle: {
    margin: "12px 0 24px",
    fontSize: "clamp(34px,5vw,58px)",
    lineHeight: 1,
    letterSpacing: "-2px",
    fontWeight: 950,
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: 18,
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
  },

  text: {
    color: "#dbeafe",
    lineHeight: 1.9,
    fontWeight: 600,
    fontSize: 17,
  },

  longTextBox: {
    padding: 32,
    borderRadius: 34,
    background: "rgba(255,255,255,.055)",
    border: "1px solid rgba(255,255,255,.11)",
    backdropFilter: "blur(22px)",
  },

  checkList: {
    marginTop: 24,
    display: "grid",
    gap: 12,
  },

  checkItem: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    color: "#e5e7eb",
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

  limitGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: 18,
  },

  limitCard: {
    padding: 26,
    borderRadius: 28,
    background: "rgba(255,255,255,.055)",
    border: "1px solid rgba(255,255,255,.11)",
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
    backdropFilter: "blur(22px)",
  },

  warn: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg,#fbbf24,#60a5fa)",
    color: "#020617",
    fontWeight: 950,
    flexShrink: 0,
  },

  stepGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: 18,
  },

  stepCard: {
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

  policyBox: {
    maxWidth: 1180,
    margin: "58px auto 0",
    padding: 38,
    borderRadius: 40,
    background:
      "linear-gradient(135deg,rgba(214,181,109,.10),rgba(96,165,250,.10))",
    border: "1px solid rgba(214,181,109,.22)",
    position: "relative",
    zIndex: 2,
    backdropFilter: "blur(22px)",
  },

  policyTitle: {
    margin: "12px 0 18px",
    fontSize: "clamp(34px,5vw,58px)",
    lineHeight: 1,
    letterSpacing: "-2px",
    fontWeight: 950,
  },

  buttons: {
    marginTop: 26,
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