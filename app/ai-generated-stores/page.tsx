"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { useRouter } from "next/navigation";

export default function AiGeneratedStorePage() {
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState(
    "I am HXN AI. Impexviaa helps verified suppliers build AI-generated stores, product listings, dashboards, trade profiles, SEO product pages, trust score systems, and buyer-ready marketplace visibility."
  );

  const askAi = () => {
    if (!message.trim()) {
      setAnswer(
        "Ask me about AI store generation, product listings, supplier dashboard, buyer visibility, or subscription activation."
      );
      return;
    }

    setAnswer(
      "Please activate me to answer your query. Subscribe to unlock HXN AI store generation, product description writing, SEO listing creation, supplier dashboard, trust score, buyer visibility, RFQ access, and global trade automation."
    );
  };

  const goToPayment = () => {
    router.push("/subscription/seller");
  };

  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.noise} />
      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />
      <div style={styles.glowThree} />

      <section style={styles.hero}>
        <div style={styles.badge}>HXN AI · AI GENERATED STORE</div>

        <h1 style={styles.title}>
          One AI Assistant for exporters, buyers, and global trade.
        </h1>

        <p style={styles.subtitle}>
          HXN AI turns a verified supplier profile into a premium global trade store,
          product catalogue, AI dashboard, SEO product pages, trust score profile,
          and buyer-ready marketplace presence.
        </p>

        <div style={styles.heroActions}>
          <button style={styles.primaryButton} onClick={goToPayment}>
            Activate HXN AI Store
          </button>

          <button
            style={styles.secondaryButton}
            onClick={() => {
              const el = document.getElementById("hxn-ai-box");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore AI Features
          </button>
        </div>

        <div style={styles.videoFrame}>
          <video
            src="/ai-card-hxn.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={styles.video}
          />
        </div>
      </section>

      <section style={styles.statsGrid}>
        <Stat value="24/7" label="AI store assistant" />
        <Stat value="150+" label="global markets supported" />
        <Stat value="AI" label="product SEO automation" />
        <Stat value="HXN" label="supplier store builder" />
      </section>

      <section style={styles.featureSection}>
        <div style={styles.sectionHeader}>
          <p style={styles.kicker}>WHAT HXN AI CREATES</p>
          <h2 style={styles.sectionTitle}>
            From verification data to a complete supplier business system.
          </h2>
        </div>

        <div style={styles.featureGrid}>
          <Feature
            number="01"
            title="AI-Generated Supplier Store"
            text="HXN creates a premium supplier store using your company name, product category, uploaded documents, business description, product images, and verification status."
          />
          <Feature
            number="02"
            title="Product Listing Automation"
            text="HXN writes product titles, product descriptions, SEO keywords, product tags, category structure, product highlights, and buyer-focused listing content."
          />
          <Feature
            number="03"
            title="Supplier Dashboard"
            text="HXN builds a clean dashboard where suppliers can track verification, documents, store readiness, buyer visibility, product performance, and AI recommendations."
          />
          <Feature
            number="04"
            title="Trust Score Profile"
            text="HXN uses verification documents, business details, compliance documents, product data, and export readiness to prepare a trust score system."
          />
          <Feature
            number="05"
            title="Global Buyer Visibility"
            text="After activation, the supplier profile becomes buyer-ready with marketplace visibility, RFQ access, product presentation, and AI trade readiness."
          />
          <Feature
            number="06"
            title="AI Trade Assistant"
            text="HXN helps suppliers understand product documentation, destination country requirements, store quality, and missing data before marketplace activation."
          />
        </div>
      </section>

      <section id="hxn-ai-box" style={styles.aiBox}>
        <div style={styles.aiLeft}>
          <div style={styles.aiFace}>
            <span style={styles.eye} />
            <span style={styles.eye} />
          </div>

          <div style={styles.aiPulseRing} />
        </div>

        <div style={styles.aiRight}>
          <p style={styles.kicker}>LIVE HXN AI BOX</p>

          <h2 style={styles.aiTitle}>
            Activate HXN AI to unlock full answers and automated store creation.
          </h2>

          <div style={styles.answerBox}>{answer}</div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask HXN AI about your store, dashboard, product listings, RFQs, buyer visibility, or subscription..."
            style={styles.textarea}
          />

          <div style={styles.aiActions}>
            <button style={styles.primaryButton} onClick={goToPayment}>
              Activate & Go to Payment
            </button>

            <button style={styles.secondaryButton} onClick={askAi}>
              Ask HXN AI
            </button>
          </div>
        </div>
      </section>

      <section style={styles.pipelineSection}>
        <p style={styles.kicker}>AFTER SUBSCRIPTION</p>

        <h2 style={styles.sectionTitle}>
          HXN AI starts building your trade presence step by step.
        </h2>

        <div style={styles.pipeline}>
          {[
            "Reads supplier verification data",
            "Checks company and document readiness",
            "Builds trust score structure",
            "Generates product store layout",
            "Creates product SEO content",
            "Builds supplier dashboard",
            "Prepares buyer-ready profile",
            "Unlocks marketplace visibility",
          ].map((item, index) => (
            <div key={item} style={styles.pipelineItem}>
              <span style={styles.pipelineNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>
          Turn your supplier profile into a premium AI-powered global store.
        </h2>

        <p style={styles.ctaText}>
          Activate HXN AI and start generating your storefront, product pages,
          dashboard, SEO listings, trust profile, and buyer-ready business presence.
        </p>

        <button style={styles.ctaButton} onClick={goToPayment}>
          Start AI Store Activation
        </button>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={styles.statCard}>
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
}

function Feature({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="feature-card" style={styles.featureCard}>
      <span style={styles.featureNumber}>{number}</span>
      <h3 style={styles.featureTitle}>{title}</h3>
      <p style={styles.featureText}>{text}</p>
    </div>
  );
}

const css = `
html, body {
  background: #020617 !important;
}

@keyframes floatVideo {
  0%,100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-12px) scale(1.01); }
}

@keyframes pulseGlow {
  0%,100% { box-shadow: 0 0 45px rgba(34,211,238,.25); }
  50% { box-shadow: 0 0 95px rgba(214,181,109,.32); }
}

@keyframes borderMove {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

.feature-card {
  transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  border-color: rgba(34,211,238,.55) !important;
  box-shadow: 0 30px 90px rgba(0,0,0,.45) !important;
}

textarea::placeholder {
  color: rgba(203,213,225,.72);
}

textarea:focus {
  outline: none;
  border-color: rgba(34,211,238,.8) !important;
  box-shadow: 0 0 0 4px rgba(34,211,238,.16);
}

@media(max-width:760px) {
  .mobile-grid-fix {
    grid-template-columns: 1fr !important;
  }
}
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left,#143d34 0%,#061f1b 28%,#020617 72%)",
    color: "#ffffff",
    padding: "64px 18px 110px",
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
    position: "relative",
    overflow: "hidden",
  },

  noise: {
    position: "fixed",
    inset: 0,
    opacity: 0.08,
    pointerEvents: "none",
    backgroundImage:
      "radial-gradient(rgba(255,255,255,.45) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
    zIndex: 0,
  },

  glowOne: {
    position: "absolute",
    top: -220,
    right: -150,
    width: 600,
    height: 600,
    borderRadius: "50%",
    background: "rgba(34,211,238,.16)",
    filter: "blur(120px)",
  },

  glowTwo: {
    position: "absolute",
    top: 520,
    left: -180,
    width: 540,
    height: 540,
    borderRadius: "50%",
    background: "rgba(214,181,109,.13)",
    filter: "blur(120px)",
  },

  glowThree: {
    position: "absolute",
    bottom: 120,
    right: -180,
    width: 520,
    height: 520,
    borderRadius: "50%",
    background: "rgba(139,92,246,.14)",
    filter: "blur(130px)",
  },

  hero: {
    maxWidth: 1080,
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },

  badge: {
    display: "inline-flex",
    padding: "15px 32px",
    borderRadius: 999,
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(214,181,109,.25)",
    color: "#d6b56d",
    fontWeight: 950,
    letterSpacing: 4,
    fontSize: 13,
    marginBottom: 34,
    backdropFilter: "blur(18px)",
  },

  title: {
    maxWidth: 1000,
    margin: 0,
    fontSize: "clamp(52px,9vw,104px)",
    lineHeight: 0.96,
    letterSpacing: "-5px",
    fontWeight: 950,
  },

  subtitle: {
    maxWidth: 900,
    margin: "32px 0 0",
    color: "rgba(226,232,240,.76)",
    fontSize: "clamp(20px,3.4vw,32px)",
    lineHeight: 1.48,
    fontWeight: 500,
  },

  heroActions: {
    marginTop: 34,
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
  },

  primaryButton: {
    minHeight: 62,
    padding: "0 26px",
    border: "none",
    borderRadius: 999,
    background: "linear-gradient(135deg,#d6b56d,#22d3ee)",
    color: "#020617",
    fontWeight: 950,
    fontSize: 16,
    cursor: "pointer",
    boxShadow: "0 20px 70px rgba(34,211,238,.22)",
  },

  secondaryButton: {
    minHeight: 62,
    padding: "0 26px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.16)",
    background: "rgba(255,255,255,.07)",
    color: "#ffffff",
    fontWeight: 950,
    fontSize: 16,
    cursor: "pointer",
    backdropFilter: "blur(18px)",
  },

  videoFrame: {
    marginTop: 58,
    padding: 2,
    borderRadius: 44,
    background:
      "linear-gradient(120deg,#d6b56d,#22d3ee,#8b5cf6,#d6b56d)",
    backgroundSize: "200% 200%",
    animation: "floatVideo 4.2s ease-in-out infinite, borderMove 5s linear infinite",
    boxShadow: "0 40px 120px rgba(0,0,0,.55)",
  },

  video: {
    width: "100%",
    display: "block",
    borderRadius: 42,
    background: "#ffffff",
  },

  statsGrid: {
    maxWidth: 1080,
    margin: "56px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: 16,
    position: "relative",
    zIndex: 2,
  },

  statCard: {
    padding: 24,
    borderRadius: 26,
    background: "rgba(255,255,255,.07)",
    border: "1px solid rgba(255,255,255,.11)",
    backdropFilter: "blur(20px)",
  },

  featureSection: {
    maxWidth: 1120,
    margin: "80px auto 0",
    position: "relative",
    zIndex: 2,
  },

  sectionHeader: {
    maxWidth: 860,
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
    fontSize: "clamp(34px,5.8vw,68px)",
    lineHeight: 1,
    letterSpacing: "-3px",
    fontWeight: 950,
  },

  featureGrid: {
    marginTop: 34,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: 18,
  },

  featureCard: {
    minHeight: 260,
    padding: 28,
    borderRadius: 32,
    background:
      "linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.035))",
    border: "1px solid rgba(255,255,255,.11)",
    backdropFilter: "blur(22px)",
    boxShadow: "0 22px 70px rgba(0,0,0,.28)",
  },

  featureNumber: {
    color: "#22d3ee",
    fontWeight: 950,
    letterSpacing: 3,
    fontSize: 12,
  },

  featureTitle: {
    margin: "18px 0 12px",
    fontSize: 27,
    lineHeight: 1.05,
    fontWeight: 950,
  },

  featureText: {
    color: "rgba(226,232,240,.75)",
    lineHeight: 1.65,
    fontSize: 16,
    fontWeight: 650,
  },

  aiBox: {
    maxWidth: 1120,
    margin: "70px auto 0",
    padding: 34,
    borderRadius: 42,
    display: "grid",
    gridTemplateColumns: "130px 1fr",
    gap: 30,
    background:
      "linear-gradient(145deg,rgba(2,6,23,.92),rgba(6,31,27,.92))",
    border: "1px solid rgba(34,211,238,.26)",
    boxShadow: "0 45px 140px rgba(0,0,0,.55)",
    position: "relative",
    zIndex: 2,
    animation: "pulseGlow 3.5s ease-in-out infinite",
  },

  aiLeft: {
    position: "relative",
  },

  aiFace: {
    width: 118,
    height: 118,
    borderRadius: 34,
    background: "linear-gradient(135deg,#020617,#0f172a)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    boxShadow: "0 0 55px rgba(34,211,238,.36)",
    position: "relative",
    zIndex: 2,
  },

  eye: {
    width: 17,
    height: 34,
    borderRadius: 999,
    background: "#22d3ee",
    boxShadow: "0 0 18px rgba(34,211,238,.9)",
  },

  aiPulseRing: {
    position: "absolute",
    inset: -12,
    borderRadius: 42,
    border: "1px solid rgba(34,211,238,.28)",
  },

  aiRight: {
    minWidth: 0,
  },

  aiTitle: {
    margin: "10px 0 18px",
    fontSize: "clamp(32px,5.5vw,62px)",
    lineHeight: 0.98,
    letterSpacing: "-2px",
    fontWeight: 950,
  },

  answerBox: {
    padding: 24,
    borderRadius: 28,
    background:
      "linear-gradient(135deg,rgba(34,211,238,.12),rgba(214,181,109,.10))",
    border: "1px solid rgba(125,211,252,.24)",
    color: "#dbeafe",
    lineHeight: 1.7,
    fontWeight: 750,
    whiteSpace: "pre-wrap",
  },

  textarea: {
    width: "100%",
    minHeight: 130,
    marginTop: 18,
    borderRadius: 26,
    border: "1px solid rgba(125,211,252,.30)",
    background: "rgba(255,255,255,.08)",
    color: "#ffffff",
    padding: 20,
    fontSize: 16,
    lineHeight: 1.7,
    resize: "vertical",
    boxSizing: "border-box",
  },

  aiActions: {
    marginTop: 18,
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
  },

  pipelineSection: {
    maxWidth: 1120,
    margin: "80px auto 0",
    position: "relative",
    zIndex: 2,
  },

  pipeline: {
    marginTop: 34,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: 16,
  },

  pipelineItem: {
    padding: 24,
    borderRadius: 28,
    background: "rgba(255,255,255,.07)",
    border: "1px solid rgba(255,255,255,.11)",
    color: "#dbeafe",
    fontWeight: 800,
    lineHeight: 1.5,
  },

  pipelineNumber: {
    display: "block",
    color: "#22d3ee",
    fontWeight: 950,
    letterSpacing: 3,
    marginBottom: 10,
  },

  cta: {
    maxWidth: 1120,
    margin: "80px auto 0",
    padding: "50px 34px",
    borderRadius: 44,
    background:
      "linear-gradient(135deg,rgba(214,181,109,.16),rgba(34,211,238,.14),rgba(139,92,246,.12))",
    border: "1px solid rgba(214,181,109,.24)",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },

  ctaTitle: {
    maxWidth: 900,
    margin: "0 auto",
    fontSize: "clamp(34px,5.8vw,72px)",
    lineHeight: 1,
    letterSpacing: "-3px",
    fontWeight: 950,
  },

  ctaText: {
    maxWidth: 760,
    margin: "24px auto 0",
    color: "rgba(226,232,240,.76)",
    fontSize: 18,
    lineHeight: 1.7,
    fontWeight: 650,
  },

  ctaButton: {
    marginTop: 28,
    minHeight: 68,
    padding: "0 34px",
    border: "none",
    borderRadius: 999,
    background: "linear-gradient(135deg,#d6b56d,#22d3ee)",
    color: "#020617",
    fontWeight: 950,
    fontSize: 17,
    cursor: "pointer",
    boxShadow: "0 24px 90px rgba(34,211,238,.28)",
  },
};