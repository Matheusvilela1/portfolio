import { useCallback, useState } from "react";
import { CursorTrail, IntroLoader, Marquee, Navbar } from "./components";
import {
  HeroSection,
  ProjetosSection,
  TecnologiasSection,
  ProcessoSection,
  SobreSection,
  ContatoSection,
} from "./sections";

export default function App(): React.ReactElement {
  const [ready, setReady] = useState<boolean>(false);          // libera as animações do hero
  const [introDone, setIntroDone] = useState<boolean>(false);  // remove a intro do DOM

  const reveal = useCallback(() => setReady(true), []);
  const finish = useCallback(() => setIntroDone(true), []);

  return (
    <div className="app">
      {!introDone && <IntroLoader onReveal={reveal} onFinish={finish} />}
      <CursorTrail />
      <Navbar />

      <main>
        <HeroSection ready={ready} />
        <ProjetosSection />
        <Marquee />
        <TecnologiasSection />
        <ProcessoSection />
        <SobreSection />
        <ContatoSection />
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Matheus Vilela</span>
        <span>Feito com React + TypeScript</span>
      </footer>
    </div>
  );
}
