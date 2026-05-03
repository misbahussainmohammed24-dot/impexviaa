export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return Response.json({ success: false });
    }

    const storedOtp = globalThis.otpStore?.[email];

    if (!storedOtp) {
      return Response.json({
        success: false,
        message: "OTP expired",
      });
    }

    if (storedOtp !== otp) {
      return Response.json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // ✅ success → remove OTP (one-time use)
    delete globalThis.otpStore[email];

    return Response.json({ success: true });

  } catch (err) {
    console.error("VERIFY ERROR:", err);

    return Response.json({ success: false });
  }
}