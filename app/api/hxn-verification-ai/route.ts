import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const categoryDocs: Record<string, string[]> = {
  Agriculture: [
    "Phytosanitary Certificate",
    "Laboratory Test Report",
    "Food Safety Certificate if edible goods",
    "Business Registration Proof",
    "Fumigation Certificate if required",
    "Organic Certification if organic claim is used",
  ],
  Pharmaceuticals: [
    "GMP Certificate",
    "Drug Manufacturing License",
    "Certificate of Analysis",
    "Batch Testing Report",
    "Regulatory Authority Approval",
    "Product Registration Certificate if required",
  ],
  Electronics: [
    "Product Safety Test Report",
    "Electrical Safety Certificate",
    "CE / FCC / RoHS depending on destination",
    "EMC Test Report if required",
    "ISO / BIS / CCC if applicable",
  ],
  "Auto Parts": [
    "Material Test Report",
    "Safety Compliance Certificate",
    "ISO / IATF Certification if applicable",
    "E-Mark Certificate if required",
    "Emission Compliance Report if applicable",
  ],
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const category = body.category || "";
    const exportMarket = body.exportMarket || "";
    const question = body.question || "";

    const prompt = `
You are HXN AI, Impexviaa's supplier verification assistant.

Product Category: ${category}
Export Destination / Target Market: ${exportMarket}
Seller Question: ${question}

Category required documents:
${JSON.stringify(categoryDocs[category] || [], null, 2)}

Give a clear supplier guidance response:
1. Required documents
2. Destination country trade rules
3. Missing document warnings
4. How seller can obtain those documents
5. Short next action checklist

Do not give legal guarantees. Say admin review is required.
`;

    const result = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are HXN AI for Impexviaa. Give concise, practical trade verification guidance.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.4,
    });

    return NextResponse.json({
      success: true,
      answer: result.choices[0]?.message?.content || "HXN AI could not generate guidance.",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        answer: "HXN AI failed to respond. Please try again.",
        error: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}