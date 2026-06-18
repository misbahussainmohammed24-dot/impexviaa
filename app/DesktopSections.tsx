"use client";

import { useEffect, useState } from "react";

const showcaseItems = [
  { text: "Global sourcing, built for serious buyers.", image: "/images/trade1.webp" },
  { text: "Verified suppliers across trusted markets.", image: "/images/trade2.webp" },
  { text: "Smart quotations before every deal begins.", image: "/images/trade3.webp" },
  { text: "Cross-border trade with confidence.", image: "/images/trade4.webp" },
];

export default function DesktopSections() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % showcaseItems.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="desktop-sections-page">
      <section className="desktop-trust-section">
        <h2>
          Global trade, rebuilt for trust.{" "}
          <span>Verified suppliers, protected quotations, and premium access.</span>
        </h2>

        <div className="desktop-trust-grid">
          <div className="desktop-trust-card">
            <h3>Verified global suppliers</h3>
            <p>Work with credible businesses and supplier access designed for serious international trade.</p>
          </div>

          <div className="desktop-trust-card">
            <h3>Secure trade quotations</h3>
            <p>Request prices, compare terms, and begin business conversations with clarity.</p>
          </div>

          <div className="desktop-trust-card">
            <h3>IMPEXVIAA Pay</h3>
            <p>A premium payment layer built for safer, faster, and trusted global transactions.</p>
          </div>
        </div>
      </section>

      <section className="desktop-showcase-section">
        <div>
          <h2>{showcaseItems[active].text}</h2>
          <div className="desktop-dots">
            {showcaseItems.map((_, i) => (
              <button key={i} className={active === i ? "active" : ""} onClick={() => setActive(i)} />
            ))}
          </div>
        </div>

        <img src={showcaseItems[active].image} alt="Trade showcase" />
      </section>
<section className="desktop-hxn-section">
  <div className="desktop-hxn-card">
    <div className="desktop-hxn-left">
      <span className="desktop-hxn-badge">HXN AI</span>

      <h2>One AI assistant for exporters, buyers, and global trade.</h2>

      <p>
        HXN helps exporters create premium product stores, generate product
        descriptions, organise listings, and present their business to global buyers.
      </p>

      <div className="desktop-hxn-video">
        <video autoPlay muted loop playsInline>
          <source src="/ai-card-hxn.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    <div className="desktop-hxn-right">
      <div className="desktop-feature-card">
        <h3>For exporters</h3>
        <p>Build stores, create selling pages, and prepare your business for international buyers.</p>
      </div>

      <div className="desktop-feature-card">
        <h3>For buyers</h3>
        <p>Discover trusted suppliers, product categories, quotations, and sourcing suggestions.</p>
      </div>

      <div className="desktop-feature-card">
        <h3>For trade teams</h3>
        <p>Support supplier discovery, product matching, verification, and faster decision-making.</p>
      </div>

      <div className="desktop-chat-box">
        <span>I need verified pharmaceutical suppliers from Europe</span>
        <button>↑</button>
      </div>
    </div>
  </div>
</section>
<section className="desktop-flags-section">
  <h2>Trusted trade routes across global markets</h2>

  <div className="desktop-flags-wrapper">
    <div className="desktop-flags-track">
      <span>🇬🇪 Georgia</span>
      <span>🇮🇳 India</span>
      <span>🇺🇸 USA</span>
      <span>🇬🇧 UK</span>
      <span>🇦🇪 UAE</span>
      <span>🇩🇪 Germany</span>
      <span>🇨🇳 China</span>
      <span>🇯🇵 Japan</span>
      <span>🇨🇦 Canada</span>
      <span>🇸🇦 Saudi Arabia</span>

      <span>🇬🇪 Georgia</span>
      <span>🇮🇳 India</span>
      <span>🇺🇸 USA</span>
      <span>🇬🇧 UK</span>
      <span>🇦🇪 UAE</span>
      <span>🇩🇪 Germany</span>
      <span>🇨🇳 China</span>
      <span>🇯🇵 Japan</span>
      <span>🇨🇦 Canada</span>
      <span>🇸🇦 Saudi Arabia</span>
    </div>
  </div>
