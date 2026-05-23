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
</div>

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
    color: #ffffff;
    overflow-x: hidden;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .heroSection {
    position: relative;
    min-height: 100vh;
    padding: 140px 24px 120px;
    overflow: hidden;
    background:
      radial-gradient(circle at top left, rgba(0,255,180,0.28), transparent 34%),
      radial-gradient(circle at top right, rgba(0,94,255,0.26), transparent 36%),
      radial-gradient(circle at bottom right, rgba(214,165,82,0.18), transparent 38%),
      #020404;
  }

  .heroContent {
    position: relative;
    z-index: 5;
    max-width: 1180px;
    margin: 0 auto;
    animation: revealHero 1s ease both;
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(115px);
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
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 80px 80px;
    animation: gridMove 18s linear infinite;
    opacity: 0.8;
  }

  .floatingCardsWrap {
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
  }

  .floatingCard {
    position: absolute;
    width: 210px;
    padding: 20px;
    border-radius: 26px;
    background: rgba(18, 32, 38, 0.72);
    border: 1px solid rgba(214,165,82,0.45);
    backdrop-filter: blur(24px);
    box-shadow: 0 30px 90px rgba(0,0,0,0.55);
    opacity: 0.6;
    animation: floatCard 7s ease-in-out infinite;
  }

  .floatingCard small {
    color: #d6a552;
    font-weight: 900;
    letter-spacing: 2px;
    font-size: 11px;
  }

  .floatingCard strong {
    display: block;
    margin-top: 8px;
    font-size: 18px;
    line-height: 1.25;
  }

  .floatOne {
    top: 170px;
    right: 5%;
  }

  .floatTwo {
    top: 760px;
    left: 4%;
    animation-delay: 1.2s;
  }

  .floatThree {
    display: none;
  }

  .topBadge {
    display: inline-flex;
    max-width: 100%;
    padding: 12px 18px;
    border-radius: 999px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.16);
    font-size: 12px;
    letter-spacing: 2px;
    margin-bottom: 30px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 45px rgba(0,255,204,0.16);
  }

  h1 {
    font-size: clamp(56px, 10vw, 128px);
    line-height: 0.92;
    letter-spacing: -5px;
    max-width: 1050px;
    margin-bottom: 36px;
    font-weight: 900;
    background: linear-gradient(110deg, #ffffff, #dffff8, #d6a552, #ffffff);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    color: transparent;
    animation: textShine 6s ease infinite;
  }

  .heroText {
    max-width: 920px;
    font-size: 22px;
    line-height: 1.75;
    color: rgba(255,255,255,0.78);
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
    border-radius: 30px;
    background: rgba(255,255,255,0.045);
    border: 1px solid rgba(255,255,255,0.12);
    backdrop-filter: blur(24px);
    box-shadow: 0 35px 100px rgba(0,0,0,0.45);
  }
.quoteBox span {
    width: 5px;
    border-radius: 999px;
    background: linear-gradient(to bottom, #00ffcc, #005eff, #d6a552);
    align-self: stretch;
    animation: linePulse 2.8s infinite;
  }

  .quoteBox p {
    font-size: 30px;
    line-height: 1.4;
    font-weight: 800;
    margin: 0;
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
    min-height: 62px;
    padding: 0 34px;
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: 850;
    transition: 0.35s ease;
    position: relative;
    overflow: hidden;
  }

  .primaryBtn {
    background: #ffffff;
    color: #050505;
  }

  .secondaryBtn,
  .miniBtn {
    border: 1px solid rgba(255,255,255,0.16);
    color: white;
    background: rgba(255,255,255,0.045);
    backdrop-filter: blur(20px);
  }

  .primaryBtn::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255,255,255,0.8),
      transparent
    );
    transform: translateX(-120%);
    animation: btnShine 3.5s infinite;
  }

  .primaryBtn:hover,
  .secondaryBtn:hover,
  .miniBtn:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 25px 70px rgba(255,255,255,0.18);
  }

  .metricsGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 70px;
  }

  .metricCard {
    padding: 30px;
    border-radius: 30px;
    background: rgba(255,255,255,0.045);
    border: 1px solid rgba(255,255,255,0.1);
    backdrop-filter: blur(30px);
  }

  .metricCard h3 {
    font-size: 44px;
    margin: 0 0 12px;
  }

  .metricCard p {
    color: rgba(255,255,255,0.68);
    line-height: 1.6;
    margin: 0;
  }

  .marquee {
    overflow: hidden;
    background: #050707;
    border-top: 1px solid rgba(255,255,255,0.08);
    border-bottom: 1px solid rgba(255,255,255,0.08);
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
    font-size: clamp(42px, 6vw, 76px);
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
      linear-gradient(
        145deg,
        rgba(255,255,255,0.075),
        rgba(255,255,255,0.025)
      );
    border: 1px solid rgba(255,255,255,0.09);
    backdrop-filter: blur(30px);
    box-shadow: 0 35px 110px rgba(0,0,0,0.45);
  }

  .glassCard,
  .ecosystemCard,
  .miniCard,
  .coreCard,
  .visionCard,
  .hxnCard {
    position: relative;
    overflow: hidden;
  }

  .glassCard {
    padding: 50px;
  }

  .glassCard p,
  .ecosystemCard p,
  .miniCard p,
  .coreCard p,
  .visionCard p,
  .hxnCard p {
    font-size: 20px;
    line-height: 1.85;
    color: rgba(255,255,255,0.8);
  }

  .animatedCard {
    animation: revealScroll linear both;
    animation-timeline: view();
    animation-range: entry 0% cover 35%;
    transition: 0.4s ease;
  }

  .animatedCard:hover {
    transform: translateY(-10px) scale(1.015);
    border-color: rgba(0,255,204,0.32);
    box-shadow:
      0 45px 140px rgba(0,0,0,0.65),
      0 0 60px rgba(0,255,204,0.08);
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
    grid-template-columns: repeat(2, 1fr);
  }

  .coreGrid {
    grid-template-columns: repeat(3, 1fr);
  }

  .ecosystemCard,
  .miniCard,
  .coreCard {
    padding: 40px;
  }

  .ecosystemCard h3,
  .coreCard h3 {
    font-size: 34px;
    margin-bottom: 20px;
  }

  .goldGlow {
    background:
      radial-gradient(
        circle at top right,
        rgba(214,165,82,0.16),
        transparent 35%
      ),
      linear-gradient(
        145deg,
        rgba(255,255,255,0.075),
        rgba(255,255,255,0.025)
      );
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
    animation:
      typing 5s steps(54, end) infinite,
      blink 0.8s infinite;
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
      radial-gradient(
        circle,
        rgba(0,255,204,0.14),
        rgba(255,255,255,0.06)
      );
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 34px;
    margin-bottom: 26px;
    animation: iconPulse 3s ease-in-out infinite;
  }

  .coreCard::before {
    content: "";
    position: absolute;
    inset: -80%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(214,165,82,0.18),
      transparent
    );
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

  .centerButtons {
    justify-content: center;
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
  }@keyframes floatOrb {
    0%, 100% {
      transform: translateY(0px) scale(1);
    }

    50% {
      transform: translateY(35px) scale(1.12);
    }
  }

  @keyframes floatCard {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }

    50% {
      transform: translateY(-24px) rotate(1.5deg);
    }
  }

  @keyframes revealHero {
    from {
      opacity: 0;
      transform: translateY(40px) scale(0.98);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes revealScroll {
    from {
      opacity: 0;
      transform: translateY(60px) scale(0.96);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes textShine {
    0%, 100% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes linePulse {
    0%, 100% {
      opacity: 0.55;
    }

    50% {
      opacity: 1;
    }
  }

  @keyframes btnShine {
    0% {
      transform: translateX(-120%);
    }

    45% {
      transform: translateX(120%);
    }

    100% {
      transform: translateX(120%);
    }
  }

  @keyframes marqueeMove {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }

  @keyframes typing {
    0% {
      width: 0;
    }

    45% {
      width: 100%;
    }

    75% {
      width: 100%;
    }

    100% {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  @keyframes iconPulse {
    0%, 100% {
      box-shadow: 0 0 0 rgba(0,255,204,0);
    }

    50% {
      box-shadow: 0 0 40px rgba(0,255,204,0.16);
    }
  }

  @keyframes cardShine {
    0% {
      transform: translateX(-120%) rotate(25deg);
    }

    50% {
      transform: translateX(120%) rotate(25deg);
    }

    100% {
      transform: translateX(120%) rotate(25deg);
    }
  }

  @media (max-width: 980px) {

    .metricsGrid,
    .ecosystemGrid,
    .doubleGrid,
    .coreGrid {
      grid-template-columns: 1fr;
    }

    .heroSection {
      padding: 120px 20px 90px;
    }

    h1 {
      font-size: 62px;
      letter-spacing: -3px;
    }

    .heroText,
    .glassCard p,
    .ecosystemCard p,
    .miniCard p,
    .coreCard p,
    .visionCard p,
    .hxnCard p {
      font-size: 17px;
      line-height: 1.8;
    }

    .quoteBox {
      padding: 24px;
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
      letter-spacing: -2px;
    }

    .metricsGrid {
      margin-top: 50px;
    }

    .floatingCard {
      width: 135px;
      padding: 12px;
      opacity: 0.45;
    }

    .floatingCard small {
      font-size: 8px;
      letter-spacing: 1px;
    }

    .floatingCard strong {
      font-size: 13px;
    }

    .floatOne {
      top: 150px;
      right: -55px;
    }

    .floatTwo {
      top: 880px;
      left: -55px;
    }

    .floatThree {
      display: none;
    }

    .heroButtons {
      flex-direction: column;
      align-items: stretch;
    }

    .primaryBtn,
    .secondaryBtn,
    .miniBtn {
      width: 100%;
    }

    .finalStatement h3 {
      font-size: 38px;
    }
  }

  @media (max-width: 640px) {

    h1 {
      font-size: 48px;
      line-height: 0.98;
    }

    .topBadge {
      font-size: 10px;
      letter-spacing: 1.5px;
    }

    .sectionHeading h2 {
      font-size: 38px;
    }

    .metricCard h3 {
      font-size: 34px;
    }

    .ecosystemCard h3,
    .coreCard h3 {
      font-size: 28px;
    }

    .quoteBox {
      gap: 14px;
    }

    .quoteBox span {
      width: 4px;
    }
  /* FINAL FIX: mobile alignment, bright text, floating cards, animations */

.floatingCardsWrap {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  animation: cardsFall linear both;
  animation-timeline: scroll(root);
}

@keyframes cardsFall {
  from { transform: translateY(0); }
  to { transform: translateY(900px); }
}

.heroContent {
  z-index: 5;
}

.floatingCard {
  opacity: 0.35;
  filter: blur(0.2px);
}

.floatOne {
  right: -70px;
}

.floatTwo {
  left: -80px;
}

.sectionHeading h2,
.ecosystemCard h3,
.coreCard h3,
.premiumCard h2,
.visionCard h2 {
  text-align: left;
  color: #ffffff !important;
  opacity: 1 !important;
}

.glassCard p,
.ecosystemCard p,
.coreCard p,
.hxnCard p,
.visionCard p,
.premiumCard p,
.finalStatement p {
  color: rgba(255,255,255,0.88) !important;
  opacity: 1 !important;
}

.iconBox {
  animation: iconFloat 2.8s ease-in-out infinite;
}

.coreCard:first-child .iconBox {
  animation: globeSpin 3s linear infinite, iconFloat 2.8s ease-in-out infinite;
}

@keyframes globeSpin {
  from { transform: rotateY(0deg) rotateZ(0deg); }
  to { transform: rotateY(360deg) rotateZ(360deg); }
}

@keyframes iconFloat {
  0%,100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-10px) scale(1.08); }
}

.coreCard,
.ecosystemCard,
.glassCard,
.hxnCard,
.premiumCard,
.visionCard,
.metricCard {
  animation: cardReveal 0.9s ease both, cardGlow 5s ease-in-out infinite;
}

@keyframes cardGlow {
  0%,100% { box-shadow: 0 35px 110px rgba(0,0,0,0.45); }
  50% { box-shadow: 0 45px 140px rgba(0,255,204,0.10); }
}

@keyframes cardReveal {
  from { opacity: 0; transform: translateY(45px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@media (max-width: 640px) {
  .sectionWrap {
    padding: 90px 22px;
  }

  .sectionHeading {
    margin-bottom: 40px;
  }

  .sectionHeading h2 {
    font-size: 42px !important;
    line-height: 1.08 !important;
    letter-spacing: -2px !important;
  }

  .ecosystemCard,
  .coreCard,
  .glassCard,
  .hxnCard,
  .premiumCard,
  .visionCard {
    padding: 30px 26px !important;
  }

  .coreCard h3,
  .ecosystemCard h3 {
    font-size: 31px !important;
    line-height: 1.15 !important;
  }

  .coreCard p,
  .ecosystemCard p,
  .glassCard p,
  .hxnCard p,
  .premiumCard p,
  .visionCard p {
    font-size: 18px !important;
    line-height: 1.75 !important;
  }

  .floatingCard {
    opacity: 0.22 !important;
  }
}
`}</style>
  </>
  );
}
