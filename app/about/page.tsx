export default function AboutPage() {
  const metrics = [
    {
      title: "AI",
      text: "Intelligent trade infrastructure powered by advanced AI systems.",
    },
    {
      title: "Global",
      text: "Cross-border marketplace connecting businesses worldwide.",
    },
    {
      title: "24/7",
      text: "International sourcing access without geographical limitations.",
    },
    {
      title: "HXN",
      text: "AI-powered business assistant for modern global trade.",
    },
  ];

  const problems = [
    "Fake suppliers",
    "Poor verification systems",
    "Payment uncertainty",
    "Unstructured sourcing communication",
    "Lack of digital trade infrastructure",
    "Limited international visibility",
  ];

  const marketplacePoints = [
    "Discover suppliers and buyers globally",
    "Build trusted business relationships",
    "Compare quotations professionally",
    "Access structured sourcing systems",
    "Create AI-powered stores",
    "Improve international visibility",
    "Scale confidently across borders",
  ];

  const tradepreneurUsers = [
    "Students",
    "Young entrepreneurs",
    "Freelancers",
    "Startup founders",
    "Future exporters and importers",
    "Creators building global brands",
  ];

  const hxnBuiltWith = [
    "Intelligent thinking capabilities",
    "AI-powered trade guidance",
    "Business workflow automation",
    "Supplier discovery systems",
    "Quotation generation tools",
    "Product organization systems",
    "AI-generated store infrastructure",
    "Global trade education systems",
  ];

  const hxnHelps = [
    "Learn import-export from the beginning",
    "Understand sourcing workflows",
    "Discover profitable niches",
    "Find suppliers",
    "Generate quotations",
    "Build AI-powered digital stores",
    "Create product listings",
    "Build global-ready brands",
    "Launch international businesses",
  ];

  const industries = [
    "Agriculture",
    "Pharmaceuticals",
    "Electronics",
    "Machinery",
    "Textiles",
    "Industrial goods",
    "Packaging",
    "Chemicals",
    "Metals",
    "Auto parts",
    "Consumer products",
    "More global categories",
  ];

  const coreCards = [
    {
      icon: "🌍",
      title: "Global Marketplace",
      text: "Discover suppliers, exporters, manufacturers, wholesalers, and buyers across industries including agriculture, pharmaceuticals, electronics, machinery, textiles, industrial goods, packaging, chemicals, metals, auto parts, consumer products, and more.",
    },
    {
      icon: "🤖",
      title: "HXN AI Assistant",
      text: "AI-powered business guidance designed to simplify sourcing, store generation, product management, quotations, and international trade workflows.",
    },
    {
      icon: "🛡️",
      title: "Supplier Verification Infrastructure",
      text: "Professional verification systems designed to improve transparency, buyer confidence, and trusted supplier relationships before business begins.",
    },
    {
      icon: "💳",
      title: "IMPEXVIAA Pay",
      text: "A future-focused payment infrastructure designed to support safer, smarter, and more trusted international trade transactions.",
    },
    {
      icon: "📦",
      title: "Structured Quotation System",
      text: "Professional quotation workflows that simplify negotiations, supplier communication, and sourcing management.",
    },
    {
      icon: "🚀",
      title: "AI-Generated Stores",
      text: "Businesses can instantly generate premium AI-powered digital stores with intelligent layouts, branding systems, product descriptions, and global-ready presentation.",
    },
  ];

  return (
    <>
      <main className="aboutPage">

        <section className="heroSection">
          <div className="orb orbOne" />
          <div className="orb orbTwo" />
          <div className="gridOverlay" />

          <div className="heroContent">

            <div className="topBadge">
              GLOBAL AI-POWERED B2B ECOSYSTEM
            </div>

            <h1>
              The Future of Intelligent Global Trade
            </h1>

            <p className="heroText">
              IMPEXVIAA is a next-generation AI-powered B2B import-export ecosystem designed to transform how businesses discover suppliers, build trusted trade relationships, manage sourcing, negotiate quotations, create digital stores, and scale internationally.
            </p>

            <p className="heroText secondary">
              Built for exporters, manufacturers, suppliers, startups, sourcing teams, wholesalers, and global buyers, IMPEXVIAA combines artificial intelligence, supplier verification, AI-generated stores, quotation infrastructure, payment systems, and global marketplace technology into one intelligent digital trade ecosystem.
            </p>

            <div className="quoteBox">
              <span />
              <p>
                We are not building just another B2B marketplace.
                <br />
                We are building the future infrastructure of global commerce.
              </p>
            </div>

            <div className="heroButtons">
              <a href="/" className="primaryBtn">
                Enter IMPEXVIAA
              </a>

              <a
                href="/ai-generated-stores"
                className="secondaryBtn"
              >
                Explore HXN AI
              </a>
            </div>

            <div className="metricsGrid">
              {metrics.map((item, index) => (
                <div key={index} className="metricCard">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        <section className="sectionWrap">
          <div className="sectionHeading">
            <span>WHY IMPEXVIAA EXISTS</span>
            <h2>Rebuilding International Trade for the Modern Era</h2>
          </div>

          <div className="glassCard">
            <p>
              Global trade still operates through fragmented systems, outdated sourcing methods, inefficient communication, supplier uncertainty, scattered quotation workflows, disconnected marketplaces, and trust issues between buyers and suppliers.
            </p>

            <p>
              Every year, businesses lose opportunities, money, and confidence because of:
            </p>

            <div className="problemGrid">
              {problems.map((item, index) => (
                <div key={index} className="problemItem">
                  {item}
                </div>
              ))}
            </div>

            <p>
              Even experienced companies and global traders can fall victim to unreliable business networks and international scams.
            </p>

            <p>
              Many ambitious entrepreneurs want to enter import-export but never begin because they do not know where to start, whom to trust, or how to scale globally.
            </p>

            <p>
              IMPEXVIAA was created to solve these challenges through intelligent systems, AI automation, verification infrastructure, business education, and trusted global trade workflows.
            </p>
          </div>
        </section>

        <section className="sectionWrap">
          <div className="sectionHeading">
            <span>TWO POWERFUL ECOSYSTEMS</span>
            <h2>One global vision powering businesses and entrepreneurs.</h2>
          </div>

          <div className="ecosystemGrid">

            <div className="ecosystemCard">
              <h3>1. Global Business Marketplace</h3>

              <p>
                A complete B2B ecosystem for existing businesses to:
              </p>

              <div className="bulletGrid">
                {marketplacePoints.map((item, index) => (
                  <div key={index} className="bulletItem">
                    {item}
                  </div>
                ))}
              </div>

              <p>
                IMPEXVIAA focuses on building a safer and smarter trade environment where businesses feel supported throughout the entire sourcing and trading process.
              </p>

              <div className="highlightText">
                Because global trade should not feel risky or uncertain.
              </div>
            </div>

            <div className="ecosystemCard">
              <h3>2. The IMPEXVIAA Tradepreneur Network</h3>

              <p>
                A next-generation ecosystem designed for:
              </p>

              <div className="bulletGrid">
                {tradepreneurUsers.map((item, index) => (
                  <div key={index} className="bulletItem">
                    {item}
                  </div>
                ))}
              </div>

              <p>
                This segment focuses on helping people build international businesses completely from scratch using AI-powered guidance and intelligent trade systems.
              </p>
            </div>

          </div>
        </section>

        <section className="sectionWrap">
          <div className="sectionHeading">
            <span>INTRODUCING HXN AI</span>
            <h2>The Intelligent Trade & Business Assistant</h2>
          </div>

          <div className="hxnCard">

            <p>
              At the center of IMPEXVIAA is HXN AI — an advanced AI-powered business intelligence system designed to guide users step-by-step through the world of import and export.
            </p>

            <div className="doubleGrid">

              <div className="miniCard">
                <h4>HXN AI is being built with:</h4>

                {hxnBuiltWith.map((item, index) => (
                  <div key={index} className="lineItem">
                    {item}
                  </div>
                ))}
              </div>

              <div className="miniCard">
                <h4>HXN AI helps users:</h4>

                {hxnHelps.map((item, index) => (
                  <div key={index} className="lineItem">
                    {item}
                  </div>
                ))}
              </div>

            </div>

            <div className="quoteBox large">
              <span />
              <p>
                We do not simply connect businesses.
                <br />
                We help people build them.
              </p>
            </div>

          </div>
        </section>

        <section className="sectionWrap">
          <div className="sectionHeading">
            <span>CORE ECOSYSTEM</span>
            <h2>Everything needed to build trusted global business.</h2>
          </div>

          <div className="coreGrid">
            {coreCards.map((item, index) => (
              <div key={index} className="coreCard">

                <div className="iconBox">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>
            ))}
          </div>
        </section>

        <section className="sectionWrap">
          <div className="sectionHeading">
            <span>GLOBAL INDUSTRIES</span>
            <h2>Built for international commerce across every sector.</h2>
          </div>

          <div className="industryGrid">
            {industries.map((item, index) => (
              <div key={index} className="industryItem">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="sectionWrap">
          <div className="glassCard premiumCard">

            <div className="sectionHeading">
              <span>WE STAND BESIDE BUSINESSES</span>
              <h2>
                Modern trade infrastructure designed to support businesses at every stage.
              </h2>
            </div>

            <p>
              Most platforms stop after creating a connection.
            </p>

            <p>
              IMPEXVIAA is being designed to support businesses and entrepreneurs throughout their journey by combining AI intelligence, supplier discovery, business education, trade guidance, verification systems, quotation infrastructure, global sourcing workflows, and future-ready payment systems.
            </p>

            <p>
              We believe businesses should never feel alone while entering global trade.
            </p>

            <div className="heroButtons">
              <a href="/" className="primaryBtn">
                Start Global Trade
              </a>

              <a href="/marketplace" className="secondaryBtn">
                Explore Marketplace
              </a>
            </div>

          </div>
        </section>

        <section className="visionSection">

          <div className="visionCard">

            <div className="sectionHeading center">
              <span>OUR LONG-TERM VISION</span>

              <h2>
                Creating One of the World’s Most Intelligent Digital Trade Ecosystems
              </h2>
            </div>

            <p>
              IMPEXVIAA is being built as scalable AI-powered global trade infrastructure where marketplaces, AI systems, trade education, verification, quotations, payments, digital stores, supplier discovery, and business intelligence all work together seamlessly inside one connected ecosystem.
            </p>

            <p>
              Our mission is to help businesses and future entrepreneurs participate in global commerce through intelligent technology, trusted infrastructure, and modern AI-powered systems.
            </p>

            <div className="finalStatement">
              <h3>IMPEXVIAA</h3>

              <p>
                We don’t just connect businesses.
                <br />
                We help build them.
              </p>

              <p>
                We stand beside businesses at every step of global growth.
              </p>

              <span>
                IMPEXVIAA — The Future of Intelligent Global Trade.
              </span>
            </div>

            <div className="heroButtons centerButtons">
              <a href="/" className="primaryBtn">
                Enter IMPEXVIAA
              </a>

              <a href="/impexviaa-pay" className="secondaryBtn">
                Explore IMPEXVIAA Pay
              </a>
            </div>

          </div>

        </section>

      </main>

      <style jsx>{`
        .aboutPage {
          background: #020404;
          color: white;
          overflow: hidden;
          font-family: Inter, sans-serif;
        }

        .heroSection {
          position: relative;
          min-height: 100vh;
          padding: 140px 24px 120px;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(0,255,180,0.15), transparent 30%),
            radial-gradient(circle at top right, rgba(0,140,255,0.14), transparent 30%),
            #020404;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
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
          width: 300px;
          height: 300px;
          background: #005eff;
          top: 0;
          right: -100px;
          animation-delay: 2s;
        }

        .gridOverlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1), transparent);
        }

        .heroContent {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        .topBadge {
          display: inline-flex;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 12px;
          letter-spacing: 2px;
          margin-bottom: 30px;
          backdrop-filter: blur(20px);
        }

        h1 {
          font-size: clamp(62px, 10vw, 130px);
          line-height: 0.92;
          letter-spacing: -6px;
          max-width: 1000px;
          margin-bottom: 34px;
          font-weight: 800;
        }

        .heroText {
          max-width: 920px;
          font-size: 22px;
          line-height: 1.8;
          color: rgba(255,255,255,0.75);
          margin-bottom: 24px;
        }

        .heroText.secondary {
          color: rgba(255,255,255,0.58);
        }

        .quoteBox {
          margin-top: 40px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 30px;
          border-radius: 28px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .quoteBox span {
          width: 5px;
          border-radius: 999px;
          background: linear-gradient(to bottom,#00ffcc,#005eff);
          min-height: 100%;
        }

        .quoteBox p {
          font-size: 30px;
          line-height: 1.4;
          font-weight: 700;
        }

        .heroButtons {
          display: flex;
          gap: 18px;
          margin-top: 44px;
          flex-wrap: wrap;
        }

        .primaryBtn,
        .secondaryBtn {
          height: 62px;
          padding: 0 34px;
          border-radius: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-weight: 700;
          transition: 0.35s ease;
        }

        .primaryBtn {
          background: white;
          color: black;
        }

        .primaryBtn:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(255,255,255,0.2);
        }

        .secondaryBtn {
          border: 1px solid rgba(255,255,255,0.12);
          color: white;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(20px);
        }

        .secondaryBtn:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-4px);
        }

        .metricsGrid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 20px;
          margin-top: 70px;
        }

        .metricCard {
          padding: 28px;
          border-radius: 26px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(30px);
        }

        .metricCard h3 {
          font-size: 42px;
          margin-bottom: 12px;
        }

        .metricCard p {
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
        }

        .sectionWrap {
          max-width: 1250px;
          margin: 0 auto;
          padding: 120px 24px;
        }

        .sectionHeading {
          margin-bottom: 60px;
        }

        .sectionHeading span {
          color: #00ffcc;
          letter-spacing: 2px;
          font-size: 13px;
        }

        .sectionHeading h2 {
          margin-top: 20px;
          font-size: clamp(42px,6vw,76px);
          line-height: 1.05;
          letter-spacing: -3px;
          max-width: 950px;
        }

        .glassCard {
          padding: 50px;
          border-radius: 34px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(30px);
        }

        .glassCard p {
          font-size: 22px;
          line-height: 1.9;
          color: rgba(255,255,255,0.7);
          margin-bottom: 26px;
        }

        .problemGrid,
        .industryGrid,
        .bulletGrid {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin: 30px 0;
        }

        .problemItem,
        .industryItem,
        .bulletItem,
        .lineItem {
          padding: 14px 20px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .ecosystemGrid,
        .doubleGrid,
        .coreGrid {
          display: grid;
          gap: 24px;
        }

        .ecosystemGrid {
          grid-template-columns: repeat(2,1fr);
        }

        .doubleGrid {
          grid-template-columns: repeat(2,1fr);
          margin-top: 40px;
        }

        .coreGrid {
          grid-template-columns: repeat(3,1fr);
        }

        .ecosystemCard,
        .miniCard,
        .coreCard,
        .visionCard {
          padding: 40px;
          border-radius: 34px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .ecosystemCard h3,
        .coreCard h3 {
          font-size: 34px;
          margin-bottom: 20px;
        }

        .ecosystemCard p,
        .miniCard p,
        .coreCard p,
        .visionCard p {
          color: rgba(255,255,255,0.68);
          line-height: 1.8;
          font-size: 19px;
        }

        .highlightText {
          margin-top: 30px;
          font-size: 24px;
          font-weight: 700;
        }

        .hxnCard {
          padding: 50px;
          border-radius: 36px;
          background:
            radial-gradient(circle at top right, rgba(0,255,200,0.12), transparent 35%),
            rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .miniCard h4 {
          margin-bottom: 24px;
          font-size: 26px;
        }

        .lineItem {
          margin-bottom: 12px;
        }

        .iconBox {
          width: 72px;
          height: 72px;
          border-radius: 24px;
          background: rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
          margin-bottom: 26px;
        }

        .premiumCard {
          background:
            radial-gradient(circle at top right, rgba(0,255,200,0.1), transparent 30%),
            rgba(255,255,255,0.04);
        }

        .visionSection {
          padding: 120px 24px;
        }

        .visionCard {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          padding: 80px 40px;
        }

        .center {
          text-align: center;
        }

        .finalStatement {
          margin-top: 60px;
        }

        .finalStatement h3 {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .finalStatement span {
          display: block;
          margin-top: 24px;
          color: #00ffcc;
          font-size: 20px;
        }

        .centerButtons {
          justify-content: center;
        }

        @keyframes floatOrb {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(30px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @media (max-width: 980px) {

          .metricsGrid,
          .ecosystemGrid,
          .doubleGrid,
          .coreGrid {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 68px;
            letter-spacing: -3px;
          }

          .quoteBox p {
            font-size: 22px;
          }

          .glassCard,
          .ecosystemCard,
          .miniCard,
          .coreCard,
          .visionCard,
          .hxnCard {
            padding: 30px;
          }

          .sectionHeading h2 {
            font-size: 46px;
          }

          .heroText,
          .glassCard p,
          .ecosystemCard p,
          .coreCard p,
          .visionCard p {
            font-size: 17px;
          }
        }

      `}</style>
    </>
  );
}