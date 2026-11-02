import { useState, useEffect } from "react";

// Retorna o id da seção que está no meio da tela.
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  const key = ids.join("|");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    key.split("|").forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [key]);

  return active;
}
