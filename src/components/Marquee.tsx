import { TECHS } from "../data";

// Faixa infinita com o stack (duplicada para o loop não ter emenda)
export const Marquee: React.FC = () => {
  const items = TECHS.map((t) => t.name);

  return (
    <div className="marquee" aria-label={`Stack: ${items.join(", ")}`}>
      <div className="marquee__track" aria-hidden="true">
        {[...items, ...items].map((name, i) => (
          <span key={i} className="marquee__item">{name}<span>✦</span></span>
        ))}
      </div>
    </div>
  );
};
