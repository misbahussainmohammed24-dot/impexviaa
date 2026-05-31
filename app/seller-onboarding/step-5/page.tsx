"use client";

import { Suspense, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { useSearchParams } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

type FormState = {
  finalApprovalStatus: string;
  requestedVisibilityLevel: string;
  impexviaaPayInterest: string;
  aiBusinessEnhancementInterest: string;
  marketplaceActivationNotes: string;
};

const reviewItems = [
  "Business information",
  "Legal verification",
  "Product information",
  "Industry compliance",
  "Operational capability",
  "Risk indicators",
];

const aiAnalysis = [
  "Document authenticity analysis",
  "Business legitimacy analysis",
  "Compliance strength analysis",
  "Trade readiness analysis",
  "Fraud risk analysis",
  "Behavioural pattern analysis",
];

const trustScoreFactors = [
  ["Business Identity Strength", "Company authenticity, registration quality and contact verification."],
  ["Legal Verification Strength", "Government registration, tax identity and export license review."],
  ["Compliance Strength", "Industry certifications, export compliance and product certificates."],
  ["Operational Strength", "Manufacturing capability, logistics strength and export readiness."],
  ["Marketplace Reliability", "Communication quality, response rate, profile completeness and verification consistency."],
];

const finalBadges = [
  "Verified Business",
  "Verified Exporter",
  "Verified Manufacturer",
  "Trusted Supplier",
  "Premium Verified",
  "AI Verified Business",
  "Compliance Verified",
  "Export Ready",
  "Trusted Trade Partner",
];

const marketplaceFeatures = [
  "Global product visibility",
  "RFQ participation",
  "Buyer-supplier matchmaking",
  "Quotation system",
  "AI sourcing tools",
  "HXN AI assistant",
  "AI-generated stores",
  "Trade analytics",
  "Business networking",
];

const aiEnhancements = [
  "Product optimization",
  "SEO optimization",
  "Trade recommendations",
  "Supplier discovery",
  "Buyer matching",
  "Quotation generation",
  "AI store improvements",
];

export default function Step5Page() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Step5FinalApproval />
    </Suspense>
  );
}

