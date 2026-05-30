"use client";

import type { CSSProperties } from "react";
import FileUploader from "./Fileuploader";
import { getCertifications } from "@/lib/step3Categories";

type Props = {
  category: string;
  productCertifications: string;
  certificationDocuments: File[];
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFilesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Certifications({
  category,
  productCertifications,
  certificationDocuments,
  onChange,
  onFilesChange,
}: Props) {
  const suggestedCertifications = getCertifications(category);

  return (
    <section>
      <h2 style={styles.title}>Product Certifications</h2>

      <div style={styles.infoBox}>
        <strong>HXN Compliance Assistant</strong>
        <p>
          Upload quality certificates, test reports, regulatory approvals,
          export compliance records, and inspection reports. These improve
          buyer trust, sourcing visibility, and marketplace ranking.
        </p>
      </div>

      {suggestedCertifications.length > 0 && (
        <div style={styles.suggestionBox}>
          <h3 style={styles.subTitle}>
            Recommended Certifications for {category}
          </h3>

          <div style={styles.tags}>
            {suggestedCertifications.map((cert) => (
              <span key={cert} style={styles.tag}>
                {cert}
              </span>
            ))}
          </div>
        </div>
      )}

      <textarea
        name="productCertifications"
        value={productCertifications}
        onChange={onChange}
        placeholder="Enter certifications separated by commas. Example: GMP, FDA, HACCP, CE, RoHS, Global GAP."
        className="premium-field"
        style={styles.textarea}
      />

      <FileUploader
        label="Certification Documents"
        help="Upload certificates, inspection reports, test reports, compliance documents and approvals."
        files={certificationDocuments}
        multiple
        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
        onChange={onFilesChange}
      />

      <div style={styles.documentCount}>
        {certificationDocuments.length} file(s) selected
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

  subTitle: {
    marginBottom: 14,
    color: "#fff",
    fontWeight: 800,
    fontSize: 18,
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

  suggestionBox: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    background: "rgba(255,255,255,.05)",
    border: "1px solid rgba(255,255,255,.08)",
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },

  tag: {
    padding: "8px 14px",
    borderRadius: 999,
    background: "rgba(59,130,246,.15)",
    border: "1px solid rgba(59,130,246,.35)",
    color: "#93c5fd",
    fontSize: 14,
    fontWeight: 700,
  },

  textarea: {
    width: "100%",
    minHeight: 140,
    borderRadius: 22,
    border: "1px solid rgba(255,255,255,.14)",
    background: "rgba(255,255,255,.075)",
    color: "#fff",
    padding: 18,
    fontSize: 16,
    lineHeight: 1.7,
    marginBottom: 20,
    resize: "vertical",
  },

  documentCount: {
    marginTop: 10,
    color: "#93c5fd",
    fontSize: 14,
    fontWeight: 700,
  },
};