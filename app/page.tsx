"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import BelowHero from "@/app/components/BelowHero";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = email.includes("@") && email.includes(".");

  const handleStart = async () => {
    if (!isValidEmail) {
      alert("Please enter a valid email");
      return;
    }

    if (loading) return;

    setLoading(true);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);

      const res = await fetch("/api/send-email/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      const text = await res.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        console.error("❌ NOT JSON RESPONSE:", text);
        alert("Server error. Check backend.");
        return;
      }

      if (!res.ok) {
        alert(data.message || "Server failed to process request");
        return;
      }

      if (data.success) {
        router.push(`/otp?email=${encodeURIComponent(email)}`);
      } else {
        alert(data.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error("FETCH ERROR:", error);

      if (error instanceof Error && error.name === "AbortError") {
        alert("Request timed out. Try again.");
      } else {
        alert("Network error. Check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  const row1 = ["img1", "img2", "img3", "img4", "img5", "img6"];
  const row2 = ["img7", "img8", "img9", "img10", "img11", "img12"];
  const row3 = ["img13", "img14", "img15", "img16", "img17", "img18"];

  const renderRow = (row: string[], className: string) => (
    <div className={`row ${className}`}>
      <div className="track">
        {[...row, ...row].map((img, i) => (
          <div key={i} className="card-img">
            <img src={`/images/${img}.jpeg`} alt="product" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div className="hero">
        <div className="navbar">IMPEXVIAA</div>

        <div className="bg">
          {renderRow(row1, "row1")}
          {renderRow(row2, "row2")}
          {renderRow(row3, "row3")}
        </div>

        <div className="hero-card">
          <span className="badge">IMPEXVIAA GLOBAL TRADE</span>

          <h1>Trade Globally with Verified Businesses</h1>

          <p>
            Secure global trade with verified buyers, real-time logistics,
            and protected transactions.
          </p>

          <div className="input-box">
            <input
              type="email"
              placeholder="Enter your business email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={handleStart} disabled={loading}>
              {loading ? "..." : "→"}
            </button>
          </div>

          <button
            className={`cta ${!isValidEmail || loading ? "disabled" : ""}`}
            onClick={handleStart}
            disabled={loading}
          >
            {loading ? "Sending..." : "Get Started"}
          </button>

          <p className="pricing">
            14-day free trial • Plans starting at $29/month
          </p>
        </div>
      </div>

      <BelowHero />
    </div>
  );
}