"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "@/lib/firebase";

type Category = "Agriculture" | "Pharmaceuticals" | "Electronics" | "Auto Parts";

type FormState = {
  companyName: string;
  countryOfRegistration: string;
  registeredAddress: string;
  businessType: string;
  yearEstablished: string;
  companyDescription: string;
  companyWebsite: string;
  businessEmail: string;
  mobileNumber: string;
  ownerName: string;
  ownerRole: string;
  mainProductName: string;
  productCategory: Category | "";
  productDescription: string;
  moq: string;
  productionCapacity: string;
  exportMarkets: string;
  yearsExportExperience: string;
  supplyChainType: string;
};

type FileState = {
  businessRegistration: File | null;
  taxRegistration: File | null;
  governmentId: File | null;
  productImages: File[];
  exportLicense: File | null;
  industryMandatory: File[];
  industryOptional: File[];
  factoryPhotos: File[];
  warehousePhotos: File[];
  productionVideos: File[];
  exportInvoices: File[];
  shippingDocuments: File[];
  extraCertificates: File[];
};
type IndustryDocState = {
  certificateNumber: string;
  authorizedBy: string;
  issueDate: string;
  expiryDate: string;
  file: File | null;
  aiStatus: string;
  aiNote: string;
};

type IndustryDocsState = Record<string, IndustryDocState>;
const compliance: Record<Category, { mandatory: string[]; optional: string[] }> = {
  Agriculture: {
    mandatory: [
      "Phytosanitary Certificate",
      "Laboratory Test Report",
      "Food Safety Certificate if edible goods",
      "Business Registration Proof",
    ],
    optional: [
      "Fumigation Certificate",
      "Cold Treatment Certificate",
      "Irradiation Certificate",
      "Organic Certification",
      "APEDA Registration",
      "Tea / Coffee / Spices / Rubber Board Registration",
    ],
  },
  Pharmaceuticals: {
    mandatory: [
      "GMP Certificate",
      "Drug Manufacturing License",
      "Certificate of Analysis COA",
      "Batch Testing Report",
      "Regulatory Authority Approval if applicable",
    ],
    optional: ["Product Registration Certificate", "WHO Prequalification Certificate"],
  },
  Electronics: {
    mandatory: [
      "Product Safety Test Report",
      "Electrical Safety Certificate",
      "CE / FCC / RoHS based on destination requirement",
    ],
    optional: ["EMC Test Report", "ISO Certification", "BIS / CCC Certification"],
  },
  "Auto Parts": {
    mandatory: [
      "Material Test Report",
      "Safety Compliance Certificate",
      "ISO / IATF Certification if applicable",
    ],
    optional: [
      "E-Mark Certification",
      "Emission Compliance Report",
      "Vehicle Compatibility Report",
    ],
  },
};
const createDocState = (): IndustryDocState => ({
  certificateNumber: "",
  authorizedBy: "",
  issueDate: "",
  expiryDate: "",
  file: null,
  aiStatus: "pending_review",
  aiNote: "HXN AI will verify document number, issuing authority, expiry date, and uploaded file.",
});
export default function SellerOnboardingPage() {
  const [loading, setLoading] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState(
    "I can explain which documents are required for your product category and export destination."
  );

  const [form, setForm] = useState<FormState>({
    companyName: "",
    countryOfRegistration: "",
    registeredAddress: "",
    businessType: "",
    yearEstablished: "",
    companyDescription: "",
    companyWebsite: "",
    businessEmail: "",
    mobileNumber: "",
    ownerName: "",
    ownerRole: "",
    mainProductName: "",
    productCategory: "",
    productDescription: "",
    moq: "",
    productionCapacity: "",
    exportMarkets: "",
    yearsExportExperience: "",
    supplyChainType: "",
  });

  const [files, setFiles] = useState<FileState>({
    businessRegistration: null,
    taxRegistration: null,
    governmentId: null,
    productImages: [],
    exportLicense: null,
    industryMandatory: [],
    industryOptional: [],
    factoryPhotos: [],
    warehousePhotos: [],
    productionVideos: [],
    exportInvoices: [],
    shippingDocuments: [],
    extraCertificates: [],
  });
const [industryDocs, setIndustryDocs] = useState<IndustryDocsState>({});
  const selectedCompliance = form.productCategory
    ? compliance[form.productCategory]
    : null;

  const aiRegulatoryGuide = useMemo(() => {
    const market = form.exportMarkets.toLowerCase();
    const category = form.productCategory || "your selected product";

    if (!market) {
      return "Enter export country in Segment 6. HXN AI will automatically show destination trade documents here.";
    }

    if (market.includes("usa") || market.includes("america")) {
      return `For ${category} export to USA, HXN AI suggests checking FDA / USDA rules where applicable, customs documents, product labelling, import registration, safety certificates, commercial invoice, packing list, certificate of origin and bill of lading.`;
    }

    if (
      market.includes("germany") ||
      market.includes("france") ||
      market.includes("eu") ||
      market.includes("europe")
    ) {
      return `For ${category} export to EU, HXN AI suggests checking CE / RoHS where applicable, EFSA / EMA rules, customs declaration, product safety files, labelling rules, commercial invoice, packing list, certificate of origin and bill of lading.`;
    }

    if (market.includes("australia")) {
      return `For ${category} export to Australia, HXN AI suggests checking DAFF / TGA, biosecurity rules, import permits, safety certificates, labelling, commercial invoice, packing list, certificate of origin and shipping documents.`;
    }

    if (market.includes("china")) {
      return `For ${category} export to China, HXN AI suggests checking CCC where applicable, customs registration, product testing, import documents, commercial invoice, packing list, certificate of origin and bill of lading.`;
    }

    if (market.includes("uae") || market.includes("dubai")) {
      return `For ${category} export to UAE, HXN AI suggests checking customs registration, certificate of origin, commercial invoice, packing list, product-specific approval, import permit where applicable and bill of lading.`;
    }

    return `For ${category} export to ${form.exportMarkets}, HXN AI recommends destination import rules, product certificates, customs documents, commercial invoice, packing list, certificate of origin, bill of lading and buyer-specific compliance review.`;
  }, [form.exportMarkets, form.productCategory]);

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  setForm((prev) => ({ ...prev, [name]: value as any }));

  if (name === "productCategory" && value) {
    const category = value as Category;
    const docs = [...compliance[category].mandatory, ...compliance[category].optional];

    const next: IndustryDocsState = {};
    docs.forEach((docName) => {
      next[docName] = industryDocs[docName] || createDocState();
    });

    setIndustryDocs(next);
  }
};

  const singleFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "businessRegistration" | "taxRegistration" | "governmentId" | "exportLicense"
  ) => {
    setFiles((prev) => ({ ...prev, [key]: e.target.files?.[0] || null }));
  };

  const multiFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    key:
      | "productImages"
      | "industryMandatory"
      | "industryOptional"
      | "factoryPhotos"
      | "warehousePhotos"
      | "productionVideos"
      | "exportInvoices"
      | "shippingDocuments"
      | "extraCertificates"
  ) => {
    setFiles((prev) => ({ ...prev, [key]: Array.from(e.target.files || []) }));
  };

  const uploadOne = async (file: File | null, folder: string) => {
    if (!file) return "";
    const safeName = file.name.replace(/\s+/g, "-").toLowerCase();
    const fileRef = ref(
      storage,
      `seller-verification/${Date.now()}-${folder}-${safeName}`
    );
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  };

  const uploadMany = async (list: File[], folder: string) => {
    const urls: string[] = [];
    for (const file of list) urls.push(await uploadOne(file, folder));
    return urls;
  };
