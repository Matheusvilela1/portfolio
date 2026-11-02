import { useState } from "react";
import { Reveal, SectionTitle, TechCard } from "../components";
import { CATEGORY_LABELS, TECHS } from "../data";
import type { TechCategory } from "../types";

const ALL_FILTERS = ["todos", "linguagem", "frontend", "backend", "ferramenta", "ia"] as const;
type Filter = typeof ALL_FILTERS[number];

const filterLabel = (f: Filter): string => (f === "todos" ? "Todos" : CATEGORY_LABELS[f as TechCategory]);

// Ramo de louro: folhas alternadas ao longo de uma curva (Bézier quadrática)
const P0 = [32, 78], P1 = [2, 46], P2 = [24, 4];
const LEAVES = Array.from({ length: 7 }).map((_, i) => {
  const t = 0.08 + i * 0.135;
  const u = 1 - t;
  const x = u * u * P0[0] + 2 * u * t * P1[0] + t * t * P2[0];
  const y = u * u * P0[1] + 2 * u * t * P1[1] + t * t * P2[1];
  const dx = 2 * u * (P1[0] - P0[0]) + 2 * t * (P2[0] - P1[0]);
  const dy = 2 * u * (P1[1] - P0[1]) + 2 * t * (P2[1] - P1[1]);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
  const side = i % 2 === 0 ? -1 : 1;
  return { x: x + side * 4, y, angle: angle + side * 38 };
});

const Laurel: React.FC = () => (
  <svg viewBox="0 0 40 80" aria-hidden="true">
    <path d={`M${P0} Q${P1} ${P2}`} fill="none" stroke="currentColor" strokeWidth="1.4" />
    {LEAVES.map((l, i) => (
      <ellipse key={i} cx={l.x} cy={l.y} rx="3.2" ry="7" transform={`rotate(${l.angle} ${l.x} ${l.y})`} />
    ))}
  </svg>
);

export const TecnologiasSection: React.FC = () => {
  const [filter, setFilter] = useState<Filter>("todos");

  const filtered = filter === "todos"
    ? TECHS
    : TECHS.filter((t) => t.category === filter);

  return (
    <section id="tecnologias" className="section">
      <div className="wrap stack">
        <Reveal variant="frame" label="Frame · Stack" className="stack__panel-wrap">
          <div className="stack__panel">
            <SectionTitle index="02" eyebrow="Stack & domínio" lines={["O código.", "A prática."]} accentLast />

            <div className="laurel">
              <Laurel />
              <strong>{TECHS.length}</strong>
              <Laurel />
            </div>
            <p className="laurel-caption">Tecnologias no dia a dia</p>

            <p className="lead">
              Linguagens, frameworks, ferramentas e IA (ChatGPT e Claude) que uso para tirar
              projetos do papel — com o nível honesto de cada uma.
            </p>

            <div className="tabs" role="tablist" aria-label="Filtrar tecnologias">
              {ALL_FILTERS.map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={filter === f}
                  onClick={() => setFilter(f)}
                  className={`tab ${filter === f ? "is-active" : ""}`}
                >
                  {filterLabel(f)}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <ul className="techs">
          {filtered.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} delay={i * 70} />
          ))}
        </ul>
      </div>
    </section>
  );
};
