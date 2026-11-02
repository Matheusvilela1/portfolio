import type { SocialLink } from "../types";
import { ContactIcon } from "./ContactIcon";
import type { ContactIconName } from "./ContactIcon";

type Props = SocialLink;

// Converte o código curto de SOCIAL_LINKS ("in", "gh", "ig") no ícone SVG
const ICONS: Record<string, ContactIconName> = {
  in: "linkedin",
  gh: "github",
  ig: "instagram",
};

export const SocialIcon: React.FC<Props> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    title={label}
    className="social sel-hover"
  >
    {ICONS[icon] ? <ContactIcon name={ICONS[icon]} size={18} /> : icon}
  </a>
);
