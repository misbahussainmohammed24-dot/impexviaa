"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { useRouter } from "next/navigation";

type DocKey =
  | "businessRegistration"
  | "taxRegistration"
  | "governmentId"
  | "productImages"
  | "industryCompliance"
  | "exportLicense";

type Uploads = Record<DocKey, File | null>;

const requiredDocs: {
  key: DocKey;
  title: string;
  why: string;
  checks: string[];
}[] = [
  {
    key: "businessRegistration",
    title: "Business Registration Certificate",
    why: "This proves that your company legally exists and is registered with an official authority.",
    checks: ["Company name match", "Registration number", "Issuing authority", "Document clarity"],
  },
  {
    key: "taxRegistration",
    title: "Tax Registration / VAT / GST / TIN",
    why: "This helps verify that the business follows tax rules and can operate commercially.",
    checks: ["Tax ID format", "Country match", "Company match", "Document validity"],
  },
  {
    key: "governmentId",
    title: "Owner / Authorized Person ID",
    why: "This confirms that the account is controlled by a real person connected to the business.",
    checks: ["Name match", "ID clarity", "Expiry check", "Identity consistency"],
  },
  {
    key: "productImages",
    title: "Product Images",
    why: "This helps buyers understand what the supplier actually sells before contacting them.",
    checks: ["Image clarity", "Product relevance", "Duplicate risk", "Listing quality"],
  },
  {
    key: "industryCompliance",
    title: "Industry Compliance Documents",
    why: "Agriculture, pharma, electronics, and auto parts need category-specific proof to protect buyers.",
    checks: ["Correct category", "Certificate number", "Authority", "Expiry date"],
  },
  {
    key: "exportLicense",
    title: "Export / Import License",
    why: "This shows whether the supplier is eligible to participate in international trade where required.",
    checks: ["License status", "Country rule", "Business match", "Export readiness"],
  },
];

