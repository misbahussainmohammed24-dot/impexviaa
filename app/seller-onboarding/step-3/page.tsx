"use client";

export default function Step3() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#1e293b,#020617 70%)",
        padding: "40px 20px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          background: "rgba(15,23,42,.92)",
          borderRadius: 30,
          padding: 35,
        }}
      >
        <h1
          style={{
            fontSize: 36,
            fontWeight: 900,
            color: "#facc15",
            marginBottom: 20,
          }}
        >
          Trade & Tax Verification
        </h1>

        <input placeholder="Tax ID" style={input} />
        <input placeholder="IEC Code" style={input} />
        <input placeholder="VAT Number" style={input} />

        <input type="file" style={input} />

        <button
          onClick={() =>
            (window.location.href =
              "/seller-onboarding/step-4")
          }
          style={button}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

const input = {
  width: "100%",
  padding: "18px",
  marginBottom: "20px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,.1)",
  background: "rgba(255,255,255,.05)",
  color: "white",
  fontSize: "16px",
};

const button = {
  width: "100%",
  padding: "18px",
  borderRadius: "18px",
  border: "none",
  background: "linear-gradient(135deg,#facc15,#f59e0b)",
  color: "#020617",
  fontWeight: 900,
  fontSize: "17px",
};