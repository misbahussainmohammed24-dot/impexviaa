"use client";

import { useState, useEffect, useRef } from "react";

export default function BuyerSellerShowcase() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const card = el.querySelector(".trust-card") as HTMLElement;

    // ✅ IMPORTANT FIX: prevent invisible bug
    if (card) card.style.opacity = "1";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && card) {
          card.classList.add("show");
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===================== */}
      {/* TOP SECTION */}
      {/* ===================== */}
      <section className="bs-section">

        <div className="image-box">
          <div
            className="image-hover-area"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onClick={() => setActive(!active)}
          >
            <img
              src="/images/buyer.jpg"
              className={`main-image ${active ? "hide" : ""}`}
            />

            <img
              src="/images/buyer-active.jpg"
              className={`overlay-image ${active ? "show" : ""}`}
            />

            <div className={`floating-card ${active ? "show" : ""}`}>
              <p>Shipping Options</p>
              <span>Standard • $10</span>
              <span>Express • $15</span>
            </div>
          </div>
        </div>

        <div className="seller-card">
          <span className="badge">TRUSTED GLOBAL NETWORK</span>

          <h2>
            Sell globally with verified buyers — without the risk
          </h2>

          <p className="desc">
            Impexviaa connects you with pre-verified international buyers,
            ensuring every transaction is secure, transparent, and reliable.
            Scale your business across borders with confidence.
          </p>

          <div className="feature-list">
            <div className="feature-item">✔ Verified buyers from 100+ countries</div>
            <div className="feature-item">✔ Secure payments with full protection</div>
            <div className="feature-item">✔ AI-powered smart buyer matching</div>
            <div className="feature-item">✔ Real-time global logistics</div>
          </div>

          <button className="cta-btn">Start Selling Globally →</button>
        </div>
      </section>

      {/* ===================== */}
      {/* TRUST SECTION */}
      {/* ===================== */}
      <section ref={sectionRef} className="trust-wrapper">

        <div className="trust-card">

          <div className="trust-header">
            <span>GLOBAL TRUST INFRASTRUCTURE</span>

            <h2>Built for serious businesses scaling worldwide</h2>

            <p>
              Impexviaa is a next-generation B2B ecosystem designed to remove risk,
              increase trust, and unlock real global growth.
            </p>
          </div>

          <div className="trust-grid">

            <div className="feature">
              ✔ Verified Businesses  
              <p>Only genuine companies pass strict onboarding.</p>
            </div>

            <div className="feature">
              🔒 Secure Transactions  
              <p>End-to-end protection for every payment.</p>
            </div>

            <div className="feature">
              🤖 AI Smart Matching  
              <p>Find the right buyers instantly.</p>
            </div>

            <div className="feature">
              🌍 Global Logistics  
              <p>Real-time tracking and seamless shipping.</p>
            </div>

          </div>

          <div className="stats">
            <div><h3>100+</h3><span>Countries</span></div>
            <div><h3>10K+</h3><span>Businesses</span></div>
            <div><h3>99.9%</h3><span>Secure Deals</span></div>
            <div><h3>24/7</h3><span>Support</span></div>
          </div>

        </div>
      </section>

      {/* ===================== */}
      {/* AI SECTION (ADDED ONLY) */}
      {/* ===================== */}
     <section className="ai-section">

  <div className="ai-wrapper">

    {/* LEFT SIDE */}
    <div className="ai-left">

      <div className="ai-card">
        <video
          src="/ai-card-hxn.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="ai-right">

      <span className="ai-badge">AI POWERED TRADE</span>

      <h2 className="ai-title">
        Power your global trade with AI
      </h2>

      <p className="ai-desc">
        Simplify import and export operations with an intelligent assistant that helps you connect with verified buyers, automate workflows, manage logistics, and close deals faster across international markets.
      </p>

    </div>

  </div>

</section>
{/* ===================== */}
{/* QUOTE SECTION */}
{/* ===================== */}
<section className="quote-section">

  <div className="quote-container">

    <h2 className="quote-text">
      “With Impexviaa, global trade is no longer complex. 
      We scaled across borders faster, connected with verified buyers, 
      and built a trusted international network without risk.”
    </h2>

    <p className="quote-author">
      Impexviaa Global Network
    </p>

  </div>

</section>
{/* ===================== */}
{/* CORE BUSINESS SECTIONS */}
{/* ===================== */}
{/* ===================== */}
{/* WHAT WE DO – FIXED */}
{/* ===================== */}

