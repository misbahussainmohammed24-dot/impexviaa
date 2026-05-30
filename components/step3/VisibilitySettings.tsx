"use client";

import type { CSSProperties } from "react";

type Props = {
  marketplaceVisibility: string;
  rfqParticipation: string;
  featuredSupplierEligibility: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function VisibilitySettings({
  marketplaceVisibility,
  rfqParticipation,
  featuredSupplierEligibility,
  onChange,
}: Props) {
  return (
    <section>
      <h2 style={styles.title}>Business Visibility Settings</h2>

      <div style={styles.infoBox}>
        <strong>HXN Visibility Guidance</strong>
        <p>
          Choose how buyers can discover your products, whether buyers can request
          quotations, and what supplier visibility level should be applied.
          </p>
      </div>

      <div style={styles.grid}>
        <select
          name="marketplaceVisibility"
          value={marketplaceVisibility}
          onChange={onChange}
          className="premium-field"
          style={styles.input}
        >
          <option value="">Marketplace Visibility *</option>
          <option value="Public">Public</option>
          <option value="Verified Buyers Only">
            Verified Buyers Only
          </option>
          <option value="Private">Private</option>
        </select>

        <select
          name="rfqParticipation"
          value={rfqParticipation}
          onChange={onChange}
          className="premium-field"
          style={styles.input}
        >
          <option value="">RFQ Participation *</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <select
          name="featuredSupplierEligibility"
          value={featuredSupplierEligibility}
          onChange={onChange}
          className="premium-field"
          style={styles.input}
        >
          <option value="">Featured Supplier Eligibility *</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
          <option value="Enterprise">Enterprise</option>
        </select>
      </div>

      <div style={styles.cardGrid}>
        <div style={styles.card}>
          <strong>Public Visibility</strong>
          <p>
            Products appear throughout the marketplace and can be
            discovered through search.
          </p>
        </div>

        <div style={styles.card}>
          <strong>Verified Buyers Only</strong>
          <p>
            Only approved and verified buyers can access your products.
          </p>
        </div>

        <div style={styles.card}>
          <strong>Private Store</strong>
          <p>
            Store remains hidden until visibility is enabled manually.
          </p>
        </div>

        <div style={styles.card}>
          <strong>RFQ Enabled</strong>
          <p>
            Buyers can submit quotation requests directly from your store.
          </p>
        </div>

        <div style={styles.card}>
          <strong>Premium & Enterprise</strong>
          <p>
            Higher visibility, stronger trust indicators and better buyer
            exposure.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  title: {
    fontSize: "clamp(28px,5vw,46px)",
    margin: "42px 0 24px",
    fontWeight: 950,
    letterSpacing: "-2px",
    color: "#fff",
  },

  infoBox: {
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    background:
      "linear-gradient(135deg,rgba(125,211,252,.14),rgba(168,85,247,.10))",
    border: "1px solid rgba(125,211,252,.24)",
    color: "#dbeafe",
    lineHeight: 1.7,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(245px,1fr))",
    gap: 16,
    marginBottom: 24,
  },

  input: {
    width: "100%",
    minHeight: 62,
    borderRadius: 22,
    border: "1px solid rgba(255,255,255,.14)",
    background: "rgba(255,255,255,.075)",
    color: "#fff",
    padding: "0 20px",
    fontSize: 16,
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 16,
    marginTop: 20,
  },

  card: {
    borderRadius: 22,
    padding: 18,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.10)",
    color: "#dbeafe",
    lineHeight: 1.6,
  },
};