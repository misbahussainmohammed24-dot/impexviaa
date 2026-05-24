import nodemailer from "nodemailer";

declare global {
  // eslint-disable-next-line no-var
  var otpStore: Record<string, string> | undefined;
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json(
        { success: false, message: "Email required" },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      return Response.json(
        { success: false, message: "Email server not configured" },
        { status: 500 }
      );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: `IMPEXVIAA Verification <${emailUser}>`,
      to: email,
      subject: "Your IMPEXVIAA Verification Code",
      html: `
        <div style="font-family:Arial,sans-serif;background:#f4f6f8;padding:28px">
          <div style="max-width:520px;margin:auto;background:#ffffff;border-radius:16px;padding:28px;border:1px solid #e5e7eb;text-align:center">
            <h2 style="color:#111827;margin:0 0 12px">IMPEXVIAA</h2>
            <p style="font-size:15px;color:#374151;margin-bottom:22px">
              Use the verification code below to continue.
            </p>
            <div style="font-size:34px;letter-spacing:8px;font-weight:800;color:#111827;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:18px">
              ${otp}
            </div>
            <p style="margin-top:22px;font-size:12px;color:#6b7280">
              This code is for account verification. Do not share it with anyone.
            </p>
            <p style="font-size:12px;color:#9ca3af">
              © 2026 IMPEXVIAA. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    globalThis.otpStore = globalThis.otpStore || {};
    globalThis.otpStore[email] = otp;

    return Response.json({ success: true });
  } catch (error) {
    console.error("SEND OTP ERROR:", error);

    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}