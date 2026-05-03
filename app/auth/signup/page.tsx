"use client";

import { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"buyer" | "seller">("buyer");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      // 🔥 CREATE USER
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // 🔥 SAVE USER ROLE IN FIRESTORE (IMPORTANT)
      await setDoc(doc(db, "users", userCred.user.uid), {
        email,
        role,
        createdAt: new Date(),
      });

      alert("Signup successful ✅");

      // 🔥 REDIRECT BASED ON ROLE
      if (role === "seller") {
        router.push("/verify");
      } else {
        router.push("/dashboard");
      }

    } catch (err: any) {
      console.error(err);
      alert(err.message || "Signup failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-3 rounded-lg bg-gray-800 outline-none"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-3 rounded-lg bg-gray-800 outline-none"
        />

        {/* Role Selection */}
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setRole("buyer")}
            className={`flex-1 p-2 rounded-lg font-semibold ${
              role === "buyer"
                ? "bg-white text-black"
                : "bg-gray-700 text-white"
            }`}
          >
            Buyer
          </button>

          <button
            onClick={() => setRole("seller")}
            className={`flex-1 p-2 rounded-lg font-semibold ${
              role === "seller"
                ? "bg-white text-black"
                : "bg-gray-700 text-white"
            }`}
          >
            Seller
          </button>
        </div>

        {/* Button */}
        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full bg-white text-black p-3 rounded-lg font-semibold"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

      </div>
    </div>
  );
}