<section className="what-section">

  <div className="what-container">

    <span className="tag">OUR SERVICES</span>

    <h2>What we do</h2>

    <p>
      Impexviaa is a complete global trade ecosystem designed to simplify and scale import and export operations for modern businesses.
      We enable companies to discover verified international buyers, connect with trusted suppliers, and execute cross-border transactions
      with confidence. From sourcing and negotiations to logistics, documentation, and secure payments, every stage of global trade is
      streamlined into a single intelligent platform. By removing intermediaries and reducing operational friction, Impexviaa empowers
      businesses to expand into new markets faster, operate more efficiently, and build long-term international partnerships with complete
      transparency, reliability, and trust.
    </p>

  </div>

</section>


{/* ===================== */}
{/* HOW WE DO – FIXED */}
{/* ===================== */}

<section className="how-section">

  <div className="how-container">

    <span className="how-badge">PROCESS</span>

    <h2 className="how-title">How we do it</h2>

    <div className="how-steps">

      <div className="step">
        <span>01</span>
        <h4>Verification</h4>
        <p>Strict onboarding ensures only genuine and trusted businesses join the platform.</p>
      </div>

      <div className="step">
        <span>02</span>
        <h4>AI Matching</h4>
        <p>Advanced algorithms connect you with the most relevant global partners instantly.</p>
      </div>

      <div className="step">
        <span>03</span>
        <h4>Secure Transactions</h4>
        <p>Protected payments, contracts, and escrow systems eliminate risk.</p>
      </div>

      <div className="step">
        <span>04</span>
        <h4>Execution</h4>
        <p>Logistics, tracking, and delivery are handled seamlessly across borders.</p>
      </div>

    </div>

  </div>

</section>
{/* ===================== */}
{/* WHY CHOOSE – SCROLL FIX */}
{/* ===================== */}

<section className="why-section">

  <div className="why-container scroll-animate">

    <span className="why-badge">WHY IMPEXVIAA</span>

    <h2 className="why-title">Why choose Impexviaa</h2>

    <p className="why-text">
      Choosing Impexviaa means choosing a platform built for serious global businesses that demand reliability, transparency, and scale.
      Unlike generic marketplaces, Impexviaa is engineered specifically for import and export, combining verified networks, secure transaction
      infrastructure, and AI-powered intelligence into one seamless ecosystem. Every interaction is backed by trust-first architecture, ensuring
      businesses connect only with legitimate partners and execute deals with full confidence. With complete end-to-end control — from discovery
      to delivery — Impexviaa eliminates inefficiencies, reduces operational risks, and accelerates global growth, making it the preferred choice
      for companies expanding internationally with precision and trust.
    </p>

  </div>

