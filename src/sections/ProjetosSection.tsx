import { useState } from "react";
import { ProjectCard, SectionTitle } from "../components";
import { PROJECTS } from "../data";
import type { ProjectStatus } from "../types";

type Filter = "todos" | ProjectStatus;

const FILTERS: Array<{ id: Filter; label: string }> = [
  { id: "todos",        label: "Todos"        },
  { id: "concluido",    label: "Concluídos"   },
  { id: "em andamento", label: "Em andamento" },
  { id: "pausado",      label: "Pausados"     },
];

export const ProjetosSection: React.FC = () => {
  const [filter, setFilter] = useState<Filter>("todos");

  const count = (f: Filter): number =>
    f === "todos" ? PROJECTS.length : PROJECTS.filter((p) => p.status === f).length;

  const visible = filter === "todos" ? PROJECTS : PROJECTS.filter((p) => p.status === filter);

  return (
    <section id="projetos" className="section">
      <div className="wrap">
        <div className="section-head">
          <SectionTitle
            index="01"
            eyebrow="Trabalhos selecionados"
            lines={["Projetos que", "falam por si."]}
            accentLast
          />

          <div className="tabs" role="tablist" aria-label="Filtrar projetos">
            {FILTERS.map(({ id, label }) => (
              <button
                key={id}
                role="tab"
                aria-selected={filter === id}
                onClick={() => setFilter(id)}
                className={`tab ${filter === id ? "is-active" : ""}`}
              >
                {label} <sup>{String(count(id)).padStart(2, "0")}</sup>
              </button>
            ))}
          </div>
        </div>

        <div className="projects">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} index={PROJECTS.indexOf(project)} />
          ))}
        </div>
      </div>
    </section>
  );
};
