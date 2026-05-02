import { Navbar } from "./components";
import {
  HeroSection,
  SobreSection,
  TecnologiasSection,
  ProjetosSection,
  ContatoSection,
} from "./sections";

export default function App(): React.ReactElement {
  return (
    <div style={{
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      color: "#fff",
      background: "#0d0d0d",
      minHeight: "100vh",
    }}>
      <Navbar />
      <HeroSection />
      <SobreSection />
      <TecnologiasSection />
      <ProjetosSection />
      <ContatoSection />

      <footer style={{
        padding: "24px",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        textAlign: "center",
        color: "rgba(255,255,255,0.25)",
        fontSize: 13,
      }}>
        © {new Date().getFullYear()} Matheus Vilela · React + TypeScript
      </footer>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
      `}</style>
    </div>
  );
}
