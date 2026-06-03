import { useState, useEffect } from "react";

export function Navbar() {
  const links = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Formation", id: "formation" },
    { label: "Contact", id: "contact" },
  ];
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-10% 0px -55% 0px" },
    );

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md">
      <div className="w-full flex items-center justify-between py-5 px-8 max-w-7xl mx-auto">
        <div className="text-2xl font-bold font-outfit text-white tracking-tight">
          <span className="text-primary">&lt;</span>Lucas Schuch
          <span className="text-primary">/&gt;</span>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium text-slate-400">
          {links.map(({ label, id }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative py-1 font-outfit transition-colors duration-200 ${
                    isActive ? "text-white" : "hover:text-white"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-1 -left-3 -right-3 h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
