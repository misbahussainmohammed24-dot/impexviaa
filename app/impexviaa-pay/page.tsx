"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { useRouter } from "next/navigation";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function getTimeLeft(date: Date): TimeLeft {
  const distance = date.getTime() - Date.now();
  if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

export default function ImpexviaaPayLockedPage() {
  const router = useRouter();
  const launchDate = useMemo(() => new Date("2026-07-09T00:00:00"), []);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(launchDate));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(launchDate)), 1000);
    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.gridBg} />
      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />

      <section style={styles.shell}>
        <nav style={styles.nav}>
          <div style={styles.brand}>
            <div style={styles.logoDot} />
            <div>
              <div style={styles.logo}>IMPEXVIAA PAY</div>
              <div style={styles.logoSub}>Secure global trade payments</div>
            </div>
          </div>
          <div style={styles.navBadge}>COMING Q3 2026</div>
        </nav>

        <section className="heroGrid" style={styles.hero}>
          <div>
            <div style={styles.badge}>GLOBAL PAYMENT INFRASTRUCTURE</div>

            <h1 style={styles.title}>Global trade payments, protected by design.</h1>

            <p style={styles.subtitle}>
              Impexviaa Pay is being prepared for verified suppliers, serious buyers,
              subscription activation, invoice records, fraud monitoring, and future
              escrow-ready global trade workflows.
            </p>

            <div style={styles.lockPanel}>
              <div style={styles.lockMini}>🔒</div>
              <div>
                <h2 style={styles.lockTitle}>Payment system temporarily locked</h2>
                <p style={styles.lockText}>
                  We are completing security testing, compliance flow, transaction
                  monitoring, and payment protection before public launch.
                </p>
              </div>
            </div>

            <div style={styles.countdownPanel}>
              <TimeBox value={timeLeft.days} label="Days" />
              <TimeBox value={timeLeft.hours} label="Hours" />
              <TimeBox value={timeLeft.minutes} label="Minutes" />
              <TimeBox value={timeLeft.seconds} label="Seconds" />
            </div>

            <button type="button" style={styles.mainButton} onClick={() => router.push("/")}>
              Return to Impexviaa Home
            </button>
          </div>

          <div style={styles.paymentVisual}>
            <div className="code-flow" style={styles.codeFlow}>
              <p>payment_gateway.secureHandshake();</p>
              <p>supplier_subscription.encrypt();</p>
              <p>fraud_monitoring.status = active;</p>
              <p>escrow_layer.prepare();</p>
              <p>invoice_record.sync();</p>
              <p>cross_border_route.verify();</p>
            </div>

            <div className="route routeA" />
            <div className="route routeB" />
            <div className="route routeC" />

            <div className="moving-dot dotA" />
            <div className="moving-dot dotB" />
            <div className="moving-dot dotC" />

            <PaymentCard className="cardA" title="VISA" text="Buyer payment rail" />
            <PaymentCard className="cardB" title="BANK" text="Supplier settlement" />
            <PaymentCard className="cardC" title="ESCROW" text="Future protection" />

            <div className="big-lock" style={styles.bigLock}>
              <div style={styles.ringOne} />
              <div style={styles.ringTwo} />
              <div style={styles.lockEmoji}>🔒</div>
              <span style={styles.lockStatus}>PAYMENT SYSTEM SECURED</span>
            </div>
          </div>
        </section>

        <section style={styles.statusStrip}>
          <div className="ticker">
            <span>Payment gateway preparation active</span>
            <span>Fraud monitoring module in testing</span>
            <span>Escrow-ready architecture planned</span>
            <span>Supplier subscription flow securing</span>
            <span>Buyer transaction safety under review</span>
            <span>Invoice and transaction records preparing</span>
          </div>
        </section>

        <section style={styles.features}>
          <Feature title="Verified Payments" text="Every payment workflow is being designed around verified business identities and clean transaction records." />
          <Feature title="Trade Protection" text="Fraud monitoring, payment review, and future escrow-style workflows are being prepared before public release." />
          <Feature title="Cross-Border Ready" text="Impexviaa Pay is planned for global suppliers, buyers, invoices, subscriptions, and trade operations." />
        </section>

        <section style={styles.infoBox}>
          <p style={styles.kicker}>WHY THIS PAGE IS LOCKED</p>
          <h2 style={styles.infoTitle}>We prefer a trusted launch over an unfinished payment experience.</h2>
          <p style={styles.infoText}>
            Payment infrastructure is a sensitive part of global trade. Impexviaa Pay
            is being developed with security, fraud prevention, compliance readiness,
            payment traceability, and buyer-supplier confidence in mind. Until the
            system is fully prepared, the payment area will remain locked with a
            transparent launch countdown.
          </p>
        </section>
      </section>
    </main>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div style={styles.timeBox}>
      <strong>{String(value).padStart(2, "0")}</strong>
      <span>{label}</span>
    </div>
  );
}

