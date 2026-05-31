"use client";

import { useParams } from "next/navigation";

export default function StorePage() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "60px",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          fontWeight: 900,
        }}
      >
        IMPEXVIAA Store
      </h1>

      <p
        style={{
          fontSize: "24px",
          color: "#7dd3fc",
          marginTop: "20px",
        }}
      >
        Store URL:
      </p>

      <div
        style={{
          marginTop: "15px",
          padding: "20px",
          borderRadius: "20px",
          background: "#0f172a",
          border: "1px solid #38bdf8",
        }}
      >
        {slug}
      </div>
    </main>
  );
}