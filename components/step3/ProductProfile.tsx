"use client";

import type { CSSProperties } from "react";
import { PRODUCT_CATEGORIES, getSubcategories } from "@/lib/step3Categories";

type Props = {
  primaryBusinessActivity: string;
  mainProductCategories: string;
  productSubcategories: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export default function ProductProfile({
  primaryBusinessActivity,
  mainProductCategories,
  productSubcategories,
  onChange,
}: Props) {
  const subcategories = getSubcategories(mainProductCategories);

  return (
    <section>
      <h2 style={styles.title}>Business Product Profile</h2>

      <div style={styles.grid}>
        <select
          name="primaryBusinessActivity"
          value={primaryBusinessActivity}
          onChange={onChange}
          className="premium-field"
          style={styles.input}
        >
          <option value="">Primary Business Activity *</option>
          <option>Manufacturer</option>
          <option>Exporter</option>
          <option>Importer</option>
          <option>Supplier</option>
          <option>Wholesaler</option>
          <option>Distributor</option>
          <option>Trader</option>
          <option>Service Provider</option>
          <option>Sourcing Company</option>
        </select>

        <select
          name="mainProductCategories"
          value={mainProductCategories}
          onChange={onChange}
          className="premium-field"
          style={styles.input}
        >
          <option value="">Main Product Category *</option>
          {PRODUCT_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {subcategories.length > 0 ? (
          <select
            name="productSubcategories"
            value={productSubcategories}
            onChange={onChange}
            className="premium-field"
            style={styles.input}
          >
            <option value="">Product Subcategory *</option>
            {subcategories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        ) : (
          <input
            name="productSubcategories"
            value={productSubcategories}
            onChange={onChange}
            placeholder="Product Subcategory *"
            className="premium-field"
            style={styles.input}
          />
        )}
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