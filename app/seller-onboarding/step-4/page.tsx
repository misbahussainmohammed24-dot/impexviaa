"use client";

import { Suspense, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { useSearchParams } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "@/lib/firebase";

type FormState = {
  industryCategory: string;
  certificateName: string;
  certificateNumber: string;
  issuingAuthority: string;
  issueDate: string;
  expiryDate: string;
  dailyProduction: string;
  monthlyProduction: string;
  annualProduction: string;
  manufacturingType: string;
  logisticsCapability: string;
  warehousingAvailability: string;
  exportCountriesServed: string;
  paymentMethodsSupported: string;
  inspectionAcceptance: string;
  leadTime: string;
  moq: string;
  packagingCapability: string;
  oemOdmSupport: string;
  sampleAvailability: string;
  tradeReferences: string;
  videoVerificationNotes: string;
};

type FileState = {
  certificateUpload: File | null;
  factoryImages: File[];
  factoryVideos: File[];
  productionLineImages: File[];
  warehouseImages: File[];
  videoVerificationFiles: File[];
};

const certificationMap: Record<string, string[]> = {
  "Agriculture & Food": [
    "Phytosanitary Certificate",
    "Health Certificate",
    "Fumigation Certificate",
    "HACCP",
    "ISO 22000",
    "Organic Certification",
    "Global GAP",
    "FSSAI",
    "APEDA",
    "HALAL",
    "KOSHER",
  ],
  Pharmaceuticals: [
    "GMP",
    "WHO-GMP",
    "FDA Registration",
    "COPP",
    "Manufacturing License",
    "ISO 13485",
  ],
  Electronics: ["CE", "FCC", "RoHS", "REACH", "BIS", "UL"],
  "Auto Parts": ["IATF 16949", "DOT", "SAE", "E-Mark"],
  Textiles: ["GOTS", "OEKO-TEX", "WRAP"],
  Chemicals: ["REACH", "MSDS / SDS", "Hazardous Material Compliance"],
};

export default function Step4Page() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Step4ComplianceVerification />
    </Suspense>
  );
}

