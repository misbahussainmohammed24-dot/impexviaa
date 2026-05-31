"use client";

import { useEffect, useState } from "react";

import type { CSSProperties } from "react";

import { useRouter } from "next/navigation";
const sellerModules = [
  {
    title: "AI Store Builder",
    text: "HXN builds your complete supplier website, store URL, company profile, product sections and RFQ contact page.",
    href: "/ai-store-builder",
  },
  {
    title: "AI Product Generator",
    text: "Generate product titles, SEO descriptions, specifications, export markets, keywords and professional listings.",
    href: "/ai-product-generator",
  },
  {
    title: "AI Catalogue Generator",
    text: "Create professional export catalogues, brochures, company profiles and product PDFs instantly.",
    href: "/ai-catalogue-generator",
  },
  {
    title: "Seller Trade Advisor",
    text: "Receive export guidance, certification recommendations, logistics support and trade intelligence.",
    href: "/seller-trade-advisor",
  },
  {
    title: "Trust Score Center",
    text: "Monitor verification status, compliance strength, trust badges and marketplace reputation.",
    href: "/trust-score-center",
  },
  {
    title: "Buyer Discovery",
    text: "HXN helps identify potential buyers, target markets and trade opportunities globally.",
    href: "/buyer-discovery",
  },
  {
    title: "RFQ Assistant",
    text: "Generate quotations, respond to RFQs and manage buyer requirements professionally.",
    href: "/rfq-assistant",
  },
  {
    title: "Marketplace Analytics",
    text: "View profile performance, listing engagement, buyer activity and growth recommendations.",
    href: "/marketplace-analytics",
  },
];
export default function HXNSellerAIPage() {
  const router = useRouter();

  const [typedText, setTypedText] = useState("");

  const fullText =
    "I am HXN. Your AI trade partner for store creation, product generation, export growth, buyer discovery and business expansion.";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index += 1;

      if (index > fullText.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <main style={styles.page}>
      <div style={styles.blueGlow} />
      <div style={styles.purpleGlow} />

      <section style={styles.hero}>
        <div style={styles.badge}>HXN SELLER AI</div>

        <h1 style={styles.title}>
          AI Powered
          <br />
          Trade Operating
          <br />
          System
        </h1>

        <p style={styles.subtitle}>
          Build stores, generate products, discover buyers,
          create catalogues and grow globally with HXN AI.
        </p>

        <div style={styles.aiCard}>
          <h2 style={styles.aiTitle}>HXN AI Assistant</h2>

          <p style={styles.aiTyping}>
            {typedText}
            <span>|</span>
          </p>
        </div>
      </section>

      <section style={styles.grid}>
        {sellerModules.map((module) => (
          <button
            key={module.title}
            style={styles.card}
            onClick={() => router.push(module.href)}
          >
            <h3>{module.title}</h3>
            <p>{module.text}</p>
          </button>
        ))}
      </section>
    </main>
  );
}
const css = `
@keyframes fadeUp {
  from {
    opacity:0;
    transform:translateY(30px);
  }
  to {
    opacity:1;
    transform:translateY(0);
  }
}

@keyframes pulseGlow {
  0%,100% {
    opacity:.5;
    transform:scale(1);
  }
  50% {
    opacity:1;
    transform:scale(1.08);
  }
}

@keyframes blink {
  0%,100% {
    opacity:1;
  }
  50% {
    opacity:0;
  }
}

button:hover {
  transform:translateY(-4px);
}
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top,#16213f 0%,#07111f 45%,#020617 100%)",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
    padding: "70px 20px",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
  },

  blueGlow: {
    position: "absolute",
    top: -120,
    right: -120,
    width: 420,
    height: 420,
    borderRadius: "50%",
    background: "rgba(56,189,248,.18)",
    filter: "blur(110px)",
    animation: "pulseGlow 8s ease-in-out infinite",
  },

  purpleGlow: {
    position: "absolute",
    left: -120,
    bottom: -120,
    width: 420,
    height: 420,
    borderRadius: "50%",
    background: "rgba(168,85,247,.18)",
    filter: "blur(120px)",
    animation: "pulseGlow 10s ease-in-out infinite",
  },

  hero: {
    maxWidth: 1100,
    margin: "0 auto",
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
    border: "1px solid rgba(125,211,252,.4)",
    color: "#7dd3fc",
    fontWeight: 900,
    letterSpacing: 3,
    marginBottom: 28,
    fontSize: 12,
  },

  title: {
    fontSize: "clamp(48px,9vw,90px)",
    lineHeight: 0.95,
    fontWeight: 950,
    margin: 0,
    letterSpacing: "-4px",
  },

  subtitle: {
    maxWidth: 850,
    margin: "30px auto",
    color: "#dbeafe",
    lineHeight: 1.8,
    fontSize: 18,
  },

  aiCard: {
    maxWidth: 900,
    margin: "40px auto",
    borderRadius: 36,
    padding: 35,
    background:
      "linear-gradient(135deg,#ffffff 0%,#f8fbff 45%,#eef7ff 100%)",
    color: "#020617",
    boxShadow:
      "0 28px 80px rgba(15,23,42,.34),0 0 70px rgba(34,211,238,.20)",
  },

  aiTitle: {
    margin: 0,
    fontSize: 36,
    fontWeight: 950,
  },

  aiTyping: {
    marginTop: 18,
    fontSize: 24,
    lineHeight: 1.5,
    fontWeight: 900,
    background:
      "linear-gradient(135deg,#9333ea,#2563eb,#06b6d4)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },

  grid: {
    maxWidth: 1200,
    margin: "60px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: 20,
    position: "relative",
    zIndex: 2,
  },

  card: {
    borderRadius: 30,
    padding: 28,
    textAlign: "left",
    border: "1px solid rgba(125,211,252,.20)",
    background:
      "linear-gradient(145deg,rgba(15,23,42,.92),rgba(30,41,59,.72))",
    backdropFilter: "blur(20px)",
    color: "#fff",
    cursor: "pointer",
    transition: ".3s ease",
    boxShadow: "0 20px 70px rgba(0,0,0,.35)",
  },
};