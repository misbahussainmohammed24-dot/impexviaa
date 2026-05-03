// ✅ FIX: declare global store
declare global {
  // eslint-disable-next-line no-var
  var otpStore: Record<string, string> | undefined;
}

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return Response.json({
        success: false,
        message: "Email and OTP are required",
      });
    }

    if (!globalThis.otpStore) {
      return Response.json({
        success: false,
        message: "OTP expired. Please request again",
      });
    }

    const savedOtp = globalThis.otpStore[email];

    if (!savedOtp || savedOtp !== otp) {
      return Response.json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // delete after success
    delete globalThis.otpStore[email];

    return Response.json({ success: true });

  } catch (error) {
    console.error("VERIFY OTP ERROR:", error);

    return Response.json({
      success: false,
      message: "Server error",
    });
  }
}