import nodemailer from "nodemailer";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.impexviaa.com";

export async function POST(req: Request) {
  try {
    const { email, status } = await req.json();

    if (!email || !status) {
      return Response.json(
        { success: false, message: "Email and status are required" },
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

    const isApproved = status === "approved";

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
      subject: isApproved
        ? "Your IMPEXVIAA Verification is Approved"
        : "Your IMPEXVIAA Verification Update",
      html: `
        <div style="font-family:Arial,sans-serif;background:#f4f6f8;padding:28px">
          <div style="max-width:560px;margin:auto;background:#ffffff;border-radius:16px;padding:28px;border:1px solid #e5e7eb">

            <h2 style="text-align:center;color:#111827;margin:0 0 20px">
              IMPEXVIAA
            </h2>

            <h3 style="color:${isApproved ? "#16a34a" : "#dc2626"};margin-bottom:16px">
              ${isApproved ? "Verification Approved ✅" : "Verification Rejected ❌"}
            </h3>

            <p style="font-size:15px;line-height:1.7;color:#374151">
              ${
                isApproved
                  ? "Congratulations. Your business verification has been approved. You can now continue using the IMPEXVIAA platform."
                  : "Your verification was rejected. Please upload valid documents and submit your verification again."
              }
            </p>

            <div style="margin-top:28px;text-align:center">
              <a href="${SITE_URL}/dashboard"
                style="background:#111827;color:#ffffff;padding:12px 22px;border-radius:10px;text-decoration:none;font-weight:700;display:inline-block">
                Go to Dashboard
              </a>
            </div>

            <p style="margin-top:28px;font-size:12px;color:#6b7280;text-align:center">
              This is an official message from IMPEXVIAA Global Trade.
            </p>

            <p style="font-size:12px;color:#9ca3af;text-align:center">
              ©️ 2026 IMPEXVIAA. All rights reserved.
            </p>

          </div>
        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (err) {
    console.error("EMAIL ERROR:", err);

    return Response.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 }
    );
  }
}