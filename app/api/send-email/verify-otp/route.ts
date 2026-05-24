declare global {
  // eslint-disable-next-line no-var
  var otpStore: Record<string, string> | undefined;
}

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return Response.json(
        {
          success: false,
          message: "Email and OTP are required",
        },
        { status: 400 }
      );
    }

    if (!globalThis.otpStore) {
      return Response.json(
        {
          success: false,
          message: "OTP expired. Please request again",
        },
        { status: 400 }
      );
    }

    const savedOtp = globalThis.otpStore[email];

    if (!savedOtp) {
      return Response.json(
        {
          success: false,
          message: "OTP not found",
        },
        { status: 400 }
      );
    }

    if (savedOtp !== otp) {
      return Response.json(
        {
          success: false,
          message: "Invalid OTP",
        },
        { status: 400 }
      );
    }

    delete globalThis.otpStore[email];

    return Response.json({
      success: true,
      message: "OTP verified successfully",
    });

  } catch (error) {
    console.error("VERIFY OTP ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}