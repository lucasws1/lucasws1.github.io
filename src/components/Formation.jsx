import { FiArrowUpRight } from "react-icons/fi";

const formations = [
  {
    id: 1,
    date: "2026 - Presente",
    title: "Curso Superior de Tec. em Análise e Desenv. de Sistemas",
    description:
      "Curso em andamento em PUCRS - Universidade Pontifícia Católica do Rio Grande do Sul",
  },
  {
    id: 2,
    date: "2024 - 2026",
    title: "Curso Técnico em Desenvolvimento de Sistemas",
    description: "Diplomado em SENAC Tech - RS",
  },
  {
    id: 3,
    date: "2007 - 2013",
    title: "Ciências Jurídicas e Sociais",
    description: "Bacharel em Ciências Jurídicas e Sociais - PUCRS",
  },
];

export function Formation() {
  return (
    <section
      id="formation"
      className="w-full max-w-4xl mx-auto px-8 py-24 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-16 text-center">
        Formation<span className="text-primary">.</span>
      </h2>

      <div className="flex flex-col gap-12 w-full">
        {formations.map((formation) => (
          <div
            key={formation.id}
            className="flex flex-col md:flex-row gap-4 md:gap-12 w-full group cursor-default"
          >
            {/* Date */}
            <div className="md:w-1/4 shrink-0 pt-1">
              <span className="text-primary font-mono text-sm">
                {formation.date}
              </span>
            </div>

            {/* Content */}
            <div className="md:w-3/4 flex flex-col gap-2">
              <h3 className="text-white font-bold text-xl flex items-center gap-2 group-hover:text-primary transition-colors">
                {formation.title}
                <FiArrowUpRight className="text-primary opacity-70" />
              </h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                {formation.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
