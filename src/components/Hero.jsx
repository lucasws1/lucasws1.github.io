import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import ParticlesBg from "./ParticlesBg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[85vh] flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto px-8 gap-20 overflow-hidden"
    >
      <ParticlesBg />

      {/* Left side: Stylized frame */}
      <div className="relative z-10 w-56 h-56 shrink-0">
        <div className="absolute inset-0 border-2 border-primary"></div>
        <div className="absolute -bottom-7 -right-8 bg-dark pl-3 pr-1">
          <span className="text-primary text-5xl font-bold font-mono leading-none">
            &lt;/&gt;
          </span>
        </div>
      </div>

      {/* Right side: Text Content */}
      <div className="relative z-10 flex flex-col items-start text-left min-w-0 flex-1">
        <h1 className="text-5xl md:text-6xl font-bold font-outfit text-white mb-2 tracking-tight leading-tight">
          Olá, eu sou o
          <br />
          Lucas Schuch<span className="text-primary">.</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-8 min-h-[1.2em] whitespace-nowrap">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              1500,
              "Node.JS Developer",
              1500,
            ]}
            wrapper="span"
            speed={50}
            deletingSpeed={70}
            repeat={Infinity}
            className="bg-linear-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent"
          />
        </h2>

        {/* Tech Icons */}
        <div className="flex items-center gap-5 text-slate-500 text-3xl">
          <FaHtml5
            className="hover:text-white transition-colors duration-200"
            title="HTML5"
          />
          <FaCss3Alt
            className="hover:text-white transition-colors duration-200"
            title="CSS3"
          />
          <FaJs
            className="hover:text-white transition-colors duration-200"
            title="JavaScript"
          />
          <SiTypescript
            className="hover:text-white transition-colors duration-200"
            title="TypeScript"
          />
          <FaReact
            className="hover:text-white transition-colors duration-200"
            title="React"
          />
          <FaNodeJs
            className="hover:text-white transition-colors duration-200"
            title="Node.js"
          />
          <FaGitAlt
            className="hover:text-white transition-colors duration-200"
            title="Git"
          />
        </div>
      </div>
    </section>
  );
}
