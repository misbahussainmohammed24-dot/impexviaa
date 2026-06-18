"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { useRouter } from "next/navigation";

type HelpArticle = {
  title: string;
  description: string;
  category: string;
  path: string;
};

const articles: HelpArticle[] = [
  {
    title: "How do I create an account?",
    description: "Learn how buyers and suppliers can create an IMPEXVIAA account.",
    category: "Account",
    path: "/support/help-center/create-account",
  },
  {
    title: "How do I verify as a supplier?",
    description: "Understand supplier verification, document upload, and review steps.",
    category: "Verification",
    path: "/support/help-center/supplier-verification",
  },
  {
    title: "How do buyer subscriptions work?",
    description: "Learn about buyer access, HXN AI, RFQs, and sourcing tools.",
    category: "Subscription",
    path: "/support/help-center/buyer-subscription",
  },
  {
    title: "How do seller subscriptions work?",
    description: "Learn how sellers unlock marketplace visibility and AI tools.",
    category: "Subscription",
    path: "/support/help-center/seller-subscription",
  },
  {
    title: "How do I report a supplier?",
    description: "Report fake documents, suspicious activity, or policy violations.",
    category: "Trust & Safety",
    path: "/support/help-center/report-supplier",
  },
  {
    title: "Payment, billing, and receipt help",
    description: "Get support for PayPal payments, receipts, billing, and failed payments.",
    category: "Payments",
    path: "/support/help-center/payment-help",
  },
  {
    title: "How long does verification take?",
    description: "Understand expected review timelines for documents and profiles.",
    category: "Verification",
    path: "/support/help-center/verification-time",
  },
  {
    title: "How do I contact support?",
    description: "Find official support emails, response times, and support categories.",
    category: "Support",
    path: "/support/contact-support",
  },
];

const categories = [
  "All",
  "Account",
  "Verification",
  "Subscription",
  "Payments",
  "Trust & Safety",
  "Support",
];

const quickLinks = [
  { title: "Contact Support", path: "/support/contact-support" },
  { title: "Service Status", path: "/support/service-status" },
  { title: "Report Supplier", path: "/support/report-supplier" },
  { title: "Buyer Protection", path: "/support/buyer-protection" },
  { title: "Trade Guides", path: "/support/trade-guides" },
  { title: "Export Support", path: "/support/export-support" },
];

