"use client";

const tradeSteps = [
  {
    number: "01",
    title: "Market Research & Product Selection",
    text: "Every import-export business begins by identifying products with international demand, target markets, pricing opportunities, competitors, and trade regulations.",
    points: ["International demand", "Target countries", "Pricing", "Competitors", "Trade rules"],
  },
  {
    number: "02",
    title: "Supplier & Buyer Discovery",
    text: "Businesses search for manufacturers, suppliers, exporters, importers, distributors, and wholesale partners before starting trade communication.",
    points: ["Manufacturers", "Suppliers", "Exporters", "Importers", "Distributors"],
  },
  {
    number: "03",
    title: "Quotations & Negotiation",
    text: "Professional quotation discussions include product specifications, pricing, MOQ, packaging, shipping methods, payment terms, and delivery schedules.",
    points: ["MOQ", "Pricing", "Packaging", "Shipping", "Payment terms"],
  },
  {
    number: "04",
    title: "Verification & Compliance",
    text: "Companies verify supplier legitimacy, business registration, product certifications, export documents, and compliance requirements.",
    points: ["Verification", "Registration", "Certificates", "Compliance", "Documents"],
  },
  {
    number: "05",
    title: "Payment Processing",
    text: "International payments may include advance payments, wire transfers, letters of credit, escrow systems, and trade finance solutions.",
    points: ["Advance payment", "Wire transfer", "LC", "Escrow", "Trade finance"],
  },
  {
    number: "06",
    title: "Manufacturing & Production",
    text: "After payment confirmation, products are manufactured or prepared, quality checks are completed, packaging is finalized, and export documents are generated.",
    points: ["Production", "Quality checks", "Packaging", "Labelling", "Export docs"],
  },
  {
    number: "07",
    title: "Logistics & International Shipping",
    text: "Goods are shipped through sea freight, air cargo, road transport, or rail freight depending on urgency, product type, cost, and destination.",
    points: ["Sea freight", "Air cargo", "Road", "Rail", "Tracking"],
  },
  {
    number: "08",
    title: "Customs Clearance",
    text: "Customs authorities inspect shipments, duties, taxes, product standards, documentation accuracy, and import regulations before release.",
    points: ["Invoice", "Packing list", "Origin certificate", "Bill of lading", "Duties"],
  },
  {
    number: "09",
    title: "Final Delivery & Distribution",
    text: "After customs clearance, goods move to warehouses, distributors, retailers, importers, or final customers, completing the trade cycle.",
    points: ["Warehouse", "Distribution", "Retail", "Inventory", "Market growth"],
  },
];

const futureCards = [
  "AI-powered systems",
  "Digital sourcing",
  "Automated workflows",
  "Smart logistics",
  "Intelligent infrastructure",
  "Faster communication",
];