</section>
      <section className="desktop-global-section">
        <div>
          <h2>Scale trade across global markets</h2>
          <p>
            IMPEXVIAA helps exporters connect with international buyers, manage quotations,
            discover suppliers, and expand across industries.
          </p>
        </div>

        <img src="/images/trade8.webp" alt="Global trade" />
      </section>
     <footer className="desktop-footer premium-footer">
  <div className="premium-footer-glow" />

  <div className="premium-footer-top">
    <div className="premium-footer-brand">
      <span className="premium-footer-badge">IMPEXVIAA GLOBAL TRADE</span>
      <h2>IMPEXVIAA</h2>
      <p>
        AI-powered global trade infrastructure for buyers, suppliers,
        exporters, importers, manufacturers, and sourcing teams worldwide.
      </p>

      <div className="premium-footer-stats">
        <div><strong>180+</strong><span>Markets</span></div>
        <div><strong>24/7</strong><span>Trade Access</span></div>
        <div><strong>AI</strong><span>Powered</span></div>
      </div>
    </div>

    <div className="premium-footer-orbit">
      <div className="orbit-ring" />
      <div className="orbit-core">🌍</div>
    </div>
  </div>

  <div className="premium-footer-flags">
    <div className="premium-footer-flags-track">
      <span>🇬🇪 Georgia</span>
      <span>🇮🇳 India</span>
      <span>🇺🇸 USA</span>
      <span>🇬🇧 UK</span>
      <span>🇦🇪 UAE</span>
      <span>🇩🇪 Germany</span>
      <span>🇨🇳 China</span>
      <span>🇯🇵 Japan</span>
      <span>🇨🇦 Canada</span>
      <span>🇸🇦 Saudi Arabia</span>

      <span>🇬🇪 Georgia</span>
      <span>🇮🇳 India</span>
      <span>🇺🇸 USA</span>
      <span>🇬🇧 UK</span>
      <span>🇦🇪 UAE</span>
      <span>🇩🇪 Germany</span>
      <span>🇨🇳 China</span>
      <span>🇯🇵 Japan</span>
      <span>🇨🇦 Canada</span>
      <span>🇸🇦 Saudi Arabia</span>
    </div>
  </div>

  <div className="premium-footer-grid">
    <div>
      <h4>IMPEXVIAA</h4>
      <a href="/about">About IMPEXVIAA</a>
      <a href="/how-global-trade-works">How global trade works</a>
      <a href="/ai-generated-stores">AI-generated stores</a>
      <a href="/impexviaa-pay">IMPEXVIAA Pay</a>
      <a href="/supplier-verification">Supplier verification</a>
    </div>

    <div>
      <h4>Marketplace</h4>
      <a href="/marketplace/agriculture">Agriculture</a>
      <a href="/marketplace/pharmaceuticals">Pharmaceuticals</a>
      <a href="/marketplace/electronics">Electronics</a>
      <a href="/marketplace/machinery">Machinery</a>
      <a href="/marketplace/auto-parts">Auto parts</a>
      <a href="/marketplace/textiles">Textiles</a>
      <a href="/marketplace/chemicals">Chemicals</a>
      <a href="/marketplace/food-beverages">Food & beverages</a>
      <a href="/marketplace/construction-materials">Construction materials</a>
      <a href="/marketplace/logistics">Logistics services</a>
      <a href="/marketplace/metals-steel">Metals & steel</a>
      <a href="/marketplace/packaging">Packaging</a>
    </div>

    <div>
      <h4>Resources</h4>
      <a href="/resources/trade-guides">Trade guides</a>
      <a href="/resources/export-support">Export support</a>
      <a href="/resources/buyer-protection">Buyer protection</a>
      <a href="/resources/seller-tools">Seller tools</a>
      <a href="/resources/global-sourcing">Global sourcing</a>
    </div>

    <div>
      <h4>Support</h4>
      <a href="/support/help-center">Help Center</a>
      <a href="/support/contact-support">Contact support</a>
      <a href="/support/service-status">Service status</a>
      <a href="/support/report-supplier">Report supplier</a>
    </div>
  </div>

  <div className="premium-footer-bottom">
    <div>
      <span>🌍 Georgia | English</span>
      <span>🇬🇪 ქართული</span>
    </div>

    <div>
      <a href="/terms">Terms of Service</a>
      <a href="/legal">Legal</a>
      <a href="/privacy-policy">Privacy Policy</a>
      <a href="/sitemap">Sitemap</a>
    </div>

    <div className="premium-footer-socials">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">f</a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer">𝕏</a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">▶</a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">◎</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">in</a>
    </div>
  </div>

  <p className="premium-footer-copy">
    © 2026 IMPEXVIAA. All rights reserved.
  </p>
</footer>
    </main>
  );
}