function Step5FinalApproval() {
  const params = useSearchParams();

  const applicationId = params.get("applicationId") || "";
  const legalVerificationId = params.get("legalVerificationId") || "";
  const productStoreId = params.get("productStoreId") || "";
  const complianceId = params.get("complianceId") || "";
  const country = params.get("country") || "";

  const [loading, setLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [hxnMessage, setHxnMessage] = useState(
    "HXN AI is preparing your final trust score, marketplace activation and premium verification review."
  );

  const fullText =
    "I am HXN. I will analyse your business identity, legal verification, compliance strength, operational readiness, trust score and marketplace activation eligibility.";

  const [form, setForm] = useState<FormState>({
    finalApprovalStatus: "",
    requestedVisibilityLevel: "",
    impexviaaPayInterest: "",
    aiBusinessEnhancementInterest: "",
    marketplaceActivationNotes: "",
  });

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index += 1;

      if (index > fullText.length) clearInterval(interval);
    }, 34);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateStep5 = () => {
    if (!form.requestedVisibilityLevel) return "Business Visibility Level is required.";
    if (!form.impexviaaPayInterest) return "IMPEXVIAA Pay Eligibility option is required.";
    if (!form.aiBusinessEnhancementInterest) return "AI Business Enhancement option is required.";
    return "";
  };

  const submitStep5 = async () => {
    const error = validateStep5();

    if (error) {
      setHxnMessage(`HXN AI Guidance: ${error}`);
      alert(error);
      return;
    }

    try {
      setLoading(true);

      setHxnMessage(
        "HXN AI is finalising your trust score, activation review and marketplace approval record."
      );

      const approvalDoc = await addDoc(collection(db, "supplierFinalApprovals"), {
        step: 5,

        applicationId,
        legalVerificationId,
        productStoreId,
        complianceId,
        country,

        supplierUid: localStorage.getItem("supplierUid") || "",
        supplierEmail: localStorage.getItem("supplierEmail") || "",

        onboardingStatus: "step_5_completed",
        marketplaceActivationStatus: "pending_admin_approval",

        ...form,

        internalVerificationSummary: {
          businessInformation: "pending_review",
          legalVerification: "pending_review",
          productInformation: "pending_review",
          industryCompliance: "pending_review",
          operationalCapability: "pending_review",
          riskIndicators: "pending_review",
        },

        aiVerificationEngine: {
          documentAuthenticityAnalysis: "pending",
          businessLegitimacyAnalysis: "pending",
          complianceStrengthAnalysis: "pending",
          tradeReadinessAnalysis: "pending",
          fraudRiskAnalysis: "pending",
          behaviouralPatternAnalysis: "pending",
        },

        impexviaaTrustScore: {
          overallScore: "pending",
          businessIdentityStrength: "pending",
          legalVerificationStrength: "pending",
          complianceStrength: "pending",
          operationalStrength: "pending",
          marketplaceReliability: "pending",
        },

        finalTrustBadges: {
          verifiedBusiness: "pending",
          verifiedExporter: "pending",
          verifiedManufacturer: "pending",
          trustedSupplier: "pending",
          premiumVerified: "pending",
          aiVerifiedBusiness: "pending",
          complianceVerified: "pending",
          exportReady: "pending",
          trustedTradePartner: "pending",
        },

        marketplaceActivation: {
          globalProductVisibility: "pending",
          rfqParticipation: "pending",
          buyerSupplierMatchmaking: "pending",
          quotationSystem: "pending",
          aiSourcingTools: "pending",
          hxnAiAssistant: "pending",
          aiGeneratedStores: "pending",
          tradeAnalytics: "pending",
          businessNetworking: "pending",
        },

        impexviaaPayEligibility: {
          saferTransactionWorkflows: "pending",
          paymentProtectionSystems: "pending",
          tradeTransactionMonitoring: "pending",
          futureEscrowInfrastructure: "pending",
        },

        hxnGuidance:
          "Final approval, trust score, marketplace activation and premium verification data collected for admin review.",

        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

window.location.href = `/seller-onboarding/activation?finalApprovalId=${approvalDoc.id}`;
    } catch (error) {
      console.error("STEP 5 SUBMISSION ERROR:", error);

      setHxnMessage(
        "HXN AI detected a final approval submission issue. Please review and try again."
      );

      alert("Step 5 submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.blueGlow} />
      <div style={styles.purpleGlow} />
      <div style={styles.cyanGlow} />

      <section style={styles.hero}>
        <div style={styles.badge}>STEP 5 · FINAL APPROVAL</div>

        <h1 className="hero-title" style={styles.title}>
          AI Trust Score
          <br />
          Marketplace
          <br />
          Activation
        </h1>

        <p style={styles.subtitle}>
          Final intelligence review, trust scoring, premium verification and marketplace
          activation for the IMPEXVIAA global trade ecosystem.
        </p>

        <div className="ai-box" style={styles.aiBox}>
          <div className="robot-wrap" style={styles.robotWrap}>
            <Robot />
          </div>

          <div>
            <h2 style={styles.aiTitle}>HXN AI Final Approval Engine</h2>
            <div style={styles.aiLine} />

            <p style={styles.aiTyping}>
              {typedText}
              <span style={styles.cursor}>|</span>
            </p>

            <p style={styles.aiText}>{hxnMessage}</p>

            <button
              type="button"
              className="support-btn"
              style={styles.supportButton}
              onClick={() => setChatOpen(true)}
            >
              Open Final Approval Help
            </button>
          </div>
        </div>
      </section>

      <section className="form-card" style={styles.formCard}>
        <InfoPanel />

        <Section title="Final Business Review" />

        <div style={styles.cardGrid}>
          {reviewItems.map((item) => (
            <div key={item} style={styles.reviewCard}>
              <strong>{item}</strong>
              <span>Pending final intelligence review</span>
            </div>
          ))}
        </div>

        <ValidationPanel title="AI Verification Engine" items={aiAnalysis} />

        <Section title="IMPEXVIAA Trust Score" />

        <div style={styles.scorePanel}>
          <div style={styles.scoreCircle}>
            <strong>AI</strong>
            <span>Trust Score</span>
            <em>Pending</em>
          </div>

          <div style={styles.scoreContent}>
            <h3 style={styles.miniTitle}>Trust Score Factors</h3>

            <div style={styles.validationGrid}>
              {trustScoreFactors.map(([title, text]) => (
                <ValidationItem key={title} title={title} text={text} />
              ))}
            </div>
          </div>
        </div>

        <Section title="Final Trust Badges" />

        <div style={styles.badgeGrid}>
          {finalBadges.map((badge) => (
            <div key={badge} style={styles.outcomeCard}>
              <strong>{badge}</strong>
              <span>Pending Assignment</span>
            </div>
          ))}
        </div>

        <Section title="Marketplace Activation" />

        <div style={styles.tagGrid}>
          {marketplaceFeatures.map((feature) => (
            <span key={feature} style={styles.tag}>
              {feature}
            </span>
          ))}
        </div>

        <Section title="IMPEXVIAA Pay Eligibility" />

        <div style={styles.grid}>
          <Select
            name="impexviaaPayInterest"
            value={form.impexviaaPayInterest}
            onChange={handleChange}
          >
            <option value="">IMPEXVIAA Pay Eligibility *</option>
            <option>Interested</option>
            <option>Not Interested Yet</option>
            <option>Need More Information</option>
          </Select>

          <Select
            name="requestedVisibilityLevel"
            value={form.requestedVisibilityLevel}
            onChange={handleChange}
          >
            <option value="">Business Visibility Level *</option>
            <option>Standard Verified</option>
            <option>Premium Verified</option>
            <option>Enterprise Verified</option>
          </Select>

          <Select
            name="aiBusinessEnhancementInterest"
            value={form.aiBusinessEnhancementInterest}
            onChange={handleChange}
          >
            <option value="">AI Business Enhancement *</option>
            <option>Enable HXN AI Enhancements</option>
            <option>Enable Later</option>
            <option>Need Guidance</option>
          </Select>

          <Select
            name="finalApprovalStatus"
            value={form.finalApprovalStatus}
            onChange={handleChange}
          >
            <option value="">Expected Final Approval Status</option>
            <option>Fully Approved</option>
            <option>Premium Approved</option>
            <option>Conditionally Approved</option>
            <option>Additional Review Required</option>
            <option>Rejected</option>
          </Select>
        </div>

        <Section title="AI Business Enhancement" />

        <div style={styles.tagGrid}>
          {aiEnhancements.map((item) => (
            <span key={item} style={styles.tag}>
              {item}
            </span>
          ))}
        </div>

        <Section title="Marketplace Activation Notes" />

        <Textarea
          name="marketplaceActivationNotes"
          placeholder="Optional: final notes, business goals, preferred visibility, marketplace activation expectations or premium verification request."
          value={form.marketplaceActivationNotes}
          onChange={handleChange}
        />

        <ValidationPanel
          title="Step 5 Completion Result"
          items={[
            "Business becomes fully activated",
            "Marketplace visibility is enabled",
            "Trust badges are assigned",
            "AI systems become active",
            "Global trade participation begins",
            "Business officially enters the IMPEXVIAA AI-powered global trade ecosystem",
          ]}
        />

        <button
          className="premium-btn"
          type="button"
          style={styles.button}
          disabled={loading}
          onClick={submitStep5}
        >
          {loading
            ? "Submitting Final Approval..."
            : "Complete Step 5 & Activate Marketplace"}
        </button>
      </section>

      {chatOpen && (
        <div style={styles.overlay}>
          <div style={styles.chatCard}>
            <button
              type="button"
              style={styles.closeButton}
              onClick={() => setChatOpen(false)}
            >
              ×
            </button>

            <div style={styles.chatHandle} />

            <div style={styles.chatHeader}>
              <div style={styles.chatRobot}>
                <div style={styles.chatEye} />
                <div style={styles.chatEye} />
              </div>

              <div>
                <h2 style={styles.chatTitle}>HXN AI Final Approval Help</h2>
                <p style={styles.chatSub}>Select what you need help with.</p>
              </div>
            </div>

            <div style={styles.messageBubble}>
              I can explain trust score, marketplace activation, final badges,
              IMPEXVIAA Pay eligibility and premium verification.
            </div>

            <div style={styles.quickGrid}>
              {quickHelp.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  className="quick-btn"
                  style={styles.quickBtn}
                  onClick={() => setHxnMessage(item.answer)}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <textarea
              style={styles.chatInput}
              placeholder="Type your final approval question here..."
            />

            <button type="button" style={styles.chatSend}>
              Send Message
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

function LoadingScreen() {
  return (
    <main style={styles.page}>
      <div style={{ textAlign: "center", paddingTop: 140 }}>
        <h1 style={{ fontSize: 42 }}>Loading Final Approval...</h1>
      </div>
    </main>
  );
}

function Robot() {
  return (
    <>
      <div style={styles.robotHead}>
        <div style={styles.robotScreen}>
          <div style={styles.eyeLeft} />
          <div style={styles.eyeRight} />
          <div style={styles.smile} />
        </div>
      </div>

      <div style={styles.tablet}>
        <div style={styles.tabletLineOne} />
        <div style={styles.tabletLineTwo} />
        <div style={styles.tabletLineThree} />
      </div>

      <div style={styles.robotArm} />
      <div style={styles.robotAura} />
    </>
  );
}

function InfoPanel() {
  return (
    <div style={styles.infoPanel}>
      <h2 style={styles.infoTitle}>What Step 5 Confirms</h2>

      <p style={styles.infoText}>
        This final layer reviews AI verification, business trust scoring, compliance
        readiness, marketplace activation eligibility and premium trust infrastructure.
      </p>

      <div style={styles.infoGrid}>
        <span>AI verification analysis</span>
        <span>Trust score generation</span>
        <span>Final approval review</span>
        <span>Marketplace activation</span>
      </div>
    </div>
  );
}

function ValidationPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={styles.validationPanel}>
      <h2 style={styles.infoTitle}>{title}</h2>

      <div style={styles.validationGrid}>
        {items.map((item) => (
          <ValidationItem key={item} title={item} text="HXN AI status: Pending final review." />
        ))}
      </div>
    </div>
  );
}

function ValidationItem({ title, text }: { title: string; text: string }) {
  return (
    <div style={styles.validationItem}>
      <strong>{title}</strong>
      <p>{text}</p>
    </div>
  );
}

function Section({ title }: { title: string }) {
  return <h2 style={styles.sectionTitle}>{title}</h2>;
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="premium-field" style={styles.input} />;
}

function Select(props:React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className="premium-field" style={styles.input} />;
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className="premium-field" style={styles.textarea} />;
}

const quickHelp = [
  {
    title: "What is Trust Score?",
    answer:
      "Trust Score is an internal IMPEXVIAA intelligence score based on identity strength, legal verification, compliance strength, operational capability and marketplace reliability.",
  },
  {
    title: "What badges can I receive?",
    answer:
      "Businesses may receive Verified Business, Verified Exporter, Verified Manufacturer, Trusted Supplier, Premium Verified, AI Verified Business, Compliance Verified, Export Ready and Trusted Trade Partner badges.",
  },
  {
    title: "What happens after approval?",
    answer:
      "After final approval, marketplace visibility, RFQ participation, buyer-supplier matchmaking, AI store tools and trade analytics can be activated.",
  },
  {
    title: "What is IMPEXVIAA Pay?",
    answer:
      "IMPEXVIAA Pay is planned for safer transaction workflows, payment protection systems, trade transaction monitoring and future escrow infrastructure.",
  },
  {
    title: "What are visibility levels?",
    answer:
      "Visibility levels include Standard Verified, Premium Verified and Enterprise Verified depending on verification strength and platform eligibility.",
  },
];

const css = `
@keyframes fadeUp { from { opacity:0; transform:translateY(35px); } to { opacity:1; transform:translateY(0); } }
@keyframes floatBot { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-12px); } }
@keyframes pulseGlow { 0%,100% { opacity:.55; transform:scale(1); } 50% { opacity:1; transform:scale(1.08); } }
@keyframes chatLift { from { opacity:0; transform:translateY(130px) scale(.94); } to { opacity:1; transform:translateY(0) scale(1); } }
@keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }

.premium-field:focus {
  outline:none;
  border-color:rgba(125,211,252,.9);
  box-shadow:0 0 0 4px rgba(125,211,252,.16);
}

.premium-btn:hover,
.support-btn:hover,
.quick-btn:hover {
  transform:translateY(-3px);
}

option {
  color:#020617;
  background:#fff;
}

@media (max-width:760px) {
  .form-card { padding:24px !important; border-radius:30px !important; }
  .hero-title { font-size:42px !important; letter-spacing:-2px !important; }
  .ai-box { grid-template-columns:1fr !important; text-align:center !important; }
  .robot-wrap { margin:0 auto !important; }
  .score-panel { grid-template-columns:1fr !important; }
  .score-circle { margin:0 auto !important; }
}
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    background:
      "radial-gradient(circle at top,#16213f 0%,#07111f 45%,#020617 100%)",
    color: "#fff",
    padding: "72px 18px 90px",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
  },

  blueGlow: {
    position: "absolute",
    top: -130,
    right: -120,
    width: 420,
    height: 420,
    borderRadius: "50%",
    background: "rgba(56,189,248,.18)",
    filter: "blur(110px)",
    animation: "pulseGlow 8s ease-in-out infinite",
  },

  purpleGlow: {
    position: "absolute",
    bottom: 80,
    left: -130,
    width: 420,
    height: 420,
    borderRadius: "50%",
    background: "rgba(168,85,247,.18)",
    filter: "blur(115px)",
    animation: "pulseGlow 9s ease-in-out infinite",
  },

  cyanGlow: {
    position: "absolute",
    top: 350,
    left: "42%",
    width: 320,
    height: 320,
    borderRadius: "50%",
    background: "rgba(34,211,238,.12)",
    filter: "blur(100px)",
  },

  hero: {
    maxWidth: 1050,
    margin: "0 auto 55px",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
    animation: "fadeUp .8s ease both",
  },

  badge: {
    display: "inline-flex",
    padding: "10px 22px",
    borderRadius: 999,
    background: "rgba(15,23,42,.8)",
    border: "1px solid rgba(125,211,252,.38)",
    color: "#7dd3fc",
    letterSpacing: 4,
    fontSize: 12,
    fontWeight: 950,
    marginBottom: 28,
  },

  title: {
    fontSize: "clamp(44px,10vw,92px)",
    lineHeight: 0.92,
    margin: 0,
    fontWeight: 950,
    letterSpacing: "-4px",
  },

  subtitle: {
    maxWidth: 860,
    margin: "30px auto 0",
    color: "#dbeafe",
    fontSize: 18,
    lineHeight: 1.85,
  },

  aiBox: {
    maxWidth: 940,
    margin: "34px auto 0",
    padding: 28,
    borderRadius: 36,
    background:
      "linear-gradient(135deg,#ffffff 0%,#f8fbff 45%,#eef7ff 100%)",
    color: "#020617",
    display: "grid",
    gridTemplateColumns: "210px 1fr",
    gap: 24,
    alignItems: "center",
    textAlign: "left",
    boxShadow:
      "0 28px 80px rgba(15,23,42,.34), 0 0 70px rgba(34,211,238,.20)",
},

robotWrap: {
  height: 190,
  width: 210,
  position: "relative",
  animation: "floatBot 4s ease-in-out infinite",
},

robotHead: {
  width: 132,
  height: 104,
  borderRadius: 40,
  position: "absolute",
  top: 8,
  left: 46,
  background: "linear-gradient(135deg,#ffffff,#dff6ff)",
  border: "6px solid #cfe8ff",
  display: "grid",
  placeItems: "center",
},

robotScreen: {
  width: 84,
  height: 58,
  borderRadius: 24,
  background: "linear-gradient(135deg,#061733,#0b1f4a)",
  position: "relative",
},

eyeLeft: {
  width: 13,
  height: 22,
  borderRadius: 99,
  background: "#67e8f9",
  position: "absolute",
  top: 16,
  left: 23,
  boxShadow: "0 0 18px #22d3ee",
},

eyeRight: {
  width: 13,
  height: 22,
  borderRadius: 99,
  background: "#67e8f9",
  position: "absolute",
  top: 16,
  right: 23,
  boxShadow: "0 0 18px #22d3ee",
},

smile: {
  width: 26,
  height: 10,
  borderBottom: "4px solid #67e8f9",
  borderRadius: "0 0 20px 20px",
  position: "absolute",
  bottom: 10,
  left: 29,
},

tablet: {
  width: 106,
  height: 70,
  borderRadius: 22,
  background: "linear-gradient(135deg,#e0f7ff,#dbeafe)",
  border: "4px solid #bae6fd",
  padding: 14,
  position: "absolute",
  left: 0,
  bottom: 20,
},

tabletLineOne: {
  width: 54,
  height: 7,
  borderRadius: 99,
  background: "#60a5fa",
  marginBottom: 9,
},

tabletLineTwo: {
  width: 72,
  height: 7,
  borderRadius: 99,
  background: "#22d3ee",
  marginBottom: 9,
},

tabletLineThree: {
  width: 46,
  height: 7,
  borderRadius: 99,
  background: "#a78bfa",
},

robotArm: {
  width: 48,
  height: 82,
  borderRadius: 26,
  position: "absolute",
  right: 8,
  top: 78,
  background: "linear-gradient(135deg,#ffffff,#dbeafe)",
  border: "5px solid #cfe8ff",
  transform: "rotate(-18deg)",
},

robotAura: {
  position: "absolute",
  inset: 20,
  background: "rgba(34,211,238,.18)",
  filter: "blur(45px)",
  zIndex: -1,
},

aiTitle: {
  margin: 0,
  fontSize: 36,
  fontWeight: 950,
  letterSpacing: "-1px",
},

aiLine: {
  width: 46,
  height: 5,
  borderRadius: 99,
  margin: "14px 0",
  background: "linear-gradient(135deg,#9333ea,#06b6d4)",
},

aiTyping: {
  margin: 0,
  fontSize: "clamp(22px,4vw,34px)",
  lineHeight: 1.18,
  fontWeight: 950,
  background: "linear-gradient(135deg,#9333ea,#2563eb,#06b6d4)",
  WebkitBackgroundClip: "text",
  color: "transparent",
},

cursor: {
  color: "#06b6d4",
  animation: "blink 1s infinite",
},

aiText: {
  margin: "16px 0 0",
  color: "#334155",
  fontWeight: 800,
  lineHeight: 1.55,
  fontSize: 16,
},

supportButton: {
  marginTop: 18,
  width: "100%",
  border: "none",
  borderRadius: 22,
  padding: "16px 18px",
  background: "linear-gradient(135deg,#020617,#111827)",
  color: "#fff",
  fontSize: 16,
  fontWeight: 950,
  cursor: "pointer",
  transition: ".3s ease",
},
formCard: {
  maxWidth: 1120,
  margin: "0 auto",
  position: "relative",
  zIndex: 2,
  borderRadius: 42,
  padding: 42,
  background:
    "linear-gradient(145deg,rgba(15,23,42,.90),rgba(30,41,59,.72))",
  border: "1px solid rgba(148,163,184,.22)",
  boxShadow: "0 45px 140px rgba(0,0,0,.62)",
  backdropFilter: "blur(26px)",
},

infoPanel: {
  borderRadius: 28,
  padding: 24,
  background:
    "linear-gradient(135deg,rgba(125,211,252,.14),rgba(168,85,247,.10))",
  border: "1px solid rgba(125,211,252,.24)",
  marginBottom: 28,
},

infoTitle: {
  margin: 0,
  fontSize: 28,
  fontWeight: 950,
  letterSpacing: "-1px",
},

infoText: {
  color: "#dbeafe",
  lineHeight: 1.75,
  fontSize: 16,
},

infoGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: 12,
  marginTop: 18,
},

sectionTitle: {
  fontSize: "clamp(28px,5vw,46px)",
  margin: "42px 0 24px",
  fontWeight: 950,
  letterSpacing: "-2px",
},

grid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(245px,1fr))",
  gap: 16,
  marginBottom: 24,
},

input: {
  width: "100%",
  minHeight: 62,
  borderRadius: 22,
  border: "1px solid rgba(255,255,255,.14)",
  background: "rgba(255,255,255,.075)",
  color: "#fff",
  padding: "0 20px",
  fontSize: 16,
},

textarea: {
  width: "100%",
  minHeight: 140,
  borderRadius: 22,
  border: "1px solid rgba(255,255,255,.14)",
  background: "rgba(255,255,255,.075)",
  color: "#fff",
  padding: 18,
  fontSize: 16,
  lineHeight: 1.7,
  resize: "vertical",
  marginBottom: 20,
},

cardGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: 16,
  marginBottom: 30,
},

reviewCard: {
  borderRadius: 24,
  padding: 20,
  background:
    "linear-gradient(135deg,rgba(125,211,252,.14),rgba(168,85,247,.10))",
  border: "1px solid rgba(125,211,252,.24)",
  display: "grid",
  gap: 8,
  color: "#fff",
},

validationPanel: {
  borderRadius: 28,
  padding: 24,
  background: "rgba(2,6,23,.42)",
  border: "1px solid rgba(125,211,252,.18)",
  marginTop: 30,
  marginBottom: 30,
},

validationGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
  gap: 14,
  marginTop: 18,
},

validationItem: {
  borderRadius: 20,
  padding: 18,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.10)",
  color: "#dbeafe",
},

scorePanel: {
  borderRadius: 32,
  padding: 24,
  background:
    "linear-gradient(135deg,rgba(34,211,238,.10),rgba(168,85,247,.10))",
  border: "1px solid rgba(125,211,252,.22)",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 22,
  alignItems: "center",
  marginBottom: 32,
  overflow: "hidden",
},

scoreCircle: {
  width: "min(220px, 80vw)",
  height: "min(220px, 80vw)",
  borderRadius: "50%",
  background:
    "linear-gradient(135deg,#7dd3fc,#2563eb,#9333ea)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#020617",
  fontWeight: 950,
  boxShadow: "0 25px 90px rgba(14,165,233,.35)",
  margin: "0 auto",
},

scoreContent: {
  minWidth: 0,
},

miniTitle: {
  margin: "0 0 14px",
  fontSize: 22,
  fontWeight: 950,
},

tagGrid: {
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  marginBottom: 28,
},

tag: {
  borderRadius: 999,
  padding: "10px 14px",
  background: "rgba(125,211,252,.13)",
  border: "1px solid rgba(125,211,252,.24)",
  color: "#bae6fd",
  fontSize: 13,
  fontWeight: 850,
},

badgeGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
  gap: 14,
  marginBottom: 30,
},

outcomeCard: {
  borderRadius: 22,
  padding: 18,
  background:
    "linear-gradient(135deg,rgba(34,211,238,.12),rgba(37,99,235,.10))",
  border: "1px solid rgba(125,211,252,.22)",
  color: "#dbeafe",
  display: "grid",
  gap: 8,
},

button: {
  width: "100%",
  marginTop: 28,
  border: "none",
  borderRadius: 26,
  padding: "22px 24px",
  background:
    "linear-gradient(135deg,#7dd3fc,#38bdf8,#2563eb)",
  color: "#020617",
  fontSize: 18,
  fontWeight: 950,
  cursor: "pointer",
  boxShadow: "0 25px 90px rgba(14,165,233,.35)",
},

overlay: {
  position: "fixed",
  inset: 0,
  zIndex: 99999,
  background: "rgba(2,6,23,.72)",
  backdropFilter: "blur(14px)",
  display: "grid",
  placeItems: "end center",
  padding: 20,
},
chatCard: {
  width: "100%",
  maxWidth: 620,
  borderRadius: "34px 34px 28px 28px",
  padding: 28,
  background:
    "linear-gradient(135deg,#ffffff 0%,#f8fbff 50%,#eef7ff 100%)",
  color: "#020617",
  position: "relative",
  animation: "chatLift .42s cubic-bezier(.2,.9,.2,1) both",
},

chatHandle: {
  width: 62,
  height: 6,
  borderRadius: 99,
  background: "#cbd5e1",
  margin: "0 auto 18px",
},

closeButton: {
  position: "absolute",
  top: 18,
  right: 18,
  width: 38,
  height: 38,
  borderRadius: "50%",
  border: "none",
  background: "#020617",
  color: "#fff",
  fontSize: 24,
  cursor: "pointer",
},

chatHeader: {
  display: "flex",
  gap: 14,
  alignItems: "center",
  marginBottom: 20,
},

chatRobot: {
  width: 62,
  height: 52,
  borderRadius: 20,
  background: "linear-gradient(135deg,#061733,#0b1f4a)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 7,
},

chatEye: {
  width: 10,
  height: 18,
  borderRadius: 99,
  background: "#67e8f9",
  boxShadow: "0 0 12px #22d3ee",
},

chatTitle: {
  margin: 0,
  fontSize: 26,
  fontWeight: 950,
},

chatSub: {
  margin: "4px 0 0",
  color: "#475569",
  fontSize: 14,
},

messageBubble: {
  padding: 17,
  borderRadius: 20,
  background: "#eff6ff",
  color: "#0f172a",
  fontWeight: 850,
  lineHeight: 1.55,
  marginBottom: 18,
},

quickGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
  gap: 10,
  marginBottom: 18,
},

quickBtn: {
  border: "1px solid #cbd5e1",
  background: "#fff",
  borderRadius: 16,
  padding: "12px 14px",
  color: "#020617",
  fontWeight: 850,
  cursor: "pointer",
  transition: ".3s ease",
},

chatInput: {
  width: "100%",
  minHeight: 110,
  borderRadius: 18,
  border: "1px solid #cbd5e1",
  background: "#fff",
  color: "#020617",
  padding: 16,
  fontSize: 15,
  resize: "none",
  marginBottom: 16,
},

chatSend: {
  width: "100%",
  border: "none",
  borderRadius: 18,
  padding: "16px 18px",
  background:
    "linear-gradient(135deg,#7dd3fc,#38bdf8,#2563eb)",
  color: "#020617",
  fontSize: 16,
  fontWeight: 950,
  cursor: "pointer",
  boxShadow: "0 15px 50px rgba(14,165,233,.30)",
},
};