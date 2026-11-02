import type { ProjectItem, ProjectStatus } from "../types";
import { Reveal } from "./Reveal";

interface Props {
  project: ProjectItem;
  index: number;
}

const STATUS_CONFIG: Record<ProjectStatus, { label: string; color: string }> = {
  concluido:      { label: "Concluído",    color: "#4ade80" },
  "em andamento": { label: "Em andamento", color: "#fbbf24" },
  pausado:        { label: "Pausado",      color: "#a9a6d1" },
};

// Cores do "print" de cada card (alternam por posição)
const MEDIA_COLORS: Array<[string, string]> = [
  ["rgba(91,140,255,0.75)", "rgba(162,89,255,0.55)"],
  ["rgba(255,59,92,0.75)",  "rgba(255,160,80,0.45)"],
  ["rgba(162,89,255,0.75)", "rgba(56,189,248,0.45)"],
];

const CODE_LINES = [64, 92, 48, 76];

export const ProjectCard: React.FC<Props> = ({ project, index }) => {
  const status = STATUS_CONFIG[project.status];
  const num = String(index + 1).padStart(2, "0");
  const [a, b] = MEDIA_COLORS[index % MEDIA_COLORS.length];
  const url = (project.liveUrl ?? project.repoUrl ?? "").replace(/^https?:\/\//, "") || "em breve";

  return (
    <Reveal variant="frame" label={`Frame · Projeto ${num}`} delay={index * 140}>
      <article className="project__card sel-hover">
        <div className="project__media" style={{ "--a": a, "--b": b } as React.CSSProperties}>
          {project.image ? (
            <img
              className="project__art project__shot"
              src={project.image}
              alt={`Tela do projeto ${project.title}`}
              loading="lazy"
            />
          ) : (
            <div className="project__art">
              <div className="project__code" aria-hidden="true">
                {CODE_LINES.map((w, i) => <i key={i} style={{ width: w + ((index * 17 + i * 23) % 40) }} />)}
              </div>
              <span className="project__icon" aria-hidden="true">{project.icon}</span>
            </div>
          )}
          <div className="project__chrome" aria-hidden="true">
            <i /><i /><i />
            <span>{url}</span>
          </div>
        </div>

        <div className="project__meta">
          <span className="project__num">{num}</span>
          <div>
            <h3>{project.title}</h3>
            <span className="project__status" style={{ color: status.color }}>● {status.label}</span>
          </div>
        </div>

        <p className="project__desc">
          {project.description || "Ideia em fase de planejamento — em breve por aqui."}
        </p>

        <div className="project__chips">
          {project.techs.map((tech) => <span key={tech} className="chip">{tech}</span>)}
        </div>

        {(project.repoUrl || project.liveUrl) && (
          <div className="project__links">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
                Repositório ↗
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn--red btn--sm">
                Ver ao vivo ↗
              </a>
            )}
          </div>
        )}
      </article>
    </Reveal>
  );
};
