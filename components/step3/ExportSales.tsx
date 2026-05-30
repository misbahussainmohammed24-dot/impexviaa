"use client";

import type { CSSProperties } from "react";

type Props = {
  moq: string;
  productionCapacity: string;
  leadTime: string;
  packagingType: string;
  portOfLoading: string;
  shippingAvailability: string;
  exportMarkets: string;
  paymentTermsAccepted: string;
  incotermsSupported: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export default function ExportSales({
  moq,
  productionCapacity,
  leadTime,
  packagingType,
  portOfLoading,
  shippingAvailability,
  exportMarkets,
  paymentTermsAccepted,
  incotermsSupported,
  onChange,
}: Props) {
  return (
    <section>
      <h2 style={styles.title}>Export & Sales Information</h2>

      <div style={styles.infoBox}>
        <strong>HXN Export Guidance</strong>
        <p>
          Add accurate MOQ, production capacity, lead time, packaging, shipping,
          payment terms, and Incoterms. This helps buyers understand how your
          product can be sourced internationally.
        </p>
      </div>

      <div style={styles.grid}>
        <input
          name="moq"
          value={moq}
          onChange={onChange}
          placeholder="MOQ / Minimum Order Quantity *"
          className="premium-field"
          style={styles.input}
        />

        <input
          name="productionCapacity"
          value={productionCapacity}
          onChange={onChange}
          placeholder="Production Capacity * e.g. 100 tons/month"
          className="premium-field"
          style={styles.input}
        />

        <input
          name="leadTime"
          value={leadTime}
          onChange={onChange}
          placeholder="Lead Time * e.g. 7–15 days"
          className="premium-field"
          style={styles.input}
        />

        <input
          name="packagingType"
          value={packagingType}
          onChange={onChange}
          placeholder="Packaging Type * e.g. bags, cartons, pallets"
          className="premium-field"
          style={styles.input}
        />

        <input
          name="portOfLoading"
          value={portOfLoading}
          onChange={onChange}
          placeholder="Port of Loading * e.g. Mumbai Port"
          className="premium-field"
          style={styles.input}
        />

        <select
          name="shippingAvailability"
          value={shippingAvailability}
          onChange={onChange}
          className="premium-field"
          style={styles.input}
        >
          <option value="">Shipping Availability *</option>
          <option>Air</option>
          <option>Sea</option>
          <option>Road</option>
          <option>Rail</option>
          <option>Air, Sea</option>
          <option>Sea, Road</option>
          <option>Air, Sea, Road</option>
          <option>Air, Sea, Road, Rail</option>
        </select>

        <select
          name="exportMarkets"
          value={exportMarkets}
          onChange={onChange}
          className="premium-field"
          style={styles.input}
        >
          <option value="">Export Markets *</option>
          <option>USA</option>
          <option>Europe</option>
          <option>Middle East</option>
          <option>Africa</option>
          <option>Asia-Pacific</option>
          <option>Global</option>
        </select>

        <select
          name="paymentTermsAccepted"
          value={paymentTermsAccepted}
          onChange={onChange}
          className="premium-field"
          style={styles.input}
        >
          <option value="">Payment Terms Accepted *</option>
          <option>TT</option>
          <option>LC</option>
          <option>Advance Payment</option>
          <option>Escrow</option>
          <option>Open Account</option>
          <option>TT, LC</option>
          <option>TT, LC, Escrow</option>
        </select>

        <select
          name="incotermsSupported"
          value={incotermsSupported}
          onChange={onChange}
          className="premium-field"
          style={styles.input}
        >
          <option value="">Incoterms Supported *</option>
          <option>FOB</option>
          <option>CIF</option>
          <option>EXW</option>
          <option>DDP</option>
          <option>CFR</option>
          <option>FOB, CIF</option>
          <option>FOB, CIF, EXW</option>
          <option>FOB, CIF, EXW, DDP</option>
        </select>
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
};