export default function SupplierVerificationPage() {
  const router = useRouter();

  const [paid, setPaid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [aiMessage, setAiMessage] = useState(
    "HXN AI is locked. Activate verification to unlock document review, trust score, fraud detection, and marketplace approval."
  );

  const [uploads, setUploads] = useState<Uploads>({
    businessRegistration: null,
    taxRegistration: null,
    governmentId: null,
    productImages: null,
    industryCompliance: null,
    exportLicense: null,
  });

  const completion = useMemo(() => {
    const total = requiredDocs.length;
    const done = Object.values(uploads).filter(Boolean).length;
    return Math.round((done / total) * 100);
  }, [uploads]);

  const handleFile = (key: DocKey, file?: File) => {
    if (!file) return;

    const allowed = ["application/pdf", "image/png", "image/jpeg", "image/jpg"];

    if (!allowed.includes(file.type)) {
      setAiMessage(`File not recognised. Please upload PDF, PNG, or JPG only. Rejected file: ${file.name}`);
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      setAiMessage("File rejected. Maximum allowed size is 8 MB.");
      return;
    }

    setUploads((prev) => ({ ...prev, [key]: file }));

    if (!paid) {
      setAiMessage(
        "File received. Activate verification to let HXN AI review your document and calculate trust score."
      );
      return;
    }

    setAiMessage(
      `HXN AI received ${file.name}. After submission, this document will be checked for clarity, business match, authenticity signals, and compliance readiness.`
    );
  };

  const activateVerification = () => {
    router.push("/subscription/seller");
  };

  const submitVerification = () => {
    if (!paid) {
      setAiMessage("Please activate verification first. HXN AI review starts after subscription activation.");
      return;
    }

    const missing = requiredDocs.filter((doc) => !uploads[doc.key]);

    if (missing.length > 0) {
      setAiMessage(`Missing document: ${missing[0].title}. Please upload all required documents before submission.`);
      return;
    }

    setSubmitted(true);
    setScore(86);
    setAiMessage(
      "HXN AI verification started. Your supplier profile looks strong. Estimated trust score: 86/100. Final approval requires platform review."
    );
  };

  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />

      <section style={styles.hero}>
        <div style={styles.badge}>IMPEXVIAA SUPPLIER VERIFICATION</div>

        <h1 style={styles.title}>
          Build buyer trust before you trade globally.
        </h1>

        <p style={styles.subtitle}>
          Impexviaa verifies suppliers through business identity, legal documents,
          product proof, compliance checks, and AI-assisted risk review. This helps
          buyers identify genuine suppliers and helps serious businesses stand out.
        </p>

        <div style={styles.heroButtons}>
          <button style={styles.primaryButton} onClick={activateVerification}>
            Activate Verification
          </button>

          <button
            style={styles.secondaryButton}
            onClick={() => {
              document.getElementById("docs")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Required Documents
          </button>
        </div>
      </section>

      <section style={styles.trustGrid}>
        <TrustCard title="Why we verify" text="To reduce fake suppliers, improve buyer confidence, and create a safer global B2B marketplace." />
        <TrustCard title="Why documents are asked" text="Each document helps prove business identity, ownership, tax presence, trade eligibility, and product authenticity." />
        <TrustCard title="How HXN AI helps" text="HXN AI organises data, detects missing documents, highlights risk signals, and prepares verification summaries." />
      </section>

      <section style={styles.progressBox}>
        <div>
          <p style={styles.kicker}>VERIFICATION READINESS</p>
          <h2 style={styles.sectionTitle}>{completion}% profile completed</h2>
        </div>

        <div style={styles.progressTrack}>
          <div style={{ ...styles.progressFill, width: `${completion}%` }} />
        </div>

        <p style={styles.progressText}>
          Upload all required documents to prepare your supplier profile for HXN AI verification and marketplace approval.
        </p>
      </section>

      <section id="docs" style={styles.documentSection}>
        <p style={styles.kicker}>REQUIRED DOCUMENTS</p>
        <h2 style={styles.sectionTitle}>What we ask for, and why it matters.</h2>

        <div style={styles.docGrid}>
          {requiredDocs.map((doc) => (
            <div key={doc.key} style={styles.docCard}>
              <div style={styles.docTop}>
                <div>
                  <h3 style={styles.docTitle}>{doc.title}</h3>
                  <p style={styles.docWhy}>{doc.why}</p>
                </div>

                <span style={uploads[doc.key] ? styles.doneBadge : styles.requiredBadge}>
                  {uploads[doc.key] ? "Uploaded" : "Required"}
                </span>
              </div>

              <div style={styles.checkList}>
                {doc.checks.map((check) => (
                  <span key={check} style={styles.checkItem}>✓ {check}</span>
                ))}
              </div>

              <label style={styles.uploadBox}>
                <input
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg"
                  style={{ display: "none" }}
                  onChange={(e) => handleFile(doc.key, e.target.files?.[0])}
                />

                <span style={styles.uploadIcon}>⬆</span>

                <span style={styles.uploadText}>
                  <strong>{uploads[doc.key]?.name || `Upload ${doc.title}`}</strong>
                  <em>PDF, PNG, JPG. Max 8 MB.</em>
                </span>

                <span style={styles.browse}>Browse</span>
              </label>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.aiBox}>
        <div style={styles.aiFace}>
          <span />
          <span />
        </div>

        <div>
          <p style={styles.kicker}>HXN AI VERIFICATION ASSISTANT</p>
          <h2 style={styles.aiTitle}>AI review unlocks after activation.</h2>

          <div style={styles.aiMessage}>{aiMessage}</div>

          <div style={styles.aiActions}>
            <button style={styles.primaryButton} onClick={activateVerification}>
              Go to Payment
            </button>

            <button style={styles.secondaryButton} onClick={submitVerification}>
              Submit Verification
            </button>
          </div>

          {score !== null && (
            <div style={styles.scoreBox}>
              <strong>Estimated Trust Score</strong>
              <h3>{score}/100</h3>
              <p>Final approval is completed after Impexviaa review.</p>
            </div>
          )}
        </div>
      </section>

      <section style={styles.explainSection}>
        <p style={styles.kicker}>OUR VERIFICATION PRINCIPLE</p>
        <h2 style={styles.sectionTitle}>Verification is not a barrier. It is your trust advantage.</h2>

        <p style={styles.longText}>
          In global trade, buyers need confidence before sending enquiries, requesting quotations,
          negotiating shipments, or starting business relationships. Impexviaa asks for supplier
          documents because trusted trade requires proof. Business registration proves the company
          exists. Tax registration shows commercial presence. Owner ID protects the account from
          misuse. Product images help buyers understand the real offering. Industry compliance
          documents support category-specific safety and quality. Export licenses help confirm
          trade readiness where required.
        </p>

        <p style={styles.longText}>
          Our goal is to create a high-quality B2B ecosystem where verified suppliers gain stronger
          visibility, buyers feel safer, and genuine businesses can grow with confidence.
        </p>
      </section>
    </main>
  );
}

function TrustCard({ title, text }: { title: string; text: string }) {
  return (
    <div style={styles.trustCard}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

const css = `
html, body { background:#020617 !important; }

@keyframes floatCard {
  0%,100% { transform:translateY(0); }
  50% { transform:translateY(-8px); }
}

@keyframes pulse {
  0%,100% { box-shadow:0 0 45px rgba(34,211,238,.22); }
  50% { box-shadow:0 0 90px rgba(214,181,109,.32); }
}

button { transition:.25s ease; }
button:hover { transform:translateY(-2px); }

@media(max-width:760px){
  main { padding:44px 16px 90px !important; }
}
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top,#123c34 0%,#061f1b 38%,#020617 100%)",
    color: "#fff",
    padding: "70px 20px 110px",
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
    position: "relative",
    overflow: "hidden",
  },

  glowOne: {
    position: "absolute",
    top: -200,
    right: -160,
    width: 560,
    height: 560,
    borderRadius: "50%",
    background: "rgba(34,211,238,.16)",
    filter: "blur(120px)",
  },

  glowTwo: {
    position: "absolute",
    bottom: 200,
    left: -180,
    width: 560,
    height: 560,
    borderRadius: "50%",
    background: "rgba(214,181,109,.13)",
    filter: "blur(120px)",
  },

  hero: {
    maxWidth: 1080,
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },

  badge: {
    display: "inline-flex",
    padding: "14px 28px",
    borderRadius: 999,
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(214,181,109,.25)",
    color: "#d6b56d",
    fontWeight: 950,
    letterSpacing: 3,
    fontSize: 12,
    marginBottom: 30,
  },

  title: {
    maxWidth: 1000,
    margin: 0,
    fontSize: "clamp(48px,9vw,96px)",
    lineHeight: 0.96,
    letterSpacing: "-4px",
    fontWeight: 950,
  },

  subtitle: {
    maxWidth: 900,
    marginTop: 30,
    color: "rgba(226,232,240,.78)",
    fontSize: "clamp(18px,3vw,28px)",
    lineHeight: 1.55,
  },

  heroButtons: {
    marginTop: 34,
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
  },

  primaryButton: {
    minHeight: 62,
    padding: "0 26px",
    border: "none",
    borderRadius: 999,
    background: "linear-gradient(135deg,#d6b56d,#22d3ee)",
    color: "#020617",
    fontWeight: 950,
    fontSize: 16,
    cursor: "pointer",
  },

  secondaryButton: {
    minHeight: 62,
    padding: "0 26px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.16)",
    background: "rgba(255,255,255,.07)",
    color: "#fff",
    fontWeight: 950,
    fontSize: 16,
    cursor: "pointer",
  },

  trustGrid: {
    maxWidth: 1120,
    margin: "60px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: 18,
    position: "relative",
    zIndex: 2,
  },

  trustCard: {
    padding: 28,
    borderRadius: 30,
    background: "rgba(255,255,255,.07)",
    border: "1px solid rgba(255,255,255,.12)",
    backdropFilter: "blur(18px)",
    lineHeight: 1.6,
  },

  progressBox: {
    maxWidth: 1120,
    margin: "48px auto 0",
    padding: 34,
    borderRadius: 36,
    background: "rgba(255,255,255,.07)",
    border: "1px solid rgba(34,211,238,.22)",
    position: "relative",
    zIndex: 2,
  },

  kicker: {
    margin: 0,
    color: "#d6b56d",
    fontWeight: 950,
    letterSpacing: 3,
    fontSize: 12,
  },

  sectionTitle: {
    margin: "12px 0 0",
    fontSize: "clamp(32px,5vw,62px)",
    lineHeight: 1.02,
    letterSpacing: "-2px",
    fontWeight: 950,
  },

  progressTrack: {
    marginTop: 24,
    width: "100%",
    height: 14,
    borderRadius: 999,
    background: "rgba(255,255,255,.12)",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 999,
    background: "linear-gradient(135deg,#d6b56d,#22d3ee)",
    transition: ".35s ease",
  },

  progressText: {
    color: "#dbeafe",
    lineHeight: 1.6,
    marginTop: 18,
  },

  documentSection: {
    maxWidth: 1120,
    margin: "70px auto 0",
    position: "relative",
    zIndex: 2,
  },

  docGrid: {
    marginTop: 30,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(310px,1fr))",
    gap: 18,
  },

  docCard: {
    padding: 26,
    borderRadius: 32,
    background: "linear-gradient(145deg,rgba(15,23,42,.85),rgba(6,31,27,.82))",
    border: "1px solid rgba(125,211,252,.22)",
    boxShadow: "0 24px 80px rgba(0,0,0,.32)",
    animation: "floatCard 5s ease-in-out infinite",
  },

  docTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: 14,
    alignItems: "flex-start",
  },

  docTitle: {
    margin: 0,
    fontSize: 24,
    lineHeight: 1.1,
    fontWeight: 950,
  },

  docWhy: {
    color: "#cbd5e1",
    lineHeight: 1.6,
    fontWeight: 650,
  },

  requiredBadge: {
    padding: "9px 12px",
    borderRadius: 999,
    background: "rgba(239,68,68,.18)",
    color: "#fecaca",
    fontWeight: 950,
    whiteSpace: "nowrap",
  },

  doneBadge: {
    padding: "9px 12px",
    borderRadius: 999,
    background: "rgba(34,197,94,.18)",
    color: "#bbf7d0",
    fontWeight: 950,
    whiteSpace: "nowrap",
  },

  checkList: {
    display: "grid",
    gap: 8,
    margin: "18px 0",
  },

  checkItem: {
    color: "#dbeafe",
    fontWeight: 750,
  },

  uploadBox: {
    minHeight: 92,
    borderRadius: 24,
    border: "1px solid rgba(125,211,252,.24)",
    background: "rgba(255,255,255,.075)",
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: 16,
    cursor: "pointer",
  },

  uploadIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    background: "linear-gradient(135deg,#d6b56d,#22d3ee)",
    color: "#020617",
    display: "grid",
    placeItems: "center",
    fontWeight: 950,
  },

  uploadText: {
    flex: 1,
    display: "grid",
    gap: 4,
  },

  browse: {
    padding: "10px 15px",
    borderRadius: 999,
    background: "rgba(255,255,255,.11)",
    color: "#bae6fd",
    fontWeight: 900,
  },

  aiBox: {
    maxWidth: 1120,
    margin: "70px auto 0",
    padding: 34,
    borderRadius: 40,
    display: "grid",
    gridTemplateColumns: "110px 1fr",
    gap: 28,
    background: "linear-gradient(145deg,rgba(2,6,23,.94),rgba(6,31,27,.92))",
    border: "1px solid rgba(34,211,238,.26)",
    boxShadow: "0 45px 140px rgba(0,0,0,.55)",
    animation: "pulse 3.5s ease-in-out infinite",
    position: "relative",
    zIndex: 2,
  },

  aiFace: {
    width: 96,
    height: 96,
    borderRadius: 30,
    background: "linear-gradient(135deg,#020617,#0f172a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  aiMessage: {
    marginTop: 20,
    padding: 24,
    borderRadius: 26,
    background:
      "linear-gradient(135deg,rgba(34,211,238,.12),rgba(214,181,109,.10))",
    border: "1px solid rgba(125,211,252,.24)",
    color: "#dbeafe",
    lineHeight: 1.7,
    fontWeight: 750,
    whiteSpace: "pre-wrap",
  },
  aiActions: {
    marginTop: 22,
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
  },
  scoreBox: {
    marginTop: 24,
    padding: 26,
    borderRadius: 30,
    background: "rgba(34,197,94,.12)",
    border: "1px solid rgba(34,197,94,.28)",
    color: "#dcfce7",
  },
  explainSection: {
    maxWidth: 1120,
    margin: "70px auto 0",
    padding: 38,
    borderRadius: 40,
    background:
      "linear-gradient(145deg,rgba(15,23,42,.82),rgba(6,31,27,.78))",
    border: "1px solid rgba(214,181,109,.18)",
    position: "relative",
    zIndex: 2,
  },
  longText: {
    maxWidth: 980,
    color: "rgba(226,232,240,.82)",
    fontSize: 18,
    lineHeight: 1.9,
    fontWeight: 600,
  },
};