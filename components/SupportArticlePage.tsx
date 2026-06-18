import type { CSSProperties } from "react";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  updated: string;
  sections: {
    heading: string;
    body: string[];
  }[];
};

export default function SupportArticlePage({
  title,
  subtitle,
  updated,
  sections,
}: Props) {
  return (
    <main style={styles.page}>
      <section style={styles.shell}>
        <Link href="/support/help-center" style={styles.back}>
          ← Back to Help Center
        </Link>

        <div style={styles.badge}>IMPEXVIAA HELP ARTICLE</div>

        <h1 style={styles.title}>{title}</h1>

        <p style={styles.subtitle}>{subtitle}</p>

        <p style={styles.updated}>Last updated: {updated}</p>

        <div style={styles.article}>
          {sections.map((section) => (
            <section key={section.heading} style={styles.section}>
              <h2 style={styles.heading}>{section.heading}</h2>

              {section.body.map((text) => (
                <p key={text} style={styles.text}>
                  {text}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div style={styles.supportBox}>
          <h2 style={styles.supportTitle}>Need more help?</h2>
          <p style={styles.text}>
            If you still need assistance, contact IMPEXVIAA Support with your
            account email, company name, screenshots, payment receipt, or relevant
            documents.
          </p>

          <Link href="/support/contact-support" style={styles.button}>
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#000000",
    color: "#ffffff",
    padding: "64px 18px 100px",
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
  },

  shell: {
    maxWidth: 1050,
    margin: "0 auto",
  },

  back: {
    color: "#93c5fd",
    textDecoration: "none",
    fontWeight: 800,
  },

  badge: {
    display: "inline-flex",
    marginTop: 36,
    marginBottom: 24,
    padding: "12px 20px",
    borderRadius: 999,
    border: "1px solid rgba(214,181,109,.35)",
    color: "#d6b56d",
    fontWeight: 950,
    letterSpacing: 3,
    fontSize: 12,
  },

  title: {
    margin: 0,
    fontSize: "clamp(42px,7vw,82px)",
    lineHeight: 0.98,
    letterSpacing: "-3px",
    fontWeight: 950,
  },

  subtitle: {
    marginTop: 24,
    color: "#cbd5e1",
    fontSize: "clamp(18px,2.5vw,24px)",
    lineHeight: 1.7,
    fontWeight: 650,
  },

  updated: {
    marginTop: 20,
    color: "#94a3b8",
    fontWeight: 700,
  },

  article: {
    marginTop: 46,
    display: "grid",
    gap: 34,
  },

  section: {
    padding: 30,
    borderRadius: 28,
    background: "rgba(255,255,255,.045)",
    border: "1px solid rgba(255,255,255,.10)",
  },

  heading: {
    marginTop: 0,
    fontSize: "clamp(28px,4vw,44px)",
    lineHeight: 1.1,
    fontWeight: 950,
  },

  text: {
    color: "#dbeafe",
    lineHeight: 1.9,
    fontSize: 17,
    fontWeight: 550,
  },

  supportBox: {
    marginTop: 42,
    padding: 32,
    borderRadius: 30,
    background:
      "linear-gradient(135deg,rgba(214,181,109,.12),rgba(34,211,238,.10))",
    border: "1px solid rgba(214,181,109,.22)",
  },

  supportTitle: {
    marginTop: 0,
    fontSize: 34,
    fontWeight: 950,
  },

  button: {
    display: "inline-flex",
    marginTop: 18,
    minHeight: 54,
    alignItems: "center",
    justifyContent: "center",
    padding: "0 24px",
    borderRadius: 999,
    background: "linear-gradient(135deg,#d6b56d,#22d3ee)",
    color: "#020617",
    fontWeight: 950,
    textDecoration: "none",
  },
};