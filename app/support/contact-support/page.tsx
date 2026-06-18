"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

type SupportCategory = {
  title: string;
  description: string;
  items: string[];
};

const supportCategories: SupportCategory[] = [
  {
    title: "Account Support",
    description: "Help with login, account access, and profile management.",
    items: ["Login issues", "Password reset", "Account recovery", "Profile updates"],
  },
  {
    title: "Subscription & Billing",
    description: "Support for buyer plans, seller plans, receipts, and billing.",
    items: ["Buyer subscription", "Seller subscription", "Billing questions", "Payment receipts"],
  },
  {
    title: "Supplier Verification",
    description: "Assistance with documents, review status, and verification steps.",
    items: ["Verification status", "Missing documents", "Trust score questions", "Compliance requirements"],
  },
  {
    title: "Marketplace Support",
    description: "Help with product listings, RFQs, stores, and buyer inquiries.",
    items: ["Product listings", "Store management", "RFQ issues", "Buyer inquiries"],
  },
  {
    title: "Technical Support",
    description: "Report platform errors, mobile issues, dashboard problems, and bugs.",
    items: ["Website issues", "Loading problems", "Dashboard errors", "Mobile issues"],
  },
  {
    title: "Trust & Safety",
    description: "Report suspicious activity, fake documents, fraud, or policy violations.",
    items: ["Suspicious supplier", "Fraud concerns", "Fake documents", "Policy violations"],
  },
];

const contactEmails = [
  { label: "General Support", email: "support@impexviaa.com" },
  { label: "Verification Support", email: "verification@impexviaa.com" },
  { label: "Billing & Payments", email: "payments@impexviaa.com" },
  { label: "Business Support", email: "business@impexviaa.com" },
  { label: "Legal & Compliance", email: "legal@impexviaa.com" },
  { label: "Trust & Safety", email: "safety@impexviaa.com" },
];

const bankTrustItems = [
  "Clear customer support contact methods",
  "24/7 fraud and safety report submission",
  "Defined response timelines",
  "Billing and payment support contact",
  "Legal and compliance contact",
  "Support request form with issue categories",
  "Business operating hours displayed",
  "Customer complaint handling process",
];

