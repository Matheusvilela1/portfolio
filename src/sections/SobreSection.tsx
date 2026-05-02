import { useVisible } from "../hooks";

interface InfoCard {
  label: string;
  value: string;
  icon: string;
}

const INFO_CARDS: InfoCard[] = [
  { label: "Idade",  value: "19 anos",                    icon: "🎂" },
  { label: "Curso",  value: "Téc. Informática — IFPE",    icon: "🎓" },
  { label: "Foco",   value: "Desenvolvimento Web",         icon: "💻" },
  { label: "Status", value: "Aberto a oportunidades",      icon: "🚀" },
];

export const SobreSection: React.FC = () => {
  const [ref, visible] = useVisible<HTMLDivElement>(0.1);

  return (
    <section
      id="sobre"
      style={{ padding: "100px 24px", background: "#111" }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 800,
          marginBottom: 48,
          textAlign: "center",
          color: "#fff",
        }}>
          Sobre <span style={{ color: "#a78bfa" }}>Mim</span>
        </h2>

        <div
          ref={ref}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            alignItems: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s",
          }}
        >
          {/* Info cards */}
          <div style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: 14 }}>
            {INFO_CARDS.map(({ label, value, icon }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 18px",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span style={{ fontSize: 22 }}>{icon}</span>
                <div>
                  <p style={{
                    margin: 0,
                    fontSize: 11,
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}>
                    {label}
                  </p>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#fff" }}>
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div style={{ flex: "2 1 300px" }}>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", margin: 0 }}>
              Olá! Sou o Matheus, formado no curso Técnico de Informática pelo IFPE. Para mim, o mundo
              da programação é uma jornada fascinante e infinitamente criativa — como desvendar
              quebra-cabeças e construir soluções que impactam a vida das pessoas de maneiras
              surpreendentes.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginTop: 16 }}>
              A cada linha de código, sinto uma sensação de empoderamento e realização, sabendo que
              estou criando algo único e funcional. A comunidade de programadores é incrivelmente
              colaborativa e inspiradora, o que torna essa jornada ainda mais enriquecedora. 🤝
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginTop: 16 }}>
              Estou constantemente aprendendo e crescendo, sempre motivado a explorar novos horizontes
              e enfrentar desafios empolgantes. 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
