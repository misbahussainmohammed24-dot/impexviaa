"use client";

import { Suspense, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { useSearchParams } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "@/lib/firebase";

import Hero from "@/components/step3/Hero";
import ProductProfile from "@/components/step3/ProductProfile";
import ProductInformation from "@/components/step3/ProductInformation";
import ExportSales from "@/components/step3/ExportSales";
import Certifications from "@/components/step3/Certifications";
import VisibilitySettings from "@/components/step3/VisibilitySettings";
import HXNChat from "@/components/step3/HXNChat";

import { validateStep3 } from "@/lib/step3Validation";

type FormState = {
  primaryBusinessActivity: string;
  mainProductCategories: string;
  productSubcategories: string;
  productName: string;
  brandName: string;
  productDescription: string;
  productSpecifications: string;
  moq: string;
  productionCapacity: string;
  leadTime: string;
  packagingType: string;
  portOfLoading: string;
  shippingAvailability: string;
  exportMarkets: string;
  paymentTermsAccepted: string;
  incotermsSupported: string;
  productCertifications: string;
  marketplaceVisibility: string;
  rfqParticipation: string;
  featuredSupplierEligibility: string;
};

type FileState = {
  mainProductImage: File | null;
  additionalProductImages: File[];
  packagingImages: File[];
  factoryImages: File[];
  warehouseImages: File[];
  productVideo: File | null;
  productCatalog: File | null;
  certificationDocuments: File[];
};

export default function Step3Page() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Step3BusinessStore />
    </Suspense>
  );
}

