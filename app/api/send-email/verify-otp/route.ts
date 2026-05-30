import { db } from "@/lib/firebase";
import { doc, getDoc, deleteDoc } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return Response.json({ success: false, message: "Email and OTP are required" }, { status: 400 });
    }

    const otpRef = doc(db, "otps", email);
    const otpSnap = await getDoc(otpRef);

    if (!otpSnap.exists()) {
      return Response.json({ success: false, message: "OTP expired. Please request again" }, { status: 400 });
    }

    const data = otpSnap.data();

    if (data.otp !== otp) {
      return Response.json({ success: false, message: "Invalid OTP" }, { status: 400 });
    }

    await deleteDoc(otpRef);

    return Response.json({
      success: true,
      message: "OTP verified successfully",
    });
  } catch (error) {
    console.error("VERIFY OTP ERROR:", error);
    return Response.json({ success: false, message: "Server error" }, { status: 500 });
  }
}