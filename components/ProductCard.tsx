"use client";

import Image from "next/image";
import { Product } from "@/types/product";

interface Props {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: Props) {
  // ✅ Handle BOTH cases (specs OR specifications)
  const specs =
    product.specifications || product.specs || [];

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
    >
      {/* IMAGE */}
     <div className="w-full h-52 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
  <Image
    src={product.image || "/placeholder.png"}
    alt={product.name}
    width={220}
    height={220}
    className="object-contain transition-transform duration-300 group-hover:scale-105"
  />
</div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">
        {/* TITLE */}
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {product.name}
        </h3>

        {/* RATING */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          {"★".repeat(Math.floor(product.rating))}
          {"☆".repeat(5 - Math.floor(product.rating))}
          <span className="text-gray-500 ml-1">
            ({product.rating})
          </span>
        </div>

        {/* ORIGIN */}
        <p className="text-xs text-gray-500">
          Origin: {product.origin}
        </p>

        {/* SPECS (SAFE FIX HERE) */}
        <p className="text-xs text-gray-600 line-clamp-2">
          {specs.length > 0
            ? specs.slice(0, 2).join(", ")
            : "No specifications available"}
        </p>

        {/* MOQ */}
        <div className="flex justify-between items-center pt-2">
          <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md">
            MOQ: {product.moq || "Flexible"}
          </span>

          <span className="text-xs text-gray-400 group-hover:text-blue-500 transition">
            View →
          </span>
        </div>
      </div>
    </div>
  );
}