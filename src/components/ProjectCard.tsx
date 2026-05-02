import type { ProjectItem, ProjectStatus } from "../types";
import { useVisible } from "../hooks";

interface Props {
  project: ProjectItem;
  delay: number;
}

const STATUS_CONFIG: Record<ProjectStatus, { label: string; color: string; bg: string }> = {
  concluido:      { label: "Concluído",     color: "#4ade80", bg: "rgba(74,222,128,0.12)"  },
  "em andamento": { label: "Em andamento",  color: "#fbbf24", bg: "rgba(251,191,36,0.12)"  },
  pausado:        { label: "Pausado",       color: "#94a3b8", bg: "rgba(148,163,184,0.12)" },
};

export const ProjectCard: React.FC<Props> = ({ project, delay }) => {
  const [ref, visible] = useVisible<HTMLDivElement>(0.1);
  const status = STATUS_CONFIG[project.status];

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 14,
        padding: "24px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 14,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ${delay}ms, transform 0.6s ${delay}ms`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(167,139,250,0.3)";
        (e.currentTarget as HTMLDivElement).style.background = "rgba(167,139,250,0.05)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
        (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 28 }}>{project.icon}</span>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#fff" }}>
            {project.title}
          </h3>
        </div>

        {/* Badge de status */}
        <span style={{
          flexShrink: 0,
          fontSize: 11,
          fontWeight: 600,
          padding: "3px 10px",
          borderRadius: 20,
          color: status.color,
          background: status.bg,
          border: `1px solid ${status.color}33`,
          whiteSpace: "nowrap",
        }}>
          {status.label}
        </span>
      </div>

      {/* Descrição */}
      <p style={{
        margin: 0,
        fontSize: 14,
        lineHeight: 1.7,
        color: "rgba(255,255,255,0.55)",
        flexGrow: 1,
      }}>
        {project.description}
      </p>

      {/* Tech chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.techs.map((tech) => (
          <span key={tech} style={{
            fontSize: 11,
            fontWeight: 600,
            padding: "3px 10px",
            borderRadius: 6,
            background: "rgba(255,255,255,0.07)",
            color: "rgba(255,255,255,0.6)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {(project.repoUrl || project.liveUrl) && (
        <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: 7,
                border: "1px solid rgba(255,255,255,0.15)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              🐙 Repositório
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                fontWeight: 600,
                color: "#a78bfa",
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: 7,
                border: "1px solid rgba(167,139,250,0.3)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(167,139,250,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              🔗 Ver ao vivo
            </a>
          )}
        </div>
      )}
    </div>
  );
};
