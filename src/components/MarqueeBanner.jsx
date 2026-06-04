import { motion } from "framer-motion";

const MARQUEE_TEXT =
  "WEB DEV / FULL STACK / JAVASCRIPT / HTML / CSS / REACT / NODEJS / EXPRESS.JS / NEXT.JS / GIT / FIGMA / TAILWIND / MARIADB / POSTGRESQL / MONGODB / LINUX / TYPESCRIPT / ";

export function MarqueeBanner() {
  return (
    <div className="w-full bg-[#161a20] border-y border-slate-800 py-4 overflow-hidden whitespace-nowrap flex items-center">
      <motion.div
        className="inline-block text-sm md:text-base font-bold text-slate-400 tracking-widest uppercase"
        animate={{ x: [0, -1035] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15,
        }}
      >
        {MARQUEE_TEXT.repeat(4)}
      </motion.div>
    </div>
  );
}
