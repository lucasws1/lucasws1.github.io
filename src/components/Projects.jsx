import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import FadeIn from "./FadeIn";

const projects = [
  {
    title: "Meu Estoque",
    description:
      "Sistema de controle de estoque para MEI. Arquitetura desacoplada (API REST + frontend React) com painel administrativo em tempo real.",
    tech: ["React", "Node.js", "MariaDB", "JavaScript"],
    github: "https://github.com/lucasws1/meu-estoque",
    demo: "https://meu-estoque.duckdns.org/",
    live: true,
  },
  {
    title: "Brechó do Futuro",
    description:
      "Aplicação de e-commerce fullstack com API RESTful e painel administrativo. CRUD de produtos, carrinho de compras e controle de estoque.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/lucasws1/brecho-do-futuro",
  },
  {
    title: "Inventory Control",
    description:
      "Sistema web de controle de estoque com autenticação de usuários e painel de gerenciamento de produtos com persistência via Prisma ORM.",
    tech: ["Next.js", "TypeScript", "Prisma", "NextAuth"],
    github: "https://github.com/lucasws1/inventory-control",
  },
];

function ProjectCard({ title, description, tech, github, demo, live }) {
  return (
    <div className="bg-[#12181f] border border-white/5 rounded-xl p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          {live && (
            <span className="flex items-center gap-1.5 text-xs text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              live
            </span>
          )}
          <h3 className="text-white font-medium text-lg leading-tight">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-2.5 shrink-0 pt-1">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-primary opacity-80 hover:opacity-100 transition-opacity text-[1.15rem]"
            >
              <FaGithub />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Demo ao vivo"
              className="text-primary opacity-80 hover:opacity-100 transition-opacity text-[1.15rem]"
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed flex-1">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto px-8 py-24">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Projects<span className="text-primary">.</span>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.1}>
            <ProjectCard {...p} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
