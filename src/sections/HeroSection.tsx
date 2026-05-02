import { SocialIcon } from "../components";
import { SOCIAL_LINKS, TYPE_WORDS } from "../data";
import { useTypingEffect } from "../hooks";

export const HeroSection: React.FC = () => {
  const typed = useTypingEffect(TYPE_WORDS, 2000);

  const scrollTo = (id: string): void =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="banner"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #1a0533 0%, #0d1f3c 50%, #0d0d0d 100%)",
        padding: "80px 24px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glows decorativos */}
      <div style={{
        position: "absolute", top: "10%", left: "5%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1000,
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 48,
      }}>
        {/* Texto */}
        <div style={{ flex: "1 1 300px" }}>
          <p style={{
            fontSize: 13,
            color: "#a78bfa",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}>
            👋 Olá, seja bem-vindo
          </p>

          <h1 style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 800,
            margin: "0 0 8px",
            lineHeight: 1.1,
          }}>
            Matheus<br />
            <span style={{
              background: "linear-gradient(90deg, #a78bfa, #38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Vilela
            </span>
          </h1>

          {/* Typing */}
          <div style={{ height: 56, display: "flex", alignItems: "center", marginBottom: 24 }}>
            <p style={{ fontSize: 22, fontWeight: 600, color: "rgba(255,255,255,0.85)", margin: 0 }}>
              Desenvolvedor{" "}
              <span style={{ color: "#38bdf8" }}>
                {typed}
                <span style={{
                  borderRight: "2px solid #38bdf8",
                  marginLeft: 2,
                  animation: "blink 1s step-end infinite",
                }} />
              </span>
            </p>
          </div>

          {/* Sociais */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {SOCIAL_LINKS.map((s) => <SocialIcon key={s.label} {...s} />)}
          </div>

          {/* CTA buttons */}
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={() => scrollTo("sobre")}
              style={{
                padding: "12px 28px",
                borderRadius: 8,
                border: "none",
                background: "linear-gradient(90deg, #7c3aed, #2563eb)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Sobre mim
            </button>
            <button
              onClick={() => scrollTo("contato")}
              style={{
                padding: "12px 28px",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#a78bfa")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
            >
              Contato
            </button>
          </div>
        </div>

        {/* Avatar */}
        <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
          <div style={{
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7c3aed, #2563eb)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 80,
            boxShadow: "0 0 60px rgba(124,58,237,0.4)",
          }}>
            👨‍💻
          </div>
        </div>
      </div>
    </section>
  );
};
