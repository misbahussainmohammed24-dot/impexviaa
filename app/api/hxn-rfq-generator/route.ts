import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
Create a professional export quotation.

Product:
${body.product}

Quantity:
${body.quantity}

Price:
${body.price}

Generate:

Quotation
Trade Terms
Lead Time
Payment Terms
Professional Message
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