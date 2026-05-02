import { ProjectCard } from "../components";
import { PROJECTS } from "../data";

export const ProjetosSection: React.FC = () => (
  <section
    id="projetos"
    style={{ padding: "100px 24px", background: "#111" }}
  >
    <div style={{ maxWidth: 960, margin: "0 auto" }}>
      <h2 style={{
        fontSize: "clamp(28px, 4vw, 42px)",
        fontWeight: 800,
        marginBottom: 12,
        textAlign: "center",
        color: "#fff",
      }}>
        Meus <span style={{ color: "#38bdf8" }}>Projetos</span>
      </h2>
      <p style={{
        textAlign: "center",
        color: "rgba(255,255,255,0.4)",
        marginBottom: 52,
        fontSize: 15,
      }}>
        Projetos que desenvolvi  <code style={{ color: "#a78bfa", fontSize: 13 }}></code> 
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 20,
      }}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 100} />
        ))}
      </div>
    </div>
  </section>
);
