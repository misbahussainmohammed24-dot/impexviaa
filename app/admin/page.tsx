"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function AdminPage() {
  const [data, setData] = useState<any[]>([]);

  // 🔥 FETCH DATA
  const fetchData = async () => {
    const snap = await getDocs(collection(db, "verifications"));

    const list = snap.docs.map((docItem) => ({
      id: docItem.id,
      ...docItem.data(),
    }));

    setData(list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔥 UPDATE + EMAIL
  const updateStatus = async (id: string, newStatus: string, email: string) => {
    try {
      const refDoc = doc(db, "verifications", id);

      await updateDoc(refDoc, {
        status: newStatus,
      });

      // 🔥 CALL EMAIL API
      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          status: newStatus,
        }),
      });

      // 🔥 Update UI instantly
      setData((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: newStatus } : item
        )
      );

      alert("Status updated + Email sent");

    } catch (err) {
      console.error(err);
      alert("Error");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.sidebar}>
        <h2>IMPEXVIA</h2>
        <p style={styles.active}>✔ Verifications</p>
        <p style={styles.menu}>⚙ Settings</p>
      </div>

      <div style={styles.main}>
        <h2>Verification Requests</h2>

        <div style={styles.grid}>
          {data.map((item) => (
            <div key={item.id} style={styles.card}>
              {/* STATUS */}
              <span
                style={{
                  ...styles.status,
                  background:
                    item.status === "approved"
                      ? "#22c55e"
                      : item.status === "rejected"
                      ? "#ef4444"
                      : "#f59e0b",
                }}
              >
                {item.status || "pending"}
              </span>

              <h3>{item.name}</h3>
              <p>{item.email}</p>
              <p>{item.company}</p>
              <p>{item.type}</p>

              <div style={{ marginTop: "10px" }}>
                <a href={item.licenseURL} target="_blank">
                  📄 License
                </a>{" "}
                |{" "}
                <a href={item.taxURL} target="_blank">
                  📷 Tax
                </a>
              </div>

              <div style={styles.actions}>
                <button
                  style={styles.approve}
                  onClick={() =>
                    updateStatus(item.id, "approved", item.email)
                  }
                >
                  Approve
                </button>

                <button
                  style={styles.reject}
                  onClick={() =>
                    updateStatus(item.id, "rejected", item.email)
                  }
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles: any = {
  page: {
    display: "flex",
    minHeight: "100vh",
    background: "#0f172a",
    color: "#fff",
  },

  sidebar: {
    width: "220px",
    background: "#020617",
    padding: "20px",
  },

  active: {
    marginTop: "20px",
    padding: "10px",
    background: "#1e293b",
    borderRadius: "6px",
  },

  menu: {
    marginTop: "10px",
    padding: "10px",
    color: "#94a3b8",
  },

  main: {
    flex: 1,
    padding: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },

  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    position: "relative",
  },

  status: {
    position: "absolute",
    top: "10px",
    right: "10px",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    color: "#fff",
  },

  actions: {
    marginTop: "15px",
    display: "flex",
    gap: "10px",
  },

  approve: {
    flex: 1,
    background: "#22c55e",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
  },

  reject: {
    flex: 1,
    background: "#ef4444",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
  },
};