export default function ContactSupportPage() {
  const [status, setStatus] = useState("");

  const submitSupport = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") || "");
    const company = String(form.get("company") || "");
    const email = String(form.get("email") || "");
    const country = String(form.get("country") || "");
    const category = String(form.get("category") || "");
    const subject = String(form.get("subject") || "IMPEXVIAA Support Request");
    const message = String(form.get("message") || "");

    const body = encodeURIComponent(
      `Full Name: ${name}\nCompany: ${company}\nEmail: ${email}\nCountry: ${country}\nIssue Category: ${category}\n\nMessage:\n${message}\n\nPlease attach screenshots, documents, payment receipt, or supporting files before sending.`
    );

    window.location.href = `mailto:support@impexviaa.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    setStatus("Your support request is prepared. Please send it from your email app.");
  };

  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.gridBg} />
      <div style={styles.glowCyan} />
      <div style={styles.glowGold} />

      <section style={styles.hero}>
        <div style={styles.badge}>IMPEXVIAA SUPPORT CENTER · 24/7 CUSTOMER SUPPORT</div>

        <h1 style={styles.title}>Contact IMPEXVIAA Support</h1>

        <p style={styles.subtitle}>
          Get assistance with accounts, supplier verification, buyer subscriptions,
          seller subscriptions, payments, sourcing, marketplace services, technical issues,
          fraud reports, and platform compliance.
        </p>

        <div style={styles.heroStats}>
          <Stat value="24/7" label="Issue submission" />
          <Stat value="24h" label="General response" />
          <Stat value="1–3d" label="Verification review" />
          <Stat value="Priority" label="Fraud reports" />
        </div>
      </section>

      <section style={styles.categoryGrid}>
        {supportCategories.map((category) => (
          <div key={category.title} className="premium-card" style={styles.categoryCard}>
            <h3 style={styles.cardTitle}>{category.title}</h3>
            <p style={styles.cardDesc}>{category.description}</p>

            <div style={styles.itemList}>
              {category.items.map((item) => (
                <span key={item} style={styles.item}>
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="support-split" style={styles.split}>
        <div style={styles.panel}>
          <p style={styles.kicker}>OFFICIAL CONTACT METHODS</p>
          <h2 style={styles.sectionTitle}>Support emails</h2>

          <p style={styles.panelText}>
            Use the correct department email so your request reaches the right team faster.
          </p>

          {contactEmails.map((item) => (
            <a
              key={item.email}
              className="email-row"
              href={`mailto:${item.email}`}
              style={styles.emailRow}
            >
              <strong>{item.label}</strong>
              <span>{item.email}</span>
            </a>
          ))}
        </div>

        <div style={styles.panel}>
          <p style={styles.kicker}>SUPPORT AVAILABILITY</p>
          <h2 style={styles.sectionTitle}>Hours & response times</h2>

          <div style={styles.infoBox}>
            <strong>Business Hours</strong>
            <span>Monday – Friday · 09:00 – 18:00 UTC</span>
          </div>

          <div style={styles.infoBox}>
            <strong>24/7 Customer Support</strong>
            <span>Emergency reports, fraud concerns, and platform safety issues can be submitted anytime.</span>
          </div>

          <div className="response-row" style={styles.responseRow}>
            <strong>General Support</strong>
            <span>Within 24 hours</span>
          </div>

          <div className="response-row" style={styles.responseRow}>
            <strong>Technical Issues</strong>
            <span>Within 24 hours</span>
          </div>

          <div className="response-row" style={styles.responseRow}>
            <strong>Supplier Verification</strong>
            <span>1–3 business days</span>
          </div>

          <div className="response-row" style={styles.responseRow}>
            <strong>Fraud / Safety Reports</strong>
            <span>Priority review</span>
          </div>
        </div>
      </section>

      <section className="support-form-section" style={styles.formSection}>
        <div>
          <p style={styles.kicker}>SUBMIT A REQUEST</p>
          <h2 style={styles.sectionTitle}>Tell us how we can help</h2>

          <p style={styles.formText}>
            This form prepares an email request with your details. Before sending,
            attach screenshots, payment receipts, verification documents, or any supporting
            files. This helps IMPEXVIAA support review your request faster.
          </p>

          <div style={styles.complianceBox}>
            <strong>For payment or billing issues, include:</strong>
            <span>Transaction date, plan name, payment email, invoice/receipt screenshot, and account email.</span>
          </div>

          <div style={styles.complianceBox}>
            <strong>For supplier or fraud reports, include:</strong>
            <span>Supplier name, product name, screenshots, messages, document concerns, and reason for report.</span>
          </div>
        </div>

        <form onSubmit={submitSupport} style={styles.form}>
          <input name="name" required placeholder="Full Name *" style={styles.input} />
          <input name="company" placeholder="Company Name" style={styles.input} />
          <input name="email" required type="email" placeholder="Email Address *" style={styles.input} />
          <input name="country" placeholder="Country" style={styles.input} />

          <select name="category" required style={styles.input}>
            <option value="">Select Issue Category *</option>
            <option>Account Support</option>
            <option>Subscription Support</option>
            <option>Billing / Payment Support</option>
            <option>Supplier Verification</option>
            <option>Marketplace Support</option>
            <option>Technical Support</option>
            <option>Fraud / Report Supplier</option>
            <option>Legal / Compliance</option>
          </select>

          <input name="subject" required placeholder="Subject *" style={styles.input} />

          <textarea
            name="message"
            required
            placeholder="Explain your issue clearly. Include product name, supplier name, payment details, account email, or screenshots if relevant..."
            style={styles.textarea}
          />

          <div style={styles.fileNote}>
            Attach supporting files after your email app opens.
          </div>

          <button type="submit" style={styles.submitButton}>
            Submit Support Request
          </button>

          {status && <p style={styles.status}>{status}</p>}
        </form>
      </section>

      <section style={styles.bankSection}>
        <div>
          <p style={styles.kicker}>TRUST & PAYMENT PROVIDER READINESS</p>
          <h2 style={styles.bankTitle}>Support details required for a reliable platform</h2>
        </div>

        <div style={styles.bankGrid}>
          {bankTrustItems.map((item) => (
            <div key={item} className="bank-item" style={styles.bankItem}>
              <span style={styles.check}>✓</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.trust}>
        <h2 style={styles.trustTitle}>Support built for global trade.</h2>
        <p style={styles.trustText}>
          IMPEXVIAA is committed to providing professional support for buyers, suppliers,
          exporters, importers, sourcing teams, and businesses using the platform for
          international trade discovery and verification.
        </p>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={styles.statCard}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

const css = `
html, body {
  background: #020617 !important;
}

.premium-card,
.bank-item {
  transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
}

.premium-card:hover,
.bank-item:hover {
  transform: translateY(-7px);
  border-color: rgba(34,211,238,.45) !important;
  box-shadow: 0 30px 110px rgba(0,0,0,.5) !important;
}

button {
  transition: transform .25s ease, box-shadow .25s ease;
}

button:hover {
  transform: translateY(-3px);
}

input::placeholder,
textarea::placeholder {
  color: rgba(203,213,225,.68);
}

select option {
  color: #020617;
  background: #ffffff;
}

@media(max-width: 900px) {
  .support-form-section {
    grid-template-columns: 1fr !important;
  }
}

@media(max-width: 760px) {
  main {
    padding: 38px 14px 90px !important;
  }

  .support-split {
    grid-template-columns: 1fr !important;
  }

  .support-form-section {
    grid-template-columns: 1fr !important;
    padding: 22px !important;
    border-radius: 28px !important;
  }

  .email-row,
  .response-row {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 7px !important;
  }

  input,
  select,
  textarea {
    width: 100% !important;
    box-sizing: border-box !important;
  }

  h1 {
    font-size: 42px !important;
    line-height: 1.03 !important;
    letter-spacing: -2px !important;
  }

  h2 {
    font-size: 32px !important;
    line-height: 1.05 !important;
  }
}
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top,#07111f 0%,#020617 42%,#000000 100%)",
    color: "#fff",
    padding: "72px 20px 120px",
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
    position: "relative",
    overflowX: "hidden",
  },

  gridBg: {
    position: "absolute",
    inset: 0,
    opacity: 0.07,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
    backgroundSize: "80px 80px",
  },

  glowCyan: {
    position: "absolute",
    top: -220,
    right: -140,
    width: 620,
    height: 620,
    borderRadius: "50%",
    background: "rgba(34,211,238,.16)",
    filter: "blur(140px)",
  },

  glowGold: {
    position: "absolute",
    bottom: 180,
    left: -200,
    width: 620,
    height: 620,
    borderRadius: "50%",
    background: "rgba(214,181,109,.13)",
    filter: "blur(140px)",
  },

  hero: {
    maxWidth: 1120,
    margin: "0 auto 58px",
    position: "relative",
    zIndex: 2,
    textAlign: "center",
  },

  badge: {
    display: "inline-flex",
    padding: "13px 24px",
    borderRadius: 999,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(214,181,109,.25)",
    color: "#d6b56d",
    fontSize: 12,
    fontWeight: 950,
    letterSpacing: 4,
    marginBottom: 26,
  },

  title: {
    margin: 0,
    fontSize: "clamp(48px,8vw,96px)",
    lineHeight: 0.96,
    letterSpacing: "-4px",
    fontWeight: 950,
  },

  subtitle: {
    maxWidth: 920,
    margin: "28px auto 0",
    color: "#cbd5e1",
    fontSize: "clamp(18px,3vw,24px)",
    lineHeight: 1.65,
    fontWeight: 650,
  },

  heroStats: {
    maxWidth: 900,
    margin: "34px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(145px,1fr))",
    gap: 14,
  },

  statCard: {
    minHeight: 94,
    borderRadius: 24,
    background:
      "linear-gradient(145deg,rgba(255,255,255,.085),rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.11)",
    display: "grid",
    placeItems: "center",
    padding: 12,
    backdropFilter: "blur(20px)",
  },

  categoryGrid: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: 18,
    position: "relative",
    zIndex: 2,
  },

  categoryCard: {
    padding: 28,
    borderRadius: 32,
    background:
      "linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.11)",
    backdropFilter: "blur(22px)",
    boxShadow: "0 25px 90px rgba(0,0,0,.28)",
  },

  cardTitle: {
    margin: "0 0 12px",
    fontSize: 24,
    fontWeight: 950,
  },

  cardDesc: {
    color: "#cbd5e1",
    lineHeight: 1.65,
    marginBottom: 18,
  },

  itemList: {
    display: "grid",
    gap: 8,
  },

  item: {
    color: "#dbeafe",
    fontWeight: 700,
  },

  split: {
    maxWidth: 1180,
    margin: "58px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
    gap: 22,
    position: "relative",
    zIndex: 2,
  },

  panel: {
    padding: 34,
    borderRadius: 36,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.12)",
    backdropFilter: "blur(24px)",
  },

  kicker: {
    margin: 0,
    color: "#d6b56d",
    fontWeight: 950,
    letterSpacing: 3,
    fontSize: 12,
  },

  sectionTitle: {
    margin: "12px 0 22px",
    fontSize: "clamp(32px,5vw,54px)",
    lineHeight: 1,
    letterSpacing: "-2px",
    fontWeight: 950,
  },

  panelText: {
    color: "#cbd5e1",
    lineHeight: 1.7,
    marginBottom: 16,
  },

  emailRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    padding: "18px 0",
    borderBottom: "1px solid rgba(255,255,255,.10)",
    color: "#dbeafe",
    textDecoration: "none",
  },

  infoBox: {
    display: "grid",
    gap: 6,
    padding: 20,
    borderRadius: 22,
    background: "rgba(255,255,255,.07)",
    border: "1px solid rgba(255,255,255,.10)",
    marginBottom: 14,
    color: "#dbeafe",
  },

  responseRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    padding: "16px 0",
    borderBottom: "1px solid rgba(255,255,255,.10)",
    color: "#dbeafe",
  },

  formSection: {
    maxWidth: 1180,
    margin: "58px auto 0",
    padding: 36,
    borderRadius: 42,
    background:
      "linear-gradient(145deg,rgba(15,23,42,.84),rgba(2,6,23,.78))",
    border: "1px solid rgba(125,211,252,.20)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: 32,
    position: "relative",
    zIndex: 2,
    boxShadow: "0 35px 120px rgba(0,0,0,.45)",
  },

  formText: {
    color: "#cbd5e1",
    lineHeight: 1.8,
    fontWeight: 650,
  },

  complianceBox: {
    marginTop: 16,
    display: "grid",
    gap: 8,
    padding: 18,
    borderRadius: 20,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.10)",
    color: "#dbeafe",
    lineHeight: 1.55,
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
    color: "#fff",
    padding: "0 18px",
    outline: "none",
    fontSize: 15,
  },

  textarea: {
    minHeight: 160,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,.13)",
    background: "rgba(255,255,255,.075)",
    color: "#fff",
    padding: 18,
    outline: "none",
    fontSize: 15,
    resize: "vertical",
  },

  fileNote: {
    color: "#93c5fd",
    fontWeight: 700,
    fontSize: 14,
  },

  submitButton: {
    minHeight: 64,
    borderRadius: 999,
    border: "none",
    background: "linear-gradient(135deg,#d6b56d,#22d3ee)",
    color: "#020617",
    fontWeight: 950,
    fontSize: 16,
    cursor: "pointer",
    boxShadow: "0 20px 70px rgba(34,211,238,.22)",
  },

  status: {
    color: "#bbf7d0",
    fontWeight: 800,
  },

  bankSection: {
    maxWidth: 1180,
    margin: "58px auto 0",
    padding: 36,
    borderRadius: 40,
    background:
      "linear-gradient(135deg,rgba(214,181,109,.10),rgba(34,211,238,.08))",
    border: "1px solid rgba(214,181,109,.22)",
    position: "relative",
    zIndex: 2,
    backdropFilter: "blur(22px)",
  },

  bankTitle: {
    margin: "12px 0 26px",
    fontSize: "clamp(34px,5vw,58px)",
    lineHeight: 1,
    letterSpacing: "-2px",
    fontWeight: 950,
  },

  bankGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: 14,
  },

  bankItem: {
    minHeight: 86,
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "18px 20px",
    borderRadius: 24,
    background: "rgba(255,255,255,.07)",
    border: "1px solid rgba(255,255,255,.11)",
    color: "#e5e7eb",
  },

  check: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg,#22d3ee,#d6b56d)",
    color: "#020617",
    fontWeight: 950,
    flexShrink: 0,
  },

  trust: {
    maxWidth: 1180,
    margin: "58px auto 0",
    padding: 42,
    borderRadius: 40,
    background:
      "linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.03))",
    border: "1px solid rgba(255,255,255,.12)",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
    backdropFilter: "blur(22px)",
  },

  trustTitle: {
    margin: 0,
    fontSize: "clamp(36px,6vw,64px)",
    lineHeight: 1,
    letterSpacing: "-2px",
    fontWeight: 950,
  },

  trustText: {
    maxWidth: 850,
    margin: "18px auto 0",
    color: "#dbeafe",
    lineHeight: 1.8,
    fontWeight: 650,
    fontSize: 18,
  },
};