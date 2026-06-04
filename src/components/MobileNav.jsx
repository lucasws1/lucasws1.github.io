import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["hero", "about", "skills", "projects", "formation", "contact"];
const labels = {
  hero: "Home",
  about: "About",
  skills: "Skills",
  projects: "Projects",
  formation: "Formation",
  contact: "Contact",
};

export default function MobileNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-10% 0px -55% 0px" },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* Pill button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-primary text-primary text-sm font-semibold tracking-wide bg-transparent cursor-pointer"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
        {labels[activeSection]}
        <span className="text-xs ml-0.5">▾</span>
      </button>

      {/* Overlay + Bottom Sheet — renderizado via portal fora do DOM da navbar */}
      {createPortal(
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black/60 z-40"
              />
              <motion.div
                key="sheet"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 300 }}
                className="fixed bottom-0 left-0 right-0 z-50 rounded-t-[20px] border-t border-primary/10"
                style={{ background: "#161b22", padding: "12px 0 32px" }}
              >
                {/* Handle */}
                <div className="w-10 h-1 rounded-full bg-white/10 mx-auto mb-5" />

                {sections.map((id) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="flex items-center gap-3 w-full px-7 py-3.5 bg-transparent border-none cursor-pointer text-left"
                    style={{
                      color: activeSection === id ? "#34d399" : "#8b949e",
                      fontSize: 17,
                      fontWeight: activeSection === id ? 700 : 400,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: activeSection === id ? "#34d399" : "transparent" }}
                    />
                    {labels[id]}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
