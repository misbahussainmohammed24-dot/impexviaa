"use client";

import type { CSSProperties } from "react";
import PayPalCheckoutButton from "@/components/PayPalCheckoutButton";

export default function SellerSubscription() {
  return (
    <main style={styles.page}>
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%,100% {
            opacity:.65;
            transform:scale(1);
          }

          50% {
            opacity:1;
            transform:scale(1.08);
          }
        }

        @keyframes pulseGlow {
          0%,100% {
            opacity:.55;
            transform:scale(1);
          }

          50% {
            opacity:1;
            transform:scale(1.04);
          }
        }

        .plan-card {
          transition: .4s ease;
        }

        .plan-card:hover {
          transform: translateY(-10px) scale(1.015);
          border-color: rgba(255,255,255,.35);
          box-shadow: 0 40px 130px rgba(0,0,0,.6);
        }

        .paypal-wrap {
          position: relative;
          margin-top: 26px;
          transition: .35s ease;
        }

        .paypal-wrap:hover {
          transform: translateY(-4px);
        }
      `}</style>

      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />

      <section style={styles.hero}>
        <div style={styles.badge}>SELLER ACCESS</div>

        <h1 style={styles.title}>
          Build Your Global
          <br />
          Supplier Empire
        </h1>

        <p style={styles.subtitle}>
          IMPEXVIAA Seller Access is built for manufacturers,
          exporters, suppliers, wholesalers, and product
          businesses that want global visibility, buyer
          inquiries, verified trust, premium listings,
          and AI powered international trade growth.
        </p>
      </section>

      <section style={styles.plans}>
        {/* MONTHLY PLAN */}
        <div className="plan-card" style={styles.planCard}>
          <p style={styles.planTag}>MONTHLY ACCESS</p>

          <h2 style={styles.planTitle}>
            1 Month Seller Plan
          </h2>

          <div style={styles.price}>
            $524
            <span style={styles.priceSmall}> / month</span>
          </div>

          <p style={styles.planText}>
            Best for sellers who want to start quickly,
            test global buyer demand, and activate their
            professional supplier presence.
          </p>

          <div className="paypal-wrap" style={styles.paypalBox}>
            <div style={styles.paypalGlow}></div>

            <div style={styles.paypalInner}>
              <PayPalCheckoutButton
                amount="524.00"
                plan="seller-monthly"
              />
            </div>
          </div>
        </div>

        {/* YEARLY PLAN */}
        <div className="plan-card" style={styles.featuredPlan}>
          <p style={styles.popular}>BEST VALUE</p>

          <p style={styles.planTag}>ANNUAL ACCESS</p>

          <h2 style={styles.planTitle}>
            1 Year Seller Plan
          </h2>

          <div style={styles.price}>
            $5999
            <span style={styles.priceSmall}> / year</span>
          </div>

          <p style={styles.planText}>
            Built for serious exporters who want a full
            year of visibility, verification, business
            credibility, and long-term global growth.
          </p>

          <div className="paypal-wrap" style={styles.paypalBox}>
            <div style={styles.paypalGlowGold}></div>

            <div style={styles.paypalInner}>
              <PayPalCheckoutButton
                amount="5999.00"
                plan="seller-yearly"
              />
            </div>
          </div>
        </div>
      </section>

      <section style={styles.valueSection}>
        <h2 style={styles.sectionTitle}>
          What Sellers Get Inside IMPEXVIAA
        </h2>

        <div style={styles.featuresGrid}>
          {[
            "Premium supplier business profile",
            "Verified seller trust badge",
            "Product catalogue visibility",
            "Buyer inquiry access",
            "Quotation request system",
            "Global category placement",
            "AI-assisted product descriptions",
            "AI-generated product presentation",
            "Lead collection from interested buyers",
            "International supplier positioning",
            "Business credibility layer",
            "Priority visibility inside marketplace",
            "Dedicated seller dashboard",
            "Document verification support",
            "Professional trade identity",
            "Access to future AI-generated store tools",
            "Buyer confidence enhancement",
            "Global supplier discovery support",
          ].map((item) => (
            <div key={item} style={styles.featureItem}>
              ✔ {item}
            </div>
          ))}
        </div>
      </section>

      <section style={styles.whyBox}>
        <h2 style={styles.whyTitle}>
          Why Sellers Should Choose IMPEXVIAA
        </h2>

        <p style={styles.whyText}>
          Most platforms only list suppliers.
          IMPEXVIAA is designed to help sellers
          look trusted, verified, organised,
          and globally ready.
        </p>

        <p style={styles.whyText}>
          Your products are not just placed online —
          they are positioned inside a premium
          trade ecosystem built for serious buyers,
          verified business communication,
          and international growth.
        </p>

        <p style={styles.whyText}>
          Sellers do not only need traffic.
          They need trust, presentation,
          product clarity, business credibility,
          and a system that helps buyers feel
          confident before starting a conversation.
        </p>
      </section>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    background:
      "radial-gradient(circle at top,#0f3f6f 0%,#061426 38%,#020617 70%,#000 100%)",
    color: "#fff",
    padding: "76px 22px 70px",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
  },

  glowOne: {
    position: "absolute",
    top: 60,
    left: -120,
    width: 330,
    height: 330,
    borderRadius: "50%",
    background: "rgba(14,165,233,.25)",
    filter: "blur(90px)",
    animation: "glow 7s ease-in-out infinite",
  },

  glowTwo: {
    position: "absolute",
    bottom: 130,
    right: -120,
    width: 360,
    height: 360,
    borderRadius: "50%",
    background: "rgba(234,179,8,.18)",
    filter: "blur(90px)",
    animation: "glow 8s ease-in-out infinite",
  },

  hero: {
    maxWidth: 1050,
    margin: "0 auto 60px",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
    animation: "fadeUp .8s ease both",
  },

  badge: {
    display: "inline-flex",
    padding: "10px 20px",
    borderRadius: 999,
    background: "rgba(255,255,255,.07)",
    border: "1px solid rgba(255,255,255,.16)",
    color: "#bae6fd",
    letterSpacing: 4,
    fontSize: 12,
    marginBottom: 28,
  },

  title: {
    fontSize: "clamp(50px,10vw,104px)",
    lineHeight: 0.9,
    margin: 0,
    fontWeight: 950,
    letterSpacing: "-4px",
  },

  subtitle: {
    maxWidth: 840,
    margin: "32px auto 0",
    color: "#d1d5db",
    fontSize: 19,
    lineHeight: 1.85,
  },

  plans: {
    maxWidth: 1120,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(310px,1fr))",
    gap: 26,
    position: "relative",
    zIndex: 2,
  },

  planCard: {
    borderRadius: 34,
    padding: 34,
    background:
      "linear-gradient(135deg,rgba(255,255,255,.10),rgba(255,255,255,.04))",
    border: "1px solid rgba(255,255,255,.14)",
    boxShadow: "0 30px 90px rgba(0,0,0,.45)",
    backdropFilter: "blur(18px)",
  },

  featuredPlan: {
    borderRadius: 34,
    padding: 34,
    background:
      "linear-gradient(135deg,rgba(234,179,8,.18),rgba(255,255,255,.06))",
    border: "1px solid rgba(234,179,8,.35)",
    boxShadow: "0 35px 120px rgba(0,0,0,.55)",
    backdropFilter: "blur(18px)",
    position: "relative",
  },

  popular: {
    display: "inline-flex",
    padding: "8px 14px",
    borderRadius: 999,
    background: "rgba(234,179,8,.18)",
    color: "#fde68a",
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: 2,
    margin: "0 0 18px",
  },

  planTag: {
    margin: "0 0 12px",
    color: "#93c5fd",
    letterSpacing: 2,
    fontSize: 12,
    fontWeight: 850,
  },

  planTitle: {
    margin: "0 0 20px",
    fontSize: 34,
    fontWeight: 950,
  },

  price: {
    fontSize: 58,
    fontWeight: 950,
    marginBottom: 18,
  },

  priceSmall: {
    fontSize: 18,
    color: "#cbd5e1",
    fontWeight: 500,
  },

  planText: {
    color: "#d1d5db",
    lineHeight: 1.75,
    fontSize: 16,
    marginBottom: 28,
  },

  paypalBox: {
  marginTop: 24,
  borderRadius: 24,
  overflow: "hidden",
  background: "rgba(255,255,255,0.06)",
  padding: 14,
  minHeight: 70,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 0 40px rgba(59,130,246,.35)",
},

  paypalInner: {
    position: "relative",
    zIndex: 5,
    borderRadius: 24,
    overflow: "hidden",
    background: "rgba(255,255,255,.05)",
    padding: 4,
    backdropFilter: "blur(10px)",
  },

  paypalGlow: {
    position: "absolute",
    inset: -2,
    borderRadius: 30,
    background:
      "linear-gradient(135deg,rgba(59,130,246,.65),rgba(14,165,233,.15))",
    filter: "blur(18px)",
    opacity: .85,
    animation: "pulseGlow 4s ease-in-out infinite",
  },

  paypalGlowGold: {
    position: "absolute",
    inset: -2,
    borderRadius: 30,
    background:
      "linear-gradient(135deg,rgba(234,179,8,.7),rgba(245,158,11,.15))",
    filter: "blur(20px)",
    opacity: .9,
    animation: "pulseGlow 4s ease-in-out infinite",
  },

  valueSection: {
    maxWidth: 1120,
    margin: "90px auto 0",
    position: "relative",
    zIndex: 2,
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "clamp(36px,7vw,64px)",
    lineHeight: 1,
    marginBottom: 42,
    fontWeight: 950,
  },

  featuresGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(240px,1fr))",
    gap: 14,
  },

  featureItem: {
    padding: "16px 18px",
    borderRadius: 18,
    background: "rgba(255,255,255,.07)",
    border: "1px solid rgba(255,255,255,.10)",
    color: "#e5e7eb",
    fontSize: 15,
  },

  whyBox: {
    maxWidth: 980,
    margin: "80px auto 0",
    padding: "36px",
    borderRadius: 34,
    background:
      "linear-gradient(135deg,rgba(255,255,255,.10),rgba(255,255,255,.04))",
    border: "1px solid rgba(255,255,255,.14)",
    boxShadow: "0 30px 90px rgba(0,0,0,.45)",
    position: "relative",
    zIndex: 2,
  },

  whyTitle: {
    fontSize: "clamp(32px,6vw,54px)",
    margin: "0 0 22px",
    lineHeight: 1.05,
  },

  whyText: {
    color: "#d1d5db",
    fontSize: 17,
    lineHeight: 1.85,
  },
};