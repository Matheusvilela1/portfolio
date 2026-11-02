import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../hooks";

const ARROW =
  '<svg viewBox="0 0 16 16" width="14" height="14"><path d="M2 1.5l11 6.2-4.9 1.3-2.2 4.8z" fill="#fff" stroke="#0a0920" stroke-width="1" stroke-linejoin="round"/></svg>';

const MAX_PARTICLES = 26;

// Rastro de setinhas e brilhos que se espalham atrás do mouse
export const CursorTrail: React.FC = () => {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = layer.current;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!root || !finePointer || prefersReducedMotion()) return;

    let lastX = -999;
    let lastY = -999;
    let lastT = 0;

    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - lastT < 40 || Math.hypot(e.clientX - lastX, e.clientY - lastY) < 26) return;
      lastX = e.clientX;
      lastY = e.clientY;
      lastT = now;

      if (root.childElementCount >= MAX_PARTICLES) root.firstElementChild?.remove();

      const p = document.createElement("span");
      const spark = Math.random() < 0.3;
      p.className = spark ? "trail trail--spark" : "trail";
      if (spark) p.textContent = Math.random() < 0.5 ? "✦" : "+";
      else p.innerHTML = ARROW;

      const angle = Math.random() * Math.PI * 2;
      const dist = 24 + Math.random() * 56;
      p.style.left = `${e.clientX}px`;
      p.style.top = `${e.clientY}px`;
      p.style.setProperty("--tx", `${Math.cos(angle) * dist}px`);
      p.style.setProperty("--ty", `${Math.sin(angle) * dist}px`);
      p.style.setProperty("--rot", `${Math.random() * 90 - 45}deg`);
      p.addEventListener("animationend", () => p.remove());
      root.appendChild(p);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return <div ref={layer} className="trail-layer" aria-hidden="true" />;
};
