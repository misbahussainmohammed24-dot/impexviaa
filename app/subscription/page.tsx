"use client";

import { useRouter } from "next/navigation";

export default function SubscriptionPage() {
  const router = useRouter();

  const handleSelect = (plan: "trial" | "monthly" | "yearly") => {
    const now = new Date();

    if (plan === "trial") {
      // 🔥 14-day trial logic
      const expiry = new Date();
      expiry.setDate(now.getDate() + 14);

      localStorage.setItem("plan", "trial");
      localStorage.setItem("planExpiry", expiry.toISOString());

      router.push("/products");
    } else {
      // 🔥 Paid → checkout page
      router.push(`/checkout?plan=${plan}`);
    }
  };

  return (
    <div className="sub-container">

      {/* HEADER */}
      <div className="sub-header">
        <h1>Choose Your Buyer Plan</h1>
        <p>
          Access verified global suppliers, negotiate directly,
          and scale your sourcing with confidence.
        </p>
      </div>

      {/* PLANS */}
      <div className="plans">

        {/* TRIAL */}
        <div className="plan-card light">
          <h3>Free Trial</h3>
          <p className="price">$0</p>
          <p className="duration">14-day full access</p>

          <ul>
            <li>✔ Full premium features</li>
            <li>✔ Browse all suppliers</li>
            <li>✔ Direct messaging</li>
            <li>✔ Access all categories</li>
            <li>❗ Auto-upgrade after 14 days</li>
          </ul>

          <button onClick={() => handleSelect("trial")}>
            Start Free Trial
          </button>
        </div>

        {/* MONTHLY */}
        <div className="plan-card premium">
          <span className="badge">Most Popular</span>

          <h3>Premium Monthly</h3>
          <p className="price">$49<span>/month</span></p>

          <ul>
            <li>✔ Unlimited verified suppliers</li>
            <li>✔ Direct WhatsApp / Email contact</li>
            <li>✔ Real-time negotiations</li>
            <li>✔ AI supplier matching</li>
            <li>✔ Priority visibility</li>
            <li>✔ Secure trade support</li>
            <li>✔ Faster deal closures</li>
          </ul>

          <button onClick={() => handleSelect("monthly")}>
            Get Started
          </button>

          <p className="note">Cancel anytime • No hidden charges</p>
        </div>

        {/* YEARLY */}
        <div className="plan-card pro">
          <h3>Premium Yearly</h3>
          <p className="price">$399<span>/year</span></p>
          <p className="save">Save $189 per year</p>

          <ul>
            <li>✔ Everything in Monthly</li>
            <li>✔ Dedicated account manager</li>
            <li>✔ Early supplier access</li>
            <li>✔ Exclusive trade insights</li>
            <li>✔ Priority support</li>
          </ul>

          <button onClick={() => handleSelect("yearly")}>
            Go Pro
          </button>
        </div>

      </div>

      {/* TRUST SECTION */}
      <div className="trust">
        🔒 Secure payments • Verified suppliers • Global trade support
      </div>

      {/* STYLES */}
      <style jsx>{`
        .sub-container {
          min-height: 100vh;
          padding: 60px 20px;
          background: #f6f7fb;
          text-align: center;
          font-family: Arial;
        }

        .sub-header h1 {
          font-size: 34px;
          margin-bottom: 10px;
        }

        .sub-header p {
          color: #666;
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .plans {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .plan-card {
          background: white;
          border-radius: 16px;
          padding: 30px;
          width: 300px;
          text-align: left;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          transition: 0.3s;
          position: relative;
        }

        .plan-card:hover {
          transform: translateY(-6px);
        }

        .price {
          font-size: 28px;
          font-weight: bold;
          margin: 10px 0;
        }

        .price span {
          font-size: 14px;
          color: #777;
        }

        .duration {
          color: #999;
          font-size: 14px;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }

        ul li {
          margin-bottom: 10px;
        }

        button {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: none;
          background: black;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        button:hover {
          background: #333;
        }

        .premium {
          border: 2px solid black;
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .badge {
          position: absolute;
          top: -10px;
          right: 20px;
          background: black;
          color: white;
          font-size: 12px;
          padding: 4px 10px;
          border-radius: 20px;
        }

        .save {
          color: green;
          font-size: 14px;
        }

        .note {
          font-size: 12px;
          color: #777;
          text-align: center;
          margin-top: 8px;
        }

        .trust {
          margin-top: 40px;
          color: #777;
        }
      `}</style>
    </div>
  );
}