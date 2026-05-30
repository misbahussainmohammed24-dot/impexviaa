import nodemailer from "nodemailer";
import { db } from "@/lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json({ success: false, message: "Email required" }, { status: 400 });
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      return Response.json({ success: false, message: "Email server not configured" }, { status: 500 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await setDoc(doc(db, "otps", email), {
      otp,
      email,
      createdAt: serverTimestamp(),
    });

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
      html: `<h2>Your OTP is: ${otp}</h2>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("SEND OTP ERROR:", error);
    return Response.json({ success: false, message: "Server error" }, { status: 500 });
  }
}