import SiteHeader from "../components/site-header";
import HeroSection from "../components/hero-section";
import PerspectiveSection from "../components/perspective-section";
import ProgramSection from "../components/program-section";
import TrainingSection from "../components/training-section";
import FaqSection from "../components/faq-section";
import StartSection from "../components/start-section";

export default function HomePage() {
  return <>
    <a className="skip" href="#main">본문으로 바로가기</a>
    <SiteHeader />
    <main id="main"><HeroSection />
<PerspectiveSection />
<TrainingSection />
<ProgramSection />
<FaqSection />
<StartSection /></main>
    <footer className="footer"><div className="wrap"><strong>{"트리니티에듀랩"}</strong><p>{"© 2026 트리니티에듀랩"}<br />{"메인 데모 · 2026.09.08"}</p></div></footer>
  </>;
}
