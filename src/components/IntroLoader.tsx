import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../hooks";

interface Props {
  onReveal: () => void;   // chamada quando a cortina começa a subir
  onFinish: () => void;   // chamada quando a intro sai da tela
}

interface Box {
  x: number; y: number; w: number; h: number; // em %
  label?: string;
}

// Esqueleto do hero desenhado como wireframe antes do site aparecer
const BOXES: Box[] = [
  { x: 0,  y: 0,  w: 100, h: 7,  label: "Navbar · 1440×68" },
  { x: 14, y: 14, w: 72,  h: 30, label: "Display · PORTFÓLIO" },
  { x: 2,  y: 30, w: 26,  h: 15, label: "H1 · Nome" },
  { x: 2,  y: 50, w: 22,  h: 4 },
  { x: 2,  y: 57, w: 25,  h: 4 },
  { x: 2,  y: 66, w: 11,  h: 7,  label: "Button" },
  { x: 15, y: 66, w: 9,   h: 7 },
  { x: 36, y: 22, w: 28,  h: 78, label: "Image · foto.svg" },
  { x: 82, y: 36, w: 16,  h: 9,  label: "Stat 01" },
  { x: 82, y: 49, w: 16,  h: 9 },
  { x: 82, y: 62, w: 16,  h: 9 },
];

const DURATION = 2100;

const statusFor = (pct: number): string =>
  pct < 45 ? "Desenhando wireframe" : pct < 85 ? "Aplicando estilos" : "Pronto";

export const IntroLoader: React.FC<Props> = ({ onReveal, onFinish }) => {
  const [pct, setPct] = useState<number>(0);
  const [leaving, setLeaving] = useState<boolean>(false);
  const callbacks = useRef({ onReveal, onFinish });
  callbacks.current = { onReveal, onFinish };

  useEffect(() => {
    if (prefersReducedMotion()) {
      callbacks.current.onReveal();
      callbacks.current.onFinish();
      return;
    }

    document.body.style.overflow = "hidden";
    let raf = 0;
    let finished = false;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;
    const t0 = performance.now();

    const finish = () => {
      if (finished) return;
      finished = true;
      cancelAnimationFrame(raf);
      setPct(100);
      setLeaving(true);
      document.body.style.overflow = "";
      callbacks.current.onReveal();
      exitTimer = setTimeout(() => callbacks.current.onFinish(), 900);
    };

    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / DURATION);
      setPct(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else finish();
    };
    raf = requestAnimationFrame(tick);

    // Garantia: se o navegador pausar o requestAnimationFrame (aba em segundo plano), a intro não trava o site
    const safety = setTimeout(finish, DURATION + 500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(safety);
      if (exitTimer) clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={`intro ${leaving ? "is-leaving" : ""}`} aria-hidden="true">
      <span className="intro__brand">MV<em>.</em></span>

      <div className="intro__canvas">
        {BOXES.map((b, i) => (
          <div
            key={i}
            className="wf"
            style={{
              left: `${b.x}%`, top: `${b.y}%`, width: `${b.w}%`, height: `${b.h}%`,
              "--i": i,
            } as React.CSSProperties}
          >
            <i /><i /><i /><i />
            {b.label && <b>{b.label}</b>}
          </div>
        ))}
      </div>

      <span className="intro__count">{String(pct).padStart(3, "0")}%</span>
      <span className="intro__status">{statusFor(pct)}<br />Matheus Vilela — Portfólio</span>
      <span className="intro__bar" style={{ width: `${pct}%` }} />
    </div>
  );
};