function Step4ComplianceVerification() {
  const params = useSearchParams();

  const applicationId = params.get("applicationId") || "";
  const legalVerificationId = params.get("legalVerificationId") || "";
  const productStoreId = params.get("productStoreId") || "";
  const country = params.get("country") || "";

  const [loading, setLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [hxnMessage, setHxnMessage] = useState(
    "HXN AI is analysing certifications, manufacturing capability, export readiness, logistics infrastructure, trust indicators and transaction reliability."
  );

  const fullText =
    "I am HXN. I will verify certifications, manufacturing capability, export readiness, supplier trust, operational readiness and compliance strength.";

  const [form, setForm] = useState<FormState>({
    industryCategory: "",
    certificateName: "",
    certificateNumber: "",
    issuingAuthority: "",
    issueDate: "",
    expiryDate: "",
    dailyProduction: "",
    monthlyProduction: "",
    annualProduction: "",
    manufacturingType: "",
    logisticsCapability: "",
    warehousingAvailability: "",
    exportCountriesServed: "",
    paymentMethodsSupported: "",
    inspectionAcceptance: "",
    leadTime: "",
    moq: "",
    packagingCapability: "",
    oemOdmSupport: "",
    sampleAvailability: "",
    tradeReferences: "",
    videoVerificationNotes: "",
  });

  const [files, setFiles] = useState<FileState>({
    certificateUpload: null,
    factoryImages: [],
    factoryVideos: [],
    productionLineImages: [],
    warehouseImages: [],
    videoVerificationFiles: [],
  });

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index += 1;

      if (index > fullText.length) {
        clearInterval(interval);
      }
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

  const handleSingleFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "certificateUpload"
  ) => {
    setFiles((prev) => ({
      ...prev,
      [key]: e.target.files?.[0] || null,
    }));
  };

  const handleMultipleFiles = (
    e: React.ChangeEvent<HTMLInputElement>,
    key:
      | "factoryImages"
      | "factoryVideos"
      | "productionLineImages"
      | "warehouseImages"
      | "videoVerificationFiles"
  ) => {
    setFiles((prev) => ({
      ...prev,
      [key]: Array.from(e.target.files || []),
    }));
  };

  const uploadSingleFile = async (file: File | null, folder: string) => {
    if (!file) return "";

    const safeName = file.name.replace(/\s+/g, "-").toLowerCase();

    const fileRef = ref(
      storage,
      `seller-onboarding/step-4/${Date.now()}-${folder}-${safeName}`
    );

    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  };

  const uploadMultipleFiles = async (fileList: File[], folder: string) => {
    const urls: string[] = [];

    for (const file of fileList) {
      const safeName = file.name.replace(/\s+/g, "-").toLowerCase();

      const fileRef = ref(
        storage,
        `seller-onboarding/step-4/${Date.now()}-${folder}-${safeName}`
      );

      await uploadBytes(fileRef, file);
      urls.push(await getDownloadURL(fileRef));
    }

    return urls;
  };

  const validateStep4 = () => {
    if (!form.industryCategory) return "Industry Category is required.";
    if (!form.certificateName) return "Certificate Name is required.";
    if (!form.certificateNumber) return "Certificate Number is required.";
    if (!form.issuingAuthority) return "Issuing Authority is required.";
    if (!form.issueDate) return "Issue Date is required.";
    if (!form.expiryDate) return "Expiry Date is required.";
    if (!files.certificateUpload) return "Compliance Certificate Upload is required.";
    if (!form.dailyProduction) return "Daily Production Capacity is required.";
    if (!form.monthlyProduction) return "Monthly Production Capacity is required.";
    if (!form.annualProduction) return "Annual Production Capacity is required.";
    if (!form.manufacturingType) return "Manufacturing Type is required.";
    if (!form.logisticsCapability) return "Logistics Capability is required.";
    if (!form.warehousingAvailability) return "Warehousing Availability is required.";
    if (!form.exportCountriesServed) return "Export Countries Served is required.";
    if (!form.paymentMethodsSupported) return "Payment Methods Supported is required.";
    if (!form.inspectionAcceptance) return "Inspection Acceptance is required.";
    if (!form.leadTime) return "Lead Time is required.";
    if (!form.moq) return "MOQ is required.";
    if (!form.packagingCapability) return "Packaging Capability is required.";
    if (!form.oemOdmSupport) return "OEM / ODM Support is required.";
    if (!form.sampleAvailability) return "Sample Availability is required.";

    return "";
  };

  const submitStep4 = async () => {
    const error = validateStep4();

    if (error) {
      setHxnMessage(`HXN AI Guidance: ${error}`);
      alert(error);
      return;
    }

    try {
      setLoading(true);

      setHxnMessage(
        "HXN AI is uploading compliance evidence, analysing supplier readiness and preparing Step 4 verification."
      );

      const certificateUploadUrl = await uploadSingleFile(
        files.certificateUpload,
        "certificate"
      );

      const factoryImageUrls = await uploadMultipleFiles(
        files.factoryImages,
        "factory-images"
      );

      const factoryVideoUrls = await uploadMultipleFiles(
        files.factoryVideos,
        "factory-videos"
      );

      const productionLineImageUrls = await uploadMultipleFiles(
        files.productionLineImages,
        "production-line-images"
      );

      const warehouseImageUrls = await uploadMultipleFiles(
        files.warehouseImages,
        "warehouse-images"
      );

      const videoVerificationUrls = await uploadMultipleFiles(
        files.videoVerificationFiles,
        "video-verification"
      );

      const complianceDoc = await addDoc(
        collection(db, "supplierComplianceVerification"),
        {
          step: 4,
          applicationId,
          legalVerificationId,
          productStoreId,
          country,

          supplierUid: localStorage.getItem("supplierUid") || "",
          supplierEmail: localStorage.getItem("supplierEmail") || "",

          onboardingStatus: "step_4_completed",
          verificationStatus: "pending_final_review",
          complianceStatus: "additional_information_required",

          ...form,

          uploadedFiles: {
            certificateUploadUrl,
            factoryImageUrls,
            factoryVideoUrls,
            productionLineImageUrls,
            warehouseImageUrls,
            videoVerificationUrls,
          },

          aiCertificateValidation: {
            expiryValidation: "pending",
            duplicateCertificateDetection: "pending",
            fakeCertificateDetection: "pending",
            complianceMismatchDetection: "pending",
            aiOcrExtraction: "pending",
            authorityVerification: "pending",
          },

          aiTrustRiskAnalysis: {
            suspiciousBehaviorMonitoring: "pending",
            fakeDocumentAnalysis: "pending",
            scamPatternDetection: "pending",
            riskScoring: "pending",
            operationalConsistency: "pending",
            complianceStrength: "pending",
            businessReliability: "pending",
            verificationAccuracy: "pending",
          },

          trustIndicatorsGenerated: {
            exportReadyBadge: "pending",
            industryVerifiedBadge: "pending",
            trustedSupplierBadge: "pending",
            verifiedManufacturerBadge: "pending",
            complianceVerifiedStatus: "pending",
          },

          hxnGuidance:
            "Compliance, operational capability, export readiness and supplier trust data collected for final approval review.",

          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        }
      );

      window.location.href = `/seller-onboarding/step-5?complianceId=${
        complianceDoc.id
      }&productStoreId=${productStoreId}&legalVerificationId=${legalVerificationId}&applicationId=${applicationId}&country=${encodeURIComponent(
        country
      )}`;
    } catch (error) {
      console.error("STEP 4 SUBMISSION ERROR:", error);

      setHxnMessage(
        "HXN AI detected a submission issue. Please check your compliance files and try again."
      );

      alert("Step 4 submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const suggestedCertifications = certificationMap[form.industryCategory] || [];

  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.blueGlow} />
      <div style={styles.purpleGlow} />
      <div style={styles.cyanGlow} />

      <section style={styles.hero}>
        <div style={styles.badge}>STEP 4 · COMPLIANCE & TRUST</div>

        <h1 className="hero-title" style={styles.title}>
          Industry Compliance
          <br />
          Trust & Operational
          <br />
          Verification
        </h1>

        <p style={styles.subtitle}>
          Verify certifications, manufacturing capability, logistics infrastructure,
          export readiness, transaction reliability and supplier trust before final
          marketplace approval.
        </p>

        <div className="ai-box" style={styles.aiBox}>
          <div className="robot-wrap" style={styles.robotWrap}>
            <Robot />
          </div>

          <div>
            <h2 style={styles.aiTitle}>HXN AI Compliance Engine</h2>
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
              Open Compliance Verification Help
            </button>
          </div>
        </div>
      </section>

      <section className="form-card" style={styles.formCard}>
        <InfoPanel />

        <Section title="Industry Compliance Verification" />

        <div style={styles.cardGrid}>
          {Object.entries(certificationMap).map(([industry, certificates]) => (
            <button
              key={industry}
              type="button"
              style={{
                ...styles.industryCard,
                borderColor:
                  form.industryCategory === industry
                    ? "rgba(125,211,252,.9)"
                    : "rgba(125,211,252,.24)",
                boxShadow:
                  form.industryCategory === industry
                    ? "0 0 45px rgba(56,189,248,.25)"
                    : "0 18px 55px rgba(0,0,0,.18)",
              }}
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  industryCategory: industry,
                }))
              }
            >
              <strong>{industry}</strong>
              <span>{certificates.length} compliance checks</span>
              <small>Verification status: Pending</small>
            </button>
          ))}
        </div>

        <Section title="Certificate Management" />

        <div style={styles.grid}>
          <Select
            name="industryCategory"
            value={form.industryCategory}
            onChange={handleChange}
          >
            <option value="">Industry Category *</option>
            {Object.keys(certificationMap).map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </Select>

          <Input
            name="certificateName"
            placeholder="Certificate Name *"
            value={form.certificateName}
            onChange={handleChange}
          />

          <Input
            name="certificateNumber"
            placeholder="Certificate Number *"
            value={form.certificateNumber}
            onChange={handleChange}
          />

          <Input
            name="issuingAuthority"
            placeholder="Issuing Authority *"
            value={form.issuingAuthority}
            onChange={handleChange}
          />

          <Input
            type="date"
            name="issueDate"
            value={form.issueDate}
            onChange={handleChange}
          />

          <Input
            type="date"
            name="expiryDate"
            value={form.expiryDate}
            onChange={handleChange}
          />
        </div>

        <div style={styles.certBox}>
          <h3 style={styles.miniTitle}>Suggested Certifications</h3>
          <div style={styles.tagGrid}>
            {suggestedCertifications.length > 0 ? (
              suggestedCertifications.map((cert) => (
                <span key={cert} style={styles.tag}>
                  {cert}
                </span>
              ))
            ) : (
              <span style={styles.emptyTag}>
                Select an industry to see certifications
              </span>
            )}
          </div>
        </div>

        <PremiumFile
          label="Certificate Upload *"
          help="Upload certificate proof, license document, test report, approval letter or compliance file."
          file={files.certificateUpload}
          onChange={(e) => handleSingleFile(e, "certificateUpload")}
        />

        <ValidationPanel
          title="AI Certificate Validation"
          items={[
            ["Expiry Validation", "HXN checks issue and expiry dates for validity."],
            ["Duplicate Detection", "HXN flags repeated or reused certificate patterns."],
            ["Fake Certificate Detection", "AI reviews suspicious document structure."],
            ["Compliance Matching", "Certificate is compared with industry requirements."],
            ["AI OCR Extraction", "Key certificate data is extracted automatically."],
            ["Authority Verification", "Issuing authority details are prepared for review."],
          ]}
        />

        <Section title="Operational Verification" />

        <div style={styles.grid}>
          <Input
            name="dailyProduction"
            placeholder="Daily Production Capacity *"
            value={form.dailyProduction}
            onChange={handleChange}
          />

          <Input
            name="monthlyProduction"
            placeholder="Monthly Production Capacity *"
            value={form.monthlyProduction}
            onChange={handleChange}
          />

          <Input
            name="annualProduction"
            placeholder="Annual Production Capacity *"
            value={form.annualProduction}
            onChange={handleChange}
          />

          <Select
            name="manufacturingType"
            value={form.manufacturingType}
            onChange={handleChange}
          >
            <option value="">Manufacturing Type *</option>
            <option>Own Factory</option>
            <option>Third-party Manufacturing</option>
            <option>Contract Manufacturing</option>
            <option>Trading Company</option>
          </Select>
        </div>

        <PremiumFile
          label="Factory Images"
          help="Optional. Upload factory, office or facility images for operational verification."
          files={files.factoryImages}
          multiple
          onChange={(e) => handleMultipleFiles(e, "factoryImages")}
        />

        <PremiumFile
          label="Factory Videos"
          help="Optional. Upload factory walkthrough or production capability videos."
          files={files.factoryVideos}
          multiple
          onChange={(e) => handleMultipleFiles(e, "factoryVideos")}
        />

        <PremiumFile
          label="Production Line Images"
          help="Optional. Upload machinery, production line and process images."
          files={files.productionLineImages}
          multiple
          onChange={(e) => handleMultipleFiles(e, "productionLineImages")}
        />

        <PremiumFile
          label="Warehouse Images"
          help="Optional. Upload warehouse, inventory and dispatch readiness images."
          files={files.warehouseImages}
          multiple
          onChange={(e) => handleMultipleFiles(e, "warehouseImages")}
        />

        <Section title="Logistics & Transaction Readiness" />

        <div style={styles.grid}>
          <Input
            name="logisticsCapability"
            placeholder="Logistics Capability * e.g. Air, Sea, Rail, Road"
            value={form.logisticsCapability}
            onChange={handleChange}
          />

          <Input
            name="warehousingAvailability"
            placeholder="Warehousing Availability *"
            value={form.warehousingAvailability}
            onChange={handleChange}
          />

          <Input
            name="exportCountriesServed"
            placeholder="Export Countries Served *"
            value={form.exportCountriesServed}
            onChange={handleChange}
          />

          <Input
            name="paymentMethodsSupported"
            placeholder="Payment Methods Supported * e.g. TT, LC, Escrow"
            value={form.paymentMethodsSupported}
            onChange={handleChange}
          />

          <Input
            name="inspectionAcceptance"
            placeholder="Inspection Acceptance * e.g. SGS, Intertek"
            value={form.inspectionAcceptance}
            onChange={handleChange}
          />

          <Input
            name="leadTime"
            placeholder="Lead Time *"
            value={form.leadTime}
            onChange={handleChange}
          />

          <Input
            name="moq"
            placeholder="MOQ *"
            value={form.moq}
            onChange={handleChange}
          />

          <Input
            name="packagingCapability"
            placeholder="Packaging Capability *"
            value={form.packagingCapability}
            onChange={handleChange}
          />

          <Input
            name="oemOdmSupport"
            placeholder="OEM / ODM Support *"
            value={form.oemOdmSupport}
            onChange={handleChange}
          />

          <Input
            name="sampleAvailability"
            placeholder="Sample Availability *"
            value={form.sampleAvailability}
            onChange={handleChange}
          />
        </div>

        <Section title="Trade References & Video Verification" />

        <Textarea
          name="tradeReferences"
          placeholder="Optional: existing clients, export history, trade references or past shipments."
          value={form.tradeReferences}
          onChange={handleChange}
        />

        <Textarea
          name="videoVerificationNotes"
          placeholder="Optional: live business verification, factory walkthrough, office verification notes."
          value={form.videoVerificationNotes}
          onChange={handleChange}
        />

        <PremiumFile
          label="Video Verification Files"
          help="Optional. Upload office verification, business proof or walkthrough video files."
          files={files.videoVerificationFiles}
          multiple
          onChange={(e) => handleMultipleFiles(e, "videoVerificationFiles")}
        />

        <ValidationPanel
          title="AI Trust & Risk Analysis"
          items={[
            ["Suspicious Behaviour Monitoring", "HXN reviews fraud and scam risk patterns."],
            ["Fake Document Analysis", "Documents are prepared for AI authenticity checks."],
            ["Risk Scoring", "Operational and compliance data contributes to trust score."],
            ["Operational Consistency", "Production, logistics and trade data are cross-checked."],
            ["Compliance Strength", "Certificates and required standards are compared."],
            ["Business Reliability", "HXN prepares the supplier for final approval review."],
          ]}
        />

        <Section title="Step 4 Verification Outcome" />

        <div style={styles.badgeGrid}>
          {[
            "Export Ready Badge",
            "Industry Verified Badge",
            "Trusted Supplier Badge",
            "Verified Manufacturer Badge",
            "Compliance Verified Status",
          ].map((badge) => (
            <div key={badge} style={styles.outcomeCard}>
              <strong>{badge}</strong>
              <span>Pending Final Review</span>
            </div>
          ))}
        </div>

        <button
          className="premium-btn"
          type="button"
          style={styles.button}
          disabled={loading}
          onClick={submitStep4}
        >
          {loading
            ? "Submitting Compliance Verification..."
            : "Complete Step 4 & Continue Final Approval"}
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
                <h2 style={styles.chatTitle}>HXN AI Compliance Help</h2>
                <p style={styles.chatSub}>Confused? Select what you need help with.</p>
              </div>
            </div>

            <div style={styles.messageBubble}>
              I can explain which certificates, operational documents, factory evidence,
              inspection support and trust indicators are required for Step 4.
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
              placeholder="Type your compliance verification question here..."
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
        <h1 style={{ fontSize: 42 }}>Loading Compliance Verification...</h1>
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
      <h2 style={styles.infoTitle}>What Step 4 Confirms</h2>
      <p style={styles.infoText}>
        This stage verifies operational capability, industry compliance, export
        readiness, manufacturing proof, supplier trust, transaction reliability and
        international trade preparedness.
      </p>

      <div style={styles.infoGrid}>
        <span>Industry compliance</span>
        <span>Operational capability</span>
        <span>Export readiness</span>
        <span>Trust infrastructure</span>
      </div>
    </div>
  );
}

