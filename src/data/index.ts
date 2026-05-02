import type { TechItem, ProjectItem, SocialLink, NavItem } from "../types";

// ── Navegação ─────────────────────────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { id: "banner",      label: "Início"      },
  { id: "sobre",       label: "Sobre"       },
  { id: "tecnologias", label: "Habilidades" },
  { id: "projetos",    label: "Projetos"    },
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
  { name: "PHP",        icon: "🐘", color: "#8892bf", category: "backend",     level: 3 },
  { name: "Python",     icon: "🐍", color: "#3572a5", category: "linguagem",   level: 3 },
  { name: "JavaScript", icon: "⚡", color: "#f7df1e", category: "linguagem",   level: 4 },
  { name: "TypeScript", icon: "🔷", color: "#3178c6", category: "linguagem",   level: 3 },

  // Front-end
  { name: "HTML",       icon: "🌐", color: "#e34c26", category: "frontend",    level: 5 },
  { name: "CSS",        icon: "🎨", color: "#1572b6", category: "frontend",    level: 4 },
  { name: "React",      icon: "⚛️", color: "#61dafb", category: "frontend",    level: 3 },

  // Ferramentas
  { name: "Git",        icon: "🔀", color: "#f05032", category: "ferramenta",  level: 4 },
  { name: "MySQL",      icon: "🗄️", color: "#4479a1", category: "ferramenta",  level: 3 },
];

// ── Projetos ──────────────────────────────────────────────────────────────────
// 👇 Edite aqui para adicionar/remover seus projetos
export const PROJECTS: ProjectItem[] = [
  {
    id: "projeto-1",
    title: "Portfólio Pessoal",
    description: "Site portfólio responsivo construído com HTML, CSS e JavaScript puro. Apresenta minhas habilidades, projetos e formas de contato.",
    techs: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/Matheusvilela1",
    status: "concluido",
    icon: "🌐",
  },
  {
    id: "projeto-2",
    title: "Cronograma de Estudos",
    description: "Projeto de estudo com cronograma e metas semanais.",
    techs: ["Next", "TypeScript"],
    repoUrl: "https://github.com/Matheusvilela1/cronograma",
    liveUrl: "https://kro.vercel.app/",
    status: "em andamento",
    icon: "🚀",
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

// ── Typing hero ───────────────────────────────────────────────────────────────
export const TYPE_WORDS: string[] = ["Front-end", "Back-end", "TypeScript"];
