import { useState } from "react";
import { NAV_ITEMS } from "../data";
import { useActiveSection, useScrolled } from "../hooks";

const SECTION_IDS = NAV_ITEMS.map((n) => n.id);

export const Navbar: React.FC = () => {
  const scrolled = useScrolled(60);
  const active = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const scrollTo = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <button className="brand" onClick={() => scrollTo("banner")} aria-label="Voltar ao início">
          {/* Ícone ao lado do logo — desativado. Para reativar, descomente a linha abaixo
              e as regras ".brand img" em index.css.
          <img src={`${process.env.PUBLIC_URL}/favicon.svg`} alt="" width={34} height={34} />
          */}
          <span>MV<em>.</em></span>
        </button>

        <ul className="nav__links">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`nav__link sel-hover ${active === id ? "is-active" : ""}`}
                aria-current={active === id ? "true" : undefined}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav__side">
          <span className="nav__status">Disponível</span>
          <button className="btn btn--red btn--sm" onClick={() => scrollTo("contato")}>
            Fale comigo →
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="nav__burger"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav__overlay">
          {NAV_ITEMS.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)}>{label}</button>
          ))}
        </div>
      )}
    </>
  );
};
