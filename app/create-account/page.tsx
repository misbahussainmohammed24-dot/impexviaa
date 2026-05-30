"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

type AuthMode = "signup" | "login" | "forgot";

export default function CreateAccountPage() {
  const [mode, setMode] = useState<AuthMode>("signup");
  const [loading, setLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullText =
    "Hey, I am HXN. I can help you create an account, log in, or recover access.";

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const savedEmail =
      localStorage.getItem("verifiedEmail") ||
      localStorage.getItem("businessEmail") ||
      localStorage.getItem("supplierEmail") ||
      "";

    if (savedEmail) {
      setForm((prev) => ({ ...prev, email: savedEmail }));
    }
  }, []);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index += 1;

      if (index > fullText.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createAccount = async () => {
    try {
      const paid = localStorage.getItem("paymentVerified");

      if (paid !== "true") {
        alert("Payment verification is required before creating a supplier account.");
        window.location.href = "/subscription/seller";
        return;
      }

      if (!form.email) {
        alert("Please enter your business email.");
        return;
      }

      if (form.password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
      }

      if (form.password !== form.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCredential.user;

      await setDoc(
        doc(db, "supplierAccounts", user.uid),
        {
          uid: user.uid,
          email: form.email,
          role: "seller",
          accountType: "premium_supplier",
          paymentStatus: "paid",
          onboardingStatus: "account_created",
          currentStep: "step_1_business_information",
          paypalOrderId: localStorage.getItem("paypalOrderId") || "",
          paymentProvider: localStorage.getItem("paymentProvider") || "paypal",
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );

      localStorage.setItem("supplierUid", user.uid);
      localStorage.setItem("supplierEmail", form.email);

      window.location.href = "/seller-onboarding";
    } catch (error: any) {
      console.error("CREATE ACCOUNT ERROR:", error);

      if (error.code === "auth/email-already-in-use") {
        alert("This email is already registered. Please log in instead.");
        setMode("login");
        return;
      }

      alert("Account creation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const loginAccount = async () => {
    try {
      if (!form.email || !form.password) {
        alert("Please enter your email and password.");
        return;
      }

      setLoading(true);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      localStorage.setItem("supplierUid", userCredential.user.uid);
      localStorage.setItem("supplierEmail", form.email);

      window.location.href = "/seller-onboarding";
    } catch (error) {
      console.error("LOGIN ERROR:", error);
      alert("Login failed. Please check your email and password.");
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async () => {
    try {
      if (!form.email) {
        alert("Please enter your business email.");
        return;
      }

      setLoading(true);
      await sendPasswordResetEmail(auth, form.email);
      alert("Password reset email sent. Please check your inbox.");
      setMode("login");
    } catch (error) {
      console.error("RESET PASSWORD ERROR:", error);
      alert("Unable to send password reset email.");
    } finally {
      setLoading(false);
    }
  };

  const handleMainAction = () => {
    if (mode === "signup") createAccount();
    if (mode === "login") loginAccount();
    if (mode === "forgot") resetPassword();
  };

  const buttonText =
    mode === "signup"
      ? loading
        ? "Creating Secure Account..."
        : "Create Account & Continue"
      : mode === "login"
      ? loading
        ? "Logging In..."
        : "Log In & Continue"
      : loading
      ? "Sending Reset Link..."
      : "Send Password Reset Link";

  return (
    <main style={styles.page}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(35px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatBot {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes pulseGlow {
          0%,100% { opacity:.55; transform:scale(1); }
          50% { opacity:1; transform:scale(1.08); }
        }

        @keyframes chatLift {
          from { opacity:0; transform: translateY(130px) scale(.94); }
          to { opacity:1; transform: translateY(0) scale(1); }
        }

        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .premium-field:focus {
          outline: none;
          border-color: rgba(125,211,252,.9);
          box-shadow: 0 0 0 4px rgba(125,211,252,.16);
        }

        .premium-btn:hover,
        .support-btn:hover,
        .mode-btn:hover {
          transform: translateY(-3px);
        }

        @media (max-width: 760px) {
          .card {
            padding: 24px !important;
            border-radius: 30px !important;
          }

          .title {
            font-size: 42px !important;
            letter-spacing: -2px !important;
          }

          .tabs {
            grid-template-columns: 1fr !important;
          }

          .ai-card {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            padding: 22px !important;
          }

          .robot-wrap {
            margin: 0 auto !important;
          }
        }
      `}</style>

      <div style={styles.blueGlow} />
      <div style={styles.purpleGlow} />
      <div style={styles.cyanGlow} />

      <section className="card" style={styles.card}>
        <div style={styles.badge}>
          {mode === "signup"
            ? "PAYMENT VERIFIED"
            : mode === "login"
            ? "SUPPLIER LOGIN"
            : "ACCOUNT RECOVERY"}
        </div>

        <h1 className="title" style={styles.title}>
          {mode === "signup" && (
            <>
              Create Your
              <br />
              Supplier Account
            </>
          )}

          {mode === "login" && (
            <>
              Welcome Back,
              <br />
              Supplier
            </>
          )}

          {mode === "forgot" && (
            <>
              Reset Your
              <br />
              Password
            </>
          )}
        </h1>

        <p style={styles.subtitle}>
          {mode === "signup"
            ? "Create your secure login to continue your legal verification, business profile setup, and HXN AI store generation."
            : mode === "login"
            ? "Log in to continue your supplier onboarding, verification, product listing, and HXN AI store setup."
            : "Enter your registered business email. We will send a secure password reset link."}
        </p>

        <div className="tabs" style={styles.tabs}>
          <button
            className="mode-btn"
            style={mode === "signup" ? styles.activeTab : styles.tab}
            onClick={() => setMode("signup")}
            type="button"
          >
            Create Account
          </button>

          <button
            className="mode-btn"
            style={mode === "login" ? styles.activeTab : styles.tab}
            onClick={() => setMode("login")}
            type="button"
          >
            Log In
          </button>

          <button
            className="mode-btn"
            style={mode === "forgot" ? styles.activeTab : styles.tab}
            onClick={() => setMode("forgot")}
            type="button"
          >
            Forgot Password
          </button>
        </div>

        <div className="ai-card" style={styles.aiCard}>
          <div className="robot-wrap" style={styles.robotWrap}>
            <div style={styles.robotHead}>
              <div style={styles.robotScreen}>
                <div style={styles.eyeLeft} />
                <div style={styles.eyeRight} />
                <div style={styles.smile} />
              </div>
            </div>

            <div style={styles.tablet}>
              <div style={styles.tabletLineOne} />
              <div style={styles.tabletLineTwo} />
              <div style={styles.tabletLineThree} />
            </div>

            <div style={styles.robotArm} />
            <div style={styles.robotAura} />
          </div>

          <div>
            <h2 style={styles.aiTitle}>Hey, HXN</h2>
            <div style={styles.aiLine} />
            <p style={styles.aiTyping}>
              {typedText}
              <span style={styles.cursor}>|</span>
            </p>
          </div>

          <button
            className="support-btn"
            type="button"
            style={styles.supportButton}
            onClick={() => setChatOpen(true)}
          >
            Open Support Chat
          </button>
        </div>

        <div style={styles.formBox}>
          <input
            className="premium-field"
            style={styles.input}
            name="email"
            type="email"
            placeholder="Business Email"
            value={form.email}
            onChange={handleChange}
          />

          {mode !== "forgot" && (
            <input
              className="premium-field"
              style={styles.input}
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          )}

          {mode === "signup" && (
            <input
              className="premium-field"
              style={styles.input}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          )}

          <button
            className="premium-btn"
            style={styles.button}
            disabled={loading}
            onClick={handleMainAction}
            type="button"
          >
            {buttonText}
          </button>
        </div>
      </section>

      {chatOpen && (
        <div style={styles.overlay}>
          <div style={styles.chatCard}>
            <button
              style={styles.closeButton}
              onClick={() => setChatOpen(false)}
              type="button"
            >
              ×
            </button>

            <div style={styles.chatHandle} />

            <div style={styles.chatHeader}>
              <div style={styles.chatRobot}>
                <div style={styles.chatEye} />
                <div style={styles.chatEye} />
              </div>

              <div>
                <h2 style={styles.chatTitle}>HXN AI Support</h2>
                <p style={styles.chatSub}>Account and onboarding assistant</p>
              </div>
            </div>

            <div style={styles.messageBubble}>
              👋 I am HXN. I can help with account creation, login, password
              recovery, payment verification, and supplier onboarding.
            </div>

            <div style={styles.quickGrid}>
              <button style={styles.quickBtn} type="button">
                I paid but cannot create account
              </button>
              <button style={styles.quickBtn} type="button">
                I cannot log in
              </button>
              <button style={styles.quickBtn} type="button">
                Forgot password
              </button>
              <button style={styles.quickBtn} type="button">
                Which email should I use?
              </button>
            </div>

            <textarea
              style={styles.chatInput}
              placeholder="Type your question here..."
            />

            <button style={styles.chatSend} type="button">
              Send Message
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    background:
      "radial-gradient(circle at top,#16213f 0%,#07111f 45%,#020617 100%)",
    color: "#fff",
    padding: "72px 18px 90px",
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
  },

  blueGlow: {
    position: "absolute",
    top: -130,
    right: -120,
    width: 420,
    height: 420,
    borderRadius: "50%",
    background: "rgba(56,189,248,.18)",
    filter: "blur(110px)",
    animation: "pulseGlow 8s ease-in-out infinite",
  },

  purpleGlow: {
    position: "absolute",
    bottom: 80,
    left: -130,
    width: 420,
    height: 420,
    borderRadius: "50%",
    background: "rgba(168,85,247,.18)",
    filter: "blur(115px)",
    animation: "pulseGlow 9s ease-in-out infinite",
  },

  cyanGlow: {
    position: "absolute",
    top: 350,
    left: "42%",
    width: 320,
    height: 320,
    borderRadius: "50%",
    background: "rgba(34,211,238,.12)",
    filter: "blur(100px)",
  },

  card: {
    maxWidth: 960,
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
    borderRadius: 42,
    padding: "42px",
    background:
      "linear-gradient(145deg,rgba(15,23,42,.90),rgba(30,41,59,.72))",
    border: "1px solid rgba(148,163,184,.22)",
    boxShadow:
      "0 45px 140px rgba(0,0,0,.62), inset 0 1px 0 rgba(255,255,255,.08)",
    backdropFilter: "blur(26px)",
    animation: "fadeUp .8s ease both",
  },

  badge: {
    display: "inline-flex",
    padding: "10px 22px",
    borderRadius: 999,
    background: "rgba(15,23,42,.8)",
    border: "1px solid rgba(125,211,252,.38)",
    color: "#7dd3fc",
    letterSpacing: 4,
    fontSize: 12,
    fontWeight: 950,
    marginBottom: 28,
    boxShadow: "0 0 34px rgba(56,189,248,.18)",
  },

  title: {
    fontSize: "clamp(44px,8vw,82px)",
    lineHeight: 0.94,
    margin: 0,
    fontWeight: 950,
    letterSpacing: "-4px",
  },

  subtitle: {
    margin: "28px 0 0",
    color: "#dbeafe",
    fontSize: 18,
    lineHeight: 1.85,
    maxWidth: 820,
  },

  tabs: {
    marginTop: 28,
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 10,
    padding: 8,
    borderRadius: 22,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.08)",
  },

  tab: {
    border: "none",
    borderRadius: 16,
    padding: "14px 12px",
    background: "transparent",
    color: "#cbd5e1",
    fontWeight: 900,
    cursor: "pointer",
    transition: ".3s ease",
  },

  activeTab: {
    border: "none",
    borderRadius: 16,
    padding: "14px 12px",
    background: "linear-gradient(135deg,#e0f2fe,#ffffff)",
    color: "#020617",
    fontWeight: 950,
    cursor: "pointer",
    boxShadow: "0 12px 35px rgba(14,165,233,.25)",
    transition: ".3s ease",
  },

  aiCard: {
    marginTop: 30,
    padding: 28,
    borderRadius: 34,
    background:
      "linear-gradient(135deg,#ffffff 0%,#f8fbff 45%,#eef7ff 100%)",
    border: "1px solid rgba(255,255,255,.9)",
    boxShadow:
      "0 28px 80px rgba(15,23,42,.34), 0 0 70px rgba(34,211,238,.20), 0 0 90px rgba(168,85,247,.16)",
    color: "#020617",
    display: "grid",
    gridTemplateColumns: "230px 1fr",
    gap: 26,
    alignItems: "center",
  },

  robotWrap: {
    height: 210,
    width: 230,
    position: "relative",
    animation: "floatBot 4s ease-in-out infinite",
  },

  robotHead: {
    width: 142,
    height: 112,
    borderRadius: 42,
    position: "absolute",
    top: 16,
    left: 50,
    background: "linear-gradient(135deg,#ffffff,#dff6ff)",
    border: "7px solid #cfe8ff",
    boxShadow: "0 22px 55px rgba(14,165,233,.28)",
    display: "grid",
    placeItems: "center",
  },

  robotScreen: {
    width: 88,
    height: 62,
    borderRadius: 24,
    background: "linear-gradient(135deg,#061733,#0b1f4a)",
    position: "relative",
    boxShadow: "inset 0 0 18px rgba(34,211,238,.3)",
  },

  eyeLeft: {
    width: 14,
    height: 23,
    borderRadius: 99,
    background: "#67e8f9",
    position: "absolute",
    top: 17,
    left: 24,
    boxShadow: "0 0 18px #22d3ee",
  },

  eyeRight: {
    width: 14,
    height: 23,
    borderRadius: 99,
    background: "#67e8f9",
    position: "absolute",
    top: 17,
    right: 24,
    boxShadow: "0 0 18px #22d3ee",
  },

  smile: {
    width: 28,
    height: 12,
    borderBottom: "4px solid #67e8f9",
    borderRadius: "0 0 20px 20px",
    position: "absolute",
    bottom: 12,
    left: 30,
  },

  tablet: {
    width: 112,
    height: 72,
    borderRadius: 22,
    background: "linear-gradient(135deg,#e0f7ff,#dbeafe)",
    border: "4px solid #bae6fd",
    padding: 16,
    boxShadow: "0 18px 40px rgba(14,165,233,.22)",
    position: "absolute",
    left: 0,
    bottom: 24,
  },

  tabletLineOne: {
    width: 58,
    height: 8,
    borderRadius: 99,
    background: "#60a5fa",
    marginBottom: 10,
  },

  tabletLineTwo: {
    width: 76,
    height: 8,
    borderRadius: 99,
    background: "#22d3ee",
    marginBottom: 10,
  },

  tabletLineThree: {
    width: 48,
    height: 8,
    borderRadius: 99,
    background: "#a78bfa",
  },

  robotArm: {
    width: 54,
    height: 92,
    borderRadius: 30,
    position: "absolute",
    right: 18,
    top: 86,
    background: "linear-gradient(135deg,#ffffff,#dbeafe)",
    border: "5px solid #cfe8ff",
    transform: "rotate(-18deg)",
  },

  robotAura: {
    position: "absolute",
    inset: 20,
    background: "rgba(34,211,238,.18)",
    filter: "blur(45px)",
    zIndex: -1,
  },

  aiTitle: {
    margin: 0,
    fontSize: "clamp(36px,5vw,56px)",
    lineHeight: 0.95,
    fontWeight: 950,
    letterSpacing: "-2px",
    color: "#020617",
  },

  aiLine: {
    width: 46,
    height: 5,
    borderRadius: 99,
    margin: "14px 0",
    background: "linear-gradient(135deg,#9333ea,#06b6d4)",
  },

  aiTyping: {
    margin: 0,
    fontSize: "clamp(24px,4vw,40px)",
    lineHeight: 1.14,
    fontWeight: 950,
    background: "linear-gradient(135deg,#9333ea,#2563eb,#06b6d4)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },

  cursor: {
    color: "#06b6d4",
    animation: "blink 1s infinite",
  },

  supportButton: {
    gridColumn: "1 / -1",
    border: "none",
    borderRadius: 24,
    padding: "18px 22px",
    background: "linear-gradient(135deg,#020617,#111827)",
    color: "#fff",
    fontSize: 17,
    fontWeight: 950,
    cursor: "pointer",
    boxShadow: "0 18px 55px rgba(2,6,23,.38)",
    transition: ".3s ease",
  },

  formBox: {
    marginTop: 30,
    display: "grid",
    gap: 16,
  },

  input: {
    width: "100%",
    minHeight: 62,
    borderRadius: 22,
    border: "1px solid rgba(255,255,255,.14)",
    background: "rgba(255,255,255,.075)",
    color: "#fff",
    padding: "0 20px",
    fontSize: 16,
  },

  button: {
    width: "100%",
    marginTop: 8,
    border: "none",
    borderRadius: 26,
    padding: "21px 24px",
    background: "linear-gradient(135deg,#7dd3fc,#38bdf8,#2563eb)",
    color: "#020617",
    fontSize: 18,
    fontWeight: 950,
    cursor: "pointer",
    boxShadow: "0 25px 90px rgba(14,165,233,.35)",
    transition: ".35s ease",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 99999,
    background: "rgba(2,6,23,.72)",
    backdropFilter: "blur(14px)",
    display: "grid",
    placeItems: "end center",
    padding: 20,
  },

  chatCard: {
    width: "100%",
    maxWidth: 560,
    borderRadius: "34px 34px 28px 28px",
    padding: 28,
    background:
      "linear-gradient(135deg,#ffffff 0%,#f8fbff 50%,#eef7ff 100%)",
    color: "#020617",
    border: "1px solid rgba(255,255,255,.9)",
    boxShadow:
      "0 35px 120px rgba(0,0,0,.45), 0 0 80px rgba(34,211,238,.25)",
    position: "relative",
    animation: "chatLift .42s cubic-bezier(.2,.9,.2,1) both",
  },

  chatHandle: {
    width: 62,
    height: 6,
    borderRadius: 99,
    background: "#cbd5e1",
    margin: "0 auto 18px",
  },

  closeButton: {
    position: "absolute",
    top: 18,
    right: 18,
    width: 38,
    height: 38,
    borderRadius: "50%",
    border: "none",
    background: "#020617",
    color: "#fff",
    fontSize: 24,
    cursor: "pointer",
  },

  chatHeader: {
    display: "flex",
    gap: 14,
    alignItems: "center",
    marginBottom: 20,
  },

  chatRobot: {
    width: 62,
    height: 52,
    borderRadius: 20,
    background: "linear-gradient(135deg,#061733,#0b1f4a)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    boxShadow: "0 0 26px rgba(14,165,233,.38)",
  },

  chatEye: {
    width: 10,
    height: 18,
    borderRadius: 99,
    background: "#67e8f9",
    boxShadow: "0 0 12px #22d3ee",
  },

  chatTitle: {
    margin: 0,
    fontSize: 26,
    fontWeight: 950,
  },

  chatSub: {
    margin: "4px 0 0",
    color: "#475569",
    fontSize: 14,
  },

  messageBubble: {
    padding: 17,
    borderRadius: 20,
    background: "#eff6ff",
    color: "#0f172a",
    fontWeight: 850,
    lineHeight: 1.55,
    marginBottom: 18,
  },

  quickGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(185px,1fr))",
    gap: 10,
    marginBottom: 18,
  },

  quickBtn: {
    border: "1px solid #cbd5e1",
    background: "#fff",
    borderRadius: 16,
    padding: "12px 14px",
    color: "#020617",
    fontWeight: 850,
    cursor: "pointer",
  },

  chatInput: {
    width: "100%",
    minHeight: 95,
    borderRadius: 18,
    border: "1px solid #cbd5e1",
    padding: 14,
    fontSize: 15,
    resize: "vertical",
    outline: "none",
  },

  chatSend: {
    width: "100%",
    marginTop: 12,
    border: "none",
    borderRadius: 18,
    padding: "15px 18px",
    background: "linear-gradient(135deg,#9333ea,#06b6d4)",
    color: "#fff",
    fontWeight: 950,
    cursor: "pointer",
  },
};