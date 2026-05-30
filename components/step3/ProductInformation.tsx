"use client";

import type { CSSProperties } from "react";
import FileUploader from "./Fileuploader";
import ImagePreview from "./ImagePreview";

type Props = {
  productName: string;
  brandName: string;
  productDescription: string;
  productSpecifications: string;
  mainProductImage: File | null;
  additionalProductImages: File[];
  packagingImages: File[];
  factoryImages: File[];
  warehouseImages: File[];
  productVideo: File | null;
  productCatalog: File | null;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSingleFile: (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "mainProductImage" | "productVideo" | "productCatalog"
  ) => void;
  onMultipleFiles: (
    e: React.ChangeEvent<HTMLInputElement>,
    key:
      | "additionalProductImages"
      | "packagingImages"
      | "factoryImages"
      | "warehouseImages"
  ) => void;
};

export default function ProductInformation({
  productName,
  brandName,
  productDescription,
  productSpecifications,
  mainProductImage,
  additionalProductImages,
  packagingImages,
  factoryImages,
  warehouseImages,
  productVideo,
  productCatalog,
  onChange,
  onSingleFile,
  onMultipleFiles,
}: Props) {
  return (
    <section>
      <h2 style={styles.title}>Product Information</h2>

      <div style={styles.grid}>
        <input
          name="productName"
          value={productName}
          onChange={onChange}
          placeholder="Product Name *"
          className="premium-field"
          style={styles.input}
        />

        <input
          name="brandName"
          value={brandName}
          onChange={onChange}
          placeholder="Brand Name"
          className="premium-field"
          style={styles.input}
        />
      </div>

      <textarea
        name="productDescription"
        value={productDescription}
        onChange={onChange}
        placeholder="Product Description *"
        className="premium-field"
        style={styles.textarea}
      />

      <textarea
        name="productSpecifications"
        value={productSpecifications}
        onChange={onChange}
        placeholder="Product Specifications *"
        className="premium-field"
        style={styles.textarea}
      />

      <FileUploader
        label="Main Product Image"
        help="Required. Upload the primary product image."
        file={mainProductImage}
        accept="image/*"
        required
        onChange={(e) => onSingleFile(e, "mainProductImage")}
      />
      <ImagePreview file={mainProductImage} />

      <FileUploader
        label="Additional Product Images"
        help="Required. Upload extra product images."
        files={additionalProductImages}
        accept="image/*"
        multiple
        required
        onChange={(e) => onMultipleFiles(e, "additionalProductImages")}
      />
      <ImagePreview files={additionalProductImages} />

      <FileUploader
        label="Packaging Images"
        help="Optional. Upload packaging images."
        files={packagingImages}
        accept="image/*"
        multiple
        onChange={(e) => onMultipleFiles(e, "packagingImages")}
      />
      <ImagePreview files={packagingImages} />

      <FileUploader
        label="Factory Images"
        help="Optional. Upload factory images."
        files={factoryImages}
        accept="image/*"
        multiple
        onChange={(e) => onMultipleFiles(e, "factoryImages")}
      />
      <ImagePreview files={factoryImages} />

      <FileUploader
        label="Warehouse Images"
        help="Optional. Upload warehouse images."
        files={warehouseImages}
        accept="image/*"
        multiple
        onChange={(e) => onMultipleFiles(e, "warehouseImages")}
      />
      <ImagePreview files={warehouseImages} />

      <FileUploader
        label="Product Video"
        help="Optional. Upload product video."
        file={productVideo}
        accept="video/*"
        onChange={(e) => onSingleFile(e, "productVideo")}
      />

      <FileUploader
        label="Product Catalogue"
        help="Optional. Upload PDF catalogue or brochure."
        file={productCatalog}
        accept=".pdf,.doc,.docx,.ppt,.pptx"
        onChange={(e) => onSingleFile(e, "productCatalog")}
      />
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
  textarea: {
    width: "100%",
    minHeight: 135,
    borderRadius: 22,
    border: "1px solid rgba(255,255,255,.14)",
    background: "rgba(255,255,255,.075)",
    color: "#fff",
    padding: 18,
    fontSize: 16,
    lineHeight: 1.7,
    marginBottom: 18,
    resize: "vertical",
  },
};