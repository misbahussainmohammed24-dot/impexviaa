"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { useRouter } from "next/navigation";

type Product = {
  name: string;
  slug: string;
  image: string;
  seller: string;
  country: string;
  category: string;
  price: string;
  moq: string;
  capacity: string;
  description: string;
  mandatoryDocs: string[];
  optionalDocs: string[];
};

const products: Product[] = [
  {
    name: "Rice Bags",
    slug: "rice-bags",
    image: "/agriculture/rice-bags.jpg",
    seller: "Global Harvest Exports Pvt Ltd",
    country: "India",
    category: "Grains",
    price: "Price on Request",
    moq: "25 MT",
    capacity: "5,000 MT / Month",
    description:
      "Premium export-grade rice bags for importers, wholesalers, food processors, and international distributors.",
    mandatoryDocs: ["Phytosanitary Certificate", "Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Fumigation Certificate", "APEDA Registration"],
  },
  {
    name: "Wheat Grains",
    slug: "wheat-grains",
    image: "/agriculture/wheat-grains.jpg",
    seller: "Prime Agro Commodities Ltd",
    country: "India",
    category: "Grains",
    price: "Price on Request",
    moq: "50 MT",
    capacity: "8,000 MT / Month",
    description:
      "Bulk wheat grains supplied for mills, food processors, and international commodity buyers.",
    mandatoryDocs: ["Phytosanitary Certificate", "Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Fumigation Certificate", "APEDA Registration"],
  },
  {
    name: "Corn",
    slug: "corn",
    image: "/agriculture/corn.jpg",
    seller: "Golden Fields Trading Group",
    country: "India",
    category: "Grains",
    price: "Price on Request",
    moq: "50 MT",
    capacity: "7,500 MT / Month",
    description:
      "Export-quality corn for feed manufacturers, food processors, and bulk commodity importers.",
    mandatoryDocs: ["Phytosanitary Certificate", "Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Fumigation Certificate", "APEDA Registration"],
  },
  {
    name: "Potatoes",
    slug: "potatoes",
    image: "/agriculture/potatoes.jpg",
    seller: "Fresh Earth Produce Exporters",
    country: "India",
    category: "Vegetables",
    price: "Price on Request",
    moq: "20 MT",
    capacity: "2,500 MT / Month",
    description:
      "Fresh potatoes packed for international buyers, supermarkets, and wholesale distributors.",
    mandatoryDocs: ["Phytosanitary Certificate", "Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Cold Treatment Certificate"],
  },
  {
    name: "Onions",
    slug: "onions",
    image: "/agriculture/onions.jpg",
    seller: "Royal Agro Exim Corporation",
    country: "India",
    category: "Vegetables",
    price: "Price on Request",
    moq: "20 MT",
    capacity: "3,200 MT / Month",
    description:
      "Export-grade onions for international fresh produce markets and food distributors.",
    mandatoryDocs: ["Phytosanitary Certificate", "Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Cold Treatment Certificate"],
  },
  {
    name: "Tomatoes",
    slug: "tomatoes",
    image: "/agriculture/tomatoes.jpg",
    seller: "Green Valley Fresh Foods",
    country: "India",
    category: "Vegetables",
    price: "Price on Request",
    moq: "10 MT",
    capacity: "1,800 MT / Month",
    description:
      "Fresh tomatoes prepared for wholesalers, food chains, and international produce importers.",
    mandatoryDocs: ["Phytosanitary Certificate", "Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Cold Treatment Certificate"],
  },
  {
    name: "Mangoes",
    slug: "mangoes",
    image: "/agriculture/mangoes.jpg",
    seller: "Tropical Harvest International",
    country: "India",
    category: "Fruits",
    price: "Price on Request",
    moq: "5 MT",
    capacity: "900 MT / Season",
    description:
      "Premium mangoes for international fruit importers, supermarkets, and distributors.",
    mandatoryDocs: ["Phytosanitary Certificate", "Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Irradiation Certificate", "APEDA Registration"],
  },
  {
    name: "Bananas",
    slug: "bananas",
    image: "/agriculture/bananas.jpg",
    seller: "Sunrise Fruit Export Group",
    country: "India",
    category: "Fruits",
    price: "Price on Request",
    moq: "10 MT",
    capacity: "2,000 MT / Month",
    description:
      "Fresh bananas supplied for global fruit distributors and wholesale importers.",
    mandatoryDocs: ["Phytosanitary Certificate", "Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Cold Treatment Certificate"],
  },
  {
    name: "Cotton",
    slug: "cotton",
    image: "/agriculture/cotton.jpg",
    seller: "CottonSphere Global Trading",
    country: "India",
    category: "Fiber Crops",
    price: "Price on Request",
    moq: "25 MT",
    capacity: "4,500 MT / Month",
    description:
      "Raw cotton for textile manufacturers, mills, exporters, and industrial buyers.",
    mandatoryDocs: ["Laboratory Test Report", "Business Registration Proof"],
    optionalDocs: ["Organic Certification"],
  },
  {
    name: "Spices",
    slug: "spices",
    image: "/agriculture/spices.jpg",
    seller: "Imperial Spice Export House",
    country: "India",
    category: "Spices",
    price: "Price on Request",
    moq: "2 MT",
    capacity: "600 MT / Month",
    description:
      "Mixed premium spices for food manufacturers, wholesalers, and international spice buyers.",
    mandatoryDocs: ["Phytosanitary Certificate", "Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Spices Board Registration", "Organic Certification"],
  },
  {
    name: "Green Chillies",
    slug: "green-chillies",
    image: "/agriculture/green-chillies.jpg",
    seller: "FreshHeat Agricultural Exports",
    country: "India",
    category: "Vegetables",
    price: "Price on Request",
    moq: "3 MT",
    capacity: "500 MT / Month",
    description:
      "Fresh green chillies for food service importers, wholesalers, and fresh produce markets.",
    mandatoryDocs: ["Phytosanitary Certificate", "Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Cold Treatment Certificate"],
  },
  {
    name: "Tea Leaves",
    slug: "tea-leaves",
    image: "/agriculture/tea-leaves.jpg",
    seller: "Premium Tea Estates International",
    country: "India",
    category: "Plantation Crops",
    price: "Price on Request",
    moq: "1 MT",
    capacity: "350 MT / Month",
    description:
      "Premium tea leaves for importers, tea brands, wholesalers, and private label buyers.",
    mandatoryDocs: ["Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Tea Board Registration", "Organic Certification"],
  },
  {
    name: "Coffee Beans",
    slug: "coffee-beans",
    image: "/agriculture/coffee-beans.jpg",
    seller: "Highland Coffee Trading Company",
    country: "India",
    category: "Plantation Crops",
    price: "Price on Request",
    moq: "1 MT",
    capacity: "300 MT / Month",
    description:
      "Export-ready coffee beans for roasters, distributors, and international beverage companies.",
    mandatoryDocs: ["Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Coffee Board Registration", "Organic Certification"],
  },
  {
    name: "Sugarcane",
    slug: "sugarcane",
    image: "/agriculture/sugarcane.jpg",
    seller: "Sweet Crop Export Solutions",
    country: "India",
    category: "Industrial Crops",
    price: "Price on Request",
    moq: "50 MT",
    capacity: "6,000 MT / Month",
    description:
      "Sugarcane and related agricultural supply for processors and bulk industrial buyers.",
    mandatoryDocs: ["Phytosanitary Certificate", "Laboratory Test Report", "Business Registration Proof"],
    optionalDocs: ["APEDA Registration"],
  },
  {
    name: "Soybeans",
    slug: "soybeans",
    image: "/agriculture/soybeans.jpg",
    seller: "AgriMax Commodity Exports",
    country: "India",
    category: "Pulses & Oilseeds",
    price: "Price on Request",
    moq: "50 MT",
    capacity: "7,000 MT / Month",
    description:
      "Bulk soybeans for food processors, feed manufacturers, and commodity importers.",
    mandatoryDocs: ["Phytosanitary Certificate", "Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Fumigation Certificate"],
  },
  {
    name: "Lentils",
    slug: "lentils",
    image: "/agriculture/lentils.jpg",
    seller: "Global Pulse Traders Ltd",
    country: "India",
    category: "Pulses & Oilseeds",
    price: "Price on Request",
    moq: "25 MT",
    capacity: "4,000 MT / Month",
    description:
      "Export-quality lentils for wholesalers, food importers, and retail distribution chains.",
    mandatoryDocs: ["Phytosanitary Certificate", "Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Fumigation Certificate"],
  },
  {
    name: "Cashew Nuts",
    slug: "cashew-nuts",
    image: "/agriculture/cashew-nuts.jpg",
    seller: "Premium Nut Exporters International",
    country: "India",
    category: "Nuts",
    price: "Price on Request",
    moq: "1 MT",
    capacity: "450 MT / Month",
    description:
      "Premium cashew nuts for wholesalers, food brands, snack manufacturers, and distributors.",
    mandatoryDocs: ["Phytosanitary Certificate", "Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Fumigation Certificate"],
  },
  {
    name: "Turmeric",
    slug: "turmeric",
    image: "/agriculture/turmeric.jpg",
    seller: "Golden Root Spice Company",
    country: "India",
    category: "Spices",
    price: "Price on Request",
    moq: "2 MT",
    capacity: "650 MT / Month",
    description:
      "Export-ready turmeric for spice importers, food processors, and health product manufacturers.",
    mandatoryDocs: ["Phytosanitary Certificate", "Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Spices Board Registration", "Organic Certification"],
  },
  {
    name: "Ginger",
    slug: "ginger",
    image: "/agriculture/ginger.jpg",
    seller: "Fresh Root Agricultural Trading",
    country: "India",
    category: "Spices",
    price: "Price on Request",
    moq: "2 MT",
    capacity: "500 MT / Month",
    description:
      "Fresh ginger for food importers, spice companies, wholesalers, and international markets.",
    mandatoryDocs: ["Phytosanitary Certificate", "Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Organic Certification"],
  },
  {
    name: "Garlic",
    slug: "garlic",
    image: "/agriculture/garlic.jpg",
    seller: "White Pearl Produce Exporters",
    country: "India",
    category: "Vegetables",
    price: "Price on Request",
    moq: "3 MT",
    capacity: "750 MT / Month",
    description:
      "Fresh garlic for wholesalers, food manufacturers, distributors, and global importers.",
    mandatoryDocs: ["Phytosanitary Certificate", "Laboratory Test Report", "Food Safety Certificate", "Business Registration Proof"],
    optionalDocs: ["Cold Treatment Certificate"],
  },
];

