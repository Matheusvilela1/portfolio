import type { TechItem } from "../types";
import { CATEGORY_LABELS } from "../data";
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
  const [ref, visible] = useVisible<HTMLLIElement>(0.2);

  return (
    <li
      ref={ref}
      className={`tech ${visible ? "is-in" : ""}`}
      style={{ "--d": `${delay}ms`, "--c": tech.color } as React.CSSProperties}
    >
      <span className="tech__icon" aria-hidden="true">{tech.icon}</span>

      <div className="tech__info">
        <strong>{tech.name}</strong>
        <span>{CATEGORY_LABELS[tech.category]}</span>
      </div>

      <div className="tech__bar" role="img" aria-label={`Nível ${tech.level} de 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <i
            key={i}
            className={i < tech.level ? "on" : ""}
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}
      </div>

      <span className="tech__level">{LEVEL_LABEL[tech.level]}</span>
    </li>
  );
};
