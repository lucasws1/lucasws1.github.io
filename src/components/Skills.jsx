import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiMariadb,
  SiPrisma,
  SiExpress,
} from "react-icons/si";

const categories = [
  {
    title: "Linguagens",
    skills: [
      { name: "JavaScript", icon: <FaJs size={18} /> },
      { name: "TypeScript", icon: <SiTypescript size={18} /> },
      { name: "Java", icon: <FaJava size={18} /> },
      { name: "Python", icon: <FaPython size={18} /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact size={18} /> },
      { name: "Next.js", icon: <SiNextdotjs size={18} /> },
      { name: "HTML", icon: <FaHtml5 size={18} /> },
      { name: "CSS", icon: <FaCss3Alt size={18} /> },
    ],
  },
  {
    title: "Banco de Dados",
    skills: [
      { name: "MySQL", icon: <SiMysql size={18} /> },
      { name: "MariaDB", icon: <SiMariadb size={18} /> },
      { name: "MongoDB", icon: <SiMongodb size={18} /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={18} /> },
      { name: "Express.js", icon: <SiExpress size={18} /> },
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      { name: "Git", icon: <FaGitAlt size={18} /> },
      { name: "Prisma", icon: <SiPrisma size={18} /> },
    ],
  },
];

import FadeIn from "./FadeIn";

export function Skills() {
  return (
    <section
      id="skills"
      className="w-full max-w-4xl mx-auto px-8 py-24 flex flex-col items-center"
    >
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-16 text-center">
          Skills<span className="text-primary">.</span>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 w-full">
        {categories.map((category, i) => (
          <FadeIn key={category.title} delay={i * 0.08}>
            <div>
              <h3 className="text-white font-bold text-lg mb-4 font-outfit">
                <span className="text-primary">&lt;</span>{category.title}
                <span className="text-primary">/&gt;</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-md text-slate-300 text-sm"
                  >
                    <span className="text-primary">{skill.icon}</span>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
