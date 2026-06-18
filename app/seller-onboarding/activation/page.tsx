"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ActivationPage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ActivationContent />
    </Suspense>
  );
}

function LoadingScreen() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#020617",
        color: "white",
      }}
    >
      <h1>HXN AI Activation Loading...</h1>
    </div>
  );
}

function ActivationContent() {
  const router = useRouter();
  const params = useSearchParams();

  const finalApprovalId = params.get("finalApprovalId") || "";
  const productStoreId = params.get("productStoreId") || "";

  const [step, setStep] = useState(0);

  const logs = [
    "Reading business profile...",
    "Reading legal verification...",
    "Reading product store...",
    "Reading compliance verification...",
    "Reading final approval...",
    "Generating seller dashboard...",
    "Generating supplier storefront...",
    "Creating marketplace profile...",
    "Activating RFQ assistant...",
    "Activating buyer discovery...",
    "Launching HXN Seller AI...",
    "Deployment completed.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev >= logs.length - 1) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 900);

    return () => clearInterval(timer);
  }, []);

  const completed = step >= logs.length - 1;

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#16213f 0%,#07111f 45%,#020617 100%)",
        color: "white",
        padding: "60px 20px",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h1 style={{ fontSize: 60, fontWeight: 900 }}>
          HXN AI ACTIVATION
        </h1>

        <div
          style={{
            marginTop: 30,
            padding: 30,
            borderRadius: 24,
            background: "rgba(255,255,255,.05)",
          }}
        >
          {logs.slice(0, step + 1).map((log, i) => (
            <p key={i}>✓ {log}</p>
          ))}
        </div>

        {completed && (
          <div
            style={{
              marginTop: 30,
              padding: 30,
              borderRadius: 24,
              background: "white",
              color: "#020617",
            }}
          >
            <h2>Congratulations</h2>

            <p>
              Your IMPEXVIAA seller workspace is now active.
            </p>

            <p>
              Final Approval ID: {finalApprovalId}
            </p>

            <button
              onClick={() => router.push("/dashboard")}
            >
              Open Dashboard
            </button>

            <button
              onClick={() =>
                router.push(
                  productStoreId
                    ? `/store/${productStoreId}`
                    : "/hxn-seller-ai"
                )
              }
            >
              View Store
            </button>
          </div>
        )}
      </div>
    </main>
  );
}