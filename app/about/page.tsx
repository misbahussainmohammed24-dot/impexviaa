export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-overlay" />

        <div className="about-content">
          <span className="about-badge">GLOBAL B2B PLATFORM</span>

          <h1>
            Building the future of
            <br />
            global trade.
          </h1>

          <p className="about-description">
            IMPEXVIAA is a premium AI-powered B2B import-export ecosystem
            helping suppliers, exporters, manufacturers, and buyers trade
            globally with trust, verification, secure quotations, and
            intelligent sourcing tools.
          </p>

          <div className="about-stats">
            <div className="about-stat-card">
              <h2>120+</h2>
              <span>Countries supported</span>
            </div>

            <div className="about-stat-card">
              <h2>AI</h2>
              <span>Trade intelligence engine</span>
            </div>

            <div className="about-stat-card">
              <h2>24/7</h2>
              <span>Global marketplace access</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>What IMPEXVIAA does</h2>

        <div className="about-grid">
          <div className="about-card">
            <h3>Verified suppliers</h3>
            <p>
              Discover trusted global suppliers with cleaner business
              verification and professional trade profiles.
            </p>
          </div>

          <div className="about-card">
            <h3>AI-generated stores</h3>
            <p>
              Exporters can create premium AI-powered product stores in
              minutes using HXN AI.
            </p>
          </div>

          <div className="about-card">
            <h3>Secure quotations</h3>
            <p>
              Buyers and suppliers can negotiate quotations with transparent
              communication and faster deal flow.
            </p>
          </div>

          <div className="about-card">
            <h3>Global payments</h3>
            <p>
              IMPEXVIAA Pay helps businesses move toward safer and more
              trusted cross-border transactions.
            </p>
          </div>
        </div>
      </section>

      <section className="about-vision">
        <div className="vision-card">
          <h2>Our vision</h2>

          <p>
            We believe global trade should feel modern, intelligent,
            transparent, and accessible — not outdated and complicated.
          </p>

          <p>
            IMPEXVIAA combines AI, supplier discovery, quotation systems,
            secure trade infrastructure, and marketplace technology into one
            scalable global ecosystem.
          </p>
        </div>
      </section>
    </main>
  );
}