function Step3BusinessStore() {
  const params = useSearchParams();

  const legalVerificationId = params.get("legalVerificationId") || "";
  const applicationId = params.get("applicationId") || "";
  const country = params.get("country") || "";

  const [loading, setLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [hxnMessage, setHxnMessage] = useState(
    "HXN AI is reviewing your product information, export readiness, marketplace visibility, and AI store structure."
  );

  const fullText =
    "I am HXN. I will help you build your product profile, supplier store, export presentation, SEO tags, and marketplace-ready catalogue.";

  const [form, setForm] = useState<FormState>({
    primaryBusinessActivity: "",
    mainProductCategories: "",
    productSubcategories: "",
    productName: "",
    brandName: "",
    productDescription: "",
    productSpecifications: "",
    moq: "",
    productionCapacity: "",
    leadTime: "",
    packagingType: "",
    portOfLoading: "",
    shippingAvailability: "",
    exportMarkets: "",
    paymentTermsAccepted: "",
    incotermsSupported: "",
    productCertifications: "",
    marketplaceVisibility: "",
    rfqParticipation: "",
    featuredSupplierEligibility: "",
  });

  const [files, setFiles] = useState<FileState>({
    mainProductImage: null,
    additionalProductImages: [],
    packagingImages: [],
    factoryImages: [],
    warehouseImages: [],
    productVideo: null,
    productCatalog: null,
    certificationDocuments: [],
  });

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index += 1;
      if (index > fullText.length) clearInterval(timer);
    }, 32);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSingleFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "mainProductImage" | "productVideo" | "productCatalog"
  ) => {
    setFiles((prev) => ({
      ...prev,
      [key]: e.target.files?.[0] || null,
    }));
  };

  const handleMultipleFiles = (
    e: React.ChangeEvent<HTMLInputElement>,
    key:
      | "additionalProductImages"
      | "packagingImages"
      | "factoryImages"
      | "warehouseImages"
      | "certificationDocuments"
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
      `seller-onboarding/step-3/${Date.now()}-${folder}-${safeName}`
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
        `seller-onboarding/step-3/${Date.now()}-${folder}-${safeName}`
      );

      await uploadBytes(fileRef, file);
      urls.push(await getDownloadURL(fileRef));
    }

    return urls;
  };

  const submitStep3 = async () => {
    const error = validateStep3(form, {
      mainProductImage: files.mainProductImage,
      additionalProductImages: files.additionalProductImages,
    });

    if (error) {
      setHxnMessage(`HXN AI Guidance: ${error}`);
      alert(error);
      return;
    }

    try {
      setLoading(true);
      setHxnMessage(
        "HXN AI is uploading your product assets and preparing your AI-powered supplier store."
      );

      const mainProductImageUrl = await uploadSingleFile(
        files.mainProductImage,
        "main-product-image"
      );

      const additionalProductImageUrls = await uploadMultipleFiles(
        files.additionalProductImages,
        "additional-product-images"
      );

      const packagingImageUrls = await uploadMultipleFiles(
        files.packagingImages,
        "packaging-images"
      );

      const factoryImageUrls = await uploadMultipleFiles(
        files.factoryImages,
        "factory-images"
      );

      const warehouseImageUrls = await uploadMultipleFiles(
        files.warehouseImages,
        "warehouse-images"
      );

      const productVideoUrl = await uploadSingleFile(
        files.productVideo,
        "product-video"
      );

      const productCatalogUrl = await uploadSingleFile(
        files.productCatalog,
        "product-catalog"
      );

      const certificationDocumentUrls = await uploadMultipleFiles(
        files.certificationDocuments,
        "certification-documents"
      );

      const docRef = await addDoc(collection(db, "sellerProductStores"), {
        step: 3,
        parentApplicationId: applicationId,
        legalVerificationId,
        country,
        supplierUid: localStorage.getItem("supplierUid") || "",
        supplierEmail: localStorage.getItem("supplierEmail") || "",
        onboardingStatus: "step_3_completed",
        storeStatus: "ai_store_structure_created",
        productReadinessStatus: "marketplace_ready_pending_review",
        ...form,
        files: {
          mainProductImageUrl,
          additionalProductImageUrls,
          packagingImageUrls,
          factoryImageUrls,
          warehouseImageUrls,
          productVideoUrl,
          productCatalogUrl,
          certificationDocumentUrls,
        },
        aiStoreGeneration: {
          productDescriptions: "pending",
          productTitles: "pending",
          seoContent: "pending",
          productTags: "pending",
          storeLayout: "pending",
          catalogStructure: "pending",
          exportReadyPresentation: "pending",
        },
        internalAiAnalysis: {
          aiProductCategorization: "pending",
          aiDuplicateProductDetection: "pending",
          aiRiskComplianceMonitoring: "pending",
          aiSeoOptimization: "pending",
        },
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      window.location.href = `/seller-onboarding/step-4?productStoreId=${
        docRef.id
      }&legalVerificationId=${legalVerificationId}&applicationId=${applicationId}&country=${encodeURIComponent(
        country
      )}`;
    } catch (err) {
      console.error("STEP 3 SUBMISSION ERROR:", err);
      setHxnMessage(
        "HXN AI detected a submission issue. Please check your files and try again."
      );
      alert("Step 3 submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={styles.page}>
      <style>{globalCss}</style>

      <div style={styles.topGlow} />
      <div style={styles.sideGlow} />

      <Hero
        typedText={typedText}
        hxnMessage={hxnMessage}
        onOpenChat={() => setChatOpen(true)}
      />

      <section style={styles.formShell}>
        <ProductProfile
          primaryBusinessActivity={form.primaryBusinessActivity}
          mainProductCategories={form.mainProductCategories}
          productSubcategories={form.productSubcategories}
          onChange={handleChange}
        />

        <ProductInformation
          productName={form.productName}
          brandName={form.brandName}
          productDescription={form.productDescription}
          productSpecifications={form.productSpecifications}
          mainProductImage={files.mainProductImage}
          additionalProductImages={files.additionalProductImages}
          packagingImages={files.packagingImages}
          factoryImages={files.factoryImages}
          warehouseImages={files.warehouseImages}
          productVideo={files.productVideo}
          productCatalog={files.productCatalog}
          onChange={handleChange}
          onSingleFile={handleSingleFile}
          onMultipleFiles={handleMultipleFiles}
        />

        <ExportSales
          moq={form.moq}
          productionCapacity={form.productionCapacity}
          leadTime={form.leadTime}
          packagingType={form.packagingType}
          portOfLoading={form.portOfLoading}
          shippingAvailability={form.shippingAvailability}
          exportMarkets={form.exportMarkets}
          paymentTermsAccepted={form.paymentTermsAccepted}
          incotermsSupported={form.incotermsSupported}
          onChange={handleChange}
        />

        <Certifications
          category={form.mainProductCategories}
          productCertifications={form.productCertifications}
          certificationDocuments={files.certificationDocuments}
          onChange={handleChange}
          onFilesChange={(e) =>
            handleMultipleFiles(e, "certificationDocuments")
          }
        />

        <VisibilitySettings
          marketplaceVisibility={form.marketplaceVisibility}
          rfqParticipation={form.rfqParticipation}
          featuredSupplierEligibility={form.featuredSupplierEligibility}
          onChange={handleChange}
        />

        <div style={styles.actionRow}>
          <button
            type="button"
            onClick={() => setChatOpen(true)}
            style={styles.helpButton}
          >
            Open HXN AI Help
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={submitStep3}
            style={{
              ...styles.submitButton,
              opacity: loading ? 0.65 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading
              ? "Creating AI Product Store..."
              : "Complete Step 3 & Continue"}
          </button>
        </div>
      </section>

      <HXNChat
        open={chatOpen}
        onClose={() => setChatOpen(false)}
        onSelectHelp={(message) => setHxnMessage(message)}
      />
    </main>
  );
}

function LoadingScreen() {
  return (
    <main style={styles.page}>
      <h1 style={{ color: "#fff" }}>Loading Step 3...</h1>
    </main>
  );
}

const globalCss = `
  html, body {
    background: #020617 !important;
  }

  .premium-field::placeholder {
    color: rgba(203,213,225,.78) !important;
  }

  .premium-field:focus {
    outline: none !important;
    border-color: rgba(125,211,252,.95) !important;
    box-shadow: 0 0 0 4px rgba(125,211,252,.18) !important;
  }

  option {
    color: #020617;
    background: #ffffff;
  }

  @media (max-width: 760px) {
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
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    position: "relative",
    overflowX: "hidden",
    background:
      "radial-gradient(circle at top,#172554 0%,#0f172a 38%,#020617 100%)",
    color: "#ffffff",
    padding: "60px 18px 100px",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
  },

  topGlow: {
    position: "absolute",
    top: -180,
    left: "20%",
    width: 520,
    height: 520,
    borderRadius: "50%",
    background: "rgba(56,189,248,.18)",
    filter: "blur(120px)",
    pointerEvents: "none",
  },

  sideGlow: {
    position: "absolute",
    bottom: 200,
    right: -170,
    width: 520,
    height: 520,
    borderRadius: "50%",
    background: "rgba(168,85,247,.16)",
    filter: "blur(120px)",
    pointerEvents: "none",
  },

  formShell: {
    maxWidth: 1120,
    margin: "40px auto 0",
    padding: "42px",
    borderRadius: 42,
    background:
      "linear-gradient(145deg,rgba(15,23,42,.94),rgba(30,41,59,.82))",
    border: "1px solid rgba(148,163,184,.24)",
    boxShadow:
      "0 45px 140px rgba(0,0,0,.62), inset 0 1px 0 rgba(255,255,255,.08)",
    backdropFilter: "blur(24px)",
    position: "relative",
    zIndex: 2,
  },

  actionRow: {
    marginTop: 44,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: 16,
  },

  helpButton: {
    minHeight: 62,
    borderRadius: 22,
    border: "1px solid rgba(125,211,252,.32)",
    background: "rgba(255,255,255,.08)",
    color: "#dbeafe",
    fontWeight: 950,
    fontSize: 16,
    cursor: "pointer",
  },

  submitButton: {
    minHeight: 62,
    borderRadius: 22,
    border: "none",
    background: "linear-gradient(135deg,#7dd3fc,#38bdf8,#2563eb)",
    color: "#020617",
    fontWeight: 950,
    fontSize: 16,
    boxShadow: "0 25px 90px rgba(14,165,233,.35)",
  },
};