"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

type BillingMode = "monthly" | "yearly";

type Plan = {
  name: string;
  label: string;
  monthlyPrice: string;
  yearlyPrice: string;
  monthlyLink: string;
  yearlyLink: string;
  description: string;
  bestFor: string;
  features: string[];
  highlight?: boolean;
};

const PAYPAL_LINKS = {
  basicMonthly: "https://www.paypal.com/ncp/payment/YOUR_BASIC_MONTHLY_LINK",
  basicYearly: "https://www.paypal.com/ncp/payment/YOUR_BASIC_YEARLY_LINK",

  standardMonthly: "https://www.paypal.com/ncp/payment/YOUR_STANDARD_MONTHLY_LINK",
  standardYearly: "https://www.paypal.com/ncp/payment/YOUR_STANDARD_YEARLY_LINK",

  premiumMonthly: "https://www.paypal.com/ncp/payment/YOUR_PREMIUM_MONTHLY_LINK",
  premiumYearly: "https://www.paypal.com/ncp/payment/YOUR_PREMIUM_YEARLY_LINK",
};

const plans: Plan[] = [
  {
    name: "Basic Buyer",
    label: "STARTER SOURCING ACCESS",
    monthlyPrice: "$99",
    yearlyPrice: "$999",
    monthlyLink: PAYPAL_LINKS.basicMonthly,
    yearlyLink: PAYPAL_LINKS.basicYearly,
    description:
      "For small importers, local distributors, first-time sourcing businesses, and traders who want access to verified supplier discovery.",
    bestFor: "Small importers and early-stage sourcing teams",
    features: [
      "Access to verified supplier profiles",
      "Basic product and supplier search",
      "Submit buyer RFQs",
      "Save suppliers",
      "Buyer dashboard",
      "Basic supplier trust information",
      "Email support",
    ],
  },
  {
    name: "Standard Buyer",
    label: "MOST POPULAR BUYER PLAN",
    monthlyPrice: "$249",
    yearlyPrice: "$2499",
    monthlyLink: PAYPAL_LINKS.standardMonthly,
    yearlyLink: PAYPAL_LINKS.standardYearly,
    description:
      "For serious importers, wholesalers, distributors, and sourcing teams who need stronger AI tools, more supplier intelligence, and RFQ management.",
    bestFor: "Active import businesses and wholesalers",
    highlight: true,
    features: [
      "Everything in Basic Buyer",
      "HXN AI supplier discovery",
      "Advanced supplier comparison",
      "Supplier trust score access",
      "Unlimited supplier searches",
      "Advanced RFQ management",
      "Saved supplier lists",
      "Quotation tracking",
      "Priority buyer support",
    ],
  },
  {
    name: "Premium Buyer",
    label: "ENTERPRISE SOURCING ACCESS",
    monthlyPrice: "$499",
    yearlyPrice: "$4999",
    monthlyLink: PAYPAL_LINKS.premiumMonthly,
    yearlyLink: PAYPAL_LINKS.premiumYearly,
    description:
      "For large import companies, procurement teams, international sourcing operations, and businesses needing premium intelligence and priority support.",
    bestFor: "Large importers and procurement teams",
    features: [
      "Everything in Standard Buyer",
      "Premium buyer badge",
      "Advanced AI sourcing intelligence",
      "Market and demand insights",
      "Priority supplier matching",
      "Team sourcing workspace",
      "Dedicated onboarding support",
      "Enterprise quotation management",
      "Future escrow-ready trade workflows",
    ],
  },
];

