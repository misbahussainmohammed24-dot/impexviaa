"use client";

import type { CSSProperties } from "react";

type HXNChatProps = {
  open: boolean;
  onClose: () => void;
  onSelectHelp: (message: string) => void;
};

const quickHelp = [
  {
    title: "What is MOQ?",
    answer:
      "MOQ means Minimum Order Quantity. It is the smallest quantity a buyer can order from you.",
  },
  {
    title: "What is Lead Time?",
    answer:
      "Lead Time is the time required to manufacture, prepare, and dispatch an order.",
  },
  {
    title: "Product Images",
    answer:
      "Upload one main image and at least one additional image. High-quality images improve buyer trust.",
  },
  {
    title: "Incoterms",
    answer:
      "FOB, CIF, EXW, DDP, and CFR define responsibility for shipping, customs, insurance, and delivery.",
  },
  {
    title: "RFQ",
    answer:
      "RFQ means Request for Quotation. Buyers can send inquiries and request pricing directly from suppliers.",
  },
  {
    title: "HXN AI Store",
    answer:
      "HXN AI automatically generates product titles, descriptions, SEO content, tags, and store layouts.",
  },
];

export default function HXNChat({
  open,
  onClose,
  onSelectHelp,
}: HXNChatProps) {
  if (!open) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <button style={styles.close} onClick={onClose}>
          ×
        </button>

        <div style={styles.handle} />

        <h2 style={styles.title}>HXN AI Product Store Help</h2>

        <p style={styles.subtitle}>
          Select a topic and HXN AI will guide the supplier.
        </p>

        <div style={styles.grid}>
          {quickHelp.map((item) => (
            <button
              key={item.title}
              style={styles.helpButton}
              onClick={() => onSelectHelp(item.answer)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <textarea
          placeholder="Ask HXN AI a product store question..."
          style={styles.textarea}
        />

        <button style={styles.send}>
          Send Message
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 99999,
    background: "rgba(2,6,23,.75)",
    backdropFilter: "blur(10px)",
    display: "grid",
    placeItems: "end center",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 650,
    borderRadius: 28,
    background:
      "linear-gradient(135deg,#ffffff,#f8fbff,#eef7ff)",
    padding: 28,
    position: "relative",
    color: "#020617",
  },

  close: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "none",
    background: "#020617",
    color: "#fff",
    fontSize: 24,
    cursor: "pointer",
  },

  handle: {
    width: 70,
    height: 6,
    borderRadius: 999,
    background: "#cbd5e1",
    margin: "0 auto 18px",
  },

  title: {
    margin: 0,
    fontSize: 28,
    fontWeight: 900,
  },

  subtitle: {
    color: "#475569",
    marginBottom: 18,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: 10,
    marginBottom: 20,
  },

  helpButton: {
    border: "1px solid #cbd5e1",
    borderRadius: 16,
    background: "#fff",
    padding: "12px",
    cursor: "pointer",
    fontWeight: 700,
  },

  textarea: {
    width: "100%",
    minHeight: 100,
    borderRadius: 16,
    border: "1px solid #cbd5e1",
    padding: 12,
    resize: "vertical",
  },

  send: {
    width: "100%",
    marginTop: 12,
    border: "none",
    borderRadius: 16,
    padding: "14px",
    background: "linear-gradient(135deg,#9333ea,#06b6d4)",
    color: "#fff",
    fontWeight: 900,
    cursor: "pointer",
  },
};