const handleIndustryDocChange = (
  docName: string,
  field: keyof IndustryDocState,
  value: string | File | null
) => {
  setIndustryDocs((prev) => ({
    ...prev,
    [docName]: {
      ...(prev[docName] || createDocState()),
      [field]: value,
    },
  }));
};
  const askHxnAi = async (question?: string) => {
    try {
      setAiLoading(true);
      setAiAnswer("HXN AI is analysing your category and export destination...");

      const res = await fetch("/api/hxn-verification-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: form.productCategory,
          exportMarket: form.exportMarkets,
          question:
            question ||
            aiQuestion ||
            "Tell me required verification documents for my category and export market.",
        }),
      });

      const data = await res.json();
      setAiAnswer(data.answer || "HXN AI could not generate guidance.");
    } catch {
      setAiAnswer("HXN AI failed. Check API route and OpenAI key.");
    } finally {
      setAiLoading(false);
    }
  };

  const validate = () => {
    if (!form.companyName) return "Company name is required.";
    if (!form.countryOfRegistration) return "Country of registration is required.";
    if (!form.registeredAddress) return "Registered address is required.";
    if (!form.businessType) return "Business type is required.";
    if (!form.yearEstablished) return "Year established is required.";
    if (!form.companyDescription) return "Company description is required.";
    if (!form.businessEmail) return "Business email is required.";
    if (!form.mobileNumber) return "Mobile number is required.";
    if (!files.businessRegistration) return "Business registration certificate is required.";
    if (!form.ownerName) return "Owner / authorized person name is required.";
    if (!files.governmentId) return "Government ID is required.";
    if (!form.ownerRole) return "Role in company is required.";
    if (!form.mainProductName) return "Main product name is required.";
    if (!form.productCategory) return "Product category is required.";
    if (!form.productDescription) return "Product description is required.";
    if (files.productImages.length === 0) return "Product images are required.";
    if (!form.yearsExportExperience) return "Years of export experience is required.";
    if (!form.supplyChainType) return "Business type in supply chain is required.";
    if (form.productCategory) {
  for (const docName of compliance[form.productCategory].mandatory) {
    const doc = industryDocs[docName];

    if (!doc?.certificateNumber) return `${docName}: certificate number is required.`;
    if (!doc?.authorizedBy) return `${docName}: authorized by is required.`;
    if (!doc?.issueDate) return `${docName}: issue date is required.`;
    if (!doc?.file) return `${docName}: upload document is required.`;
  }
}
    return "";
  };

  const submitVerification = async () => {
    const error = validate();

    if (error) {
      alert(error);
      setAiAnswer(error);
      setAiOpen(true);
      return;
    }

    try {
      setLoading(true);
const industryDocumentDetails = await Promise.all(
  Object.entries(industryDocs).map(async ([docName, doc]) => ({
    documentName: docName,
    requirementType:
      form.productCategory && compliance[form.productCategory].mandatory.includes(docName)
        ? "mandatory"
        : "optional",
    certificateNumber: doc.certificateNumber,
    authorizedBy: doc.authorizedBy,
    issueDate: doc.issueDate,
    expiryDate: doc.expiryDate,
    fileUrl: await uploadOne(doc.file, `industry-${docName}`),
    aiStatus: "pending_review",
    aiNote:
      "HXN AI will verify document authenticity, expiry, issuing authority, and category relevance.",
  }))
);
      const uploaded = {
        businessRegistrationUrl: await uploadOne(
          files.businessRegistration,
          "business-registration"
        ),
        taxRegistrationUrl: await uploadOne(files.taxRegistration, "tax-registration"),
        governmentIdUrl: await uploadOne(files.governmentId, "government-id"),
        productImageUrls: await uploadMany(files.productImages, "product-images"),
        exportLicenseUrl: await uploadOne(files.exportLicense, "export-license"),
        industryMandatoryUrls: await uploadMany(
          files.industryMandatory,
          "industry-mandatory"
        ),
        industryOptionalUrls: await uploadMany(
          files.industryOptional,
          "industry-optional"
        ),
        factoryPhotoUrls: await uploadMany(files.factoryPhotos, "factory-photos"),
        warehousePhotoUrls: await uploadMany(files.warehousePhotos, "warehouse-photos"),
        productionVideoUrls: await uploadMany(
          files.productionVideos,
          "production-videos"
        ),
        exportInvoiceUrls: await uploadMany(files.exportInvoices, "export-invoices"),
        shippingDocumentUrls: await uploadMany(
          files.shippingDocuments,
          "shipping-documents"
        ),
        extraCertificateUrls: await uploadMany(
          files.extraCertificates,
          "extra-certificates"
        ),
      };

      const supplierEmail =
        typeof window !== "undefined"
          ? localStorage.getItem("supplierEmail") || form.businessEmail
          : form.businessEmail;

      const supplierUid =
        typeof window !== "undefined"
          ? localStorage.getItem("supplierUid") || ""
          : "";

      const docRef = await addDoc(collection(db, "supplierVerifications"), {
        verificationType: "single_step_supplier_verification",
        onboardingStatus: "verification_submitted",
        verificationStatus: "pending_hxn_ai_review",
        supplierUid,
        supplierEmail,
        ...form,
        files: uploaded,
        selectedIndustryCompliance: form.productCategory
          ? compliance[form.productCategory]
          : null,
          industryDocumentDetails,
        aiRegulatoryGuide,
        aiVerificationRules: {
          mandatoryIdentityDocumentsValid: "pending",
          businessRegistrationVerified: "pending",
          complianceDocumentsPresent: "pending",
          emailVerificationSuccessful: "pending",
          productInformationConsistent: "pending",
          fraudRiskDetected: "pending",
          minimumComplianceScoreMet: "pending",
        },
        hxnAiNextAction:
          "Read verification data, verify documents, calculate trust score, create supplier dashboard, create AI generated store, activate marketplace access.",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      window.location.href = `/seller-onboarding/activation?verificationId=${docRef.id}`;
    } catch (err) {
      console.error("SINGLE VERIFICATION ERROR:", err);
      alert("Verification submission failed. Please check files and try again.");
      setAiAnswer("HXN AI detected a submission issue. Please check uploaded files and try again.");
      setAiOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={styles.page}>
      <style>{css}</style>

      <div style={styles.glowOne} />
      <div style={styles.glowTwo} />

      <button
        type="button"
        className="floating-ai"
        style={styles.floatingAi}
        onClick={() => setAiOpen(true)}
      >
        HXN AI Help
      </button>

      <section style={styles.hero}>
        <div style={styles.badge}>HXN AI · SINGLE SUPPLIER VERIFICATION</div>

        <h1 className="hero-title" style={styles.title}>
          Verify Your
          <br />
          Global Supplier
          <br />
          Identity
        </h1>

        <p style={styles.subtitle}>
          One premium AI-powered verification page for business identity, legal documents,
          product compliance, export readiness and marketplace activation.
        </p>

        <div className="ai-card" style={styles.aiCard}>
          <video
            src="/ai-card-hxn.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={styles.robotVideo}
          />

          <h2 style={styles.aiTitle}>HXN AI Verification Assistant</h2>

          <div style={styles.aiLine} />

          <p style={styles.aiTyping}>
            I am HXN. I will guide you through supplier verification,
            compliance documents, destination export rules and AI store activation.
          </p>

          <p style={styles.aiText}>
            Select your product category and HXN will unlock only the required industry documents.
            Enter your export destination and HXN will list destination trade requirements.
          </p>

          <button type="button" style={styles.heroAiButton} onClick={() => setAiOpen(true)}>
            Open HXN AI Support
          </button>
        </div>
      </section>

      <section style={styles.formShell}>
        <Section title="1. Company Identity" />
        <Grid>
          <Input name="companyName" placeholder="Company Name *" value={form.companyName} onChange={handleChange} />
          <Input name="countryOfRegistration" placeholder="Country of Registration *" value={form.countryOfRegistration} onChange={handleChange} />
          <Input name="registeredAddress" placeholder="Full Registered Address *" value={form.registeredAddress} onChange={handleChange} />
          <Select name="businessType" value={form.businessType} onChange={handleChange}>
            <option value="">Business Type *</option>
            <option>Manufacturer</option>
            <option>Exporter</option>
            <option>Trader</option>
            <option>Distributor</option>
          </Select>
          <Input name="yearEstablished" placeholder="Year Established *" value={form.yearEstablished} onChange={handleChange} />
          <Input name="companyWebsite" placeholder="Company Website Optional" value={form.companyWebsite} onChange={handleChange} />
        </Grid>

        <Textarea name="companyDescription" placeholder="Company Description *" value={form.companyDescription} onChange={handleChange} />

        <Section title="2. Contact Information" />
        <Grid>
          <Input name="businessEmail" placeholder="Business Email *" value={form.businessEmail} onChange={handleChange} />
          <Input name="mobileNumber" placeholder="Mobile Number *" value={form.mobileNumber} onChange={handleChange} />
        </Grid>

        <Section title="3. Legal Business Verification" />
        <Grid>
          <FileBox label="Business Registration Certificate *" file={files.businessRegistration} onChange={(e) => singleFile(e, "businessRegistration")} />
          <FileBox label="Tax Registration Certificate" file={files.taxRegistration} onChange={(e) => singleFile(e, "taxRegistration")} />
        </Grid>

        <Section title="4. Identity Verification" />
        <Grid>
          <Input name="ownerName" placeholder="Owner / Authorized Person Full Name *" value={form.ownerName} onChange={handleChange} />
          <Input name="ownerRole" placeholder="Role in Company *" value={form.ownerRole} onChange={handleChange} />
          <FileBox label="Government ID *" file={files.governmentId} onChange={(e) => singleFile(e, "governmentId")} />
        </Grid>

        <Section title="5. Product Information" />
        <Grid>
          <Input name="mainProductName" placeholder="Main Product Name *" value={form.mainProductName} onChange={handleChange} />

          <Select name="productCategory" value={form.productCategory} onChange={handleChange}>
            <option value="">Product Category *</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Pharmaceuticals">Pharmaceuticals</option>
            <option value="Electronics">Electronics</option>
            <option value="Auto Parts">Auto Parts</option>
          </Select>

          <Input name="moq" placeholder="MOQ Optional" value={form.moq} onChange={handleChange} />
          <Input name="productionCapacity" placeholder="Production Capacity Optional" value={form.productionCapacity} onChange={handleChange} />
        </Grid>

        <Textarea name="productDescription" placeholder="Product Description *" value={form.productDescription} onChange={handleChange} />

        <FileBox multiple label="Product Images *" files={files.productImages} onChange={(e) => multiFile(e, "productImages")} />

        <Section title="6. Trade & Export Information" />
        <Grid>
          <Input name="exportMarkets" placeholder="Export Countries / Target Markets" value={form.exportMarkets} onChange={handleChange} />
          <Input name="yearsExportExperience" placeholder="Years of Export Experience *" value={form.yearsExportExperience} onChange={handleChange} />

          <Select name="supplyChainType" value={form.supplyChainType} onChange={handleChange}>
            <option value="">Business Type in Supply Chain *</option>
            <option>Manufacturer</option>
            <option>Exporter</option>
            <option>Distributor</option>
            <option>Wholesaler</option>
            <option>Trading Company</option>
          </Select>

          <FileBox label="Export / Import License" file={files.exportLicense} onChange={(e) => singleFile(e, "exportLicense")} />
        </Grid>

       <Section title="7. Industry-Specific Compliance" />

{selectedCompliance && form.productCategory ? (
  <div style={styles.complianceBox}>
    <div style={styles.categoryHeader}>
      <div>
        <p style={styles.kicker}>Selected Category</p>
        <h3 style={styles.miniTitle}>{form.productCategory} Document Forms</h3>
      </div>

      <button
        type="button"
        style={styles.smallAiButton}
        onClick={() => {
          setAiOpen(true);
          askHxnAi(`Explain all document requirements for ${form.productCategory}`);
        }}
      >
        Ask HXN
      </button>
    </div>

    {[...selectedCompliance.mandatory, ...selectedCompliance.optional].map((docName) => {
      const isMandatory = selectedCompliance.mandatory.includes(docName);
      const doc = industryDocs[docName] || createDocState();

      return (
        <div key={docName} style={styles.documentFormCard}>
          <div style={styles.documentTop}>
            <div>
              <p style={styles.kicker}>{isMandatory ? "Mandatory" : "Optional"}</p>
              <h4 style={styles.documentTitle}>{docName}</h4>
              <p style={styles.documentDesc}>
                Add certificate details so HXN AI can check validity, issuing authority, expiry, and document match.
              </p>
            </div>

            <span style={isMandatory ? styles.requiredBadge : styles.optionalBadge}>
              {isMandatory ? "Required" : "Optional"}
            </span>
          </div>

          <Grid>
            <Input
              placeholder="Certificate / Registration Number"
              value={doc.certificateNumber}
              onChange={(e) =>
                handleIndustryDocChange(docName, "certificateNumber", e.target.value)
              }
            />

            <Input
              placeholder="Authorized By / Issuing Authority"
              value={doc.authorizedBy}
              onChange={(e) =>
                handleIndustryDocChange(docName, "authorizedBy", e.target.value)
              }
            />

            <Input
              type="date"
              value={doc.issueDate}
              onChange={(e) =>
                handleIndustryDocChange(docName, "issueDate", e.target.value)
              }
            />

            <Input
              type="date"
              value={doc.expiryDate}
              onChange={(e) =>
                handleIndustryDocChange(docName, "expiryDate", e.target.value)
              }
            />
          </Grid>

          <FileBox
            label={`Upload ${docName}`}
            file={doc.file}
            onChange={(e) =>
              handleIndustryDocChange(
                docName,
                "file",
                e.target.files?.[0] || null
              )
            }
          />

          <div style={styles.aiDocStatus}>
            <strong>HXN AI Status:</strong> {doc.aiStatus}
            <br />
            {doc.aiNote}
          </div>
        </div>
      );
    })}
  </div>
) : (
  <div style={styles.emptyBox}>
    Select Agriculture, Pharmaceuticals, Electronics, or Auto Parts in Segment 5.
    HXN will open the full document form here.
  </div>
)}
        <Section title="8. HXN AI Global Regulatory Compliance Layer" />

        <div style={styles.aiGuide}>
          <strong>AI Auto Applied Guidance</strong>
          <br />
          {aiRegulatoryGuide}
        </div>

        <button
          type="button"
          style={styles.inlineAiButton}
          onClick={() => {
            setAiOpen(true);
            askHxnAi(
              `List all documents needed to export ${form.productCategory || "my product"} to ${form.exportMarkets || "my destination country"}`
            );
          }}
        >
          Ask HXN AI to List Country Documents
        </button>

        <Section title="9. Business Proof" />
        <Grid>
          <FileBox multiple label="Factory Photos" files={files.factoryPhotos} onChange={(e) => multiFile(e, "factoryPhotos")} />
          <FileBox multiple label="Warehouse Photos" files={files.warehousePhotos} onChange={(e) => multiFile(e, "warehousePhotos")} />
          <FileBox multiple label="Production Videos" files={files.productionVideos} onChange={(e) => multiFile(e, "productionVideos")} />
          <FileBox multiple label="Past Export Invoices" files={files.exportInvoices} onChange={(e) => multiFile(e, "exportInvoices")} />
          <FileBox multiple label="Bill of Lading / Shipping Documents" files={files.shippingDocuments} onChange={(e) => multiFile(e, "shippingDocuments")} />
          <FileBox multiple label="ISO / HACCP / FDA / CE Certificates" files={files.extraCertificates} onChange={(e) => multiFile(e, "extraCertificates")} />
        </Grid>

        <button type="button" style={styles.submitButton} disabled={loading} onClick={submitVerification}>
          {loading ? "HXN AI Verifying Supplier..." : "Submit Verification & Activate HXN AI"}
        </button>
      </section>

      {aiOpen && (
        <div style={styles.aiOverlay}>
          <div style={styles.aiModal}>
            <div style={styles.aiModalBar} />

            <button type="button" style={styles.closeButton} onClick={() => setAiOpen(false)}>
              ×
            </button>

            <div style={styles.aiModalHeader}>
              <div style={styles.aiFace}>
                <span />
                <span />
              </div>

              <div>
                <h2 style={styles.modalTitle}>HXN AI Legal Help</h2>
                <p style={styles.modalSub}>Ask about documents, compliance, export country rules and verification.</p>
              </div>
            </div>

            <div style={styles.aiAnswerBox}>
              {aiLoading ? "HXN AI is thinking..." : aiAnswer}
            </div>

            <div style={styles.quickGrid}>
              {[
                "Which documents are mandatory?",
                "What do I need for USA export?",
                "Explain my category compliance",
                "What is export license?",
                "What is tax registration?",
                "What is phytosanitary certificate?",
              ].map((q) => (
                <button
                  key={q}
                  type="button"
                  style={styles.quickButton}
                  onClick={() => {
                    setAiQuestion(q);
                    askHxnAi(q);
                  }}
                >
                  {q}
                </button>
              ))}
            </div>

            <Textarea
              placeholder="Type your supplier verification question here..."
              value={aiQuestion}
              onChange={(e) => setAiQuestion(e.target.value)}
            />

            <button type="button" style={styles.aiSendButton} onClick={() => askHxnAi()}>
              {aiLoading ? "HXN AI Thinking..." : "Send Message"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

function Section({ title }: { title: string }) {
  return <h2 style={styles.sectionTitle}>{title}</h2>;
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div style={styles.grid}>{children}</div>;
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

function FileBox({
  label,
  file,
  files,
  multiple,
  onChange,
}: {
  label: string;
  file?: File | null;
  files?: File[];
  multiple?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const text = multiple
    ? `${files?.length || 0} file(s) selected`
    : file?.name || "No file selected";

  return (
    <label className="file-card" style={styles.fileBox}>
      <input type="file" multiple={multiple} onChange={onChange} style={{ display: "none" }} />
      <span style={styles.fileIcon}>⬆</span>
      <span style={styles.fileText}>
        <strong>{label}</strong>
        <em>{text}</em>
      </span>
      <span style={styles.browse}>Browse</span>
    </label>
  );
}

const css = `
.premium-field::placeholder{color:rgba(203,213,225,.72);}
.premium-field:focus{outline:none;border-color:rgba(125,211,252,.95)!important;box-shadow:0 0 0 4px rgba(125,211,252,.18)!important;}
.file-card:hover{transform:translateY(-3px);border-color:rgba(125,211,252,.55)!important;}
.floating-ai{animation:pulseAi 2s infinite ease-in-out;}
@keyframes pulseAi{0%,100%{transform:translateY(0);box-shadow:0 15px 55px rgba(56,189,248,.35);}50%{transform:translateY(-4px);box-shadow:0 25px 80px rgba(168,85,247,.45);}}
option{color:#020617;background:white;}
@media(max-width:760px){
.hero-title{font-size:42px!important;letter-spacing:-2px!important;}
.ai-card{padding:24px!important;border-radius:34px!important;}
}
input[type="date"]{
color:white !important;
}

input[type="date"]::-webkit-calendar-picker-indicator{
filter:invert(1);
opacity:1;
cursor:pointer;
}
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top,#172554 0%,#0f172a 42%,#020617 100%)",
    color: "#fff",
    padding: "64px 18px 100px",
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
    position: "relative",
    overflowX: "hidden",
  },
  glowOne: {
    position: "absolute",
    top: -180,
    right: -120,
    width: 520,
    height: 520,
    borderRadius: "50%",
    background: "rgba(56,189,248,.18)",
    filter: "blur(120px)",
  },
  glowTwo: {
    position: "absolute",
    bottom: 200,
    left: -170,
    width: 520,
    height: 520,
    borderRadius: "50%",
    background: "rgba(168,85,247,.16)",
    filter: "blur(120px)",
  },
  floatingAi: {
    position: "fixed",
    right: 18,
    bottom: 22,
    zIndex: 30,
    border: "none",
    borderRadius: 999,
    padding: "16px 22px",
    background: "linear-gradient(135deg,#7c3aed,#2563eb,#06b6d4)",
    color: "#fff",
    fontWeight: 950,
    cursor: "pointer",
  },
  hero: {
    maxWidth: 1050,
    margin: "0 auto",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },
  badge: {
    display: "inline-flex",
    padding: "10px 22px",
    borderRadius: 999,
    background: "rgba(15,23,42,.8)",
    border: "1px solid rgba(125,211,252,.38)",
    color: "#7dd3fc",
    letterSpacing: 3,
    fontSize: 12,
    fontWeight: 950,
    marginBottom: 28,
  },
  title: {
    fontSize: "clamp(46px,10vw,92px)",
    lineHeight: 0.92,
    margin: 0,
    fontWeight: 950,
    letterSpacing: "-4px",
  },
  subtitle: {
    maxWidth: 850,
    margin: "30px auto 38px",
    color: "#dbeafe",
    fontSize: 18,
    lineHeight: 1.8,
  },
  aiCard: {
    maxWidth: 760,
    margin: "0 auto 46px",
    padding: 42,
    borderRadius: 42,
    background: "linear-gradient(135deg,#ffffff,#f8fbff,#eef7ff)",
    color: "#020617",
    boxShadow: "0 30px 90px rgba(14,165,233,.22)",
  },
  robotVideo: {
    width: "100%",
    maxWidth: 520,
    borderRadius: 34,
    marginBottom: 20,
  },
  aiTitle: {
    fontSize: "clamp(34px,7vw,58px)",
    lineHeight: 1.05,
    margin: 0,
    fontWeight: 950,
  },
  aiLine: {
    width: 74,
    height: 6,
    borderRadius: 99,
    background: "linear-gradient(135deg,#7c3aed,#06b6d4)",
    margin: "24px 0",
  },
  aiTyping: {
    fontSize: "clamp(24px,5vw,36px)",
    lineHeight: 1.2,
    fontWeight: 950,
    background: "linear-gradient(135deg,#7c3aed,#2563eb,#06b6d4)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  aiText: {
    color: "#334155",
    lineHeight: 1.65,
    fontSize: 17,
    fontWeight: 850,
  },
  heroAiButton: {
    marginTop: 22,
    minHeight: 58,
    width: "100%",
    border: "none",
    borderRadius: 20,
    background: "linear-gradient(135deg,#020617,#111827)",
    color: "#fff",
    fontWeight: 950,
    cursor: "pointer",
  },
  formShell: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: 42,
    borderRadius: 42,
    background: "linear-gradient(145deg,rgba(15,23,42,.94),rgba(30,41,59,.82))",
    border: "1px solid rgba(148,163,184,.24)",
    boxShadow: "0 45px 140px rgba(0,0,0,.62)",
    position: "relative",
    zIndex: 2,
  },
  sectionTitle: {
    fontSize: "clamp(28px,5vw,44px)",
    margin: "44px 0 22px",
    fontWeight: 950,
    letterSpacing: "-1px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(245px,1fr))",
    gap: 16,
    marginBottom: 18,
  },
  input: {
  width: "100%",
  minHeight: 62,
  borderRadius: 22,
  border: "1px solid rgba(255,255,255,.14)",
  background: "rgba(255,255,255,.08)",
  color: "#ffffff",
  padding: "0 20px",
  fontSize: 16,
  boxSizing: "border-box",
  appearance: "none",
  WebkitAppearance: "none",
},

 textarea: {
  width: "100%",
  minHeight: 140,
  borderRadius: 22,
  border: "1px solid #cbd5e1",
  background: "#ffffff",
  color: "#020617",
  padding: 18,
  fontSize: 16,
  lineHeight: 1.7,
  resize: "vertical",
  marginBottom: 18,
},
  
  fileBox: {
    minHeight: 96,
    borderRadius: 24,
    border: "1px solid rgba(125,211,252,.24)",
    background: "rgba(255,255,255,.075)",
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: 18,
    cursor: "pointer",
    transition: ".3s ease",
  },
  fileIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    background: "linear-gradient(135deg,#7dd3fc,#2563eb)",
    display: "grid",
    placeItems: "center",
    color: "#020617",
    fontWeight: 950,
  },
  fileText: {
    flex: 1,
    display: "grid",
    gap: 5,
  },
  browse: {
    padding: "10px 16px",
    borderRadius: 999,
    background: "rgba(255,255,255,.10)",
    color: "#bae6fd",
    fontWeight: 900,
  },
  complianceBox: {
    padding: 26,
    borderRadius: 30,
    background: "rgba(255,255,255,.07)",
    border: "1px solid rgba(125,211,252,.22)",
  },
  categoryHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: 18,
    alignItems: "center",
    marginBottom: 18,
  },
  kicker: {
    margin: 0,
    color: "#7dd3fc",
    fontWeight: 900,
    letterSpacing: 2,
    fontSize: 12,
  },
  miniTitle: {
    fontSize: 28,
    margin: 0,
    fontWeight: 950,
  },
  twoCol: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: 18,
    marginBottom: 20,
  },
  docPanel: {
    padding: 20,
    borderRadius: 24,
    background: "rgba(2,6,23,.32)",
    border: "1px solid rgba(255,255,255,.08)",
  },
  docTitle: {
    margin: "0 0 12px",
    color: "#fff",
    fontSize: 18,
  },
  docItem: {
    color: "#dbeafe",
    fontWeight: 800,
    lineHeight: 1.5,
  },
  smallAiButton: {
    border: "none",
    borderRadius: 18,
    padding: "14px 18px",
    background: "linear-gradient(135deg,#7c3aed,#06b6d4)",
    color: "#fff",
    fontWeight: 950,
    cursor: "pointer",
  },
  emptyBox: {
    padding: 24,
    borderRadius: 24,
    background: "rgba(255,255,255,.07)",
    color: "#cbd5e1",
    fontWeight: 850,
    lineHeight: 1.6,
  },
  aiGuide: {
    padding: 28,
    borderRadius: 28,
    background: "linear-gradient(135deg,rgba(125,211,252,.14),rgba(168,85,247,.10))",
    border: "1px solid rgba(125,211,252,.24)",
    color: "#dbeafe",
    lineHeight: 1.7,
    fontSize: 17,
    fontWeight: 850,
  },
  inlineAiButton: {
    width: "100%",
    minHeight: 60,
    marginTop: 16,
    border: "none",
    borderRadius: 22,
    background: "linear-gradient(135deg,#7c3aed,#2563eb,#06b6d4)",
    color: "#fff",
    fontWeight: 950,
    cursor: "pointer",
  },
  submitButton: {
    width: "100%",
    marginTop: 42,
    minHeight: 68,
    border: "none",
    borderRadius: 26,
    background: "linear-gradient(135deg,#7dd3fc,#38bdf8,#2563eb)",
    color: "#020617",
    fontWeight: 950,
    fontSize: 18,
    cursor: "pointer",
    boxShadow: "0 25px 90px rgba(14,165,233,.35)",
  },
  aiOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(2,6,23,.72)",
    backdropFilter: "blur(14px)",
    zIndex: 80,
    display: "grid",
    placeItems: "center",
    padding: 18,
  },
  aiModal: {
    width: "min(760px,100%)",
    maxHeight: "92vh",
    overflowY: "auto",
    borderRadius: 40,
    padding: 36,
    background: "linear-gradient(135deg,#ffffff,#f8fbff,#eef7ff)",
    color: "#020617",
    position: "relative",
    boxShadow: "0 40px 120px rgba(0,0,0,.5)",
  },
  aiModalBar: {
    width: 120,
    height: 10,
    borderRadius: 999,
    background: "#cbd5e1",
    margin: "0 auto 28px",
  },
  closeButton: {
    position: "absolute",
    top: 24,
    right: 24,
    width: 58,
    height: 58,
    borderRadius: "50%",
    border: "none",
    background: "#020617",
    color: "#fff",
    fontSize: 36,
    cursor: "pointer",
  },
  aiModalHeader: {
    display: "flex",
    gap: 22,
    alignItems: "center",
    marginBottom: 24,
  },
  aiFace: {
    width: 92,
    height: 92,
    borderRadius: 28,
    background: "linear-gradient(135deg,#0f172a,#020617)",
    boxShadow: "0 0 40px rgba(34,211,238,.35)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
  },
  modalTitle: {
    fontSize: "clamp(34px,6vw,52px)",
    margin: 0,
    fontWeight: 950,
  },
  modalSub: {
    color: "#475569",
    margin: "8px 0 0",
    fontSize: 18,
  },
  aiAnswerBox: {
    padding: 26,
    borderRadius: 28,
    background: "#eef6ff",
    color: "#0f172a",
    fontWeight: 850,
    lineHeight: 1.7,
    whiteSpace: "pre-wrap",
    marginBottom: 22,
  },
  quickGrid: {
    display: "grid",
    gap: 12,
    marginBottom: 20,
  },
  quickButton: {
    minHeight: 56,
    borderRadius: 20,
    border: "1px solid #cbd5e1",
    background: "#fff",
    color: "#020617",
    fontWeight: 900,
    cursor: "pointer",
  },
  aiSendButton: {
    width: "100%",
    minHeight: 60,
    border: "none",
    borderRadius: 22,
    background: "linear-gradient(135deg,#9333ea,#2563eb,#06b6d4)",
    color: "#fff",
    fontWeight: 950,
    fontSize: 16,
    cursor: "pointer",
  },
documentFormCard: {
  marginTop: 22,
  padding: 24,
  borderRadius: 30,
  background: "linear-gradient(145deg,rgba(15,23,42,.78),rgba(30,41,59,.62))",
  border: "1px solid rgba(125,211,252,.22)",
  boxShadow: "0 24px 80px rgba(0,0,0,.28)",
},

documentTop: {
  display: "flex",
  justifyContent: "space-between",
  gap: 16,
  alignItems: "flex-start",
  marginBottom: 18,
},

documentTitle: {
  margin: "6px 0 8px",
  fontSize: 24,
  fontWeight: 950,
  color: "#ffffff",
},

documentDesc: {
  margin: 0,
  color: "#cbd5e1",
  lineHeight: 1.6,
  fontWeight: 700,
},

requiredBadge: {
  padding: "10px 14px",
  borderRadius: 999,
  background: "linear-gradient(135deg,#ef4444,#f97316)",
  color: "#fff",
  fontWeight: 950,
  whiteSpace: "nowrap",
},

optionalBadge: {
  padding: "10px 14px",
  borderRadius: 999,
  background: "rgba(125,211,252,.16)",
  color: "#bae6fd",
  fontWeight: 950,
  whiteSpace: "nowrap",
},

aiDocStatus: {
  background: "rgba(14,165,233,.10)",
  border: "1px solid rgba(125,211,252,.22)",
  color: "#dbeafe",
  lineHeight: 1.6,
  fontWeight: 750,
}
};
