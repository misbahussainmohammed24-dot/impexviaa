"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
const showcaseItems = [
  { text: "Global sourcing, built for serious buyers.", image: "/images/trade1.webp", alt: "Global sourcing" },
  { text: "Verified suppliers across trusted markets.", image: "/images/trade2.webp", alt: "Verified suppliers" },
  { text: "Smart quotations before every deal begins.", image: "/images/trade3.webp", alt: "Smart quotations" },
  { text: "Cross-border trade with confidence.", image: "/images/trade4.webp", alt: "Cross-border trade" },
  { text: "Trusted transactions for global businesses.", image: "/images/trade5.webp", alt: "Trusted transactions" },
  { text: "AI-powered stores for modern exporters.", image: "/images/trade6.webp", alt: "AI-powered selling" },
  { text: "Secure payments through IMPEXVIAA Pay.", image: "/images/trade7.webp", alt: "Secure payments" },
  { text: "Scale worldwide with one premium trade platform.", image: "/images/trade8.webp", alt: "Scale worldwide" },
];

export default function MobileHome() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeShowcase, setActiveShowcase] = useState(0);

  const isValidEmail = email.includes("@") && email.includes(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShowcase((prev) => (prev + 1) % showcaseItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleStart = async () => {
    if (!isValidEmail) {
      alert("Please enter a valid business email");
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
    <main className="mobile-impex-page">
      <section className="mobile-impex-hero">
        <div className="mobile-video-wrapper">
          <video autoPlay muted loop playsInline className="mobile-hero-video">
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="mobile-hero-overlay" />
        </div>

        <header className="mobile-impex-nav">
          <div className="mobile-impex-logo">IMPEXVIAA</div>

          <button className="mobile-nav-link" onClick={handleStart}>
            Start for free
          </button>

          <button className="mobile-menu-btn">☰</button>
        </header>

        <div className="mobile-hero-content">
          <h1>Be the next global trade brand buyers trust</h1>

          <p>
            Build faster with verified suppliers, secure quotations, and global
            business access through IMPEXVIAA.
          </p>

          <div className="mobile-email-box">
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
            className="mobile-primary-cta"
            onClick={handleStart}
            disabled={loading}
          >
            {loading ? "Starting..." : "Start trading now"}
          </button>

          <a
            className="mobile-secondary-cta"
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶️ Why we built IMPEXVIAA
          </a>
        </div>
      </section>

      <section className="mobile-dark-panel">
        <h2>
          Global trade, rebuilt for trust.{" "}
          <span>
            Verified suppliers, protected quotations, and premium business access.
          </span>
        </h2>

        <div className="mobile-info-card glitter-card">
          <h3>Verified global suppliers</h3>
          <p>
            Work with credible businesses, cleaner profiles, and supplier access
            designed for serious international trade.
          </p>
        </div>

        <div className="mobile-info-card glitter-card">
          <h3>Secure trade quotations</h3>
          <p>
            Request prices, compare terms, and begin business conversations with
            clarity before every deal.
          </p>
        </div>

        <div className="mobile-info-card glitter-card">
          <h3>IMPEXVIAA Pay</h3>
          <p>
            A premium payment layer built to support safer, faster, and more
            trusted global transactions.
          </p>
        </div>
      </section>

      <section className="mobile-scroll-showcase">
        <div className="showcase-text">
          <p className="showcase-premium-text">
            {showcaseItems[activeShowcase].text}
          </p>
        </div>

        <div className="single-showcase-card">
          <img
            key={showcaseItems[activeShowcase].image}
            src={showcaseItems[activeShowcase].image}
            alt={showcaseItems[activeShowcase].alt}
          />
        </div>

        <div className="showcase-dots">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              className={activeShowcase === index ? "active" : ""}
              onClick={() => setActiveShowcase(index)}
            />
          ))}
        </div>
      </section>

      <section className="hxn-ai-section">
        <div className="hxn-ai-card">
          <div className="hxn-badge">HXN AI</div>

          <h2>One AI assistant for exporters, buyers, and global trade.</h2>

          <p>
            HXN helps exporters create premium product stores, generate product
            descriptions, organise listings, and present their business in a
            trusted global marketplace.
          </p>

          <div className="hxn-video-box">
            <video autoPlay muted loop playsInline>
              <source src="/ai-card-hxn.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="hxn-feature-card">
            <h3>For exporters</h3>
            <p>
              Ask HXN to build your store, write product details, create selling
              pages, and prepare your business for international buyers.
            </p>
          </div>

          <div className="hxn-feature-card">
            <h3>For buyers</h3>
            <p>
              Buyers can ask HXN for trusted suppliers, niche products,
              quotations, product categories, and sourcing suggestions.
            </p>
          </div>

          <div className="hxn-feature-card">
            <h3>For trade teams</h3>
            <p>
              HXN supports supplier discovery, product matching, quotation
              preparation, business verification, and faster decision-making.
            </p>
          </div>

          <div className="hxn-chat-box">
            <div className="typing-text">
              I need verified pharmaceutical suppliers from Europe
            </div>
            <button>↑</button>
          </div>
        </div>
      </section>

      <section className="global-trade-section">
        <div className="global-trade-card">
          <h2>Scale trade across global markets</h2>

          <p className="global-trade-subtext">
            IMPEXVIAA helps exporters connect with international buyers, manage
            quotations, discover suppliers, and expand across industries through
            one intelligent trade ecosystem.
          </p>

          <div className="trade-flags-wrapper">
            <div className="trade-flags-track">
              <span>🇺🇸</span>
              <span>🇬🇧</span>
              <span>🇦🇺</span>
              <span>🇩🇪</span>
              <span>🇧🇷</span>
              <span>🇮🇳</span>
              <span>🇦🇪</span>
              <span>🇬🇪</span>
              <span>🇺🇸</span>
              <span>🇬🇧</span>
              <span>🇦🇺</span>
              <span>🇩🇪</span>
              <span>🇧🇷</span>
              <span>🇮🇳</span>
              <span>🇦🇪</span>
              <span>🇬🇪</span>
            </div>
          </div>

          <div className="trade-order-card">
            <img src="/images/trade8.webp" alt="Global trade" />

            <div className="trade-order-popup">
              <span>🌍 New buyer request from Europe</span>
            </div>

            <button>View quotation</button>
          </div>

          <div className="trade-shipping-box">
            <div className="shipping-row">
              <span>Sea freight</span>
              <strong>$2,450</strong>
            </div>

            <div className="shipping-row">
              <span>Air cargo</span>
              <strong>$5,980</strong>
            </div>

            <div className="shipping-row">
              <span>Custom clearance</span>
              <strong>Included</strong>
            </div>

            <div className="shipping-total">
              <span>Total trade value</span>
              <strong>$48,700 USD</strong>
            </div>

            <button className="trade-action-btn">Continue global trade</button>
          </div>
        </div>
      </section>
 <section className="mobile-footer-section">
  <div className="footer-column">
    <h3>IMPEXVIAA</h3>
    <a href="/about">About IMPEXVIAA</a>
    <a href="/how-global-trade-works">How global trade works</a>
    <a href="/ai-generated-stores">AI-generated stores</a>
    <a href="/impexviaa-pay">IMPEXVIAA Pay</a>
    <a href="/supplier-verification">Supplier verification</a>
  </div>

  <div className="footer-column">
    <h3>Marketplace</h3>
    <a href="/marketplace/agriculture">Agriculture</a>
    <a href="/marketplace/pharmaceuticals">Pharmaceuticals</a>
    <a href="/marketplace/electronics">Electronics</a>
    <a href="/marketplace/machinery">Machinery</a>
    <a href="/marketplace/auto-parts">Auto parts</a>
    <a href="/marketplace/textiles">Textiles</a>
    <a href="/marketplace/chemicals">Chemicals</a>
    <a href="/marketplace/food-beverages">Food & beverages</a>
    <a href="/marketplace/construction-materials">Construction materials</a>
    <a href="/marketplace/logistics">Logistics services</a>
    <a href="/marketplace/metals-steel">Metals & steel</a>
    <a href="/marketplace/packaging">Packaging</a>
  </div>

  <div className="footer-column">
    <h3>Resources</h3>
    <a href="/resources/trade-guides">Trade guides</a>
    <a href="/resources/export-support">Export support</a>
    <a href="/resources/buyer-protection">Buyer protection</a>
    <a href="/resources/seller-tools">Seller tools</a>
    <a href="/resources/global-sourcing">Global sourcing</a>
  </div>

  <div className="footer-column">
    <h3>Support</h3>
    <a href="/support/help-center">Help Center</a>
    <a href="/support/contact-support">Contact support</a>
    <a href="/support/service-status">Service status</a>
    <a href="/support/report-supplier">Report supplier</a>
  </div>

  <div className="footer-divider" />

  <div className="footer-region">
    <a href="/?lang=en-GE">🌍 Georgia | English</a>
    <a href="/ge">🇬🇪 ქართული</a>
  </div>

  <div className="footer-legal">
    <a href="/terms">Terms of Service</a>
    <a href="/legal">Legal</a>
    <a href="/privacy-policy">Privacy Policy</a>
    <a href="/sitemap">Sitemap</a>
  </div>

  <div className="footer-socials">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">f</a>
    <a href="https://x.com" target="_blank" rel="noopener noreferrer">𝕏</a>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">▶️</a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">◎</a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">in</a>
  </div>
</section>
</main>
  );
}