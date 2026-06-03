export function About() {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto px-8 py-24 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
        About<span className="text-primary">.</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-30 w-full">
        {/* Left Side: Gradient Image Placeholder */}

        {/* Middle: Slanted Dark Bar */}
        <div className="flex gap-18">
          <div className="hidden md:block w-14 h-65 bg-primary/20 skew-x-[-18deg] shrink-0"></div>
          <div className="hidden md:block w-14 h-65 bg-primary/20 skew-x-[-18deg] shrink-0"></div>
        </div>

        {/* Right Side: Text */}
        <div className="flex flex-col gap-6 text-slate-300 text-sm md:text-lg text-justify leading-relaxed max-w-lg">
          <p>
            <span className="text-white font-bold">
              Desenvolvedor Full Stack
            </span>{" "}
            em transição de carreira. Atuei por ~10 anos como advogado em órgãos
            públicos e no setor privado, onde adquiri experiência em análise de
            problemas, documentação técnica e gestão de demandas sob prazo.
          </p>
          <p>
            Sou{" "}
            <span className="text-white font-bold">
              Técnico em Desenvolvimento de Sistemas
            </span>{" "}
            diplomado pelo Senac Tech e atualmente estou cursando{" "}
            <span className="text-white font-bold">
              Curso Superior de Tecnologia em Análise e Desenvolvimento de
              Sistemas
            </span>{" "}
            na PUCRS, com foco em desenvolvimento web.
          </p>
        </div>
      </div>
    </section>
  );
}
