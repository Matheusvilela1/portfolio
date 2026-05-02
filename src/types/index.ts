// ── Tecnologias ───────────────────────────────────────────────────────────────
export type TechCategory = "frontend" | "backend" | "linguagem" | "ferramenta";

export interface TechItem {
  name: string;
  icon: string;
  color: string;
  category: TechCategory;
  level: number; // 1–5
}

// ── Projetos ──────────────────────────────────────────────────────────────────
export type ProjectStatus = "concluido" | "em andamento" | "pausado";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techs: string[];          // nomes das techs usadas
  repoUrl?: string;
  liveUrl?: string;
  status: ProjectStatus;
  icon: string;             // emoji representativo
}

// ── Social ────────────────────────────────────────────────────────────────────
export interface SocialLink {
  href: string;
  icon: string;
  label: string;
}

// ── Nav ───────────────────────────────────────────────────────────────────────
export interface NavItem {
  id: string;
  label: string;
}
