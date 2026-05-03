"use client";

import { useState, useEffect } from "react";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc, query, where, onSnapshot } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function VerifyPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    type: "",
  });

  const [license, setLicense] = useState<File | null>(null);
  const [tax, setTax] = useState<File | null>(null);

  useEffect(() => {
    if (!form.email) return;

    const q = query(
      collection(db, "verifications"),
      where("email", "==", form.email)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        setStatus(doc.data().status);
      });
    });

    return () => unsubscribe();
  }, [form.email]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!license || !tax) {
      alert("Upload both files");
      return;
    }

    try {
      setLoading(true);

      const licenseRef = ref(storage, `licenses/${Date.now()}-${license.name}`);
      await uploadBytes(licenseRef, license);
      const licenseURL = await getDownloadURL(licenseRef);

      const taxRef = ref(storage, `tax/${Date.now()}-${tax.name}`);
      await uploadBytes(taxRef, tax);
      const taxURL = await getDownloadURL(taxRef);

      await addDoc(collection(db, "verifications"), {
        ...form,
        licenseURL,
        taxURL,
        status: "pending",
        createdAt: new Date(),
      });

      alert("Submitted successfully");

      setLicense(null);
      setTax(null);
      setStatus("pending");
    } catch (err) {
      console.error(err);
      alert("Error submitting");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2 style={styles.title}>Business Verification</h2>

        {status && (
          <div
            style={{
              padding: "10px",
              borderRadius: "8px",
              marginBottom: "12px",
              textAlign: "center" as const,
              color: "#fff",
              fontWeight: "600",
              background:
                status === "approved"
                  ? "#22c55e"
                  : status === "rejected"
                  ? "#ef4444"
                  : "#f59e0b",
            }}
          >
            Status: {status.toUpperCase()}
          </div>
        )}

        <input placeholder="Full Name" style={styles.input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email Address" style={styles.input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Phone Number" style={styles.input} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input placeholder="Company Name" style={styles.input} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
        <input placeholder="Business Type (Exporter, Trader...)" style={styles.input} value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} />

        <label style={styles.label}>Business License</label>
        <label style={styles.uploadBox}>
          📄 {license ? license.name : "Upload Business License"}
          <input type="file" accept="image/*" capture="environment" style={{ display: "none" }} onChange={(e) => setLicense(e.target.files?.[0] || null)} />
        </label>

        <label style={styles.label}>Tax ID Document</label>
        <label style={styles.uploadBox}>
          📷 {tax ? tax.name : "Upload Tax Document"}
          <input type="file" accept="image/*" capture="environment" style={{ display: "none" }} onChange={(e) => setTax(e.target.files?.[0] || null)} />
        </label>

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Submitting..." : "Submit for Verification"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#0a1f44,#1e3a8a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  card: {
    background: "#ffffff",
    padding: "28px",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
  },

  title: {
    textAlign: "center" as const,
    marginBottom: "20px",
    fontSize: "22px",
    color: "#111",
    fontWeight: "700",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    background: "#ffffff",
    color: "#000",
  },

  label: {
    fontSize: "14px",
    color: "#111",
    fontWeight: "500",
  },

  uploadBox: {
    display: "block",
    padding: "16px",
    border: "2px dashed #2563eb",
    borderRadius: "12px",
    textAlign: "center" as const,
    cursor: "pointer",
    marginBottom: "14px",
    background: "#f1f5ff",
    color: "#1d4ed8",
    fontWeight: "600",
  },

  button: {
    width: "100%",
    padding: "15px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    marginTop: "12px",
    cursor: "pointer",
    fontWeight: "700",
  },
};