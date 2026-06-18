"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { CSSProperties } from "react";

type UserType = "buyer" | "seller" | "admin";

export default function LoginPage() {
  const router = useRouter();
  const [userType, setUserType] = useState<UserType>("buyer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (!email || !password) {
      alert("Please enter your email and password");
      return;
    }

    if (userType === "buyer") router.push("/dashboard/buyer");
    if (userType === "seller") router.push("/dashboard/seller");
    if (userType === "admin") router.push("/dashboard/admin");
  };

  return (
    <main style={styles.page}>
      <style>{css}</style>

      <section style={styles.card}>
        <p style={styles.badge}>IMPEXVIAA LOGIN</p>

        <h1 style={styles.title}>Welcome back</h1>

        <p style={styles.text}>
          Log in to continue to your existing IMPEXVIAA account.
        </p>

        <div style={styles.tabs}>
          <button
            style={{ ...styles.tab, ...(userType === "buyer" ? styles.active : {}) }}
            onClick={() => setUserType("buyer")}
          >
            Buyer
          </button>

          <button
            style={{ ...styles.tab, ...(userType === "seller" ? styles.active : {}) }}
            onClick={() => setUserType("seller")}
          >
            Seller
          </button>

          <button
            style={{ ...styles.tab, ...(userType === "admin" ? styles.active : {}) }}
            onClick={() => setUserType("admin")}
          >
            Admin
          </button>
        </div>

        <input
          style={styles.input}
          type="email"
          placeholder="Business email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.loginBtn} onClick={login}>
          Log in to {userType} dashboard
        </button>

        <button style={styles.backBtn} onClick={() => router.push("/")}>
          Back to homepage
        </button>

        <p style={styles.note}>
          Account creation happens after subscription or enrollment. Existing users
          can log in here and continue to their registered dashboard.
        </p>
      </section>
    </main>
  );
}

const css = `
html, body {
  background: #000 !important;
}

input::placeholder {
  color: rgba(255,255,255,.45);
}

button {
  transition: .25s ease;
}

button:hover {
  transform: translateY(-2px);
}

@media(max-width: 700px) {
  main {
    padding: 34px 16px !important;
  }

  h1 {
    font-size: 46px !important;
  }
}
`;

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top,#111827 0%,#020617 42%,#000 100%)",
    display: "grid",
    placeItems: "center",
    padding: 24,
    color: "#fff",
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: 520,
    padding: "42px 28px",
    borderRadius: 36,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.14)",
    boxShadow: "0 40px 140px rgba(0,0,0,.55)",
    backdropFilter: "blur(22px)",
  },

  badge: {
    color: "#d6b56d",
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: 4,
    marginBottom: 18,
  },

  title: {
    fontSize: 58,
    lineHeight: 1,
    margin: 0,
    fontWeight: 950,
    letterSpacing: "-3px",
  },

  text: {
    color: "#cbd5e1",
    fontSize: 18,
    lineHeight: 1.6,
    margin: "18px 0 26px",
  },

  tabs: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 10,
    marginBottom: 20,
  },

  tab: {
    height: 48,
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.14)",
    background: "rgba(255,255,255,.07)",
    color: "#fff",
    fontWeight: 900,
    cursor: "pointer",
  },

  active: {
    background: "#fff",
    color: "#000",
  },

  input: {
    width: "100%",
    height: 58,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,.14)",
    background: "rgba(255,255,255,.08)",
    color: "#fff",
    padding: "0 18px",
    fontSize: 16,
    marginBottom: 14,
    outline: "none",
    boxSizing: "border-box",
  },

  loginBtn: {
    width: "100%",
    height: 60,
    borderRadius: 999,
    border: "none",
    background: "linear-gradient(135deg,#d6b56d,#ffffff)",
    color: "#000",
    fontSize: 17,
    fontWeight: 950,
    cursor: "pointer",
    marginTop: 8,
  },

  backBtn: {
    width: "100%",
    height: 54,
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.14)",
    background: "transparent",
    color: "#fff",
    fontSize: 16,
    fontWeight: 850,
    cursor: "pointer",
    marginTop: 12,
  },

  note: {
    color: "#94a3b8",
    fontSize: 14,
    lineHeight: 1.6,
    marginTop: 18,
  },
};