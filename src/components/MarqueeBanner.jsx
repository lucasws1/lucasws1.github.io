import React from 'react';
import { motion } from 'framer-motion';

const MARQUEE_TEXT = "WEB / PROGRAMMING / DEVELOPMENT / JAVASCRIPT / CSS / FIGMA / GIT / HTML / ";

export function MarqueeBanner() {
  return (
    <div className="w-full bg-[#161a20] border-y border-slate-800 py-4 overflow-hidden whitespace-nowrap flex items-center">
      <motion.div
        className="inline-block text-sm md:text-base font-bold text-slate-400 tracking-widest uppercase"
        animate={{ x: [0, -1035] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15
        }}
      >
        {/* We repeat the text multiple times to ensure continuous scrolling */}
        {MARQUEE_TEXT.repeat(4)}
      </motion.div>
    </div>
  );
}
