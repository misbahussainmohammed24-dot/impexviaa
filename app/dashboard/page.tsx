"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const [userEmail, setUserEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
        return;
      }

      setUserEmail(user.email || "");

      // 🔥 REAL-TIME STATUS
      const q = query(
        collection(db, "verifications"),
        where("email", "==", user.email)
      );

      const unsubSnap = onSnapshot(q, (snapshot) => {
        snapshot.forEach((doc) => {
          setStatus(doc.data().status);
        });
        setLoading(false);
      });

      return () => unsubSnap();
    });

    return () => unsubAuth();
  }, []);

  // 🔄 LOADING STATE
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  // ❌ NOT VERIFIED
  if (status !== "approved") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">

        <h1 className="text-2xl font-bold mb-4">
          Access Restricted 🚫
        </h1>

        {status === "pending" && (
          <p className="mb-4 text-yellow-400">
            Your verification is still pending
          </p>
        )}

        {status === "rejected" && (
          <p className="mb-4 text-red-400">
            Your verification was rejected
          </p>
        )}

        {!status && (
          <p className="mb-4">
            You have not submitted verification
          </p>
        )}

        <button
          onClick={() => router.push("/verify")}
          className="bg-blue-600 px-5 py-2 rounded-lg"
        >
          Go to Verification
        </button>

      </div>
    );
  }

  // ✅ APPROVED (FULL ACCESS)
  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-3xl font-bold mb-4">
        Welcome to Dashboard 🚀
      </h1>

      <p className="mb-6">Logged in as: {userEmail}</p>

      {/* 🔥 REAL CONTENT STARTS HERE */}
      <div className="bg-white/10 p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">
          Your Business Panel
        </h2>

        <p>
          You now have full access to platform features.
        </p>
      </div>

    </div>
  );
}