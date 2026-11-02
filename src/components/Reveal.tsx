import { useVisible } from "../hooks";

type Variant = "frame" | "up" | "wipe" | "lines";

interface Props {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;       // ms
  label?: string;       // etiqueta azul estilo Figma (só no modo "frame")
  start?: boolean;      // segura a animação até virar true (ex.: fim da intro)
  className?: string;
}

// Anima o conteúdo quando entra na tela. No modo "frame" um contorno de seleção
// com alças é desenhado primeiro e o conteúdo é revelado logo depois.
export const Reveal: React.FC<Props> = ({
  children,
  variant = "up",
  delay = 0,
  label,
  start = true,
  className = "",
}) => {
  const [ref, visible] = useVisible<HTMLDivElement>(0.15);
  const on = visible && start;

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant} ${on ? "is-in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
    >
      {variant === "frame" && (
        <span className="frame" aria-hidden="true">
          <i /><i /><i /><i />
          {label && <b className="frame__tag">{label}</b>}
        </span>
      )}
      <div className="reveal__body">{children}</div>
    </div>
  );
};

interface TitleProps {
  index: string;
  eyebrow: string;
  lines: React.ReactNode[];
  accentLast?: boolean;
  className?: string;
}

// Título grande de seção: cada linha sobe de dentro de uma máscara.
export const SectionTitle: React.FC<TitleProps> = ({ index, eyebrow, lines, accentLast, className = "" }) => (
  <Reveal variant="lines" className={className}>
    <p className="eyebrow"><b>{index}</b> {eyebrow}</p>
    <h2 className={`title ${accentLast ? "title--accent-last" : ""}`}>
      {lines.map((line, i) => (
        <span key={i} className="line">
          <span style={{ "--i": i } as React.CSSProperties}>{line}</span>
        </span>
      ))}
    </h2>
  </Reveal>
);
