import { useState } from "react";
import { TechCard } from "../components";
import { TECHS } from "../data";
import type { TechCategory } from "../types";

const CATEGORY_LABELS: Record<TechCategory | "todos", string> = {
  todos:      "Todos",
  linguagem:  "Linguagens",
  frontend:   "Front-end",
  backend:    "Back-end",
  ferramenta: "Ferramentas",
};

const ALL_FILTERS = ["todos", "linguagem", "frontend", "backend", "ferramenta"] as const;
type Filter = typeof ALL_FILTERS[number];

export const TecnologiasSection: React.FC = () => {
  const [filter, setFilter] = useState<Filter>("todos");

  const filtered = filter === "todos"
    ? TECHS
    : TECHS.filter((t) => t.category === filter);

  return (
    <section
      id="tecnologias"
      style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #0d0d0d 0%, #0a0a1a 100%)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 800,
          marginBottom: 12,
          textAlign: "center",
          color: "#fff",
        }}>
          Tecnologias
        </h2>
        <p style={{
          textAlign: "center",
          color: "rgba(255,255,255,0.4)",
          marginBottom: 32,
          fontSize: 15,
        }}>
          Ferramentas e linguagens que uso no dia a dia
        </p>

        {/* Filtros de categoria */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 40,
        }}>
          {ALL_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "7px 18px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                border: "1px solid",
                transition: "all 0.2s",
                borderColor: filter === f ? "#a78bfa" : "rgba(255,255,255,0.15)",
                background: filter === f ? "rgba(167,139,250,0.15)" : "transparent",
                color: filter === f ? "#a78bfa" : "rgba(255,255,255,0.5)",
              }}
            >
              {CATEGORY_LABELS[f]}
            </button>
          ))}
        </div>

        {/* Grid de cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
          gap: 14,
        }}>
          {filtered.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
};
