import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, status } = await req.json();

    const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "misbahussainmohammed24@gmail.com",
    pass: "fivz qdvd wmkp zfdq",
  },
});

    const subject =
      status === "approved"
        ? "Your Verification is Approved ✅"
        : "Your Verification is Rejected ❌";

    const text =
      status === "approved"
        ? "Congratulations! Your business has been approved."
        : "Sorry, your verification was rejected.";

    await transporter.sendMail({
  from: "IMPEXVIAA <misbahussainmohammed24@gmail.com>",
  to: email,
  subject,
  html: `
    <div style="font-family:Arial;padding:20px;background:#f4f6f8">
      <div style="max-width:500px;margin:auto;background:#fff;border-radius:10px;padding:20px">
        
        <h2 style="text-align:center;color:#1e3a8a">IMPEXVIAA</h2>

        <h3 style="color:${status === "approved" ? "#22c55e" : "#ef4444"}">
          ${status === "approved" ? "Verification Approved ✅" : "Verification Rejected ❌"}
        </h3>

        <p style="font-size:14px;color:#333">
          ${
            status === "approved"
              ? "Congratulations! Your business verification has been approved. You can now access the platform."
              : "Your verification was rejected. Please upload valid documents and try again."
          }
        </p>

        <div style="margin-top:20px;text-align:center">
          <a href="http://localhost:3000/dashboard"
            style="background:#2563eb;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none">
            Go to Dashboard
          </a>
        </div>

        <p style="margin-top:20px;font-size:12px;color:#888;text-align:center">
          © 2026 IMPEXVIAA
        </p>

      </div>
    </div>
  `,
});

    return Response.json({ success: true });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    return Response.json({ success: false });
  }
}