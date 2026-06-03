import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MarqueeBanner } from "./components/MarqueeBanner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Formation } from "./components/Formation";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-dark overflow-x-hidden selection:bg-primary/80 selection:text-dark">
      <Navbar />

      <main className="w-full relative z-0 flex flex-col pb-0 pt-20">
        <Hero />
        <MarqueeBanner />
        <About />
        <Skills />
        <Formation />
        <Contact />
      </main>
    </div>
  );
}

export default App;
