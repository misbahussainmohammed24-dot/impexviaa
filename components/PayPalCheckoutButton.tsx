"use client";

import { useState } from "react";

type Props = {
  amount: string;
  plan: string;
};

export default function PayPalCheckoutButton({ amount, plan }: Props) {
  const [loading, setLoading] = useState(false);

  const startPayment = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, plan }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("PAYPAL CREATE ORDER API ERROR:", data);
        alert(data.error || "PayPal checkout link not created");
        return;
      }

      const approveLink = data.approveUrl;

      if (!approveLink) {
        console.error("PAYPAL APPROVE LINK MISSING:", data);
        alert("PayPal checkout link not created");
        return;
      }

      window.location.href = approveLink;
    } catch (err) {
      console.error("PAYPAL REDIRECT ERROR:", err);
      alert("Payment failed to start");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={startPayment}
      disabled={loading}
      style={{
        width: "100%",
        border: "none",
        cursor: loading ? "not-allowed" : "pointer",
        borderRadius: 22,
        padding: "18px 22px",
        fontSize: 17,
        fontWeight: 950,
        color: "#020617",
        background:
          plan === "seller-yearly"
            ? "linear-gradient(135deg,#fde68a,#f59e0b)"
            : "linear-gradient(135deg,#ffffff,#dbeafe)",
        boxShadow:
          plan === "seller-yearly"
            ? "0 22px 70px rgba(245,158,11,.42)"
            : "0 22px 70px rgba(59,130,246,.38)",
        transition: ".35s ease",
        opacity: loading ? 0.75 : 1,
      }}
    >
      {loading
        ? "Opening Secure Checkout..."
        : plan === "seller-yearly"
        ? "Pay $5999 Securely with PayPal"
        : "Pay $524 Securely with PayPal"}
    </button>
  );
}