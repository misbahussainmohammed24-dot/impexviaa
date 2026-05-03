"use client";

import BuyerSellerShowcase from "./BuyerSellerShowcase";

export default function BelowHero() {
  const countries = [
    { name: "India", flag: "https://flagcdn.com/w80/in.png" },
    { name: "China", flag: "https://flagcdn.com/w80/cn.png" },
    { name: "UAE", flag: "https://flagcdn.com/w80/ae.png" },
    { name: "Germany", flag: "https://flagcdn.com/w80/de.png" },
    { name: "France", flag: "https://flagcdn.com/w80/fr.png" },
    { name: "Japan", flag: "https://flagcdn.com/w80/jp.png" },
    { name: "Saudi Arabia", flag: "https://flagcdn.com/w80/sa.png" },
    { name: "Canada", flag: "https://flagcdn.com/w80/ca.png" },
    { name: "USA", flag: "https://flagcdn.com/w80/us.png" },
    { name: "UK", flag: "https://flagcdn.com/w80/gb.png" },
  ];

  return (
    <>
      {/* FLAGS SECTION */}
      <section className="flags-section">
        <div className="flags-container">
          {countries.map((c, i) => (
            <div key={i} className="flag-item">
              <img src={c.flag} alt={c.name} />
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 BUYER SELLER INTERACTIVE SECTION */}
      <BuyerSellerShowcase />

      {/* STYLES */}
      <style jsx>{`
        .flags-section {
          width: 100%;
          background: #ffffff;
          padding: 40px 20px;
          margin-top: 60px;
        }

        .flags-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 40px;
        }

        .flag-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          transition: transform 0.3s ease;
        }

        .flag-item img {
          width: 60px;
          height: 40px;
          object-fit: cover;
          border-radius: 6px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        .flag-item span {
          font-size: 14px;
          color: #333;
          font-weight: 500;
        }

        .flag-item:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </>
  );
}