function PaymentCard({ title, text, className }: { title: string; text: string; className: string }) {
  return (
    <div className={`payment-card ${className}`} style={styles.paymentCard}>
      <small>{title}</small>
      <strong>{text}</strong>
      <span>encrypted rail</span>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="feature" style={styles.feature}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

const css = `
html, body { background:#020617 !important; }

@keyframes codeMove {
  0% { transform: translateY(35px); opacity:.12; }
  50% { opacity:.55; }
  100% { transform: translateY(-70px); opacity:.12; }
}

@keyframes lockPulse {
  0%,100% { transform: scale(1); filter: drop-shadow(0 0 28px rgba(34,211,238,.45)); }
  50% { transform: scale(1.06); filter: drop-shadow(0 0 70px rgba(214,181,109,.65)); }
}

@keyframes ringRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes reverseRingRotate { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }

@keyframes floatCard {
  0%,100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-14px) rotate(2deg); }
}

@keyframes tickerMove { from { transform: translateX(0); } to { transform: translateX(-50%); } }

@keyframes routePulse {
  0%,100% { opacity:.2; transform: scaleX(.78); }
  50% { opacity:.9; transform: scaleX(1); }
}

@keyframes dotA {
  0% { left:14%; top:28%; opacity:0; }
  15% { opacity:1; }
  100% { left:74%; top:58%; opacity:0; }
}

@keyframes dotB {
  0% { left:80%; top:40%; opacity:0; }
  15% { opacity:1; }
  100% { left:18%; top:72%; opacity:0; }
}

@keyframes dotC {
  0% { left:50%; top:16%; opacity:0; }
  15% { opacity:1; }
  100% { left:50%; top:84%; opacity:0; }
}

.code-flow { animation: codeMove 5s linear infinite; }
.big-lock { animation: lockPulse 2.7s ease-in-out infinite; }
.payment-card { animation: floatCard 4.6s ease-in-out infinite; }
.cardB { animation-delay:.7s; }
.cardC { animation-delay:1.3s; }

.route {
  position:absolute;
  height:2px;
  border-radius:999px;
  background:linear-gradient(90deg,transparent,#22d3ee,#d6b56d,transparent);
  transform-origin:left center;
  animation:routePulse 3s ease-in-out infinite;
  z-index:1;
}

.routeA { width:260px; top:32%; left:13%; transform:rotate(18deg); }
.routeB { width:250px; top:54%; right:12%; transform:rotate(-17deg); animation-delay:.8s; }
.routeC { width:210px; bottom:27%; left:25%; transform:rotate(8deg); animation-delay:1.2s; }

.moving-dot {
  position:absolute;
  width:11px;
  height:11px;
  border-radius:999px;
  background:#22d3ee;
  box-shadow:0 0 24px rgba(34,211,238,.95);
  z-index:2;
}

.dotA { animation:dotA 4.6s linear infinite; }
.dotB { animation:dotB 5.2s linear infinite; }
.dotC { animation:dotC 5.8s linear infinite; }

.cardA { top:44px; left:34px; }
.cardB { bottom:72px; right:34px; }
.cardC { bottom:42px; left:42px; }

.ringOne { animation:ringRotate 12s linear infinite; }
.ringTwo { animation:reverseRingRotate 18s linear infinite; }

.ticker {
  display:flex;
  width:max-content;
  gap:50px;
  animation:tickerMove 28s linear infinite;
}

.ticker span { white-space:nowrap; }

.feature { transition:.3s ease; }
.feature:hover {
  transform:translateY(-8px);
  border-color:rgba(34,211,238,.55) !important;
  box-shadow:0 32px 100px rgba(0,0,0,.5) !important;
}

button { transition:.25s ease; }
button:hover { transform:translateY(-3px); }

@media(max-width:920px) {
  .heroGrid {
    grid-template-columns:1fr !important;
  }

  .route,
  .moving-dot {
    display:none !important;
  }

  .payment-card {
    position:relative !important;
    width:100% !important;
    max-width:100% !important;
    left:auto !important;
    right:auto !important;
    top:auto !important;
    bottom:auto !important;
    transform:none !important;
    animation:none !important;
  }

  .cardA,
  .cardB,
  .cardC {
    margin:0 !important;
  }
}
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top left,#0c4a3d 0%,#08241f 35%,#020617 100%)",
    color: "#fff",
    overflowX: "hidden",
    position: "relative",
    padding: "40px 18px 120px",
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
  },
  gridBg: {
    position: "absolute",
    inset: 0,
    opacity: 0.06,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
    backgroundSize: "80px 80px",
  },
  glowOne: {
    position: "absolute",
    top: -200,
    right: -150,
    width: 600,
    height: 600,
    borderRadius: "50%",
    background: "rgba(34,211,238,.18)",
    filter: "blur(140px)",
  },
  glowTwo: {
    position: "absolute",
    bottom: -150,
    left: -180,
    width: 600,
    height: 600,
    borderRadius: "50%",
    background: "rgba(214,181,109,.18)",
    filter: "blur(140px)",
  },
  shell: {
    maxWidth: 1280,
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },
  nav: {
    minHeight: 72,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 24px",
    borderRadius: 999,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.08)",
    backdropFilter: "blur(20px)",
    marginBottom: 40,
    gap: 14,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  logoDot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "#22d3ee",
    boxShadow: "0 0 20px rgba(34,211,238,.9)",
  },
  logo: {
    fontWeight: 900,
    letterSpacing: 2,
    fontSize: 18,
  },
  logoSub: {
    color: "#94a3b8",
    fontSize: 12,
  },
  navBadge: {
    padding: "10px 18px",
    borderRadius: 999,
    background: "rgba(214,181,109,.14)",
    color: "#f8e7b2",
    fontWeight: 800,
    fontSize: 12,
    letterSpacing: 1,
    whiteSpace: "nowrap",
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1.05fr .95fr",
    gap: 36,
    alignItems: "center",
  },
  badge: {
    display: "inline-flex",
    padding: "12px 20px",
    borderRadius: 999,
    background: "rgba(255,255,255,.05)",
    border: "1px solid rgba(214,181,109,.2)",
    color: "#d6b56d",
    fontWeight: 900,
    fontSize: 12,
    letterSpacing: 2,
    marginBottom: 24,
  },
  title: {
    margin: 0,
    fontWeight: 950,
    lineHeight: 0.95,
    letterSpacing: "-3px",
    fontSize: "clamp(46px,7vw,88px)",
  },
  subtitle: {
    marginTop: 24,
    color: "rgba(226,232,240,.82)",
    lineHeight: 1.8,
    fontSize: 18,
    maxWidth: 760,
  },
  lockPanel: {
    marginTop: 30,
    display: "flex",
    gap: 18,
    padding: 24,
    borderRadius: 28,
    background: "rgba(255,255,255,.05)",
    border: "1px solid rgba(255,255,255,.08)",
    backdropFilter: "blur(20px)",
  },
  lockMini: {
    fontSize: 36,
  },
  lockTitle: {
    margin: 0,
    fontSize: 22,
    fontWeight: 900,
  },
  lockText: {
    marginTop: 10,
    color: "#cbd5e1",
    lineHeight: 1.7,
  },
  countdownPanel: {
    marginTop: 28,
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 12,
  },
  timeBox: {
    minHeight: 110,
    borderRadius: 24,
    background: "linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.03))",
    border: "1px solid rgba(125,211,252,.15)",
    display: "grid",
    placeItems: "center",
    backdropFilter: "blur(22px)",
  },
  mainButton: {
    marginTop: 28,
    minHeight: 64,
    padding: "0 30px",
    borderRadius: 999,
    border: "none",
    cursor: "pointer",
    fontWeight: 900,
    background: "linear-gradient(135deg,#d6b56d,#22d3ee)",
    color: "#02131a",
    fontSize: 16,
  },
  paymentVisual: {
    minHeight: 620,
    position: "relative",
    borderRadius: 40,
    overflow: "hidden",
    background: "linear-gradient(145deg,rgba(2,6,23,.9),rgba(6,31,27,.85))",
    border: "1px solid rgba(255,255,255,.08)",
    boxShadow: "0 40px 140px rgba(0,0,0,.55)",
    display: "grid",
    placeItems: "center",
    gap: 14,
    padding: 28,
  },
  codeFlow: {
    position: "absolute",
    inset: 0,
    padding: 30,
    color: "rgba(34,211,238,.45)",
    fontFamily: "monospace",
    lineHeight: 2,
    fontSize: 14,
  },
  paymentCard: {
    position: "absolute",
    width: 190,
    padding: "18px 20px",
    borderRadius: 24,
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(255,255,255,.12)",
    backdropFilter: "blur(24px)",
    display: "grid",
    gap: 6,
    color: "#dbeafe",
    zIndex: 3,
    boxShadow: "0 24px 90px rgba(0,0,0,.45)",
  },
  bigLock: {
    width: 260,
    height: 260,
    borderRadius: "50%",
    background: "radial-gradient(circle,#041513 0%,#061f1b 50%,#020617 100%)",
    display: "grid",
    placeItems: "center",
    position: "relative",
    zIndex: 5,
    boxShadow: "inset 0 0 70px rgba(34,211,238,.14)",
  },
  ringOne: {
    position: "absolute",
    inset: -18,
    borderRadius: "50%",
    border: "2px solid rgba(34,211,238,.35)",
  },
  ringTwo: {
    position: "absolute",
    inset: -38,
    borderRadius: "50%",
    border: "2px solid rgba(214,181,109,.25)",
  },
  lockEmoji: {
    fontSize: 140,
    filter:
      "drop-shadow(0 0 40px rgba(34,211,238,.45)) drop-shadow(0 0 90px rgba(214,181,109,.35))",
  },
  lockStatus: {
    position: "absolute",
    bottom: -45,
    fontSize: 11,
    letterSpacing: 3,
    fontWeight: 900,
    color: "#d6b56d",
    whiteSpace: "nowrap",
  },
  statusStrip: {
    marginTop: 30,
    overflow: "hidden",
    borderRadius: 999,
    padding: "18px 0",
    background: "rgba(255,255,255,.05)",
    border: "1px solid rgba(255,255,255,.08)",
    backdropFilter: "blur(20px)",
    color: "#cbd5e1",
    fontWeight: 800,
  },
  features: {
    marginTop: 36,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: 18,
  },
  feature: {
    padding: 28,
    borderRadius: 28,
    background: "linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.03))",
    border: "1px solid rgba(255,255,255,.08)",
    backdropFilter: "blur(20px)",
    boxShadow: "0 24px 80px rgba(0,0,0,.3)",
  },
  infoBox: {
    marginTop: 36,
    padding: 34,
    borderRadius: 32,
    background: "linear-gradient(135deg,rgba(214,181,109,.10),rgba(34,211,238,.08))",
    border: "1px solid rgba(214,181,109,.15)",
    backdropFilter: "blur(22px)",
  },
  kicker: {
    margin: 0,
    color: "#d6b56d",
    fontWeight: 900,
    letterSpacing: 3,
    fontSize: 12,
  },
  infoTitle: {
    marginTop: 12,
    marginBottom: 18,
    fontSize: "clamp(32px,4vw,54px)",
    fontWeight: 950,
    lineHeight: 1,
    letterSpacing: "-2px",
  },
  infoText: {
    color: "#cbd5e1",
    lineHeight: 1.9,
    fontSize: 17,
  },
};