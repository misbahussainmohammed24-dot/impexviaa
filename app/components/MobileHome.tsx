"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const showcaseItems = [
  {
    text: "Global sourcing",
    image: "/images/trade1.webp",
    alt: "Global product sourcing",
  },
  {
    text: "Verified suppliers",
    image: "/images/trade2.webp",
    alt: "Verified suppliers",
  },
  {
    text: "Smart quotations",
    image: "/images/trade3.webp",
    alt: "Trade industries",
  },
  {
    text: "Cross-border trade",
    image: "/images/trade4.webp",
    alt: "Secure quotations",
  },
  {
    text: "Trusted transactions",
    image: "/images/trade5.webp",
    alt: "Global buyer seller network",
  },
  {
    text: "AI-powered selling",
    image: "/images/trade6.webp",
    alt: "AI trade automation",
  },
  {
    text: "Secure payments",
    image: "/images/trade7.webp",
    alt: "Trusted global trade",
  },
  {
    text: "Scale worldwide",
    image: "/images/trade8.webp",
    alt: "Impexviaa global platform",
  },
];

export default function MobileHome() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeShowcase, setActiveShowcase] = useState(0);

  const isValidEmail = email.includes("@") && email.includes(".");

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
        headers: {
          "Content-Type": "application/json",
        },
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

  const handleShowcaseScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const box = e.currentTarget;
    const cardWidth = box.clientWidth * 0.58 + 6;
    const index = Math.round(box.scrollLeft / cardWidth);
    setActiveShowcase(Math.min(index, showcaseItems.length - 1));
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
          Trade everywhere business happens.{" "}
          <span>Across borders, suppliers, and global markets.</span>
        </h2>

        <div className="mobile-info-card">
          <h3>Verified suppliers</h3>
          <p>
            Connect with genuine businesses and build trust before trade begins.
          </p>
        </div>

        <div className="mobile-info-card">
          <h3>Secure quotations</h3>
          <p>
            Request prices, trade terms, and supplier details with confidence.
          </p>
        </div>
      </section>

      <section className="mobile-scroll-showcase">
        <div className="showcase-text">
          {showcaseItems.map((item, index) => (
            <h2
              key={index}
              className={`showcase-line ${
                activeShowcase === index ? "active" : ""
              }`}
            >
              {item.text}
            </h2>
          ))}
        </div>

        <div className="showcase-images" onScroll={handleShowcaseScroll}>
          {showcaseItems.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.alt}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </section>
    </main>
  );
}