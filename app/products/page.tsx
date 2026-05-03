"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Filters from "@/components/Filters";

export default function Page() {
  const [selected, setSelected] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filtered = products
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.hsnCode.includes(search)
    )
    .filter((p) => (category ? p.category === category : true));

  return (
    <div className="page">

      <h1>Global Product Marketplace</h1>

      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <div className="grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onClick={() => setSelected(p)} />
        ))}
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />

    </div>
  );
}