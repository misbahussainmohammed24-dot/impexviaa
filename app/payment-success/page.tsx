"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <PaymentSuccessContent />
    </Suspense>
  );
}

function PaymentSuccessContent() {
  const params = useSearchParams();
  const orderId = params.get("token");

  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [message, setMessage] = useState("Verifying your secure payment...");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        if (!orderId) {
          setMessage("Invalid payment session. Payment reference is missing.");
          setLoading(false);
          return;
        }

        const res = await fetch("/api/paypal/capture-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderID: orderId,
            orderId: orderId,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          console.error("PAYPAL CAPTURE ERROR:", data);
          setMessage(
            data?.error ||
              "Payment verification failed. Please contact IMPEXVIAA support."
          );
          setLoading(false);
          return;
        }

        const paymentStatus =
          data?.status ||
          data?.details?.status ||
          data?.captureStatus ||
          "";

        if (
          paymentStatus === "COMPLETED" ||
          paymentStatus === "APPROVED" ||
          data?.success === true
        ) {
          localStorage.setItem("paymentVerified", "true");
          localStorage.setItem("paypalOrderId", orderId);
          localStorage.setItem("paymentProvider", "paypal");
          localStorage.setItem("paymentVerifiedAt", new Date().toISOString());

          setVerified(true);
          setMessage(
            "Payment verified successfully. You can now create your secure supplier account."
          );
          setLoading(false);
          return;
        }

        setMessage(
          "Payment was not completed. Please retry the payment or contact support."
        );
        setLoading(false);
      } catch (err) {
        console.error("PAYMENT VERIFY ERROR:", err);
        setMessage("Unable to verify payment. Please try again.");
        setLoading(false);
      }
    };

    verifyPayment();
  }, [orderId]);

  const continueToAccount = () => {
    if (!verified) return;
    window.location.href = "/create-account";
  };

  return (
    <main style={styles.page}>
      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />

      <section style={styles.card}>
        <div style={styles.badge}>
          {verified ? "PAYMENT VERIFIED" : "SECURE PAYMENT CHECK"}
        </div>

        <h1 style={styles.title}>
          {verified ? "Payment Successful" : "Verifying Payment"}
        </h1>

        <p style={styles.subtitle}>{message}</p>

        {loading && (
          <div style={styles.loaderBox}>
            <div style={styles.loader} />
            <span>Checking PayPal transaction security...</span>
          </div>
        )}

        {!loading && verified && (
          <button style={styles.button} onClick={continueToAccount}>
            Create Supplier Account
          </button>
        )}

        {!loading && !verified && (
          <button
            style={styles.failButton}
            onClick={() => (window.location.href = "/subscription/seller")}
          >
            Return to Seller Plans
          </button>
        )}

        <p style={styles.note}>
          IMPEXVIAA verifies every supplier payment before account creation.
        </p>
      </section>
    </main>
  );
}

function LoadingScreen() {
  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <h1 style={styles.title}>Loading Secure Payment...</h1>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    display: "grid",
    placeItems: "center",
    background:
      "radial-gradient(circle at top,#1f2937 0%,#020617 45%,#000 100%)",
    color: "#fff",
    padding: 24,
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
  },

  glowOne: {
    position: "absolute",
    top: -100,
    left: -100,
    width: 360,
    height: 360,
    borderRadius: "50%",
    background: "rgba(250,204,21,.22)",
    filter: "blur(100px)",
  },

  glowTwo: {
    position: "absolute",
    bottom: -100,
    right: -100,
    width: 380,
    height: 380,
    borderRadius: "50%",
    background: "rgba(59,130,246,.16)",
    filter: "blur(100px)",
  },

  card: {
    width: "100%",
    maxWidth: 760,
    position: "relative",
    zIndex: 2,
    borderRadius: 38,
    padding: "42px",
    background:
      "linear-gradient(135deg,rgba(255,255,255,.10),rgba(255,255,255,.035))",
    border: "1px solid rgba(250,204,21,.24)",
    boxShadow: "0 45px 140px rgba(0,0,0,.62)",
    backdropFilter: "blur(24px)",
    textAlign: "center",
  },

  badge: {
    display: "inline-flex",
    padding: "10px 22px",
    borderRadius: 999,
    background: "rgba(250,204,21,.13)",
    border: "1px solid rgba(250,204,21,.35)",
    color: "#fde68a",
    letterSpacing: 3,
    fontSize: 12,
    fontWeight: 900,
    marginBottom: 26,
  },

  title: {
    fontSize: "clamp(42px,9vw,72px)",
    lineHeight: 0.95,
    margin: 0,
    fontWeight: 950,
    letterSpacing: "-3px",
  },

  subtitle: {
    margin: "28px auto 0",
    maxWidth: 620,
    color: "#d1d5db",
    fontSize: 18,
    lineHeight: 1.8,
  },

  loaderBox: {
    marginTop: 32,
    display: "grid",
    gap: 16,
    justifyItems: "center",
    color: "#cbd5e1",
  },

  loader: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    border: "4px solid rgba(255,255,255,.18)",
    borderTopColor: "#facc15",
  },

  button: {
    width: "100%",
    marginTop: 34,
    border: "none",
    borderRadius: 24,
    padding: "20px 24px",
    background: "linear-gradient(135deg,#fde68a,#facc15,#f59e0b)",
    color: "#020617",
    fontSize: 18,
    fontWeight: 950,
    cursor: "pointer",
    boxShadow: "0 25px 90px rgba(250,204,21,.35)",
  },

  failButton: {
    width: "100%",
    marginTop: 34,
    border: "1px solid rgba(255,255,255,.18)",
    borderRadius: 24,
    padding: "20px 24px",
    background: "rgba(255,255,255,.08)",
    color: "#fff",
    fontSize: 18,
    fontWeight: 900,
    cursor: "pointer",
  },

  note: {
    marginTop: 24,
    color: "#94a3b8",
    fontSize: 14,
  },
};