"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

export default function AIStoreBuilderPage() {
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [country, setCountry] = useState("");
  const [products, setProducts] = useState("");
  const [description, setDescription] = useState("");

  const [generated, setGenerated] = useState<any>(null);

  const generateStore = () => {
    const slug = companyName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    setGenerated({
      storeUrl: `https://impexviaa.com/store/${slug}`,
      storeName: companyName,
      heroTitle: `${companyName} Global Export Solutions`,
      about: `${companyName} is a trusted supplier from ${country} specializing in ${products}. We provide quality products, reliable logistics and global trade support.`,
      seo: `${products}, exporter, supplier, ${country}, wholesale, import export`,
      rfq: "Request a quotation directly from this supplier through IMPEXVIAA RFQ.",
    });
  };

  return (
    <main style={styles.page}>
      <div style={styles.blueGlow} />
      <div style={styles.purpleGlow} />

      <section style={styles.hero}>
        <div style={styles.badge}>HXN AI STORE BUILDER</div>

        <h1 style={styles.title}>
          AI Store
          <br />
          Generator
        </h1>

        <p style={styles.subtitle}>
          HXN automatically creates supplier stores, URLs, company profiles,
          SEO content and RFQ pages.
        </p>

        <div style={styles.whiteCard}>
          <h2 style={styles.cardTitle}>Build Your Store</h2>

          <input
            style={styles.input}
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <input
            style={styles.input}
            placeholder="Industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />

          <input
            style={styles.input}
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <textarea
            style={styles.textarea}
            placeholder="Main Products"
            value={products}
            onChange={(e) => setProducts(e.target.value)}
          />

          <textarea
            style={styles.textarea}
            placeholder="Company Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button style={styles.button} onClick={generateStore}>
            Generate Store
          </button>
        </div>

        {generated && (
          <div style={styles.resultCard}>
            <h2>Generated Store</h2>

            <p>
              <strong>Store URL:</strong>
              <br />
              {generated.storeUrl}
            </p>

            <p>
              <strong>Store Name:</strong>
              <br />
              {generated.storeName}
            </p>

            <p>
              <strong>Hero Title:</strong>
              <br />
              {generated.heroTitle}
            </p>

            <p>
              <strong>About Section:</strong>
              <br />
              {generated.about}
            </p>

            <p>
              <strong>SEO Keywords:</strong>
              <br />
              {generated.seo}
            </p>

            <p>
              <strong>RFQ Section:</strong>
              <br />
              {generated.rfq}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top,#16213f 0%,#07111f 45%,#020617 100%)",
    color: "#fff",
    padding: "70px 20px",
    position: "relative",
    overflow: "hidden",
  },

  blueGlow: {
    position: "absolute",
    top: -100,
    right: -100,
    width: 400,
    height: 400,
    borderRadius: "50%",
    background: "rgba(56,189,248,.18)",
    filter: "blur(100px)",
  },

  purpleGlow: {
    position: "absolute",
    bottom: -100,
    left: -100,
    width: 400,
    height: 400,
    borderRadius: "50%",
    background: "rgba(168,85,247,.18)",
    filter: "blur(100px)",
  },

  hero: {
    maxWidth: 1100,
    margin: "0 auto",
    textAlign: "center",
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
    marginBottom: 25,
  },

  title: {
    fontSize: "clamp(50px,10vw,90px)",
    lineHeight: 0.95,
    fontWeight: 950,
    margin: 0,
  },

  subtitle: {
    maxWidth: 800,
    margin: "30px auto",
    color: "#dbeafe",
    lineHeight: 1.8,
    fontSize: 18,
  },

  whiteCard: {
    background: "#fff",
    color: "#020617",
    borderRadius: 40,
    padding: 35,
    maxWidth: 900,
    margin: "40px auto",
  },

  cardTitle: {
    fontSize: 36,
    fontWeight: 900,
    marginBottom: 25,
  },

  input: {
    width: "100%",
    height: 60,
    borderRadius: 16,
    border: "1px solid #cbd5e1",
    padding: "0 16px",
    marginBottom: 15,
    fontSize: 16,
  },

  textarea: {
    width: "100%",
    minHeight: 120,
    borderRadius: 16,
    border: "1px solid #cbd5e1",
    padding: 16,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    width: "100%",
    height: 65,
    border: "none",
    borderRadius: 18,
    fontSize: 18,
    fontWeight: 900,
    cursor: "pointer",
    background:
      "linear-gradient(135deg,#7dd3fc,#38bdf8,#2563eb)",
    color: "#020617",
  },

  resultCard: {
    background:
      "linear-gradient(145deg,rgba(15,23,42,.92),rgba(30,41,59,.72))",
    borderRadius: 30,
    padding: 30,
    textAlign: "left",
    maxWidth: 900,
    margin: "40px auto",
    border: "1px solid rgba(125,211,252,.2)",
  },
};