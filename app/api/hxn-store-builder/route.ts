import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      companyName,
      industry,
      country,
      products,
      description,
    } = body;

    const prompt = `
You are HXN AI.

Generate:

1. Store Name
2. Hero Title
3. Hero Description
4. About Company
5. Product Categories
6. SEO Keywords
7. RFQ Section
8. Export Markets

Company:
${companyName}

Industry:
${industry}

Country:
${country}

Products:
${products}

Description:
${description}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return NextResponse.json({
      success: true,
      result: completion.choices[0].message.content,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error,
    });
  }
}