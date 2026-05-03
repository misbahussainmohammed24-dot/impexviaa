"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MobileHome() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const start = () => {
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email");
      return;
    }

    router.push(`/otp?email=${encodeURIComponent(email)}`);
  };

  return (
    <main className="mobile-page">
      <header className="mobile-nav">
        <div className="mobile-logo">IMPEXVIAA</div>
        <button onClick={start}>Start for free</button>
      </header>

      <section className="mobile-hero-clean">
        <h1>Trade globally with verified businesses</h1>
        <p>
          Discover trusted suppliers, verified buyers, secure quotations, and
          global trade opportunities in one premium platform.
        </p>

        <input
          type="email"
          placeholder="Enter your business email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="mobile-main-btn" onClick={start}>
          Start free trial
        </button>

        <span>14-day free trial • No credit card required</span>
      </section>

      <section className="mobile-preview-card">
        <div className="mobile-browser">
          <div className="mobile-browser-top">Global Marketplace</div>
          <div className="mobile-product-grid">
            <div>Electronics</div>
            <div>Pharma</div>
            <div>Agriculture</div>
            <div>Auto Parts</div>
          </div>
        </div>
      </section>

      <section className="mobile-dark-section">
        <p className="mobile-small-title">Trusted B