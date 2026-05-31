"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

export default function TrustScoreCenter() {
  const [score] = useState(87);

  const badges = [
    "Verified Business",
    "Verified Exporter",
    "Trusted Supplier",
    "Compliance Verified",
    "Export Ready",
  ];

  return (
    <main style={styles.page}>
      <div style={styles.hero}>
        <div style={styles.badge}>HXN TRUST SCORE CENTER</div>

        <h1 style={styles.title}>
          Supplier Trust
          <br />
          Intelligence
        </h1>

        <p style={styles.subtitle}>
          Monitor verification strength, compliance status,
          marketplace reliability and supplier trust score.
        </p>

        <div style={styles.scoreCard}>
          <div style={styles.scoreCircle}>
            <span>{score}</span>
          </div>

          <h2>HXN Trust Score</h2>

          <p>
            Your business profile demonstrates strong compliance,
            verification consistency and marketplace readiness.
          </p>
        </div>

        <div style={styles.grid}>
          {badges.map((badge) => (
            <div key={badge} style={styles.card}>
              <strong>{badge}</strong>
              <span>Active</span>
            </div>
          ))}
        </div>

        <div style={styles.analysis}>
          <h3>HXN AI Analysis</h3>

          <ul>
            <li>Business Identity Strength: Excellent</li>
            <li>Legal Verification Strength: Verified</li>
            <li>Compliance Strength: Strong</li>
            <li>Operational Capability: Strong</li>
            <li>Marketplace Reliability: Excellent</li>
          </ul>
        </div>
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
    maxWidth: 1100,
    margin: "0 auto",
    textAlign: "center",
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
    marginBottom: 40,
  },

  scoreCard: {
    background: "#fff",
    color: "#020617",
    borderRadius: 35,
    padding: 40,
    marginBottom: 30,
  },

  scoreCircle: {
    width: 140,
    height: 140,
    borderRadius: "50%",
    margin: "0 auto 20px",
    display: "grid",
    placeItems: "center",
    background:
      "linear-gradient(135deg,#7dd3fc,#38bdf8,#2563eb)",
    fontSize: 50,
    fontWeight: 900,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 20,
    marginBottom: 30,
  },

  card: {
    padding: 25,
    borderRadius: 25,
    background: "rgba(255,255,255,.08)",
    display: "grid",
    gap: 10,
  },

  analysis: {
    padding: 30,
    borderRadius: 30,
    background: "rgba(255,255,255,.08)",
    textAlign: "left",
  },
};