const categories = [
  "All",
  "Grains",
  "Vegetables",
  "Fruits",
  "Spices",
  "Plantation Crops",
  "Pulses & Oilseeds",
  "Nuts",
  "Fiber Crops",
  "Industrial Crops",
];

const quickAiQuestions = [
  "Which documents are mandatory?",
  "Find rice exporters from India",
  "Explain phytosanitary certificate",
  "What do I need for UAE import?",
  "Compare suppliers",
  "Prepare RFQ for mangoes",
];

export default function AgricultureMarketplacePage() {
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [aiOpen, setAiOpen] = useState(false);
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState(
    "I can explain agriculture documents, supplier verification, export readiness, and buyer sourcing requirements. Advanced supplier matching unlocks with Buyer Subscription."
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        activeCategory === "All" || product.category === activeCategory;

      const q = search.toLowerCase();
      const searchMatch =
        product.name.toLowerCase().includes(q) ||
        product.seller.toLowerCase().includes(q) ||
        product.country.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const askHxn = (question?: string) => {
    const q = question || aiQuestion;

    if (!q.trim()) {
      setAiAnswer("Type a product, country, document, or sourcing question first.");
      return;
    }

    setAiAnswer(
      `HXN AI preview: For "${q}", I can guide you with supplier discovery, mandatory documents, optional certificates, RFQ preparation, and trade-readiness checks. Premium supplier comparison, demand intelligence, and risk analysis unlock with Buyer Subscription.`
    );
  };

  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.gridBg} />
      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />
      <div style={styles.glowThree} />

      <button
        type="button"
        className="floating-ai"
        style={styles.floatingAi}
        onClick={() => setAiOpen(true)}
      >
        HXN AI Help
      </button>

      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <div style={styles.badge}>IMPEXVIAA AGRICULTURE MARKETPLACE</div>

          <h1 style={styles.title}>
            Source verified agricultural products from trusted exporters.
          </h1>

          <p style={styles.subtitle}>
            Explore buyer-ready agricultural products, verified supplier profiles,
            compliance documents, export capacity, MOQ details, and HXN AI-powered
            sourcing intelligence for global trade.
          </p>

          <div style={styles.searchBox}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search rice, spices, mangoes, cotton, garlic..."
              style={styles.searchInput}
            />

            <button
              type="button"
              style={styles.searchButton}
              onClick={() =>
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Search Marketplace
            </button>
          </div>

          <div style={styles.statsGrid}>
            <Stat value="20+" label="Agriculture products" />
            <Stat value="4+" label="Core documents" />
            <Stat value="HXN" label="AI trade assistant" />
            <Stat value="Global" label="buyer access" />
          </div>
        </div>

        <div style={styles.heroRight}>
          <div className="hero-orb" style={styles.heroOrb}>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />

            <div style={styles.aiHeroCard}>
              <img src="/ai-card-hxn.mp4" alt="" style={{ display: "none" }} />
              <div style={styles.aiRobotFallback}>🤖</div>
              <h2 style={styles.aiHeroTitle}>HXN AI Trade Intelligence</h2>
              <p style={styles.aiHeroText}>
                Supplier discovery, documents, RFQ guidance, and buyer sourcing support.
              </p>
            </div>

            <span className="chip chip-one">Rice</span>
            <span className="chip chip-two">Spices</span>
            <span className="chip chip-three">Mangoes</span>
            <span className="chip chip-four">Cotton</span>
          </div>
        </div>
      </section>

      <section style={styles.categoryBar}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            style={{
              ...styles.categoryButton,
              ...(activeCategory === category ? styles.categoryActive : {}),
            }}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </section>

      <section id="products" style={styles.productsSection}>
        <div style={styles.sectionHeader}>
          <div>
            <p style={styles.kicker}>FEATURED AGRICULTURAL PRODUCTS</p>
            <h2 style={styles.sectionTitle}>Buyer-ready product opportunities</h2>
          </div>
          <p style={styles.sectionText}>
            Each product includes a sample exporter profile, MOQ, capacity,
            and required agriculture trade documents.
          </p>
        </div>

        <div style={styles.productGrid}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              onView={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </section>

      <section style={styles.aiSection}>
        <div style={styles.aiPanel}>
          <div>
            <p style={styles.kicker}>HXN AI TRADE INTELLIGENCE</p>
            <h2 style={styles.aiSectionTitle}>Ask HXN what you want to import.</h2>
            <p style={styles.aiSectionText}>
              HXN AI can help buyers understand required documents, supplier
              verification, RFQ preparation, category compliance, and sourcing direction.
            </p>
          </div>

          <div style={styles.aiInputWrap}>
            <input
              value={aiQuestion}
              onChange={(e) => setAiQuestion(e.target.value)}
              placeholder="Example: Find turmeric suppliers from India exporting to Germany"
              style={styles.aiInput}
            />
            <button type="button" style={styles.aiAskButton} onClick={() => askHxn()}>
              Ask HXN AI
            </button>
          </div>

          <div style={styles.quickGrid}>
            {quickAiQuestions.map((q) => (
              <button
                key={q}
                type="button"
                style={styles.quickButton}
                onClick={() => {
                  setAiQuestion(q);
                  askHxn(q);
                }}
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.aiAnswerPanel}>
          <div style={styles.aiFace}>HXN</div>
          <p style={styles.aiAnswer}>{aiAnswer
          }</p>

          <button
            type="button"
            style={styles.unlockButton}
            onClick={() => router.push("/subscription/buyer")}
          >
            Unlock Buyer AI Access
          </button>
        </div>
      </section>

      <section style={styles.trustSection}>
        <div style={styles.sectionHeader}>
          <div>
            <p style={styles.kicker}>WHY BUYERS TRUST IMPEXVIAA</p>
            <h2 style={styles.sectionTitle}>Built for serious international trade</h2>
          </div>

          <p style={styles.sectionText}>
            IMPEXVIAA helps buyers review suppliers with document mapping,
            product readiness, exporter identity, and AI-powered sourcing support.
          </p>
        </div>

        <div style={styles.trustGrid}>
          <TrustCard title="Verified Exporters" text="Supplier profiles are structured with business identity and trade-readiness signals." />
          <TrustCard title="Document Mapping" text="Every agriculture product shows mandatory and optional export documents." />
          <TrustCard title="HXN AI Guidance" text="Buyers can understand sourcing, documents, RFQs, and category compliance." />
          <TrustCard title="RFQ Ready" text="Products are prepared for quotation requests and future buyer-seller workflows." />
          <TrustCard title="Global Trade Focus" text="Built for importers, exporters, wholesalers, and sourcing teams." />
          <TrustCard title="Future Secure Trade" text="Designed for future trust score, verification, and payment protection layers." />
        </div>
      </section>

      <section style={styles.supplierSection}>
        <div style={styles.sectionHeader}>
          <div>
            <p style={styles.kicker}>FEATURED EXPORTERS</p>
            <h2 style={styles.sectionTitle}>Sample agriculture supplier showcase</h2>
          </div>
        </div>

        <div style={styles.supplierGrid}>
          {products.slice(0, 6).map((product) => (
            <div key={product.slug} style={styles.supplierCard}>
              <div style={styles.supplierBadge}>
                <span style={styles.verifiedDot} />
                VERIFIED EXPORTER
              </div>

              <h3 style={styles.supplierName}>{product.seller}</h3>
              <p style={styles.supplierCountry}>{product.country}</p>

              <p style={styles.supplierText}>
                Export-ready agriculture supplier profile prepared for global buyers,
                RFQs, compliance checks, and sourcing conversations.
              </p>

              <button
                type="button"
                style={styles.supplierButton}
                onClick={() => setSelectedProduct(product)}
              >
                View Supplier Products
              </button>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.ctaSection}>
        <div style={styles.ctaCard}>
          <p style={styles.kicker}>READY TO SOURCE?</p>

          <h2 style={styles.ctaTitle}>
            Discover agricultural exporters and unlock HXN AI sourcing intelligence.
          </h2>

          <p style={styles.ctaText}>
            Browse products now. Later, each supplier will connect to a dedicated
            buyer-facing shop page with verified documents, RFQ options, chat, and
            supplier intelligence.
          </p>

          <div style={styles.ctaButtons}>
            <button
              type="button"
              style={styles.primaryButton}
              onClick={() => router.push("/subscription/buyer")}
            >
              Buyer Subscription
            </button>

            <button
              type="button"
              style={styles.secondaryButton}
              onClick={() => router.push("/")}
            >
              Return Home
            </button>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div style={styles.modalOverlay} onClick={() => setSelectedProduct(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              style={styles.modalClose}
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div style={styles.modalGrid}>
              <div style={styles.modalImageBox}>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  style={styles.modalImage}
                />
              </div>

              <div>
                <p style={styles.kicker}>PRODUCT DETAILS</p>
                <h2 style={styles.modalTitle}>{selectedProduct.name}</h2>

                <p style={styles.modalSeller}>{selectedProduct.seller}</p>

                <div style={styles.modalStats}>
                  <span>Country: {selectedProduct.country}</span>
                  <span>MOQ: {selectedProduct.moq}</span>
                  <span>Capacity: {selectedProduct.capacity}</span>
                  <span>{selectedProduct.price}</span>
                </div>

                <p style={styles.modalDesc}>{selectedProduct.description}</p>

                <div style={styles.docColumns}>
                  <div style={styles.docBox}>
                    <h3 style={styles.docTitle}>Mandatory Documents</h3>
                    {selectedProduct.mandatoryDocs.map((doc) => (
                      <div key={doc} style={styles.docItem}>✓ {doc}</div>
                    ))}
                  </div>

                  <div style={styles.docBox}>
                    <h3 style={styles.docTitle}>Optional Documents</h3>
                    {selectedProduct.optionalDocs.map((doc) => (
                      <div key={doc} style={styles.docItem}>✓ {doc}</div>
                    ))}
                  </div>
                </div>

                <div style={styles.modalButtons}>
                  <button
                    type="button"
                    style={styles.primaryButton}
                    onClick={() => router.push("/subscription/buyer")}
                  >
                    Request Quotation
                  </button>

                  <button
                    type="button"
                    style={styles.secondaryButton}
                    onClick={() => setAiOpen(true)}
                  >
                    Ask HXN AI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {aiOpen && (
        <div style={styles.aiOverlay}>
          <div style={styles.aiModal}>
            <div style={styles.aiModalBar} />

            <button
              type="button"
              style={styles.aiClose}
              onClick={() => setAiOpen(false)}
            >
              ×
            </button>

            <div style={styles.aiModalHeader}>
              <div style={styles.aiAvatar} />
              <div>
                <h2 style={styles.aiModalTitle}>HXN AI Legal Help</h2>
                <p style={styles.aiModalSub}>
                  Ask about documents, compliance, export country rules and verification.
                </p>
              </div>
            </div>

            <div style={styles.aiModalAnswer}>{aiAnswer}</div>

            <div style={styles.aiQuickGrid}>
              {quickAiQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  style={styles.aiQuickButton}
                  onClick={() => {
                    setAiQuestion(q);
                    askHxn(q);
                  }}
                >
                  {q}
                </button>
              ))}
            </div>

            <textarea
              placeholder="Type your agriculture sourcing question here..."
              value={aiQuestion}
              onChange={(e) => setAiQuestion(e.target.value)}
              style={styles.aiTextarea}
            />

            <button
              type="button"
              style={styles.aiSendButton}
              onClick={() => askHxn()}
            >
              Send Message
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={styles.statCard}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function ProductCard({ product, onView }: { product: Product; onView: () => void }) {
  return (
    <div className="product-card" style={styles.productCard}>
      <div style={styles.productImageWrap}>
        <img src={product.image} alt={product.name} style={styles.productImage} />
        <span style={styles.productBadge}>Verified Supplier</span>
      </div>

      <div style={styles.productBody}>
        <p style={styles.productCategory}>{product.category}</p>
        <h3 style={styles.productTitle}>{product.name}</h3>

        <p style={styles.productSeller}>{product.seller}</p>

        <div style={styles.productMeta}>
          <span>{product.country}</span>
          <span>MOQ: {product.moq}</span>
        </div>

        <p style={styles.productDesc}>{product.description}</p>

        <div style={styles.documentMini}>
          <span>{product.mandatoryDocs.length} Mandatory Docs</span>
          <span>{product.optionalDocs.length} Optional Docs</span>
        </div>

        <div style={styles.productFooter}>
          <strong>{product.price}</strong>
          <button type="button" style={styles.viewButton} onClick={onView}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

function TrustCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="trust-card" style={styles.trustCard}>
      <div style={styles.trustIcon}>✓</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

const css = `
html, body {
  background:#020617 !important;
}

@keyframes floatAi {
  0%,100% { transform: translateY(0); box-shadow:0 18px 60px rgba(34,211,238,.35); }
  50% { transform: translateY(-5px); box-shadow:0 26px 90px rgba(124,58,237,.42); }
}

@keyframes orbit {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes chipFloat {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes glowPulse {
  0%,100% { opacity:.5; }
  50% { opacity:1; }
}

.product-card,
.trust-card {
  transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease;
}

.product-card:hover,
.trust-card:hover {
  transform: translateY(-8px);
  border-color: rgba(34,211,238,.48) !important;
  box-shadow: 0 35px 120px rgba(0,0,0,.55) !important;
}

.product-card:hover img {
  transform: scale(1.06);
}

.floating-ai {
  animation: floatAi 2.4s ease-in-out infinite;
}

.hero-orb {
  animation: glowPulse 4s ease-in-out infinite;
}

.orbit {
  position:absolute;
  border-radius:50%;
  border:1px solid rgba(125,211,252,.18);
  animation: orbit 14s linear infinite;
}

.orbit-one { inset:35px; }
.orbit-two { inset:75px; animation-duration:20s; animation-direction:reverse; }
.orbit-three { inset:115px; animation-duration:28s; }

.chip {
  position:absolute;
  padding:11px 16px;
  border-radius:999px;
  background:rgba(255,255,255,.10);
  border:1px solid rgba(255,255,255,.16);
  backdrop-filter:blur(18px);
  color:#dbeafe;
  font-weight:900;
  animation: chipFloat 3.8s ease-in-out infinite;
}

.chip-one { top:12%; left:10%; }
.chip-two { top:20%; right:8%; animation-delay:.5s; }
.chip-three { bottom:18%; left:8%; animation-delay:1s; }
.chip-four { bottom:12%; right:12%; animation-delay:1.5s; }

button {
  transition: transform .25s ease, box-shadow .25s ease;
}

button:hover {
  transform: translateY(-3px);
}

@media(max-width: 900px) {
  .hero-responsive {
    grid-template-columns:1fr !important;
  }
}

@media(max-width: 760px) {
  main {
    padding:42px 16px 100px !important;
  }
}
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top,#0b3b32 0%,#071d2d 42%,#020617 100%)",
    color: "#fff",
    padding: "64px 20px 120px",
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
    position: "relative",
    overflowX: "hidden",
  },

  gridBg: {
    position: "absolute",
    inset: 0,
    opacity: 0.07,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
    backgroundSize: "80px 80px",
  },

  glowOne: {
    position: "absolute",
    top: -220,
    right: -120,
    width: 640,
    height: 640,
    borderRadius: "50%",
    background: "rgba(34,211,238,.16)",
    filter: "blur(140px)",
  },

  glowTwo: {
    position: "absolute",
    bottom: 400,
    left: -190,
    width: 620,
    height: 620,
    borderRadius: "50%",
    background: "rgba(214,181,109,.14)",
    filter: "blur(140px)",
  },

  glowThree: {
    position: "absolute",
    top: "45%",
    right: -180,
    width: 560,
    height: 560,
    borderRadius: "50%",
    background: "rgba(124,58,237,.13)",
    filter: "blur(140px)",
  },

  floatingAi: {
    position: "fixed",
    right: 18,
    bottom: 24,
    zIndex: 70,
    border: "none",
    borderRadius: 999,
    padding: "16px 22px",
    background: "linear-gradient(135deg,#7c3aed,#2563eb,#06b6d4)",
    color: "#fff",
    fontWeight: 950,
    cursor: "pointer",
  },

  hero: {
    maxWidth: 1260,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.05fr .95fr",
    gap: 34,
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  },

  heroLeft: {
    minWidth: 0,
  },

  heroRight: {
    minWidth: 0,
  },

  badge: {
    display: "inline-flex",
    padding: "12px 22px",
    borderRadius: 999,
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(214,181,109,.26)",
    color: "#d6b56d",
    fontWeight: 950,
    letterSpacing: 3,
    fontSize: 12,
    marginBottom: 26,
  },

  title: {
    margin: 0,
    fontSize: "clamp(46px,8vw,88px)",
    lineHeight: 0.95,
    letterSpacing: "-4px",
    fontWeight: 950,
    maxWidth: 900,
  },

  subtitle: {
    marginTop: 28,
    color: "#cbd5e1",
    fontSize: "clamp(18px,3vw,24px)",
    lineHeight: 1.65,
    fontWeight: 650,
    maxWidth: 850,
  },

  searchBox: {
    marginTop: 30,
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: 12,
    padding: 10,
    borderRadius: 999,
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(255,255,255,.12)",
    backdropFilter: "blur(20px)",
  },

  searchInput: {
    minHeight: 58,
    border: "none",
    outline: "none",
    background: "transparent",
    color: "#fff",
    padding: "0 18px",
    fontSize: 16,
  },

  searchButton: {
    border: "none",
    borderRadius: 999,
    padding: "0 24px",
    background: "linear-gradient(135deg,#d6b56d,#22d3ee)",
    color: "#020617",
    fontWeight: 950,
    cursor: "pointer",
  },

  statsGrid: {
    marginTop: 26,
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 12,
  },

  statCard: {
    minHeight: 86,
    borderRadius: 22,
    background: "rgba(255,255,255,.07)",
    border: "1px solid rgba(255,255,255,.10)",
    display: "grid",
    placeItems: "center",
    textAlign: "center",
    padding: 12,
    backdropFilter: "blur(18px)",
  },

  heroOrb: {
    minHeight: 560,
    borderRadius: 46,
    background:
      "linear-gradient(145deg,rgba(15,23,42,.86),rgba(6,31,27,.82))",
    border: "1px solid rgba(125,211,252,.20)",
    boxShadow: "0 45px 140px rgba(0,0,0,.55)",
    position: "relative",
    overflow: "hidden",
    display: "grid",
    placeItems: "center",
  },

  aiHeroCard: {
    width: "min(390px,82%)",
    padding: 34,
    borderRadius: 34,
    background: "linear-gradient(145deg,#ffffff,#eef7ff)",
    color: "#020617",
    boxShadow: "0 35px 100px rgba(34,211,238,.22)",
    textAlign: "center",
    position: "relative",
    zIndex: 3,
  },

  aiRobotFallback: {
    fontSize: 74,
    marginBottom: 14,
  },

  aiHeroTitle: {
    margin: 0,
    fontSize: 34,
    fontWeight: 950,
    letterSpacing: "-1px",
  },

  aiHeroText: {
    color: "#334155",
    lineHeight: 1.6,
    fontWeight: 750,
  },

  categoryBar: {
    maxWidth: 1260,
    margin: "48px auto 0",
    display: "flex",
    gap: 12,
    overflowX: "auto",
    padding: "8px 0 14px",
    position: "relative",
    zIndex: 2,
  },

  categoryButton: {
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: 999,
    background: "rgba(255,255,255,.07)",
    color: "#dbeafe",
    padding: "13px 18px",
    fontWeight: 900,
    whiteSpace: "nowrap",
    cursor: "pointer",
  },

  categoryActive: {
    background: "linear-gradient(135deg,#d6b56d,#22d3ee)",
    color: "#020617",
    borderColor: "transparent",
  },

  productsSection: {
    maxWidth: 1260,
    margin: "56px auto 0",
    position: "relative",
    zIndex: 2,
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: 24,
    alignItems: "flex-end",
    marginBottom: 28,
  },

  kicker: {
    margin: 0,
    color: "#d6b56d",
    fontSize: 12,
    fontWeight: 950,
    letterSpacing: 3,
  },

  sectionTitle: {
    margin: "12px 0 0",
    fontSize: "clamp(34px,5vw,64px)",
    lineHeight: 1,
    letterSpacing: "-2px",
    fontWeight: 950,
  },

  sectionText: {
    maxWidth: 460,
    color: "#cbd5e1",
    lineHeight: 1.7,
    fontWeight: 650,
  },

  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: 22,
  },

  productCard: {
    borderRadius: 34,
    background:
      "linear-gradient(145deg,rgba(255,255,255,.09),rgba(255,255,255,.035))",
    border: "1px solid rgba(255,255,255,.11)",
    overflow: "hidden",
    boxShadow: "0 26px 90px rgba(0,0,0,.34)",
    backdropFilter: "blur(20px)",
  },

  productImageWrap: {
    height: 230,
    position: "relative",
    overflow: "hidden",
    background: "#fff",
  },

  productImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: ".45s ease",
  },

  productBadge: {
    position: "absolute",
    top: 16,
    left: 16,
    padding: "9px 12px",
    borderRadius: 999,
    background: "rgba(2,6,23,.78)",
    color: "#bbf7d0",
    fontWeight: 900,
    fontSize: 12,
    backdropFilter: "blur(18px)",
  },

  productBody: {
    padding: 24,
  },

  productCategory: {
    margin: 0,
    color: "#7dd3fc",
    fontWeight: 950,
    fontSize: 12,
    letterSpacing: 2,
  },

  productTitle: {
    margin: "8px 0 8px",
    fontSize: 28,
    fontWeight: 950,
    letterSpacing: "-1px",
  },

  productSeller: {
    color: "#dbeafe",
    fontWeight: 800,
    lineHeight: 1.4,
  },

  productMeta: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    color: "#cbd5e1",
    fontSize: 14,
    marginTop: 12,
  },

  productDesc: {
    color: "#cbd5e1",
    lineHeight: 1.6,
    minHeight: 76,
  },

  documentMini: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    marginTop: 14,
  },

  productFooter: {
    marginTop: 18,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 14,
  },

  viewButton: {
    border: "none",
    borderRadius: 999,
    padding: "12px 16px",
    background: "linear-gradient(135deg,#d6b56d,#22d3ee)",
    color: "#020617",
    fontWeight: 950,
    cursor: "pointer",
  },

  aiSection: {
    maxWidth: 1260,
    margin: "70px auto 0",
    display: "grid",
    gridTemplateColumns: "1.15fr .85fr",
    gap: 24,
    position: "relative",
    zIndex: 2,
  },

  aiPanel: {
    padding: 34,
    borderRadius: 38,
    background:
      "linear-gradient(145deg,rgba(15,23,42,.78),rgba(6,31,27,.70))",
    border: "1px solid rgba(125,211,252,.20)",
    backdropFilter: "blur(22px)",
  },

  aiSectionTitle: {
    margin: "12px 0",
    fontSize: "clamp(36px,5vw,62px)",
    lineHeight: 1,
    letterSpacing: "-2px",
    fontWeight: 950,
  },

  aiSectionText: {
    color: "#cbd5e1",
    lineHeight: 1.8,
    fontWeight: 650,
    maxWidth: 740,
  },

  aiInputWrap: {
    marginTop: 26,
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: 12,
  },

  aiInput: {
    minHeight: 62,
    borderRadius: 20,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.07)",
    color: "#fff",
    padding: "0 18px",
    outline: "none",
    fontSize: 15,
  },

  aiAskButton: {
    border: "none",
    borderRadius: 20,
    padding: "0 22px",
    background: "linear-gradient(135deg,#7c3aed,#2563eb,#06b6d4)",
    color: "#fff",
    fontWeight: 950,
    cursor: "pointer",
  },

  quickGrid: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))",
    gap: 10,
  },

  quickButton: {
    minHeight: 52,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.06)",
    color: "#dbeafe",
    fontWeight: 850,
    cursor: "pointer",
  },

  aiAnswerPanel: {
    padding: 34,
    borderRadius: 38,
    background: "linear-gradient(145deg,#ffffff,#eef7ff)",
    color: "#020617",
    boxShadow: "0 35px 100px rgba(34,211,238,.22)",
  },

  aiFace: {
    width: 80,
    height: 80,
    borderRadius: 26,
    background: "linear-gradient(135deg,#020617,#0f172a)",
    color: "#7dd3fc",
    display: "grid",
    placeItems: "center",
    fontWeight: 950,
    marginBottom: 18,
  },

  aiAnswer: {
    lineHeight: 1.75,
    fontWeight: 800,
    color: "#0f172a",
  },

  unlockButton: {
    width: "100%",
    minHeight: 58,
    borderRadius: 20,
    border: "none",
    background: "linear-gradient(135deg,#7c3aed,#2563eb,#06b6d4)",
    color: "#fff",
    fontWeight: 950,
    cursor: "pointer",
    marginTop: 18,
  },

  trustSection: {
    maxWidth: 1260,
    margin: "70px auto 0",
    position: "relative",
    zIndex: 2,
  },

  trustGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 18,
  },

  trustCard: {
    padding: 28,
    borderRadius: 30,
    background: "rgba(255,255,255,.07)",
    border: "1px solid rgba(255,255,255,.11)",
    backdropFilter: "blur(20px)",
  },

  trustIcon: {
    width: 44,
    height: 44,
    borderRadius: 16,
    background: "linear-gradient(135deg,#22d3ee,#d6b56d)",
    color: "#020617",
    display: "grid",
    placeItems: "center",
    fontWeight: 950,
    marginBottom: 16,
  },

  supplierSection: {
    maxWidth: 1260,
    margin: "70px auto 0",
    position: "relative",
    zIndex: 2,
  },

  supplierGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: 18,
  },

  supplierCard: {
    padding: 28,
    borderRadius: 30,
    background:
      "linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.035))",
    border: "1px solid rgba(255,255,255,.11)",
    backdropFilter: "blur(20px)",
  },

  supplierBadge: {
    color: "#bbf7d0",
    fontWeight: 950,
    fontSize: 12,
    letterSpacing: 2,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },

  verifiedDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "#22c55e",
    boxShadow: "0 0 18px rgba(34,197,94,.8)",
  },

  supplierName: {
    fontSize: 24,
    lineHeight: 1.15,
    marginBottom: 8,
  },

  supplierCountry: {
    color: "#7dd3fc",
    fontWeight: 900,
  },

  supplierText: {
    color: "#cbd5e1",
    lineHeight: 1.7,
  },

  supplierButton: {
    marginTop: 16,
    width: "100%",
    minHeight: 52,
    borderRadius: 18,
    border: "none",
    background: "rgba(255,255,255,.10)",
    color: "#fff",
    fontWeight: 950,
    cursor: "pointer",
  },

  ctaSection: {
    maxWidth: 1260,
    margin: "70px auto 0",
    position: "relative",
    zIndex: 2,
  },

  ctaCard: {
    padding: "46px 34px",
    borderRadius: 42,
    background:
      "linear-gradient(135deg,rgba(214,181,109,.14),rgba(34,211,238,.12))",
    border: "1px solid rgba(214,181,109,.22)",
    textAlign: "center",
    backdropFilter: "blur(22px)",
  },

  ctaTitle: {
    fontSize: "clamp(36px,6vw,68px)",
    lineHeight: 1,
    letterSpacing: "-2px",
    margin: "14px auto",
    maxWidth: 900,
    fontWeight: 950,
  },

  ctaText: {
    color: "#dbeafe",
    lineHeight: 1.8,
    maxWidth: 800,
    margin: "0 auto",
    fontWeight: 650,
  },

  ctaButtons: {
    marginTop: 26,
    display: "flex",
    justifyContent: "center",
    gap: 14,
    flexWrap: "wrap",
  },

  primaryButton: {
    minHeight: 58,
    borderRadius: 999,
    border: "none",
    padding: "0 24px",
    background: "linear-gradient(135deg,#d6b56d,#22d3ee)",
    color: "#020617",
    fontWeight: 950,
    cursor: "pointer",
  },

  secondaryButton: {
    minHeight: 58,
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.16)",
    padding: "0 24px",
    background: "rgba(255,255,255,.08)",
    color: "#fff",
    fontWeight: 950,
    cursor: "pointer",
  },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(2,6,23,.78)",
    backdropFilter: "blur(16px)",
    zIndex: 100,
    display: "grid",
    placeItems: "center",
    padding: 18,
  },

 modal: {
    width: "min(1050px,100%)",
    maxHeight: "92vh",
    overflowY: "auto",
    borderRadius: 40,
    background:
      "linear-gradient(145deg,rgba(15,23,42,.98),rgba(6,31,27,.95))",
    border: "1px solid rgba(125,211,252,.24)",
    padding: 26,
    position: "relative",
    boxShadow: "0 45px 140px rgba(0,0,0,.65)",
  },

  modalClose: {
    position: "absolute",
    top: 18,
    right: 18,
    width: 52,
    height: 52,
    borderRadius: "50%",
    border: "none",
    background: "#fff",
    color: "#020617",
    fontSize: 30,
    cursor: "pointer",
    zIndex: 2,
  },

  modalGrid: {
    display: "grid",
    gridTemplateColumns: "0.9fr 1.1fr",
    gap: 26,
  },

  modalImageBox: {
    borderRadius: 30,
    overflow: "hidden",
    background: "#fff",
    minHeight: 420,
  },

  modalImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  modalTitle: {
    fontSize: "clamp(36px,5vw,58px)",
    margin: "12px 0",
    lineHeight: 1,
    fontWeight: 950,
  },

  modalSeller: {
    color: "#7dd3fc",
    fontWeight: 950,
    fontSize: 20,
  },

  modalStats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
    gap: 10,
    margin: "18px 0",
  },

  modalDesc: {
    color: "#dbeafe",
    lineHeight: 1.75,
    fontWeight: 650,
  },

  docColumns: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
    marginTop: 18,
  },

  docBox: {
    padding: 18,
    borderRadius: 22,
    background: "rgba(255,255,255,.07)",
    border: "1px solid rgba(255,255,255,.10)",
  },

  docTitle: {
    marginTop: 0,
  },

  docItem: {
    color: "#dbeafe",
    lineHeight: 1.7,
    fontWeight: 750,
  },

  modalButtons: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 22,
  },

  aiOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(2,6,23,.72)",
    backdropFilter: "blur(14px)",
    zIndex: 120,
    display: "grid",
    placeItems: "center",
    padding: 18,
  },

  aiModal: {
    width: "min(760px,100%)",
    maxHeight: "92vh",
    overflowY: "auto",
    borderRadius: 40,
    padding: 34,
    background: "linear-gradient(135deg,#ffffff,#f8fbff,#eef7ff)",
    color: "#020617",
    position: "relative",
    boxShadow: "0 40px 120px rgba(0,0,0,.5)",
  },

  aiModalBar: {
    width: 120,
    height: 10,
    borderRadius: 999,
    background: "#cbd5e1",
    margin: "0 auto 26px",
  },

  aiClose: {
    position: "absolute",
    top: 22,
    right: 22,
    width: 58,
    height: 58,
    borderRadius: "50%",
    border: "none",
    background: "#020617",
    color: "#fff",
    fontSize: 36,
    cursor: "pointer",
  },

  aiModalHeader: {
    display: "flex",
    gap: 20,
    alignItems: "center",
    marginBottom: 22,
  },

  aiAvatar: {
    width: 78,
    height: 78,
    borderRadius: 26,
    background: "linear-gradient(135deg,#020617,#0f172a)",
    boxShadow: "0 0 45px rgba(34,211,238,.35)",
  },

  aiModalTitle: {
    fontSize: "clamp(34px,6vw,52px)",
    margin: 0,
    fontWeight: 950,
  },

  aiModalSub: {
    color: "#475569",
    fontSize: 17,
    lineHeight: 1.5,
  },

  aiModalAnswer: {
    padding: 24,
    borderRadius: 26,
    background: "#eef6ff",
    color: "#0f172a",
    fontWeight: 850,
    lineHeight: 1.7,
    marginBottom: 20,
  },

  aiQuickGrid: {
    display: "grid",
    gap: 12,
    marginBottom: 18,
  },

  aiQuickButton: {
    minHeight: 56,
    borderRadius: 20,
    border: "1px solid #cbd5e1",
    background: "#fff",
    color: "#020617",
    fontWeight: 900,
    cursor: "pointer",
  },

  aiTextarea: {
    width: "100%",
    minHeight: 120,
    borderRadius: 22,
    border: "1px solid #cbd5e1",
    background: "#fff",
    color: "#020617",
    padding: 18,
    fontSize: 16,
    lineHeight: 1.6,
    resize: "vertical",
    marginBottom: 18,
  },

  aiSendButton: {
    width: "100%",
    minHeight: 60,
    border: "none",
    borderRadius: 22,
    background: "linear-gradient(135deg,#9333ea,#2563eb,#06b6d4)",
    color: "#fff",
    fontWeight: 950,
    fontSize: 16,
    cursor: "pointer",
  },
};