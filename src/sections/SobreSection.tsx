import { Reveal, SectionTitle } from "../components";
import { TIMELINE } from "../data";

interface Fact {
  label: string;
  value: string;
}

const FACTS: Fact[] = [
  { label: "Idade",     value: "19 anos"                     },
  { label: "Cursando",  value: "ADS — IFPE Garanhuns"        },
  { label: "Formação",  value: "Téc. Informática — IFPE"     },
  { label: "Foco",      value: "Desenvolvimento Web"         },
  { label: "IA no dia", value: "ChatGPT e Claude"            },
  { label: "Status",    value: "Aberto a oportunidades"      },
];

export const SobreSection: React.FC = () => (
  <section id="sobre" className="section">
    <div className="wrap">
      <SectionTitle
        index="04"
        eyebrow="Sobre mim"
        lines={["Não é só código.", <>É resolver <em>problemas.</em></>]}
      />

      <div className="about">
        <Reveal variant="up">
          <h3>Trajetória</h3>
          <ol className="timeline">
            {TIMELINE.map((t) => (
              <li key={t.title}>
                <time>{t.when}</time>
                <strong>{t.title}</strong>
                <span>{t.text}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal variant="up" delay={120}>
          <h3>Em poucas palavras</h3>
          <div className="facts">
            {FACTS.map(({ label, value }) => (
              <div key={label} className="fact">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="up" delay={240} className="about__bio">
          <h3>Quem sou</h3>
          <p>
            Sou o Matheus, formado no Técnico de Informática pelo IFPE e hoje cursando Análise e
            Desenvolvimento de Sistemas no IFPE Campus Garanhuns. Sou fascinado por tecnologia:
            programar, para mim, é desvendar quebra-cabeças e construir soluções que impactam a
            vida das pessoas.
          </p>
          <p>
            Uso IA como parceira de trabalho — ChatGPT e Claude me ajudam a pesquisar, revisar
            código e prototipar mais rápido, enquanto as decisões de arquitetura continuam comigo.
          </p>
          <p>
            A comunidade de desenvolvedores é colaborativa e inspiradora — e é nela que continuo
            aprendendo, explorando novos horizontes e encarando desafios.
          </p>
          <Reveal variant="frame" label="Quote" delay={300}>
            <blockquote className="quote">
              <p>A cada linha de código, algo único e funcional.</p>
              <cite>Matheus</cite>
            </blockquote>
          </Reveal>
        </Reveal>
      </div>
    </div>
  </section>
);
