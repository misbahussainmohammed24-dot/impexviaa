"use client";

import type { CSSProperties } from "react";

type HeroProps = {
  typedText: string;
  hxnMessage: string;
  onOpenChat: () => void;
};

export default function Hero({ typedText, hxnMessage, onOpenChat }: HeroProps) {
  return (
    <section style={styles.hero}>
      <div style={styles.badge}>STEP 3 · PRODUCT STORE SETUP</div>

      <h1 className="hero-title" style={styles.title}>
        Build Your AI-Powered
        <br />
        Supplier Store
      </h1>

      <p style={styles.subtitle}>
        Add product details, export readiness, images, certifications, RFQ settings,
        and visibility options. HXN AI will prepare a marketplace-ready product store.
      </p>

      <div className="ai-box" style={styles.aiBox}>
        <div className="robot-wrap" style={styles.robotWrap}>
          <div style={styles.robotHead}>
            <div style={styles.robotScreen}>
              <div style={styles.eyeLeft} />
              <div style={styles.eyeRight} />
              <div style={styles.smile} />
            </div>
          </div>

          <div style={styles.tablet}>
            <div style={styles.tabletLineOne} />
            <div style={styles.tabletLineTwo} />
            <div style={styles.tabletLineThree} />
          </div>

          <div style={styles.robotArm} />
          <div style={styles.robotAura} />
        </div>

        <div>
          <h2 style={styles.aiTitle}>HXN AI Store Assistant</h2>
          <div style={styles.aiLine} />

          <p style={styles.aiTyping}>
            {typedText}
            <span style={styles.cursor}>|</span>
          </p>

          <p style={styles.aiText}>{hxnMessage}</p>

          <button
            type="button"
            className="support-btn"
            style={styles.supportButton}
            onClick={onOpenChat}
          >
            Open Product Store Help
          </button>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  hero: {
    maxWidth: 1050,
    margin: "0 auto 55px",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
    animation: "fadeUp .8s ease both",
  },
  badge: {
    display: "inline-flex",
    padding: "10px 22px",
    borderRadius: 999,
    background: "rgba(15,23,42,.8)",
    border: "1px solid rgba(125,211,252,.38)",
    color: "#7dd3fc",
    letterSpacing: 4,
    fontSize: 12,
    fontWeight: 950,
    marginBottom: 28,
  },
  title: {
    fontSize: "clamp(44px,10vw,92px)",
    lineHeight: 0.92,
    margin: 0,
    fontWeight: 950,
    letterSpacing: "-4px",
    color: "#fff",
  },
  subtitle: {
    maxWidth: 860,
    margin: "30px auto 0",
    color: "#dbeafe",
    fontSize: 18,
    lineHeight: 1.85,
  },
  aiBox: {
    maxWidth: 940,
    margin: "34px auto 0",
    padding: 28,
    borderRadius: 36,
    background: "linear-gradient(135deg,#ffffff 0%,#f8fbff 45%,#eef7ff 100%)",
    color: "#020617",
    display: "grid",
    gridTemplateColumns: "210px 1fr",
    gap: 24,
    alignItems: "center",
    textAlign: "left",
    boxShadow:
      "0 28px 80px rgba(15,23,42,.34),0 0 70px rgba(34,211,238,.20)",
  },
  robotWrap: {
    height: 190,
    width: 210,
    position: "relative",
    animation: "floatBot 4s ease-in-out infinite",
  },
  robotHead: {
    width: 132,
    height: 104,
    borderRadius: 40,
    position: "absolute",
    top: 8,
    left: 46,
    background: "linear-gradient(135deg,#ffffff,#dff6ff)",
    border: "6px solid #cfe8ff",
    display: "grid",
    placeItems: "center",
  },
  robotScreen: {
    width: 84,
    height: 58,
    borderRadius: 24,
    background: "linear-gradient(135deg,#061733,#0b1f4a)",
    position: "relative",
  },
  eyeLeft: {
    width: 13,
    height: 22,
    borderRadius: 99,
    background: "#67e8f9",
    position: "absolute",
    top: 16,
    left: 23,
  },
  eyeRight: {
    width: 13,
    height: 22,
    borderRadius: 99,
    background: "#67e8f9",
    position: "absolute",
    top: 16,
    right: 23,
  },
  smile: {
    width: 26,
    height: 10,
    borderBottom: "4px solid #67e8f9",
    borderRadius: "0 0 20px 20px",
    position: "absolute",
    bottom: 10,
    left: 29,
  },
  tablet: {
    width: 106,
    height: 70,
    borderRadius: 22,
    background: "linear-gradient(135deg,#e0f7ff,#dbeafe)",
    border: "4px solid #bae6fd",
    padding: 14,
    position: "absolute",
    left: 0,
    bottom: 20,
  },
  tabletLineOne: {
    width: 54,
    height: 7,
    borderRadius: 99,
    background: "#60a5fa",
    marginBottom: 9,
  },
  tabletLineTwo: {
    width: 72,
    height: 7,
    borderRadius: 99,
    background: "#22d3ee",
    marginBottom: 9,
  },
  tabletLineThree: {
    width: 46,
    height: 7,
    borderRadius: 99,
    background: "#a78bfa",
  },
  robotArm: {
    width: 48,
    height: 82,
    borderRadius: 26,
    position: "absolute",
    right: 8,
    top: 78,
    background: "linear-gradient(135deg,#ffffff,#dbeafe)",
    border: "5px solid #cfe8ff",
    transform: "rotate(-18deg)",
  },
  robotAura: {
    position: "absolute",
    inset: 20,
    background: "rgba(34,211,238,.18)",
    filter: "blur(45px)",
    zIndex: -1,
  },
  aiTitle: {
    margin: 0,
    fontSize: 36,
    fontWeight: 950,
    letterSpacing: "-1px",
  },
  aiLine: {
    width: 46,
    height: 5,
    borderRadius: 99,
    margin: "14px 0",
    background: "linear-gradient(135deg,#9333ea,#06b6d4)",
  },
  aiTyping: {
    margin: 0,
    fontSize: "clamp(22px,4vw,34px)",
    lineHeight: 1.18,
    fontWeight: 950,
    background: "linear-gradient(135deg,#9333ea,#2563eb,#06b6d4)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  cursor: {
    color: "#06b6d4",
    animation: "blink 1s infinite",
  },
  aiText: {
    margin: "16px 0 0",
    color: "#334155",
    fontWeight: 800,
    lineHeight: 1.55,
    fontSize: 16,
  },
  supportButton: {
    marginTop: 18,
    width: "100%",
    border: "none",
    borderRadius: 22,
    padding: "16px 18px",
    background: "linear-gradient(135deg,#020617,#111827)",
    color: "#fff",
    fontSize: 16,
    fontWeight: 950,
    cursor: "pointer",
  },
};