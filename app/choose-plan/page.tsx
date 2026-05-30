"use client";

import { useRouter } from "next/navigation";
import type { CSSProperties } from "react";

export default function ChoosePlan() {
  const router = useRouter();

  return (
    <main style={styles.page}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(34px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseGlow {
          0%,100% { transform: scale(1); opacity: .65; }
          50% { transform: scale(1.08); opacity: 1; }
        }

        @keyframes shine {
          0% { transform: translateX(-130%) skewX(-18deg); }
          100% { transform: translateX(230%) skewX(-18deg); }
        }

        .trade-card {
          position: relative;
          overflow: hidden;
          transition: transform .4s ease, border-color .4s ease, background .4s ease, box-shadow .4s ease;
        }

        .trade-card::before {
          content: "";
          position: absolute;
          inset: 0;
          left: -120%;
          width: 55%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.14), transparent);
        }

        .trade-card:hover::before {
          animation: shine 1s ease;
        }

        .trade-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255,255,255,.35);
          background: rgba(255,255,255,.12);
          box-shadow: 0 35px 120px rgba(0,0,0,.55);
        }

        .trade-card:hover .arrow-box {
          transform: translateX(5px);
          background: #2563eb;
          color: white;
        }

        .arrow-box {
          transition: all .35s ease;
        }

        @media (max-width: 760px) {
          .trade-card {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />

      <section style={styles.hero}>
        <div style={styles.badge}>IMPEXVIAA GLOBAL ACCESS</div>

        <h1 style={styles.title}>
          What Do You Want
          <br />
          To Do Today?
        </h1>

        <p style={styles.subtitle}>
          Choose your interest first. IMPEXVIAA will open the right business
          access page for you with dedicated pricing, tools, and features.
        </p>

        <div style={styles.options}>
          <button
            className="trade-card"
            style={styles.card}
            onClick={() => router.push("/subscription/seller")}
          >
            <div style={styles.iconBox}>🏭</div>

            <div style={styles.cardContent}>
              <p style={styles.kicker}>I WANT TO SELL GLOBALLY</p>
              <h2 style={styles.cardTitle}>Become a Global Seller</h2>
              <p style={styles.cardText}>
                Create your supplier presence, showcase products, receive buyer
                inquiries, and grow with verified international visibility.
              </p>
            </div>

            <div className="arrow-box" style={styles.arrowBox}>→</div>
          </button>

          <button
            className="trade-card"
            style={styles.card}
            onClick={() => router.push("/subscription/buyer")}
          >
            <div style={styles.iconBox}>🌍</div>

            <div style={styles.cardContent}>
              <p style={styles.kicker}>I WANT TO BUY OR SOURCE PRODUCTS</p>
              <h2 style={styles.cardTitle}>Find Verified Suppliers</h2>
              <p style={styles.cardText}>
                Source products from trusted sellers, request quotations, compare
                suppliers, and move faster with confidence.
              </p>
            </div>

            <div className="arrow-box" style={styles.arrowBox}>→</div>
          </button>

          <button
            className="trade-card"
            style={styles.card}
            onClick={() => router.push("/subscription/tradepreneur")}
          >
            <div style={styles.iconBox}>🤝</div>

            <div style={styles.cardContent}>
              <p style={styles.kicker}>I WANT TO CONNECT TRADE OPPORTUNITIES</p>
              <h2 style={styles.cardTitle}>Join Tradepreneur Network</h2>
              <p style={styles.cardText}>
                Connect buyers and sellers, build profitable trade opportunities,
                and grow through a premium business network.
              </p>
            </div>

            <div className="arrow-box" style={styles.arrowBox}>→</div>
          </button>
        </div>
      </section>

      <footer style={styles.footer}>
        <h2 style={styles.footerLogo}>IMPEXVIAA</h2>

        <p style={styles.footerText}>
          Global trade rebuilt for trust, verified access, and premium
          international business growth.
        </p>

        <div style={styles.footerBottom}>
          © 2026 IMPEXVIAA. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    background:
      "radial-gradient(circle at top,#173b86 0%,#071426 40%,#020617 68%,#000 100%)",
    color: "#fff",
    padding: "72px 22px 42px",
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
  },

  glowOne: {
    position: "absolute",
    top: 50,
    left: -120,
    width: 320,
    height: 320,
    borderRadius: "50%",
    background: "rgba(37,99,235,.34)",
    filter: "blur(90px)",
    animation: "pulseGlow 7s ease-in-out infinite",
  },

  glowTwo: {
    position: "absolute",
    bottom: 140,
    right: -130,
    width: 340,
    height: 340,
    borderRadius: "50%",
    background: "rgba(168,85,247,.18)",
    filter: "blur(90px)",
    animation: "pulseGlow 8s ease-in-out infinite",
  },

  hero: {
    maxWidth: 1040,
    margin: "0 auto",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
    animation: "fadeUp .8s ease both",
  },

  badge: {
    display: "inline-flex",
    padding: "10px 18px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.16)",
    background: "rgba(255,255,255,.06)",
    color: "#cbd5e1",
    fontSize: 12,
    letterSpacing: 4,
    marginBottom: 28,
    backdropFilter: "blur(14px)",
  },

  title: {
    fontSize: "clamp(48px,10vw,94px)",
    lineHeight: 0.92,
    margin: 0,
    fontWeight: 950,
    letterSpacing: "-3px",
  },

  subtitle: {
    maxWidth: 760,
    margin: "30px auto 46px",
    color: "#d1d5db",
    fontSize: 18,
    lineHeight: 1.85,
  },

  options: {
    display: "grid",
    gap: 24,
    maxWidth: 900,
    margin: "0 auto",
  },

  card: {
    width: "100%",
    borderRadius: 34,
    border: "1px solid rgba(255,255,255,.14)",
    background:
      "linear-gradient(135deg, rgba(255,255,255,.12), rgba(255,255,255,.045))",
    padding: "28px",
    display: "grid",
    gridTemplateColumns: "86px 1fr 56px",
    gap: 22,
    alignItems: "center",
    color: "#fff",
    cursor: "pointer",
    backdropFilter: "blur(18px)",
    boxShadow: "0 30px 90px rgba(0,0,0,.45)",
    textAlign: "left",
  },

  iconBox: {
    width: 74,
    height: 74,
    borderRadius: 26,
    display: "grid",
    placeItems: "center",
    fontSize: 38,
    background: "rgba(255,255,255,.10)",
    border: "1px solid rgba(255,255,255,.12)",
  },

  cardContent: {
    minWidth: 0,
  },

  kicker: {
    margin: "0 0 10px",
    color: "#93c5fd",
    letterSpacing: 2,
    fontSize: 12,
    fontWeight: 850,
  },

  cardTitle: {
    margin: "0 0 12px",
    fontSize: "clamp(28px,5vw,40px)",
    fontWeight: 950,
    letterSpacing: "-1px",
  },

  cardText: {
    margin: 0,
    color: "#d1d5db",
    lineHeight: 1.75,
    fontSize: 15.5,
  },

  arrowBox: {
    width: 54,
    height: 54,
    borderRadius: "50%",
    background: "#fff",
    color: "#020617",
    display: "grid",
    placeItems: "center",
    fontSize: 28,
    fontWeight: 900,
  },

  footer: {
    maxWidth: 980,
    margin: "86px auto 0",
    paddingTop: 38,
    borderTop: "1px solid rgba(255,255,255,.10)",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },

  footerLogo: {
    margin: 0,
    fontSize: 42,
    letterSpacing: 8,
    fontWeight: 950,
  },

  footerText: {
    maxWidth: 700,
    margin: "18px auto 0",
    color: "#cbd5e1",
    lineHeight: 1.8,
    fontSize: 16,
  },

  footerBottom: {
    marginTop: 34,
    paddingTop: 22,
    borderTop: "1px solid rgba(255,255,255,.08)",
    color: "#64748b",
    fontSize: 14,
  },
};