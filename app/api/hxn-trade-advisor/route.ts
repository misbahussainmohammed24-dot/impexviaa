import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
You are HXN Trade Advisor.

Question:

${body.question}

Provide:

Export Guidance
Required Documents
Certificates
Target Markets
Risks
Recommendations
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