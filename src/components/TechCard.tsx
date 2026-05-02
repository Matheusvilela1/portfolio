import type { TechItem } from "../types";
import { useVisible } from "../hooks";

interface Props {
  tech: TechItem;
  delay: number;
}

const LEVEL_LABEL: Record<number, string> = {
  1: "Básico",
  2: "Iniciante",
  3: "Intermediário",
  4: "Avançado",
  5: "Expert",
};

export const TechCard: React.FC<Props> = ({ tech, delay }) => {
  const [ref, visible] = useVisible<HTMLDivElement>();

  return (
    <div
      ref={ref}
      title={`${tech.name} — ${LEVEL_LABEL[tech.level]}`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        padding: "20px 12px 16px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12,
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ${delay}ms, transform 0.5s ${delay}ms`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = tech.color + "55";
        (e.currentTarget as HTMLDivElement).style.background = tech.color + "11";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
        (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
      }}
    >
      <span style={{ fontSize: 34, lineHeight: 1 }}>{tech.icon}</span>

      <span style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: tech.color,
      }}>
        {tech.name}
      </span>

      {/* Barra de nível */}
      <div style={{ display: "flex", gap: 3 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 4,
              borderRadius: 2,
              background: i < tech.level ? tech.color : "rgba(255,255,255,0.12)",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>

      <span style={{
        fontSize: 10,
        color: "rgba(255,255,255,0.35)",
        letterSpacing: "0.05em",
      }}>
        {LEVEL_LABEL[tech.level]}
      </span>
    </div>
  );
};
