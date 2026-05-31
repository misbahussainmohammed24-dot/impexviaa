"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

export default function BuyerDiscoveryPage() {
  const [product, setProduct] = useState("");
  const [buyers, setBuyers] = useState<any[]>([]);

  const findBuyers = () => {
    setBuyers([
      {
        type: "Importer",
        market: "UAE",
        demand: "High",
      },
      {
        type: "Distributor",
        market: "Saudi Arabia",
        demand: "High",
      },
      {
        type: "Wholesaler",
        market: "Germany",
        demand: "Medium",
      },
      {
        type: "Retail Chain",
        market: "United Kingdom",
        demand: "Medium",
      },
      {
        type: "Procurement Company",
        market: "USA",
        demand: "High",
      },
    ]);
  };

  return (
    <main style={styles.page}>
      <div style={styles.hero}>
        <div style={styles.badge}>HXN BUYER DISCOVERY</div>

        <h1 style={styles.title}>
          Global Buyer
          <br />
          Discovery
        </h1>

        <p style={styles.subtitle}>
          HXN identifies potential buyers, importers, distributors and target
          markets for your products.
        </p>

        <div style={styles.card}>
          <input
            style={styles.input}
            placeholder="Enter Product Name"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />

          <button style={styles.button} onClick={findBuyers}>
            Discover Buyers
          </button>
        </div>

        {buyers.length > 0 && (
          <div style={styles.grid}>
            {buyers.map((buyer, index) => (
              <div key={index} style={styles.resultCard}>
                <h3>{buyer.type}</h3>

                <p>
                  <strong>Market:</strong> {buyer.market}
                </p>

                <p>
                  <strong>Demand:</strong> {buyer.demand}
                </p>
              </div>
            ))}
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
    maxWidth: 1100,
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
    marginBottom: 30,
  },

  input: {
    width: "100%",
    height: 60,
    borderRadius: 15,
    border: "1px solid #ccc",
    padding: "0 15px",
    marginBottom: 15,
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

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 20,
  },

  resultCard: {
    padding: 25,
    borderRadius: 25,
    background: "rgba(255,255,255,.08)",
  },
};