export default function HowGlobalTradeWorksPage() {
  return (
    <>
      <main className="tradePage">
        <section className="tradeHero">
          <div className="orb orbOne" />
          <div className="orb orbTwo" />
          <div className="orb orbThree" />
          <div className="gridOverlay" />

          <div className="heroInner">
            <div className="topBadge">GLOBAL IMPORT & EXPORT PROCESS</div>

            <h1>How Global Trade Works</h1>

            <p className="heroText">
              Global trade is the exchange of goods and services between countries through importing and exporting. It helps businesses source products internationally, access new markets, connect with manufacturers, and expand beyond local economies.
            </p>

            <p className="heroText secondary">
              Modern international commerce involves sourcing, negotiations, payments, logistics, documentation, customs clearance, and final delivery.
            </p>

            <div className="heroButtons">
              <a href="/marketplace/agriculture" className="primaryBtn">Explore Marketplace</a>
              <a href="/supplier-verification" className="secondaryBtn">Verify Suppliers</a>
            </div>
          </div>
        </section>

        <section className="introWrap">
          <div className="introCard animatedCard">
            <span>UNDERSTANDING GLOBAL TRADE</span>
            <h2>International trade is a structured journey from product selection to final delivery.</h2>
            <p>
              Understanding each stage helps businesses reduce risk, avoid supplier issues, manage payments safely, complete documentation correctly, and grow successfully in international markets.
            </p>
          </div>
        </section>

        <section className="timelineWrap">
          <div className="sectionHeading">
            <span>STEP BY STEP</span>
            <h2>The Complete Import & Export Workflow</h2>
          </div>

          <div className="timelineGrid">
            {tradeSteps.map((step, index) => (
              <div className="stepCard animatedCard" key={index}>
                <div className="stepNumber">{step.number}</div>
                <div className="stepContent">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>

                  <div className="chipGrid">
                    {step.points.map((point, i) => (
                      <span key={i}>{point}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="evolutionWrap">
          <div className="sectionHeading center">
            <span>THE EVOLUTION OF GLOBAL TRADE</span>
            <h2>From fragmented systems to intelligent global infrastructure.</h2>
          </div>

          <div className="compareGrid">
            <div className="compareCard old animatedCard">
              <h3>Traditional Trade</h3>
              <p>Manual, fragmented, time-consuming, dependent on intermediaries, and difficult for new businesses to enter confidently.</p>
            </div>

            <div className="compareCard new animatedCard">
              <h3>Modern Trade</h3>
              <p>AI-powered, digital, automated, transparent, faster, globally connected, and built around intelligent business infrastructure.</p>
            </div>
          </div>
        </section>

        <section className="futureWrap">
          <div className="futureCard animatedCard">
            <div className="sectionHeading center">
              <span>GLOBAL TRADE TODAY</span>
              <h2>Global commerce connects the world through international supply chains.</h2>
            </div>

            <p>
              Global commerce now connects manufacturers, exporters, importers, suppliers, distributors, retailers, logistics providers, and financial systems through highly interconnected international supply chains.
            </p>

            <div className="futureGrid">
              {futureCards.map((item, index) => (
                <div className="futureItem" key={index}>{item}</div>
              ))}
            </div>

            <div className="finalStatement">
              <h3>The Future of International Commerce</h3>
              <p>
                The future of global trade is smarter, faster, more automated, more transparent, AI-driven, and globally connected.
              </p>
              <span>IMPEXVIAA — Building Intelligent Global Trade Infrastructure.</span>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .tradePage {
          background: #020404;
          color: #ffffff;
          overflow-x: hidden;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .tradeHero {
          position: relative;
          min-height: 100vh;
          padding: 150px 24px 120px;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(0,255,204,0.24), transparent 34%),
            radial-gradient(circle at top right, rgba(0,94,255,0.22), transparent 36%),
            radial-gradient(circle at bottom, rgba(214,165,82,0.16), transparent 38%),
            #020404;
        }

        .heroInner {
          position: relative;
          z-index: 5;
          max-width: 1180px;
          margin: 0 auto;
          animation: revealHero 1s ease both;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.75;
          animation: floatOrb 8s ease-in-out infinite;
        }

        .orbOne {
          width: 340px;
          height: 340px;
          background: #00ffcc;
          top: -120px;
          left: -100px;
        }

        .orbTwo {
          width: 320px;
          height: 320px;
          background: #005eff;
          top: 40px;
          right: -120px;
          animation-delay: 2s;
        }

        .orbThree {
          width: 260px;
          height: 260px;
          background: #d6a552;
          bottom: 120px;
          right: 20%;
          animation-delay: 1s;
        }

        .gridOverlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 80px 80px;
          animation: gridMove 18s linear infinite;
          opacity: 0.8;
        }

        .topBadge {
          display: inline-flex;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.075);
          border: 1px solid rgba(255,255,255,0.16);
          font-size: 12px;
          letter-spacing: 2px;
          margin-bottom: 30px;
          backdrop-filter: blur(20px);
          box-shadow: 0 0 45px rgba(0,255,204,0.16);
        }

        h1 {
          font-size: clamp(58px, 10vw, 132px);
          line-height: 0.92;
          letter-spacing: -5px;
          max-width: 1000px;
          margin-bottom: 36px;
          font-weight: 900;
          background: linear-gradient(110deg, #ffffff, #dcfff8, #d6a552, #ffffff);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          color: transparent;
          animation: textShine 6s ease infinite;
        }

        .heroText {
          max-width: 930px;
          font-size: 22px;
          line-height: 1.75;
          color: rgba(255,255,255,0.86);
          margin-bottom: 24px;
        }

        .heroText.secondary {
          color: rgba(255,255,255,0.72);
        }

        .heroButtons {
          display: flex;
          gap: 18px;
          margin-top: 44px;
          flex-wrap: wrap;
        }

        .primaryBtn,
        .secondaryBtn {
          min-height: 64px;
          padding: 0 36px;
          border-radius: 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-weight: 850;
          position: relative;
          overflow: hidden;
          transition: 0.35s ease;
        }

        .primaryBtn {
          background: #ffffff;
          color: #050505;
        }

        .secondaryBtn {
          border: 1px solid rgba(255,255,255,0.18);
          color: white;
          background: rgba(255,255,255,0.055);
          backdrop-filter: blur(20px);
        }

        .primaryBtn::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.8), transparent);
          transform: translateX(-120%);
          animation: btnShine 3.8s infinite;
        }

        .primaryBtn:hover,
        .secondaryBtn:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 28px 80px rgba(255,255,255,0.18);
        }

        .introWrap,
        .timelineWrap,
        .evolutionWrap,
        .futureWrap {
          max-width: 1250px;
          margin: 0 auto;
          padding: 120px 24px;
        }

        .introCard,
        .stepCard,
        .compareCard,
        .futureCard {
          border-radius: 34px;
          background:
            radial-gradient(circle at top right, rgba(0,255,204,0.12), transparent 35%),
            linear-gradient(145deg, rgba(255,255,255,0.085), rgba(255,255,255,0.03));
          border: 1px solid rgba(255,255,255,0.11);
          backdrop-filter: blur(30px);
          box-shadow: 0 35px 110px rgba(0,0,0,0.45);
        }

        .introCard {
          padding: 58px;
        }

        .introCard span,
        .sectionHeading span,
        .futureCard span {
          color: #00ffcc;
          letter-spacing: 2px;
          font-size: 13px;
          font-weight: 900;
        }

        .introCard h2,
        .sectionHeading h2 {
          margin-top: 20px;
          font-size: clamp(42px, 6vw, 76px);
          line-height: 1.05;
          letter-spacing: -3px;
          color: white;
        }

        .introCard p,
        .futureCard p {
          margin-top: 28px;
          font-size: 21px;
          line-height: 1.85;
          color: rgba(255,255,255,0.88);
        }

        .sectionHeading {
          margin-bottom: 70px;
        }

        .center {
          text-align: center;
        }

        .sectionHeading.center h2 {
          margin-left: auto;
          margin-right: auto;
          max-width: 1000px;
        }

        .timelineGrid {
          display: grid;
          gap: 26px;
        }

        .stepCard {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 32px;
          padding: 36px;
          position: relative;
          overflow: hidden;
        }

        .stepCard::before {
          content: "";
          position: absolute;
          inset: -80%;
          background: linear-gradient(120deg, transparent, rgba(214,165,82,0.15), transparent);
          transform: rotate(25deg);
          animation: cardShine 7s infinite;
        }

        .stepNumber {
          position: relative;
          z-index: 2;
          width: 90px;
          height: 90px;
          border-radius: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,255,204,0.12);
          border: 1px solid rgba(0,255,204,0.28);
          color: #00ffcc;
          font-size: 30px;
          font-weight: 900;
          animation: numberPulse 3s ease-in-out infinite;
        }

        .stepContent {
          position: relative;
          z-index: 2;
        }

        .stepContent h3 {
          font-size: 32px;
          margin-bottom: 14px;
          color: #ffffff;
        }

        .stepContent p {
          font-size: 19px;
          line-height: 1.75;
          color: rgba(255,255,255,0.86);
        }

        .chipGrid {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .chipGrid span,
        .futureItem {
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.065);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.9);
          animation: chipFloat 4s ease-in-out infinite;
        }

        .compareGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .compareCard {
          padding: 42px;
        }

        .compareCard h3 {
          font-size: 34px;
          margin-bottom: 18px;
        }

        .compareCard p {
          font-size: 20px;
          line-height: 1.8;
          color: rgba(255,255,255,0.86);
        }

        .compareCard.old {
          background:
            radial-gradient(circle at top right, rgba(255,255,255,0.08), transparent 34%),
            linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025));
        }

        .compareCard.new {
          background:
            radial-gradient(circle at top right, rgba(0,255,204,0.16), transparent 34%),
            radial-gradient(circle at bottom left, rgba(214,165,82,0.12), transparent 34%),
            linear-gradient(145deg, rgba(255,255,255,0.085), rgba(255,255,255,0.03));
        }

        .futureCard {
          padding: 70px 42px;
          text-align: center;
        }

        .futureGrid {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
          margin-top: 40px;
        }

        .finalStatement {
          margin-top: 60px;
          padding: 36px;
          border-radius: 30px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(214,165,82,0.24);
        }

        .finalStatement h3 {
          font-size: 42px;
          color: #d6a552;
          margin-bottom: 18px;
        }

        .finalStatement span {
          display: block;
          margin-top: 24px;
          font-weight: 900;
          color: #00ffcc;
          font-size: 20px;
        }

        .animatedCard {
          animation: revealScroll 0.9s ease both;
          opacity: 1 !important;
          filter: none !important;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(34px) scale(1.12); }
        }

        @keyframes gridMove {
          from { background-position: 0 0; }
          to { background-position: 80px 80px; }
        }

        @keyframes revealHero {
          from { opacity: 0; transform: translateY(40px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes revealScroll {
          from { opacity: 0; transform: translateY(48px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes textShine {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes btnShine {
          0% { transform: translateX(-120%); }
          45% { transform: translateX(120%); }
          100% { transform: translateX(120%); }
        }

        @keyframes numberPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 rgba(0,255,204,0); }
          50% { transform: scale(1.08); box-shadow: 0 0 45px rgba(0,255,204,0.18); }
        }

        @keyframes chipFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes cardShine {
          0% { transform: translateX(-120%) rotate(25deg); }
          55% { transform: translateX(120%) rotate(25deg); }
          100% { transform: translateX(120%) rotate(25deg); }
        }

        @media (max-width: 980px) {
          .tradeHero {
            padding: 120px 20px 90px;
          }

          h1 {
            font-size: 62px;
            letter-spacing: -3px;
          }

          .heroText {
            font-size: 18px;
            line-height: 1.75;
          }

          .heroButtons {
            flex-direction: column;
            align-items: stretch;
          }

          .primaryBtn,
          .secondaryBtn {
            width: 100%;
          }

          .introWrap,
          .timelineWrap,
          .evolutionWrap,
          .futureWrap {
            padding: 90px 22px;
          }

          .introCard,
          .futureCard {
            padding: 34px 28px;
          }

          .stepCard {
            grid-template-columns: 1fr;
            gap: 22px;
            padding: 30px 26px;
          }

          .compareGrid {
            grid-template-columns: 1fr;
          }

          .introCard h2,
          .sectionHeading h2 {
            font-size: 44px;
            letter-spacing: -2px;
          }

          .stepContent h3 {
            font-size: 28px;
          }

          .stepContent p,
          .introCard p,
          .futureCard p,
          .compareCard p {
            font-size: 18px;
          }
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 48px;
            line-height: 0.98;
          }

          .topBadge {
            font-size: 10px;
            letter-spacing: 1.4px;
          }

          .introCard h2,
          .sectionHeading h2 {
            font-size: 38px;
          }

          .finalStatement h3 {
            font-size: 32px;
          }
        }
      `}</style>
    </>
  );
}