import type { SocialLink } from "../types";

type Props = SocialLink;

export const SocialIcon: React.FC<Props> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.12)",
      color: "#fff",
      fontSize: 11,
      fontWeight: 700,
      fontFamily: "monospace",
      textDecoration: "none",
      transition: "background 0.2s",
      border: "1px solid rgba(255,255,255,0.25)",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.3)")}
    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
  >
    {icon}
  </a>
);
