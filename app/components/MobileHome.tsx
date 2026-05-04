"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileHome() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = email.includes("@") && email.includes(".");

  useEffect(() => {
    const images = document.querySelector(".showcase-images");
    if (!images) return;

    const handleScroll = () => {
      const box = images as HTMLElement;
      const index = Math.round(box.scrollLeft / box.clientWidth);

      document.querySelectorAll(".showcase-line").forEach((el, i) => {
        if (i === index) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    };

    images.addEventListener("scroll", handleScroll);
    return () => images.removeEventListener("scroll", handleScroll);
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
          <h2 className="showcase-line active">Source products globally.</h2>
          <h2 className="showcase-line">Trade across industries.</h2>
          <h2 className="showcase-line">Connect with verified suppliers.</h2>
        </div>

        <div className="showcase-images">
          <img src="/images/trade1.jpg" alt="Global sourcing" />
          <img src="/images/trade2.jpg" alt="Trade industries" />
          <img src="/images/trade3.jpg" alt="Verified suppliers" />
        </div>
      </section>
    </main>
  );
}