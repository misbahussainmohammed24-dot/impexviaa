"use client";

import type { CSSProperties } from "react";
import Link from "next/link";

const groups = [
  {
    title: "Marketplace",
    description: "Browse IMPEXVIAA marketplace categories and trade sections.",
    links: [
      ["Home", "/"],
      ["Marketplace", "/marketplace"],
      ["Agriculture", "/marketplace/agriculture"],
      ["Products", "/products"],
      ["Supplier Verification", "/supplier-verification"],
      ["Trust Score Center", "/trust-score-center"],
    ],
  },
  {
    title: "Resources",
    description: "Educational trade resources for buyers, exporters, and sellers.",
    links: [
      ["Trade Guides", "/resources/trade-guides"],
      ["Export Support", "/resources/export-support"],
      ["Buyer Protection", "/resources/buyer-protection"],
      ["Seller Tools", "/resources/seller-tools"],
      ["Global Sourcing", "/resources/global-sourcing"],
    ],
  },
  {
    title: "Support",
    description: "Help, safety, status, and customer support pages.",
    links: [
      ["Help Center", "/support/help-center"],
      ["Contact Support", "/support/contact-support"],
      ["Service Status", "/support/service-status"],
      ["Report Supplier", "/support/report-supplier"],
    ],
  },
  {
    title: "Subscriptions",
    description: "Buyer and seller access plans for marketplace tools.",
    links: [
      ["Buyer Subscription", "/subscription/buyer"],
      ["Seller Subscription", "/subscription/seller"],
      ["Payment Success", "/payment-success"],
    ],
  },
  {
    title: "Seller Tools",
    description: "Tools for exporters, manufacturers, and suppliers.",
    links: [
      ["Seller Onboarding", "/seller-onboarding"],
      ["Activation", "/seller-onboarding/activation"],
      ["Step 2", "/seller-onboarding/step-2"],
      ["Step 3", "/seller-onboarding/step-3"],
      ["Step 4", "/seller-onboarding/step-4"],
      ["Step 5", "/seller-onboarding/step-5"],
      ["Seller RFQ Assistant", "/seller-rfq-assistant"],
      ["Marketplace Advisor", "/seller-trade-advisor"],
    ],
  },
  {
    title: "Legal",
    description: "Important legal, privacy, compliance, and platform policy pages.",
    links: [
      ["Terms of Service", "/terms"],
      ["Privacy Policy", "/privacy-policy"],
      ["Legal Information", "/legal"],
      ["Sitemap", "/sitemap"],
    ],
  },
];

const features = [
  "HXN AI Trade Assistant",
  "Supplier Verification",
  "AI Trust Score Generation",
  "AI Store Builder",
  "AI Website Creation",
  "Product Advertising",
  "RFQ Management",
  "Buyer-Supplier Matching",
  "Document Organization",
  "Export Readiness Tools",
  "Marketplace Visibility",
  "Support & Safety Workflows",
];

