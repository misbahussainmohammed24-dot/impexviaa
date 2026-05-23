"use client";

export default function AboutPage() {
  const metrics = [
    { title: "AI", text: "Intelligent trade infrastructure powered by advanced AI systems." },
    { title: "Global", text: "Cross-border marketplace connecting businesses worldwide." },
    { title: "24/7", text: "International sourcing access without geographical limitations." },
    { title: "HXN", text: "AI-powered business assistant for modern global trade." },
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
          <div className="orb orbThree" />
          <div className="gridOverlay" />

          <div className="floatingCardsWrap">
  <div className="floatingCard floatOne">
    <small>VERIFIED SUPPLIER</small>
    <strong>Global Trade Ready</strong>
  </div>

  <div className="floatingCard floatTwo">
    <small>HXN AI</small>
    <strong>Building export store...</strong>
  </div>

  <div className="floatingCard floatThree">
    <small>SECURE QUOTE</small>
    <strong>$48,700 USD</strong>
  </div>
</div>s

          <div className="heroContent">
            <div className="topBadge">GLOBAL AI-POWERED B2B ECOSYSTEM</div>

            <h1>The Future of Intelligent Global Trade</h1>

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
              <a href="/" className="primaryBtn">Enter IMPEXVIAA</a>
              <a href="/ai-generated-stores" className="secondaryBtn">Explore HXN AI</a>
              <a href="/supplier-verification" className="secondaryBtn">Verify Suppliers</a>
            </div>

            <div className="metricsGrid">
              {metrics.map((item, index) => (
                <div key={index} className="metricCard animatedCard">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="marquee">
          <div>
            {industries.concat(industries).map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        <section className="sectionWrap">
          <div className="sectionHeading">
            <span>WHY IMPEXVIAA EXISTS</span>
            <h2>Rebuilding International Trade for the Modern Era</h2>
          </div>

          <div className="glassCard animatedCard">
            <p>
              Global trade still operates through fragmented systems, outdated sourcing methods, inefficient communication, supplier uncertainty, scattered quotation workflows, disconnected marketplaces, and trust issues between buyers and suppliers.
            </p>

            <p>Every year, businesses lose opportunities, money, and confidence because of:</p>

            <div className="problemGrid">
              {problems.map((item, index) => (
                <div key={index} className="problemItem">{item}</div>
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
            <div className="ecosystemCard animatedCard">
              <h3>1. Global Business Marketplace</h3>

              <p>A complete B2B ecosystem for existing businesses to:</p>

              <div className="bulletGrid">
                {marketplacePoints.map((item, index) => (
                  <div key={index} className="bulletItem">{item}</div>
                ))}
              </div>

              <p>
                IMPEXVIAA focuses on building a safer and smarter trade environment where businesses feel supported throughout the entire sourcing and trading process.
              </p>

              <div className="highlightText">Because global trade should not feel risky or uncertain.</div>
            </div>

            <div className="ecosystemCard goldGlow animatedCard">
              <h3>2. The IMPEXVIAA Tradepreneur Network</h3>

              <p>A next-generation ecosystem designed for:</p>

              <div className="bulletGrid">
                {tradepreneurUsers.map((item, index) => (
                  <div key={index} className="bulletItem">{item}</div>
                ))}
              </div>

              <p>
                This segment focuses on helping people build international businesses completely from scratch using AI-powered guidance and intelligent trade systems.
              </p>

              <a href="/ai-generated-stores" className="miniBtn">Start with HXN AI</a>
            </div>
          </div>
        </section>

        <section className="sectionWrap">
          <div className="sectionHeading">
            <span>INTRODUCING HXN AI</span>
            <h2>The Intelligent Trade & Business Assistant</h2>
          </div>

          <div className="hxnCard animatedCard">
            <div className="aiConsole">
              <div className="consoleTop">
                <span />
                <span />
                <span />
              </div>
              <p className="typingLine">HXN AI is preparing your global trade roadmap...</p>
            </div>

            <p>
              At the center of IMPEXVIAA is HXN AI — an advanced AI-powered business intelligence system designed to guide users step-by-step through the world of import and export.
            </p>

            <div className="doubleGrid">
              <div className="miniCard animatedCard">
                <h4>HXN AI is being built with:</h4>
                {hxnBuiltWith.map((item, index) => (
                  <div key={index} className="lineItem">{item}</div>
                ))}
              </div>

              <div className="miniCard animatedCard">
                <h4>HXN AI helps users:</h4>
                {hxnHelps.map((item, index) => (
                  <div key={index} className="lineItem">{item}</div>
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
              <div key={index} className="coreCard animatedCard">
                <div className="iconBox">{item.icon}</div>
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
              <div key={index} className="industryItem animatedCard">{item}</div>
            ))}
          </div>
        </section>

        <section className="sectionWrap">
          <div className="glassCard premiumCard animatedCard">
            <div className="sectionHeading">
              <span>WE STAND BESIDE BUSINESSES</span>
              <h2>Modern trade infrastructure designed to support businesses at every stage.</h2>
            </div>

            <p>Most platforms stop after creating a connection.</p>

            <p>
              IMPEXVIAA is being designed to support businesses and entrepreneurs throughout their journey by combining AI intelligence, supplier discovery, business education, trade guidance, verification systems, quotation infrastructure, global sourcing workflows, and future-ready payment systems.
            </p>

            <p>We believe businesses should never feel alone while entering global trade.</p>

            <div className="heroButtons">
              <a href="/" className="primaryBtn">Start Global Trade</a>
              <a href="/marketplace/agriculture" className="secondaryBtn">Explore Marketplace</a>
            </div>
          </div>
        </section>

        <section className="visionSection">
          <div className="visionCard animatedCard">
            <div className="sectionHeading center">
              <span>OUR LONG-TERM VISION</span>
              <h2>Creating One of the World’s Most Intelligent Digital Trade Ecosystems</h2>
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

              <p>We stand beside businesses at every step of global growth.</p>

              <span>IMPEXVIAA — The Future of Intelligent Global Trade.</span>
            </div>

            <div className="heroButtons centerButtons">
              <a href="/" className="primaryBtn">Enter IMPEXVIAA</a>
              <a href="/impexviaa-pay" className="secondaryBtn">Explore IMPEXVIAA Pay</a>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .aboutPage {
          background: #020404;
          color: white;
          overflow: hidden;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .heroSection {
          position: relative;
          min-height: 100vh;
          padding: 140px 24px 120px;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(0,255,180,0.22), transparent 30%),
            radial-gradient(circle at top right, rgba(214,165,82,0.2), transparent 32%),
            radial-gradient(circle at bottom, rgba(0,94,255,0.16), transparent 32%),
            #020404;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(115px);
          animation: floatOrb 8s ease-in-out infinite;
          opacity: 0.75;
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

        .orbThree {
          width: 240px;
          height: 240px;
          background: #d6a552;
          bottom: 140px;
          right: 20%;
          animation-delay: 1s;
        }

        .gridOverlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1), transparent);
          animation: gridMove 18s linear infinite;
        }

        @keyframes gridMove {
          from { background-position: 0 0; }
          to { background-position: 80px 80px; }
        }

        .heroContent {
          position: relative;
          z-index: 3;
          max-width: 1200px;
          margin: 0 auto;
          animation: revealHero 1s ease both;
        }

        .topBadge {
          display: inline-flex;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          font-size: 12px;
          letter-spacing: 2px;
          margin-bottom: 30px;
          backdrop-filter: blur(20px);
          box-shadow: 0 0 40px rgba(0,255,204,0.12);
        }

        h1 {
          font-size: clamp(62px, 10vw, 130px);
          line-height: 0.92;
          letter-spacing: -6px;
          max-width: 1000px;
          margin-bottom: 34px;
          font-weight: 900;
          background: linear-gradient(110deg, #ffffff, #d6fff6, #d6a552, #ffffff);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          color: transparent;
          animation: textShine 6s ease infinite;
        }

        .heroText {
          max-width: 920px;
          font-size: 22px;
          line-height: 1.8;
          color: rgba(255,255,255,0.76);
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
          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(24px);
          box-shadow: 0 35px 100px rgba(0,0,0,0.45);
        }

        .quoteBox span {
          width: 5px;
          border-radius: 999px;
          background: linear-gradient(to bottom,#00ffcc,#005eff,#d6a552);
          min-height: 100%;
          animation: linePulse 2.8s infinite;
        }

        .quoteBox p {
          font-size: 30px;
          line-height: 1.4;
          font-weight: 800;
        }

        .heroButtons {
          display: flex;
          gap: 18px;
          margin-top: 44px;
          flex-wrap: wrap;
        }

        .primaryBtn,
        .secondaryBtn,
        .miniBtn {
          height: 62px;
          padding: 0 34px;
          border-radius: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-weight: 800;
          transition: 0.35s ease;
          position: relative;
          overflow: hidden;
        }

        .primaryBtn {
          background: white;
          color: black;
        }

        .primaryBtn::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.8), transparent);
          transform: translateX(-120%);
          animation: btnShine 3.5s infinite;
        }

        .primaryBtn:hover,
        .secondaryBtn:hover,
        .miniBtn:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 25px 70px rgba(255,255,255,0.18);
        }

        .secondaryBtn,
        .miniBtn {
          border: 1px solid rgba(255,255,255,0.14);
          color: white;
          background: rgba(255,255,255,0.045);
          backdrop-filter: blur(20px);
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
          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.09);
          backdrop-filter: blur(30px);
        }

        .metricCard h3 {
          font-size: 42px;
          margin-bottom: 12px;
        }

        .metricCard p {
          color: rgba(255,255,255,0.62);
          line-height: 1.6;
        }

        .floatingCard {
          position: absolute;
          z-index: 4;
          width: 230px;
          padding: 20px;
          border-radius: 26px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(214,165,82,0.25);
          backdrop-filter: blur(25px);
          box-shadow: 0 35px 100px rgba(0,0,0,0.55);
          animation: floatCard 6s ease-in-out infinite;
        }

        .floatingCard small {
          color: #d6a552;
          font-weight: 900;
          letter-spacing: 1px;
          font-size: 11px;
        }

        .floatingCard strong {
          display: block;
          margin-top: 8px;
          font-size: 18px;
        }

        .floatOne {
          top: 210px;
          right: 7%;
        }

        .floatTwo {
          top: 500px;
          left: 5%;
          animation-delay: 1.1s;
        }

        .floatThree {
          bottom: 150px;
          right: 12%;
          animation-delay: 2s;
        }

        .marquee {
          overflow: hidden;
          background: #050707;
          border-block: 1px solid rgba(255,255,255,0.08);
          padding: 18px 0;
        }

        .marquee div {
          display: flex;
          gap: 18px;
          width: max-content;
          animation: marqueeMove 28s linear infinite;
        }

        .marquee span {
          padding: 12px 20px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          white-space: nowrap;
          color: rgba(255,255,255,0.8);
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
          font-weight: 900;
        }

        .sectionHeading h2 {
          margin-top: 20px;
          font-size: clamp(42px,6vw,76px);
          line-height: 1.05;
          letter-spacing: -3px;
          max-width: 950px;
        }

        .glassCard,
        .ecosystemCard,
        .miniCard,
        .coreCard,
        .visionCard,
        .hxnCard {
          border-radius: 34px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025));
          border: 1px solid rgba(255,255,255,0.09);
          backdrop-filter: blur(30px);
          box-shadow: 0 35px 110px rgba(0,0,0,0.45);
        }

        .glassCard {
          padding: 50px;
        }

        .glassCard p {
          font-size: 22px;
          line-height: 1.9;
          color: rgba(255,255,255,0.72);
          margin-bottom: 26px;
        }

        .animatedCard {
          animation: revealScroll linear both;
          animation-timeline: view();
          animation-range: entry 0% cover 35%;
          transition: 0.4s ease;
        }

        .animatedCard:hover {
          transform: translateY(-10px) scale(1.015);
          border-color: rgba(0,255,204,0.35);
          box-shadow: 0 45px 140px rgba(0,0,0,0.65), 0 0 60px rgba(0,255,204,0.08);
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
          background: rgba(255,255,255,0.055);
          border: 1px solid rgba(255,255,255,0.09);
          transition: 0.3s ease;
        }

        .problemItem:hover,
        .industryItem:hover,
        .bulletItem:hover,
        .lineItem:hover {
          transform: translateY(-4px);
          background: rgba(0,255,204,0.08);
          border-color: rgba(0,255,204,0.25);
        }

        .ecosystemGrid,
        .doubleGrid,
        .coreGrid {
          display: grid;
          gap: 24px;
        }

        .ecosystemGrid,
        .doubleGrid {
          grid-template-columns: repeat(2,1fr);
        }

        .coreGrid {
          grid-template-columns: repeat(3,1fr);
        }

        .ecosystemCard,
        .miniCard,
        .coreCard {
          padding: 40px;
        }

        .goldGlow {
          background:
            radial-gradient(circle at top right, rgba(214,165,82,0.16), transparent 35%),
            linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025));
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
          color: rgba(255,255,255,0.7);
          line-height: 1.8;
          font-size: 19px;
        }

        .highlightText {
          margin-top: 30px;
          font-size: 24px;
          font-weight: 800;
          color: #d6a552;
        }

        .miniBtn {
          margin-top: 28px;
        }

        .hxnCard {
          padding: 50px;
          background:
            radial-gradient(circle at top right, rgba(0,255,200,0.14), transparent 35%),
            radial-gradient(circle at bottom left, rgba(0,94,255,0.12), transparent 34%),
            rgba(255,255,255,0.04);
        }

        .aiConsole {
          margin-bottom: 34px;
          border-radius: 24px;
          background: rgba(0,0,0,0.55);
          border: 1px solid rgba(0,255,204,0.18);
          padding: 18px;
          box-shadow: inset 0 0 30px rgba(0,255,204,0.05);
        }

        .consoleTop {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }

        .consoleTop span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #00ffcc;
        }

        .typingLine {
          overflow: hidden;
          white-space: nowrap;
          width: 0;
          border-right: 2px solid #00ffcc;
          animation: typing 5s steps(54, end) infinite, blink 0.8s infinite;
          color: rgba(255,255,255,0.85);
          margin: 0;
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
          background:
            radial-gradient(circle, rgba(0,255,204,0.14), rgba(255,255,255,0.06));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
          margin-bottom: 26px;
          animation: iconPulse 3s ease-in-out infinite;
        }

        .coreCard {
          position: relative;
          overflow: hidden;
        }

        .coreCard::before {
          content: "";
          position: absolute;
          inset: -80%;
          background: linear-gradient(120deg, transparent, rgba(214,165,82,0.18), transparent);
          transform: rotate(25deg);
          animation: cardShine 5s infinite;
        }

        .premiumCard {
          background:
            radial-gradient(circle at top right, rgba(0,255,200,0.12), transparent 30%),
            radial-gradient(circle at bottom left, rgba(214,165,82,0.12), transparent 30%),
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
          background:
            radial-gradient(circle at top, rgba(0,255,204,0.14), transparent 34%),
            radial-gradient(circle at bottom, rgba(214,165,82,0.12), transparent 32%),
            rgba(255,255,255,0.04);
        }

        .center {
          text-align: center;
        }

        .finalStatement {
          margin-top: 60px;
          padding: 34px;
          border-radius: 30px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(214,165,82,0.2);
        }

        .finalStatement h3 {
          font-size: 48px;
          margin-bottom: 20px;
          color: #d6a552;
        }

        .finalStatement span {
          display: block;
          margin-top: 24px;
          color: #00ffcc;
          font-size: 20px;
          font-weight: 800;
        }

        .centerButtons {
          justify-content: center;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(35px) scale(1.12); }
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-24px) rotate(1.5deg); }
        }

        @keyframes revealHero {
          from { opacity: 0; transform: translateY(40px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes revealScroll {
          from { opacity: 0; transform: translateY(60px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes textShine {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes linePulse {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }

        @keyframes btnShine {
          0% { transform: translateX(-120%); }
          45% { transform: translateX(120%); }
          100% { transform: translateX(120%); }
        }

        @keyframes marqueeMove {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes typing {
          0% { width: 0; }
          45% { width: 100%; }
          75% { width: 100%; }
          100% { width: 0; }
        }

        @keyframes blink {
          50% { border-color: transparent; }
        }

        @keyframes iconPulse {
          0%, 100% { box-shadow: 0 0 0 rgba(0,255,204,0); }
          50% { box-shadow: 0 0 40px rgba(0,255,204,0.16); }
        }

        @keyframes cardShine {
          0% { transform: translateX(-120%) rotate(25deg); }
          50% { transform: translateX(120%) rotate(25deg); }
          100% { transform: translateX(120%) rotate(25deg); }
        }

        @media (max-width: 980px) {
          .metricsGrid,
          .ecosystemGrid,
          .doubleGrid,
          .coreGrid {
            grid-template-columns: 1fr;
          }

          .floatingCard {
            width: 165px;
            padding: 14px;
          }

          .floatOne {
            top: 115px;
            right: -18px;
          }

          .floatTwo {
            top: 520px;
            left: -18px;
          }

          .floatThree {
            display: none;
          }

          h1 {
            font-size: 62px;
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

          .metricsGrid {
            grid-template-columns: 1fr;
          }
        }
          /* FINAL MOBILE + PREMIUM FIX */

.heroSection {
  padding: 120px 22px 90px;
}

.heroContent {
  max-width: 100%;
  overflow: hidden;
}

h1 {
  font-size: clamp(48px, 14vw, 92px);
  line-height: 0.95;
  letter-spacing: -3px;
  max-width: 100%;
}

.heroText {
  font-size: 20px;
  line-height: 1.65;
  max-width: 100%;
}

.floatingCard {
  animation: floatCard 6s ease-in-out infinite;
}

.floatOne {
  top: 150px;
  right: -70px;
}

.floatTwo {
  top: 760px;
  left: -85px;
}

.floatThree {
  display: none;
}

.heroButtons {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 40px;
  max-width: 100%;
}

.primaryBtn,
.secondaryBtn,
.miniBtn {
  width: 100%;
  height: 68px;
  border-radius: 26px;
}

.metricsGrid {
  margin-top: 80px;
}

.metricCard,
.glassCard,
.ecosystemCard,
.hxnCard,
.coreCard,
.miniCard,
.visionCard,
.premiumCard {
  background:
    radial-gradient(circle at top right, rgba(0,255,204,0.24), transparent 42%),
    radial-gradient(circle at bottom left, rgba(214,165,82,0.2), transparent 42%),
    linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.035)) !important;
  border: 1px solid rgba(0,255,204,0.18);
  box-shadow:
    0 40px 120px rgba(0,0,0,0.55),
    0 0 60px rgba(0,255,204,0.08);
}

.glassCard p,
.ecosystemCard p,
.hxnCard p,
.coreCard p,
.miniCard p,
.visionCard p,
.premiumCard p {
  color: rgba(255,255,255,0.84) !important;
}

.animatedCard {
  animation: revealScroll 0.9s ease both, cardBreath 5s ease-in-out infinite;
}

.iconBox {
  animation: iconFloat 3s ease-in-out infinite;
}

.coreCard:first-child .iconBox {
  animation: globeRotate 4s linear infinite;
}

.problemItem,
.industryItem,
.bulletItem,
.lineItem {
  animation: chipFloat 4s ease-in-out infinite;
}

@keyframes cardBreath {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes iconFloat {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-8px) scale(1.08);
  }
}

@keyframes globeRotate {
  from {
    transform: rotateY(0deg) rotateZ(0deg);
  }
  to {
    transform: rotateY(360deg) rotateZ(360deg);
  }
}

@keyframes chipFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
  .floatingCardsWrap {
  position: sticky;
  top: 120px;
  z-index: 20;
  height: 0;
  pointer-events: none;
}

.floatingCard {
  position: absolute !important;
  width: 190px;
  padding: 18px;
  border-radius: 24px;
  background: rgba(18, 32, 38, 0.72);
  border: 1px solid rgba(214, 165, 82, 0.45);
  backdrop-filter: blur(22px);
  box-shadow: 0 25px 80px rgba(0,0,0,0.55);
  animation: floatCard 5s ease-in-out infinite !important;
}

.floatOne {
  top: 0;
  right: 14px;
}

.floatTwo {
  top: 430px;
  left: 14px;
}

.floatThree {
  top: 720px;
  right: 14px;
  display: block;
}

@media (max-width: 980px) {
  .floatingCardsWrap {
    top: 90px;
  }

  .floatingCard {
    width: 145px;
    padding: 13px;
    opacity: 0.95;
  }

  .floatingCard small {
    font-size: 10px;
  }

  .floatingCard strong {
    font-size: 15px;
  }

  .floatOne {
    top: 0;
    right: 10px;
  }

  .floatTwo {
    top: 500px;
    left: 10px;
  }

  .floatThree {
    top: 780px;
    right: 10px;
  }
}
      `}</style>
    </>
  );
}