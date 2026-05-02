import { SocialIcon } from "../components";
import { SOCIAL_LINKS } from "../data";

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
}

const CONTACT_INFOS: ContactInfo[] = [
  { icon: "📞", label: "Telefone",  value: "+55 (87) 98113-9769",     href: "tel:87981139769"                       },
  { icon: "✉️", label: "E-mail",   value: "1macv9@gmail.com",         href: "mailto:1macv9@gmail.com"               },
  { icon: "💼", label: "LinkedIn",  value: "linkedin.com/in/macv55",   href: "https://www.linkedin.com/in/macv55/"   },
  { icon: "🐙", label: "GitHub",    value: "github.com/Matheusvilela1",href: "https://github.com/Matheusvilela1"     },
];

export const ContatoSection: React.FC = () => (
  <section
    id="contato"
    style={{ padding: "100px 24px", background: "#0d0d0d" }}
  >
    <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
      <h2 style={{
        fontSize: "clamp(28px, 4vw, 42px)",
        fontWeight: 800,
        marginBottom: 12,
        color: "#fff",
      }}>
        Entre em <span style={{ color: "#38bdf8" }}>Contato</span>
      </h2>
      <p style={{
        color: "rgba(255,255,255,0.45)",
        fontSize: 15,
        marginBottom: 48,
      }}>
        Quer trabalhar junto ou só conversar? Manda uma mensagem!
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 40 }}>
        {CONTACT_INFOS.map(({ icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "16px 20px",
              borderRadius: 10,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              textDecoration: "none",
              color: "#fff",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)";
              e.currentTarget.style.background = "rgba(167,139,250,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            }}
          >
            <span style={{ fontSize: 20 }}>{icon}</span>
            <div style={{ textAlign: "left" }}>
              <p style={{
                margin: 0,
                fontSize: 11,
                color: "rgba(255,255,255,0.38)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}>
                {label}
              </p>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 500 }}>{value}</p>
            </div>
          </a>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
        {SOCIAL_LINKS.map((s) => <SocialIcon key={s.label} {...s} />)}
      </div>
    </div>
  </section>
);
