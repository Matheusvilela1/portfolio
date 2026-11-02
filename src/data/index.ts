import type { TechItem, TechCategory, ProjectItem, SocialLink, NavItem, TimelineItem } from "../types";

// ── Navegação ─────────────────────────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { id: "banner",      label: "Início"      },
  { id: "projetos",    label: "Projetos"    },
  { id: "tecnologias", label: "Habilidades" },
  { id: "processo",    label: "Processo"    },
  { id: "sobre",       label: "Sobre"       },
  { id: "contato",     label: "Contato"     },
];

// ── Sociais ───────────────────────────────────────────────────────────────────
export const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://www.linkedin.com/in/macv55/",      icon: "in", label: "LinkedIn"  },
  { href: "https://github.com/Matheusvilela1",        icon: "gh", label: "GitHub"    },
  { href: "https://www.instagram.com/vilela_05/",     icon: "ig", label: "Instagram" },
];

// ── Tecnologias ───────────────────────────────────────────────────────────────
export const TECHS: TechItem[] = [
  // Linguagens
  { name: "Java",       icon: "☕", color: "#f89820", category: "linguagem",   level: 4 },
  { name: "Python",     icon: "🐍", color: "#3572a5", category: "linguagem",   level: 3 },
  { name: "JavaScript", icon: "⚡", color: "#f7df1e", category: "linguagem",   level: 4 },
  { name: "TypeScript", icon: "🔷", color: "#3178c6", category: "linguagem",   level: 3 },

  // Front-end
  { name: "HTML",       icon: "🌐", color: "#e34c26", category: "frontend",    level: 5 },
  { name: "CSS",        icon: "🎨", color: "#1572b6", category: "frontend",    level: 4 },
  { name: "React",      icon: "⚛️", color: "#61dafb", category: "frontend",    level: 3 },

  // Back-end
  { name: "Node.js",    icon: "🟢", color: "#339933", category: "backend",     level: 3 },
  { name: "PHP",        icon: "🐘", color: "#8892bf", category: "backend",     level: 3 },
  { name: "Next.js",    icon: "🚀", color: "#4479a1", category: "backend",     level: 3 },  

  // Ferramentas
  { name: "Git",        icon: "🔀", color: "#f05032", category: "ferramenta",  level: 4 },
  { name: "MySQL",      icon: "🗄️", color: "#4479a1", category: "ferramenta",  level: 3 },

  // Inteligência artificial
  { name: "ChatGPT",    icon: "🤖", color: "#10a37f", category: "ia",          level: 4 },
  { name: "Claude",     icon: "✴️", color: "#d97757", category: "ia",          level: 4 },
];

export const CATEGORY_LABELS: Record<TechCategory, string> = {
  linguagem:  "Linguagem",
  frontend:   "Front-end",
  backend:    "Back-end",
  ferramenta: "Ferramenta",
  ia:         "IA",
};

// ── Projetos ──────────────────────────────────────────────────────────────────
// 👇 Edite aqui para adicionar/remover seus projetos
export const PROJECTS: ProjectItem[] = [
  {
    id: "projeto-1",
    title: "Portfólio Pessoal",
    description: "Este site! Feito em React + TypeScript, com intro em wireframe, revelação ao rolar, rastro de cursores e comparador código × resultado — tudo em CSS e hooks próprios, sem biblioteca de animação.",
    techs: ["React", "TypeScript", "CSS"],
    repoUrl: "https://github.com/Matheusvilela1/portfolio",
    status: "concluido",
    icon: "🌐",
    image: `${process.env.PUBLIC_URL}/projects/portfolio-hero.jpg`,
  },
  {
    id: "projeto-2",
    title: "Cronograma de Estudos",
    description: "Kro: você diz para qual prova estuda e como é a sua rotina, ele monta a grade da semana, mostra onde você mais erra e reorganiza os estudos sozinho.",
    techs: ["Next.js", "TypeScript"],
    repoUrl: "https://github.com/Matheusvilela1/cronograma",
    liveUrl: "https://kro.vercel.app/",
    status: "em andamento",
    icon: "🚀",
    image: `${process.env.PUBLIC_URL}/projects/kro.jpg`,
  },
  {
    id: "projeto-3",
    title: "Pensando....",
    description: "",
    techs: ["Java", "MySQL"],
    repoUrl: "",
    status: "pausado",
    icon: "🛠️",
  },
];

// ── Hero ──────────────────────────────────────────────────────────────────────
export const TYPE_WORDS: string[] = ["Front-end", "Back-end", "TypeScript"];

// 👇 Foto do hero: PNG recortado sem fundo, 600×800 (3:4). O avatar alternativo fica em public/foto.svg.
export const HERO_PHOTO = `${process.env.PUBLIC_URL}/foto.png`;

// ── Trajetória (seção Sobre) ──────────────────────────────────────────────────
export const TIMELINE: TimelineItem[] = [
  { when: "Formado",   title: "Técnico em Informática — IFPE",  text: "Base em lógica, redes, banco de dados e desenvolvimento." },
  { when: "Cursando",  title: "ADS — IFPE Campus Garanhuns",    text: "Análise e Desenvolvimento de Sistemas: engenharia de software, banco de dados e arquitetura." },
  { when: "Hoje",      title: "Desenvolvimento Web + IA",       text: "React, TypeScript e Next.js no front; Node, PHP e MySQL no back; ChatGPT e Claude no fluxo." },
  { when: "Próximo",   title: "Aberto a oportunidades",         text: "Procurando um time para crescer e entregar produtos de verdade." },
];
