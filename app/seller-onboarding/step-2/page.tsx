"use client";

import { Suspense, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { useSearchParams } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "@/lib/firebase";

type FileKey =
  | "registrationCertificate"
  | "taxCertificate"
  | "exportLicense"
  | "bankDocument"
  | "addressProof"
  | "complianceDocuments";

type FormState = {
  legalBusinessName: string;
  legalEntityType: string;
  countryOfRegistration: string;
  registrationRegion: string;
  registrationAuthority: string;
  registrationNumber: string;
  registrationDate: string;
  businessStatus: string;
  taxId: string;
  vatGstStatus: string;
  importExportLicenseNumber: string;
  exportAuthorityApproval: string;
  businessBankName: string;
  bankAccountCountry: string;
  bankAccountType: string;
  optionalComplianceNotes: string;
};

type FileState = {
  registrationCertificate: File | null;
  taxCertificate: File | null;
  exportLicense: File | null;
  bankDocument: File | null;
  addressProof: File | null;
  complianceDocuments: File[];
};

export default function Step2Page() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Step2LegalVerification />
    </Suspense>
  );
}

function Step2LegalVerification() {
  const params = useSearchParams();
  const applicationId = params.get("applicationId") || "";
  const countryFromStep1 = params.get("country") || "";

  const [loading, setLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [hxnMessage, setHxnMessage] = useState(
    "HXN AI is checking your legal identity, tax registration, trade eligibility, and document readiness."
  );

  const fullText =
    "I am HXN. I will guide you through legal business verification, tax identity, export eligibility, and document upload.";

  const [form, setForm] = useState<FormState>({
    legalBusinessName: "",
    legalEntityType: "",
    countryOfRegistration: "",
    registrationRegion: "",
    registrationAuthority: "",
    registrationNumber: "",
    registrationDate: "",
    businessStatus: "",
    taxId: "",
    vatGstStatus: "",
    importExportLicenseNumber: "",
    exportAuthorityApproval: "",
    businessBankName: "",
    bankAccountCountry: "",
    bankAccountType: "",
    optionalComplianceNotes: "",
  });

  const [files, setFiles] = useState<FileState>({
    registrationCertificate: null,
    taxCertificate: null,
    exportLicense: null,
    bankDocument: null,
    addressProof: null,
    complianceDocuments: [],
  });

  useEffect(() => {
    if (countryFromStep1) {
      setForm((prev) => ({
        ...prev,
        countryOfRegistration: countryFromStep1,
        bankAccountCountry: countryFromStep1,
      }));
    }
  }, [countryFromStep1]);

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
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSingleFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: Exclude<FileKey, "complianceDocuments">
  ) => {
    setFiles((prev) => ({
      ...prev,
      [key]: e.target.files?.[0] || null,
    }));
  };

  const handleMultipleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles((prev) => ({
      ...prev,
      complianceDocuments: Array.from(e.target.files || []),
    }));
  };

  const uploadSingleFile = async (file: File | null, folder: string) => {
    if (!file) return "";

    const fileRef = ref(
      storage,
      `seller-onboarding/step-2/${Date.now()}-${folder}-${file.name}`
    );

    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  };

  const uploadMultipleFiles = async (fileList: File[], folder: string) => {
    const urls: string[] = [];

    for (const file of fileList) {
      const fileRef = ref(
        storage,
        `seller-onboarding/step-2/${Date.now()}-${folder}-${file.name}`
      );

      await uploadBytes(fileRef, file);
      urls.push(await getDownloadURL(fileRef));
    }

    return urls;
  };

  const validateForm = () => {
    if (!form.legalBusinessName) return "Legal Business Name is required.";
    if (!form.legalEntityType) return "Legal Entity Type is required.";
    if (!form.countryOfRegistration) return "Country of Registration is required.";
    if (!form.registrationAuthority) return "Registration Authority is required.";
    if (!form.registrationNumber) return "Business Registration Number is required.";
    if (!form.registrationDate) return "Registration Date is required.";
    if (!form.businessStatus) return "Business Status is required.";
    if (form.businessStatus === "Dissolved") {
      return "Dissolved businesses are not eligible for IMPEXVIAA verification.";
    }
    if (!form.taxId) return "Tax Identification Number is required.";
    if (!form.vatGstStatus) return "VAT / GST Status is required.";
    if (!files.registrationCertificate) {
      return "Registration Certificate upload is required.";
    }
    if (!files.taxCertificate) {
      return "Tax Registration Certificate upload is required.";
    }
    if (!files.addressProof) {
      return "Business Address Proof upload is required.";
    }

    return "";
  };

  const submitStep2 = async () => {
    const error = validateForm();

    if (error) {
      setHxnMessage(`HXN AI Guidance: ${error}`);
      alert(error);
      return;
    }

    try {
      setLoading(true);
      setHxnMessage(
        "HXN AI is uploading your legal documents and preparing legal verification review."
      );

      const registrationCertificateUrl = await uploadSingleFile(
        files.registrationCertificate,
        "registration-certificate"
      );

      const taxCertificateUrl = await uploadSingleFile(
        files.taxCertificate,
        "tax-certificate"
      );

      const exportLicenseUrl = await uploadSingleFile(
        files.exportLicense,
        "export-license"
      );

      const bankDocumentUrl = await uploadSingleFile(
        files.bankDocument,
        "bank-document"
      );

      const addressProofUrl = await uploadSingleFile(
        files.addressProof,
        "address-proof"
      );

      const complianceDocumentUrls = await uploadMultipleFiles(
        files.complianceDocuments,
        "optional-compliance-documents"
      );
      alert("Test 1");
      const docRef = await addDoc(collection(db, "legalBusinessVerification"), {
        step: 2,
        parentApplicationId: applicationId,
        supplierUid: localStorage.getItem("supplierUid") || "",
        supplierEmail: localStorage.getItem("supplierEmail") || "",
        onboardingStatus: "step_2_completed",
        verificationStatus: "pending_review",
        legalVerificationOutcome: "under_verification",
        trustIndicators: {
          legalVerifiedBadge: "pending",
          registeredBusinessBadge: "pending",
          taxVerifiedBadge: "pending",
          exportEligibleStatus: "pending",
          trustScoreInitialization: "pending",
        },
        ...form,
        documents: {
          registrationCertificateUrl,
          taxCertificateUrl,
          exportLicenseUrl,
          bankDocumentUrl,
          addressProofUrl,
          complianceDocumentUrls,
        },
        legalValidationSystem: {
          aiDocumentVerification: "pending",
          ocrExtraction: "pending",
          stepOneCrossCheck: "pending",
          governmentRegistryValidation: "pending",
          registrationNumberFormatValidation: "pending",
          duplicateCompanyDetection: "pending",
          fakeCertificateDetection: "pending",
          suspiciousDocumentPatternDetection: "pending",
          identityMismatchDetection: "pending",
          manualReviewRequired: "pending",
        },
        hxnGuidance:
          "Legal business verification data collected for registry review, document verification, tax validation, and trust badge generation.",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
alert("Test 2");
      window.location.href = `/seller-onboarding/step-3?legalVerificationId=${
        docRef.id
      }&applicationId=${applicationId}&country=${encodeURIComponent(
        form.countryOfRegistration
      )}`;
    } catch (err) {
      console.error("STEP 2 SUBMISSION ERROR:", err);
      setHxnMessage(
        "HXN AI detected a submission issue. Please check your files and try again."
      );
      alert("Step 2 submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={styles.page}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(35px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatBot {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes pulseGlow {
          0%,100% { opacity:.55; transform:scale(1); }
          50% { opacity:1; transform:scale(1.08); }
        }

        @keyframes chatLift {
          from { opacity:0; transform: translateY(130px) scale(.94); }
          to { opacity:1; transform: translateY(0) scale(1); }
        }

        @keyframes blink {
          0%,100% { opacity:1; }
          50% { opacity:0; }
        }

        .premium-field:focus {
          outline: none;
          border-color: rgba(125,211,252,.9);
          box-shadow: 0 0 0 4px rgba(125,211,252,.16);
        }

        .premium-btn:hover,
        .file-card:hover,
        .support-btn:hover,
        .quick-btn:hover {
          transform: translateY(-3px);
        }

        option {
          color: #020617;
        }

        @media (max-width: 760px) {
          .form-card {
            padding: 24px !important;
            border-radius: 30px !important;
          }

          .hero-title {
            font-size: 42px !important;
            letter-spacing: -2px !important;
          }

          .ai-box {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }

          .robot-wrap {
            margin: 0 auto !important;
          }
        }
      `}</style>

      <div style={styles.blueGlow} />
      <div style={styles.purpleGlow} />
      <div style={styles.cyanGlow} />

      <section style={styles.hero}>
        <div style={styles.badge}>STEP 2 · LEGAL VERIFICATION</div>

        <h1 className="hero-title" style={styles.title}>
          Verify Your Legal
          <br />
          Business Identity
        </h1>

        <p style={styles.subtitle}>
          Step 2 verifies your legal existence, registration documents, tax identity,
          export eligibility, and government compliance readiness.
        </p>

        <div className="ai-box" style={styles.aiBox}>
          <div className="robot-wrap" style={styles.robotWrap}>
            <Robot />
          </div>

          <div>
            <h2 style={styles.aiTitle}>HXN AI Verification Assistant</h2>
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
              Open Legal Verification Help
            </button>
          </div>
        </div>
      </section>

      <section className="form-card" style={styles.formCard}>
        <InfoPanel />

        <Section title="Legal Entity Information" />
        <div style={styles.grid}>
          <Input name="legalBusinessName" placeholder="Legal Business Name *" value={form.legalBusinessName} onChange={handleChange} />

          <Select name="legalEntityType" value={form.legalEntityType} onChange={handleChange}>
            <option value="">Legal Entity Type *</option>
            <option>Private Limited Company (Pvt Ltd)</option>
            <option>Limited Company (Ltd)</option>
            <option>Limited Liability Company (LLC)</option>
            <option>Public Limited Company</option>
            <option>Partnership Firm</option>
            <option>Limited Liability Partnership (LLP)</option>
            <option>Sole Proprietorship</option>
            <option>Corporation</option>
            <option>Government Registered Entity</option>
            <option>Cooperative Society</option>
            <option>Startup Registered Entity</option>
            <option>Other</option>
          </Select>

          <Input name="countryOfRegistration" placeholder="Country of Registration *" value={form.countryOfRegistration} onChange={handleChange} />
          <Input name="registrationRegion" placeholder="State / Province of Registration" value={form.registrationRegion} onChange={handleChange} />
          <Input name="registrationAuthority" placeholder="Registration Authority *" value={form.registrationAuthority} onChange={handleChange} />
        </div>

        <Section title="Business Registration Details" />
        <div style={styles.grid}>
          <Input name="registrationNumber" placeholder="Business Registration Number *" value={form.registrationNumber} onChange={handleChange} />

          <Input name="registrationDate" type="date" placeholder="Registration Date *" value={form.registrationDate} onChange={handleChange} />

          <Select name="businessStatus" value={form.businessStatus} onChange={handleChange}>
            <option value="">Business Status *</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Suspended</option>
            <option>Under Renewal</option>
            <option>Dissolved</option>
          </Select>
        </div>

        <PremiumFile
          label="Registration Certificate Upload *"
          help="Certificate of Incorporation, Business Registration Certificate, Trade License, or Company Formation Document."
          file={files.registrationCertificate}
          onChange={(e) => handleSingleFile(e, "registrationCertificate")}
        />

        <Section title="Tax & Financial Identity" />
        <div style={styles.grid}>
          <Input name="taxId" placeholder="Tax Identification Number / GST / VAT / EIN *" value={form.taxId} onChange={handleChange} />

          <Select name="vatGstStatus" value={form.vatGstStatus} onChange={handleChange}>
            <option value="">VAT / GST Status *</option>
            <option>Registered</option>
            <option>Not Registered</option>
            <option>Exempted</option>
            <option>Pending Registration</option>
          </Select>
        </div>

        <PremiumFile
          label="Tax Registration Certificate Upload *"
          help="GST, VAT, EIN, TIN, or tax registration document."
          file={files.taxCertificate}
          onChange={(e) => handleSingleFile(e, "taxCertificate")}
        />

        <Section title="Export / Import Authorization" />
        <div style={styles.grid}>
          <Input name="importExportLicenseNumber" placeholder="Import Export License Number / IEC / Export License" value={form.importExportLicenseNumber} onChange={handleChange} />
          <Input name="exportAuthorityApproval" placeholder="Export Registration Authority Approval" value={form.exportAuthorityApproval} onChange={handleChange} />
        </div>

        <PremiumFile
          label="Export License Upload"
          help="Required if applicable for your country or product category."
          file={files.exportLicense}
          onChange={(e) => handleSingleFile(e, "exportLicense")}
        />

        <Section title="Bank & Financial Verification" />
        <div style={styles.grid}>
          <Input name="businessBankName" placeholder="Business Bank Name" value={form.businessBankName} onChange={handleChange} />
          <Input name="bankAccountCountry" placeholder="Bank Account Country" value={form.bankAccountCountry} onChange={handleChange} />

          <Select name="bankAccountType" value={form.bankAccountType} onChange={handleChange}>
            <option value="">Bank Account Type</option>
            <option>Current Account</option>
            <option>Business Account</option>
            <option>Corporate Account</option>
          </Select>
        </div>

        <PremiumFile
          label="Bank Verification Document Upload"
          help="Cancelled cheque, business bank statement proof page, or bank confirmation letter."
          file={files.bankDocument}
          onChange={(e) => handleSingleFile(e, "bankDocument")}
        />

        <Section title="Government Compliance Documents" />

        <PremiumFile
          label="Business Address Proof Upload *"
          help="Utility bill, lease agreement, official address certificate, or government address proof."
          file={files.addressProof}
          onChange={(e) => handleSingleFile(e, "addressProof")}
        />

        <PremiumFile
          label="Optional Compliance Documents"
          help="MSME / SME registration, Chamber of Commerce membership, Export Council Registration, Industry Association Membership."
          files={files.complianceDocuments}
          multiple
          onChange={handleMultipleFiles}
        />

        <Textarea
          name="optionalComplianceNotes"
          placeholder="Optional notes about compliance documents, authority names, renewal status, or pending registrations."
          value={form.optionalComplianceNotes}
          onChange={handleChange}
        />

        <ValidationPanel />

        <button
          className="premium-btn"
          type="button"
          style={styles.button}
          disabled={loading}
          onClick={submitStep2}
        >
          {loading
            ? "Submitting Legal Verification..."
            : "Complete Step 2 & Continue Industry Compliance"}
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
                <h2 style={styles.chatTitle}>HXN AI Legal Help</h2>
                <p style={styles.chatSub}>Confused? Select what you need help with.</p>
              </div>
            </div>

            <div style={styles.messageBubble}>
              I can explain which registration number, tax ID, export license, and
              document uploads are usually required for this stage.
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
              placeholder="Type your legal verification question here..."
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
        <h1 style={{ fontSize: 42 }}>Loading Legal Verification...</h1>
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
      <h2 style={styles.infoTitle}>What Step 2 Confirms</h2>
      <p style={styles.infoText}>
        This stage confirms that the business is legally registered, tax identity is
        valid, government records match submitted data, and the business has the right
        to conduct domestic or international trade.
      </p>

      <div style={styles.infoGrid}>
        <span>Legal registration</span>
        <span>Tax identity</span>
        <span>Export eligibility</span>
        <span>Fraud prevention</span>
      </div>
    </div>
  );
}

function ValidationPanel() {
  return (
    <div style={styles.validationPanel}>
      <h2 style={styles.infoTitle}>HXN Legal Validation System</h2>

      <div style={styles.validationGrid}>
        <ValidationItem title="AI Document Verification" text="OCR extraction, company-name matching, fake document pattern detection." />
        <ValidationItem title="Government Registry Validation" text="Registry matching where available and registration number format review." />
        <ValidationItem title="Fraud Detection System" text="Duplicate company detection, suspicious document review, identity mismatch signals." />
        <ValidationItem title="Manual Review" text="Human verification team may request extra documents or video verification." />
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

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className="premium-field" style={styles.input} />;
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className="premium-field" style={styles.textarea} />;
}

function PremiumFile({
  label,
  help,
  multiple,
  file,
  files,
  onChange,
}: {
  label: string;
  help: string;
  multiple?: boolean;
  file?: File | null;
  files?: File[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const fileText = multiple
    ? files && files.length > 0
      ? `${files.length} file(s) selected`
      : "No files selected"
    : file
    ? file.name
    : "No file selected";

  return (
    <label className="file-card" style={styles.fileBox}>
      <input
        type="file"
        multiple={multiple}
        onChange={onChange}
        style={styles.hiddenFileInput}
      />

      <span style={styles.fileIcon}>⬆</span>

      <span style={styles.fileMain}>
        <strong>{label}</strong>
        <small>{help}</small>
        <em>{fileText}</em>
      </span>

      <span style={styles.fileButton}>Browse</span>
    </label>
  );
}

const quickHelp = [
  {
    title: "What is Legal Business Name?",
    answer:
      "Use the exact company name written on your government registration certificate. Even small spelling differences can delay verification.",
  },
  {
    title: "Which registration number?",
    answer:
      "Use your country-specific company registration ID, such as CIN, Company Number, EIN, Trade License Number, or Registration Certificate Number.",
  },
  {
    title: "What is Tax ID?",
    answer:
      "Tax ID means GST, VAT, EIN, TIN, or any official tax number issued by your country's tax authority.",
  },
  {
    title: "Do I need export license?",
    answer:
      "If your country or product category requires import/export authorization, upload it here. If not applicable, you can continue without it.",
  },
  {
    title: "Bank document confusion",
    answer:
      "Bank verification is optional but increases trust. You can upload a business bank statement proof page, bank confirmation letter, or cancelled cheque.",
  },
  {
    title: "Why address proof?",
    answer:
      "Address proof helps confirm that the registered business location matches official records and reduces fraud risk.",
  },
];

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    background:
      "radial-gradient(circle at top,#16213f 0%,#07111f 45%,#020617 100%)",
    color: "#fff",
    padding: "72px 18px 90px",
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
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
    boxShadow: "0 0 34px rgba(56,189,248,.18)",
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
      "0 28px 80px rgba(15,23,42,.34), 0 0 70px rgba(34,211,238,.20), 0 0 90px rgba(168,85,247,.16)",
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
    boxShadow: "0 22px 55px rgba(14,165,233,.28)",
    display: "grid",
    placeItems: "center",
  },
robotScreen: {
    width: 84,
    height: 58,
    borderRadius: 24,
    background: "linear-gradient(135deg,#061733,#0b1f4a)",
    position: "relative",
    boxShadow: "inset 0 0 18px rgba(34,211,238,.3)",
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
    boxShadow: "0 18px 40px rgba(14,165,233,.22)",
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
    boxShadow: "0 18px 55px rgba(2,6,23,.38)",
    transition: ".3s ease",
  },

  formCard: {
    maxWidth: 1120,
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
    borderRadius: 42,
    padding: "42px",
    background:
      "linear-gradient(145deg,rgba(15,23,42,.90),rgba(30,41,59,.72))",
    border: "1px solid rgba(148,163,184,.22)",
    boxShadow:
      "0 45px 140px rgba(0,0,0,.62), inset 0 1px 0 rgba(255,255,255,.08)",
    backdropFilter: "blur(26px)",
    animation: "fadeUp 1s ease both",
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
    minHeight: 135,
    borderRadius: 22,
    border: "1px solid rgba(255,255,255,.14)",
    background: "rgba(255,255,255,.075)",
    color: "#fff",
    padding: 18,
    fontSize: 16,
    lineHeight: 1.7,
    marginBottom: 18,
    resize: "vertical",
  },

  fileBox: {
    width: "100%",
    minHeight: 96,
    borderRadius: 24,
    border: "1px solid rgba(125,211,252,.24)",
    background: "rgba(255,255,255,.075)",
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: 18,
    marginBottom: 16,
    cursor: "pointer",
    transition: ".3s ease",
  },

  hiddenFileInput: {
    display: "none",
  },

  fileIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    background: "linear-gradient(135deg,#7dd3fc,#2563eb)",
    display: "grid",
    placeItems: "center",
    fontWeight: 950,
    color: "#020617",
    flexShrink: 0,
  },

  fileMain: {
    display: "grid",
    gap: 5,
    flex: 1,
    color: "#fff",
  },

  fileButton: {
    borderRadius: 999,
    padding: "10px 16px",
    background: "rgba(255,255,255,.10)",
    border: "1px solid rgba(255,255,255,.14)",
    fontWeight: 900,
    color: "#bae6fd",
  },

  validationPanel: {
    borderRadius: 28,
    padding: 24,
    background: "rgba(2,6,23,.42)",
    border: "1px solid rgba(125,211,252,.18)",
    marginTop: 30,
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

  button: {
    width: "100%",
    marginTop: 28,
    border: "none",
    borderRadius: 26,
    padding: "22px 24px",
    background: "linear-gradient(135deg,#7dd3fc,#38bdf8,#2563eb)",
    color: "#020617",
    fontSize: 18,
    fontWeight: 950,
    cursor: "pointer",
    boxShadow: "0 25px 90px rgba(14,165,233,.35)",
    transition: ".35s ease",
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
    border: "1px solid rgba(255,255,255,.9)",
    boxShadow:
      "0 35px 120px rgba(0,0,0,.45), 0 0 80px rgba(34,211,238,.25)",
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
    boxShadow: "0 0 26px rgba(14,165,233,.38)",
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
    minHeight: 95,
    borderRadius: 18,
    border: "1px solid #cbd5e1",
    padding: 14,
    fontSize: 15,
    resize: "vertical",
    outline: "none",
  },

  chatSend: {
    width: "100%",
    marginTop: 12,
    border: "none",
    borderRadius: 18,
    padding: "15px 18px",
    background: "linear-gradient(135deg,#9333ea,#06b6d4)",
    color: "#fff",
    fontWeight: 950,
    cursor: "pointer",
  },
};