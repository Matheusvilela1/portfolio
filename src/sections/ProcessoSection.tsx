import { CompareSlider, Reveal, SectionTitle } from "../components";

const STEPS = [
  { title: "Entender",  text: "Problema, público e o que precisa existir primeiro." },
  { title: "Construir", text: "Componentes tipados, código limpo e versionado no Git." },
  { title: "Entregar",  text: "Deploy, ajustes finos e melhoria contínua." },
];

export const ProcessoSection: React.FC = () => (
  <section id="processo" className="section">
    <div className="wrap process">
      <div>
        <SectionTitle index="03" eyebrow="Processo" lines={["Do código.", "À tela."]} accentLast />
        <Reveal variant="up" delay={200}>
          <p className="lead" style={{ marginTop: 24 }}>
            Arraste a divisória: cada linha escrita vira algo que a pessoa vê, toca e usa.
          </p>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <b>0{i + 1}</b>
                <div>
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <Reveal variant="frame" label="Component · ProfileCard" delay={150}>
        <CompareSlider />
      </Reveal>
    </div>
  </section>
);
