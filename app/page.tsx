"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import MobileHome from "@/app/components/MobileHome";
import DesktopSections from "@/app/DesktopSections";
export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isValidEmail = email.includes("@") && email.includes(".");

  const handleStart = async () => {
    if (!isValidEmail) {
      alert("Please enter a valid email");
      return;
    }

    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/send-email/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        router.push(`/otp?email=${encodeURIComponent(email)}`);
      } else {
        alert(data.message || "Failed to send OTP");
      }
    } catch {
      alert("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="desktop-home">
        <section className="desktop-premium-hero">
          <video autoPlay muted loop playsInline className="desktop-hero-video">
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          <div className="desktop-hero-overlay" />

          <header className="desktop-premium-nav">
            <div className="desktop-premium-logo">IMPEXVIAA</div>

            <button
              className="desktop-premium-menu"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
          </header>

          <section className="desktop-premium-content">
            <span>IMPEXVIAA GLOBAL TRADE</span>

            <h1>Be the next global trade brand buyers trust</h1>

            <p>
              Build faster with verified suppliers, secure quotations, and
              global business access through IMPEXVIAA.
            </p>

            <div className="desktop-premium-actions">
              <div className="desktop-premium-email">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button onClick={handleStart} disabled={loading}>
                  →
                </button>
              </div>

              <button
                className="desktop-premium-cta"
                onClick={handleStart}
                disabled={loading}
              >
                {loading ? "Starting..." : "Start trading now"}
              </button>
            </div>
          </section>
        </section>
         <DesktopSections />

        {menuOpen && (
          <div className="drawer-overlay" onClick={() => setMenuOpen(false)}>
            <div className="drawer" onClick={(e) => e.stopPropagation()}>
              <button
                className="drawer-close"
                onClick={() => setMenuOpen(false)}
              >
                ×
              </button>

              <h2>IMPEXVIAA</h2>
              <p>AI-powered global trade marketplace</p>

              <button
                className="drawer-login"
                onClick={() => router.push("/login")}
              >
                Log in
              </button>

              <button className="drawer-link" onClick={() => router.push("/about")}>
                About IMPEXVIAA →
              </button>

              <button
                className="drawer-link"
                onClick={() => router.push("/supplier-verification")}
              >
                Supplier Verification →
              </button>

              <button
                className="drawer-link"
                onClick={() => router.push("/trust-score-center")}
              >
                Trust Score Center →
              </button>

              <button
                className="drawer-link"
                onClick={() => router.push("/marketplace/agriculture")}
              >
                Agriculture →
              </button>

              <button
                className="drawer-link"
                onClick={() => router.push("/marketplace/pharmaceuticals")}
              >
                Pharmaceuticals →
              </button>

              <button
                className="drawer-link"
                onClick={() => router.push("/marketplace/electronics")}
              >
                Electronics →
              </button>

              <button
                className="drawer-link"
                onClick={() => router.push("/resources/global-sourcing")}
              >
                Global Sourcing →
              </button>

              <button
                className="drawer-link"
                onClick={() => router.push("/resources/buyer-protection")}
              >
                Buyer Protection →
              </button>

              <button
                className="drawer-link"
                onClick={() => router.push("/resources/seller-tools")}
              >
                Seller Tools →
              </button>

              <button
                className="drawer-link"
                onClick={() => router.push("/resources/trade-guides")}
              >
                Trade Guides →
              </button>

              <button
                className="drawer-link"
                onClick={() => router.push("/support/help-center")}
              >
                Help Center →
              </button>

              <button
                className="drawer-link"
                onClick={() => router.push("/support/contact-support")}
              >
                Contact Support →
              </button>

              <button
                className="drawer-link"
                onClick={() => router.push("/support/report-supplier")}
              >
                Report Supplier →
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mobile-home">
        <MobileHome />
      </div>
    </>
  );
}