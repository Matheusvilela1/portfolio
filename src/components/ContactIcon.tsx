export type ContactIconName = "linkedin" | "instagram" | "email" | "phone" | "github";

interface Props {
  name: ContactIconName;
  size?: number;
}

// Ícones de traço simples desenhados à mão (herdam a cor do texto via currentColor)
const PATHS: Record<ContactIconName, React.ReactNode> = {
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3.5" />
      <path d="M8 10.5V17" />
      <circle cx="8" cy="7.4" r="1.1" fill="currentColor" stroke="none" />
      <path d="M12 17v-6.5M12 13.6c0-1.8 1.2-3 2.7-3s2.5 1 2.5 3V17" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.8 6.6 12 12.8l8.2-6.2" />
    </>
  ),
  phone: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.8" />
      <path d="M10.5 18.2h3" />
    </>
  ),
  github: (
    <>
      <circle cx="7" cy="6" r="2.2" />
      <circle cx="7" cy="18" r="2.2" />
      <circle cx="17" cy="8" r="2.2" />
      <path d="M7 8.2v7.6M17 10.2c0 3.6-3.4 4.4-8.3 6.4" />
    </>
  ),
};

export const ContactIcon: React.FC<Props> = ({ name, size = 22 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {PATHS[name]}
  </svg>
);
