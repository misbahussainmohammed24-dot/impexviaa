export default function PaymentFailed() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#020617",
        color: "white",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: 24,
      }}
    >
      <div>
        <h1 style={{ fontSize: 58, marginBottom: 20 }}>
          Payment Failed ❌
        </h1>

        <p style={{ color: "#cbd5e1", fontSize: 18 }}>
          Your payment was cancelled or unsuccessful.
        </p>
      </div>
    </main>
  );
}