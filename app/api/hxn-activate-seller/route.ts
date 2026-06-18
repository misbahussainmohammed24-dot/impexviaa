import { NextResponse } from "next/server";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { openai } from "@/lib/openai";

export const runtime = "nodejs";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

async function getData(collectionName: string, id?: string) {
  if (!id) return null;

  const snap = await getDoc(doc(db, collectionName, id));

  if (!snap.exists()) return null;

  return {
    id: snap.id,
    ...snap.data(),
  };
}

function calculateTrustScore(data: any) {
  let score = 40;

  if (data.application) score += 10;
  if (data.legalVerification) score += 15;
  if (data.productStore) score += 15;
  if (data.compliance) score += 15;
  if (data.finalApproval) score += 5;

  return Math.min(score, 100);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      applicationId,
      legalVerificationId,
      productStoreId,
      complianceId,
      finalApprovalId,
    } = body;

    const application: any = await getData("supplierApplications", applicationId);

const legalVerification: any = await getData(
  "legalBusinessVerification",
  legalVerificationId
);

const productStore: any = await getData(
  "supplierProductStores",
  productStoreId
);

const compliance: any = await getData(
  "supplierComplianceVerification",
  complianceId
);

const finalApproval: any = await getData(
  "supplierFinalApprovals",
  finalApprovalId
);

    const fullData = {
      application,
      legalVerification,
      productStore,
      compliance,
      finalApproval,
    };

    const companyName =
      productStore?.companyName ||
      legalVerification?.companyName ||
      application?.companyName ||
      "verified-supplier";

    const country =
      productStore?.country ||
      legalVerification?.country ||
      application?.country ||
      "Global";

    const industry =
      productStore?.industry ||
      compliance?.industryCategory ||
      application?.industry ||
      "Global Trade";

    const products =
      productStore?.products ||
      productStore?.productName ||
      application?.products ||
      "Export Products";

    const slug = slugify(companyName);
    const trustScore = calculateTrustScore(fullData);

    const missingRequirements: string[] = [];

    if (!companyName) missingRequirements.push("Company name is missing.");
    if (!products) missingRequirements.push("Product details are missing.");
    if (!country) missingRequirements.push("Country is missing.");
    if (!compliance) missingRequirements.push("Compliance data is missing.");
    if (!legalVerification)
      missingRequirements.push("Legal verification data is missing.");

    const prompt = `
You are HXN AI, the official IMPEXVIAA seller activation engine.

You are creating a premium AI-generated supplier store and dashboard after seller onboarding Step 1 to Step 5.

Use this verified onboarding data:

${JSON.stringify(fullData, null, 2)}

Create a JSON object only with this structure:

{
  "storeHeroTitle": "",
  "storeHeroSubtitle": "",
  "companyProfile": "",
  "aboutCompany": "",
  "productCategories": [],
  "featuredProducts": [
    {
      "name": "",
      "description": "",
      "specifications": [],
      "moq": "",
      "packaging": "",
      "targetMarkets": []
    }
  ],
  "seoTitle": "",
  "seoDescription": "",
  "seoKeywords": [],
  "rfqMessage": "",
  "trustSummary": "",
  "dashboardWelcome": "",
  "buyerFacingPitch": "",
  "recommendedActions": [],
  "missingRequirements": []
}

Make the tone premium, global trade focused, trustworthy, and suitable for exporters, manufacturers, buyers, and importers.
`;

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are HXN AI. Return only clean JSON. Do not use markdown.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const raw = completion.choices[0]?.message?.content || "{}";

    let aiStore;

    try {
      aiStore = JSON.parse(raw);
    } catch {
      aiStore = {
        storeHeroTitle: `${companyName} Global Supplier Store`,
        storeHeroSubtitle: `Verified ${industry} supplier from ${country}.`,
        companyProfile: `${companyName} is an IMPEXVIAA verified supplier operating in ${industry}.`,
        aboutCompany: `${companyName} is preparing to serve global buyers through IMPEXVIAA.`,
        productCategories: [industry],
        featuredProducts: [
          {
            name: products,
            description: `Premium export-ready product offering from ${companyName}.`,
            specifications: [],
            moq: "Available on request",
            packaging: "Export standard packaging",
            targetMarkets: ["Global"],
          },
        ],
        seoTitle: `${companyName} | IMPEXVIAA Verified Supplier`,
        seoDescription: `${companyName} is a verified supplier on IMPEXVIAA.`,
        seoKeywords: [companyName, industry, country, "export", "supplier"],
        rfqMessage:
          "Send your requirement and our supplier team will respond with quotation details.",
        trustSummary: `HXN Trust Score: ${trustScore}/100`,
        dashboardWelcome: `Welcome to your IMPEXVIAA seller dashboard, ${companyName}.`,
        buyerFacingPitch: `${companyName} is ready to connect with global buyers.`,
        recommendedActions: [],
        missingRequirements,
      };
    }

    const storeDoc = await addDoc(collection(db, "aiGeneratedStores"), {
      slug,
      companyName,
      country,
      industry,
      products,
      trustScore,
      storeStatus: "active",
      visibilityStatus: "marketplace_ready",
      applicationId,
      legalVerificationId,
      productStoreId,
      complianceId,
      finalApprovalId,
      onboardingData: fullData,
      aiGeneratedStore: aiStore,
      missingRequirements: [
        ...missingRequirements,
        ...(aiStore.missingRequirements || []),
      ],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    const dashboardId = finalApprovalId || storeDoc.id;

    await setDoc(doc(db, "supplierDashboards", dashboardId), {
      dashboardStatus: "active",
      companyName,
      country,
      industry,
      products,
      storeId: storeDoc.id,
      storeSlug: slug,
      storeUrl: `/store/${slug}`,
      trustScore,
      hxnAiStatus: "active",
      rfqAssistant: "active",
      buyerDiscovery: "active",
      trustScoreCenter: "active",
      marketplaceAnalytics: "active",
      dashboardWelcome: aiStore.dashboardWelcome,
      recommendedActions: aiStore.recommendedActions || [],
      missingRequirements: [
        ...missingRequirements,
        ...(aiStore.missingRequirements || []),
      ],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    await addDoc(collection(db, "supplierTrustScores"), {
      companyName,
      storeId: storeDoc.id,
      storeSlug: slug,
      trustScore,
      scoreBreakdown: {
        businessIdentityStrength: application ? 80 : 40,
        legalVerificationStrength: legalVerification ? 90 : 35,
        productInformationStrength: productStore ? 85 : 35,
        complianceStrength: compliance ? 85 : 35,
        finalApprovalStrength: finalApproval ? 80 : 40,
      },
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({
      success: true,
      message: "HXN AI seller activation completed.",
      storeId: storeDoc.id,
      storeSlug: slug,
      storeUrl: `/store/${slug}`,
      dashboardId,
      trustScore,
      missingRequirements: [
        ...missingRequirements,
        ...(aiStore.missingRequirements || []),
      ],
      aiStore,
    });
  } catch (error: any) {
    console.error("HXN SELLER ACTIVATION ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "HXN AI seller activation failed.",
        error: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}