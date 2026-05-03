import nodemailer from "nodemailer";

// ✅ FIX: declare global store for TypeScript
declare global {
  // eslint-disable-next-line no-var
  var otpStore: Record<string, string> | undefined;
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json({ success: false, message: "Email required" });
    }

    // generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    console.log("OTP for", email, "=", otp);

    // transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "misbahussainmohammed24@gmail.com",
        pass: "fivz qdvd wmkp zfdq",
      },
    });

    await transporter.sendMail({
      from: "IMPEXVIAA <misbahussainmohammed24@gmail.com>",
      to: email,
      subject: "Your OTP Code",
      html: `<h2>Your OTP is: ${otp}</h2>`,
    });

    // ✅ SAFE GLOBAL STORE (FIXED)
    globalThis.otpStore = globalThis.otpStore || {};
    globalThis.otpStore[email] = otp;

    return Response.json({ success: true });

  } catch (error) {
    console.error("SEND OTP ERROR:", error);

    return Response.json({
      success: false,
      message: "Server error",
    });
  }
}