export default function SitemapPage() {
  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.gridBg} />
      <div style={styles.glowBlue} />
      <div style={styles.glowGold} />
      <div style={styles.orbOne} />
      <div style={styles.orbTwo} />

      <section className="hero" style={styles.hero}>
        <p style={styles.badge}>IMPEXVIAA SITEMAP</p>

        <h1 style={styles.title}>
          Explore the
          <br />
          IMPEXVIAA Ecosystem
        </h1>

        <p style={styles.subtitle}>
          Quick access to marketplace pages, resources, support services, legal
          information, subscriptions, seller tools, AI trade features, and public
          platform sections.
        </p>

        <div style={styles.heroStats}>
          <div style={styles.stat}><strong>6</strong><span>Main sections</span></div>
          <div style={styles.stat}><strong>30+</strong><span>Public links</span></div>
          <div style={styles.stat}><strong>HXN</strong><span>AI-powered tools</span></div>
        </div>
      </section>

      <section style={styles.groupGrid}>
        {groups.map((group, index) => (
          <div
            key={group.title}
            className="site-card"
            style={{ ...styles.groupCard, animationDelay: `${index * 0.08}s` }}
          >
            <div style={styles.cardTop}>
              <span style={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <h2 style={styles.groupTitle}>{group.title}</h2>
            </div>

            <p style={styles.groupDesc}>{group.description}</p>

            <div style={styles.linkList}>
              {group.links.map(([label, href]) => (
                <Link key={href} href={href} style={styles.siteLink}>
                  <span>{label}</span>
                  <span style={styles.arrow}>→</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="feature-panel" style={styles.featurePanel}>
        <p style={styles.badge}>PLATFORM FEATURES</p>

        <h2 style={styles.featureTitle}>AI-powered global trade infrastructure</h2>

        <p style={styles.featureText}>
          IMPEXVIAA connects buyers, suppliers, exporters, importers, sourcing
          teams, and manufacturers through AI-assisted trade tools, verification,
          product visibility, RFQ workflows, seller websites, trust indicators,
          advertising placements, and support systems.
        </p>

        <div style={styles.featureGrid}>
          {features.map((feature) => (
            <div key={feature} className="feature-chip" style={styles.featureChip}>
              <span style={styles.dot} />
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section style={styles.footerNote}>
        <h2 style={styles.footerTitle}>IMPEXVIAA Global B2B Trade Ecosystem</h2>
        <p style={styles.footerText}>
          Built for international trade discovery, supplier presentation, buyer
          confidence, document organization, AI assistance, and responsible
          marketplace growth.
        </p>
      </section>
    </main>
  );
}

const css = `
html, body {
  background:#000000 !important;
}

@keyframes fadeUp {
  from { opacity:0; transform:translateY(34px); }
  to { opacity:1; transform:translateY(0); }
}

@keyframes floatOrb {
  0%,100% { transform:translateY(0) scale(1); }
  50% { transform:translateY(-18px) scale(1.04); }
}

@keyframes shine {
  0% { transform:translateX(-120%); }
  100% { transform:translateX(140%); }
}

.hero,
.feature-panel {
  animation: fadeUp .8s ease both;
}

.site-card {
  animation: fadeUp .8s ease both;
  transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease;
}

.site-card:hover {
  transform: translateY(-8px);
  border-color: rgba(96,165,250,.46) !important;
  box-shadow: 0 35px 120px rgba(0,0,0,.58) !important;
}

.site-card::before {
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(120deg,transparent,rgba(255,255,255,.08),transparent);
  transform:translateX(-120%);
}

.site-card:hover::before {
  animation: shine .9s ease;
}

.feature-chip {
  transition: transform .28s ease, border-color .28s ease;
}

.feature-chip:hover {
  transform: translateY(-4px);
  border-color: rgba(214,181,109,.45) !important;
}

a {
  transition: transform .25s ease, color .25s ease, background .25s ease;
}

a:hover {
  transform: translateX(6px);
  color:#ffffff !important;
  background:rgba(255,255,255,.08) !important;
}

@media(max-width:760px){
  main {
    padding:92px 16px 90px !important;
  }

  h1 {
    font-size:46px !important;
    line-height:1.02 !important;
    letter-spacing:-2px !important;
  }

  h2 {
    font-size:30px !important;
    line-height:1.1 !important;
  }
}
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top,#07111f 0%,#020617 38%,#000000 100%)",
    color: "#fff",
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
    top: -250,
    left: "50%",
    transform: "translateX(-50%)",
    width: 760,
    height: 760,
    borderRadius: "50%",
    background: "rgba(96,165,250,.15)",
    filter: "blur(150px)",
  },

  glowGold: {
    position: "absolute",
    bottom: 180,
    left: -220,
    width: 620,
    height: 620,
    borderRadius: "50%",
    background: "rgba(214,181,109,.10)",
    filter: "blur(140px)",
  },

  orbOne: {
    position: "absolute",
    top: 230,
    right: "8%",
    width: 16,
    height: 16,
    borderRadius: "50%",
    background: "#60a5fa",
    boxShadow: "0 0 35px rgba(96,165,250,.9)",
    animation: "floatOrb 4s ease-in-out infinite",
  },

  orbTwo: {
    position: "absolute",
    top: 520,
    left: "9%",
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "#d6b56d",
    boxShadow: "0 0 35px rgba(214,181,109,.9)",
    animation: "floatOrb 5s ease-in-out infinite",
  },

  hero: {
    maxWidth: 1040,
    margin: "0 auto 64px",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },

  badge: {
    margin: "0 0 24px",
    color: "#d6b56d",
    fontWeight: 950,
    letterSpacing: 4,
    fontSize: 13,
  },

  title: {
    margin: 0,
    fontSize: "clamp(54px,8vw,104px)",
    lineHeight: 0.95,
    letterSpacing: "-4px",
    fontWeight: 950,
  },

  subtitle: {
    margin: "28px auto 0",
    maxWidth: 900,
    color: "#d1d5db",
    fontSize: "clamp(18px,2.6vw,24px)",
    lineHeight: 1.75,
    fontWeight: 500,
  },

  heroStats: {
    margin: "34px auto 0",
    maxWidth: 760,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
    gap: 14,
  },

  stat: {
    minHeight: 92,
    borderRadius: 24,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.11)",
    display: "grid",
    placeItems: "center",
    padding: 14,
    color: "#dbeafe",
  },

  groupGrid: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
    gap: 20,
    position: "relative",
    zIndex: 2,
  },

  groupCard: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 34,
    padding: 28,
    background:
      "linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.11)",
    backdropFilter: "blur(22px)",
  },

  cardTop: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    marginBottom: 10,
  },

  number: {
    color: "#60a5fa",
    fontWeight: 950,
    letterSpacing: 3,
  },

  groupTitle: {
    margin: 0,
    fontSize: 30,
    fontWeight: 950,
    letterSpacing: "-1px",
  },

  groupDesc: {
    color: "#cbd5e1",
    lineHeight: 1.7,
    marginBottom: 18,
    fontWeight: 600,
  },

  linkList: {
    display: "grid",
    gap: 10,
  },

  siteLink: {
    minHeight: 48,
    padding: "0 14px",
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#dbeafe",
    background: "rgba(255,255,255,.045)",
    border: "1px solid rgba(255,255,255,.08)",
    textDecoration: "none",
    fontWeight: 850,
  },

  arrow: {
    color: "#d6b56d",
    fontWeight: 950,
  },

  featurePanel: {
    maxWidth: 1180,
    margin: "72px auto 0",
    padding: "42px 30px",
    borderRadius: 40,
    background:
      "linear-gradient(135deg,rgba(96,165,250,.10),rgba(214,181,109,.08))",
    border: "1px solid rgba(255,255,255,.12)",
    position: "relative",
    zIndex: 2,
    backdropFilter: "blur(22px)",
  },

  featureTitle: {
    margin: "12px 0 16px",
    fontSize: "clamp(34px,5vw,64px)",
    lineHeight: 1,
    letterSpacing: "-2px",
    fontWeight: 950,
  },

  featureText: {
    maxWidth: 900,
    color: "#dbeafe",
    fontSize: 18,
    lineHeight: 1.8,
    fontWeight: 550,
  },

  featureGrid: {
    marginTop: 28,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
    gap: 14,
  },

  featureChip: {
    minHeight: 58,
    borderRadius: 18,
    padding: "0 16px",
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.10)",
    display: "flex",
    alignItems: "center",
    gap: 10,
    color: "#fff",
    fontWeight: 850,
  },

  dot: {
    width: 9,
    height: 9,
    borderRadius: "50%",
    background: "#60a5fa",
    boxShadow: "0 0 18px rgba(96,165,250,.8)",
    flexShrink: 0,
  },

  footerNote: {
    maxWidth: 980,
    margin: "72px auto 0",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },

  footerTitle: {
    fontSize: "clamp(32px,5vw,58px)",
    lineHeight: 1,
    letterSpacing: "-2px",
    margin: 0,
    fontWeight: 950,
  },

  footerText: {
    margin: "22px auto 0",
    maxWidth: 820,
    color: "#cbd5e1",
    fontSize: 18,
    lineHeight: 1.8,
  },
};