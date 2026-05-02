import { useState } from "react";
import { NAV_ITEMS } from "../data";
import { useScrolled } from "../hooks";

export const Navbar: React.FC = () => {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const scrollTo = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 60,
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(13,13,13,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        transition: "all 0.3s",
      }}>
        {/* Logo */}
        <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "0.04em", color: "#a78bfa" }}>
          MV<span style={{ color: "#fff" }}>.</span>
        </span>

        {/* Desktop links */}
        <ul style={{
          display: "flex",
          gap: 32,
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
          className="desktop-nav"
        >
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: 0,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="hamburger"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 22,
            cursor: "pointer",
            display: "none",
            lineHeight: 1,
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          background: "rgba(13,13,13,0.97)",
          backdropFilter: "blur(16px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
        }}>
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: 28,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