</section>
      {/* ===================== */}
      {/* STYLES */}
      {/* ===================== */}
      <style jsx>{`

        .bs-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          padding: 100px 60px;
          background: #f7f7f7;
          align-items: center;
        }

        .image-box {
          display: flex;
          justify-content: center;
        }

        .image-hover-area {
          position: relative;
          width: 420px;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
        }

        .main-image {
          width: 100%;
          transition: 0.5s ease;
        }

        .main-image.hide {
          opacity: 0;
          transform: scale(0.96);
        }

        .overlay-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          transform: scale(0.96);
          transition: 0.5s ease;
        }

        .overlay-image.show {
          opacity: 1;
          transform: scale(1);
        }

        .floating-card {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(0,0,0,0.85);
          color: #fff;
          padding: 12px 16px;
          border-radius: 12px;
          opacity: 0;
          transform: translateY(20px);
          transition: 0.4s ease;
        }

        .floating-card.show {
          opacity: 1;
          transform: translateY(0);
        }

        .seller-card {
          max-width: 520px;
          padding: 40px;
          border-radius: 24px;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          transition: 0.4s;
        }

        .seller-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 80px rgba(0,0,0,0.12);
        }

        .badge {
          background: #000;
          color: #fff;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
        }

        .seller-card h2 {
          margin: 18px 0;
          font-size: 32px;
        }

        .desc {
          color: #666;
          margin-bottom: 20px;
        }

        .feature-list {
          display: grid;
          gap: 10px;
          margin-bottom: 25px;
        }

        .feature-item {
          background: #f7f7f7;
          padding: 10px 14px;
          border-radius: 10px;
          transition: 0.3s;
        }

        .feature-item:hover {
          background: #000;
          color: #fff;
          transform: translateX(6px);
        }

        .cta-btn {
          width: 100%;
          background: #000;
          color: #fff;
          padding: 14px;
          border-radius: 12px;
          border: none;
        }

        /* TRUST */

        .trust-wrapper {
          width: 100%;
          padding: 140px 20px;
          display: flex;
          justify-content: center;
          background: #ffffff;
        }

        .trust-card {
          position: relative;
          width: 100%;
          max-width: 950px;
          padding: 70px 60px;
          border-radius: 28px;

          background: linear-gradient(135deg, #071a2f, #0b2a4a, #123b66);
          color: #fff;

          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.08);

          box-shadow:
            0 40px 100px rgba(0,0,0,0.6),
            inset 0 1px 0 rgba(255,255,255,0.08);

          overflow: hidden;

          opacity: 1;
          transform: translateY(40px) scale(0.98);

          transition: all 0.8s cubic-bezier(0.22,1,0.36,1);
        }

        .trust-card.show {
          transform: translateY(0) scale(1);
        }

        .trust-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 20%, rgba(255,255,255,0.12), transparent 60%);
        }

        .trust-card::after {
          content: "";
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: radial-gradient(circle, rgba(255,255,255,0.05), transparent 60%);
          animation: glowRotate 14s linear infinite;
        }

        @keyframes glowRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 22px;
          margin-top: 40px;
        }

        .feature {
          padding: 18px;
          border-radius: 14px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.12);
          transition: 0.3s;
        }

        .feature:hover {
          transform: translateY(-8px);
          background: rgba(255,255,255,0.16);
        }

        .stats {
          display: flex;
          justify-content: space-between;
          margin-top: 55px;
          text-align: center;
        }

      /* ================= AI SECTION ================= */

.ai-section {
  padding: 180px 20px;
  background: linear-gradient(to bottom, #ffffff, #f8fafc);
}

/* LAYOUT */
.ai-wrapper {
  max-width: 1200px;
  margin: auto;

  display: grid;
  grid-template-columns: 520px 1fr;
  gap: 120px;

  align-items: center;
}

/* LEFT SIDE */
.ai-left {
  display: flex;
  justify-content: center;
}

/* CARD */
.ai-card {
  width: 100%;
  max-width: 420px;

  border-radius: 32px;
  overflow: hidden;

  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(40px);

  border: 1px solid rgba(255,255,255,0.4);

  box-shadow:
    0 80px 160px rgba(0,0,0,0.15),
    0 20px 60px rgba(99,102,241,0.15),
    inset 0 1px 0 rgba(255,255,255,0.6);

  transform: perspective(1200px) rotateY(-6deg) rotateX(4deg);
  transition: 0.6s cubic-bezier(0.22,1,0.36,1);
}

/* HOVER = PREMIUM FEEL */
.ai-card:hover {
  transform: perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1.03);
}

/* GLOW */
.ai-card::before {
  content: "";
  position: absolute;
  inset: -30%;

  background: radial-gradient(
    circle,
    rgba(99,102,241,0.35),
    rgba(236,72,153,0.25),
    transparent 70%
  );

  filter: blur(90px);
  z-index: -1;
}

/* VIDEO */
.ai-card video {
  width: 100%;
  display: block;
}

/* RIGHT SIDE TEXT */
.ai-right {
  max-width: 520px;
}

/* BADGE */
.ai-badge {
  display: inline-block;
  font-size: 12px;
  padding: 6px 14px;
  border-radius: 20px;
  background: rgba(0,0,0,0.05);
  margin-bottom: 20px;
}

/* TITLE */
.ai-title {
  font-size: 44px;
  line-height: 1.2;
  margin-bottom: 20px;

  background: linear-gradient(90deg, #000, #444);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* DESC */
.ai-desc {
  font-size: 16px;
  color: #555;
  line-height: 1.7;
}

/* ================= MOBILE ================= */
@media (max-width: 900px) {
  .ai-wrapper {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 60px;
  }

  .ai-card {
    transform: none;
  }
}
  /* ================= QUOTE SECTION ================= */

.quote-section {
  padding: 160px 20px;
  background: #ffffff;
}

.quote-container {
  max-width: 1100px;
  margin: auto;
  text-align: center;
}

/* BIG PREMIUM TEXT */
.quote-text {
  font-size: 44px;
  line-height: 1.3;
  font-weight: 500;
  color: #111;

  letter-spacing: -0.5px;

  opacity: 0;
  transform: translateY(40px);
  animation: fadeQuote 1s ease forwards;
}

/* AUTHOR */
.quote-author {
  margin-top: 30px;
  font-size: 16px;
  color: #777;

  opacity: 0;
  transform: translateY(20px);
  animation: fadeQuote 1s ease forwards;
  animation-delay: 0.4s;
}

/* ANIMATION */
@keyframes fadeQuote {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* MOBILE */
@media (max-width: 900px) {
  .quote-text {
    font-size: 28px;
  }
}
 /* ================= CARDS ================= */

.cards-section {
  padding: 160px 40px;
  background: #050b18;
  display: flex;
  justify-content: center;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 30px;
  max-width: 1000px;
  width: 100%;
}

.card {
  padding: 40px;
  border-radius: 24px;

  background: linear-gradient(135deg, #0b1f3a, #123b66);
  color: white;
  position: relative;
  overflow: hidden;

  border: 1px solid rgba(255,255,255,0.08);

  box-shadow:
    0 20px 60px rgba(0,0,0,0.6),
    inset 0 1px 0 rgba(255,255,255,0.05);

  transition: all 0.4s ease;

  opacity: 0;
  transform: translateY(40px);
  animation: fadeUp 0.8s ease forwards;
}

/* stagger animation */
.card:nth-child(1){animation-delay:0.2s}
.card:nth-child(2){animation-delay:0.4s}
.card:nth-child(3){animation-delay:0.6s}
.card:nth-child(4){animation-delay:0.8s}

/* hover premium effect */
.card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow:
    0 40px 100px rgba(0,0,0,0.8),
    0 0 40px rgba(0,150,255,0.2);
}

/* glow overlay */
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top left, rgba(255,255,255,0.1), transparent 60%);
}

/* animated shine */
.card::after {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background: radial-gradient(circle, rgba(255,255,255,0.05), transparent 70%);
  animation: rotateGlow 14s linear infinite;
}

.card h3 {
  font-size: 22px;
  margin-bottom: 12px;
}

.card p {
  font-size: 15px;
  color: rgba(255,255,255,0.7);
  line-height: 1.6;
}

/* ================= ANIMATIONS ================= */

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes rotateGlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* ================= MOBILE ================= */

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }

  .card {
    padding: 30px;
  }
}
/* ================= WHY SECTION ================= */

.why-section {
  padding: 160px 20px;
  background: #ffffff;
}

.why-container {
  max-width: 900px;
  margin: auto;
  text-align: center;

  opacity: 0;
  transform: translateY(60px);
  animation: fadeUp 1s ease forwards;
}

.why-title {
  font-size: 44px;
  margin: 20px 0;
}

.why-text {
  line-height: 1.9;
  color: #555;
  font-size: 16px;
}
/* ================= HOW SECTION ================= */

.how-section {
  padding: 180px 20px;
  display: flex;
  justify-content: center;
  background: #ffffff;
}

.how-card {
  width: 100%;
  max-width: 1100px;
  padding: 100px 80px;
  border-radius: 32px;

  background: linear-gradient(135deg, #071a2f, #0b2a4a, #123b66);

  color: #fff;
  position: relative;
  overflow: hidden;

  box-shadow:
    0 60px 140px rgba(0,0,0,0.6),
    inset 0 1px 0 rgba(255,255,255,0.08);

  transform: translateY(60px) scale(0.96);
  opacity: 0;
  animation: fadeUpScale 1s ease forwards;
}

/* glow effect */
.how-card::after {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background: radial-gradient(circle, rgba(255,255,255,0.06), transparent);
  animation: rotateGlow 18s linear infinite;
}

.how-badge {
  font-size: 12px;
  opacity: 0.7;
}

.how-title {
  font-size: 48px;
  margin: 20px 0 60px;
}

.how-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 40px;
}

.how-item {
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.8s ease forwards;
}

.how-item:nth-child(1){animation-delay:0.2s}
.how-item:nth-child(2){animation-delay:0.4s}
.how-item:nth-child(3){animation-delay:0.6s}
.how-item:nth-child(4){animation-delay:0.8s}

.how-item span {
  font-size: 22px;
  opacity: 0.6;
  display: block;
  margin-bottom: 10px;
}

/* ================= ANIMATIONS ================= */

@keyframes fadeUpScale {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes rotateGlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* ================= MOBILE ================= */

@media (max-width: 900px) {
  .how-grid {
    grid-template-columns: 1fr;
  }

  .how-card {
    padding: 60px 30px;
  }
}/* ================= WHAT ================= */

.what-section {
  padding: 160px 20px;
  background: #ffffff;
}

.what-container {
  max-width: 900px;
  margin: auto;
  text-align: center;
}

.what-container h2 {
  font-size: 48px;
  margin: 20px 0;
}

.what-container p {
  font-size: 16px;
  color: #555;
  line-height: 1.9;
}

/* ================= HOW ================= */

.how-container {
  max-width: 1100px;
  margin: auto;
  text-align: center;
}

.how-steps {
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 40px;
}

.step {
  padding: 30px;
  border-radius: 20px;
  background: linear-gradient(135deg,#071a2f,#123b66);
  color: white;

  opacity: 0;
  transform: translateY(40px);
  animation: fadeUp 0.8s ease forwards;
}

.step:nth-child(1){animation-delay:0.2s}
.step:nth-child(2){animation-delay:0.4s}
.step:nth-child(3){animation-delay:0.6s}
.step:nth-child(4){animation-delay:0.8s}

.step:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.6);
}

/* ================= WHY SCROLL ================= */

.scroll-animate {
  opacity: 0;
  transform: translateY(80px);
  transition: all 1s ease;
}

.scroll-animate.show {
  opacity: 1;
  transform: translateY(0);
}

/* ================= MOBILE ================= */

@media (max-width: 900px) {
  .how-steps {
    grid-template-columns: 1fr;
  }
}
      `}</style>
    </>
  );
}