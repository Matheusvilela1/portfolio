import type { SocialLink } from "../types";

type Props = SocialLink;

export const SocialIcon: React.FC<Props> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    title={label}
    className="social sel-hover"
  >
    {icon}
  </a>
);
