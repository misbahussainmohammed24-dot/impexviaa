"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

export default function SellerTradeAdvisor() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const generateAdvice = () => {
    setAnswer(`
HXN AI Trade Guidance

Export Product:
${question}

Recommended Steps:

• Verify product certifications
• Check destination country regulations
• Prepare export documentation
• Determine HS Code
• Calculate logistics costs
• Identify buyer categories
• Prepare RFQ responses
• Enable trade compliance verification

Suggested Markets:

UAE
Saudi Arabia
USA
Germany
United Kingdom

HXN AI Recommendation:
Focus on verified buyers, strong compliance documentation and competitive pricing.
`);
  };

  return (
    <main style={styles.page}>
      <div style={styles.hero}>
        <div style={styles.badge}>HXN AI TRADE ADVISOR</div>

        <h1 style={styles.title}>
          Seller Trade
          <br />
          Advisor
        </h1>

        <p style={styles.subtitle}>
          Export guidance, certifications, logistics, regulations and market intelligence.
        </p>

        <div style={styles.card}>
          <textarea
            style={styles.textarea}
            placeholder="Example: I want to export pharmaceuticals to UAE"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button style={styles.button} onClick={generateAdvice}>
            Generate Trade Advice
          </button>
        </div>

        {answer && (
          <div style={styles.result}>
            <pre>{answer}</pre>
          </div>
        )}
      </div>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top,#16213f 0%,#07111f 45%,#020617 100%)",
    color: "#fff",
    padding: 40,
  },

  hero: {
    maxWidth: 1000,
    margin: "0 auto",
  },

  badge: {
    display: "inline-flex",
    padding: "10px 20px",
    borderRadius: 999,
    background: "#0f172a",
    color: "#7dd3fc",
    fontWeight: 900,
    marginBottom: 20,
  },

  title: {
    fontSize: "clamp(50px,8vw,90px)",
    fontWeight: 950,
    lineHeight: 0.95,
  },

  subtitle: {
    color: "#dbeafe",
    marginTop: 20,
    marginBottom: 30,
  },

  card: {
    background: "#fff",
    padding: 30,
    borderRadius: 30,
  },

  textarea: {
    width: "100%",
    minHeight: 180,
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },

  button: {
    width: "100%",
    height: 60,
    border: "none",
    borderRadius: 15,
    background: "#2563eb",
    color: "#fff",
    fontWeight: 900,
    cursor: "pointer",
  },

  result: {
    marginTop: 30,
    background: "rgba(255,255,255,.08)",
    padding: 25,
    borderRadius: 25,
  },
};