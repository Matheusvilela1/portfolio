import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion, useVisible } from "../hooks";

// Comparador "antes/depois": o código à esquerda, o componente renderizado à direita.
export const CompareSlider: React.FC = () => {
  const [pos, setPos] = useState<number>(50);
  const [ref, visible] = useVisible<HTMLDivElement>(0.4);
  const touched = useRef<boolean>(false);

  // Na primeira vez que aparece, a divisória faz uma "varredura" para mostrar que é arrastável
  useEffect(() => {
    if (!visible || touched.current || prefersReducedMotion()) return;
    const keys = [50, 24, 76, 50];
    const SEG = 700;
    const t0 = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      if (touched.current) return;
      const t = (now - t0) / SEG;
      const i = Math.floor(t);
      if (i >= keys.length - 1) {
        setPos(50);
        return;
      }
      const k = t - i;
      const eased = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      setPos(keys[i] + (keys[i + 1] - keys[i]) * eased);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  return (
    <div ref={ref} className="compare" style={{ "--pos": `${pos}%` } as React.CSSProperties}>
      <div className="compare__layer compare__code" aria-hidden="true">
        <span className="c">{"// ProfileCard.tsx"}</span>{"\n"}
        <span className="k">export const</span> <span className="f">ProfileCard</span> = () =&gt; ({"\n"}
        {"  "}&lt;<span className="t">article</span> className=<span className="s">"card"</span>&gt;{"\n"}
        {"    "}&lt;<span className="t">Avatar</span> initials=<span className="s">"MV"</span> /&gt;{"\n"}
        {"    "}&lt;<span className="t">h4</span>&gt;Matheus Vilela&lt;/<span className="t">h4</span>&gt;{"\n"}
        {"    "}&lt;<span className="t">p</span>&gt;Dev Front & Back-end&lt;/<span className="t">p</span>&gt;{"\n"}
        {"    "}&lt;<span className="t">Chips</span> items={"{"}[<span className="s">"React"</span>, <span className="s">"TS"</span>, <span className="s">"Node"</span>]{"}"} /&gt;{"\n"}
        {"    "}&lt;<span className="t">Button</span> variant=<span className="s">"red"</span>&gt;{"\n"}
        {"      "}Vamos conversar{"\n"}
        {"    "}&lt;/<span className="t">Button</span>&gt;{"\n"}
        {"  "}&lt;/<span className="t">article</span>&gt;{"\n"}
        );
      </div>

      <div className="compare__layer compare__ui" aria-hidden="true">
        <div className="mock">
          <div className="mock__avatar">MV</div>
          <h4>Matheus Vilela</h4>
          <p>Dev Front &amp; Back-end</p>
          <div className="mock__chips">
            <span className="chip">React</span>
            <span className="chip">TS</span>
            <span className="chip">Node</span>
          </div>
          <span className="btn btn--red btn--sm">Vamos conversar</span>
        </div>
      </div>

      <div className="compare__handle" aria-hidden="true"><span>‹ ›</span></div>
      <span className="compare__tag compare__tag--l">Código</span>
      <span className="compare__tag compare__tag--r">Resultado</span>

      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => {
          touched.current = true;
          setPos(Number(e.target.value));
        }}
        className="compare__range"
        aria-label="Arraste para comparar o código com o resultado"
      />
    </div>
  );
};
