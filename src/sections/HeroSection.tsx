import { useState } from "react";
import { Reveal, SocialIcon } from "../components";
import { HERO_PHOTO, PROJECTS, SOCIAL_LINKS, TECHS, TYPE_WORDS } from "../data";
import { useTypingEffect } from "../hooks";

interface Props {
  ready: boolean; // false enquanto a intro está na tela
}

const scrollTo = (id: string): void =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const STATS = [
  { value: `${PROJECTS.length}.`, label: "Projetos\nno GitHub" },
  { value: `${TECHS.length}.`,    label: "Tecnologias\nno stack" },
  { value: "∞.",                  label: "Vontade de\naprender" },
];

const GHOSTS = [
  { id: "a", name: "React" },
  { id: "b", name: "TypeScript" },
  { id: "c", name: "Node.js" },
];

const Arrow: React.FC = () => (
  <svg viewBox="0 0 16 16"><path d="M2 1.5l11 6.2-4.9 1.3-2.2 4.8z" strokeLinejoin="round" /></svg>
);

// Silhueta usada se a imagem do hero (HERO_PHOTO) não carregar
const Silhouette: React.FC = () => (
  <svg viewBox="0 0 300 400" role="img" aria-label="Espaço para a foto">
    <defs>
      <linearGradient id="sil-fill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#2a2270" />
        <stop offset="1" stopColor="#0a0920" />
      </linearGradient>
      <linearGradient id="sil-rim" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#ff3b5c" />
        <stop offset="0.5" stopColor="#ff3b5c" stopOpacity="0" />
        <stop offset="1" stopColor="#5b8cff" />
      </linearGradient>
    </defs>
    <g fill="url(#sil-fill)" stroke="url(#sil-rim)" strokeWidth="2.5">
      <path d="M150 52c36 0 58 28 58 66 0 30-12 56-30 70l2 24c44 10 86 30 98 70 6 22 8 70 8 118H14c0-48 2-96 8-118 12-40 54-60 98-70l2-24c-18-14-30-40-30-70 0-38 22-66 58-66z" />
    </g>
  </svg>
);

export const HeroSection: React.FC<Props> = ({ ready }) => {
  const typed = useTypingEffect(TYPE_WORDS, 2000);
  const [hasPhoto, setHasPhoto] = useState<boolean>(true);

  return (
    <section id="banner" className="hero">
      <div className="hero__grid" aria-hidden="true" />

      <Reveal variant="frame" label="Display · PORTFÓLIO" start={ready} className="hero__word">
        <span aria-hidden="true">PORTFÓLIO</span>
      </Reveal>

      <Reveal variant="frame" label="Image · foto.svg" start={ready} delay={250} className="hero__photo">
        {hasPhoto
          ? <img src={HERO_PHOTO} alt="Matheus Vilela" onError={() => setHasPhoto(false)} />
          : <Silhouette />}
      </Reveal>

      <div className="hero__intro">
        <Reveal variant="up" start={ready} delay={450}>
          <p className="hero__hello">Olá, eu sou</p>
        </Reveal>

        <Reveal variant="frame" label="H1 · Nome" start={ready} delay={550}>
          <h1 className="hero__name">
            <span>Matheus</span>
            <span>Vilela<i>.</i></span>
          </h1>
        </Reveal>

        <Reveal variant="up" start={ready} delay={850}>
          <p className="hero__role">
            Desenvolvedor<br />
            <span className="hero__typed">{typed}</span>
            <span className="caret" />
          </p>
          <p className="hero__bio">
            Estudante de ADS no IFPE Garanhuns, fascinado por tecnologia. Transformo ideias
            em interfaces rápidas e sistemas que funcionam — com IA no fluxo.
          </p>
          <div className="hero__ctas">
            <button className="btn btn--red" onClick={() => scrollTo("projetos")}>Ver projetos →</button>
            <button className="btn btn--ghost" onClick={() => scrollTo("contato")}>Contato</button>
          </div>
          <div className="socials">
            {SOCIAL_LINKS.map((s) => <SocialIcon key={s.label} {...s} />)}
          </div>
        </Reveal>
      </div>

      <ul className="hero__stats">
        {STATS.map((s, i) => (
          <li key={s.label}>
            <Reveal variant="frame" label={`Stat 0${i + 1}`} start={ready} delay={1000 + i * 150}>
              <div className="stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className={`ghosts ${ready ? "is-on" : ""}`} aria-hidden="true">
        {GHOSTS.map((g) => (
          <span key={g.id} className={`ghost ghost--${g.id}`}>
            <Arrow />
            <b>{g.name}</b>
          </span>
        ))}
      </div>

      <button className="hero__scroll" onClick={() => scrollTo("projetos")}>Role para explorar</button>
    </section>
  );
};