function ValidationPanel({
  title,
  items,
}: {
  title: string;
  items: [string, string][];
}) {
  return (
    <div style={styles.validationPanel}>
      <h2 style={styles.infoTitle}>{title}</h2>

      <div style={styles.validationGrid}>
        {items.map(([title, text]) => (
          <ValidationItem key={title} title={title} text={text} />
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
      <input type="file" multiple={multiple} onChange={onChange} style={styles.hiddenFileInput} />
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
    title: "Which certificate should I upload?",
    answer:
      "Upload your strongest product or industry certificate, such as GMP, HACCP, ISO, CE, FDA, HALAL, APEDA, REACH, MSDS/SDS or Manufacturing License.",
  },
  {
    title: "What is manufacturing type?",
    answer:
      "Own Factory means you manufacture directly. Third-party or Contract Manufacturing means another facility produces for you. Trading Company means you source and sell.",
  },
  {
    title: "Do I need factory images?",
    answer:
      "Factory images are optional, but they improve buyer trust and strengthen operational verification.",
  },
  {
    title: "What is inspection acceptance?",
    answer:
      "Inspection acceptance means you allow third-party checks by SGS, Bureau Veritas, Intertek, internal QA or similar inspection teams.",
  },
  {
    title: "What is trade readiness?",
    answer:
      "Trade readiness checks your lead time, MOQ, packaging, OEM/ODM support, sample availability, logistics, warehousing and export markets.",
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
.file-card:hover,
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
}
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    background: "radial-gradient(circle at top,#16213f 0%,#07111f 45%,#020617 100%)",
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
    background: "linear-gradient(135deg,#ffffff 0%,#f8fbff 45%,#eef7ff 100%)",
    color: "#020617",
    display: "grid",
    gridTemplateColumns: "210px 1fr",
    gap: 24,
    alignItems: "center",
    textAlign: "left",
    boxShadow: "0 28px 80px rgba(15,23,42,.34),0 0 70px rgba(34,211,238,.20)",
  },
  robotWrap: { height: 190, width: 210, position: "relative", animation: "floatBot 4s ease-in-out infinite" },
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
  tabletLineOne: { width: 54, height: 7, borderRadius: 99, background: "#60a5fa", marginBottom: 9 },
  tabletLineTwo: { width: 72, height: 7, borderRadius: 99, background: "#22d3ee", marginBottom: 9 },
  tabletLineThree: { width: 46, height: 7, borderRadius: 99, background: "#a78bfa" },
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
  aiTitle: { margin: 0, fontSize: 36, fontWeight: 950, letterSpacing: "-1px" },
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
  cursor: { color: "#06b6d4", animation: "blink 1s infinite" },
  aiText: { margin: "16px 0 0", color: "#334155", fontWeight: 800, lineHeight: 1.55, fontSize: 16 },
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
    background: "linear-gradient(145deg,rgba(15,23,42,.90),rgba(30,41,59,.72))",
    border: "1px solid rgba(148,163,184,.22)",
    boxShadow: "0 45px 140px rgba(0,0,0,.62)",
    backdropFilter: "blur(26px)",
  },
  infoPanel: {
    borderRadius: 28,
    padding: 24,
    background: "linear-gradient(135deg,rgba(125,211,252,.14),rgba(168,85,247,.10))",
    border: "1px solid rgba(125,211,252,.24)",
    marginBottom: 28,
  },
  infoTitle: { margin: 0, fontSize: 28, fontWeight: 950, letterSpacing: "-1px" },
  infoText: { color: "#dbeafe", lineHeight: 1.75, fontSize: 16 },
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
  hiddenFileInput: { display: "none" },
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
  fileMain: { display: "grid", gap: 5, flex: 1, color: "#fff" },
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
    marginBottom: 26,
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
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 16,
    marginBottom: 30,
  },
  industryCard: {
    borderRadius: 24,
    padding: 20,
    background: "linear-gradient(135deg,rgba(125,211,252,.14),rgba(168,85,247,.10))",
    border: "1px solid rgba(125,211,252,.24)",
    color: "#fff",
    display: "grid",
    gap: 8,
    textAlign: "left",
    cursor: "pointer",
    transition: ".3s ease",
  },
  certBox: {
    borderRadius: 24,
    padding: 20,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.10)",
    marginBottom: 18,
  },
  miniTitle: { margin: "0 0 14px", fontSize: 20, fontWeight: 950 },
  tagGrid: { display: "flex", flexWrap: "wrap", gap: 10 },
  tag: {
    borderRadius: 999,
    padding: "9px 13px",
    background: "rgba(125,211,252,.13)",
    border: "1px solid rgba(125,211,252,.24)",
    color: "#bae6fd",
    fontSize: 13,
    fontWeight: 850,
  },
  emptyTag: { color: "#cbd5e1", fontWeight: 800 },
  badgeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
    gap: 14,
    marginBottom: 28,
  },
  outcomeCard: {
    borderRadius: 22,
    padding: 18,
    background: "linear-gradient(135deg,rgba(34,211,238,.12),rgba(37,99,235,.10))",
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
    background: "linear-gradient(135deg,#ffffff 0%,#f8fbff 50%,#eef7ff 100%)",
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
  chatHeader: { display: "flex", gap: 14, alignItems: "center", marginBottom: 20 },
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
  chatTitle: { margin: 0, fontSize: 26, fontWeight: 950 },
  chatSub: { margin: "4px 0 0", color: "#475569", fontSize: 14 },
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
