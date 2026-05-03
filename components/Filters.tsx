"use client";

export default function Filters({
  search,
  setSearch,
  category,
  setCategory,
}: any) {
  return (
    <div className="filters">

      <input
        placeholder="Search name or HSN..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        <option>Electronics</option>
        <option>Pharma</option>
        <option>Automotive</option>
        <option>Food/Agriculture</option>
      </select>

    </div>
  );
}