export default function HelpCenterPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const q = query.toLowerCase();
      const searchMatch =
        article.title.toLowerCase().includes(q) ||
        article.description.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);

      const categoryMatch =
        activeCategory === "All" || article.category === activeCategory;

      return searchMatch && categoryMatch;
    });
  }, [query, activeCategory]);

  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.gridBg} />
      <div style={styles.glowCyan} />
      <div style={styles.glowGold} />
      <div style={styles.glowPurple} />

      <section style={styles.hero}>
        <div style={styles.badge}>IMPEXVIAA HELP CENTER</div>

        <h1 style={styles.title}>How can we help you?</h1>

        <p style={styles.subtitle}>
          Search support articles for accounts, subscriptions, supplier verification,
          payments, RFQs, marketplace tools, fraud reports, and platform guidance.
        </p>

        <div className="premium-search" style={styles.searchShell}>
          <span style={styles.searchIcon}>⌕</span>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder=""
            style={styles.searchInput}
          />

         {!query && (
  <div style={styles.typingText}>
    <span className="typing-words" />
  </div>
)}

          <button
            type="button"
            style={styles.searchButton}
            onClick={() =>
              document.getElementById("articles")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Search
          </button>
        </div>

        <div style={styles.heroStats}>
          <Stat value="24/7" label="Support submission" />
          <Stat value="8+" label="Popular articles" />
          <Stat value="6" label="Support areas" />
          <Stat value="Priority" label="Fraud reports" />
        </div>
      </section>

      <section style={styles.categoryBar}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            style={{
              ...styles.categoryButton,
              ...(activeCategory === category ? styles.categoryActive : {}),
            }}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </section>

      <section id="articles" style={styles.articleSection}>
        <div style={styles.sectionHeader}>
          <div>
            <p style={styles.kicker}>POPULAR QUESTIONS</p>
            <h2 style={styles.sectionTitle}>Help articles</h2>
          </div>

          <p style={styles.sectionText}>
           
          </p>
        </div>

        <div style={styles.articleGrid}>
          {filteredArticles.map((article) => (
            <button
              key={article.title}
              type="button"
              className="article-card"
              style={styles.articleCard}
              onClick={() => router.push(article.path)}
            >
              <span style={styles.articleCategory}>{article.category}</span>
              <h3 style={styles.articleTitle}>{article.title}</h3>
              <p style={styles.articleDesc}>{article.description}</p>
              <span style={styles.articleArrow}>Open article →</span>
            </button>
          ))}
        </div>
      </section>

      <section style={styles.guidesSection}>
        <div style={styles.sectionHeader}>
          <div>
            <p style={styles.kicker}>STEP-BY-STEP GUIDES</p>
            <h2 style={styles.sectionTitle}>Start using IMPEXVIAA</h2>
          </div>
        </div>

        <div style={styles.guideGrid}>
          <Guide number="01" title="Join as a buyer" text="Create buyer account, choose subscription, search verified suppliers, and submit RFQs." />
          <Guide number="02" title="Join as a seller" text="Create supplier profile, submit verification documents, add products, and prepare your store." />
          <Guide number="03" title="Submit documents" text="Upload business registration, identity proof, tax documents, and product compliance documents." />
          <Guide number="04" title="Use HXN AI" text="Ask HXN AI about documents, supplier discovery, sourcing, compliance, and marketplace guidance." />
        </div>
      </section>

      <section style={styles.bankSection}>
        <div>
          <p style={styles.kicker}>PAYMENT PROVIDER READINESS</p>
          <h2 style={styles.bankTitle}>Support information banks expect to see</h2>
          <p style={styles.bankText}>
            IMPEXVIAA provides clear contact methods, billing support, refund and complaint
            handling pathways, fraud reporting, and technical support details for users.
          </p>
        </div>

        <div style={styles.bankGrid}>
          {[
            "Payment and billing help",
            "Refund and cancellation support",
            "Complaint handling process",
            "Fraud and safety reporting",
            "Official support contact page",
            "Defined response timelines",
            "Technical issue reporting",
            "Legal and compliance contact",
          ].map((item) => (
            <div key={item} className="bank-item" style={styles.bankItem}>
              <span style={styles.check}>✓</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.quickSection}>
        <div>
          <p style={styles.kicker}>SUPPORT LINKS</p>
          <h2 style={styles.sectionTitle}>Need more help?</h2>
        </div>

        <div style={styles.quickGrid}>
          {quickLinks.map((link) => (
            <button
              key={link.title}
              type="button"
              className="quick-link"
              style={styles.quickLink}
              onClick={() => router.push(link.path)}
            >
              {link.title}
              <span>→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={styles.statCard}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Guide({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="guide-card" style={styles.guideCard}>
      <span style={styles.guideNumber}>{number}</span>
      <h3 style={styles.guideTitle}>{title}</h3>
      <p style={styles.guideText}>{text}</p>
    </div>
  );
}

const css = `
html, body {
  background: #020617 !important;
}

@keyframes premiumSearchGlow {
  0%,100% {
    box-shadow:
      0 0 0 rgba(214,181,109,0),
      inset 0 0 0 rgba(255,255,255,.04);
  }
  50% {
    box-shadow:
      0 0 90px rgba(214,181,109,.20),
      0 0 140px rgba(34,211,238,.16),
      inset 0 0 30px rgba(255,255,255,.05);
  }
}

@keyframes words {
  0%,18% { content:"Search supplier verification"; }
  20%,38% { content:"Search payment help"; }
  40%,58% { content:"Search buyer subscription"; }
  60%,78% { content:"Search report supplier"; }
  80%,100% { content:"Search RFQ and marketplace support"; }
}

.premium-search{
  animation: premiumSearchGlow 4s ease-in-out infinite;
}

.typing-words::after{
  content:"Search supplier verification";
  animation: words 10s infinite;
}

.article-card,
.guide-card,
.bank-item,
.quick-link {
  transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
}

.article-card:hover,
.guide-card:hover,
.bank-item:hover,
.quick-link:hover {
  transform: translateY(-7px);
  border-color: rgba(34,211,238,.48) !important;
  box-shadow: 0 30px 110px rgba(0,0,0,.55) !important;
}

button {
  transition: transform .25s ease;
}

button:hover {
  transform: translateY(-3px);
}

@media(max-width: 760px) {
  main {
    padding: 38px 14px 90px !important;
  }

  h1 {
    font-size: 44px !important;
    line-height: 1.03 !important;
    letter-spacing: -2px !important;
  }

  h2 {
    font-size: 34px !important;
    line-height: 1.05 !important;
  }

  .help-search {
    grid-template-columns: 1fr !important;
  }
}
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top,#07111f 0%,#020617 42%,#000000 100%)",
    color: "#fff",
    padding: "72px 20px 120px",
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
    position: "relative",
    overflowX: "hidden",
  },

  gridBg: {
    position: "absolute",
    inset: 0,
    opacity: 0.07,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
    backgroundSize: "80px 80px",
  },

  glowCyan: {
    position: "absolute",
    top: -220,
    right: -140,
    width: 620,
    height: 620,
    borderRadius: "50%",
    background: "rgba(34,211,238,.16)",
    filter: "blur(140px)",
  },

  glowGold: {
    position: "absolute",
    bottom: 220,
    left: -200,
    width: 620,
    height: 620,
    borderRadius: "50%",
    background: "rgba(214,181,109,.13)",
    filter: "blur(140px)",
  },

  glowPurple: {
    position: "absolute",
    top: "42%",
    right: -180,
    width: 520,
    height: 520,
    borderRadius: "50%",
    background: "rgba(124,58,237,.12)",
    filter: "blur(140px)",
  },

  hero: {
    maxWidth: 1120,
    margin: "0 auto 56px",
    position: "relative",
    zIndex: 2,
    textAlign: "center",
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
    fontSize: "clamp(52px,9vw,104px)",
    lineHeight: 0.95,
    letterSpacing: "-5px",
    fontWeight: 950,
  },

  subtitle: {
    maxWidth: 920,
    margin: "28px auto 0",
    color: "#cbd5e1",
    fontSize: "clamp(18px,3vw,24px)",
    lineHeight: 1.65,
    fontWeight: 650,
  },
searchShell: {
  maxWidth: 940,
  margin: "38px auto 0",
  minHeight: 82,
  display: "grid",
  gridTemplateColumns: "56px 1fr auto",
  alignItems: "center",
  gap: 10,
  padding: 10,
  borderRadius: 999,
  background:
    "linear-gradient(135deg,rgba(13,38,33,.92),rgba(5,18,32,.94))",
  border: "1px solid rgba(214,181,109,.34)",
  backdropFilter: "blur(28px)",
  position: "relative",
  overflow: "hidden",
},

 searchIcon: {
  width: 48,
  height: 48,
  borderRadius: "50%",
  background: "linear-gradient(135deg,#d6b56d,#77e6d2)",
  color: "#020617",
  display: "grid",
  placeItems: "center",
  fontWeight: 950,
  fontSize: 28,
  boxShadow: "0 0 34px rgba(214,181,109,.35)",
},

  searchInput: {
    width: "100%",
    minHeight: 58,
    border: "none",
    outline: "none",
    background: "transparent",
    color: "#fff",
    fontSize: 18,
    position: "relative",
    zIndex: 2,
  },
typingText: {
  position: "absolute",
  left: 78,
  right: 150,
  color: "rgba(226,232,240,.78)",
  fontSize: 18,
  fontWeight: 750,
  pointerEvents: "none",
  textAlign: "left",
  whiteSpace: "nowrap",
  overflow: "hidden",
},

 searchButton: {
  minHeight: 58,
  borderRadius: 999,
  border: "none",
  padding: "0 28px",
  background: "linear-gradient(135deg,#d6b56d,#7dd3fc)",
  color: "#020617",
  fontWeight: 950,
  cursor: "pointer",
  boxShadow: "0 16px 45px rgba(214,181,109,.22)",
},

  heroStats: {
    maxWidth: 880,
    margin: "30px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(145px,1fr))",
    gap: 14,
  },

  statCard: {
    minHeight: 92,
    borderRadius: 24,
    background:
      "linear-gradient(145deg,rgba(255,255,255,.085),rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.11)",
    display: "grid",
    placeItems: "center",
    padding: 12,
    backdropFilter: "blur(20px)",
  },

  categoryBar: {
    maxWidth: 1180,
    margin: "0 auto 54px",
    display: "flex",
    gap: 12,
    overflowX: "auto",
    position: "relative",
    zIndex: 2,
    paddingBottom: 10,
  },

  categoryButton: {
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: 999,
    background: "rgba(255,255,255,.07)",
    color: "#dbeafe",
    padding: "13px 18px",
    fontWeight: 900,
    whiteSpace: "nowrap",
    cursor: "pointer",
  },

  categoryActive: {
    background: "linear-gradient(135deg,#d6b56d,#22d3ee)",
    color: "#020617",
    borderColor: "transparent",
  },

  articleSection: {
    maxWidth: 1180,
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: 24,
    alignItems: "flex-end",
    marginBottom: 28,
  },

  kicker: {
    margin: 0,
    color: "#d6b56d",
    fontWeight: 950,
    letterSpacing: 3,
    fontSize: 12,
  },

  sectionTitle: {
    margin: "12px 0 0",
    fontSize: "clamp(36px,5vw,62px)",
    lineHeight: 1,
    letterSpacing: "-2px",
    fontWeight: 950,
  },

  sectionText: {
    maxWidth: 450,
    color: "#cbd5e1",
    lineHeight: 1.7,
    fontWeight: 650,
  },

  articleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: 18,
  },

  articleCard: {
    textAlign: "left",
    minHeight: 230,
    padding: 28,
    borderRadius: 32,
    background:
      "linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.11)",
    color: "#fff",
    cursor: "pointer",
    backdropFilter: "blur(22px)",
    boxShadow: "0 25px 90px rgba(0,0,0,.28)",
  },

  articleCategory: {
    color: "#7dd3fc",
    fontSize: 12,
    fontWeight: 950,
    letterSpacing: 3,
  },

  articleTitle: {
    fontSize: 24,
    lineHeight: 1.15,
    margin: "16px 0 12px",
    fontWeight: 950,
  },

  articleDesc: {
    color: "#cbd5e1",
    lineHeight: 1.65,
  },

  articleArrow: {
    display: "inline-flex",
    marginTop: 12,
    color: "#d6b56d",
    fontWeight: 950,
  },

  guidesSection: {
    maxWidth: 1180,
    margin: "64px auto 0",
    position: "relative",
    zIndex: 2,
  },

  guideGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 18,
  },

  guideCard: {
    padding: 28,
    borderRadius: 30,
    background: "rgba(255,255,255,.07)",
    border: "1px solid rgba(255,255,255,.11)",
    backdropFilter: "blur(22px)",
  },

  guideNumber: {
    color: "#d6b56d",
    fontWeight: 950,
    letterSpacing: 3,
  },

  guideTitle: {
    fontSize: 24,
    marginBottom: 10,
  },

  guideText: {
    color: "#cbd5e1",
    lineHeight: 1.7,
  },

  bankSection: {
    maxWidth: 1180,
    margin: "64px auto 0",
    padding: 36,
    borderRadius: 40,
    background:
      "linear-gradient(135deg,rgba(214,181,109,.10),rgba(34,211,238,.08))",
    border: "1px solid rgba(214,181,109,.22)",
    position: "relative",
    zIndex: 2,
    backdropFilter: "blur(22px)",
  },

  bankTitle: {
    margin: "12px 0 16px",
    fontSize: "clamp(34px,5vw,58px)",
    lineHeight: 1,
    letterSpacing: "-2px",
    fontWeight: 950,
  },

  bankText: {
    color: "#dbeafe",
    lineHeight: 1.8,
    maxWidth: 850,
  },

  bankGrid: {
    marginTop: 24,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: 14,
  },

  bankItem: {
    minHeight: 86,
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "18px 20px",
    borderRadius: 24,
    background: "rgba(255,255,255,.07)",
    border: "1px solid rgba(255,255,255,.11)",
    color: "#e5e7eb",
  },

  check: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg,#22d3ee,#d6b56d)",
    color: "#020617",
    fontWeight: 950,
    flexShrink: 0,
  },

  quickSection: {
    maxWidth: 1180,
    margin: "64px auto 0",
    padding: 36,
    borderRadius: 40,
    background:
      "linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.11)",
    position: "relative",
    zIndex: 2,
    backdropFilter: "blur(22px)",
  },

  quickGrid: {
    marginTop: 24,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
    gap: 14,
  },

  quickLink: {
    minHeight: 70,
    borderRadius: 22,
    border: "1px solid rgba(255,255,255,.11)",
    background: "rgba(255,255,255,.07)",
    color: "#fff",
    fontWeight: 950,
    cursor: "pointer",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};