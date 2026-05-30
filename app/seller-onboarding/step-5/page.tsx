"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Step5AIShopSetup() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    companyName: "",
    productName: "",
    productDescription: "",
    businessUSP: "",
    pricePerTon: "",
    pricePerKg: "",
    keyWords: "",
    targetMarkets: "",
    businessCategory: "",
    websiteUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await addDoc(collection(db, "ai-shop-setup"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      alert("AI Shop Setup Submitted Successfully");

      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
      alert("Submission Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={page}>
      <div style={glow}></div>

      <div style={container}>
        <div style={badge}>HXN AI POWERED STORE ENGINE</div>

        <h1 style={title}>
          AI Generated Global Supplier Storefront
        </h1>

        <p style={subtitle}>
          Configure your premium B2B supplier storefront powered
          by HXN AI technology. IMPEXVIAA automatically generates
          product intelligence, supplier visibility optimisation,
          SEO structures, search keywords, and marketplace
          discovery systems.
        </p>

        <div style={grid}>
          <input
            name="companyName"
            placeholder="Company Name"
            value={form.companyName}
            onChange={handleChange}
            style={input}
          />

          <input
            name="productName"
            placeholder="Main Product Name"
            value={form.productName}
            onChange={handleChange}
            style={input}
          />

          <input
            name="businessCategory"
            placeholder="Business Category"
            value={form.businessCategory}
            onChange={handleChange}
            style={input}
          />

          <input
            name="websiteUrl"
            placeholder="Website / Catalogue URL"
            value={form.websiteUrl}
            onChange={handleChange}
            style={input}
          />

          <input
            name="pricePerTon"
            placeholder="Price Per Ton"
            value={form.pricePerTon}
            onChange={handleChange}
            style={input}
          />

          <input
            name="pricePerKg"
            placeholder="Price Per KG"
            value={form.pricePerKg}
            onChange={handleChange}
            style={input}
          />

          <input
            name="targetMarkets"
            placeholder="Target Markets (USA, UAE, Europe...)"
            value={form.targetMarkets}
            onChange={handleChange}
            style={input}
          />

          <input
            name="keyWords"
            placeholder="Search Keywords"
            value={form.keyWords}
            onChange={handleChange}
            style={input}
          />
        </div>

        <textarea
          name="businessUSP"
          placeholder="Business USP / Why Buyers Should Choose You"
          value={form.businessUSP}
          onChange={handleChange}
          style={textarea}
        />

        <textarea
          name="productDescription"
          placeholder="Describe Your Products & Business"
          value={form.productDescription}
          onChange={handleChange}
          style={bigTextarea}
        />

        <div style={aiBox}>
          <h2 style={aiTitle}>HXN AI WILL GENERATE</h2>

          <div style={featuresGrid}>
            <div style={featureCard}>
              AI Generated Product Descriptions
            </div>

            <div style={featureCard}>
              Global SEO Marketplace Ranking
            </div>

            <div style={featureCard}>
              Smart Supplier Discovery Optimisation
            </div>

            <div style={featureCard}>
              AI Generated Search Keywords
            </div>

            <div style={featureCard}>
              Professional Supplier Store Design
            </div>

            <div style={featureCard}>
              Buyer Visibility Enhancement
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={button}
        >
          {loading
            ? "Creating AI Supplier Store..."
            : "Launch AI Generated Store"}
        </button>
      </div>
    </div>
  );
}

const page: CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top,#1e293b,#020617 70%)",
  padding: "60px 20px",
  position: "relative",
  overflow: "hidden",
};

const glow: CSSProperties = {
  position: "absolute",
  width: 500,
  height: 500,
  background: "rgba(250,204,21,.12)",
  filter: "blur(120px)",
  borderRadius: "50%",
  top: -100,
  right: -100,
};

const container: CSSProperties = {
  maxWidth: 1100,
  margin: "0 auto",
  background: "rgba(15,23,42,.88)",
  border: "1px solid rgba(250,204,21,.18)",
  borderRadius: 36,
  padding: 40,
  backdropFilter: "blur(30px)",
  boxShadow: "0 30px 120px rgba(250,204,21,.12)",
  position: "relative",
  zIndex: 2,
};

const badge: CSSProperties = {
  display: "inline-block",
  background: "rgba(250,204,21,.12)",
  border: "1px solid rgba(250,204,21,.28)",
  color: "#facc15",
  padding: "10px 18px",
  borderRadius: 999,
  fontWeight: 800,
  letterSpacing: 1,
  marginBottom: 25,
};

const title: CSSProperties = {
  color: "white",
  fontSize: "54px",
  fontWeight: 900,
  lineHeight: 1.1,
  marginBottom: 18,
};

const subtitle: CSSProperties = {
  color: "#cbd5e1",
  fontSize: 18,
  lineHeight: 1.9,
  marginBottom: 45,
  maxWidth: 900,
};

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: 20,
  marginBottom: 25,
};

const input: CSSProperties = {
  width: "100%",
  padding: "20px",
  borderRadius: 18,
  border: "1px solid rgba(255,255,255,.08)",
  background: "rgba(255,255,255,.04)",
  color: "white",
  fontSize: 16,
  outline: "none",
};

const textarea: CSSProperties = {
  width: "100%",
  minHeight: 120,
  padding: "20px",
  borderRadius: 20,
  border: "1px solid rgba(255,255,255,.08)",
  background: "rgba(255,255,255,.04)",
  color: "white",
  fontSize: 16,
  marginBottom: 25,
  outline: "none",
};

const bigTextarea: CSSProperties = {
  width: "100%",
  minHeight: 180,
  padding: "20px",
  borderRadius: 20,
  border: "1px solid rgba(255,255,255,.08)",
  background: "rgba(255,255,255,.04)",
  color: "white",
  fontSize: 16,
  marginBottom: 35,
  outline: "none",
};

const aiBox: CSSProperties = {
  background: "rgba(255,255,255,.03)",
  border: "1px solid rgba(250,204,21,.12)",
  borderRadius: 28,
  padding: 30,
  marginBottom: 35,
};

const aiTitle: CSSProperties = {
  color: "#facc15",
  fontSize: 28,
  fontWeight: 900,
  marginBottom: 25,
};

const featuresGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: 20,
};

const featureCard: CSSProperties = {
  background: "rgba(255,255,255,.04)",
  border: "1px solid rgba(255,255,255,.06)",
  borderRadius: 20,
  padding: 22,
  color: "white",
  fontWeight: 700,
  lineHeight: 1.6,
};

const button: CSSProperties = {
  width: "100%",
  padding: "22px",
  borderRadius: 24,
  border: "none",
  background:
    "linear-gradient(135deg,#fde68a,#facc15,#f59e0b)",
  color: "#020617",
  fontSize: 20,
  fontWeight: 900,
  cursor: "pointer",
  boxShadow: "0 20px 80px rgba(250,204,21,.35)",
};