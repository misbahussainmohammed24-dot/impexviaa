"use client";

import { Product } from "@/types/product";
import { useEffect } from "react";

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!product) return;

    const recent = JSON.parse(localStorage.getItem("recent") || "[]");

    const updated = [product, ...recent.filter((p: any) => p.id !== product.id)].slice(0, 5);

    localStorage.setItem("recent", JSON.stringify(updated));
  }, [product]);

  if (!product) return null;

  const copyQuote = () => {
    navigator.clipboard.writeText(
      `${product.name}\nHSN: ${product.hsnCode}\n${product.description}`
    );
    alert("Copied for quotation!");
  };

  return (
    <div className="modal">
      <div className="modal-content">

        <button className="close" onClick={onClose}>✕</button>

        <h2>{product.name}</h2>

        <p className="desc">{product.description}</p>

        <h3>Specifications</h3>
        <ul>
          {product.specifications.map((s, i) => <li key={i}>{s}</li>)}
        </ul>

        <h3>Certifications</h3>
        <ul>
          {product.certifications.map((c, i) => <li key={i}>{c}</li>)}
        </ul>

        <h3>Supply</h3>
        <p>
          {product.supplyCapacity.monthlyUnits}/month • {product.supplyCapacity.leadTimeDays} days
        </p>

        <h3>Buyer Reviews</h3>
        {product.buyerComments.map((c, i) => (
          <blockquote key={i}>
            “{c.comment}”
            <span>— {c.name}</span>
          </blockquote>
        ))}

        <button className="quote-btn" onClick={copyQuote}>
          Request Quote
        </button>

      </div>
    </div>
  );
}