"use client";

import type { CSSProperties } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onSelectHelp: (message: string) => void;
};

const quickHelp = [
  {
    title: "What is MOQ?",
    answer:
      "MOQ means Minimum Order Quantity. It is the smallest order size you accept, such as 1 ton, 100 boxes, or 500 units.",
  },
  {
    title: "What is Lead Time?",
    answer:
      "Lead Time is the number of days needed to prepare, manufacture, pack, and dispatch the order.",
  },
  {
    title: "Product Images",
    answer:
      "Upload one clear main product image and at least one additional image. Packaging, factory, and warehouse images increase buyer trust.",
  },
  {
    title: "Incoterms",
    answer:
      "Incoterms define shipping responsibility. Common examples are FOB, CIF, EXW, DDP, and CFR.",
  },
  {
    title: "RFQ Participation",
    answer:
      "RFQ means Request for Quotation. If enabled, buyers can request price, quantity, and delivery details directly from your store.",
  },
  {
    title: "AI Store Generation",
    answer:
      "HXN AI uses your product data to prepare product titles, descriptions, SEO tags, catalogue structure, and export-ready presentation.",
  },
];

export default function HXNChat({ open, onClose, onSelectHelp }: Props) {
  if (!open) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <button type="button" style={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <div style={styles.handle} />

        <div style={styles.header}>
          <div style={styles.robot}>
            <div style={styles.eye} />
            <div style={styles.eye} />
          </div>

          <div>
            <h2 style={styles.title}>HXN AI Product Store Help</h2>
            <p style={styles.subtitle}>Select what you are confused about.</p>
          </div>
        </div>

        <div style={styles.messageBubble}>
          I can help you complete product details, MOQ, Incoterms, shipping,
          certifications, RFQ participation, and AI store setup.
        </div>

        <div style={styles.quickGrid}>
          {quickHelp.map((item) => (
            <button
              key={item.title}
              type="button"
              style={styles.quickButton}
              onClick={() => onSelectHelp(item.answer)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <textarea
          style={styles.textarea}
          placeholder="Type your product store question here..."
        />

        <button type="button" style={styles.sendButton}>
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
    background: "rgba(2,6,23,.72)",
    backdropFilter: "blur(14px)",
    display: "grid",
    placeItems: "end center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 640,
    borderRadius: "34px 34px 28px 28px",
    padding: 28,
    background:
      "linear-gradient(135deg,#ffffff 0%,#f8fbff 50%,#eef7ff 100%)",
    color: "#020617",
    border: "1px solid rgba(255,255,255,.9)",
    boxShadow:
      "0 35px 120px rgba(0,0,0,.45), 0 0 80px rgba(34,211,238,.25)",
    position: "relative",
    animation: "chatLift .42s cubic-bezier(.2,.9,.2,1) both",
  },
  closeButton: {
    position: "absolute",
    top: 18,
    right: 18,
    width: 38,
    height: 38,
    borderRadius: "50%",
    border: "none",
    background: "#020617",
    color: "#fff",
    fontSize: 24,
    cursor: "pointer",
  },
  handle: {
    width: 62,
    height: 6,
    borderRadius: 99,
    background: "#cbd5e1",
    margin: "0 auto 18px",
  },
  header: {
    display: "flex",
    gap: 14,
    alignItems: "center",
    marginBottom: 20,
  },
  robot: {
    width: 62,
    height: 52,
    borderRadius: 20,
    background: "linear-gradient(135deg,#061733,#0b1f4a)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    boxShadow: "0 0 26px rgba(14,165,233,.38)",
    flexShrink: 0,
  },
  eye: {
    width: 10,
    height: 18,
    borderRadius: 99,
    background: "#67e8f9",
    boxShadow: "0 0 12px #22d3ee",
  },
  title: {
    margin: 0,
    fontSize: 26,
    fontWeight: 950,
  },
  subtitle: {
    margin: "4px 0 0",
    color: "#475569",
    fontSize: 14,
  },
  messageBubble: {
    padding: 17,
    borderRadius: 20,
    background: "#eff6ff",
    color: "#0f172a",
    fontWeight: 850,
    lineHeight: 1.55,
    marginBottom: 18,
  },
  quickGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
    gap: 10,
    marginBottom: 18,
  },
  quickButton: {
    border: "1px solid #cbd5e1",
    background: "#fff",
    borderRadius: 16,
    padding: "12px 14px",
    color: "#020617",
    fontWeight: 850,
    cursor: "pointer",
    transition: ".3s ease",
  },
  textarea: {
    width: "100%",
    minHeight: 95,
    borderRadius: 18,
    border: "1px solid #cbd5e1",
    padding: 14,
    fontSize: 15,
    resize: "vertical",
    outline: "none",
  },
  sendButton: {
    width: "100%",
    marginTop: 12,
    border: "none",
    borderRadius: 18,
    padding: "15px 18px",
    background: "linear-gradient(135deg,#9333ea,#06b6d4)",
    color: "#fff",
    fontWeight: 950,
    cursor: "pointer",
  },
};