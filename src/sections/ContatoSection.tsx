import { ContactIcon, Reveal, SectionTitle, SocialIcon } from "../components";
import type { ContactIconName } from "../components/ContactIcon";
import { SOCIAL_LINKS } from "../data";

interface ContactInfo {
  label: string;
  value: string;
  href: string;
  icon: ContactIconName;
}

const CONTACT_INFOS: ContactInfo[] = [
  { label: "E-mail",    value: "1macv9@gmail.com",          href: "mailto:1macv9@gmail.com",               icon: "email"     },
  { label: "LinkedIn",  value: "in/macv55",                 href: "https://www.linkedin.com/in/macv55/",   icon: "linkedin"  },
  { label: "Instagram", value: "@vilela_05",                href: "https://www.instagram.com/vilela_05/",  icon: "instagram" },
  { label: "Telefone",  value: "+55 (87) 98113-9769",       href: "tel:87981139769",                       icon: "phone"     },
  { label: "GitHub",    value: "@Matheusvilela1",           href: "https://github.com/Matheusvilela1",     icon: "github"    },
];

export const ContatoSection: React.FC = () => (
  <section id="contato" className="section">
    <div className="wrap">
      <SectionTitle index="05" eyebrow="Contato" lines={["Vamos", "conversar?"]} accentLast />

      <div className="contact__grid">
        {CONTACT_INFOS.map(({ label, value, href, icon }, i) => (
          <Reveal key={label} variant="frame" label={label} delay={i * 110}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="contact__item sel-hover"
            >
              <i className="contact__icon"><ContactIcon name={icon} /></i>
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
