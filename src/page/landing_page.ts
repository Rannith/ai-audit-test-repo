import React from "react";

export default function LandingPage() {
  return (
    <main style={{ fontFamily: "sans-serif", margin: 0, padding: 0, color: "#1f2937" }}>
      <section style={{ background: "#f9fafb", padding: "96px 24px", textAlign: "center" }}>
        <p style={{ margin: 0, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.8rem" }}>
          Build faster, ship smarter
        </p>
        <h1 style={{ fontSize: "3rem", margin: "24px 0", lineHeight: 1.1 }}>
          Landing page for your product, made simple.
        </h1>
        <p style={{ maxWidth: "680px", margin: "0 auto", color: "#4b5563", fontSize: "1.05rem", lineHeight: 1.7 }}>
          Create a polished first impression with a responsive hero section, clear value proposition, and a strong call to action.
        </p>
        <div style={{ marginTop: "32px", display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
          <a href="#features" style={{ padding: "14px 28px", background: "#2563eb", color: "white", borderRadius: "999px", textDecoration: "none", fontWeight: 600 }}>
            See features
          </a>
          <a href="#contact" style={{ padding: "14px 28px", background: "transparent", color: "#2563eb", borderRadius: "999px", textDecoration: "none", border: "1px solid #2563eb", fontWeight: 600 }}>
            Contact sales
          </a>
        </div>
      </section>

      <section id="features" style={{ padding: "72px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          <article style={{ padding: "28px", borderRadius: "20px", background: "white", boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)" }}>
            <h2 style={{ margin: "0 0 14px", fontSize: "1.25rem" }}>Fast setup</h2>
            <p style={{ margin: 0, color: "#4b5563" }}>
              Launch your product in minutes with a modular landing page designed for conversion.
            </p>
          </article>
          <article style={{ padding: "28px", borderRadius: "20px", background: "white", boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)" }}>
            <h2 style={{ margin: "0 0 14px", fontSize: "1.25rem" }}>Responsive design</h2>
            <p style={{ margin: 0, color: "#4b5563" }}>
              Every section adapts cleanly to mobile and desktop screens so your message is always crisp.
            </p>
          </article>
          <article style={{ padding: "28px", borderRadius: "20px", background: "white", boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)" }}>
            <h2 style={{ margin: "0 0 14px", fontSize: "1.25rem" }}>Clear messaging</h2>
            <p style={{ margin: 0, color: "#4b5563" }}>
              Communicate what matters most with concise copy, meaningful visuals, and a strong call to action.
            </p>
          </article>
        </div>
      </section>

      <section style={{ background: "#111827", color: "white", padding: "72px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ margin: "0 0 16px", fontSize: "2rem" }}>Ready to grow?</h2>
          <p style={{ margin: 0, color: "#d1d5db", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Start with a landing page that converts visitors into customers, partners, and advocates.
          </p>
          <a href="#contact" style={{ display: "inline-block", marginTop: "32px", padding: "16px 32px", background: "#3b82f6", color: "white", borderRadius: "999px", textDecoration: "none", fontWeight: 700 }}>
            Get started
          </a>
        </div>
      </section>

      <footer id="contact" style={{ padding: "48px 24px", textAlign: "center", background: "#f3f4f6" }}>
        <p style={{ margin: 0, color: "#6b7280" }}>
          Contact us at <a href="mailto:hello@example.com" style={{ color: "#2563eb", textDecoration: "underline" }}>hello@example.com</a>
        </p>
      </footer>
    </main>
  );
}
