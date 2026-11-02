import { Reveal, SectionTitle, SocialIcon } from "../components";
import { SOCIAL_LINKS } from "../data";

interface ContactInfo {
  label: string;
  value: string;
  href: string;
}

const CONTACT_INFOS: ContactInfo[] = [
  { label: "Telefone", value: "+55 (87) 98113-9769",      href: "tel:87981139769"                     },
  { label: "E-mail",   value: "1macv9@gmail.com",          href: "mailto:1macv9@gmail.com"             },
  { label: "LinkedIn", value: "linkedin.com/in/macv55",    href: "https://www.linkedin.com/in/macv55/" },
  { label: "GitHub",   value: "github.com/Matheusvilela1", href: "https://github.com/Matheusvilela1"   },
];

export const ContatoSection: React.FC = () => (
  <section id="contato" className="section">
    <div className="wrap">
      <SectionTitle index="05" eyebrow="Contato" lines={["Vamos", "conversar?"]} accentLast />

      <div className="contact__grid">
        {CONTACT_INFOS.map(({ label, value, href }, i) => (
          <Reveal key={label} variant="frame" label={label} delay={i * 110}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="contact__item sel-hover"
            >
              <span>{label}</span>
              <strong>{value}</strong>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal variant="up" delay={200}>
        <div className="contact__cta">
          <a href="mailto:1macv9@gmail.com" className="btn btn--red">Mandar um e-mail →</a>
          <div className="socials">
            {SOCIAL_LINKS.map((s) => <SocialIcon key={s.label} {...s} />)}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
