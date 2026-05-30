"use client";

import type { CSSProperties } from "react";

type FileUploaderProps = {
  label: string;
  help: string;
  multiple?: boolean;
  file?: File | null;
  files?: File[];
  accept?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FileUploader({
  label,
  help,
  multiple = false,
  file,
  files,
  accept,
  required = false,
  onChange,
}: FileUploaderProps) {
  const fileText = multiple
    ? files && files.length > 0
      ? `${files.length} file(s) selected`
      : "No files selected"
    : file
    ? file.name
    : "No file selected";

  return (
    <label className="file-card" style={styles.fileBox}>
      <input
        type="file"
        multiple={multiple}
        accept={accept}
        onChange={onChange}
        style={styles.hiddenInput}
      />

      <span style={styles.icon}>⬆</span>

      <span style={styles.content}>
        <strong>
          {label} {required ? "*" : ""}
        </strong>
        <small>{help}</small>
        <em>{fileText}</em>
      </span>

      <span style={styles.button}>Browse</span>
    </label>
  );
}

const styles: Record<string, CSSProperties> = {
  fileBox: {
    width: "100%",
    minHeight: 96,
    borderRadius: 24,
    border: "1px solid rgba(125,211,252,.24)",
    background: "rgba(255,255,255,.075)",
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: 18,
    marginBottom: 16,
    cursor: "pointer",
    transition: ".3s ease",
  },
  hiddenInput: {
    display: "none",
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    background: "linear-gradient(135deg,#7dd3fc,#2563eb)",
    display: "grid",
    placeItems: "center",
    fontWeight: 950,
    color: "#020617",
    flexShrink: 0,
  },
  content: {
    display: "grid",
    gap: 5,
    flex: 1,
    color: "#fff",
  },
  button: {
    borderRadius: 999,
    padding: "10px 16px",
    background: "rgba(255,255,255,.10)",
    border: "1px solid rgba(255,255,255,.14)",
    fontWeight: 900,
    color: "#bae6fd",
  },
};