export default function BuyerSubscriptionPage() {
  const [billingMode, setBillingMode] = useState<BillingMode>("yearly");

  const openPayPal = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.glowBlue} />
      <div style={styles.glowGold} />

      <section style={styles.hero}>
        <div style={styles.badge}>IMPEXVIAA BUYER SUBSCRIPTION</div>

        <h1 style={styles.title}>Source globally with serious buyer access.</h1>

        <p style={styles.subtitle}>
          Choose a buyer plan designed for importers, wholesalers, distributors,
          procurement teams, and sourcing businesses. Access verified suppliers,
          manage RFQs, compare supplier trust signals, and use HXN AI to source
          smarter.
        </p>

        <div style={styles.toggleWrap}>
          <button
            type="button"
            onClick={() => setBillingMode("monthly")}
            style={{
              ...styles.toggleButton,
              ...(billingMode === "monthly" ? styles.toggleActive : {}),
            }}
          >
            Monthly
          </button>

          <button
            type="button"
            onClick={() => setBillingMode("yearly")}
            style={{
              ...styles.toggleButton,
              ...(billingMode === "yearly" ? styles.toggleActive : {}),
            }}
          >
            Yearly
            <span style={styles.saveBadge}>Best Value</span>
          </button>
        </div>
      </section>

      <section style={styles.planGrid}>
        {plans.map((plan) => {
          const price =
            billingMode === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

          const link =
            billingMode === "monthly" ? plan.monthlyLink : plan.yearlyLink;

          return (
            <div
              key={plan.name}
              className="plan-card"
              style={{
                ...styles.planCard,
                ...(plan.highlight ? styles.highlightCard : styles.normalCard),
              }}
            >
              {plan.highlight && <div style={styles.popular}>MOST POPULAR</div>}

              <p style={styles.planLabel}>{plan.label}</p>

              <h2 style={styles.planName}>{plan.name}</h2>

              <div style={styles.priceRow}>
                <span style={styles.price}>{price}</span>
                <span style={styles.period}>
                  / {billingMode === "monthly" ? "month" : "year"}
                </span>
              </div>

              <p style={styles.planDescription}>{plan.description}</p>

              <div style={styles.bestFor}>
                <strong>Best for:</strong> {plan.bestFor}
              </div>

              <button
                type="button"
                style={{
                  ...styles.payButton,
                  ...(plan.highlight ? styles.goldButton : styles.blueButton),
                }}
                onClick={() => openPayPal(link)}
              >
                Pay {price} Securely with PayPal
              </button>

              <div style={styles.featureList}>
                {plan.features.map((feature) => (
                  <div key={feature} style={styles.featureItem}>
                    <span style={styles.check}>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section style={styles.aiBox}>
        <p style={styles.aiKicker}>POWERED BY HXN AI</p>

        <h2 style={styles.aiTitle}>Tell HXN AI what you want to import.</h2>

        <p style={styles.aiText}>
          Example: “Find verified rice suppliers from India exporting to UAE.”
          HXN AI helps buyers discover suppliers, compare sourcing options,
          understand supplier trust signals, and prepare better RFQs.
        </p>
      </section>
    </main>
  );
}

const css = `
html, body {
  background: #020617 !important;
}

.plan-card {
  transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
}

.plan-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 42px 130px rgba(0,0,0,.58) !important;
}

button {
  transition: transform .25s ease, box-shadow .25s ease;
}

button:hover {
  transform: translateY(-3px);
}

@media(max-width: 760px) {
  main {
    padding: 42px 16px 90px !important;
  }
}
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top,#0f2f56 0%,#061a31 42%,#020617 100%)",
    color: "#fff",
    padding: "70px 22px 120px",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
    position: "relative",
    overflowX: "hidden",
  },

  glowBlue: {
    position: "absolute",
    top: -220,
    right: -120,
    width: 620,
    height: 620,
    borderRadius: "50%",
    background: "rgba(56,189,248,.16)",
    filter: "blur(130px)",
  },

  glowGold: {
    position: "absolute",
    bottom: 120,
    left: -180,
    width: 620,
    height: 620,
    borderRadius: "50%",
    background: "rgba(214,181,109,.13)",
    filter: "blur(130px)",
  },

  hero: {
    maxWidth: 1120,
    margin: "0 auto 52px",
    position: "relative",
    zIndex: 2,
    textAlign: "center",
  },

  badge: {
    display: "inline-flex",
    padding: "12px 22px",
    borderRadius: 999,
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(125,211,252,.24)",
    color: "#bfdbfe",
    fontSize: 12,
    fontWeight: 950,
    letterSpacing: 4,
    marginBottom: 26,
  },

  title: {
    margin: "0 auto",
    maxWidth: 1000,
    fontSize: "clamp(44px,8vw,90px)",
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

  toggleWrap: {
    margin: "38px auto 0",
    display: "inline-flex",
    padding: 8,
    borderRadius: 999,
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(255,255,255,.12)",
    gap: 8,
  },

  toggleButton: {
    minHeight: 52,
    borderRadius: 999,
    border: "none",
    background: "transparent",
    color: "#cbd5e1",
    padding: "0 22px",
    fontWeight: 900,
    cursor: "pointer",
    position: "relative",
  },

  toggleActive: {
    background: "linear-gradient(135deg,#ffffff,#dbeafe)",
    color: "#020617",
  },

  saveBadge: {
    marginLeft: 8,
    fontSize: 11,
    padding: "5px 8px",
    borderRadius: 999,
    background: "rgba(214,181,109,.22)",
    color: "#d6b56d",
  },

  planGrid: {
    maxWidth: 1240,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(310px,1fr))",
    gap: 26,
    position: "relative",
    zIndex: 2,
  },

  planCard: {
    minHeight: 760,
    borderRadius: 42,
    padding: "42px 34px",
    border: "1px solid rgba(255,255,255,.14)",
    boxShadow: "0 35px 110px rgba(0,0,0,.45)",
    position: "relative",
  },

  normalCard: {
    background:
      "linear-gradient(145deg,rgba(30,64,115,.92),rgba(15,42,76,.95),rgba(7,24,49,.98))",
    borderColor: "rgba(125,211,252,.22)",
  },

  highlightCard: {
    background:
      "linear-gradient(145deg,rgba(47,45,25,.95),rgba(24,37,49,.96),rgba(8,24,49,.98))",
    borderColor: "rgba(214,181,109,.40)",
    transform: "scale(1.02)",
  },

  popular: {
    position: "absolute",
    top: 24,
    right: 24,
    padding: "10px 16px",
    borderRadius: 999,
    background: "rgba(214,181,109,.18)",
    color: "#fde68a",
    fontSize: 12,
    fontWeight: 950,
    letterSpacing: 3,
  },

  planLabel: {
    margin: 0,
    color: "#bfdbfe",
    fontWeight: 950,
    letterSpacing: 4,
    fontSize: 12,
  },

  planName: {
    margin: "24px 0 26px",
    fontSize: "clamp(32px,5vw,50px)",
    lineHeight: 1.05,
    letterSpacing: "-2px",
    fontWeight: 950,
  },

  priceRow: {
    display: "flex",
    alignItems: "flex-end",
    gap: 10,
    marginBottom: 24,
  },

  price: {
    fontSize: "clamp(56px,9vw,82px)",
    lineHeight: 0.9,
    fontWeight: 950,
    letterSpacing: "-4px",
  },

  period: {
    color: "#cbd5e1",
    fontSize: 22,
    marginBottom: 8,
  },

  planDescription: {
    color: "#d1d5db",
    fontSize: 18,
    lineHeight: 1.7,
    fontWeight: 600,
    marginBottom: 22,
  },

  bestFor: {
    padding: 18,
    borderRadius: 22,
    background: "rgba(255,255,255,.07)",
    border: "1px solid rgba(255,255,255,.10)",
    color: "#dbeafe",
    lineHeight: 1.5,
    marginBottom: 24,
  },

  payButton: {
    width: "100%",
    minHeight: 74,
    borderRadius: 28,
    border: "none",
    fontSize: 18,
    fontWeight: 950,
    cursor: "pointer",
    padding: "0 18px",
    boxShadow: "0 20px 70px rgba(0,0,0,.35)",
    marginBottom: 28,
  },

  blueButton: {
    background: "linear-gradient(135deg,#ffffff,#dbeafe,#bfdbfe)",
    color: "#020617",
    border: "7px solid rgba(96,165,250,.22)",
  },

  goldButton: {
    background: "linear-gradient(135deg,#fff2b8,#facc15,#f59e0b)",
    color: "#020617",
    border: "7px solid rgba(214,181,109,.28)",
  },

  featureList: {
    display: "grid",
    gap: 14,
  },

  featureItem: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    color: "#e5e7eb",
    lineHeight: 1.5,
    fontSize: 16,
    fontWeight: 650,
  },

  check: {
    width: 26,
    height: 26,
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg,#22d3ee,#d6b56d)",
    color: "#020617",
    fontWeight: 950,
    flexShrink: 0,
    fontSize: 14,
  },

  aiBox: {
    maxWidth: 1120,
    margin: "64px auto 0",
    padding: "42px",
    borderRadius: 38,
    background:
      "linear-gradient(135deg,rgba(125,211,252,.12),rgba(214,181,109,.10))",
    border: "1px solid rgba(125,211,252,.22)",
    backdropFilter: "blur(22px)",
    position: "relative",
    zIndex: 2,
    textAlign: "center",
  },

  aiKicker: {
    margin: 0,
    color: "#d6b56d",
    letterSpacing: 4,
    fontSize: 12,
    fontWeight: 950,
  },

  aiTitle: {
    margin: "14px 0 16px",
    fontSize: "clamp(34px,5vw,58px)",
    lineHeight: 1.05,
    letterSpacing: "-2px",
    fontWeight: 950,
  },

  aiText: {
    margin: "0 auto",
    maxWidth: 850,
    color: "#dbeafe",
    fontSize: 19,
    lineHeight: 1.8,
    fontWeight: 650,
  },
};