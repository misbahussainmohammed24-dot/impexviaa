"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";

const reportReasons = [
  "Fake or misleading documents",
  "Suspicious supplier activity",
  "False company identity",
  "Misleading product claims",
  "Unsafe payment request",
  "Stolen product images",
  "Policy violation",
  "Fraud concern",
];

const reviewSteps = [
  "Report received by IMPEXVIAA Trust & Safety",
  "Evidence and supplier details are reviewed",
  "Supplier profile, documents, and listings may be checked",
  "Additional information may be requested if required",
  "Action may be taken based on risk and evidence",
];

export default function ReportSupplierPage() {
  const [status, setStatus] = useState("");

  const submitReport = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const supplier = String(form.get("supplier") || "");
    const product = String(form.get("product") || "");
    const reason = String(form.get("reason") || "");
    const message = String(form.get("message") || "");

    const body = encodeURIComponent(
      `Reporter Name: ${name}
Reporter Email: ${email}
Supplier Name: ${supplier}
Product / Listing: ${product}
Report Reason: ${reason}

Report Details:
${message}

Please attach screenshots, documents, chat records, payment proof, or any supporting evidence before sending.`
    );

    window.location.href = `mailto:safety@impexviaa.com?subject=${encodeURIComponent(
      "IMPEXVIAA Supplier Report"
    )}&body=${body}`;

    setStatus("Your supplier report is prepared. Please send it from your email app.");
  };

  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.gridBg} />
      <div style={styles.redGlow} />
      <div style={styles.goldGlow} />

      <section style={styles.hero}>
        <div style={styles.badge}>IMPEXVIAA TRUST & SAFETY</div>

        <h1 style={styles.title}>Report a supplier</h1>

        <p style={styles.subtitle}>
          Use this page to report suspicious suppliers, fake documents, misleading
          product claims, unsafe payment requests, fraud concerns, or marketplace
          policy violations.
        </p>

        <div style={styles.alertBox}>
          <strong>24/7 safety submission available</strong>
          <span>
            Reports involving fraud, fake documents, suspicious payments, or platform
            misuse are reviewed with priority by IMPEXVIAA Trust & Safety.
          </span>
        </div>
      </section>

      <section style={styles.reasonSection}>
        <div style={styles.sectionHeader}>
          <p style={styles.kicker}>WHAT CAN BE REPORTED</p>
          <h2 style={styles.sectionTitle}>Supplier safety concerns</h2>
        </div>

        <div style={styles.reasonGrid}>
          {reportReasons.map((reason) => (
            <div key={reason} className="report-card" style={styles.reasonCard}>
              <span style={styles.check}>!</span>
              <strong>{reason}</strong>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.formSection}>
        <div>
          <p style={styles.kicker}>SUBMIT A REPORT</p>
          <h2 style={styles.sectionTitle}>Provide report details</h2>

          <p style={styles.text}>
            Please provide clear and truthful information. Strong evidence helps
            IMPEXVIAA review reports faster. Include supplier name, product name,
            screenshots, messages, document concerns, payment requests, and any
            relevant communication.
          </p>

          <div style={styles.noticeBox}>
            <strong>Important:</strong>
            <span>
              False reports, competitor harassment, or intentionally misleading
              complaints may violate IMPEXVIAA platform policies.
            </span>
          </div>
        </div>

        <form onSubmit={submitReport} style={styles.form}>
          <input name="name" required placeholder="Your full name *" style={styles.input} />
          <input name="email" required type="email" placeholder="Your email address *" style={styles.input} />
          <input name="supplier" required placeholder="Supplier / company name *" style={styles.input} />
          <input name="product" placeholder="Product name or listing link" style={styles.input} />

          <select name="reason" required style={styles.input}>
            <option value="">Select report reason *</option>
            {reportReasons.map((reason) => (
              <option key={reason}>{reason}</option>
            ))}
          </select>

          <textarea
            name="message"
            required
            placeholder="Explain the issue clearly. Include what happened, when it happened, supplier name, product name, payment request details, document concerns, and any evidence you have."
            style={styles.textarea}
          />

          <div style={styles.fileNote}>
            Attach screenshots, documents, messages, or payment proof after your email app opens.
          </div>

          <button type="submit" style={styles.submitButton}>
            Submit Supplier Report
          </button>

          {status && <p style={styles.status}>{status}</p>}
        </form>
      </section>

      <section style={styles.processSection}>
        <div>
          <p style={styles.kicker}>REVIEW PROCESS</p>
          <h2 style={styles.sectionTitle}>What happens after you report?</h2>
        </div>

        <div style={styles.stepGrid}>
          {reviewSteps.map((step, index) => (
            <div key={step} className="report-card" style={styles.stepCard}>
              <span style={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.policySection}>
        <p style={styles.kicker}>PLATFORM SAFETY POLICY</p>
        <h2 style={styles.policyTitle}>IMPEXVIAA takes supplier integrity seriously.</h2>

        <p style={styles.text}>
          IMPEXVIAA may review supplier profiles, product listings, submitted
          documents, account history, communication evidence, and marketplace activity.
          Based on the available information, IMPEXVIAA may request clarification,
          restrict visibility, suspend access, remove listings, or take other action
          according to platform policies.
        </p>

        <p style={styles.text}>
          IMPEXVIAA is a marketplace and support platform. Users should conduct
          independent due diligence before entering into commercial agreements,
          sending payments, or relying on supplier claims. Reports help improve
          marketplace trust, but they do not replace legal, financial, or trade advice.
        </p>

        <div style={styles.buttons}>
          <Link href="/support/contact-support" style={styles.secondaryButton}>
            Contact Support
          </Link>

          <Link href="/support/help-center/report-supplier" style={styles.primaryButton}>
            Read Report Guide
          </Link>
        </div>
      </section>
    </main>
  );
}

const css = `
html, body {
  background:#000000 !important;
}

@keyframes pulseRed {
  0%,100% { box-shadow:0 0 0 rgba(248,113,113,0); }
  50% { box-shadow:0 0 90px rgba(248,113,113,.15); }
}

.report-card {
  transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
}

.report-card:hover {
  transform: translateY(-6px);
  border-color: rgba(248,113,113,.42) !important;
  box-shadow: 0 30px 100px rgba(0,0,0,.55) !important;
}

button, a {
  transition: transform .25s ease;
}

button:hover, a:hover {
  transform: translateY(-3px);
}

input::placeholder,
textarea::placeholder {
  color: rgba(203,213,225,.65);
}

select option {
  color:#020617;
  background:#ffffff;
}

@media(max-width:760px){
  main {
    padding:42px 16px 90px !important;
  }

  h1 {
    font-size:46px !important;
    line-height:1.02 !important;
    letter-spacing:-2px !important;
  }

  h2 {
    font-size:34px !important;
    line-height:1.05 !important;
  }

  input, select, textarea {
    width:100% !important;
    box-sizing:border-box !important;
  }
}
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top,#111827 0%,#030712 42%,#000000 100%)",
    color: "#ffffff",
    padding: "72px 20px 120px",
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
    position: "relative",
    overflowX: "hidden",
  },

  gridBg: {
    position: "absolute",
    inset: 0,
    opacity: 0.06,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
    backgroundSize: "80px 80px",
  },

  redGlow: {
    position: "absolute",
    top: -240,
    right: -150,
    width: 650,
    height: 650,
    borderRadius: "50%",
    background: "rgba(248,113,113,.14)",
    filter: "blur(145px)",
  },

  goldGlow: {
    position: "absolute",
    bottom: 200,
    left: -220,
    width: 650,
    height: 650,
    borderRadius: "50%",
    background: "rgba(214,181,109,.12)",
    filter: "blur(145px)",
  },

  hero: {
    maxWidth: 1120,
    margin: "0 auto 58px",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },

  badge: {
    display: "inline-flex",
    padding: "13px 24px",
    borderRadius: 999,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(248,113,113,.28)",
    color: "#fca5a5",
    fontSize: 12,
    fontWeight: 950,
    letterSpacing: 4,
    marginBottom: 26,
  },

  title: {
    margin: 0,
    fontSize: "clamp(52px,8vw,96px)",
    lineHeight: 0.96,
    letterSpacing: "-4px",
    fontWeight: 950,
  },

  subtitle: {
    maxWidth: 900,
    margin: "28px auto 0",
    color: "#cbd5e1",
    fontSize: "clamp(18px,3vw,24px)",
    lineHeight: 1.65,
    fontWeight: 650,
  },

  alertBox: {
    maxWidth: 820,
    margin: "34px auto 0",
    padding: 24,
    borderRadius: 28,
    background: "rgba(127,29,29,.28)",
    border: "1px solid rgba(248,113,113,.28)",
    color: "#fee2e2",
    display: "grid",
    gap: 8,
    animation: "pulseRed 4s ease-in-out infinite",
  },

  reasonSection: {
    maxWidth: 1180,
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },

  sectionHeader: {
    marginBottom: 24,
  },

  kicker: {
    margin: 0,
    color: "#d6b56d",
    fontWeight: 950,
    letterSpacing: 3,
    fontSize: 12,
  },

  sectionTitle: {
    margin: "12px 0 0",
    fontSize: "clamp(34px,5vw,58px)",
    lineHeight: 1,
    letterSpacing: "-2px",
    fontWeight: 950,
  },

  reasonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: 16,
  },

  reasonCard: {
    minHeight: 88,
    padding: "20px 22px",
    borderRadius: 24,
    background: "rgba(255,255,255,.065)",
    border: "1px solid rgba(255,255,255,.11)",
    display: "flex",
    alignItems: "center",
    gap: 12,
    backdropFilter: "blur(22px)",
  },

  check: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg,#f87171,#d6b56d)",
    color: "#020617",
    fontWeight: 950,
    flexShrink: 0,
  },

  formSection: {
    maxWidth: 1180,
    margin: "58px auto 0",
    padding: 36,
    borderRadius: 40,
    background:
      "linear-gradient(145deg,rgba(15,23,42,.84),rgba(2,6,23,.78))",
    border: "1px solid rgba(248,113,113,.20)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: 32,
    position: "relative",
    zIndex: 2,
    backdropFilter: "blur(22px)",
    boxShadow: "0 35px 120px rgba(0,0,0,.45)",
  },

  text: {
    color: "#dbeafe",
    lineHeight: 1.85,
    fontWeight: 600,
    fontSize: 17,
  },

  noticeBox: {
    marginTop: 18,
    padding: 20,
    borderRadius: 22,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.11)",
    color: "#fee2e2",
    display: "grid",
    gap: 8,
    lineHeight: 1.6,
  },

  form: {
    display: "grid",
    gap: 14,
  },

  input: {
    minHeight: 58,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,.13)",
    background: "rgba(255,255,255,.075)",
    color: "#ffffff",
    padding: "0 18px",
    outline: "none",
    fontSize: 15,
  },

  textarea: {
    minHeight: 170,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,.13)",
    background: "rgba(255,255,255,.075)",
    color: "#ffffff",
    padding: 18,
    outline: "none",
    fontSize: 15,
    resize: "vertical",
  },

  fileNote: {
    color: "#fca5a5",
    fontWeight: 750,
    fontSize: 14,
  },

  submitButton: {
    minHeight: 64,
    borderRadius: 999,
    border: "none",
    background: "linear-gradient(135deg,#f87171,#d6b56d)",
    color: "#020617",
    fontWeight: 950,
    fontSize: 16,
    cursor: "pointer",
  },

  status: {
    color: "#bbf7d0",
    fontWeight: 800,
  },

  processSection: {
    maxWidth: 1180,
    margin: "58px auto 0",
    position: "relative",
    zIndex: 2,
  },

  stepGrid: {
    marginTop: 24,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 16,
  },

  stepCard: {
    padding: 24,
    borderRadius: 28,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.11)",
    backdropFilter: "blur(22px)",
  },

  stepNumber: {
    color: "#fca5a5",
    fontWeight: 950,
    letterSpacing: 3,
  },

  policySection: {
    maxWidth: 1180,
    margin: "58px auto 0",
    padding: 38,
    borderRadius: 40,
    background:
      "linear-gradient(135deg,rgba(214,181,109,.10),rgba(248,113,113,.08))",
    border: "1px solid rgba(214,181,109,.22)",
    position: "relative",
    zIndex: 2,
    backdropFilter: "blur(22px)",
  },

  policyTitle: {
    margin: "12px 0 18px",
    fontSize: "clamp(34px,5vw,58px)",
    lineHeight: 1,
    letterSpacing: "-2px",
    fontWeight: 950,
  },

  buttons: {
    marginTop: 26,
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
  },

  primaryButton: {
    minHeight: 58,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 24px",
    borderRadius: 999,
    background: "linear-gradient(135deg,#f87171,#d6b56d)",
    color: "#020617",
    fontWeight: 950,
    textDecoration: "none",
  },

  secondaryButton: {
    minHeight: 58,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 24px",
    borderRadius: 999,
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(255,255,255,.14)",
    color: "#ffffff",
    fontWeight: 950,
    textDecoration: "none",
  },
};