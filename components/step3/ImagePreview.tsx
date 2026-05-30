"use client";

import type { CSSProperties } from "react";

type ImagePreviewProps = {
  file?: File | null;
  files?: File[];
};

export default function ImagePreview({ file, files = [] }: ImagePreviewProps) {
  const previewFiles = file ? [file] : files;

  if (!previewFiles || previewFiles.length === 0) return null;

  return (
    <div style={styles.grid}>
      {previewFiles.map((item, index) => (
        <div key={`${item.name}-${index}`} style={styles.card}>
          <img
            src={URL.createObjectURL(item)}
            alt={item.name}
            style={styles.image}
          />
          <p style={styles.name}>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
    gap: 14,
    margin: "0 0 22px",
  },
  card: {
    borderRadius: 18,
    overflow: "hidden",
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(255,255,255,.12)",
  },
  image: {
    width: "100%",
    height: 120,
    objectFit: "cover",
    display: "block",
  },
  name: {
    margin: 0,
    padding: 10,
    color: "#dbeafe",
    fontSize: 12,
    wordBreak: "break-word",
  },
};