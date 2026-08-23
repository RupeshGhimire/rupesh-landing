import { Footer, Nav, Ticker } from "./components/chrome";
import { Anatomy, Blocks, Cta, Hero, Metrics, Quickstart } from "./components/sections";

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {/* faint structural grid, fading downward */}
      <div className="bg-gridlayer absolute inset-0" />
      {/* drifting ambient glows */}
      <div className="drift">
        <div className="glow glow-ember left-[58%] top-[-12%] h-[34rem] w-[34rem]" />
        <div className="glow glow-sea bottom-[-18%] left-[-8%] h-[30rem] w-[30rem]" />
      </div>
      {/* film grain */}
      <div className="grain absolute inset-0" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink font-body text-fog">
      <Background />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <Ticker />
          <Anatomy />
          <Blocks />
          <Metrics />
          <Quickstart />
          <Cta />
        </main>
        <Footer />
      </div>
    </div>
  );
}
