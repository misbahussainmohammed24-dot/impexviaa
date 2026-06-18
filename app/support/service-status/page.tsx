"use client";

import type { CSSProperties } from "react";
import Link from "next/link";

const coreServices = [
  ["Website Access", "Operational"],
  ["User Authentication", "Operational"],
  ["Buyer Dashboard", "Operational"],
  ["Seller Dashboard", "Operational"],
  ["Supplier Verification", "Operational"],
  ["Product Listings", "Operational"],
  ["RFQ System", "Operational"],
  ["HXN AI Services", "Operational"],
  ["Support System", "Operational"],
];

const paymentServices = [
  ["Subscription Payments", "Operational"],
  ["Billing Services", "Operational"],
  ["Invoice Support", "Operational"],
  ["Payment Verification", "Operational"],
];

export default function ServiceStatusPage() {
  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.gridBg} />
      <div style={styles.glowBlue} />
      <div style={styles.glowGold} />

      <section style={styles.hero}>
        <div style={styles.badge}>IMPEXVIAA SERVICE STATUS</div>

        <h1 style={styles.title}>All systems operational.</h1>

        <p style={styles.subtitle}>
          View the current status of IMPEXVIAA platform services, support systems,
          verification tools, marketplace access, and payment-related services.
        </p>

        <div style={styles.statusPill}>
          <span style={styles.statusDot} />
          Platform Status: Operational
        </div>

        <p style={styles.updated}>Last updated: June 2026</p>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <p style={styles.kicker}>CORE PLATFORM SERVICES</p>
          <h2 style={styles.sectionTitle}>Marketplace operations</h2>
        </div>

        <div style={styles.grid}>
          {coreServices.map(([name, status]) => (
            <StatusCard key={name} name={name} status={status} />
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <p style={styles.kicker}>PAYMENT SERVICES</p>
          <h2 style={styles.sectionTitle}>Billing and subscription systems</h2>
        </div>

        <div style={styles.grid}>
          {paymentServices.map(([name, status]) => (
            <StatusCard key={name} name={name} status={status} />
          ))}
        </div>
      </section>

      <section style={styles.infoGrid}>
        <div style={styles.infoCard}>
          <p style={styles.kicker}>SCHEDULED MAINTENANCE</p>
          <h2 style={styles.infoTitle}>No scheduled maintenance</h2>
          <p style={styles.infoText}>
            There is no scheduled maintenance at this time. Any planned maintenance
            will be announced in advance through platform communication channels.
          </p>
        </div>

        <div style={styles.infoCard}>
          <p style={styles.kicker}>INCIDENT HISTORY</p>
          <h2 style={styles.infoTitle}>No major incidents</h2>
          <p style={styles.infoText}>
            No major incidents have been reported in the last 30 days. If you are
            experiencing an issue, please contact support for review.
          </p>
        </div>
      </section>

      <section style={styles.supportBox}>
        <p style={styles.kicker}>SUPPORT DURING OUTAGES</p>
        <h2 style={styles.supportTitle}>Experiencing an issue?</h2>

        <p style={styles.infoText}>
          If you notice a platform issue that is not listed on this page, contact
          IMPEXVIAA Support with your account email, screenshots, affected page,
          device details, and a short description of the issue.
        </p>

        <div style={styles.supportDetails}>
          <div>
            <strong>Email</strong>
            <span>support@impexviaa.com</span>
          </div>
          <div>
            <strong>Response Time</strong>
            <span>Within 24 hours</span>
          </div>
          <div>
            <strong>Security Reports</strong>
            <span>Priority review</span>
          </div>
        </div>

        <Link href="/support/contact-support" style={styles.button}>
          Contact Support
        </Link>
      </section>
    </main>
  );
}

function StatusCard({ name, status }: { name: string; status: string }) {
  return (
    <div className="status-card" style={styles.statusCard}>
      <div>
        <h3 style={styles.cardTitle}>{name}</h3>
        <p style={styles.cardText}>{status}</p>
      </div>

      <span style={styles.operational}>
        <span style={styles.smallDot} />
        Operational
      </span>
    </div>
  );
}

const css = `
html, body {
  background: #030712 !important;
}

@keyframes pulse {
  0%,100% { opacity:.55; transform:scale(1); }
  50% { opacity:1; transform:scale(1.12); }
}

.status-card {
  transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
}

.status-card:hover {
  transform: translateY(-6px);
  border-color: rgba(96,165,250,.45) !important;
  box-shadow: 0 30px 90px rgba(0,0,0,.5) !important;
}

@media(max-width:760px){
  main {
    padding: 42px 16px 90px !important;
  }

  h1 {
    font-size: 44px !important;
    line-height: 1.03 !important;
    letter-spacing: -2px !important;
  }

  h2 {
    font-size: 32px !important;
  }
}
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top,#111827 0%,#030712 45%,#000000 100%)",
    color: "#fff",
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

  glowBlue: {
    position: "absolute",
    top: -220,
    right: -120,
    width: 620,
    height: 620,
    borderRadius: "50%",
    background: "rgba(96,165,250,.16)",
    filter: "blur(140px)",
  },

  glowGold: {
    position: "absolute",
    bottom: 160,
    left: -200,
    width: 620,
    height: 620,
    borderRadius: "50%",
    background: "rgba(214,181,109,.12)",
    filter: "blur(140px)",
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
    border: "1px solid rgba(214,181,109,.25)",
    color: "#d6b56d",
    fontSize: 12,
    fontWeight: 950,
    letterSpacing: 4,
    marginBottom: 26,
  },

  title: {
    margin: 0,
    fontSize: "clamp(50px,8vw,96px)",
    lineHeight: 0.96,
    letterSpacing: "-4px",
    fontWeight: 950,
  },

  subtitle: {
    maxWidth: 880,
    margin: "28px auto 0",
    color: "#cbd5e1",
    fontSize: "clamp(18px,3vw,24px)",
    lineHeight: 1.65,
    fontWeight: 650,
  },

  statusPill: {
    margin: "34px auto 0",
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "16px 24px",
    borderRadius: 999,
    background: "rgba(34,197,94,.12)",
    border: "1px solid rgba(34,197,94,.35)",
    color: "#bbf7d0",
    fontWeight: 950,
  },

  statusDot: {
    width: 13,
    height: 13,
    borderRadius: "50%",
    background: "#22c55e",
    boxShadow: "0 0 24px rgba(34,197,94,.85)",
    animation: "pulse 2s ease-in-out infinite",
  },

  updated: {
    marginTop: 18,
    color: "#94a3b8",
    fontWeight: 700,
  },

  section: {
    maxWidth: 1180,
    margin: "58px auto 0",
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

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: 18,
  },

  statusCard: {
    minHeight: 150,
    padding: 26,
    borderRadius: 30,
    background:
      "linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.11)",
    backdropFilter: "blur(22px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 24px 80px rgba(0,0,0,.28)",
  },

  cardTitle: {
    margin: 0,
    fontSize: 23,
    fontWeight: 950,
  },

  cardText: {
    color: "#cbd5e1",
    fontWeight: 700,
  },

  operational: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    color: "#bbf7d0",
    fontWeight: 900,
  },

  smallDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "#22c55e",
    boxShadow: "0 0 16px rgba(34,197,94,.8)",
  },

  infoGrid: {
    maxWidth: 1180,
    margin: "58px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: 20,
    position: "relative",
    zIndex: 2,
  },

  infoCard: {
    padding: 32,
    borderRadius: 34,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.11)",
    backdropFilter: "blur(22px)",
  },

  infoTitle: {
    margin: "12px 0 14px",
    fontSize: "clamp(30px,4vw,46px)",
    lineHeight: 1,
    fontWeight: 950,
  },

  infoText: {
    color: "#dbeafe",
    lineHeight: 1.8,
    fontWeight: 650,
  },

  supportBox: {
    maxWidth: 1180,
    margin: "58px auto 0",
    padding: 38,
    borderRadius: 40,
    background:
      "linear-gradient(135deg,rgba(214,181,109,.11),rgba(96,165,250,.10))",
    border: "1px solid rgba(214,181,109,.22)",
    position: "relative",
    zIndex: 2,
    backdropFilter: "blur(22px)",
  },

  supportTitle: {
    margin: "12px 0 16px",
    fontSize: "clamp(34px,5vw,58px)",
    lineHeight: 1,
    fontWeight: 950,
  },

  supportDetails: {
    marginTop: 24,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 14,
  },

  button: {
    display: "inline-flex",
    marginTop: 28,
    minHeight: 58,
    alignItems: "center",
    justifyContent: "center",
    padding: "0 26px",
    borderRadius: 999,
    background: "linear-gradient(135deg,#d6b56d,#60a5fa)",
    color: "#020617",
    fontWeight: 950,
    textDecoration: "none",
  },
};